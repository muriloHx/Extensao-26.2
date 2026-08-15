import { assertValidRuleSet } from "../core/ruleSetValidation.js";
import { createCustomRuleSet } from "../domain/ruleSet.js";
import yaml from "js-yaml";

/**
 * Coordena conjuntos de regras locais. A UI pode obter texto de um File e passá-lo
 * a importFromJson; não há I/O de arquivos nem rede nesta camada.
 */
export class RuleSetService {
  constructor({ ruleSetRepository }) {
    this.ruleSetRepository = ruleSetRepository;
  }

  list() {
    return this.ruleSetRepository.getAll();
  }

  get(id) {
    return this.ruleSetRepository.get(id);
  }

  async save(ruleSet) {
    const current = await this.ruleSetRepository.get(ruleSet.id);
    const stored = createCustomRuleSet(ruleSet, {
      createdAt: current?.createdAt ?? new Date(),
      updatedAt: new Date()
    });
    return this.ruleSetRepository.put(stored);
  }

  async importFromJson(serializedRuleSet) {
    let ruleSet;
    try {
      ruleSet = JSON.parse(serializedRuleSet);
    } catch {
      throw new TypeError("Arquivo de regras inválido: JSON malformado.");
    }

    return this.save(ruleSet);
  }

  async importFromYaml(serializedRuleSet) {
    let ruleSet;
    try {
      ruleSet = yaml.load(serializedRuleSet);
    } catch {
      throw new TypeError("Arquivo de regras inválido: YAML malformado.");
    }

    return this.save(ruleSet);
  }

  exportToJson(ruleSet) {
    assertValidRuleSet(ruleSet);
    const { source, createdAt, updatedAt, ...portableRuleSet } = ruleSet;
    return JSON.stringify(portableRuleSet, null, 2);
  }

  exportToYaml(ruleSet) {
    assertValidRuleSet(ruleSet);
    const { source, createdAt, updatedAt, ...portableRuleSet } = ruleSet;
    return yaml.dump(portableRuleSet, { noRefs: true });
  }

  async exportByIdToJson(id) {
    const ruleSet = await this.ruleSetRepository.get(id);
    if (!ruleSet) throw new Error("Conjunto de regras não encontrado.");
    return this.exportToJson(ruleSet);
  }

  async exportByIdToYaml(id) {
    const ruleSet = await this.ruleSetRepository.get(id);
    if (!ruleSet) throw new Error("Conjunto de regras não encontrado.");
    return this.exportToYaml(ruleSet);
  }

  delete(id) {
    return this.ruleSetRepository.delete(id);
  }
}
