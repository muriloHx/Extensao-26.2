<script setup>
import { computed, onMounted, onUnmounted, ref } from "vue";
import { RouterView } from "vue-router";
import AppLayout from "./layouts/AppLayout.vue";

const deferredPrompt = ref();
const status = ref("");
const standalone = ref(false);
const canInstall = computed(() => Boolean(deferredPrompt.value));
let displayMode;

function updateDisplayMode() {
  // Em desenvolvimento (npm run dev), ignora a trava de PWA.
  // Em produção (npm run build), aplica a checagem real.
  if (import.meta.env.DEV) {
    standalone.value = true;
    return;
  }

  standalone.value =
    window.matchMedia("(display-mode: standalone)").matches ||
    window.navigator.standalone === true;
}

async function install() {
  if (!deferredPrompt.value) {
    status.value = "Use o menu do navegador para instalar este aplicativo.";
    return;
  }
  await deferredPrompt.value.prompt();
  const { outcome } = await deferredPrompt.userChoice;
  deferredPrompt.value = undefined;
  status.value =
    outcome === "accepted"
      ? "Instalação iniciada. Abra o aplicativo instalado para continuar."
      : "A instalação foi cancelada.";
}

function onBeforeInstall(event) {
  event.preventDefault();
  deferredPrompt.value = event;
  status.value = "";
}

function onInstalled() {
  deferredPrompt.value = undefined;
  status.value =
    "Aplicativo instalado. Abra-o pela tela inicial para continuar.";
}

onMounted(() => {
  updateDisplayMode();
  displayMode = window.matchMedia("(display-mode: standalone)");
  displayMode.addEventListener("change", updateDisplayMode);
  window.addEventListener("beforeinstallprompt", onBeforeInstall);
  window.addEventListener("appinstalled", onInstalled);
});

onUnmounted(() => {
  displayMode?.removeEventListener("change", updateDisplayMode);
  window.removeEventListener("beforeinstallprompt", onBeforeInstall);
  window.removeEventListener("appinstalled", onInstalled);
});
</script>

<template>
  <main v-if="!standalone" class="install-screen" aria-labelledby="install-title">
    <section class="install-screen__card">
      <span class="install-screen__icon">↓</span>
      <p class="eyebrow">Acesso pelo aplicativo</p>
      <h1 id="install-title">Instale o aplicativo para continuar</h1>
      <p>Este sistema só pode ser utilizado como aplicativo instalado.</p>
      <button class="button" type="button" :disabled="!canInstall" @click="install">
        Instalar Aplicativo
      </button>
      <p class="install-screen__status" aria-live="polite">
        {{ status || (canInstall ? "" : "A opção de instalação aparecerá quando disponível.") }}
      </p>
    </section>
  </main>

  <AppLayout v-else>
    <RouterView />
  </AppLayout>
</template>
