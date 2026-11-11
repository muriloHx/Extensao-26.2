// Tratamento do que o usuário digita em campos numéricos.
// A digitação é filtrada no ato, em vez de aceitar texto e ignorar o valor depois.

// Mantém apenas dígitos e o primeiro separador decimal digitado (vírgula ou ponto).
// Letras, sinais, espaços e separadores extras são descartados.
export function sanitizeDecimalInput(raw) {
  const cleaned = String(raw ?? "").replace(/[^\d.,]/g, "");
  const separatorIndex = cleaned.search(/[.,]/);

  if (separatorIndex === -1) return cleaned;

  const integer = cleaned.slice(0, separatorIndex);
  const separator = cleaned[separatorIndex];
  const decimals = cleaned.slice(separatorIndex + 1).replace(/[.,]/g, "");

  return `${integer === "" ? "0" : integer}${separator}${decimals}`;
}

// Converte o texto do campo em número, aceitando vírgula ou ponto.
// Retorna null quando o campo está vazio ou não representa um número.
export function parseDecimalInput(raw) {
  const text = String(raw ?? "").trim().replace(",", ".");

  if (!/^\d*\.?\d*$/.test(text) || text === "" || text === ".") return null;

  const value = Number(text);
  return Number.isFinite(value) ? value : null;
}
