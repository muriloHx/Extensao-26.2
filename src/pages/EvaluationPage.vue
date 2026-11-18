<script setup>
import { ChevronLeft, Pencil, Trash2 } from "@lucide/vue";
import { computed, inject, onMounted, ref } from "vue";
import { RouterLink, useRouter } from "vue-router";
import PageHeader from "../components/PageHeader.vue";
import EmptyState from "../components/EmptyState.vue";
import StatusBadge from "../components/StatusBadge.vue";
import { compare } from "../core/operators.js";
import { formatExpected, formatUnit } from "../core/formatExpected.js";
import { summarizeResult, statusBucket } from "../core/evaluationStatus.js";

const props = defineProps({
  elementId: String,
  quick: Boolean,
});

const services = inject("services");
const builtInRuleSets = inject("builtInRuleSets");
const confirmPopup = inject("confirmPopup");
const router = useRouter();

// Estado da Tela
const element = ref(null);
const environment = ref(null);
const evaluation = ref(null);
const ruleSets = ref([]);
const environmentRoute = computed(() => environment.value
  ? `/projects/${environment.value.projectId}/environments/${environment.value.id}`
  : "/projects");

// Computed Properties
const resultList = computed(() => evaluation.value?.result ?? []);
const activeRuleSet = computed(() => ruleSets.value.find((item) => item.id === element.value?.rule));

function getRuleDetails(item) {
  const rule = activeRuleSet.value?.regras?.find((candidate) => candidate.id === item.id);
  const data = evaluation.value?.data ?? {};
  const parameters = activeRuleSet.value?.parametros ?? {};
  let parameterKey = item.parametro ?? rule?.parametro;
  let operator = item.operador ?? rule?.operador;
  let expected = item.valorEsperado ?? rule?.valor;
  let conditionalDescription = "";

  if (rule?.tipo === "conditional") {
    const conditionValue = data[rule.parametro];
    const branch = (rule.condicoes ?? []).find((candidate) =>
      candidate.quando && compare(conditionValue, candidate.quando.operador, candidate.quando.valor)
    );
    if (branch?.verificar) {
      parameterKey = branch.verificar.parametro;
      operator = branch.verificar.operador;
      expected = branch.verificar.valor;
      const conditionParameter = parameters[rule.parametro];
      conditionalDescription = `${conditionParameter?.label ?? rule.parametro}: ${formatExpected(branch.quando.operador, branch.quando.valor, conditionParameter?.unidade)}`;
    }
  }

  const parameter = parameters[parameterKey] ?? {};
  const actual = item.valorInformado !== undefined ? item.valorInformado : data[parameterKey];
  const hasExpected = expected !== undefined && operator !== undefined;

  return {
    parameterLabel: parameter.label ?? parameterKey,
    actual: typeof actual === "boolean" ? (actual ? "Sim" : "Não") : actual,
    unit: typeof actual === "boolean" ? "" : formatUnit(item.unidade ?? parameter.unidade ?? "", actual),
    expected: hasExpected ? formatExpected(operator, expected, item.unidade ?? parameter.unidade) : "",
    conditionalDescription,
  };
}

// A linha pendente precisa dizer o que fazer: os status de pendência não têm
// valor nem critério para comparar, então a página mostra a ação e esconde as
// caixas de detalhe (que ficam só para conforme/não conforme).
function ruleOf(item) {
  return activeRuleSet.value?.regras?.find((candidate) => candidate.id === item.id);
}

function parameterLabelOf(item) {
  const key = item.parametro ?? ruleOf(item)?.parametro;
  const parameter = activeRuleSet.value?.parametros?.[key] ?? {};
  return parameter.label ?? key ?? item.id;
}

function rowAction(item) {
  const label = parameterLabelOf(item);

  switch (item.status) {
    case "invalido":
      return item.motivo === "obrigatorio"
        ? `Falta preencher: ${label}`
        : `Ajuste “${label}”: ${item.mensagem}`;
    case "nao_avaliado":
      return `Aguardando: ${label}`;
    case "manual":
    case "atencao":
    case "erro":
      return item.mensagem ?? null;
    default:
      return null;
  }
}

// Contagem e rótulo saem da mesma classificação (src/core/evaluationStatus.js).
const counts = computed(() => summarizeResult(resultList.value));

const overallStatus = computed(() => {
  if (!resultList.value.length) return "nao_avaliado";
  if (counts.value.nao_conforme > 0) return "nao_conforme";
  if (counts.value.pendente > 0) return "nao_avaliado";
  return "conforme";
});

const summaryTitle = computed(() => {
  switch (overallStatus.value) {
    case "conforme":
      return "Elemento conforme";
    case "nao_conforme":
      return "Há itens não conformes";
    default:
      return "Avaliação pendente";
  }
});

// Funções Auxiliares
function formatDate(dateString) {
  if (!dateString) return "";
  return new Intl.DateTimeFormat("pt-BR", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(dateString));
}

async function loadData() {
  const loadedRuleSets = await services.ruleSetService.list();
  ruleSets.value = [
    ...(builtInRuleSets ?? []).map((entry) => entry.ruleSet),
    ...loadedRuleSets,
  ];

  if (props.quick) {
    const current = services.quickEvaluationService.getCurrent();
    element.value = current?.element ?? null;
    evaluation.value = current?.evaluation ?? null;
    return;
  }

  element.value = await services.projectService.getElement(props.elementId);

  if (element.value) {
    environment.value = await services.projectService.getEnvironment(
      element.value.environmentId
    );
    const evaluations = await services.evaluationService.listEvaluations(
      element.value.id
    );
    evaluation.value = evaluations[0] ?? null;
  }
}

function removeElement(event) {
  confirmPopup.confirm(
    event,
    `Excluir o elemento ${element.value.name} e suas avaliações?`,
    deleteElement
  );
}

async function deleteElement() {
  await services.projectService.deleteElement(element.value.id);
  router.push(environmentRoute.value);
}

onMounted(loadData);
</script>

<template>
  <!-- Cenário 1: Elemento e Avaliação Carregados -->
  <template v-if="element && evaluation">
    <RouterLink v-if="!quick" class="back-link" :to="environmentRoute">
      <ChevronLeft :size="18" aria-hidden="true" /><span class="back-link__label">{{ environment?.name ?? element.name }}</span>
    </RouterLink>

    <PageHeader
      :title="element.name"
      :description="`Avaliação realizada em ${formatDate(evaluation.evaluatedAt)}`"
    >
      <template #action>
        <div v-if="!quick" class="project-header__actions">
          <RouterLink
            class="button button--outline"
            :to="`/elements/${element.id}`"
          >
            <Pencil :size="18" aria-hidden="true" />Editar elemento
          </RouterLink>
          <button
            class="icon-button icon-button--danger"
            title="Excluir"
            aria-label="Excluir elemento"
            @click="removeElement"
          >
            <Trash2 :size="18" aria-hidden="true" />
          </button>
        </div>
      </template>
    </PageHeader>

    <section class="result-summary" :class="`result-summary--${overallStatus}`">
      <StatusBadge :status="overallStatus" />
      <h2>{{ summaryTitle }}</h2>
      <div class="result-summary__counts" aria-label="Resumo das regras">
        <span><strong>{{ counts.conforme }}</strong> conformes</span>
        <span><strong>{{ counts.nao_conforme }}</strong> não conformes</span>
        <span><strong>{{ counts.pendente }}</strong> pendentes</span>
      </div>
      <div v-if="counts.pendente" class="result-summary__pending">
        <span>Pendências:</span>
        <span
          v-for="group in counts.pendingBreakdown"
          :key="group.id"
          class="result-summary__pending-item"
        >
          <strong>{{ group.count }}</strong> {{ group.label }}
        </span>
        <RouterLink v-if="!quick" class="text-button" :to="`/elements/${element.id}`">
          Editar elemento
        </RouterLink>
      </div>
    </section>

    <section class="results">
      <h2>Regras avaliadas</h2>

      <article
        v-for="item in resultList"
        :key="item.id"
        class="result-row"
        :class="`result-row--${item.status}`"
      >
        <div class="result-row__content">
          <StatusBadge :status="item.status" />
          <h3>{{ item.nome ?? item.id }}</h3>

          <p v-if="rowAction(item)" class="result-row__action">{{ rowAction(item) }}</p>
          <p v-else-if="item.mensagem">{{ item.mensagem }}</p>

          <template v-if="statusBucket(item.status) !== 'pendente'">
            <div v-for="details in [getRuleDetails(item)]" :key="item.id" class="result-row__details">
              <div v-if="details.actual !== undefined || details.expected" class="result-values">
                <div v-if="details.conditionalDescription" class="result-values__context">
                  <span>Condição desta regra</span>
                  <strong>{{ details.conditionalDescription }}</strong>
                </div>
                <div v-if="details.actual !== undefined" class="result-values__item">
                  <span>Valor informado · {{ details.parameterLabel }}</span>
                  <strong>{{ details.actual }}<template v-if="details.unit"> {{ details.unit }}</template></strong>
                </div>
                <div v-if="details.expected" class="result-values__item result-values__item--expected">
                  <span>Critério esperado</span>
                  <strong>{{ details.expected }}</strong>
                </div>
              </div>
            </div>
          </template>

          <small v-if="item.referencia" class="result-row__reference">Referência: {{ item.referencia }}</small>
        </div>
      </article>
    </section>

    <div v-if="quick" class="results-action">
      <RouterLink class="button" to="/quick-evaluation">
        Nova avaliação rápida
      </RouterLink>
    </div>
  </template>

  <!-- Cenário 2: Elemento encontrado, mas sem avaliação -->
  <template v-else-if="element">
    <RouterLink v-if="!quick" class="back-link" :to="environmentRoute">
      <ChevronLeft :size="18" aria-hidden="true" /><span class="back-link__label">Elemento</span>
    </RouterLink>

    <EmptyState
      title="Ainda não há avaliação"
      text="Preencha os dados do elemento para executar as regras."
    >
      <RouterLink class="button" :to="quick ? '/quick-evaluation' : `/elements/${element.id}`">
        {{ quick ? 'Nova avaliação rápida' : 'Avaliar elemento' }}
      </RouterLink>
    </EmptyState>
  </template>

  <!-- Cenário 3: Elemento não existe / Não encontrado -->
  <EmptyState
    v-else
    title="Avaliação não encontrada"
    :text="quick ? 'Inicie uma avaliação rápida para ver o resultado.' : 'O elemento pode ter sido removido.'"
  >
    <RouterLink class="button" :to="quick ? '/quick-evaluation' : '/projects'">{{ quick ? 'Avaliação rápida' : 'Projetos' }}</RouterLink>
  </EmptyState>
</template>
