export function validateValue(value, parameter) {
  if (parameter.obrigatorio && (value === undefined || value === null || value === "")) {
    return { valid: false, reason: "Campo obrigatório não preenchido." };
  }

  if (value === undefined || value === null || value === "") {
    return { valid: true };
  }

  if (parameter.tipo === "number" && typeof value !== "number") {
    return { valid: false, reason: "O valor deve ser numérico." };
  }

  if (parameter.tipo === "boolean" && typeof value !== "boolean") {
    return { valid: false, reason: "O valor deve ser booleano." };
  }

  return { valid: true };
}
