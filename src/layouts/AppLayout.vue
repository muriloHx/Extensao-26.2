<script setup>
import { computed, nextTick, ref, watch } from "vue";
import { ClipboardCheck, Folder } from "@lucide/vue";
import { RouterLink, useRoute } from "vue-router";

const route = useRoute();
const area = computed(() => route.path.startsWith("/rules") ? "rules" : route.path.startsWith("/quick-evaluation") ? "quick" : "projects");
const content = ref(null);

// Leva o foco para o conteúdo depois de cada navegação: quem usa teclado ou
// leitor de tela continua de onde a tela nova começa, em vez de tabular pela
// navegação inteira de novo.
async function focusContent() {
  await nextTick();
  content.value?.focus();
}

watch(() => route.fullPath, focusContent);
</script>

<template>
  <div class="app-shell">
    <a class="skip-link" href="#conteudo" @click.prevent="focusContent">Pular para o conteúdo</a>
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
        <RouterLink class="nav-item" :class="{ 'is-active': area === 'quick' }" to="/quick-evaluation">
          <ClipboardCheck :size="20" aria-hidden="true" />
          <span>Avaliação rápida</span>
        </RouterLink>
        <RouterLink class="nav-item" :class="{ 'is-active': area === 'rules' }" to="/rules">
          <ClipboardCheck :size="20" aria-hidden="true" />
          <span>Regras</span>
        </RouterLink>
      </nav>
    </aside>
    <main id="conteudo" ref="content" class="content" tabindex="-1"><slot /></main>
    <nav class="bottom-nav" v-if="!route.meta.hideBottomNav">
      <RouterLink class="nav-item" :class="{ 'is-active': area === 'projects' }" to="/projects">
        <Folder :size="20" aria-hidden="true" />
        <span>Projetos</span>
      </RouterLink>
      <RouterLink class="nav-item" :class="{ 'is-active': area === 'quick' }" to="/quick-evaluation">
        <ClipboardCheck :size="20" aria-hidden="true" />
        <span>Avaliação rápida</span>
      </RouterLink>
      <RouterLink class="nav-item" :class="{ 'is-active': area === 'rules' }" to="/rules">
        <ClipboardCheck :size="20" aria-hidden="true" />
        <span>Regras</span>
      </RouterLink>
    </nav>
  </div>
</template>
