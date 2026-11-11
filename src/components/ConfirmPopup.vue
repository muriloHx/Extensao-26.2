<script setup>
import { nextTick, onBeforeUnmount, ref } from "vue";

const cancelButton = ref(null);
const acceptButton = ref(null);
const visible = ref(false);
const message = ref("");
let target = null;
let acceptAction = null;
let previousBodyOverflow = "";

function onKeyDown(event) {
  if (event.key === "Escape") {
    event.preventDefault();
    close();
    return;
  }

  if (event.key !== "Tab") return;

  const first = cancelButton.value;
  const last = acceptButton.value;
  if (!first || !last) return;

  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault();
    last.focus();
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault();
    first.focus();
  }
}

function removeListeners() {
  document.removeEventListener("keydown", onKeyDown);
  document.body.style.overflow = previousBodyOverflow;
}

function close({ restoreFocus = true } = {}) {
  if (!visible.value) return;

  visible.value = false;
  removeListeners();
  target?.removeAttribute("aria-expanded");
  target?.removeAttribute("aria-controls");
  const previousTarget = target;
  target = null;
  acceptAction = null;
  if (restoreFocus) nextTick(() => previousTarget?.focus?.());
}

async function open(options) {
  close({ restoreFocus: false });
  target = options.target;
  message.value = options.message;
  acceptAction = options.onAccept;
  visible.value = true;
  target?.setAttribute("aria-expanded", "true");
  target?.setAttribute("aria-controls", "confirm-popup");

  previousBodyOverflow = document.body.style.overflow;
  document.body.style.overflow = "hidden";
  document.addEventListener("keydown", onKeyDown);

  await nextTick();
  cancelButton.value?.focus();
}

async function accept() {
  const action = acceptAction;
  close({ restoreFocus: false });
  await action?.();
}

defineExpose({ open });
onBeforeUnmount(() => {
  document.removeEventListener("keydown", onKeyDown);
  document.body.style.overflow = previousBodyOverflow;
  target?.removeAttribute("aria-expanded");
  target?.removeAttribute("aria-controls");
});
</script>

<template>
  <Teleport to="body">
    <div v-if="visible" class="confirm-backdrop" @click.self="close()">
      <section
        id="confirm-popup"
        class="confirm-popup"
        role="alertdialog"
        aria-modal="true"
        aria-labelledby="confirm-popup-message"
      >
        <p id="confirm-popup-message" class="confirm-popup__message">{{ message }}</p>
        <div class="confirm-popup__actions">
          <button ref="cancelButton" class="confirm-popup__button confirm-popup__button--cancel" type="button" @click="close()">
            Cancelar
          </button>
          <button ref="acceptButton" class="confirm-popup__button confirm-popup__button--accept" type="button" @click="accept">
            Excluir
          </button>
        </div>
      </section>
    </div>
  </Teleport>
</template>

