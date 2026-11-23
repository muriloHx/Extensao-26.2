import yaml from "js-yaml";
import { copyValue, toIsoDate } from "./model.js";
import { assertValidRuleSet } from "../core/ruleSetValidation.js";

// Metadados de persistência não fazem parte do checklist: ficam fora do arquivo
// exportado e da prévia exibida na tela.
export function portableRuleSet(ruleSet) {
  const { source, createdAt, updatedAt, ...portable } = ruleSet;
  return portable;
}

export function ruleSetToYaml(ruleSet) {
  return yaml.dump(portableRuleSet(ruleSet), { noRefs: true });
}

// O conteúdo persistido é o próprio formato de checklist consumido pelo RuleEngine.
export function createCustomRuleSet(ruleSet, { createdAt = new Date(), updatedAt = createdAt } = {}) {
  assertValidRuleSet(ruleSet);

  return {
    ...copyValue(ruleSet),
    source: "user",
    createdAt: toIsoDate(createdAt, "createdAt"),
    updatedAt: toIsoDate(updatedAt, "updatedAt")
  };
}
