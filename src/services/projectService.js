import { createElement } from "../domain/element.js";
import { createEnvironment } from "../domain/environment.js";
import { toIsoDate } from "../domain/model.js";
import { isNameTaken, normalizeName } from "../domain/naming.js";
import { createProject } from "../domain/project.js";

export class ProjectService {
  constructor({
    projectRepository,
    environmentRepository,
    elementRepository,
    evaluationRepository
  }) {
    this.projectRepository = projectRepository;
    this.environmentRepository = environmentRepository;
    this.elementRepository = elementRepository;
    this.evaluationRepository = evaluationRepository;
  }

  async createProject(input) {
    const project = createProject(input);

    await this.#assertNameFree({
      items: this.projectRepository.getAll(),
      name: project.name,
      message: "Já existe um projeto com esse nome."
    });

    return this.projectRepository.put(project);
  }

  listProjects() {
    return this.projectRepository.getAll();
  }

  getProject(id) {
    return this.projectRepository.get(id);
  }

  async updateProject(id, { name, description }) {
    const current = await this.#require(this.projectRepository.get(id), "Projeto");

    await this.#assertNameFree({
      items: this.projectRepository.getAll(),
      name,
      currentName: current.name,
      exceptId: id,
      message: "Já existe um projeto com esse nome."
    });

    return this.projectRepository.put(createProject({
      ...current,
      name,
      description,
      updatedAt: new Date()
    }));
  }

  async renameProject(id, name) {
    const current = await this.#require(this.projectRepository.get(id), "Projeto");
    return this.updateProject(id, { name, description: current.description });
  }

  async createEnvironment(projectId, input) {
    await this.#require(this.projectRepository.get(projectId), "Projeto");
    const environment = createEnvironment({ ...input, projectId });

    await this.#assertNameFree({
      items: this.environmentRepository.getByProjectId(projectId),
      name: environment.name,
      message: "Já existe um ambiente com esse nome neste projeto."
    });

    return this.environmentRepository.put(environment);
  }

  listEnvironments(projectId) {
    return this.environmentRepository.getByProjectId(projectId);
  }

  getEnvironment(id) {
    return this.environmentRepository.get(id);
  }

  async renameEnvironment(id, name) {
    const current = await this.#require(this.environmentRepository.get(id), "Ambiente");

    await this.#assertNameFree({
      items: this.environmentRepository.getByProjectId(current.projectId),
      name,
      currentName: current.name,
      exceptId: id,
      message: "Já existe um ambiente com esse nome neste projeto."
    });

    return this.environmentRepository.put(createEnvironment({
      ...current,
      name,
      updatedAt: new Date()
    }));
  }

  async createElement(environmentId, input) {
    await this.#require(this.environmentRepository.get(environmentId), "Ambiente");
    const element = createElement({ ...input, environmentId });

    await this.#assertNameFree({
      items: this.elementRepository.getByEnvironmentId(environmentId),
      name: element.name,
      message: "Já existe um elemento com esse nome neste ambiente."
    });

    return this.elementRepository.put(element);
  }

  listElements(environmentId) {
    return this.elementRepository.getByEnvironmentId(environmentId);
  }

  getElement(id) {
    return this.elementRepository.get(id);
  }

  async updateElement(id, changes) {
    const current = await this.#require(this.elementRepository.get(id), "Elemento");

    await this.#assertNameFree({
      items: this.elementRepository.getByEnvironmentId(current.environmentId),
      name: changes.name ?? current.name,
      currentName: current.name,
      exceptId: id,
      message: "Já existe um elemento com esse nome neste ambiente."
    });

    return this.elementRepository.put(createElement({
      ...current,
      ...changes,
      id: current.id,
      environmentId: current.environmentId,
      createdAt: current.createdAt,
      updatedAt: toIsoDate(new Date())
    }));
  }

  // Exclusões em cascata: o vínculo vive nos campos projectId, environmentId
  // e elementId, então cada nível remove seus descendentes antes de sair.
  async deleteElement(id) {
    const evaluations = await this.evaluationRepository.getByElementId(id);

    await Promise.all(
      evaluations.map((evaluation) =>
        this.evaluationRepository.delete(evaluation.id)
      )
    );

    await this.elementRepository.delete(id);
  }

  async deleteEnvironment(id) {
    const elements = await this.elementRepository.getByEnvironmentId(id);

    await Promise.all(elements.map((element) => this.deleteElement(element.id)));

    await this.environmentRepository.delete(id);
  }

  async deleteProject(id) {
    const environments = await this.environmentRepository.getByProjectId(id);

    await Promise.all(
      environments.map((environment) => this.deleteEnvironment(environment.id))
    );

    await this.projectRepository.delete(id);
  }

  async #require(promise, label) {
    const entity = await promise;
    if (!entity) {
      throw new Error(`${label} não encontrado.`);
    }
    return entity;
  }

  /**
   * Um nome só é recusado quando passa a ocupar o lugar de outro item. Renomear
   * sem mudar o nome nunca é conflito — é o que evita bloquear dado antigo que já
   * tenha dois registros com o mesmo nome.
   */
  async #assertNameFree({ items, name, currentName, exceptId, message }) {
    if (currentName !== undefined && normalizeName(name) === normalizeName(currentName)) {
      return;
    }

    if (isNameTaken(await items, name, { exceptId })) {
      throw new Error(message);
    }
  }
}
