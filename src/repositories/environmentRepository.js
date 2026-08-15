import { IndexedDbRepository, STORES } from "./indexedDb.js";

export class EnvironmentRepository extends IndexedDbRepository {
  constructor(database) {
    super(database, STORES.environments);
  }

  getByProjectId(projectId) {
    return this.getAllBy("projectId", projectId);
  }
}
