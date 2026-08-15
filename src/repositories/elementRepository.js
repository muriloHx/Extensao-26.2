import { IndexedDbRepository, STORES } from "./indexedDb.js";

export class ElementRepository extends IndexedDbRepository {
  constructor(database) {
    super(database, STORES.elements);
  }

  getByEnvironmentId(environmentId) {
    return this.getAllBy("environmentId", environmentId);
  }
}
