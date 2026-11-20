/**
 * Nome livre para um elemento novo.
 *
 * Ao editar um elemento, ele não pode conflitar consigo mesmo: por isso o próprio
 * id sai da lista em namesInUse antes de gerar o nome.
 */
export function uniqueName(baseName, takenNames = []) {
  if (!baseName) return "";

  const taken = new Set(takenNames);
  if (!taken.has(baseName)) return baseName;

  let counter = 1;
  while (taken.has(`${baseName} (${counter})`)) counter += 1;

  return `${baseName} (${counter})`;
}

/** Nomes já usados no ambiente, ignorando o elemento que está sendo editado. */
export function namesInUse(elements = [], { exceptId } = {}) {
  return elements.filter((item) => item.id !== exceptId).map((item) => item.name);
}
