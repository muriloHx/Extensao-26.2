<script setup>
import { provide, ref } from "vue";
import { RouterView } from "vue-router";
import AppLayout from "./layouts/AppLayout.vue";
import ConfirmPopup from "./components/ConfirmPopup.vue";

const confirmPopup = ref(null);
provide("confirmPopup", {
  open: (options) => confirmPopup.value?.open(options),
});
</script>

<template>
  <AppLayout>
    <RouterView />
  </AppLayout>
  <ConfirmPopup ref="confirmPopup" />
</template>
