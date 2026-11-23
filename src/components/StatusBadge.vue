<script setup>
import { computed } from "vue";
import { CircleCheck, CircleDashed, CircleX } from "@lucide/vue";
import { statusBucket, statusLabel } from "../core/evaluationStatus.js";

// O ícone acompanha o grupo do status: sob sol a cor sozinha não separa
// vermelho de verde (DESIGN.md › Cores).
const ICONS = {
  conforme: CircleCheck,
  nao_conforme: CircleX,
  pendente: CircleDashed,
};

const props = defineProps({ status: { type: String, default: "nao_avaliado" } });

const icon = computed(() => ICONS[statusBucket(props.status)]);
</script>

<template>
  <span class="status" :class="`status--${status}`">
    <component :is="icon" :size="14" aria-hidden="true" />
    <span>{{ statusLabel(status) }}</span>
  </span>
</template>
