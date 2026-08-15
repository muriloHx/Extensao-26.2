import { IndexedDbRepository, STORES } from "./indexedDb.js";

// Conjuntos criados/importados pelo usuário; regras oficiais permanecem no bundle.
export class RuleSetRepository extends IndexedDbRepository {
  constructor(database) {
    super(database, STORES.ruleSets);
  }
}
