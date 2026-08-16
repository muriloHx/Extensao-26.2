import { emptyState, escapeHtml, pageHeader, route, statusBadge } from "../components/ui.js";

export async function evaluationPage({ services, params }) {
  const element = await services.repositories.elementRepository.get(params.elementId);
  if (!element) return emptyState("Avaliação não encontrada", "O elemento pode ter sido removido.", `<a class="button" href="${route("/projects")}">Projetos</a>`);
  const evaluation = (await services.evaluationService.listEvaluations(element.id))[0];
  if (!evaluation) return `<a class="back-link" href="${route(`/elements/${element.id}`)}">‹ Elemento</a>${emptyState("Ainda não há avaliação", "Preencha os dados do elemento para executar as regras.", `<a class="button" href="${route(`/elements/${element.id}`)}">Avaliar elemento</a>`)}`;
  const result = evaluation.result;
  const failed = result.filter((item) => ["nao_conforme", "erro", "invalido"].includes(item.status)).length;
  const pending = result.filter((item) => ["nao_avaliado", "manual", "atencao"].includes(item.status)).length;
  const overall = failed ? "nao_conforme" : pending ? "nao_avaliado" : "conforme";
  return `<a class="back-link" href="${route(`/elements/${element.id}`)}">‹ ${escapeHtml(element.name)}</a>${pageHeader({ eyebrow: "Resultado", title: "Avaliação", description: `Realizada em ${new Intl.DateTimeFormat("pt-BR", { dateStyle: "medium", timeStyle: "short" }).format(new Date(evaluation.evaluatedAt))}` })}<section class="result-summary result-summary--${overall}">${statusBadge(overall)}<h2>${overall === "conforme" ? "Elemento conforme" : overall === "nao_conforme" ? "Há itens não conformes" : "Avaliação pendente"}</h2><p>${result.length - failed - pending} regra(s) atendida(s), ${failed} não conforme(s) e ${pending} para verificar.</p></section><section class="results"><h2>Regras avaliadas</h2>${result.map((item) => `<article class="result-row result-row--${item.status}"><div>${statusBadge(item.status)}<h3>${escapeHtml(item.nome ?? item.id)}</h3>${item.mensagem ? `<p>${escapeHtml(item.mensagem)}</p>` : ""}${item.valorInformado !== undefined ? `<p class="result-values">Informado: <strong>${escapeHtml(item.valorInformado)}</strong>${item.unidade ? ` ${escapeHtml(item.unidade)}` : ""}${item.valorEsperado !== undefined ? ` · Esperado: ${escapeHtml(item.valorEsperado)}` : ""}</p>` : ""}<small>${escapeHtml(item.referencia ?? "")}</small></div></article>`).join("")}</section>`;
}
