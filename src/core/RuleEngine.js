import { compare } from "./operators.js";
import { validateValue } from "./validation.js";

export class RuleEngine {
  evaluate(rules, data, parameters = {}) {
    return rules.map((rule) => this.evaluateRule(rule, data, parameters));
  }

  evaluateRule(rule, data, parameters) {
    const parameter = parameters[rule.parametro];
    const actual = data[rule.parametro];

    if (!parameter) {
      return {
        id: rule.id,
        parametro: rule.parametro,
        status: "erro",
        mensagem: `Parâmetro não definido: ${rule.parametro}`
      };
    }

    const validation = validateValue(actual, parameter);

    if (!validation.valid) {
      return {
        id: rule.id,
        nome: rule.nome,
        parametro: rule.parametro,
        status: "invalido",
        motivo: validation.motivo,
        mensagem: validation.reason,
        referencia: rule.referencia
      };
    }

    if (actual === undefined || actual === null || actual === "") {
      return {
        id: rule.id,
        nome: rule.nome,
        parametro: rule.parametro,
        status: "nao_avaliado",
        referencia: rule.referencia
      };
    }

    if (rule.tipo === "checklist") {
      // Checklists with boolean answers represent an explicit yes/no judgment.
      // Keep non-boolean checklist values as manual review items.
      if (parameter.tipo === "boolean") {
        return {
          id: rule.id,
          nome: rule.nome,
          status: actual ? "conforme" : "nao_conforme",
          valorInformado: actual,
          valorEsperado: true,
          operador: "==",
          parametro: rule.parametro,
          unidade: parameter.unidade,
          referencia: rule.referencia
        };
      }

      return {
        id: rule.id,
        nome: rule.nome,
        status: "manual",
        valor: actual,
        mensagem: rule.mensagem,
        referencia: rule.referencia
      };
    }

    if (rule.tipo === "conditional") {
      return this.evaluateConditional(rule, data, parameters);
    }

    const ok = compare(actual, rule.operador, rule.valor);

    return {
      id: rule.id,
      nome: rule.nome,
      status: ok ? "conforme" : "nao_conforme",
      valorInformado: actual,
      valorEsperado: rule.valor,
      operador: rule.operador,
      parametro: rule.parametro,
      unidade: parameter.unidade,
      referencia: rule.referencia
    };
  }

  evaluateConditional(rule, data, parameters) {
    const actual = data[rule.parametro];
    const hasValue = actual !== undefined && actual !== null && actual !== "";

    for (const branch of rule.condicoes ?? []) {
      if (branch.quando && compare(actual, branch.quando.operador, branch.quando.valor)) {
        if (branch.resultado) {
          return {
            id: rule.id,
            nome: rule.nome,
            status: branch.resultado,
            valorInformado: actual,
            referencia: rule.referencia,
            mensagem: branch.mensagem
          };
        }

        if (branch.verificar) {
          const target = data[branch.verificar.parametro];
          const ok = compare(target, branch.verificar.operador, branch.verificar.valor);

          return {
            id: rule.id,
            nome: rule.nome,
            status: ok ? "conforme" : "nao_conforme",
            valorInformado: target,
            valorEsperado: branch.verificar.valor,
            operador: branch.verificar.operador,
            parametro: branch.verificar.parametro,
            unidade: parameters[branch.verificar.parametro]?.unidade,
            parametroCondicional: rule.parametro,
            valorCondicional: actual,
            operadorCondicional: branch.quando.operador,
            limiteCondicional: branch.quando.valor,
            mensagem: branch.mensagem,
            referencia: rule.referencia
          };
        }
      }
    }

    // Nenhuma condição cobriu o valor informado: é lacuna do conjunto de
    // regras, não falta de dado. Sem valor, o resultado continua pendente.
    if (hasValue) {
      return {
        id: rule.id,
        nome: rule.nome,
        parametro: rule.parametro,
        status: "erro",
        mensagem: `Nenhuma condição cobre ${rule.parametro} = ${actual}. Revise o conjunto de regras.`,
        referencia: rule.referencia
      };
    }

    return {
      id: rule.id,
      nome: rule.nome,
      parametro: rule.parametro,
      status: "nao_avaliado",
      referencia: rule.referencia
    };
  }
}
