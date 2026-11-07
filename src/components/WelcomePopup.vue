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

<style scoped>
.welcome-backdrop {
  position: fixed;
  inset: 0;
  z-index: 100;
  display: grid;
  place-items: center;
  overflow-y: auto;
  padding: 24px;
  background: color-mix(in srgb, var(--text) 60%, transparent);
}

.welcome-popup {
  position: relative;
  display: grid;
  grid-template-columns: 0.95fr 1.05fr;
  width: min(100%, 820px);
  overflow: hidden;
  border-radius: var(--radius-card);
  background: var(--surface);
  box-shadow: var(--shadow-md), var(--edge);
}

.welcome-popup__close {
  position: absolute;
  top: 8px;
  right: 8px;
  z-index: 1;
  display: grid;
  width: 44px;
  height: 44px;
  place-items: center;
  border: 0;
  border-radius: var(--radius-control);
  background: transparent;
  color: var(--text);
  font-size: 1.75rem;
  line-height: 1;
  cursor: pointer;
}

.welcome-popup__hero {
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 390px;
  padding: 48px 32px;
  border-right: 1px solid var(--line);
  background: var(--fill);
  color: var(--text);
}

.welcome-popup__hero h1 {
  max-width: 390px;
  margin: 0 0 16px;
  font-size: clamp(1.75rem, 4vw, 2.25rem);
  line-height: 1.2;
  letter-spacing: normal;
  text-wrap: balance;
}

.welcome-popup__hero p {
  max-width: 360px;
  color: var(--text-2);
  font-size: 1rem;
  line-height: 1.6;
  text-wrap: pretty;
}

.welcome-popup__content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 48px 32px 32px;
}

.welcome-popup__content > h2 {
  margin: 0 0 24px;
  font-size: 1.125rem;
}

.welcome-popup__steps {
  display: grid;
  gap: 24px;
}

.welcome-popup__steps article {
  display: grid;
  grid-template-columns: 40px 1fr;
  gap: 12px;
  align-items: start;
}

.welcome-popup__steps article > svg {
  box-sizing: content-box;
  padding: 8px;
  border-radius: var(--radius-control);
  background: var(--fill);
  color: var(--brand);
}

.welcome-popup__steps h3 {
  margin: 1px 0 4px;
  font-size: 1.125rem;
}

.welcome-popup__steps p {
  font-size: 1rem;
  line-height: 1.6;
}

.welcome-popup__note {
  margin-top: 24px;
  padding-top: 16px;
  border-top: 1px solid var(--line);
  color: var(--text-2);
  font-size: 0.875rem;
  line-height: 1.6;
}

.welcome-popup__action {
  align-self: flex-start;
  margin-top: 24px;
}

@media (max-width: 640px) {
  .welcome-backdrop {
    align-items: start;
    padding: 16px;
  }

  .welcome-popup {
    grid-template-columns: 1fr;
    margin: auto 0;
  }

  .welcome-popup__content {
    padding: 32px 24px;
  }

  .welcome-popup__hero {
    min-height: 0;
    padding: 32px 24px 24px;
    border-right: 0;
    border-bottom: 1px solid var(--line);
  }
}
</style>
