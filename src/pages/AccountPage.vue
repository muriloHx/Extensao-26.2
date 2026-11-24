<script setup>
import { CloudDownload, CloudUpload, LogOut, UserRound } from "@lucide/vue";
import { computed, inject, onBeforeUnmount, onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import ErrorMessage from "../components/ErrorMessage.vue";
import PageHeader from "../components/PageHeader.vue";

const services = inject("services");
const confirmPopup = inject("confirmPopup");
const router = useRouter();
const cloud = services.cloudSyncService;

const mode = ref("login");
const name = ref("");
const email = ref("");
const password = ref("");
const error = ref("");
const notice = ref("");
const busy = ref(false);
const status = ref(cloud.getStatus());
const user = ref(cloud.getUser());
let unsubscribe = null;

const configured = computed(() => status.value.state !== "disabled");
const isSignedIn = computed(() => Boolean(user.value));
const displayError = computed(() => error.value || status.value.error);
const profileName = computed(() =>
  user.value?.user_metadata?.name?.trim()
  || user.value?.email?.split("@")[0]
  || "Seu perfil"
);

const lastSyncedText = computed(() => {
  const date = status.value.lastSyncedAt;
  if (!date) return "";
  return new Intl.DateTimeFormat("pt-BR", {
    dateStyle: "short",
    timeStyle: "short"
  }).format(new Date(date));
});

const statusLabel = computed(() => {
  switch (status.value.state) {
    case "disabled":
      return "Nuvem não configurada";
    case "syncing":
      return "Sincronizando…";
    case "pending":
      return "Alterações pendentes";
    case "offline":
      return "Offline";
    case "error":
      return "Falha ao sincronizar";
    case "auth":
      return "Sessão expirada";
    case "synced":
      return "Sincronizado";
    default:
      return "Somente neste dispositivo";
  }
});

const statusDetail = computed(() => {
  switch (status.value.state) {
    case "local":
      return "Crie uma conta para guardar uma cópia dos seus dados na nuvem.";
    case "syncing":
      return "Enviando os dados mais recentes.";
    case "pending":
      return status.value.needsChoice
        ? "Há dados neste dispositivo e na nuvem. Envie os locais ou baixe os da nuvem."
        : "As alterações serão enviadas automaticamente.";
    case "offline":
      return "Sem conexão. As alterações continuam salvas neste dispositivo.";
    case "error":
      return "Tente novamente; seus dados locais não foram alterados.";
    case "auth":
      return "Sua sessão expirou. Entre novamente para retomar a sincronização.";
    case "synced":
      return lastSyncedText.value
        ? `Última sincronização em ${lastSyncedText.value}.`
        : "Seus dados estão salvos na nuvem.";
    default:
      return "";
  }
});

function toggleMode() {
  mode.value = mode.value === "login" ? "signup" : "login";
  error.value = "";
  notice.value = "";
}

async function submit() {
  busy.value = true;
  error.value = "";
  notice.value = "";

  try {
    if (mode.value === "signup") {
      const result = await cloud.signUp({
        name: name.value,
        email: email.value,
        password: password.value
      });

      if (result.needsConfirmation) {
        notice.value = "Conta criada. Confirme o e-mail para entrar.";
        mode.value = "login";
        password.value = "";
      } else {
        password.value = "";
        name.value = "";
      }
    } else {
      await cloud.signIn({ email: email.value, password: password.value });
      password.value = "";
    }
  } catch (cause) {
    error.value = cause.message;
  } finally {
    busy.value = false;
  }
}

async function logout() {
  busy.value = true;
  error.value = "";
  notice.value = "";

  try {
    await cloud.signOut();
    password.value = "";
  } catch (cause) {
    error.value = cause.message;
  } finally {
    busy.value = false;
  }
}

async function syncNow() {
  busy.value = true;
  error.value = "";
  notice.value = "";

  try {
    await cloud.syncNow();
    notice.value = "Dados enviados para a nuvem.";
  } catch (cause) {
    error.value = cause.message;
  } finally {
    busy.value = false;
  }
}

function download() {
  confirmPopup.open({
    title: "Baixar os dados da nuvem?",
    details: "Projetos, ambientes, elementos, avaliações e regras personalizadas deste dispositivo serão substituídos pelo que está salvo na conta.",
    acceptLabel: "Baixar da nuvem",
    onAccept: async () => {
      busy.value = true;
      error.value = "";
      notice.value = "";

      try {
        await cloud.download();
        await router.push("/projects");
      } catch (cause) {
        error.value = cause.message;
      } finally {
        busy.value = false;
      }
    }
  });
}

onMounted(async () => {
  try {
    await cloud.init();
  } catch (cause) {
    error.value = cause.message;
  }

  status.value = cloud.getStatus();
  user.value = cloud.getUser();
  unsubscribe = cloud.subscribe((next) => {
    status.value = next;
    user.value = cloud.getUser();
  });
});

onBeforeUnmount(() => unsubscribe?.());
</script>

<template>
  <PageHeader
    title="Conta"
    description="Guarde uma cópia dos seus dados na nuvem."
  />

  <section v-if="!configured" class="card account-card">
    <h2>Nuvem não configurada</h2>
    <p>
      Defina <code>VITE_SUPABASE_URL</code> e
      <code>VITE_SUPABASE_PUBLISHABLE_KEY</code> no arquivo <code>.env</code>
      para habilitar a sincronização.
    </p>
  </section>

  <form
    v-else-if="!isSignedIn"
    class="form-card collection-form account-form"
    @submit.prevent="submit"
  >
    <div class="collection-form__heading">
      <h2>{{ mode === "login" ? "Entrar" : "Criar conta" }}</h2>
      <p>
        {{ mode === "login"
          ? "Acesse sua conta para sincronizar os dados."
          : "Crie uma conta para guardar os dados na nuvem." }}
      </p>
    </div>

    <div class="fields-grid">
      <label v-if="mode === 'signup'" class="field">
        <span>Nome</span>
        <input v-model="name" required autocomplete="name" />
      </label>

      <label class="field">
        <span>E-mail</span>
        <input v-model="email" type="email" required autocomplete="email" />
      </label>

      <label class="field">
        <span>Senha</span>
        <input
          v-model="password"
          type="password"
          required
          minlength="6"
          :autocomplete="mode === 'login' ? 'current-password' : 'new-password'"
        />
      </label>
    </div>

    <ErrorMessage :message="error" />
    <p v-if="notice" class="account-note" role="status">{{ notice }}</p>

    <div class="form-actions">
      <button class="text-button" type="button" @click="toggleMode">
        {{ mode === "login" ? "Criar conta" : "Já tenho conta" }}
      </button>
      <button class="button" type="submit" :disabled="busy">
        {{ busy ? "Aguarde…" : mode === "login" ? "Entrar" : "Criar conta" }}
      </button>
    </div>

    <p class="account-note">
      Você pode continuar usando o app sem conta; os dados ficam neste dispositivo.
    </p>
  </form>

  <div v-else class="account-stack">
    <section class="card account-card account-card--profile">
      <div class="account-card__identity">
        <span class="card__icon"><UserRound :size="22" aria-hidden="true" /></span>
        <div>
          <h2>{{ profileName }}</h2>
          <p>{{ user.email }}</p>
        </div>
      </div>

      <button class="button button--ghost" type="button" :disabled="busy" @click="logout">
        <LogOut :size="18" aria-hidden="true" />
        Sair
      </button>
    </section>

    <section class="card account-card" aria-live="polite">
      <div class="account-status" :class="`account-status--${status.state}`">
        <span class="account-status__dot" aria-hidden="true"></span>
        <div>
          <h2>{{ statusLabel }}</h2>
          <p class="account-note">{{ statusDetail }}</p>
        </div>
      </div>

      <ErrorMessage :message="displayError" />
      <p v-if="notice" class="account-note" role="status">{{ notice }}</p>

      <div class="account-actions">
        <button class="button" type="button" :disabled="busy" @click="syncNow">
          <CloudUpload :size="18" aria-hidden="true" />
          {{ status.needsChoice ? "Enviar dados locais" : "Sincronizar agora" }}
        </button>
        <button class="button button--ghost" type="button" :disabled="busy" @click="download">
          <CloudDownload :size="18" aria-hidden="true" />
          Baixar da nuvem
        </button>
      </div>
    </section>
  </div>
</template>
