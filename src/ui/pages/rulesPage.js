import { groupBuiltInRuleSets, groupCustomRuleSets } from "../../domain/ruleGroup.js";
import { escapeHtml, pageHeader, route } from "../components/ui.js";

function groupLink(group) {
  return route(`/rules/${encodeURIComponent(group.source)}/${encodeURIComponent(group.id)}`);
}

function groupCard(group) {
  const rules = group.ruleSets.reduce((total, ruleSet) => total + (ruleSet.regras?.length ?? 0), 0);
  const fields = group.ruleSets.reduce((total, ruleSet) => total + Object.keys(ruleSet.parametros ?? {}).length, 0);
  return `<article class="card card--interactive rules-card"><a class="card__link" href="${groupLink(group)}"><span class="card__icon">✓</span><div><div class="rule-source">${group.source === "user" ? "Adicionada por você" : "Padrão"}</div><h2>${escapeHtml(group.nome)}</h2><p>${group.ruleSets.length} ${group.ruleSets.length === 1 ? "checklist" : "checklists"} · ${rules} regras · ${fields} campos</p></div><span class="chevron">›</span></a></article>`;
}

function ruleSetCard(ruleSet, source) {
  return `<article class="card rules-card"><div><div class="rule-source">${source === "user" ? "Adicionada por você" : "Padrão"}</div><h2>${escapeHtml(ruleSet.nome)}</h2><p>${escapeHtml(ruleSet.norma?.nome ?? "Conjunto personalizado")}${ruleSet.norma?.versao ? ` · ${escapeHtml(ruleSet.norma.versao)}` : ""}</p><small>${ruleSet.regras?.length ?? 0} regras · ${Object.keys(ruleSet.parametros ?? {}).length} campos</small></div><div class="rules-card__actions">${source === "user" ? `<button class="text-button" data-action="export-rule" data-id="${escapeHtml(ruleSet.id)}" data-format="json">Exportar</button><button class="text-button text-button--danger" data-action="delete-rule" data-id="${escapeHtml(ruleSet.id)}">Excluir</button>` : ""}</div></article>`;
}

export async function rulesPage({ services, builtInRuleSets, params = {} }) {
  const custom = await services.ruleSetService.list();
  const groups = [...groupBuiltInRuleSets(builtInRuleSets), ...groupCustomRuleSets(custom)];
  const selected = params.groupId ? groups.find((group) => group.source === params.source && group.id === params.groupId) : null;
  if (params.groupId) {
    if (!selected) return `<a class="back-link" href="${route("/rules")}">‹ Conjuntos de regras</a><p class="muted">Conjunto de regras não encontrado.</p>`;
    return `<a class="back-link" href="${route("/rules")}">‹ Conjuntos de regras/a>${pageHeader({ eyebrow: selected.source === "user" ? "Importado" : "Padrão", title: selected.nome, description: `${selected.ruleSets.length} checklists que compõem este conjunto.` })}<section class="rules-section rules-section--first"><h2>Checklists</h2><div class="card-list">${selected.ruleSets.map((ruleSet) => ruleSetCard(ruleSet, selected.source)).join("")}</div></section>`;
  }
  const official = groups.filter((group) => group.source === "standard");
  const user = groups.filter((group) => group.source === "user");
  return `${pageHeader({ eyebrow: "Biblioteca", title: "Conjuntos de regras", description: "Cada pasta ou importação é exibida como um único conjunto.", action: `<span class="import-actions"><label class="button button--outline import-button">Importar arquivos<input type="file" accept=".json,.yaml,.yml" data-action="import-rule" multiple hidden></label><label class="button button--outline import-button">Importar pasta<input type="file" accept=".json,.yaml,.yml" data-action="import-rule" webkitdirectory hidden></label></span>` })}<section class="rules-section rules-section--first"><h2>Regras padrão</h2><div class="card-list">${official.map(groupCard).join("")}</div></section><section class="rules-section"><h2>Suas regras</h2>${user.length ? `<div class="card-list">${user.map(groupCard).join("")}</div>` : `<p class="muted">Nenhum conjunto importado. Selecione uma pasta ou vários arquivos JSON/YAML para criar um conjunto.</p>`}</section>`;
}
