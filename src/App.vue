<script setup>
import { onMounted, provide, ref } from "vue";
import { RouterView, useRoute } from "vue-router";
import AppLayout from "./layouts/AppLayout.vue";
import ConfirmPopup from "./components/ConfirmPopup.vue";
import WelcomePopup from "./components/WelcomePopup.vue";

const confirmPopup = ref(null);
const showWelcome = ref(false);
const route = useRoute();
provide("confirmPopup", {
  open: (options) => confirmPopup.value?.open(options),
});

onMounted(() => {
  const welcomeSeen = localStorage.getItem("welcomePopupSeen");
  if (route.path === "/projects" && !welcomeSeen) {
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
