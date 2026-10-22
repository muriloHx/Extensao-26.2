<script setup>
defineProps({ title: { type: String, required: true }, description: String });
</script>

<template>
  <header class="page-header">
    <div class="page-header__row">
      <div>
        <h1>{{ title }}</h1>
        <p v-if="description">{{ description }}</p>
      </div>
      <slot name="action" />
    </div>
  </header>
</template>
