import { IndexedDbRepository, STORES } from "./indexedDb.js";

export class EvaluationRepository extends IndexedDbRepository {
  constructor(database) {
    super(database, STORES.evaluations);
  }

  getByElementId(elementId) {
    return this.getAllBy("elementId", elementId);
  }
}
