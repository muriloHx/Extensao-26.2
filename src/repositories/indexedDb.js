export const DATABASE_NAME = "acessibilidade-checker";
export const DATABASE_VERSION = 2;

export const STORES = Object.freeze({
  projects: "projects",
  environments: "environments",
  elements: "elements",
  evaluations: "evaluations",
  ruleSets: "ruleSets"
});

export function requestToPromise(request) {
  return new Promise((resolve, reject) => {
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error ?? new Error("Falha no IndexedDB."));
  });
}

export function openDatabase(indexedDB = globalThis.indexedDB) {
  if (!indexedDB) {
    return Promise.reject(new Error("IndexedDB não está disponível neste ambiente."));
  }

  const request = indexedDB.open(DATABASE_NAME, DATABASE_VERSION);

  request.onupgradeneeded = () => {
    const database = request.result;

    if (!database.objectStoreNames.contains(STORES.projects)) {
      database.createObjectStore(STORES.projects, { keyPath: "id" });
    }
    if (!database.objectStoreNames.contains(STORES.environments)) {
      const store = database.createObjectStore(STORES.environments, { keyPath: "id" });
      store.createIndex("projectId", "projectId", { unique: false });
    }
    if (!database.objectStoreNames.contains(STORES.elements)) {
      const store = database.createObjectStore(STORES.elements, { keyPath: "id" });
      store.createIndex("environmentId", "environmentId", { unique: false });
    }
    if (!database.objectStoreNames.contains(STORES.evaluations)) {
      const store = database.createObjectStore(STORES.evaluations, { keyPath: "id" });
      store.createIndex("elementId", "elementId", { unique: false });
      store.createIndex("evaluatedAt", "evaluatedAt", { unique: false });
    }
    if (!database.objectStoreNames.contains(STORES.ruleSets)) {
      database.createObjectStore(STORES.ruleSets, { keyPath: "id" });
    }
  };

  return requestToPromise(request);
}

export async function withStore(database, storeName, mode, operation) {
  const transaction = database.transaction(storeName, mode);
  const store = transaction.objectStore(storeName);
  const result = await operation(store);

  await new Promise((resolve, reject) => {
    transaction.oncomplete = resolve;
    transaction.onabort = transaction.onerror = () => reject(
      transaction.error ?? new Error("Transação IndexedDB não concluída.")
    );
  });

  return result;
}

export class IndexedDbRepository {
  constructor(database, storeName) {
    this.database = database;
    this.storeName = storeName;
  }

  get(id) {
    return withStore(this.database, this.storeName, "readonly", (store) =>
      requestToPromise(store.get(id))
    );
  }

  getAll() {
    return withStore(this.database, this.storeName, "readonly", (store) =>
      requestToPromise(store.getAll())
    );
  }

  getAllBy(indexName, value) {
    return withStore(this.database, this.storeName, "readonly", (store) =>
      requestToPromise(store.index(indexName).getAll(value))
    );
  }

  put(entity) {
    return withStore(this.database, this.storeName, "readwrite", async (store) => {
      await requestToPromise(store.put(entity));
      return entity;
    });
  }

  delete(id) {
    return withStore(this.database, this.storeName, "readwrite", (store) =>
      requestToPromise(store.delete(id))
    );
  }
}
