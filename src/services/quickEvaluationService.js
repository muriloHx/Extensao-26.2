import { createId } from "../domain/model.js";

export class QuickEvaluationService {
  constructor({ evaluationService }) {
    this.evaluationService = evaluationService;
    this.current = null;
  }

  evaluate({ name, checklist, data }) {
    const element = {
      id: createId(),
      name: name?.trim() || checklist.nome,
      type: checklist.nome,
      rule: checklist.id
    };
    const evaluation = this.evaluationService.evaluateTransientElement({
      elementId: element.id,
      checklist,
      data
    });

    this.current = { element, evaluation };
    return this.current;
  }

  getCurrent() {
    return this.current;
  }

  clear() {
    this.current = null;
  }
}
