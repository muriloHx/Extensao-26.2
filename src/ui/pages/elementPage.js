import { emptyState, escapeHtml, pageHeader, route, statusBadge } from "../components/ui.js";

function checklistOptions(ruleSets, selectedId) {
  return ruleSets.map((ruleSet) => `<option value="${escapeHtml(ruleSet.id)}" ${ruleSet.id === selectedId ? "selected" : ""}>${escapeHtml(ruleSet.nome)}</option>`).join("");
}

function fields(checklist, previous = {}) {
  if (!checklist) return "";
  return Object.entries(checklist.parametros ?? {}).map(([key, parameter]) => {
    const label = `${parameter.label ?? key}${parameter.obrigatorio ? " *" : ""}`;
    const value = previous[key] ?? "";
    let control;
    if (parameter.tipo === "boolean") {
      control = `<select name="data-${key}" ${parameter.obrigatorio ? "required" : ""}><option value="">Não informado</option><option value="true" ${value === true ? "selected" : ""}>Sim</option><option value="false" ${value === false ? "selected" : ""}>Não</option></select>`;
    } else if (parameter.tipo === "select") {
      control = `<select name="data-${key}" ${parameter.obrigatorio ? "required" : ""}><option value="">Selecione</option>${(parameter.opcoes ?? []).map((option) => `<option value="${escapeHtml(option)}" ${value === option ? "selected" : ""}>${escapeHtml(option)}</option>`).join("")}</select>`;
    } else {
      control = `<input name="data-${key}" type="number" inputmode="decimal" step="any" value="${escapeHtml(value)}" ${parameter.obrigatorio ? "required" : ""}>`;
    }
    return `<label class="field"><span>${escapeHtml(label)}${parameter.unidade ? ` <small>(${escapeHtml(parameter.unidade)})</small>` : ""}</span>${control}</label>`;
  }).join("");
}

export async function elementPage({ services, ruleSets, params, query }) {
  const isNew = params.elementId === "new";
  const element = isNew ? null : await services.repositories.elementRepository.get(params.elementId);
  const environmentId = element?.environmentId ?? query.environmentId;
  if (!environmentId || (!isNew && !element)) return emptyState("Elemento não encontrado", "Volte para o ambiente e tente novamente.", `<a class="button" href="${route("/projects")}">Projetos</a>`);
  const previousEvaluation = element ? (await services.evaluationService.listEvaluations(element.id))[0] : null;
  const selectedId = query.ruleSet ?? element?.rule ?? ruleSets[0]?.id;
  const checklist = ruleSets.find((item) => item.id === selectedId);
  const environment = await services.repositories.environmentRepository.get(environmentId);
  const title = isNew ? "Novo elemento" : element.name;
  return `<a class="back-link" href="${route(`/projects/${environment?.projectId}/environments/${environmentId}`)}">‹ ${escapeHtml(environment?.name ?? "Ambiente")}</a>${pageHeader({ eyebrow: isNew ? "Cadastro" : "Elemento", title, description: "Escolha o tipo e informe as medidas observadas." })}<form class="form-card" data-form="element" data-element-id="${element?.id ?? ""}" data-environment-id="${environmentId}"><label class="field"><span>Nome do elemento *</span><input name="name" required value="${escapeHtml(element?.name ?? "")}" placeholder="Ex.: Porta principal"></label><label class="field"><span>Tipo de elemento *</span><select name="ruleSet" data-action="change-ruleset">${checklistOptions(ruleSets, selectedId)}</select></label><div class="form-divider"><strong>Dados para avaliação</strong><span>Campos definidos pelo conjunto de regras selecionado.</span></div><div class="fields-grid">${fields(checklist, previousEvaluation?.data)}</div><div class="form-actions"><button class="button button--ghost" type="button" data-action="cancel-element" data-environment-id="${environmentId}">Cancelar</button><button class="button" type="submit">${isNew ? "Salvar elemento" : "Salvar alterações"}</button>${!isNew ? `<a class="button button--outline" href="${route(`/elements/${element.id}/evaluation`)}">${statusBadge(previousEvaluation ? "conforme" : "nao_avaliado")} Ver resultado</a>` : ""}</div></form>`;
}

export function collectEvaluationData(form, checklist) {
  const values = {};
  for (const [key, parameter] of Object.entries(checklist.parametros ?? {})) {
    const value = new FormData(form).get(`data-${key}`);
    if (value === "" || value === null) continue;
    values[key] = parameter.tipo === "number" ? Number(value) : parameter.tipo === "boolean" ? value === "true" : value;
  }
  return values;
}
