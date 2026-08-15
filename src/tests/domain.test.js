import assert from "node:assert/strict";
import test from "node:test";
import { createElement } from "../domain/element.js";
import { createEnvironment } from "../domain/environment.js";
import { createEvaluation } from "../domain/evaluation.js";
import { createProject } from "../domain/project.js";
import { EvaluationService } from "../services/evaluationService.js";
import { ProjectService } from "../services/projectService.js";

test("entidades de domínio geram IDs e datas serializáveis", () => {
  const project = createProject({ name: "Escola" });
  const environment = createEnvironment({ projectId: project.id, name: "Entrada" });
  const element = createElement({
    environmentId: environment.id,
    name: "Porta principal",
    type: "porta",
    rule: "nbr9050-2020/portas"
  });
  const evaluation = createEvaluation({
    elementId: element.id,
    data: { largura: 80 },
    result: [{ status: "conforme" }]
  });

  for (const entity of [project, environment, element, evaluation]) {
    assert.match(entity.id, /.+/);
  }
  assert.equal(new Date(project.createdAt).toISOString(), project.createdAt);
  assert.deepEqual(JSON.parse(JSON.stringify(evaluation)).data, { largura: 80 });
});

test("ProjectService cria a hierarquia usando repositórios injetados", async () => {
  const records = new Map();
  const repository = (indexField) => ({
    async get(id) { return records.get(id); },
    async getAll() { return [...records.values()]; },
    async getByProjectId(id) { return [...records.values()].filter((item) => item.projectId === id); },
    async getByEnvironmentId(id) { return [...records.values()].filter((item) => item.environmentId === id); },
    async put(item) { records.set(item.id, item); return item; },
    async delete(id) { records.delete(id); }
  });
  const projects = repository();
  const environments = repository();
  const elements = repository();
  const service = new ProjectService({
    projectRepository: projects,
    environmentRepository: environments,
    elementRepository: elements
  });

  const project = await service.createProject({ name: "Escola" });
  const environment = await service.createEnvironment(project.id, { name: "Hall" });
  const element = await service.createElement(environment.id, {
    name: "Porta",
    type: "porta",
    rule: "nbr9050-2020/portas"
  });

  assert.equal(element.environmentId, environment.id);
  assert.equal((await service.listEnvironments(project.id))[0].id, environment.id);
});

test("EvaluationService persiste o resultado do RuleEngine", async () => {
  const element = { id: "elemento-1" };
  let saved;
  const service = new EvaluationService({
    elementRepository: { async get(id) { return id === element.id ? element : undefined; } },
    evaluationRepository: {
      async put(evaluation) { saved = evaluation; return evaluation; },
      async getByElementId() { return saved ? [saved] : []; }
    }
  });

  const evaluation = await service.evaluateElement({
    elementId: element.id,
    checklist: {
      parametros: { largura: { tipo: "number", unidade: "cm", obrigatorio: true } },
      regras: [{ id: "largura", nome: "Largura", parametro: "largura", operador: ">=", valor: 80 }]
    },
    data: { largura: 80 }
  });

  assert.equal(evaluation.result[0].status, "conforme");
  assert.equal(saved.elementId, element.id);
});
