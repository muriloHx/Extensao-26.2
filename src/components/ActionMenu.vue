<script setup>
import { Ellipsis } from "@lucide/vue";
import { nextTick, onBeforeUnmount, ref, useId } from "vue";

defineProps({
  label: { type: String, default: "Mais ações" },
  // [{ id, label, icon, danger }]
  items: { type: Array, required: true },
});

const emit = defineEmits(["select"]);

const trigger = ref(null);
const list = ref(null);
const itemButtons = ref([]);
const open = ref(false);
const position = ref({ top: 0, right: 0 });
// O id só existe no DOM enquanto a lista está aberta.
const listId = `action-menu-${useId()}`;

function buttons() {
  return itemButtons.value.filter(Boolean);
}

function close({ restoreFocus = true } = {}) {
  if (!open.value) return;

  open.value = false;
  document.removeEventListener("pointerdown", onPointerDown, true);
  document.removeEventListener("keydown", onKeyDown);
  window.removeEventListener("scroll", onScroll, true);
  window.removeEventListener("resize", onScroll);

  if (restoreFocus) nextTick(() => trigger.value?.focus?.());
}

function onPointerDown(event) {
  const target = event.target;

  if (trigger.value?.contains(target) || list.value?.contains(target)) return;
  close({ restoreFocus: false });
}

function onScroll() {
  close({ restoreFocus: false });
}

// Setas percorrem os itens; o Tab fecha o menu e segue a partir do botão.
function onKeyDown(event) {
  if (event.key === "Escape") {
    event.preventDefault();
    close();
    return;
  }

  if (event.key === "Tab") {
    // Devolve o foco ao botão antes da ação padrão: o Tab continua a partir dele.
    trigger.value?.focus?.();
    close({ restoreFocus: false });
    return;
  }

  if (!["ArrowDown", "ArrowUp", "Home", "End"].includes(event.key)) return;

  // Fora da lista, as setas continuam rolando a página.
  if (!buttons().some((button) => button === document.activeElement)) return;

  const options = buttons();
  event.preventDefault();

  if (event.key === "Home") {
    options[0].focus();
  } else if (event.key === "End") {
    options[options.length - 1].focus();
  } else {
    const current = options.indexOf(document.activeElement);
    const step = event.key === "ArrowDown" ? 1 : -1;
    options[(current + step + options.length) % options.length].focus();
  }
}

async function show() {
  const rect = trigger.value.getBoundingClientRect();

  // O menu nasce no body: o card tem overflow hidden e recortaria a lista.
  position.value = {
    top: Math.round(rect.bottom + 4),
    right: Math.round(window.innerWidth - rect.right),
  };
  open.value = true;

  document.addEventListener("pointerdown", onPointerDown, true);
  document.addEventListener("keydown", onKeyDown);
  window.addEventListener("scroll", onScroll, true);
  window.addEventListener("resize", onScroll);

  await nextTick();

  const height = list.value?.offsetHeight ?? 0;
  if (position.value.top + height > window.innerHeight - 8) {
    position.value = {
      ...position.value,
      top: Math.max(8, Math.round(rect.top - height - 4)),
    };
  }

  buttons()[0]?.focus();
}

function toggle() {
  if (open.value) close();
  else show();
}

function select(item) {
  // Quem abriu o menu recebe o foco de volta quando a ação terminar.
  const opener = trigger.value;
  close({ restoreFocus: false });
  emit("select", item.id, opener);
}

onBeforeUnmount(() => close({ restoreFocus: false }));
</script>

<template>
  <div class="action-menu">
    <button
      ref="trigger"
      class="action-menu__trigger"
      type="button"
      :aria-label="label"
      aria-haspopup="menu"
      :aria-controls="open ? listId : null"
      :aria-expanded="open"
      @click="toggle"
    >
      <Ellipsis :size="20" aria-hidden="true" />
    </button>

    <Teleport to="body">
      <ul
        v-if="open"
        :id="listId"
        ref="list"
        class="action-menu__list"
        role="menu"
        :aria-label="label"
        :style="{ top: `${position.top}px`, right: `${position.right}px` }"
      >
        <li v-for="item in items" :key="item.id" role="none">
          <button
            ref="itemButtons"
            class="action-menu__item"
            :class="{ 'action-menu__item--danger': item.danger }"
            type="button"
            role="menuitem"
            @click="select(item)"
          >
            <component :is="item.icon" v-if="item.icon" :size="18" aria-hidden="true" />
            <span>{{ item.label }}</span>
          </button>
        </li>
      </ul>
    </Teleport>
  </div>
</template>
