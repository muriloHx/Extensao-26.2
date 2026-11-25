import { requestToPromise, STORES } from "../repositories/indexedDb.js";
import { isSupabaseConfigured, supabase } from "./supabaseClient.js";

const SNAPSHOT_VERSION = 1;
const STORE_NAMES = Object.values(STORES);
const AUTO_SYNC_INTERVAL = 30000;
const TABLE = "snapshots";

function transactionDone(transaction) {
  return new Promise((resolve, reject) => {
    transaction.oncomplete = resolve;
    transaction.onabort = transaction.onerror = () => reject(
      transaction.error ?? new Error("Transação IndexedDB não concluída.")
    );
  });
}

// JSONB não preserva a ordem das chaves; o hash precisa ser estável para o
// auto-sync não reenviar o snapshot a cada ciclo.
function stableStringify(value) {
  if (Array.isArray(value)) {
    return `[${value.map(stableStringify).join(",")}]`;
  }
  if (value && typeof value === "object") {
    const keys = Object.keys(value).sort();
    return `{${keys.map((key) => `${JSON.stringify(key)}:${stableStringify(value[key])}`).join(",")}}`;
  }
  return JSON.stringify(value);
}

function readStorage(key) {
  try {
    return globalThis.localStorage?.getItem(key) ?? null;
  } catch {
    return null;
  }
}

function writeStorage(key, value) {
  try {
    if (value == null) globalThis.localStorage?.removeItem(key);
    else globalThis.localStorage?.setItem(key, value);
  } catch {
    // Sem localStorage (modo privado): a sessão continua, só não persiste o atalho.
  }
}

export class CloudSyncService {
  constructor({ database }) {
    this.database = database;
    this.user = null;
    this.listeners = new Set();
    this.initPromise = null;
    this.authSubscription = null;
    this.timer = null;
    this.syncing = false;
    this.needsChoice = false;
    this.lastUploadedHash = "";
    this.lastSyncedAt = null;
    this.onlineHandler = null;
    this.visibilityHandler = null;
    this.status = {
      state: isSupabaseConfigured ? "local" : "disabled",
      lastSyncedAt: null,
      error: "",
      needsChoice: false
    };
  }

  init() {
    if (!this.initPromise) this.initPromise = this.#initialize();
    return this.initPromise;
  }

  async #initialize() {
    if (!isSupabaseConfigured) {
      this.#setStatus({ state: "disabled" });
      return;
    }

    this.#startAutoSync();

    try {
      const { data, error } = await supabase.auth.getSession();
      if (error) throw error;
      if (data.session?.user) await this.#activate(data.session.user);
    } catch (error) {
      this.#fail(error);
    }

    const { data } = supabase.auth.onAuthStateChange((_event, session) => {
      const user = session?.user ?? null;
      setTimeout(() => {
        if (user) this.#activate(user).catch((error) => this.#fail(error));
        else this.#deactivate();
      }, 0);
    });
    this.authSubscription = data.subscription;
  }

  getUser() {
    return this.user;
  }

  getStatus() {
    return { ...this.status };
  }

  // A checagem é local: compara o snapshot atual com o último enviado, sem
  // consultar a nuvem. Serve para avisar antes de sair da conta.
  async hasUnsyncedChanges() {
    if (!this.user) return false;
    const snapshot = await this.#readSnapshot();
    if (this.#isEmpty(snapshot) && !this.lastUploadedHash) return false;
    return this.#hash(snapshot) !== this.lastUploadedHash;
  }

  subscribe(listener) {
    this.listeners.add(listener);
    listener(this.getStatus());
    return () => this.listeners.delete(listener);
  }

  async signUp({ name, email, password }) {
    this.#assertConfigured();
    const { data, error } = await supabase.auth.signUp({
      email: email.trim(),
      password,
      options: { data: { name: name.trim() } }
    });

    if (error) throw new Error(this.#translateAuthError(error.message));
    if (data.session?.user) {
      await this.#activate(data.session.user);
      return { needsConfirmation: false };
    }

    return { needsConfirmation: true };
  }

  async signIn({ email, password }) {
    this.#assertConfigured();
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email.trim(),
      password
    });

    if (error) throw new Error(this.#translateAuthError(error.message));
    if (data.session?.user) await this.#activate(data.session.user);
  }

  async signOut() {
    this.#assertConfigured();
    const { error } = await supabase.auth.signOut();
    if (error) throw new Error(error.message);
    this.#deactivate();
  }

  async syncNow() {
    if (!this.user) throw new Error("Entre na sua conta para sincronizar.");
    if (this.syncing) throw new Error("Aguarde a sincronização em andamento.");
    const snapshot = await this.#readSnapshot();

    // Sem histórico de sync, uma base vazia é um dispositivo novo e deve
    // receber a nuvem; com histórico, o vazio é uma exclusão local.
    if (this.#isEmpty(snapshot) && !this.lastUploadedHash) {
      await this.download();
      return;
    }

    await this.#uploadSnapshot(snapshot);
  }

  async upload() {
    if (!this.user) throw new Error("Entre na sua conta para enviar os dados.");
    if (this.syncing) throw new Error("Aguarde a sincronização em andamento.");
    const snapshot = await this.#readSnapshot();
    if (this.#isEmpty(snapshot)) {
      throw new Error("Não há dados locais para enviar.");
    }
    await this.#uploadSnapshot(snapshot);
  }

  async download() {
    if (!this.user) throw new Error("Entre na sua conta para baixar os dados.");
    if (this.syncing) throw new Error("Aguarde a sincronização em andamento.");
    this.syncing = true;
    this.#setStatus({ state: "syncing", error: "" });

    try {
      const remote = await this.#fetchRemote();
      const snapshot = this.#normalizeSnapshot(remote?.data);

      if (!remote || this.#isEmpty(snapshot)) {
        throw new Error("Ainda não há dados salvos na nuvem.");
      }

      await this.#applyRemote(remote);
    } catch (error) {
      this.#fail(error);
      throw error;
    } finally {
      this.syncing = false;
    }
  }

  dispose() {
    if (this.timer) clearInterval(this.timer);
    this.timer = null;
    if (this.onlineHandler) globalThis.removeEventListener?.("online", this.onlineHandler);
    if (this.visibilityHandler) globalThis.document?.removeEventListener?.("visibilitychange", this.visibilityHandler);
    this.authSubscription?.unsubscribe?.();
    this.listeners.clear();
  }

  async #activate(user) {
    if (this.user?.id === user.id) return;

    const previousUserId = readStorage("cloud.lastUserId");
    if (previousUserId && previousUserId !== user.id) {
      await this.#clearLocal();
    }
    writeStorage("cloud.lastUserId", user.id);

    this.user = user;
    this.needsChoice = false;
    this.lastUploadedHash = readStorage(this.#storageKey("hash")) ?? "";
    this.lastSyncedAt = this.#readDate(readStorage(this.#storageKey("syncedAt")));
    this.#setStatus({
      state: "syncing",
      lastSyncedAt: this.lastSyncedAt,
      error: "",
      needsChoice: false
    });

    await this.#reconcile();
  }

  #deactivate() {
    this.user = null;
    this.needsChoice = false;
    this.lastUploadedHash = "";
    this.lastSyncedAt = null;
    this.#setStatus({
      state: isSupabaseConfigured ? "local" : "disabled",
      lastSyncedAt: null,
      error: "",
      needsChoice: false
    });
  }

  async #reconcile() {
    const remote = await this.#fetchRemote();
    const local = await this.#readSnapshot();

    if (!remote) {
      if (!this.#isEmpty(local)) await this.#uploadSnapshot(local);
      else this.#markSynced(new Date());
      return;
    }

    const remoteSnapshot = this.#normalizeSnapshot(remote.data);

    if (this.#isEmpty(remoteSnapshot)) {
      if (!this.#isEmpty(local)) await this.#uploadSnapshot(local);
      else this.#markSynced(this.#remoteDate(remote));
      return;
    }

    if (this.#isEmpty(local)) {
      // Um dispositivo que já sincronizou e ficou vazio foi esvaziado aqui:
      // enviar o snapshot vazio é o que propaga a exclusão para a nuvem.
      if (this.lastUploadedHash) await this.#uploadSnapshot(local);
      else await this.#applyRemote(remote);
      return;
    }

    if (this.#hash(local) === this.lastUploadedHash) {
      await this.#applyRemote(remote);
      return;
    }

    const remoteChanged = Boolean(
      this.lastSyncedAt && this.#remoteDate(remote) > this.lastSyncedAt
    );

    // Sem mudança remota desde o último sync, as alterações locais são deste
    // dispositivo e podem subir direto.
    if (this.lastUploadedHash && !remoteChanged) {
      await this.#uploadSnapshot(local);
      return;
    }

    this.needsChoice = true;
    this.#setStatus({ state: "pending", needsChoice: true, error: "" });
  }

  async #uploadSnapshot(snapshot) {
    this.syncing = true;
    this.#setStatus({ state: "syncing", error: "" });

    try {
      const { error } = await supabase
        .from(TABLE)
        .upsert(
          {
            user_id: this.user.id,
            data: snapshot,
            updated_at: new Date().toISOString()
          },
          { onConflict: "user_id" }
        );

      if (error) throw new Error(this.#translateDbError(error));

      this.lastUploadedHash = this.#hash(snapshot);
      writeStorage(this.#storageKey("hash"), this.lastUploadedHash);
      this.#markSynced(new Date());
    } catch (error) {
      this.#fail(error);
      throw error;
    } finally {
      this.syncing = false;
    }
  }

  async #applyRemote(remote) {
    const snapshot = this.#normalizeSnapshot(remote.data);
    await this.#replaceLocal(snapshot);
    this.lastUploadedHash = this.#hash(snapshot);
    writeStorage(this.#storageKey("hash"), this.lastUploadedHash);
    this.#markSynced(this.#remoteDate(remote));

    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("cloud-data-restored"));
    }
  }

  #markSynced(date) {
    this.lastSyncedAt = date;
    this.needsChoice = false;
    writeStorage(this.#storageKey("syncedAt"), date.toISOString());
    this.#setStatus({
      state: "synced",
      lastSyncedAt: date,
      error: "",
      needsChoice: false
    });
  }

  async #fetchRemote() {
    const { data, error } = await supabase
      .from(TABLE)
      .select("data, updated_at")
      .eq("user_id", this.user.id)
      .maybeSingle();

    if (error) throw new Error(this.#translateDbError(error));
    return data ?? null;
  }

  async #readSnapshot() {
    const transaction = this.database.transaction(STORE_NAMES, "readonly");
    const done = transactionDone(transaction);
    const requests = STORE_NAMES.map((name) =>
      requestToPromise(transaction.objectStore(name).getAll())
    );

    let results;
    try {
      results = await Promise.all(requests);
      await done;
    } catch (error) {
      done.catch(() => {});
      throw error;
    }

    const stores = {};
    STORE_NAMES.forEach((name, index) => {
      stores[name] = results[index];
    });

    return {
      version: SNAPSHOT_VERSION,
      exportedAt: new Date().toISOString(),
      stores
    };
  }

  async #replaceLocal(snapshot) {
    const normalized = this.#normalizeSnapshot(snapshot);
    const transaction = this.database.transaction(STORE_NAMES, "readwrite");
    const done = transactionDone(transaction);

    try {
      for (const name of STORE_NAMES) {
        const store = transaction.objectStore(name);
        store.clear();
        for (const record of normalized.stores[name]) store.put(record);
      }
    } catch (error) {
      try {
        transaction.abort();
      } catch {
        // A transação já pode ter sido abortada pelo próprio IndexedDB.
      }
      done.catch(() => {});
      throw error;
    }

    await done;
  }

  async #clearLocal() {
    const transaction = this.database.transaction(STORE_NAMES, "readwrite");
    const done = transactionDone(transaction);

    for (const name of STORE_NAMES) transaction.objectStore(name).clear();
    await done;
  }

  #normalizeSnapshot(raw) {
    if (!raw || (typeof raw === "object" && Object.keys(raw).length === 0)) {
      return this.#emptySnapshot();
    }

    if (raw.version !== SNAPSHOT_VERSION || !raw.stores) {
      throw new Error("Os dados salvos na nuvem estão em um formato não reconhecido.");
    }

    const stores = {};
    for (const name of STORE_NAMES) {
      if (!Array.isArray(raw.stores[name])) {
        throw new Error("Os dados salvos na nuvem estão incompletos.");
      }
      stores[name] = raw.stores[name];
    }

    return { version: SNAPSHOT_VERSION, stores };
  }

  #emptySnapshot() {
    return {
      version: SNAPSHOT_VERSION,
      stores: Object.fromEntries(STORE_NAMES.map((name) => [name, []]))
    };
  }

  #isEmpty(snapshot) {
    return STORE_NAMES.every((name) => (snapshot.stores?.[name]?.length ?? 0) === 0);
  }

  #hash(snapshot) {
    return stableStringify({ version: snapshot.version, stores: snapshot.stores });
  }

  #storageKey(suffix) {
    return `cloud.${suffix}.${this.user?.id ?? "anon"}`;
  }

  #readDate(value) {
    if (!value) return null;
    const date = new Date(value);
    return Number.isNaN(date.getTime()) ? null : date;
  }

  #remoteDate(remote) {
    return this.#readDate(remote?.updated_at) ?? new Date();
  }

  #startAutoSync() {
    if (this.timer) return;

    this.onlineHandler = () => {
      if (this.user) this.#autoSync();
    };
    this.visibilityHandler = () => {
      if (this.user && document.visibilityState === "visible") this.#autoSync();
    };

    globalThis.addEventListener?.("online", this.onlineHandler);
    globalThis.document?.addEventListener?.("visibilitychange", this.visibilityHandler);
    this.timer = setInterval(() => this.#autoSync(), AUTO_SYNC_INTERVAL);
  }

  async #autoSync() {
    if (!this.user || this.syncing || this.needsChoice) return;
    if (globalThis.document?.visibilityState === "hidden") return;

    try {
      const snapshot = await this.#readSnapshot();
      if (this.#isEmpty(snapshot) && !this.lastUploadedHash) return;
      if (this.#hash(snapshot) === this.lastUploadedHash) return;

      // Sem alterações locais não há motivo para marcar offline nem acessar a
      // nuvem; o aviso só aparece quando existe algo esperando envio.
      if (typeof navigator !== "undefined" && !navigator.onLine) {
        this.#setStatus({ state: "offline" });
        return;
      }

      await this.#uploadSnapshot(snapshot);
    } catch (error) {
      this.#fail(error);
    }
  }

  #fail(error) {
    const auth = this.#isAuthError(error);
    this.#setStatus({
      state: auth ? "auth" : "error",
      error: error?.message ?? "Não foi possível sincronizar."
    });
  }

  #isAuthError(error) {
    return error?.status === 401
      || /\bjwt\b|\btoken\b|\bsession\b|unauthorized|401/i.test(error?.message ?? "");
  }

  #setStatus(patch) {
    this.status = { ...this.status, ...patch };
    for (const listener of this.listeners) listener(this.getStatus());
  }

  #assertConfigured() {
    if (!isSupabaseConfigured) {
      throw new Error("O Supabase não está configurado neste ambiente.");
    }
  }

  #translateAuthError(message = "") {
    const normalized = message.toLowerCase();

    if (normalized.includes("invalid login credentials")) {
      return "E-mail ou senha incorretos.";
    }
    if (normalized.includes("user already registered")) {
      return "Já existe uma conta com este e-mail.";
    }
    if (normalized.includes("email not confirmed")) {
      return "Confirme seu e-mail antes de entrar.";
    }
    if (normalized.includes("password should be at least")) {
      return "A senha precisa ter pelo menos 6 caracteres.";
    }
    if (normalized.includes("invalid email") || normalized.includes("unable to validate email")) {
      return "E-mail inválido.";
    }
    if (normalized.includes("signups not allowed")) {
      return "O cadastro está desativado neste projeto.";
    }

    return message || "Não foi possível autenticar.";
  }

  #translateDbError(error) {
    if (error?.code === "42P01") {
      return "A tabela de sincronização ainda não existe no Supabase.";
    }
    if (error?.code === "42501" || error?.status === 403) {
      return "Sem permissão para acessar os dados. Confira as policies de RLS.";
    }
    if (/failed to fetch|network/i.test(error?.message ?? "")) {
      return "Não foi possível conectar ao Supabase.";
    }
    return error?.message || "Não foi possível acessar os dados na nuvem.";
  }
}
