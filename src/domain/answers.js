import { parseDecimalInput } from "../core/numberInput.js";

/**
 * Converte as respostas digitadas na tela no dado que o RuleEngine avalia.
 *
 * Campo vazio fica de fora — o motor é quem decide se isso vira `nao_avaliado`
 * (opcional) ou `invalido` (obrigatório). Número ilegível também sai: melhor
 * ausente do que NaN. O campo numérico guarda texto enquanto o usuário digita.
 */
export function normalizeAnswers(checklist, data = {}) {
  const answers = {};

  for (const [key, parameter] of Object.entries(checklist?.parametros ?? {})) {
    const rawValue = data[key];

    if (rawValue === "" || rawValue === undefined || rawValue === null) continue;

    if (parameter.tipo === "number") {
      const parsed = parseDecimalInput(rawValue);
      if (parsed !== null) answers[key] = parsed;
    } else if (parameter.tipo === "boolean") {
      answers[key] = rawValue === true || rawValue === "true";
    } else {
      answers[key] = rawValue;
    }
  }

  return answers;
}
