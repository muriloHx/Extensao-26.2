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

  async importFromJson(serializedRuleSet, group) {
    let ruleSet;
    try {
      ruleSet = JSON.parse(serializedRuleSet);
    } catch {
      throw new TypeError("Arquivo de regras inválido: JSON malformado.");
    }

    return this.save(group ? { ...ruleSet, grupo: group } : ruleSet);
  }

  async importFromYaml(serializedRuleSet, group) {
    let ruleSet;
    try {
      ruleSet = yaml.load(serializedRuleSet);
    } catch {
      throw new TypeError("Arquivo de regras inválido: YAML malformado.");
    }

    return this.save(group ? { ...ruleSet, grupo: group } : ruleSet);
  }

  /**
   * Importa vários checklists de uma vez. Cada arquivo é independente: um erro não
   * impede os demais, e as mensagens voltam prontas para a tela. O texto continua
   * sendo lido pela UI — esta camada só decide o formato pelo nome do arquivo.
   */
  async importFromEntries(entries, group) {
    const failures = [];
    let imported = 0;

    for (const entry of entries) {
      if (entry.error) {
        failures.push(`${entry.name}: ${entry.error}`);
        continue;
      }

      try {
        if (/\.json$/i.test(entry.name)) {
          await this.importFromJson(entry.content, group);
        } else {
          await this.importFromYaml(entry.content, group);
        }
        imported += 1;
      } catch (error) {
        failures.push(`${entry.name}: ${error.message}`);
      }
    }

    return { imported, failures };
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
