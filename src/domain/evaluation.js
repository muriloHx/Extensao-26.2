import { copyValue, createId, requireText, toIsoDate } from "./model.js";

export function createEvaluation({
  id = createId(),
  elementId,
  data,
  result,
  evaluatedAt = new Date()
} = {}) {
  if (data === undefined || result === undefined) {
    throw new TypeError("data e result são obrigatórios.");
  }

  return {
    id: requireText(id, "id"),
    elementId: requireText(elementId, "elementId"),
    data: copyValue(data),
    result: copyValue(result),
    evaluatedAt: toIsoDate(evaluatedAt, "evaluatedAt")
  };
}
