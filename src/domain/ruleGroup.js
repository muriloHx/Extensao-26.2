function folderId(path = "") {
  const segments = path.replace(/^(\.\.\/|\.\/|\/)+/, "").split("/");
  return segments.length > 1 ? segments.slice(0, -1).join("/") : "";
}

function builtInGroupName(ruleSets, id) {
  const [first] = ruleSets;
  const norm = first?.norma;
  if (norm?.nome) return `${norm.nome}${norm.versao ? ` · ${norm.versao}` : ""}`;
  return id.split("/").at(-1)?.replaceAll("-", " ") ?? "Regras padrão";
}

/**
 * Agrupa checklists para a biblioteca. Cada arquivo continua sendo um checklist
 * avaliável; a pasta que o contém é o conjunto exibido ao usuário.
 */
export function groupBuiltInRuleSets(entries) {
  const groups = new Map();
  for (const entry of entries) {
    const id = folderId(entry.path) || entry.ruleSet.id;
    const group = groups.get(id) ?? { id, source: "standard", ruleSets: [] };
    group.ruleSets.push(entry.ruleSet);
    groups.set(id, group);
  }
  return [...groups.values()]
    .map((group) => ({ ...group, nome: builtInGroupName(group.ruleSets, group.id) }))
    .sort((left, right) => left.nome.localeCompare(right.nome));
}

/** Agrupa importações feitas juntas ou que compartilham os metadados de pasta. */
export function groupCustomRuleSets(ruleSets) {
  const groups = new Map();
  for (const ruleSet of ruleSets) {
    const metadata = ruleSet.grupo;
    const id = metadata?.id ?? ruleSet.id;
    const group = groups.get(id) ?? {
      id,
      nome: metadata?.nome ?? ruleSet.nome,
      source: "user",
      ruleSets: []
    };
    group.ruleSets.push(ruleSet);
    groups.set(id, group);
  }
  return [...groups.values()].sort((left, right) => left.nome.localeCompare(right.nome));
}
