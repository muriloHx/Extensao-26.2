<script setup>
import { Ellipsis } from "@lucide/vue";
import { nextTick, onBeforeUnmount, ref } from "vue";

const props = defineProps({
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

// Setas percorrem os itens; o Tab sai do menu sem devolver o foco ao botão.
function onKeyDown(event) {
  if (event.key === "Escape") {
    event.preventDefault();
    close();
    return;
  }

  if (event.key === "Tab") {
    close({ restoreFocus: false });
    return;
  }

  if (!["ArrowDown", "ArrowUp", "Home", "End"].includes(event.key)) return;

  const options = buttons();
  if (!options.length) return;

  event.preventDefault();
  const current = options.indexOf(document.activeElement);

  if (event.key === "Home") {
    options[0].focus();
  } else if (event.key === "End") {
    options[options.length - 1].focus();
  } else if (event.key === "ArrowDown") {
    options[(current + 1) % options.length].focus();
  } else {
    options[(current - 1 + options.length) % options.length].focus();
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
  close({ restoreFocus: false });
  emit("select", item.id);
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
      :aria-expanded="open"
      @click="toggle"
    >
      <Ellipsis :size="20" aria-hidden="true" />
    </button>

    <Teleport to="body">
      <ul
        v-if="open"
        ref="list"
        class="action-menu__list"
        role="menu"
        :aria-label="label"
        :style="{ top: `${position.top}px`, right: `${position.right}px` }"
      >
        <li v-for="item in items" :key="item.id">
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
