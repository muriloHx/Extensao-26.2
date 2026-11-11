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

<style scoped>
.confirm-backdrop {
  position: fixed;
  inset: 0;
  z-index: 1000;
  display: grid;
  place-items: center;
  overflow-y: auto;
  padding: 24px;
  background: color-mix(in srgb, var(--text) 60%, transparent);
}

.confirm-popup {
  width: min(100%, 400px);
  padding: 24px;
  border-radius: var(--radius-card);
  background: var(--surface);
  color: var(--text);
  box-shadow: var(--shadow-md), var(--edge);
}

.confirm-popup__message {
  margin: 0 0 24px;
  font-size: 1rem;
  line-height: 1.6;
  text-wrap: pretty;
}

.confirm-popup__actions {
  display: flex;
  justify-content: flex-end;
  gap: 8px;
}

.confirm-popup__button {
  min-height: 44px;
  padding: 12px 16px;
  border: 1px solid transparent;
  border-radius: var(--radius-control);
  font: inherit;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color var(--dur-fast) var(--ease);
}

.confirm-popup__button--cancel {
  border-color: var(--border);
  background: transparent;
  color: var(--text);
}

.confirm-popup__button--cancel:hover {
  background: var(--fill);
}

.confirm-popup__button--accept {
  background: var(--error);
  color: var(--on-brand);
}

@media (max-width: 480px) {
  .confirm-backdrop {
    padding: 16px;
  }

  .confirm-popup {
    width: 100%;
    padding: 20px;
  }

  .confirm-popup__actions {
    flex-direction: column;
    gap: 12px;
  }

  .confirm-popup__button {
    width: 100%;
  }
}
</style>
