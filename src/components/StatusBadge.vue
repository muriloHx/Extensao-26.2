<script setup>
import { statusLabel } from "../core/evaluationStatus.js";

defineProps({ status: { type: String, default: "nao_avaliado" } });
</script>

<template>
  <span class="status" :class="`status--${status}`">{{ statusLabel(status) }}</span>
</template>
