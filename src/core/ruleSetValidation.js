import { SUPPORTED_OPERATORS } from "./operators.js";

const RULE_TYPES = new Set(["checklist", "conditional"]);

// Campos que o motor ignora em cada tipo de regra: aceitar em silêncio foi como
// uma regra checklist com condicoes completas passou sem nunca ser avaliada.
const IGNORED_RULE_FIELDS = {
  checklist: ["condicoes", "operador", "valor"],
  conditional: ["operador", "valor"],
  direta: ["condicoes"]
};
const PARAMETER_TYPES = new Set(["number", "boolean", "select"]);
const RESULT_STATUSES = new Set([
  "conforme",
  "nao_conforme",
  "nao_avaliado",
  "atencao",
  "manual"
]);

function isRecord(value) {
  return value !== null && typeof value === "object" && !Array.isArray(value);
}

function requireText(value, path, errors) {
  if (typeof value !== "string" || value.trim() === "") {
    errors.push(`${path} deve ser um texto não vazio.`);
  }
}

function validateOperator(operator, path, errors) {
  if (!SUPPORTED_OPERATORS.has(operator)) {
    errors.push(`${path} deve ser um operador suportado.`);
  }
}

function validateComparison(comparison, path, errors) {
  if (!isRecord(comparison)) {
    errors.push(`${path} deve ser um objeto.`);
    return;
  }

  validateOperator(comparison.operador, `${path}.operador`, errors);
  if (!("valor" in comparison)) {
    errors.push(`${path}.valor é obrigatório.`);
  }
}

function validateParameters(parameters, errors) {
  for (const [key, parameter] of Object.entries(parameters)) {
    const path = `parametros.${key}`;

    if (!isRecord(parameter)) {
      errors.push(`${path} deve ser um objeto.`);
      continue;
    }

    if (!PARAMETER_TYPES.has(parameter.tipo)) {
      errors.push(`${path}.tipo deve ser number, boolean ou select.`);
    }

    if (parameter.tipo === "select" && (!Array.isArray(parameter.opcoes) || parameter.opcoes.length === 0)) {
      errors.push(`${path}.opcoes deve listar as opções do campo do tipo select.`);
    }

    if ("unidade" in parameter && !isValidUnit(parameter.unidade)) {
      errors.push(`${path}.unidade deve ser um texto ou { singular, plural }.`);
    }
  }
}

// Um valor está coberto quando alguma condição o alcança: igualdade com ele ou
// desigualdade em relação a outro valor ("!= x" cobre tudo menos x).
function coversValue(comparisons, value) {
  return comparisons.some((comparison) =>
    comparison.operador === "=="
      ? comparison.valor === value
      : comparison.operador === "!=" && comparison.valor !== value
  );
}

// Condição sem ramo que cubra o valor informado faz a regra terminar em erro na
// avaliação. Para números, o ramo final precisa ser ">" ou ">="; para boolean
// e select, cada valor possível precisa ser alcançado por alguma condição.
function coversAllValues(branches, parameter) {
  const comparisons = branches
    .map((branch) => (isRecord(branch) ? branch.quando : null))
    .filter(isRecord);

  if (comparisons.some((comparison) => comparison.operador === ">" || comparison.operador === ">=")) {
    return true;
  }

  if (parameter.tipo === "boolean") {
    return [true, false].every((value) => coversValue(comparisons, value));
  }

  if (parameter.tipo === "select") {
    return (parameter.opcoes ?? []).every((option) => coversValue(comparisons, option));
  }

  return false;
}

function isValidUnit(unit) {
  if (typeof unit === "string") return true;
  return isRecord(unit)
    && typeof unit.singular === "string" && unit.singular.trim() !== ""
    && typeof unit.plural === "string" && unit.plural.trim() !== "";
}

function rejectIgnoredFields(rule, path, errors) {
  const tipo = rule.tipo ?? "direta";
  const ignorados = (IGNORED_RULE_FIELDS[tipo] ?? []).filter((field) => field in rule);
  if (ignorados.length) {
    errors.push(
      `${path} não usa ${ignorados.join(", ")} em regra do tipo ${tipo}; o motor ignora esse campo.`
    );
  }
}

function validateRule(rule, index, parameters, errors) {
  const path = `regras[${index}]`;
  if (!isRecord(rule)) {
    errors.push(`${path} deve ser um objeto.`);
    return;
  }

  rejectIgnoredFields(rule, path, errors);

  requireText(rule.id, `${path}.id`, errors);
  requireText(rule.nome, `${path}.nome`, errors);
  requireText(rule.parametro, `${path}.parametro`, errors);
  if (typeof rule.parametro === "string" && !(rule.parametro in parameters)) {
    errors.push(`${path}.parametro deve existir em parametros.`);
  }

  if (rule.tipo === "checklist") {
    const parameter = parameters[rule.parametro];
    // Julgamento humano precisa dizer o que julgar: a linha do resultado mostra
    // a mensagem junto do status "Verificar".
    if (isRecord(parameter) && parameter.tipo !== "boolean" && (typeof rule.mensagem !== "string" || rule.mensagem.trim() === "")) {
      errors.push(`${path}.mensagem é obrigatória em regra checklist de campo ${parameter.tipo}: descreva o critério de julgamento.`);
    }
    return;
  }

  if (rule.tipo === "conditional") {
    if (!Array.isArray(rule.condicoes) || rule.condicoes.length === 0) {
      errors.push(`${path}.condicoes deve conter ao menos uma condição.`);
      return;
    }

    rule.condicoes.forEach((branch, branchIndex) => {
      const branchPath = `${path}.condicoes[${branchIndex}]`;
      if (!isRecord(branch)) {
        errors.push(`${branchPath} deve ser um objeto.`);
        return;
      }
      validateComparison(branch.quando, `${branchPath}.quando`, errors);

      const hasResult = typeof branch.resultado === "string" && branch.resultado !== "";
      const hasCheck = "verificar" in branch;
      if (hasResult === hasCheck) {
        errors.push(`${branchPath} deve informar exatamente resultado ou verificar.`);
      }
      if (hasResult && !RESULT_STATUSES.has(branch.resultado)) {
        errors.push(`${branchPath}.resultado deve ser um de: ${[...RESULT_STATUSES].join(", ")}.`);
      }
      if (hasCheck) {
        validateComparison(branch.verificar, `${branchPath}.verificar`, errors);
        if (typeof branch.verificar?.parametro !== "string" || !(branch.verificar.parametro in parameters)) {
          errors.push(`${branchPath}.verificar.parametro deve existir em parametros.`);
        }
      }
    });

    const driver = parameters[rule.parametro];
    if (isRecord(driver) && !coversAllValues(rule.condicoes, driver)) {
      errors.push(
        `${path}.condicoes deve cobrir todos os valores de ${rule.parametro}: `
        + "inclua um ramo final com operador \">\" ou \">=\", ou um ramo para cada opção do campo."
      );
    }
    return;
  }

  if (rule.tipo !== undefined && !RULE_TYPES.has(rule.tipo)) {
    errors.push(`${path}.tipo não é suportado.`);
  }
  validateOperator(rule.operador, `${path}.operador`, errors);
  if (!("valor" in rule)) {
    errors.push(`${path}.valor é obrigatório.`);
  }
}

/** Retorna erros de formato antes que regras externas sejam persistidas ou avaliadas. */
export function validateRuleSet(ruleSet) {
  const errors = [];
  if (!isRecord(ruleSet)) {
    return { valid: false, errors: ["O conjunto de regras deve ser um objeto."] };
  }

  requireText(ruleSet.id, "id", errors);
  requireText(ruleSet.nome, "nome", errors);
  if (!isRecord(ruleSet.parametros)) {
    errors.push("parametros deve ser um objeto.");
  }
  if (!Array.isArray(ruleSet.regras)) {
    errors.push("regras deve ser uma lista.");
  }

  if (isRecord(ruleSet.parametros) && Array.isArray(ruleSet.regras)) {
    validateParameters(ruleSet.parametros, errors);
    ruleSet.regras.forEach((rule, index) => validateRule(rule, index, ruleSet.parametros, errors));
  }

  return { valid: errors.length === 0, errors };
}

export function assertValidRuleSet(ruleSet) {
  const validation = validateRuleSet(ruleSet);
  if (!validation.valid) {
    throw new TypeError(`Conjunto de regras inválido: ${validation.errors.join(" ")}`);
  }
  return ruleSet;
}
