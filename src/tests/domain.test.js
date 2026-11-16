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

function createInMemoryRepositories() {
  const stores = {
    projects: new Map(),
    environments: new Map(),
    elements: new Map(),
    evaluations: new Map()
  };

  const repository = (storeName, relation) => {
    const store = stores[storeName];
    const instance = {
      async get(id) { return store.get(id); },
      async getAll() { return [...store.values()]; },
      async put(entity) { store.set(entity.id, entity); return entity; },
      async delete(id) { store.delete(id); }
    };

    if (relation) {
      instance[relation.method] = async (value) =>
        [...store.values()].filter((entity) => entity[relation.field] === value);
    }

    return instance;
  };

  return {
    projectRepository: repository("projects"),
    environmentRepository: repository("environments", {
      method: "getByProjectId",
      field: "projectId"
    }),
    elementRepository: repository("elements", {
      method: "getByEnvironmentId",
      field: "environmentId"
    }),
    evaluationRepository: repository("evaluations", {
      method: "getByElementId",
      field: "elementId"
    })
  };
}

async function createElementWithEvaluation(service, repositories, environmentId, name) {
  const element = await service.createElement(environmentId, {
    name,
    type: "porta",
    rule: "nbr9050-2020/portas"
  });
  const evaluation = {
    id: `avaliacao-${element.id}`,
    elementId: element.id,
    data: {},
    result: [],
    evaluatedAt: new Date().toISOString()
  };

  await repositories.evaluationRepository.put(evaluation);

  return { element, evaluation };
}

async function createHierarchy(service, repositories, name) {
  const project = await service.createProject({ name });
  const environment = await service.createEnvironment(project.id, {
    name: `${name} — ambiente`
  });
  const { element, evaluation } = await createElementWithEvaluation(
    service,
    repositories,
    environment.id,
    `${name} — elemento`
  );

  return { project, environment, element, evaluation };
}

test("ProjectService cria a hierarquia usando repositórios injetados", async () => {
  const repositories = createInMemoryRepositories();
  const service = new ProjectService(repositories);

  const project = await service.createProject({ name: "Escola" });
  const environment = await service.createEnvironment(project.id, { name: "Hall" });
  const { element } = await createElementWithEvaluation(
    service,
    repositories,
    environment.id,
    "Porta"
  );

  assert.equal(element.environmentId, environment.id);
  assert.equal(
    (await service.listEnvironments(project.id))[0].id,
    environment.id
  );
  assert.equal((await service.getEnvironment(environment.id)).id, environment.id);
  assert.equal((await service.getElement(element.id)).id, element.id);
});

test("deleteProject remove toda a hierarquia vinculada ao projeto", async () => {
  const repositories = createInMemoryRepositories();
  const service = new ProjectService(repositories);
  const target = await createHierarchy(service, repositories, "Escola");
  const other = await createHierarchy(service, repositories, "Clube");

  await service.deleteProject(target.project.id);

  assert.equal(await service.getProject(target.project.id), undefined);
  assert.equal(await service.getEnvironment(target.environment.id), undefined);
  assert.equal(await service.getElement(target.element.id), undefined);
  assert.equal(
    await repositories.evaluationRepository.get(target.evaluation.id),
    undefined
  );

  assert.equal((await service.getProject(other.project.id)).id, other.project.id);
  assert.equal(
    (await service.getEnvironment(other.environment.id)).id,
    other.environment.id
  );
  assert.equal((await service.getElement(other.element.id)).id, other.element.id);
  assert.equal(
    (await repositories.evaluationRepository.get(other.evaluation.id)).id,
    other.evaluation.id
  );
});

test("deleteEnvironment remove apenas o ambiente escolhido e seus vínculos", async () => {
  const repositories = createInMemoryRepositories();
  const service = new ProjectService(repositories);
  const project = await service.createProject({ name: "Escola" });
  const target = await service.createEnvironment(project.id, { name: "Hall" });
  const other = await service.createEnvironment(project.id, { name: "Pátio" });
  const targetContent = await createElementWithEvaluation(
    service,
    repositories,
    target.id,
    "Porta"
  );
  const otherContent = await createElementWithEvaluation(
    service,
    repositories,
    other.id,
    "Rampa"
  );

  await service.deleteEnvironment(target.id);

  assert.equal(await service.getEnvironment(target.id), undefined);
  assert.equal(await service.getElement(targetContent.element.id), undefined);
  assert.equal(
    await repositories.evaluationRepository.get(targetContent.evaluation.id),
    undefined
  );

  assert.equal((await service.getEnvironment(other.id)).id, other.id);
  assert.equal(
    (await service.getElement(otherContent.element.id)).id,
    otherContent.element.id
  );
  assert.equal(
    (await repositories.evaluationRepository.get(otherContent.evaluation.id)).id,
    otherContent.evaluation.id
  );
});

test("deleteElement remove apenas o elemento escolhido e suas avaliações", async () => {
  const repositories = createInMemoryRepositories();
  const service = new ProjectService(repositories);
  const project = await service.createProject({ name: "Escola" });
  const environment = await service.createEnvironment(project.id, { name: "Hall" });
  const target = await createElementWithEvaluation(
    service,
    repositories,
    environment.id,
    "Porta"
  );
  const other = await createElementWithEvaluation(
    service,
    repositories,
    environment.id,
    "Rampa"
  );

  await service.deleteElement(target.element.id);

  assert.equal(await service.getElement(target.element.id), undefined);
  assert.equal(
    await repositories.evaluationRepository.get(target.evaluation.id),
    undefined
  );
  assert.equal((await service.getElement(other.element.id)).id, other.element.id);
  assert.equal(
    (await repositories.evaluationRepository.get(other.evaluation.id)).id,
    other.evaluation.id
  );
  assert.equal((await service.getEnvironment(environment.id)).id, environment.id);
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
