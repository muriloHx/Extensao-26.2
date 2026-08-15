import { createId, requireText, toIsoDate } from "./model.js";

export function createElement({
  id = createId(),
  environmentId,
  name,
  type,
  rule,
  createdAt = new Date(),
  updatedAt = createdAt
} = {}) {
  return {
    id: requireText(id, "id"),
    environmentId: requireText(environmentId, "environmentId"),
    name: requireText(name, "name"),
    type: requireText(type, "type"),
    rule: requireText(rule, "rule"),
    createdAt: toIsoDate(createdAt, "createdAt"),
    updatedAt: toIsoDate(updatedAt, "updatedAt")
  };
}
