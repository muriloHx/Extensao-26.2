import { RuleEngine } from "../core/RuleEngine.js";
import { createEvaluation } from "../domain/evaluation.js";

export function evaluateChecklist(checklist, data) {
  const engine = new RuleEngine();

  return engine.evaluate(
    checklist.regras ?? [],
    data,
    checklist.parametros ?? {}
  );
}

// Serviço de aplicação: coordena o motor de regras e o histórico local.
// A função evaluateChecklist acima permanece pura para uso direto e compatibilidade.
export class EvaluationService {
  constructor({ elementRepository, evaluationRepository, ruleEngine = new RuleEngine() }) {
    this.elementRepository = elementRepository;
    this.evaluationRepository = evaluationRepository;
    this.ruleEngine = ruleEngine;
  }

  async evaluateElement({ elementId, checklist, data, evaluatedAt }) {
    const element = await this.elementRepository.get(elementId);
    if (!element) {
      throw new Error("Elemento não encontrado.");
    }

    const result = this.ruleEngine.evaluate(
      checklist.regras ?? [],
      data,
      checklist.parametros ?? {}
    );
    const evaluation = createEvaluation({ elementId, data, result, evaluatedAt });

    return this.evaluationRepository.put(evaluation);
  }

  async listEvaluations(elementId) {
    const evaluations = await this.evaluationRepository.getByElementId(elementId);
    return evaluations.sort((left, right) => right.evaluatedAt.localeCompare(left.evaluatedAt));
  }
}
