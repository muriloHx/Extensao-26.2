<script setup>
import { computed, inject, onMounted, ref } from "vue";
import { RouterLink } from "vue-router";
import PageHeader from "../components/PageHeader.vue";
import EmptyState from "../components/EmptyState.vue";
import StatusBadge from "../components/StatusBadge.vue";

const props = defineProps({
  elementId: String,
});

const services = inject("services");

// Estado da Tela
const element = ref(null);
const evaluation = ref(null);

// Computed Properties
const resultList = computed(() => evaluation.value?.result ?? []);

const failedCount = computed(
  () =>
    resultList.value.filter((item) =>
      ["nao_conforme", "erro", "invalido"].includes(item.status)
    ).length
);

const pendingCount = computed(
  () =>
    resultList.value.filter((item) =>
      ["nao_avaliado", "manual", "atencao"].includes(item.status)
    ).length
);

const passedCount = computed(
  () => resultList.value.length - failedCount.value - pendingCount.value
);

const overallStatus = computed(() => {
  if (failedCount.value > 0) return "nao_conforme";
  if (pendingCount.value > 0) return "nao_avaliado";
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
  element.value = await services.repositories.elementRepository.get(
    props.elementId
  );

  if (element.value) {
    const evaluations = await services.evaluationService.listEvaluations(
      element.value.id
    );
    evaluation.value = evaluations[0] ?? null;
  }
}

onMounted(loadData);
</script>

<template>
  <!-- Cenário 1: Elemento e Avaliação Carregados -->
  <template v-if="element && evaluation">
    <RouterLink class="back-link" :to="`/elements/${element.id}`">
      ‹ {{ element.name }}
    </RouterLink>

    <PageHeader
      eyebrow="Resultado"
      title="Avaliação"
      :description="`Realizada em ${formatDate(evaluation.evaluatedAt)}`"
    />

    <!-- Resumo do Diagnóstico -->
    <section class="result-summary" :class="`result-summary--${overallStatus}`">
      <StatusBadge :status="overallStatus" />
      <h2>{{ summaryTitle }}</h2>
      <p>
        {{ passedCount }} regra(s) atendida(s), {{ failedCount }} não
        conforme(s) e {{ pendingCount }} para verificar.
      </p>
    </section>

    <!-- Lista Detalhada de Regras -->
    <section class="results">
      <h2>Regras avaliadas</h2>

      <article
        v-for="item in resultList"
        :key="item.id"
        class="result-row"
        :class="`result-row--${item.status}`"
      >
        <div>
          <StatusBadge :status="item.status" />
          <h3>{{ item.nome ?? item.id }}</h3>

          <p v-if="item.mensagem">{{ item.mensagem }}</p>

          <p v-if="item.valorInformado !== undefined" class="result-values">
            Informado: <strong>{{ item.valorInformado }}</strong>
            <template v-if="item.unidade"> {{ item.unidade }}</template>
            <template v-if="item.valorEsperado !== undefined">
              · Esperado: {{ item.valorEsperado }}
            </template>
          </p>

          <small v-if="item.referencia">{{ item.referencia }}</small>
        </div>
      </article>
    </section>
  </template>

  <!-- Cenário 2: Elemento encontrado, mas sem avaliação -->
  <template v-else-if="element">
    <RouterLink class="back-link" :to="`/elements/${element.id}`">
      ‹ Elemento
    </RouterLink>

    <EmptyState
      title="Ainda não há avaliação"
      text="Preencha os dados do elemento para executar as regras."
    >
      <RouterLink class="button" :to="`/elements/${element.id}`">
        Avaliar elemento
      </RouterLink>
    </EmptyState>
  </template>

  <!-- Cenário 3: Elemento não existe / Não encontrado -->
  <EmptyState
    v-else
    title="Avaliação não encontrada"
    text="O elemento pode ter sido removido."
  >
    <RouterLink class="button" to="/projects">Projetos</RouterLink>
  </EmptyState>
</template>
