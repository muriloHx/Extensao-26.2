import { emptyState, escapeHtml, pageHeader, route } from "../components/ui.js";

export async function projectsPage({ services }) {
  const projects = await services.projectService.listProjects();
  const action = `<button class="button" data-action="create-project">+ Novo projeto</button>`;
  const cards = projects.length ? `<div class="card-list">${projects.map((project) => `<article class="card project-card"><a class="card__link" href="${route(`/projects/${project.id}`)}"><span class="card__icon">▦</span><div><h2>${escapeHtml(project.name)}</h2><p>Atualizado em ${new Intl.DateTimeFormat("pt-BR", { dateStyle: "medium" }).format(new Date(project.updatedAt))}</p></div><span class="chevron">›</span></a><div class="card__menu"><button class="text-button" data-action="rename-project" data-id="${project.id}" data-name="${escapeHtml(project.name)}">Editar</button><button class="text-button text-button--danger" data-action="delete-project" data-id="${project.id}" data-name="${escapeHtml(project.name)}">Excluir</button></div></article>`).join("")}</div>` : emptyState("Comece por um projeto", "Organize as avaliações de acessibilidade por obra ou local.", action);
  return `${pageHeader({ eyebrow: "Visão geral", title: "Projetos", description: "Acompanhe seus locais e avaliações.", action: projects.length ? action : "" })}${cards}`;
}
