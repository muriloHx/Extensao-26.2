<script setup>
import { computed } from "vue";
import { ClipboardCheck, Folder } from "@lucide/vue";
import { RouterLink, useRoute } from "vue-router";

const route = useRoute();
const area = computed(() => route.path.startsWith("/rules") ? "rules" : "projects");
</script>

<template>
  <div class="app-shell">
    <aside class="sidebar">
      <RouterLink class="brand" to="/projects">
        <img class="brand__mark" src="/icon-512.png" alt="Acesso Verificador">
        <span>Acesso<br><small>Verificador</small></span>
      </RouterLink>
      <nav>
        <RouterLink class="nav-item" :class="{ 'is-active': area === 'projects' }" to="/projects">
          <Folder :size="20" aria-hidden="true" />
          <span>Projetos</span>
        </RouterLink>
        <RouterLink class="nav-item" :class="{ 'is-active': area === 'rules' }" to="/rules">
          <ClipboardCheck :size="20" aria-hidden="true" />
          <span>Regras</span>
        </RouterLink>
      </nav>
    </aside>
    <main class="content" tabindex="-1"><slot /></main>
    <nav class="bottom-nav">
      <RouterLink class="nav-item" :class="{ 'is-active': area === 'projects' }" to="/projects">
        <Folder :size="20" aria-hidden="true" />
        <span>Projetos</span>
      </RouterLink>
      <RouterLink class="nav-item" :class="{ 'is-active': area === 'rules' }" to="/rules">
        <ClipboardCheck :size="20" aria-hidden="true" />
        <span>Regras</span>
      </RouterLink>
    </nav>
  </div>
</template>
