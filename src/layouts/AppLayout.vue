<script setup>
import { computed, nextTick, onBeforeUnmount, onMounted, ref, watch } from "vue";
import { BookOpen, Folder, UserRound, Zap } from "@lucide/vue";
import { RouterLink, useRoute } from "vue-router";

const route = useRoute();
const area = computed(() => {
  if (route.path.startsWith("/rules")) return "rules";
  if (route.path.startsWith("/quick-evaluation")) return "quick";
  if (route.path.startsWith("/account")) return "account";
  return "projects";
});
const year = new Date().getFullYear();
const repositoryUrl = "https://github.com/muriloHx/Extensao-26.2";
const content = ref(null);
let interacted = false;

// Leva o foco para o conteúdo depois de cada navegação: quem usa teclado ou
// leitor de tela continua de onde a tela nova começa, em vez de tabular pela
// navegação inteira de novo.
async function focusContent() {
  await nextTick();
  content.value?.focus();
}

// A abertura do app resolve a rota inicial sozinha ("" → "/projects"), o que
// dispara o watch abaixo. Sem esta trava, a tela abriria com o anel de foco em
// volta do conteúdo sem o usuário ter navegado para lugar nenhum.
function markInteraction() {
  interacted = true;
}

onMounted(() => {
  document.addEventListener("pointerdown", markInteraction, { passive: true });
  document.addEventListener("keydown", markInteraction);
});

onBeforeUnmount(() => {
  document.removeEventListener("pointerdown", markInteraction);
  document.removeEventListener("keydown", markInteraction);
});

watch(() => route.fullPath, () => {
  if (interacted) focusContent();
});
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
          <Zap :size="20" aria-hidden="true" />
          <span>Avaliação rápida</span>
        </RouterLink>
        <RouterLink class="nav-item" :class="{ 'is-active': area === 'rules' }" to="/rules">
          <BookOpen :size="20" aria-hidden="true" />
          <span>Regras</span>
        </RouterLink>
        <RouterLink class="nav-item" :class="{ 'is-active': area === 'account' }" to="/account">
          <UserRound :size="20" aria-hidden="true" />
          <span>Conta</span>
        </RouterLink>
      </nav>
    </aside>
    <main id="conteudo" ref="content" class="content" tabindex="-1"><slot /></main>
    <nav class="bottom-nav" v-if="!route.meta.hideBottomNav">
      <RouterLink class="nav-item" :class="{ 'is-active': area === 'projects' }" to="/projects">
        <Folder :size="20" aria-hidden="true" />
        <span>Projetos</span>
      </RouterLink>
      <RouterLink class="nav-item" :class="{ 'is-active': area === 'quick' }" to="/quick-evaluation" aria-label="Avaliação rápida">
        <Zap :size="20" aria-hidden="true" />
        <span>Rápida</span>
      </RouterLink>
      <RouterLink class="nav-item" :class="{ 'is-active': area === 'rules' }" to="/rules">
        <BookOpen :size="20" aria-hidden="true" />
        <span>Regras</span>
      </RouterLink>
      <RouterLink class="nav-item" :class="{ 'is-active': area === 'account' }" to="/account">
        <UserRound :size="20" aria-hidden="true" />
        <span>Conta</span>
      </RouterLink>
    </nav>
    <footer class="app-footer">
      <p class="app-footer__legal">© {{ year }} Acesso Verificador · Licença MIT</p>
      <a class="app-footer__link" :href="repositoryUrl" target="_blank" rel="noopener noreferrer">GitHub</a>
    </footer>
  </div>
</template>
