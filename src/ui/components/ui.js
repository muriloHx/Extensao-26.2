export function escapeHtml(value = "") {
  return String(value).replace(/[&<>'"]/g, (character) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;"
  })[character]);
}

export function route(path) {
  return `#${path}`;
}

const labels = {
  conforme: "Conforme",
  nao_conforme: "Não conforme",
  nao_avaliado: "Pendente",
  invalido: "Pendente",
  erro: "Pendente",
  atencao: "Atenção",
  manual: "Verificar"
};

export function statusBadge(status = "nao_avaliado") {
  return `<span class="status status--${status}">${labels[status] ?? "Pendente"}</span>`;
}

export function emptyState(title, text, action = "") {
  return `<section class="empty-state"><div class="empty-state__icon">+</div><h2>${escapeHtml(title)}</h2><p>${escapeHtml(text)}</p>${action}</section>`;
}

export function pageHeader({ eyebrow, title, description, action = "" }) {
  return `<header class="page-header">${eyebrow ? `<p class="eyebrow">${escapeHtml(eyebrow)}</p>` : ""}<div class="page-header__row"><div><h1>${escapeHtml(title)}</h1>${description ? `<p>${escapeHtml(description)}</p>` : ""}</div>${action}</div></header>`;
}

export function elementStatus(evaluations) {
  const result = evaluations?.[0]?.result;
  if (!result?.length) return "nao_avaliado";
  if (result.some((item) => ["nao_conforme", "erro", "invalido"].includes(item.status))) return "nao_conforme";
  if (result.some((item) => ["atencao", "manual", "nao_avaliado"].includes(item.status))) return "nao_avaliado";
  return "conforme";
}

export function openDialog({ title, label, value = "", confirmLabel = "Salvar", onConfirm }) {
  const root = document.querySelector("#dialog-root");
  root.innerHTML = `<div class="dialog-backdrop"><form class="dialog" id="text-dialog"><div class="dialog__head"><h2>${escapeHtml(title)}</h2><button class="icon-button" type="button" data-close-dialog aria-label="Fechar">×</button></div><label>${escapeHtml(label)}<input name="value" value="${escapeHtml(value)}" required autofocus></label><div class="dialog__actions"><button class="button button--ghost" type="button" data-close-dialog>Cancelar</button><button class="button" type="submit">${escapeHtml(confirmLabel)}</button></div></form></div>`;
  const close = () => { root.innerHTML = ""; };
  root.querySelectorAll("[data-close-dialog]").forEach((button) => button.addEventListener("click", close));
  root.querySelector("form").addEventListener("submit", async (event) => {
    event.preventDefault();
    const submit = event.currentTarget.querySelector("[type=submit]");
    submit.disabled = true;
    try { await onConfirm(new FormData(event.currentTarget).get("value")); close(); }
    catch (error) { submit.disabled = false; window.alert(error.message); }
  });
}

export function download(filename, content, mime = "application/json") {
  const link = document.createElement("a");
  link.href = URL.createObjectURL(new Blob([content], { type: mime }));
  link.download = filename;
  link.click();
  URL.revokeObjectURL(link.href);
}
