<script setup>
import { computed } from "vue";
import { CircleHelp } from "@lucide/vue";
import { RouterLink } from "vue-router";
import PageHeader from "../components/PageHeader.vue";

const downloadUrl = computed(() => `${import.meta.env.BASE_URL}rule-engine-skill/SKILL.md`);
</script>

<template>
  <PageHeader
    title="Crie e importe regras"
    description="Monte checklists em YAML para avaliar os elementos do seu projeto."
  />

  <div class="documentation">

    <section class="documentation__section">
      <h2>Formato mínimo de um checklist</h2>
      <p>Cada arquivo é um checklist independente. Os campos obrigatórios são <code>id</code>, <code>nome</code>, <code>parametros</code> (objeto) e <code>regras</code> (lista). YAML e JSON são aceitos.</p>
      <pre class="documentation-code"><code>id: bebedouros
nome: Bebedouros
norma:
  nome: Norma interna
  versao: "1"
parametros:
  altura_bica:
    label: Altura da bica
    tipo: number
    unidade: m
    obrigatorio: true
  possui_area_livre:
    label: Possui área livre
    tipo: boolean
regras:
  - id: altura_maxima
    nome: Altura máxima da bica
    parametro: altura_bica
    operador: "&lt;="
    valor: 0.90
    referencia: "Norma interna — item 4.2"</code></pre>
      <p class="documentation__note">
        <code>label</code>, <code>unidade</code>, <code>norma</code> e <code>referencia</code> são metadados
        opcionais. <code>obrigatorio: true</code> faz o motor marcar a regra como <code>invalido</code> quando
        o valor não foi preenchido; num campo não obrigatório, o valor ausente vira <code>nao_avaliado</code>.
      </p>
    </section>

    <section class="documentation__section">
      <h2>Tipos de parâmetro</h2>
      <p>Um parâmetro pode ser <code>number</code>, <code>boolean</code> ou <code>select</code> (lista fixa de opções):</p>
      <pre class="documentation-code"><code>tipo_piso:
  label: Tipo de piso
  tipo: select
  opcoes: [liso, antiderrapante, irregular]
  obrigatorio: true</code></pre>
    </section>

    <section class="documentation__section">
      <h2>Tipos de regra</h2>
      <p>Uma regra sem <code>tipo</code> é uma comparação direta — use <code>&gt;=</code>, <code>&lt;=</code>, <code>&gt;</code>, <code>&lt;</code>, <code>==</code> ou <code>!=</code>. O resultado é <code>conforme</code> ou <code>nao_conforme</code>:</p>
      <pre class="documentation-code"><code>- id: largura_minima
  nome: Largura mínima
  parametro: largura
  operador: "&gt;="
  valor: 0.80</code></pre>

      <details class="documentation__details">
        <summary>Verificação manual (<code>tipo: checklist</code>)</summary>
        <p>Para algo que exige julgamento humano. Em parâmetros booleanos, “sim” resulta em <code>conforme</code> e “não” em <code>nao_conforme</code>. Outros tipos de resposta ficam como verificação manual (<code>manual</code>), e nesse caso a regra precisa de <code>mensagem</code> dizendo o que julgar.</p>
        <pre class="documentation-code"><code>- id: rota_livre
  nome: Rota livre de obstáculos
  tipo: checklist
  parametro: possui_rota_livre</code></pre>
      </details>

      <details class="documentation__details">
        <summary>Faixas e exceções (<code>tipo: conditional</code>)</summary>
        <p>As condições são avaliadas em ordem; a primeira cujo <code>quando</code> for verdadeiro decide o resultado:</p>
        <pre class="documentation-code"><code>- id: tratamento_desnivel
  nome: Tratamento do desnível
  tipo: conditional
  parametro: desnivel
  condicoes:
    - quando: { operador: "&lt;=", valor: 5 }
      resultado: conforme
      mensagem: Sem tratamento adicional.
    - quando: { operador: "&lt;=", valor: 15 }
      verificar:
        parametro: possui_chanfro
        operador: "=="
        valor: true
    - quando: { operador: "&gt;", valor: 15 }
      resultado: atencao
      mensagem: Avaliar como rampa.</code></pre>
        <p class="documentation__note">
          As condições precisam cobrir todos os valores do parâmetro: para números, um ramo final com
          <code>&gt;</code> ou <code>&gt;=</code>; para booleanos e seleções, um ramo para cada opção. Valor
          informado que nenhuma condição alcança vira <code>erro</code>, e a importação recusa o conjunto sem
          essa cobertura. Um parâmetro usado dentro de <code>verificar</code> (aqui, <code>possui_chanfro</code>)
          também precisa estar declarado em <code>parametros</code>.
        </p>
      </details>
    </section>

    <section class="documentation__section">
      <h2>Resultados possíveis</h2>
      <ul class="documentation__list">
        <li><code>conforme</code> / <code>nao_conforme</code> — comparação direta, ou condição explícita.</li>
        <li><code>manual</code> — regra do tipo <code>checklist</code>.</li>
        <li><code>atencao</code> — resultado explícito opcional numa condição de <code>conditional</code>.</li>
        <li><code>nao_avaliado</code> — parâmetro opcional sem valor preenchido.</li>
        <li><code>invalido</code> — parâmetro obrigatório sem valor preenchido.</li>
        <li><code>erro</code> — regra apontando para parâmetro inexistente, ou valor informado que nenhuma condição cobre.</li>
      </ul>
    </section>

    <section class="documentation__intro">
      <span class="documentation__icon"><CircleHelp :size="24" aria-hidden="true" /></span>
      <div>
        <h1>Crie suas regras com IA</h1>
        <a class="button button--outline" :href="`${downloadUrl}`" download="SKILL.md">
            Baixar SKILL.md
          </a>
          <p>Um arquivo de texto com instruções prontas para uma IA (Claude, ChatGPT, Cursor) gerar checklists neste formato a partir do que você descrever.
          Baixe, cole numa conversa com a IA e peça a regra que precisa — sem aprender YAML.</p>
      </div>
    </section>

    <section class="documentation__section">
      <h2>Importação</h2>
      <p>Escolha um ou mais arquivos YAML/JSON, ou uma pasta com vários checklists — arquivos que não forem <code>.yaml</code>, <code>.yml</code> ou <code>.json</code> são ignorados automaticamente. Tudo fica armazenado somente neste navegador.</p>
      <RouterLink class="button" to="/rules">Ir para importação</RouterLink>
    </section>
  </div>
</template>
