<script setup>
import { computed } from "vue";
import { plural } from "../core/plural.js";
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
  // Linha de contadores do cabeçalho, em vez do bloco com cartões.
  compact: Boolean,
  // Número de ambientes do projeto — só aparece no modo compacto.
  environmentCount: {
    type: Number,
    default: null,
  },
  // Mostra "N avaliados" (telas de ambiente).
  showEvaluated: Boolean,
});

const evaluatedCount = computed(
  () => props.summary.conforme + props.summary.nao_conforme
);

const statusText = computed(() => {
  if (!props.summary.totalElements) return "Nenhum elemento cadastrado";
  if (props.summary.overallStatus === "conforme") return "Todos os elementos estão conformes";
  if (props.summary.overallStatus === "nao_conforme") return "Há elementos não conformes";
  return "Há elementos pendentes de avaliação";
});

const compactItems = computed(() => {
  const items = [];

  if (props.environmentCount !== null) {
    items.push(plural(props.environmentCount, "ambiente", "ambientes"));
  }

  items.push(plural(props.summary.totalElements, "elemento", "elementos"));

  if (props.showEvaluated) {
    items.push(plural(evaluatedCount.value, "avaliado", "avaliados"));
  }

  items.push(plural(props.summary.pendente, "pendência", "pendências"));

  return items;
});
</script>

<template>
  <!-- Contadores do cabeçalho: uma linha só, abaixo do título. -->
  <p v-if="compact" class="evaluation-summary evaluation-summary--compact">
    <template v-for="(item, index) in compactItems" :key="item">
      <span v-if="index" class="evaluation-summary__separator" aria-hidden="true">·</span>
      <span>{{ item }}</span>
    </template>
  </p>

  <section v-else class="evaluation-summary" aria-labelledby="evaluation-summary-title">
    <div class="evaluation-summary__heading">
      <div>
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
