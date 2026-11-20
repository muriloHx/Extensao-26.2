import { firstMatchingCondition } from "./conditions.js";
import { formatExpected } from "./formatExpected.js";
import { parseDecimalInput } from "./numberInput.js";

// Critérios de um mesmo campo aparecem na ordem de leitura: mínimo, igualdade e
// máximo. Operadores fora dessa lista vão para o fim.
const CHECK_ORDER = [">=", ">", "==", "eq", "!=", "<", "<="];

function checkOrder(operator) {
  const index = CHECK_ORDER.indexOf(operator);
  return index === -1 ? CHECK_ORDER.length : index;
}

// O campo numérico guarda texto enquanto o usuário digita: compara como número.
function valueAsEngineSees(parameter, rawValue) {
  return parameter?.tipo === "number" ? parseDecimalInput(rawValue) : rawValue;
}

// Critérios que uma regra impõe: os da própria regra, ou os do ramo condicional
// alcançado pelo valor já informado.
function checksOfRule(rule, checklist, data) {
  if (rule.tipo === "conditional") {
    const actual = valueAsEngineSees(
      checklist?.parametros?.[rule.parametro],
      data?.[rule.parametro]
    );

    if (actual === undefined || actual === null || actual === "") return [];

    const branch = firstMatchingCondition(rule, actual);
    return branch?.verificar ? [branch.verificar] : [];
  }

  return rule.operador && rule.valor !== undefined ? [rule] : [];
}

/**
 * Critério esperado por parâmetro, pronto para exibir junto do campo
 * ("No mínimo 0,9 m"). Deriva das mesmas regras que o RuleEngine avalia e escolhe
 * o ramo condicional do mesmo jeito, via firstMatchingCondition.
 */
export function expectedCriteria(checklist, data) {
  const expected = {};

  for (const rule of checklist?.regras ?? []) {
    for (const check of checksOfRule(rule, checklist, data)) {
      if (!check.parametro || check.valor === undefined) continue;

      expected[check.parametro] ??= [];

      const description = formatExpected(
        check.operador,
        check.valor,
        checklist?.parametros?.[check.parametro]?.unidade
      );

      if (expected[check.parametro].some((item) => item.description === description)) continue;

      expected[check.parametro].push({ description, order: checkOrder(check.operador) });
    }
  }

  return Object.fromEntries(
    Object.entries(expected).map(([key, checks]) => [
      key,
      checks.sort((a, b) => a.order - b.order).map((item) => item.description),
    ])
  );
}

/** Parâmetros cujo critério é julgamento humano: não há valor esperado a exibir. */
export function manualParameters(checklist) {
  const manual = new Set();

  for (const rule of checklist?.regras ?? []) {
    if (rule.tipo === "checklist" && rule.parametro) manual.add(rule.parametro);
  }

  return manual;
}

/** O botão de ajuda só aparece quando há algo para mostrar. */
export function hasParameterHelp(parameter, expected = [], manual = false) {
  return Boolean(parameter?.definicao) || expected.length > 0 || manual;
}
