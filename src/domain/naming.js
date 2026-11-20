/** Espaços nas pontas, espaços repetidos e caixa não distinguem dois nomes. */
export function normalizeName(name) {
  return String(name ?? "").trim().replace(/\s+/g, " ").toLowerCase();
}

/**
 * Já existe outro item com esse nome? `exceptId` ignora o próprio item, que é o
 * caso de salvar de novo o mesmo nome ao editar.
 */
export function isNameTaken(items, name, { exceptId } = {}) {
  const target = normalizeName(name);
  if (!target) return false;

  return (items ?? []).some(
    (item) => item.id !== exceptId && normalizeName(item?.name) === target
  );
}
