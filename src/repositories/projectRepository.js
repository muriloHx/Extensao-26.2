import { IndexedDbRepository, STORES } from "./indexedDb.js";

export class ProjectRepository extends IndexedDbRepository {
  constructor(database) {
    super(database, STORES.projects);
  }
}
