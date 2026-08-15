import { createElement } from "../domain/element.js";
import { createEnvironment } from "../domain/environment.js";
import { toIsoDate } from "../domain/model.js";
import { createProject } from "../domain/project.js";

export class ProjectService {
  constructor({ projectRepository, environmentRepository, elementRepository }) {
    this.projectRepository = projectRepository;
    this.environmentRepository = environmentRepository;
    this.elementRepository = elementRepository;
  }

  async createProject(input) {
    const project = createProject(input);
    return this.projectRepository.put(project);
  }

  listProjects() {
    return this.projectRepository.getAll();
  }

  getProject(id) {
    return this.projectRepository.get(id);
  }

  async renameProject(id, name) {
    const current = await this.#require(this.projectRepository.get(id), "Projeto");
    return this.projectRepository.put(createProject({
      ...current,
      name,
      updatedAt: new Date()
    }));
  }

  async createEnvironment(projectId, input) {
    await this.#require(this.projectRepository.get(projectId), "Projeto");
    const environment = createEnvironment({ ...input, projectId });
    return this.environmentRepository.put(environment);
  }

  listEnvironments(projectId) {
    return this.environmentRepository.getByProjectId(projectId);
  }

  async renameEnvironment(id, name) {
    const current = await this.#require(this.environmentRepository.get(id), "Ambiente");
    return this.environmentRepository.put(createEnvironment({
      ...current,
      name,
      updatedAt: new Date()
    }));
  }

  async createElement(environmentId, input) {
    await this.#require(this.environmentRepository.get(environmentId), "Ambiente");
    const element = createElement({ ...input, environmentId });
    return this.elementRepository.put(element);
  }

  listElements(environmentId) {
    return this.elementRepository.getByEnvironmentId(environmentId);
  }

  async updateElement(id, changes) {
    const current = await this.#require(this.elementRepository.get(id), "Elemento");
    return this.elementRepository.put(createElement({
      ...current,
      ...changes,
      id: current.id,
      environmentId: current.environmentId,
      createdAt: current.createdAt,
      updatedAt: toIsoDate(new Date())
    }));
  }

  async #require(promise, label) {
    const entity = await promise;
    if (!entity) {
      throw new Error(`${label} não encontrado.`);
    }
    return entity;
  }
}
