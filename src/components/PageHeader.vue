<script setup>
import { CircleHelp } from "@lucide/vue";

defineProps({
  title: { type: String, required: true },
  description: String,
  helpButton: Boolean,
});

defineEmits(["help"]);
</script>

<template>
  <header class="page-header">
    <div class="page-header__row">
      <div>
        <div class="page-header__heading">
          <h1>{{ title }}</h1>
          <button
            v-if="helpButton"
            class="page-header__help"
            type="button"
            title="Ajuda"
            aria-label="Ajuda"
            @click="$emit('help')"
          >
            <CircleHelp :size="14" aria-hidden="true" />
          </button>
        </div>
        <p v-if="description">{{ description }}</p>
      </div>
      <slot name="action" />
    </div>
  </header>
</template>
