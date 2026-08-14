import { RuleEngine } from "../core/RuleEngine.js";

export function evaluateChecklist(checklist, data) {
  const engine = new RuleEngine();

  return engine.evaluate(
    checklist.regras ?? [],
    data,
    checklist.parametros ?? {}
  );
}
