import { createId, requireText, toIsoDate } from "./model.js";

export function createProject({
  id = createId(),
  name,
  description = "",
  createdAt = new Date(),
  updatedAt = createdAt,
} = {}) {
  return {
    id: requireText(id, "id"),
    name: requireText(name, "name"),
    description: typeof description === "string" ? description.trim() : "",
    createdAt: toIsoDate(createdAt, "createdAt"),
    updatedAt: toIsoDate(updatedAt, "updatedAt"),
  };
}
