import { copyValue, toIsoDate } from "./model.js";
import { assertValidRuleSet } from "../core/ruleSetValidation.js";

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
