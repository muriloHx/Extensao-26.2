import { createId, requireText, toIsoDate } from "./model.js";

export function createEnvironment({
  id = createId(),
  projectId,
  name,
  createdAt = new Date(),
  updatedAt = createdAt
} = {}) {
  return {
    id: requireText(id, "id"),
    projectId: requireText(projectId, "projectId"),
    name: requireText(name, "name"),
    createdAt: toIsoDate(createdAt, "createdAt"),
    updatedAt: toIsoDate(updatedAt, "updatedAt")
  };
}
