import { emptyState, escapeHtml, pageHeader, route } from "../components/ui.js";

export async function projectPage({ services, params }) {
  const project = await services.projectService.getProject(params.projectId);
  if (!project) return emptyState("Projeto não encontrado", "Ele pode ter sido removido.", `<a class="button" href="${route("/projects")}">Voltar aos projetos</a>`);
  const environments = await services.projectService.listEnvironments(project.id);
  const action = `<button class="button" data-action="create-environment" data-project-id="${project.id}">+ Novo ambiente</button>`;
  const content = environments.length ? `<div class="card-list">${environments.map((environment) => `<article class="card"><a class="card__link" href="${route(`/projects/${project.id}/environments/${environment.id}`)}"><span class="card__icon">⌂</span><div><h2>${escapeHtml(environment.name)}</h2><p>Ambiente do projeto</p></div><span class="chevron">›</span></a><div class="card__menu"><button class="text-button" data-action="rename-environment" data-id="${environment.id}" data-name="${escapeHtml(environment.name)}">Editar</button><button class="text-button text-button--danger" data-action="delete-environment" data-id="${environment.id}" data-project-id="${project.id}" data-name="${escapeHtml(environment.name)}">Excluir</button></div></article>`).join("")}</div>` : emptyState("Nenhum ambiente ainda", "Adicione espaços como entrada, banheiro ou circulação.", action);
  return `<a class="back-link" href="${route("/projects")}">‹ Projetos</a>${pageHeader({ eyebrow: "Projeto", title: project.name, description: `${environments.length} ambiente${environments.length === 1 ? "" : "s"} cadastrado${environments.length === 1 ? "" : "s"}.`, action: environments.length ? action : "" })}${content}`;
}
