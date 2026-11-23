<script setup>
import { computed, nextTick, onBeforeUnmount, onMounted, ref } from "vue";
import { ChevronDown, X } from "@lucide/vue";
import { countFields, countRules } from "../domain/ruleGroup.js";
import { formatUnit } from "../core/formatExpected.js";

const props = defineProps({
  ruleSet: { type: Object, required: true },
  yaml: { type: String, default: "" },
  opener: { default: null }
});

const emit = defineEmits(["close"]);

const panel = ref(null);
const closeButton = ref(null);
let openerElement = null;
let previousBodyOverflow = "";
let pressedBackdrop = false;

const normaLabel = computed(() => {
  const norma = props.ruleSet.norma;
  if (!norma?.nome) return "";
  return norma.versao ? `${norma.nome} · ${norma.versao}` : norma.nome;
});

const parameterTypeLabels = {
  number: "Número",
  boolean: "Sim ou não",
  select: "Seleção"
};

function parameterSummary(parameter) {
  const unit = formatUnit(parameter.unidade);
  const parts = [
    parameterTypeLabels[parameter.tipo] ?? parameter.tipo,
    unit ? `unidade ${unit}` : "",
    parameter.obrigatorio ? "obrigatório" : "opcional"
  ];
  return parts.filter(Boolean).join(" · ");
}

// Só fecha quando o gesto começou no fundo: arrastar para fora ao selecionar o
// YAML dispara o click no backdrop sem que o usuário quisesse fechar.
function onBackdropPointerDown(event) {
  pressedBackdrop = event.target === event.currentTarget;
}

function onBackdropClick(event) {
  const close = pressedBackdrop && event.target === event.currentTarget;
  pressedBackdrop = false;
  if (close) emit("close");
}

function focusables() {
  const selector = "a[href], button:not([disabled]), summary, [tabindex]:not([tabindex='-1'])";
  // Elementos dentro de um pulldown fechado não são focáveis.
  return [...(panel.value?.querySelectorAll(selector) ?? [])]
    .filter(element => element.getClientRects().length > 0);
}

function onKeyDown(event) {
  if (event.key === "Escape") {
    event.preventDefault();
    emit("close");
    return;
  }

  if (event.key !== "Tab") return;

  const items = focusables();
  if (!items.length) return;

  const first = items[0];
  const last = items[items.length - 1];
  const active = document.activeElement;

  // Se o foco escapou do diálogo, traz de volta antes de continuar o Tab.
  if (!items.includes(active)) {
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

onMounted(async () => {
  // O Safari não foca botões ao clicar, então o gatilho vem do evento de clique.
  openerElement = props.opener ?? (document.activeElement === document.body ? null : document.activeElement);
  previousBodyOverflow = document.body.style.overflow;
  document.body.style.overflow = "hidden";
  document.addEventListener("keydown", onKeyDown);

  await nextTick();
  closeButton.value?.focus();
});

onBeforeUnmount(() => {
  document.removeEventListener("keydown", onKeyDown);
  document.body.style.overflow = previousBodyOverflow;
  if (openerElement?.isConnected) openerElement.focus?.();
  else document.getElementById("conteudo")?.focus();
});
</script>

<template>
  <Teleport to="body">
    <div class="ruleset-backdrop" @pointerdown="onBackdropPointerDown" @click="onBackdropClick">
      <section
        id="ruleset-popup"
        ref="panel"
        class="ruleset-popup"
        role="dialog"
        aria-modal="true"
        aria-labelledby="ruleset-popup-title"
      >
        <header class="ruleset-popup__head">
          <div class="ruleset-popup__heading">
            <h2 id="ruleset-popup-title" class="ruleset-popup__title">{{ ruleSet.nome }}</h2>
            <p class="ruleset-popup__meta">
              <code>{{ ruleSet.id }}</code>
              <span>{{ countRules(ruleSet) }} regras · {{ countFields(ruleSet) }} campos</span>
            </p>
            <p v-if="normaLabel" class="ruleset-popup__meta">{{ normaLabel }}</p>
          </div>
          <button ref="closeButton" class="ruleset-popup__close" type="button" aria-label="Fechar" @click="emit('close')">
            <X :size="20" aria-hidden="true" />
          </button>
        </header>

        <div class="ruleset-popup__body">
          <h3 class="ruleset-popup__section">Parâmetros</h3>
          <span v-if="!countFields(ruleSet)" class="ruleset-popup__empty">Este checklist não declara parâmetros.</span>
          <dl v-else class="ruleset-params">
            <div v-for="(parameter, key) in ruleSet.parametros" :key="key" class="ruleset-param">
              <dt>
                <span>{{ parameter.label ?? key }}</span>
                <code class="ruleset-param__key">{{ key }}</code>
              </dt>
              <dd>
                <span v-if="parameter.definicao" class="ruleset-param__definition">{{ parameter.definicao }}</span>
                <span class="ruleset-param__meta">{{ parameterSummary(parameter) }}</span>
                <span v-if="parameter.opcoes?.length" class="ruleset-param__meta">Opções: {{ parameter.opcoes.join(", ") }}</span>
              </dd>
            </div>
          </dl>

          <details class="ruleset-popup__code">
            <summary class="ruleset-popup__summary">
              <span>YAML</span>
              <ChevronDown :size="20" aria-hidden="true" />
            </summary>
            <pre class="ruleset-code" tabindex="0"><code>{{ yaml }}</code></pre>
          </details>
        </div>
      </section>
    </div>
  </Teleport>
</template>
