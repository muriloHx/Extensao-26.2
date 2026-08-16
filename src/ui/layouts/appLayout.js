import { route } from "../components/ui.js";

export function appLayout(content, current = "projects") {
  const item = (name, label, icon, href) => `<a class="nav-item ${current === name ? "is-active" : ""}" href="${route(href)}"><span aria-hidden="true">${icon}</span><span>${label}</span></a>`;
  return `<div class="app-shell"><aside class="sidebar"><a class="brand" href="${route("/projects")}"><span class="brand__mark">A</span><span>Acesso<br><small>Verificador</small></span></a><nav>${item("projects", "Projetos", "▦", "/projects")}${item("rules", "Regras", "✓", "/rules")}</nav></aside><main class="content" tabindex="-1">${content}</main><nav class="bottom-nav">${item("projects", "Projetos", "▦", "/projects")}${item("rules", "Regras", "✓", "/rules")}</nav><div id="dialog-root"></div><div class="toast" id="toast" role="status"></div></div>`;
}
