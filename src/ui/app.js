import { appLayout } from "./layouts/appLayout.js";
import { collectEvaluationData, elementPage } from "./pages/elementPage.js";
import { environmentPage } from "./pages/environmentPage.js";
import { evaluationPage } from "./pages/evaluationPage.js";
import { projectPage } from "./pages/projectPage.js";
import { projectsPage } from "./pages/projectsPage.js";
import { rulesPage } from "./pages/rulesPage.js";
import { download, openDialog, route } from "./components/ui.js";

function parseRoute() {
  const [pathname = "/projects", search = ""] = location.hash.slice(1).split("?");
  const parts = pathname.split("/").filter(Boolean);
  return { parts, query: Object.fromEntries(new URLSearchParams(search)) };
}

function notify(message) {
  const toast = document.querySelector("#toast");
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add("is-visible");
  window.setTimeout(() => toast.classList.remove("is-visible"), 2200);
}

export function startApp(root, context) {
  const rerender = async () => {
    const { parts, query } = parseRoute();
    let content;
    let area = "projects";
    const pageContext = { ...context, ruleSets: [], query, params: {} };
    try {
      if (parts[0] === "rules") {
        area = "rules";
        pageContext.params = { source: decodeURIComponent(parts[1] ?? ""), groupId: decodeURIComponent(parts[2] ?? "") };
        content = await rulesPage({ ...pageContext, builtInRuleSets: context.builtInRuleSets });
      } else if (parts[0] === "elements") {
        const custom = await context.services.ruleSetService.list();
        pageContext.ruleSets = [...context.builtInRuleSets.map((entry) => entry.ruleSet), ...custom];
        pageContext.params.elementId = parts[1];
        content = parts[2] === "evaluation" ? await evaluationPage(pageContext) : await elementPage(pageContext);
      } else if (parts[0] === "projects" && parts[2] === "environments") {
        pageContext.params = { projectId: parts[1], environmentId: parts[3] };
        content = await environmentPage(pageContext);
      } else if (parts[0] === "projects" && parts[1]) {
        pageContext.params = { projectId: parts[1] };
        content = await projectPage(pageContext);
      } else {
        content = await projectsPage(pageContext);
      }
      root.innerHTML = appLayout(content, area);
      root.querySelector(".content")?.focus();
    } catch (error) {
      root.innerHTML = appLayout(`<section class="empty-state"><h1>Algo não saiu como esperado</h1><p>${error.message}</p><a class="button" href="${route("/projects")}">Voltar aos projetos</a></section>`, area);
    }
  };

  window.addEventListener("hashchange", rerender);
  document.addEventListener("click", async (event) => {
    const button = event.target.closest("[data-action]");
    if (!button) return;
    const { action, id, name, projectId, environmentId, format } = button.dataset;
    const { services } = context;
    if (action === "create-project") {
      openDialog({ title: "Novo projeto", label: "Nome do projeto", confirmLabel: "Criar projeto", onConfirm: async (value) => { await services.projectService.createProject({ name: value }); notify("Projeto criado"); await rerender(); } });
    }
    if (action === "rename-project") {
      openDialog({ title: "Editar projeto", label: "Nome do projeto", value: name, onConfirm: async (value) => { await services.projectService.renameProject(id, value); notify("Projeto salvo"); await rerender(); } });
    }
    if (action === "delete-project" && window.confirm(`Excluir o projeto “${name}” e seus dados?`)) {
      const environments = await services.projectService.listEnvironments(id);
      for (const environment of environments) await removeEnvironment(services, environment.id);
      await services.repositories.projectRepository.delete(id); notify("Projeto excluído");
      if (location.hash === route("/projects")) await rerender();
      else location.hash = route("/projects");
    }
    if (action === "create-environment") {
      openDialog({ title: "Novo ambiente", label: "Nome do ambiente", confirmLabel: "Criar ambiente", onConfirm: async (value) => { await services.projectService.createEnvironment(projectId, { name: value }); notify("Ambiente criado"); await rerender(); } });
    }
    if (action === "rename-environment") {
      openDialog({ title: "Editar ambiente", label: "Nome do ambiente", value: name, onConfirm: async (value) => { await services.projectService.renameEnvironment(id, value); notify("Ambiente salvo"); await rerender(); } });
    }
    if (action === "delete-environment" && window.confirm(`Excluir o ambiente “${name}” e seus elementos?`)) {
      await removeEnvironment(services, id); notify("Ambiente excluído");
      if (location.hash === route(`/projects/${projectId}`)) await rerender();
      else location.hash = route(`/projects/${projectId}`);
    }
    if (action === "cancel-element") location.hash = route(`/projects/${(await services.repositories.environmentRepository.get(environmentId)).projectId}/environments/${environmentId}`);
    if (action === "change-ruleset") {
      const form = button.closest("form");
      const state = new FormData(form);
      location.hash = route(`/elements/${form.dataset.elementId || "new"}?environmentId=${form.dataset.environmentId}&ruleSet=${encodeURIComponent(state.get("ruleSet"))}`);
    }
    if (action === "export-rule") {
      const content = format === "json" ? await services.ruleSetService.exportByIdToJson(id) : await services.ruleSetService.exportByIdToYaml(id);
      download(`${id}.${format}`, content, format === "json" ? "application/json" : "text/yaml");
    }
    if (action === "delete-rule" && window.confirm("Excluir este conjunto de regras importado?")) { await services.ruleSetService.delete(id); notify("Conjunto excluído"); await rerender(); }
  });
  document.addEventListener("change", async (event) => {
    const input = event.target;
    if (input.dataset.action === "change-ruleset") {
      const form = input.closest("form");
      location.hash = route(`/elements/${form.dataset.elementId || "new"}?environmentId=${form.dataset.environmentId}&ruleSet=${encodeURIComponent(input.value)}`);
      return;
    }
    if (input.dataset.action !== "import-rule" || !input.files?.[0]) return;
    try {
      const files = [...input.files];
      const folder = files[0].webkitRelativePath?.split("/")[0];
      const group = {
        id: `importado-${folder || crypto.randomUUID()}`,
        nome: folder || (files.length === 1 ? files[0].name.replace(/\.(json|ya?ml)$/i, "") : "Regras importadas")
      };
      for (const file of files) {
        const content = await file.text();
        if (/\.json$/i.test(file.name)) await context.services.ruleSetService.importFromJson(content, group);
        else await context.services.ruleSetService.importFromYaml(content, group);
      }
      notify(files.length === 1 ? "Conjunto de regras importado" : "Conjunto de regras importado"); await rerender();
    } catch (error) { window.alert(error.message); }
  });
  document.addEventListener("submit", async (event) => {
    const form = event.target;
    if (form.dataset.form !== "element") return;
    event.preventDefault();
    const ruleSets = [...context.builtInRuleSets.map((entry) => entry.ruleSet), ...await context.services.ruleSetService.list()];
    const checklist = ruleSets.find((item) => item.id === new FormData(form).get("ruleSet"));
    if (!checklist) return window.alert("Selecione um conjunto de regras.");
    const data = collectEvaluationData(form, checklist);
    const input = new FormData(form);
    const existing = form.dataset.elementId;
    try {
      const element = existing ? await context.services.projectService.updateElement(existing, { name: input.get("name"), type: checklist.nome, rule: checklist.id }) : await context.services.projectService.createElement(form.dataset.environmentId, { name: input.get("name"), type: checklist.nome, rule: checklist.id });
      await context.services.evaluationService.evaluateElement({ elementId: element.id, checklist, data });
      notify("Elemento avaliado e salvo"); location.hash = route(`/elements/${element.id}/evaluation`);
    } catch (error) { window.alert(error.message); }
  });
  if (!location.hash) location.hash = route("/projects");
  else rerender();
}

async function removeEnvironment(services, environmentId) {
  const elements = await services.projectService.listElements(environmentId);
  for (const element of elements) {
    const evaluations = await services.evaluationService.listEvaluations(element.id);
    for (const evaluation of evaluations) await services.repositories.evaluationRepository.delete(evaluation.id);
    await services.repositories.elementRepository.delete(element.id);
  }
  await services.repositories.environmentRepository.delete(environmentId);
}
