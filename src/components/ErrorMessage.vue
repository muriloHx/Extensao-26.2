<script setup>
import { CircleAlert } from "@lucide/vue";

defineProps({
  message: String,
});
</script>

<template>
  <p v-if="message" class="alert alert--error" role="alert">
    <CircleAlert :size="16" aria-hidden="true" />
    <span>{{ message }}</span>
  </p>
</template>
