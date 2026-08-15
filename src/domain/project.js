import { createId, requireText, toIsoDate } from "./model.js";

export function createProject({
  id = createId(),
  name,
  createdAt = new Date(),
  updatedAt = createdAt
} = {}) {
  return {
    id: requireText(id, "id"),
    name: requireText(name, "name"),
    createdAt: toIsoDate(createdAt, "createdAt"),
    updatedAt: toIsoDate(updatedAt, "updatedAt")
  };
}
