import assert from "node:assert/strict";
import test from "node:test";
import { EvaluationService, getEvaluationStatus } from "../services/evaluationService.js";

function createService() {
  const evaluations = new Map([
    ["elemento-1", [
      { evaluatedAt: "2026-01-01T10:00:00.000Z", result: [{ status: "conforme" }] },
      { evaluatedAt: "2026-02-01T10:00:00.000Z", result: [{ status: "nao_conforme" }] }
    ]],
    ["elemento-2", [{ evaluatedAt: "2026-02-01T10:00:00.000Z", result: [{ status: "conforme" }] }]],
    ["elemento-3", []]
  ]);

  return new EvaluationService({
    environmentRepository: {
      async getByProjectId() { return [{ id: "ambiente-1" }, { id: "ambiente-2" }]; }
    },
    elementRepository: {
      async getByEnvironmentId(environmentId) {
        return environmentId === "ambiente-1"
          ? [{ id: "elemento-1" }, { id: "elemento-2" }]
          : [{ id: "elemento-3" }];
      }
    },
    evaluationRepository: {
      async getByElementId(elementId) { return evaluations.get(elementId) ?? []; }
    }
  });
}

test("getEnvironmentSummary consolida o status da última avaliação de cada elemento", async () => {
  const summary = await createService().getEnvironmentSummary("ambiente-1");

  assert.deepEqual(summary, {
    totalElements: 2,
    conforme: 1,
    nao_conforme: 1,
    nao_avaliado: 0,
    pendente: 0,
    score: 50,
    overallStatus: "nao_conforme"
  });
});

test("getProjectSummary soma elementos de todos os ambientes do projeto", async () => {
  const summary = await createService().getProjectSummary("projeto-1");

  assert.equal(summary.totalElements, 3);
  assert.equal(summary.conforme, 1);
  assert.equal(summary.nao_conforme, 1);
  assert.equal(summary.nao_avaliado, 1);
  assert.equal(summary.pendente, 1);
  assert.equal(summary.score, 33);
  assert.equal(summary.overallStatus, "nao_conforme");
});

function createAnswersService() {
  const stored = [];
  const service = new EvaluationService({
    elementRepository: {
      async get(elementId) { return { id: elementId }; }
    },
    evaluationRepository: {
      async put(evaluation) { stored.push(evaluation); return evaluation; },
      async getByElementId(elementId) { return stored.filter((item) => item.elementId === elementId); }
    }
  });

  return { service, stored };
}

const larguraChecklist = {
  parametros: { largura: { tipo: "number", unidade: "cm" } },
  regras: [{ id: "r1", nome: "Largura mínima", parametro: "largura", operador: ">=", valor: 80 }]
};

test("saveElementAnswers roda o motor quando há respostas preenchidas", async () => {
  const { service, stored } = createAnswersService();

  await service.saveElementAnswers({
    elementId: "elemento-1",
    checklist: larguraChecklist,
    data: { largura: 90 }
  });

  assert.equal(stored.length, 1);
  assert.equal(stored[0].data.largura, 90);
  assert.deepEqual(stored[0].result.map((item) => item.status), ["conforme"]);
  assert.equal(getEvaluationStatus(stored), "conforme");
});

test("saveElementAnswers sem respostas guarda rascunho pendente", async () => {
  const { service, stored } = createAnswersService();

  await service.saveElementAnswers({
    elementId: "elemento-1",
    checklist: larguraChecklist,
    data: {}
  });

  assert.equal(stored.length, 1);
  assert.deepEqual(stored[0].result, []);
  assert.equal(getEvaluationStatus(stored), "nao_avaliado");
});
