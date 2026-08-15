import { SUPPORTED_OPERATORS } from "./operators.js";

const RULE_TYPES = new Set(["checklist", "conditional"]);

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

function validateRule(rule, index, parameters, errors) {
  const path = `regras[${index}]`;
  if (!isRecord(rule)) {
    errors.push(`${path} deve ser um objeto.`);
    return;
  }

  requireText(rule.id, `${path}.id`, errors);
  requireText(rule.nome, `${path}.nome`, errors);
  requireText(rule.parametro, `${path}.parametro`, errors);
  if (typeof rule.parametro === "string" && !(rule.parametro in parameters)) {
    errors.push(`${path}.parametro deve existir em parametros.`);
  }

  if (rule.tipo === "checklist") return;

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
      if (hasCheck) {
        validateComparison(branch.verificar, `${branchPath}.verificar`, errors);
        if (typeof branch.verificar?.parametro !== "string" || !(branch.verificar.parametro in parameters)) {
          errors.push(`${branchPath}.verificar.parametro deve existir em parametros.`);
        }
      }
    });
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
