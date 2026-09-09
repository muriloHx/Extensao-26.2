<script setup>
import { computed, onMounted, onUnmounted, ref } from "vue";
import { RouterView } from "vue-router";
import { useRegisterSW } from "virtual:pwa-register/vue";
import AppLayout from "./layouts/AppLayout.vue";

const deferredPrompt = ref(null);
const status = ref("");
const standalone = ref(false);

const { offlineReady } = useRegisterSW();

const canInstall = computed(() => Boolean(deferredPrompt.value));

let displayMode;

function updateDisplayMode() {
  if (import.meta.env.DEV) {
    standalone.value = true;
    return;
  }

  standalone.value =
    window.matchMedia("(display-mode: standalone)").matches ||
    window.navigator.standalone === true;
}

function onBeforeInstall(event) {
  event.preventDefault();
  deferredPrompt.value = event;
  status.value = "";
}

async function install() {
  if (!deferredPrompt.value) {
    status.value =
      "A instalação ainda não está disponível pelo botão. Use o menu do navegador para instalar.";
    return;
  }

  await deferredPrompt.value.prompt();

  const { outcome } = await deferredPrompt.value.userChoice;

  deferredPrompt.value = null;

  status.value =
    outcome === "accepted"
      ? "Instalação iniciada."
      : "A instalação foi cancelada.";
}

function onInstalled() {
  deferredPrompt.value = null;
  status.value = "Aplicativo instalado.";
  updateDisplayMode();
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

  window.removeEventListener(
    "beforeinstallprompt",
    onBeforeInstall
  );

  window.removeEventListener("appinstalled", onInstalled);
});

window.addEventListener("beforeinstallprompt", (event) => {
  console.log("beforeinstallprompt DISPAROU", event);
});

</script>

<template>
  <main
    v-if="!standalone"
    class="install-screen"
    aria-labelledby="install-title"
  >
    <section class="install-screen__card">
      <span class="install-screen__icon">↓</span>

      <p class="eyebrow">Acesso pelo aplicativo</p>

      <h1 id="install-title">
        Instale o aplicativo para continuar
      </h1>

      <p>
        Este sistema só pode ser utilizado como aplicativo instalado.
      </p>

      <button
        class="button"
        type="button"
        @click="install"
      >
        Instalar Aplicativo
      </button>

      <p
        class="install-screen__status"
        aria-live="polite"
      >
        {{
          status ||
          (canInstall
            ? ""
            : "A opção de instalação aparecerá quando disponível.")
        }}
      </p>
    </section>
  </main>

  <AppLayout v-else>
    <RouterView />
  </AppLayout>
</template>
