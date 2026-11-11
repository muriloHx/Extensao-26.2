<script setup>
import { onMounted, onUnmounted, ref } from "vue";
import { ArrowRight, ClipboardCheck, FolderKanban } from "@lucide/vue";

const emit = defineEmits(["close"]);
const closeButton = ref(null);
const actionButton = ref(null);
let previousBodyOverflow = "";

function handleKeydown(event) {
  if (event.key === "Escape") {
    emit("close");
    return;
  }

  if (event.key === "Tab" && event.shiftKey && document.activeElement === closeButton.value) {
    event.preventDefault();
    actionButton.value?.focus();
  } else if (event.key === "Tab" && !event.shiftKey && document.activeElement === actionButton.value) {
    event.preventDefault();
    closeButton.value?.focus();
  }
}

onMounted(() => {
  document.addEventListener("keydown", handleKeydown);
  previousBodyOverflow = document.body.style.overflow;
  document.body.style.overflow = "hidden";
  closeButton.value?.focus();
});

onUnmounted(() => {
  document.removeEventListener("keydown", handleKeydown);
  document.body.style.overflow = previousBodyOverflow;
});
</script>

<template>
  <Teleport to="body">
    <div class="welcome-backdrop" @click.self="emit('close')">
      <section
        class="welcome-popup"
        role="dialog"
        aria-modal="true"
        aria-labelledby="welcome-title"
        aria-describedby="welcome-description"
      >
        <button
          ref="closeButton"
          class="welcome-popup__close"
          type="button"
          aria-label="Fechar apresentação"
          @click="emit('close')"
        >
          ×
        </button>

        <div class="welcome-popup__hero">
          <h1 id="welcome-title">Acessibilidade começa com atenção aos detalhes.</h1>
          <p id="welcome-description">
            Este espaço ajuda você a organizar e apoiar avaliações de acessibilidade em locais e ambientes.
          </p>
        </div>

        <div class="welcome-popup__content">
          <h2>Como funciona</h2>
          <div class="welcome-popup__steps">
            <article>
              <FolderKanban :size="22" aria-hidden="true" />
              <div>
                <h3>Organize seus locais</h3>
                <p>Crie projetos, separe os ambientes e cadastre os elementos que deseja avaliar.</p>
              </div>
            </article>
            <article>
              <ClipboardCheck :size="22" aria-hidden="true" />
              <div>
                <h3>Faça as verificações</h3>
                <p>Preencha checklists e consulte resultados por elemento, ambiente ou projeto.</p>
              </div>
            </article>
          </div>
          <p class="welcome-popup__note">
            Os resultados são um apoio à avaliação e não substituem a análise de um profissional nem a consulta às normas aplicáveis.
          </p>
          <button ref="actionButton" class="button welcome-popup__action" type="button" @click="emit('close')">
            Começar <ArrowRight :size="18" aria-hidden="true" />
          </button>
        </div>
      </section>
    </div>
  </Teleport>
</template>

