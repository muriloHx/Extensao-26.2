<script setup>
import { ChevronLeft, CircleHelp } from "@lucide/vue";
import { computed, inject, onMounted, reactive, ref, watch } from "vue";
import { RouterLink, useRoute, useRouter } from "vue-router";
import vSelect from 'vue-select';
import 'vue-select/dist/vue-select.css';
import PageHeader from "../components/PageHeader.vue";
import EmptyState from "../components/EmptyState.vue";
import ErrorMessage from "../components/ErrorMessage.vue";
import { formatUnit } from "../core/formatExpected.js";
import { caretAfterSanitize, sanitizeDecimalInput } from "../core/numberInput.js";
import { matchesRuleSetQuery } from "../core/ruleSetSearch.js";
import {
  expectedCriteria,
  hasParameterHelp,
  manualParameters as collectManualParameters,
} from "../core/expectedCriteria.js";
import { normalizeAnswers } from "../domain/answers.js";
import { namesInUse, uniqueName } from "../domain/elementName.js";

const props = defineProps({
  elementId: String,
  quick: Boolean,
});

const services = inject("services");
const builtInRuleSets = inject("builtInRuleSets");

const route = useRoute();
const router = useRouter();

// Estado da Tela
const element = ref(null);
const environment = ref(null);
const environmentElements = ref([]);
const ruleSets = ref([]);
const evaluation = ref(null);
const selectedNorma = ref("todas");
const autoName = ref(localStorage.getItem("elementAutoName") === "true");
const openDefinition = ref(null);
const error = ref("");

const form = reactive({
  name: "",
  ruleSet: "",
  data: {},
});

// Computed Properties
const isNew = computed(() => !props.elementId);

const activeChecklist = computed(() =>
  ruleSets.value.find((item) => item.id === form.ruleSet)
);

const expectedByParameter = computed(() => expectedCriteria(activeChecklist.value, form.data));

// Parâmetros cujo critério é julgamento humano: não há valor esperado a exibir.
const manualParameters = computed(() => collectManualParameters(activeChecklist.value));

// O botão de ajuda aparece quando há algo para mostrar: definição ou critério.
function helpVisible(key, parameter) {
  return hasParameterHelp(parameter, expectedByParameter.value[key], manualParameters.value.has(key));
}

// Lista dinâmica de normas únicas disponíveis nos ruleSets
const normasDisponiveis = computed(() => {
  const normas = ruleSets.value
    .map((item) => item.norma?.nome)
    .filter(Boolean);
  return ["todas", ...new Set(normas)];
});

// Filtra a lista de ruleSets exibida no v-select de acordo com a norma escolhida
const filteredRuleSets = computed(() => {
  if (selectedNorma.value === "todas") {
    return ruleSets.value;
  }
  return ruleSets.value.filter(
    (item) => item.norma?.nome === selectedNorma.value
  );
});

// Métodos
async function loadData() {
  if (props.quick) {
    services.quickEvaluationService.clear();
  }

  const loadedRuleSets = await services.ruleSetService.list();
  ruleSets.value = [
    ...builtInRuleSets.map((entry) => entry.ruleSet),
    ...loadedRuleSets,
  ];

  if (!isNew.value) {
    element.value = await services.projectService.getElement(props.elementId);
  }

  const environmentId =
    element.value?.environmentId ?? route.query.environmentId;

  if (!props.quick && (!environmentId || (!isNew.value && !element.value))) {
    return;
  }

  if (!props.quick) {
    environment.value =
      await services.projectService.getEnvironment(environmentId);
    environmentElements.value = await services.projectService.listElements(
      environmentId
    );
  }

  if (element.value) {
    const evaluations = await services.evaluationService.listEvaluations(
      element.value.id
    );
    evaluation.value = evaluations[0];
  }

  form.name = element.value?.name ?? "";
  form.ruleSet =
    route.query.ruleSet ??
    element.value?.rule ??
    ruleSets.value[0]?.id ??
    "";

  Object.assign(form.data, evaluation.value?.data ?? {});
}

// Filtra a digitação e a colagem no campo numérico: letras, sinais e
// separadores extras não chegam a aparecer. O cursor fica onde o usuário estava.
function onNumberInput(key, event) {
  const input = event.target;
  const raw = input.value;
  const sanitized = sanitizeDecimalInput(raw);

  form.data[key] = sanitized;

  if (raw === sanitized) return;

  const caret = input.selectionStart ?? raw.length;

  input.value = sanitized;
  const position = caretAfterSanitize(raw, sanitized, caret);
  input.setSelectionRange(position, position);
}

// Salva o cadastro e as respostas e volta para o ambiente.
// Com respostas, o motor roda e o elemento deixa de ficar pendente.
async function saveAndReturn() {
  error.value = "";

  if (!activeChecklist.value) {
    error.value = "Selecione um conjunto de regras.";
    return;
  }

  const data = normalizeAnswers(activeChecklist.value, form.data);
  const payload = {
    name: form.name,
    type: activeChecklist.value.nome,
    rule: activeChecklist.value.id,
  };

  try {
    const savedElement = element.value
      ? await services.projectService.updateElement(element.value.id, payload)
      : await services.projectService.createElement(environment.value.id, payload);

    await services.evaluationService.saveElementAnswers({
      elementId: savedElement.id,
      checklist: activeChecklist.value,
      data,
    });

    router.push(
      `/projects/${environment.value.projectId}/environments/${environment.value.id}`
    );
  } catch (e) {
    error.value = e.message;
  }
}

watch([autoName, () => form.ruleSet], ([isAuto, newRuleSet]) => {
  localStorage.setItem("elementAutoName", String(isAuto));

  if (isAuto) {
    const ruleSet = ruleSets.value.find(
      (item) => item.id === newRuleSet
    );

    const baseName = ruleSet?.nome ?? "";
    form.name = uniqueName(baseName, namesInUse(environmentElements.value, { exceptId: element.value?.id }));
  }
});

// Salva o elemento, avalia os dados preenchidos e vai para a página de resultado
async function saveAndEvaluate() {
  error.value = "";

  if (!activeChecklist.value) {
    error.value = "Selecione um conjunto de regras.";
    return;
  }

  const data = normalizeAnswers(activeChecklist.value, form.data);

  if (props.quick) {
    try {
      services.quickEvaluationService.evaluate({
        name: form.name,
        checklist: activeChecklist.value,
        data,
      });
      router.push("/quick-evaluation/result");
    } catch (e) {
      error.value = e.message;
    }
    return;
  }

  const payload = {
    name: form.name,
    type: activeChecklist.value.nome,
    rule: activeChecklist.value.id,
  };

  try {
    const savedElement = element.value
      ? await services.projectService.updateElement(element.value.id, payload)
      : await services.projectService.createElement(
          environment.value.id,
          payload
        );

    await services.evaluationService.evaluateElement({
      elementId: savedElement.id,
      checklist: activeChecklist.value,
      data,
    });

    router.push(`/elements/${savedElement.id}/evaluation`);
  } catch (e) {
    error.value = e.message;
  }
}

// Quando a norma filtrada muda, seleciona automaticamente o primeiro elemento da nova lista se o atual não fizer parte dela
watch(selectedNorma, () => {
  const currentExists = filteredRuleSets.value.some(
    (item) => item.id === form.ruleSet
  );
  if (!currentExists) {
    form.ruleSet = filteredRuleSets.value[0]?.id ?? "";
  }
});

// Limpa chaves do formulário que não pertencem às regras do checklist ativo
watch(
  () => form.ruleSet,
  () => {
    openDefinition.value = null;
    error.value = "";

    const allowedKeys = Object.keys(
      activeChecklist.value?.parametros ?? {}
    );

    Object.keys(form.data).forEach((key) => {
      if (!allowedKeys.includes(key)) {
        delete form.data[key];
      }
    });
  }
);

// O v-select chama filter-by(option, label, search); a busca em si é do core.
const filterRuleSets = (option, _label, search) => matchesRuleSetQuery(option, search);

onMounted(loadData);

</script>

<template>
  <template v-if="quick || environment">
    <RouterLink
      v-if="!quick"
      class="back-link"
      :to="`/projects/${environment.projectId}/environments/${environment.id}`"
    >
      <ChevronLeft :size="18" aria-hidden="true" /><span class="back-link__label">{{ environment.name }}</span>
    </RouterLink>

    <PageHeader
      :title="quick ? 'Avaliação rápida' : isNew ? 'Novo elemento' : element.name"
      description="Escolha o tipo e informe as medidas observadas."
    />

    <form class="form-card" @submit.prevent>
      <!-- Seleção de Norma e Elemento em Cascata -->
      <div class="ruleset-grid">
        <label class="field">
          <span>Norma de referência</span>
          <select v-model="selectedNorma">
            <option value="todas">Todas as normas</option>
            <option
              v-for="norma in normasDisponiveis.filter((n) => n !== 'todas')"
              :key="norma"
              :value="norma"
            >
              {{ norma }}
            </option>
          </select>
        </label>

        <label class="field">
          <span>Tipo de elemento *</span>
          <v-select
            v-model="form.ruleSet"
            :options="filteredRuleSets"
            label="nome"
            :reduce="(ruleSet) => ruleSet.id"
            :filter-by="filterRuleSets"
            placeholder="Pesquise o elemento ou regra..."
          >
            <template #option="option">
              <div class="ruleset-option">
                <span class="ruleset-title">{{ option.nome }}</span>
                <small v-if="option.norma?.nome" class="ruleset-norma">
                  ({{ option.norma.nome }})
                </small>
              </div>
            </template>
          </v-select>
        </label>
      </div>
      <div v-if="!quick" class="field">
          <div class="field-name-input">
              <label for="element-name">Nome do elemento *</label>

              <div id="field-name-input__checkbox">
                  <input type="checkbox" id="auto-name-chk" v-model="autoName" />
                  <label for="auto-name-chk">Auto Nomear</label>
              </div>
          </div>
        <input
          id="element-name"
          v-model="form.name"
          required
          placeholder="Ex.: Porta principal"
        />

      </div>

      <div class="form-divider">
        <strong>Dados para avaliação</strong>
        <span>Campos definidos pelo conjunto de regras selecionado.</span>
      </div>

      <div class="fields-grid">
        <div
          v-for="(parameter, key) in activeChecklist?.parametros"
          :key="key"
          class="field"
        >
          <!-- O <label> cobre só o texto do campo: fora dele, o botão de ajuda
               não dispara quando o usuário clica no nome do parâmetro. -->
          <div class="field__heading">
            <label :for="`parameter-${key}`">
              {{ parameter.label ?? key }}<template v-if="parameter.obrigatorio"> *</template><small v-if="parameter.unidade"> ({{ formatUnit(parameter.unidade) }})</small>
            </label>

            <button
              v-if="helpVisible(key, parameter)"
              class="parameter-help"
              :class="{ 'is-open': openDefinition === key }"
              type="button"
              :aria-label="`Definição e critério: ${parameter.label ?? key}`"
              :aria-expanded="openDefinition === key"
              :aria-controls="`parameter-help-${key}`"
              @click="openDefinition = openDefinition === key ? null : key"
              @keydown.esc="openDefinition = null"
            >
              <CircleHelp :size="16" aria-hidden="true" />
            </button>
          </div>

          <!-- Definição e critério do campo, revelados pelo botão de ajuda. -->
          <div
            v-if="openDefinition === key"
            :id="`parameter-help-${key}`"
            class="parameter-help__panel"
          >
            <p v-if="parameter.definicao">{{ parameter.definicao }}</p>
            <p v-if="expectedByParameter[key]?.length" class="parameter-help__expected">
              <strong>Esperado:</strong> {{ expectedByParameter[key].join(' e ') }}
            </p>
            <p v-else-if="manualParameters.has(key)" class="parameter-help__expected">
              <strong>Esperado:</strong> verificação manual
            </p>
          </div>

          <select
            v-if="parameter.tipo === 'boolean'"
            :id="`parameter-${key}`"
            v-model="form.data[key]"
          >
            <option value="">Não informado</option>
            <option :value="true">Sim</option>
            <option :value="false">Não</option>
          </select>

          <select
            v-else-if="parameter.tipo === 'select'"
            :id="`parameter-${key}`"
            v-model="form.data[key]"
          >
            <option value="">Selecione</option>
            <option
              v-for="option in parameter.opcoes ?? []"
              :key="option"
              :value="option"
            >
              {{ option }}
            </option>
          </select>

          <input
            v-else
            :id="`parameter-${key}`"
            :value="form.data[key] ?? ''"
            type="text"
            inputmode="decimal"
            autocomplete="off"
            autocapitalize="off"
            spellcheck="false"
            @input="onNumberInput(key, $event)"
          />

        </div>
      </div>

      <ErrorMessage :message="error" />

      <div class="form-actions">
        <RouterLink
          class="button button--ghost"
          :to="quick ? '/projects' : `/projects/${environment.projectId}/environments/${environment.id}`"
        >
          Cancelar
        </RouterLink>

        <button v-if="!quick" class="button button--outline" type="button" @click="saveAndReturn">
          Salvar e voltar
        </button>

        <!-- Opção 2: Salva, realiza a avaliação e vai para a página de resultado -->
        <button class="button" type="button" @click="saveAndEvaluate">
          {{ quick ? 'Avaliar' : 'Salvar e avaliar' }}
        </button>

      </div>
    </form>
  </template>

  <EmptyState
    v-else
    title="Elemento não encontrado"
    text="Volte para o ambiente e tente novamente."
  >
    <RouterLink class="button" to="/projects">Projetos</RouterLink>
  </EmptyState>
</template>

