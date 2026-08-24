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

const completeExample = `id: bebedouro
nome: Bebedouros
norma:
  nome: Critério interno
  versao: "1.0"

parametros:
  altura_bica:
    label: "Altura da bica"
    tipo: number
    unidade: m
    obrigatorio: true

regras:
  - id: altura_bica_maxima
    nome: "Altura máxima da bica"
    parametro: altura_bica
    operador: "<="
    valor: 0.90
    referencia: "Critério interno — item 3"`;

const checklistExample = `- id: possui_area_livre
  nome: "Área livre desobstruída"
  tipo: checklist
  parametro: area_livre_ok
  referencia: "Vistoria em campo"`;

const conditionalExample = `- id: tratamento_do_desnivel
  nome: "Tratamento do desnível"
  tipo: conditional
  parametro: desnivel
  condicoes:
    - quando:
        operador: "<="
        valor: 5
      resultado: conforme
      mensagem: "Dispensa tratamento."
    - quando:
        operador: ">"
        valor: 5
      verificar:
        parametro: possui_chanfro
        operador: "=="
        valor: true
      mensagem: "Exige chanfro adequado."
  referencia: "Critério interno — item 4"`;

function codeBlock(code) {
  return `<pre class="documentation-code"><code>${escapeHtml(code)}</code></pre>`;
}

export function ruleDocumentationPage() {
  return `<a class="back-link" href="${route("/rules")}">‹ Conjuntos de regras</a>${pageHeader({ eyebrow: "Documentação", title: "Crie e importe regras", description: "Monte checklists em YAML para avaliar os elementos do seu projeto." })}<div class="documentation"><section class="documentation__intro"><span class="documentation__icon">?</span><div><h2>Como o conjunto é organizado</h2><p>Um arquivo YAML representa um checklist. Ao importar uma pasta, cada YAML dela vira um checklist e todos aparecem juntos como um único conjunto na biblioteca.</p></div></section><section class="documentation__section"><div class="documentation__heading"><span>1</span><div><h2>Comece por um arquivo YAML</h2><p>Crie um arquivo <code>.yaml</code> ou <code>.yml</code> com um identificador único, nome, parâmetros e regras.</p></div></div>${codeBlock(completeExample)}<p class="documentation__note">Use ponto para decimais (<code>0.90</code>) e mantenha os nomes técnicos sem espaços, como <code>altura_bica</code>. Os campos <code>norma</code>, <code>unidade</code>, <code>obrigatorio</code> e <code>referencia</code> enriquecem a interface e são opcionais.</p></section><section class="documentation__section"><div class="documentation__heading"><span>2</span><div><h2>Defina os parâmetros</h2><p>Cada chave em <code>parametros</code> cria um campo de preenchimento na avaliação. A regra sempre aponta para essa chave.</p></div></div><div class="documentation-grid"><article class="documentation-card"><h3><code>number</code></h3><p>Cria um campo numérico. Informe <code>unidade</code> quando houver medida.</p></article><article class="documentation-card"><h3><code>boolean</code></h3><p>Cria a escolha Sim/Não, indicada para verificações de presença ou condição.</p></article><article class="documentation-card"><h3><code>select</code></h3><p>Cria uma lista. Acrescente as opções em <code>opcoes</code>.</p></article></div><p class="documentation__note">Marque <code>obrigatorio: true</code> para exigir o preenchimento. Em listas, use valores de texto em <code>opcoes</code>; eles devem coincidir exatamente com os valores comparados pelas regras.</p></section><section class="documentation__section"><div class="documentation__heading"><span>3</span><div><h2>Escolha o tipo de regra</h2><p>As regras padrão usam comparação direta. Para cenários específicos, há também checklist manual e condições.</p></div></div><div class="documentation-rule"><h3>Comparação direta</h3><p>Não precisa de <code>tipo</code>. Use <code>operador</code> e <code>valor</code>. Operadores aceitos: <code>&gt;=</code>, <code>&lt;=</code>, <code>&gt;</code>, <code>&lt;</code>, <code>==</code> e <code>!=</code>.</p></div><div class="documentation-rule"><h3>Checklist manual</h3><p>Use para um item que precisa de conferência em campo. O resultado é marcado como “Verificar”.</p>${codeBlock(checklistExample)}</div><div class="documentation-rule"><h3>Regra condicional</h3><p>Use <code>quando</code> para escolher um cenário. Cada cenário deve ter um <code>resultado</code> ou uma <code>verificar</code>, que compara outro parâmetro.</p>${codeBlock(conditionalExample)}</div></section><section class="documentation__section"><div class="documentation__heading"><span>4</span><div><h2>Importe para a biblioteca</h2><p>Com os arquivos prontos, volte à página de Conjuntos de regras e escolha a forma de importação.</p></div></div><ol class="documentation-steps"><li><strong>Um checklist:</strong> selecione <em>Importar arquivos</em> e escolha o YAML.</li><li><strong>Vários checklists:</strong> guarde os YAMLs na mesma pasta e selecione <em>Importar pasta</em>. Eles serão exibidos juntos, com o nome da pasta.</li><li><strong>Confira o resultado:</strong> abra o conjunto em “Suas regras”; os checklists estarão disponíveis ao criar ou editar um elemento.</li></ol><p class="documentation__note">Também é possível importar JSON com a mesma estrutura. Ao selecionar vários arquivos de uma vez, eles também serão agrupados. As regras importadas ficam salvas somente neste navegador; exporte-as antes de limpar os dados do navegador ou trocar de dispositivo.</p><a class="button" href="${route("/rules")}">Ir para importação</a></section><section class="documentation__section documentation__section--last"><h2>Antes de importar</h2><ul class="documentation-list"><li>O <code>id</code> e o <code>nome</code> do checklist, e o <code>id</code>, <code>nome</code> e <code>parametro</code> de cada regra devem ser textos preenchidos.</li><li>Cada <code>parametro</code> usado em uma regra — inclusive em <code>verificar</code> — precisa existir em <code>parametros</code>.</li><li>Uma regra de comparação direta precisa de <code>operador</code> e <code>valor</code>; uma condicional precisa de ao menos uma condição.</li></ul><p class="muted">Se o arquivo tiver YAML inválido ou uma referência ausente, o aplicativo mostrará o motivo e não salvará o arquivo com erro.</p></section></div>`;
}

export async function rulesPage({ services, builtInRuleSets, params = {} }) {
  if (params.documentation) return ruleDocumentationPage();
  const custom = await services.ruleSetService.list();
  const groups = [...groupBuiltInRuleSets(builtInRuleSets), ...groupCustomRuleSets(custom)];
  const selected = params.groupId ? groups.find((group) => group.source === params.source && group.id === params.groupId) : null;
  if (params.groupId) {
    if (!selected) return `<a class="back-link" href="${route("/rules")}">‹ Conjuntos de regras</a><p class="muted">Conjunto de regras não encontrado.</p>`;
    return `<a class="back-link" href="${route("/rules")}">‹ Conjuntos de regras</a>${pageHeader({ eyebrow: selected.source === "user" ? "Importado" : "Padrão", title: selected.nome, description: `${selected.ruleSets.length} checklists que compõem este conjunto.` })}<section class="rules-section rules-section--first"><h2>Checklists</h2><div class="card-list">${selected.ruleSets.map((ruleSet) => ruleSetCard(ruleSet, selected.source)).join("")}</div></section>`;
  }
  const official = groups.filter((group) => group.source === "standard");
  const user = groups.filter((group) => group.source === "user");
  return `${pageHeader({ eyebrow: "Biblioteca", title: "Conjuntos de regras", description: "Cada pasta ou importação é exibida como um único conjunto.", action: `<span class="import-actions"><a class="button button--ghost" href="${route("/rules/documentation")}">Como criar regras</a><label class="button button--outline import-button">Importar arquivos<input type="file" accept=".json,.yaml,.yml" data-action="import-rule" multiple hidden></label><label class="button button--outline import-button">Importar pasta<input type="file" accept=".json,.yaml,.yml" data-action="import-rule" webkitdirectory hidden></label></span>` })}<section class="rules-section rules-section--first"><h2>Regras padrão</h2><div class="card-list">${official.map(groupCard).join("")}</div></section><section class="rules-section"><h2>Suas regras</h2>${user.length ? `<div class="card-list">${user.map(groupCard).join("")}</div>` : `<p class="muted">Nenhum conjunto importado. Selecione uma pasta ou vários arquivos JSON/YAML para criar um conjunto.</p>`}</section>`;
}
