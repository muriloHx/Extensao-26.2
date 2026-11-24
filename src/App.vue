<script setup>
import { onBeforeUnmount, onMounted, provide, ref } from "vue";
import { RouterView, useRoute } from "vue-router";
import AppLayout from "./layouts/AppLayout.vue";
import ConfirmPopup from "./components/ConfirmPopup.vue";
import WelcomePopup from "./components/WelcomePopup.vue";
import router from "./router";

const confirmPopup = ref(null);
const showWelcome = ref(false);
const route = useRoute();
provide("confirmPopup", {
  open: (options) => confirmPopup.value?.open(options),
  confirm: (event, message, onAccept) =>
    confirmPopup.value?.confirm(event, message, onAccept),
});

// A troca do IndexedDB por um snapshot remoto pode terminar depois de o usuário
// sair da tela Conta. Nesse caso, a rota atual precisa reler os dados.
function refreshAfterRestore() {
  if (route.name !== "account") window.location.reload();
}

onMounted(async () => {
  window.addEventListener("cloud-data-restored", refreshAfterRestore);
  await router.isReady();

  const isPwa = window.matchMedia?.("(display-mode: standalone)")?.matches
    || navigator.standalone === true;
  const welcomeSeen = localStorage.getItem("welcomePopupSeen");

  if (route.path === "/projects" && !isPwa && !welcomeSeen) {
    localStorage.setItem("welcomePopupSeen", "true");
    showWelcome.value = true;
  }
});

onBeforeUnmount(() => {
  window.removeEventListener("cloud-data-restored", refreshAfterRestore);
});
</script>

<template>
  <AppLayout>
    <RouterView />
  </AppLayout>
  <ConfirmPopup ref="confirmPopup" />
  <WelcomePopup v-if="showWelcome" @close="showWelcome = false" />
</template>
