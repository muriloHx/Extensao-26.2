<script setup>
import { nextTick, onBeforeUnmount, ref } from "vue";

const popup = ref(null);
const cancelButton = ref(null);
const visible = ref(false);
const message = ref("");
const position = ref({ top: "0px", left: "0px" });
let target = null;
let acceptAction = null;

function positionPopup() {
  if (!target || !popup.value) return;

  const targetRect = target.getBoundingClientRect();
  const popupRect = popup.value.getBoundingClientRect();
  const gap = 8;
  const margin = 12;
  const below = targetRect.bottom + gap + popupRect.height <= window.innerHeight - margin;
  const top = below
    ? targetRect.bottom + gap
    : Math.max(margin, targetRect.top - popupRect.height - gap);
  const left = Math.min(
    Math.max(margin, targetRect.left),
    Math.max(margin, window.innerWidth - popupRect.width - margin),
  );

  position.value = { top: `${top}px`, left: `${left}px` };
}

function onPointerDown(event) {
  if (!popup.value?.contains(event.target) && !target?.contains(event.target)) {
    close({ restoreFocus: false });
  }
}

function onKeyDown(event) {
  if (event.key === "Escape") {
    event.preventDefault();
    close();
  }
}

function removeListeners() {
  document.removeEventListener("pointerdown", onPointerDown, true);
  document.removeEventListener("keydown", onKeyDown);
  window.removeEventListener("resize", positionPopup);
  window.removeEventListener("scroll", positionPopup, true);
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

  await nextTick();
  positionPopup();
  document.addEventListener("pointerdown", onPointerDown, true);
  document.addEventListener("keydown", onKeyDown);
  window.addEventListener("resize", positionPopup);
  window.addEventListener("scroll", positionPopup, true);
  cancelButton.value?.focus();
}

async function accept() {
  const action = acceptAction;
  close({ restoreFocus: false });
  await action?.();
}

defineExpose({ open });
onBeforeUnmount(() => {
  removeListeners();
  target?.removeAttribute("aria-expanded");
  target?.removeAttribute("aria-controls");
});
</script>

<template>
  <Teleport to="body">
    <section
      v-if="visible"
      id="confirm-popup"
      ref="popup"
      class="confirm-popup"
      role="alertdialog"
      aria-modal="false"
      aria-labelledby="confirm-popup-message"
      :style="position"
    >
      <p id="confirm-popup-message" class="confirm-popup__message">{{ message }}</p>
      <div class="confirm-popup__actions">
        <button ref="cancelButton" class="confirm-popup__button confirm-popup__button--cancel" type="button" @click="close()">
          Cancelar
        </button>
        <button class="confirm-popup__button confirm-popup__button--accept" type="button" @click="accept">
          Excluir
        </button>
      </div>
    </section>
  </Teleport>
</template>

<style scoped>
.confirm-popup {
  position: fixed;
  z-index: 1000;
  width: min(320px, calc(100vw - 24px));
  padding: 24px;
  border-radius: var(--radius-card);
  background: var(--surface);
  color: var(--text);
  box-shadow: var(--shadow-md), var(--edge);
}

.confirm-popup__message {
  margin: 0 0 16px;
  font-size: 1rem;
  line-height: 1.6;
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
</style>
