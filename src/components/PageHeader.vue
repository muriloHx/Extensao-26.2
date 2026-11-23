<script setup>
import { computed } from "vue";
import { ChevronLeft, CircleHelp, Pencil, Trash2 } from "@lucide/vue";
import { RouterLink } from "vue-router";
import ActionMenu from "./ActionMenu.vue";

const props = defineProps({
  title: { type: String, required: true },
  description: String,
  // Nome do projeto/ambiente onde a tela está: breadcrumb secundário.
  parent: String,
  backTo: [String, Object],
  helpButton: Boolean,
  menu: Boolean,
});

const emit = defineEmits(["help", "rename", "delete"]);

const backLabel = computed(() =>
  props.parent ? `Voltar para ${props.parent}` : "Voltar para a tela anterior"
);

const menuItems = [
  { id: "rename", label: "Renomear", icon: Pencil },
  { id: "delete", label: "Excluir", icon: Trash2, danger: true },
];

// Os ids do menu são os mesmos nomes dos eventos: "rename" e "delete". O
// botão que abriu o menu acompanha o evento para receber o foco de volta.
function onMenuSelect(id, opener) {
  emit(id, opener);
}
</script>

<template>
  <header class="page-header">
    <div v-if="backTo || helpButton || menu" class="page-header__bar">
      <RouterLink
        v-if="backTo"
        class="page-header__back"
        :to="backTo"
        :aria-label="backLabel"
      >
        <ChevronLeft :size="24" aria-hidden="true" />
      </RouterLink>

      <div v-if="helpButton || menu" class="page-header__bar-actions">
        <button
          v-if="helpButton"
          class="page-header__help"
          type="button"
          title="Ajuda"
          aria-label="Ajuda"
          @click="emit('help')"
        >
          <CircleHelp :size="20" aria-hidden="true" />
        </button>

        <ActionMenu
          v-if="menu"
          :label="`Ações de ${title}`"
          :items="menuItems"
          @select="onMenuSelect"
        />
      </div>
    </div>

    <div class="page-header__row">
      <div class="page-header__main">
        <p v-if="parent" class="page-header__parent">{{ parent }}</p>
        <h1>{{ title }}</h1>
        <slot name="summary" />
        <p v-if="description" class="page-header__description">{{ description }}</p>
      </div>

      <div v-if="$slots.action" class="page-header__tools"><slot name="action" /></div>
    </div>
  </header>
</template>
