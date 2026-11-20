import { compare } from "./operators.js";

/**
 * Primeiro ramo de uma regra condicional cujo `quando` casa com o valor informado
 * e que efetivamente decide algo (`resultado` ou `verificar`).
 *
 * O motor de regras e a exibição do critério precisam escolher o mesmo ramo: é o
 * que garante que o "Esperado" na tela corresponda ao que o motor julga.
 */
export function firstMatchingCondition(rule, actual) {
  for (const branch of rule?.condicoes ?? []) {
    if (!branch?.quando) continue;
    if (!compare(actual, branch.quando.operador, branch.quando.valor)) continue;
    if (branch.resultado || branch.verificar) return branch;
  }

  return undefined;
}
