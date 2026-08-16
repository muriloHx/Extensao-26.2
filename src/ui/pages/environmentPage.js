import { elementStatus, emptyState, escapeHtml, pageHeader, route, statusBadge } from "../components/ui.js";

export async function environmentPage({ services, params }) {
  const environment = await services.repositories.environmentRepository.get(params.environmentId);
  if (!environment) return emptyState("Ambiente não encontrado", "Ele pode ter sido removido.", `<a class="button" href="${route("/projects")}">Projetos</a>`);
  const project = await services.projectService.getProject(environment.projectId);
  const elements = await services.projectService.listElements(environment.id);
  const rows = await Promise.all(elements.map(async (element) => ({ element, status: elementStatus(await services.evaluationService.listEvaluations(element.id)) })));
  const action = `<a class="button" href="${route(`/elements/new?environmentId=${environment.id}`)}">+ Adicionar elemento</a>`;
  const content = rows.length ? `<div class="card-list">${rows.map(({ element, status }) => `<a class="card card--interactive" href="${route(`/elements/${element.id}`)}"><div class="card__link"><span class="card__icon">◇</span><div><h2>${escapeHtml(element.name)}</h2><p>${escapeHtml(element.type)}</p></div>${statusBadge(status)}<span class="chevron">›</span></div></a>`).join("")}</div>` : emptyState("Nenhum elemento ainda", "Cadastre portas, rampas, sanitários e outros itens para avaliar.", action);
  return `<a class="back-link" href="${route(`/projects/${environment.projectId}`)}">‹ ${escapeHtml(project?.name ?? "Projeto")}</a>${pageHeader({ eyebrow: "Ambiente", title: environment.name, description: "Elementos e situação da última avaliação.", action: rows.length ? action : "" })}${content}`;
}
