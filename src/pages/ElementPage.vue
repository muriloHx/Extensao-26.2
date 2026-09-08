<script setup>
import { computed, inject, onMounted, reactive, ref, watch } from "vue";
import { RouterLink, useRoute, useRouter } from "vue-router";
import PageHeader from "../components/PageHeader.vue";
import EmptyState from "../components/EmptyState.vue";
import StatusBadge from "../components/StatusBadge.vue";

const props = defineProps({
  elementId: String,
});

const services = inject("services");
const builtInRuleSets = inject("builtInRuleSets");

const route = useRoute();
const router = useRouter();

// Estado da Tela
const element = ref(null);
const environment = ref(null);
const ruleSets = ref([]);
const evaluation = ref(null);

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

// Métodos
async function loadData() {
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

  if (!environmentId || (!isNew.value && !element.value)) {
    return;
  }

  environment.value =
    await services.repositories.environmentRepository.get(environmentId);

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

async function save() {
  if (!activeChecklist.value) {
    return window.alert("Selecione um conjunto de regras.");
  }

  const data = normalizeFormData();
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

onMounted(loadData);
</script>

<template>
  <template v-if="environment">
    <RouterLink
      class="back-link"
      :to="`/projects/${environment.projectId}/environments/${environment.id}`"
    >
      ‹ {{ environment.name }}
    </RouterLink>

    <PageHeader
      :eyebrow="isNew ? 'Cadastro' : 'Elemento'"
      :title="isNew ? 'Novo elemento' : element.name"
      description="Escolha o tipo e informe as medidas observadas."
    />

    <form class="form-card" @submit.prevent="save">
      <label class="field">
        <span>Nome do elemento *</span>
        <input
          v-model="form.name"
          required
          placeholder="Ex.: Porta principal"
        />
      </label>

      <label class="field">
        <span>Tipo de elemento *</span>
        <select v-model="form.ruleSet">
          <option
            v-for="ruleSet in ruleSets"
            :key="ruleSet.id"
            :value="ruleSet.id"
          >
            {{ ruleSet.nome }}
          </option>
        </select>
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
          </span>

          <!-- 1. PRIMEIRO ITEM: USA v-if -->
          <select
            v-if="parameter.tipo === 'boolean'"
            v-model="form.data[key]"
            :required="parameter.obrigatorio"
          >
            <option value="">Não informado</option>
            <option :value="true">Sim</option>
            <option :value="false">Não</option>
          </select>

          <!-- 2. ITENS INTERMEDIÁRIOS: USAM v-else-if -->
          <select
            v-else-if="parameter.tipo === 'select'"
            v-model="form.data[key]"
            :required="parameter.obrigatorio"
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

          <!-- 3. ÚLTIMO ITEM (PADRÃO): USA v-else -->
          <input
            v-else
            v-model="form.data[key]"
            type="number"
            inputmode="decimal"
            step="any"
            :required="parameter.obrigatorio"
          />
        </label>
      </div>

      <div class="form-actions">
        <RouterLink
          class="button button--ghost"
          :to="`/projects/${environment.projectId}/environments/${environment.id}`"
        >
          Cancelar
        </RouterLink>

        <button class="button" type="submit">
          {{ isNew ? "Salvar elemento" : "Salvar alterações" }}
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
