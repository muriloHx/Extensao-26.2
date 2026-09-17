<script setup>
import { computed } from "vue";
import StatusBadge from "./StatusBadge.vue";

const props = defineProps({
  summary: {
    type: Object,
    required: true,
  },
  scope: {
    type: String,
    default: "elementos",
  },
});

const statusText = computed(() => {
  if (!props.summary.totalElements) return "Nenhum elemento cadastrado";
  if (props.summary.overallStatus === "conforme") return "Todos os elementos estão conformes";
  if (props.summary.overallStatus === "nao_conforme") return "Há elementos não conformes";
  return "Há elementos pendentes de avaliação";
});
</script>

<template>
  <section class="evaluation-summary" aria-labelledby="evaluation-summary-title">
    <div class="evaluation-summary__heading">
      <div>
        <p class="eyebrow">Laudo consolidado</p>
        <h2 id="evaluation-summary-title">Situação do {{ scope }}</h2>
        <p>{{ statusText }}</p>
      </div>
      <div class="evaluation-summary__score">
        <strong>{{ summary.score }}%</strong>
        <span>conformes</span>
      </div>
    </div>

    <div class="evaluation-summary__cards">
      <div class="evaluation-summary__card evaluation-summary__card--conforme">
        <span>Conformes</span><strong>{{ summary.conforme }}</strong>
      </div>
      <div class="evaluation-summary__card evaluation-summary__card--nao_conforme">
        <span>Não conformes</span><strong>{{ summary.nao_conforme }}</strong>
      </div>
      <div class="evaluation-summary__card evaluation-summary__card--nao_avaliado">
        <span>Pendentes</span><strong>{{ summary.nao_avaliado }}</strong>
      </div>
    </div>

    <StatusBadge v-if="summary.totalElements" :status="summary.overallStatus" />
  </section>
</template>
