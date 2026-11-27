function requireText(value, field) {
  if (typeof value !== "string" || value.trim() === "") {
    throw new TypeError(`${field} deve ser um texto não vazio.`);
  }

  return value.trim();
}

export function createId() {
  if (typeof globalThis.crypto?.randomUUID === "function") {
    return globalThis.crypto.randomUUID();
  }

  // Compatibilidade com navegadores que ainda não expõem randomUUID.
  return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;
}

export function toIsoDate(value = new Date(), field = "data") {
  const date = value instanceof Date ? value : new Date(value);

  if (Number.isNaN(date.getTime())) {
    throw new TypeError(`${field} deve ser uma data válida.`);
  }

  return date.toISOString();
}

export function copyValue(value) {
  if (typeof structuredClone === "function") {
    try {
      return structuredClone(value);
    } catch (error) {
      // Resultados do motor podem carregar referências a objetos reativos do
      // Vue (como unidades { singular, plural }); Proxies não são clonáveis,
      // mas o conteúdo continua serializável.
      if (error?.name !== "DataCloneError") throw error;
    }
  }

  return JSON.parse(JSON.stringify(value));
}

export { requireText };
