<script setup>
import { ChevronLeft } from "@lucide/vue";
import { computed, inject, onMounted, reactive, ref, watch } from "vue";
import { RouterLink, useRoute, useRouter } from "vue-router";
import vSelect from 'vue-select';
import 'vue-select/dist/vue-select.css';
import PageHeader from "../components/PageHeader.vue";
import EmptyState from "../components/EmptyState.vue";
import StatusBadge from "../components/StatusBadge.vue";

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

const expectedByParameter = computed(() => {
  const expected = {};
  for (const rule of activeChecklist.value?.regras ?? []) {
    const checks = [];
    if (rule.operador && rule.valor !== undefined) checks.push({ ...rule, parametro: rule.parametro });
    for (const condition of rule.condicoes ?? []) {
      if (condition.quando) {
        checks.push({ ...condition.quando, parametro: rule.parametro });
      }
      if (condition.verificar) checks.push(condition.verificar);
    }
    for (const check of checks) {
      if (!check.parametro || check.valor === undefined) continue;
      expected[check.parametro] ??= [];
      const description = formatExpected(check.operador, check.valor, activeChecklist.value.parametros?.[check.parametro]?.unidade);
      if (!expected[check.parametro].includes(description)) expected[check.parametro].push(description);
    }
  }
  return expected;
});

function formatExpected(operator, value, unit = "") {
  const formattedValue = typeof value === "boolean" ? (value ? "Sim" : "Não") : value;
  const valueWithUnit = `${formattedValue}${unit ?? ""}`;
  switch (operator) {
    case ">=": return `no mínimo, ${valueWithUnit}`;
    case "<=": return `no máximo, ${valueWithUnit}`;
    case ">": return `maior que ${valueWithUnit}`;
    case "<": return `menor que ${valueWithUnit}`;
    case "==":
    case "eq": return `igual a ${valueWithUnit}`;
    default: return valueWithUnit;
  }
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
    element.value = await services.repositories.elementRepository.get(
      props.elementId
    );
  }

  const environmentId =
    element.value?.environmentId ?? route.query.environmentId;

  if (!props.quick && (!environmentId || (!isNew.value && !element.value))) {
    return;
  }

  if (!props.quick) {
    environment.value =
      await services.repositories.environmentRepository.get(environmentId);
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

function normalizeFormData() {
  const processedData = {};
  const activeParams = activeChecklist.value?.parametros ?? {};

  for (const [key, parameter] of Object.entries(activeParams)) {
    const rawValue = form.data[key];

    if (rawValue === "" || rawValue === undefined || rawValue === null) {
      continue;
    }

    if (parameter.tipo === "number") {
      processedData[key] = Number(rawValue);
    } else if (parameter.tipo === "boolean") {
      processedData[key] = rawValue === true || rawValue === "true";
    } else {
      processedData[key] = rawValue;
    }
  }

  return processedData;
}

// Salva apenas o cadastro do elemento e retorna para a EnvironmentPage
async function saveOnly() {
  if (!activeChecklist.value) {
    return window.alert("Selecione um conjunto de regras.");
  }

  const payload = {
    name: form.name,
    type: activeChecklist.value.nome,
    rule: activeChecklist.value.id,
  };

  try {
    if (element.value) {
      await services.projectService.updateElement(element.value.id, payload);
    } else {
      await services.projectService.createElement(
        environment.value.id,
        payload
      );
    }

    router.push(
      `/projects/${environment.value.projectId}/environments/${environment.value.id}`
    );
  } catch (error) {
    window.alert(error.message);
  }
}

function getAutoName(baseName) {
  if (!baseName) return "";

  const existingNames = new Set(
    environmentElements.value
      .filter((item) => item.id !== element.value?.id)
      .map((item) => item.name)
  );

  if (!existingNames.has(baseName)) {
    return baseName;
  }

  let counter = 1;
  let newName = `${baseName} (${counter})`;

  while (existingNames.has(newName)) {
    counter++;
    newName = `${baseName} (${counter})`;
  }

  return newName;
}

watch([autoName, () => form.ruleSet], ([isAuto, newRuleSet]) => {
  localStorage.setItem("elementAutoName", String(isAuto));

  if (isAuto) {
    const ruleSet = ruleSets.value.find(
      (item) => item.id === newRuleSet
    );

    const baseName = ruleSet?.nome ?? "";
    form.name = getAutoName(baseName);
  }
});

// Salva o elemento, avalia os dados preenchidos e vai para a página de resultado
async function saveAndEvaluate() {
  if (!activeChecklist.value) {
    return window.alert("Selecione um conjunto de regras.");
  }

  const data = normalizeFormData();

  if (props.quick) {
    try {
      services.quickEvaluationService.evaluate({
        name: form.name,
        checklist: activeChecklist.value,
        data,
      });
      router.push("/quick-evaluation/result");
    } catch (error) {
      window.alert(error.message);
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
  } catch (error) {
    window.alert(error.message);
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

// Permite buscar por nome do elemento, norma ou regras internas dentro do v-select
function filterRuleSets(option, label, search) {
  const query = (search || '').toLowerCase().trim();
  if (!query) return true;

  const matchNome = option.nome?.toLowerCase().includes(query);
  const matchNorma = option.norma?.nome?.toLowerCase().includes(query);
  const matchRegras = option.regras?.some(
    (regra) =>
      regra.nome?.toLowerCase().includes(query) ||
      regra.id?.toLowerCase().includes(query)
  );

  return Boolean(matchNome || matchNorma || matchRegras);
}

onMounted(loadData);

</script>

<template>
  <template v-if="quick || environment">
    <RouterLink
      v-if="!quick"
      class="back-link"
      :to="`/projects/${environment.projectId}/environments/${environment.id}`"
    >
      <ChevronLeft :size="18" aria-hidden="true" />{{ environment.name }}
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
      <label v-if="!quick" class="field">
          <div class="field-name-input">
              <span>Nome do elemento *</span>

              <div id="field-name-input__checkbox">
                  <input type="checkbox" id="auto-name-chk" v-model="autoName" />
                  <p @click.stop="autoName = !autoName">Auto Nomear</p>
              </div>
          </div>
        <input
          v-model="form.name"
          required
          placeholder="Ex.: Porta principal"
          :disabled="autoName"
        />

      </label>

      <div class="form-divider">
        <strong>Dados para avaliação</strong>
        <span>Campos definidos pelo conjunto de regras selecionado.</span>
      </div>

      <div class="fields-grid">
        <label
          v-for="(parameter, key) in activeChecklist?.parametros"
          :key="key"
          class="field"
        >
          <span>
            {{ parameter.label ?? key }}
            <template v-if="parameter.obrigatorio"> *</template>
            <small v-if="parameter.unidade"> ({{ parameter.unidade }})</small>
            <small v-if="expectedByParameter[key]?.length" class="expected-value">
              Esperado: {{ expectedByParameter[key].join(' ou ') }}
            </small>

          </span>

          <select
            v-if="parameter.tipo === 'boolean'"
            v-model="form.data[key]"
          >
            <option value="">Não informado</option>
            <option :value="true">Sim</option>
            <option :value="false">Não</option>
          </select>

          <select
            v-else-if="parameter.tipo === 'select'"
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
            v-model="form.data[key]"
            type="number"
            inputmode="decimal"
            step="any"
          />

        </label>
      </div>

      <div class="form-actions">
        <RouterLink
          class="button button--ghost"
          :to="quick ? '/projects' : `/projects/${environment.projectId}/environments/${environment.id}`"
        >
          Cancelar
        </RouterLink>

        <button v-if="!quick" class="button button--outline" type="button" @click="saveOnly">
          Salvar e voltar
        </button>

        <!-- Opção 2: Salva, realiza a avaliação e vai para a página de resultado -->
        <button class="button" type="button" @click="saveAndEvaluate">
          {{ quick ? 'Avaliar' : 'Salvar e avaliar' }}
        </button>

        <RouterLink
          v-if="!isNew"
          class="button button--outline"
          :to="`/elements/${element.id}/evaluation`"
        >
          <StatusBadge
            :status="evaluation ? 'conforme' : 'nao_avaliado'"
          />
          Ver resultado
        </RouterLink>
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

<style scoped>
.ruleset-grid {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 1rem;
}

@media (max-width: 640px) {
  .ruleset-grid {
    grid-template-columns: 1fr;
  }
}

.ruleset-option {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;
}

.ruleset-norma {
  color: #666;
  font-size: 0.85em;
}

.expected-value {
  display: block;
  margin-top: 0.25rem;
  color: #666;
  font-weight: normal;
}
</style>
