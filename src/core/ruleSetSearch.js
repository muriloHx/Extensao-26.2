function includes(value, query) {
  return String(value ?? "").toLowerCase().includes(query);
}

/**
 * Busca de checklist no seletor: procura no nome do elemento, no nome da norma e
 * nas regras internas (nome ou id). Busca vazia mostra tudo.
 */
export function matchesRuleSetQuery(ruleSet, search) {
  const query = String(search ?? "").toLowerCase().trim();
  if (!query) return true;

  const matchNome = includes(ruleSet?.nome, query);
  const matchNorma = includes(ruleSet?.norma?.nome, query);
  const matchRegras = (ruleSet?.regras ?? []).some(
    (rule) => includes(rule?.nome, query) || includes(rule?.id, query)
  );

  return matchNome || matchNorma || matchRegras;
}
