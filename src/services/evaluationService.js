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

const NON_CONFORMING_STATUSES = ["nao_conforme", "erro", "invalido"];
const PENDING_STATUSES = ["atencao", "manual", "nao_avaliado"];

// A avaliação consolidada representa a última execução de cada elemento.
// Histórico anterior continua disponível em listEvaluations.
export function getEvaluationStatus(evaluations) {
  const result = evaluations[0]?.result;

  if (!result?.length) return "nao_avaliado";
  if (result.some((item) => NON_CONFORMING_STATUSES.includes(item.status))) {
    return "nao_conforme";
  }
  if (result.some((item) => PENDING_STATUSES.includes(item.status))) {
    return "nao_avaliado";
  }

  return "conforme";
}

// Serviço de aplicação: coordena o motor de regras e o histórico local.
// A função evaluateChecklist acima permanece pura para uso direto e compatibilidade.
export class EvaluationService {
  constructor({
    elementRepository,
    environmentRepository,
    evaluationRepository,
    ruleEngine = new RuleEngine()
  }) {
    this.elementRepository = elementRepository;
    this.environmentRepository = environmentRepository;
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

  async getEnvironmentSummary(environmentId) {
    const elements = await this.elementRepository.getByEnvironmentId(environmentId);
    return this.#summarizeElements(elements);
  }

  async getProjectSummary(projectId) {
    if (!this.environmentRepository) {
      throw new Error("Repositório de ambientes não configurado.");
    }

    const environments = await this.environmentRepository.getByProjectId(projectId);
    const elementsByEnvironment = await Promise.all(
      environments.map((environment) =>
        this.elementRepository.getByEnvironmentId(environment.id)
      )
    );

    return this.#summarizeElements(elementsByEnvironment.flat());
  }

  async #summarizeElements(elements) {
    const statuses = await Promise.all(
      elements.map(async (element) =>
        getEvaluationStatus(await this.listEvaluations(element.id))
      )
    );

    const summary = {
      totalElements: elements.length,
      conforme: 0,
      nao_conforme: 0,
      nao_avaliado: 0,
      pendente: 0,
      score: 0,
      overallStatus: "nao_avaliado"
    };

    for (const status of statuses) summary[status] += 1;
    summary.pendente = summary.nao_avaliado;
    summary.score = summary.totalElements
      ? Math.round((summary.conforme / summary.totalElements) * 100)
      : 0;

    if (summary.nao_conforme > 0) summary.overallStatus = "nao_conforme";
    else if (summary.nao_avaliado === 0 && summary.totalElements > 0) {
      summary.overallStatus = "conforme";
    }

    return summary;
  }
}
