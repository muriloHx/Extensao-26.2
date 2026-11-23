<script setup>
defineProps({
  title: String,
  text: String,
  // Ícone do tipo da lista: Lucide, exibido grande e suave acima do título.
  icon: { type: [Object, Function], default: null },
});
</script>

<template>
  <section class="empty-state">
    <span v-if="icon" class="empty-state__icon" aria-hidden="true">
      <component :is="icon" :size="28" />
    </span>

    <h2>{{ title }}</h2>
    <p>{{ text }}</p>

    <div v-if="$slots.default" class="empty-state__actions">
      <slot />
    </div>
  </section>
</template>
