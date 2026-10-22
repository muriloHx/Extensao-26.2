<script setup>
import { onMounted, provide, ref } from "vue";
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
});

onMounted(async () => {
  await router.isReady();

  const isPwa = window.matchMedia?.("(display-mode: standalone)")?.matches
    || navigator.standalone === true;
  const welcomeSeen = localStorage.getItem("welcomePopupSeen");

  if (route.path === "/projects" && !isPwa && !welcomeSeen) {
    localStorage.setItem("welcomePopupSeen", "true");
    showWelcome.value = true;
  }
});
</script>

<template>
  <AppLayout>
    <RouterView />
  </AppLayout>
  <ConfirmPopup ref="confirmPopup" />
  <WelcomePopup v-if="showWelcome" @close="showWelcome = false" />
</template>
