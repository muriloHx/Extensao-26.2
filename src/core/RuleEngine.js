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
        status: "erro",
        mensagem: `Parâmetro não definido: ${rule.parametro}`
      };
    }

    const validation = validateValue(actual, parameter);

    if (!validation.valid) {
      return {
        id: rule.id,
        nome: rule.nome,
        status: "invalido",
        mensagem: validation.reason,
        referencia: rule.referencia
      };
    }

    if (actual === undefined || actual === null || actual === "") {
      return {
        id: rule.id,
        nome: rule.nome,
        status: "nao_avaliado",
        referencia: rule.referencia
      };
    }

    if (rule.tipo === "checklist") {
      return {
        id: rule.id,
        nome: rule.nome,
        status: "manual",
        valor: actual,
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
      unidade: parameter.unidade,
      referencia: rule.referencia
    };
  }

  evaluateConditional(rule, data, parameters) {
    for (const branch of rule.condicoes ?? []) {
      const actual = data[rule.parametro];

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
            referencia: rule.referencia
          };
        }
      }
    }

    return {
      id: rule.id,
      nome: rule.nome,
      status: "nao_avaliado",
      referencia: rule.referencia
    };
  }
}
