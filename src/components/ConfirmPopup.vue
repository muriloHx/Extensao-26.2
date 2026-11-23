<script setup>
import { computed, nextTick, onBeforeUnmount, ref } from "vue";

const cancelButton = ref(null);
const acceptButton = ref(null);
const visible = ref(false);
const title = ref("");
const message = ref("");
const details = ref("");
const acceptLabel = ref("Excluir");

// O texto que complementa o título entra na descrição do diálogo; só vale
// apontar para um id que existe na tela.
const describedBy = computed(() => {
  if (message.value) return "confirm-popup-message";
  if (details.value) return "confirm-popup-details";
  return null;
});

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

  const focusables = [cancelButton.value, acceptButton.value].filter(Boolean);
  if (!focusables.length) return;

  const first = focusables[0];
  const last = focusables[focusables.length - 1];
  const active = document.activeElement;

  // Se o foco escapou do diálogo, traz de volta antes de continuar o Tab.
  if (!focusables.includes(active)) {
    event.preventDefault();
    (event.shiftKey ? last : first).focus();
    return;
  }

  if (event.shiftKey && active === first) {
    event.preventDefault();
    last.focus();
  } else if (!event.shiftKey && active === last) {
    event.preventDefault();
    first.focus();
  }
}

function removeListeners() {
  document.removeEventListener("keydown", onKeyDown);
  document.body.style.overflow = previousBodyOverflow;
}

function focusContent() {
  document.getElementById("conteudo")?.focus?.();
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

  // Sem alvo (ex.: exclusão aberta por um menu que já fechou), o foco volta
  // para o conteúdo em vez de se perder no body.
  if (restoreFocus) {
    nextTick(() => {
      if (previousTarget?.isConnected) previousTarget.focus?.();
      else focusContent();
    });
  }
}

async function open(options) {
  close({ restoreFocus: false });
  target = options.target ?? null;
  title.value = options.title ?? "Confirmar exclusão";
  message.value = options.message ?? "";
  details.value = options.details ?? "";
  acceptLabel.value = options.acceptLabel ?? "Excluir";
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

// Atalho para o padrão "clicou em excluir": o próprio evento informa o alvo.
function confirm(event, message, onAccept) {
  return open({ target: event.currentTarget, message, onAccept });
}

async function accept() {
  const action = acceptAction;
  const previousTarget = target;
  close({ restoreFocus: false });
  await action?.();

  // A ação pode ter removido o botão que abriu o diálogo: nesse caso o foco
  // volta para o conteúdo da página em vez de se perder no body.
  nextTick(() => {
    if (previousTarget?.isConnected) previousTarget.focus?.();
    else focusContent();
  });
}

defineExpose({ open, confirm });
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
        aria-labelledby="confirm-popup-title"
        :aria-describedby="describedBy"
      >
        <h2 id="confirm-popup-title" class="confirm-popup__title">{{ title }}</h2>
        <p v-if="message" id="confirm-popup-message" class="confirm-popup__message">{{ message }}</p>
        <p v-if="details" id="confirm-popup-details" class="confirm-popup__details">{{ details }}</p>

        <div class="confirm-popup__actions">
          <button ref="cancelButton" class="button button--ghost" type="button" @click="close()">
            Cancelar
          </button>
          <button ref="acceptButton" class="button button--danger" type="button" @click="accept">
            {{ acceptLabel }}
          </button>
        </div>
      </section>
    </div>
  </Teleport>
</template>
