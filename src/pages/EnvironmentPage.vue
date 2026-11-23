<script setup>
import { computed, inject, nextTick, onMounted, ref } from "vue";
import { Box, Plus, Trash2 } from "@lucide/vue";
import { RouterLink, useRouter } from "vue-router";
import PageHeader from "../components/PageHeader.vue";
import ActionMenu from "../components/ActionMenu.vue";
import EmptyState from "../components/EmptyState.vue";
import ErrorMessage from "../components/ErrorMessage.vue";
import StatusBadge from "../components/StatusBadge.vue";
import EvaluationSummary from "../components/EvaluationSummary.vue";
import { plural } from "../core/plural.js";
import { getEvaluationStatus } from "../services/evaluationService.js";

const props = defineProps({
  projectId: String,
  environmentId: String,
});

const services = inject("services");
const confirmPopup = inject("confirmPopup");
const router = useRouter();

const environment = ref(null);
const project = ref(null);
const rows = ref([]);
const summary = ref(null);
const editing = ref(false);
const name = ref("");
const error = ref("");
const nameInput = ref(null);

const elementMenuItems = [
  { id: "delete", label: "Excluir", icon: Trash2, danger: true },
];

const newElementRoute = computed(() => ({
  path: "/elements/new",
  query: { environmentId: environment.value?.id },
}));

// Pendente abre a edição do elemento; concluído abre o resultado da avaliação.
function elementLink(row) {
  return row.status === "nao_avaliado"
    ? `/elements/${row.element.id}`
    : `/elements/${row.element.id}/evaluation`;
}

// Tipo e quantas regras a última avaliação verificou.
function elementMeta(row) {
  return row.ruleCount
    ? `${row.element.type} · ${plural(row.ruleCount, "regra", "regras")}`
    : row.element.type;
}

function focusContent() {
  nextTick(() => document.getElementById("conteudo")?.focus?.());
}

async function startRename() {
  editing.value = true;
  name.value = environment.value.name;
  error.value = "";

  await nextTick();
  nameInput.value?.focus();
  nameInput.value?.select();
}

function cancelRename() {
  editing.value = false;
  name.value = "";
  error.value = "";
  focusContent();
}

async function saveName() {
  error.value = "";

  try {
    await services.projectService.renameEnvironment(environment.value.id, name.value);
    editing.value = false;
    await loadData();
    focusContent();
  } catch (e) {
    error.value = e.message;
  }
}

function removeElement(element) {
  confirmPopup.open({
    title: `Excluir elemento “${element.name}”?`,
    details: "As avaliações registradas neste elemento também serão removidas.",
    onAccept: () => deleteElement(element),
  });
}

function onElementAction(action, element) {
  if (action === "delete") removeElement(element);
}

async function deleteElement(element) {
  await services.projectService.deleteElement(element.id);
  await loadData();
}

function removeEnvironment() {
  confirmPopup.open({
    title: `Excluir ambiente “${environment.value.name}”?`,
    details: `Também serão removidos ${plural(rows.value.length, "elemento", "elementos")} e as avaliações registradas neles.`,
    onAccept: deleteEnvironment,
  });
}

async function deleteEnvironment() {
  await services.projectService.deleteEnvironment(environment.value.id);
  router.push(`/projects/${environment.value.projectId}`);
}

async function loadData() {
  environment.value = await services.projectService.getEnvironment(
    props.environmentId
  );

  if (!environment.value) {
    return;
  }

  project.value = await services.projectService.getProject(
    environment.value.projectId
  );

  const elements = await services.projectService.listElements(
    environment.value.id
  );

  const [loadedRows, loadedSummary] = await Promise.all([
    Promise.all(
      elements.map(async (element) => {
        const evaluations = await services.evaluationService.listEvaluations(
          element.id
        );

        return {
          element,
          status: getEvaluationStatus(evaluations),
          ruleCount: evaluations[0]?.result?.length ?? 0,
        };
      })
    ),
    services.evaluationService.getEnvironmentSummary(environment.value.id),
  ]);

  rows.value = loadedRows;
  summary.value = loadedSummary;
}

onMounted(loadData);
</script>

<template>
  <template v-if="environment">
    <PageHeader
      :title="environment.name"
      :parent="project?.name ?? 'Projetos'"
      :back-to="`/projects/${environment.projectId}`"
      menu
      @rename="startRename"
      @delete="removeEnvironment"
    >
      <template #summary>
        <EvaluationSummary
          v-if="summary"
          compact
          :summary="summary"
          show-evaluated
        />
      </template>
    </PageHeader>

    <form
      v-if="editing"
      class="form-card collection-form"
      @submit.prevent="saveName"
      @keydown.esc="cancelRename"
    >
      <div class="collection-form__heading">
        <h2>Nome do ambiente</h2>
        <p>Use um nome que ajude a identificar este espaço no projeto.</p>
      </div>

      <label class="field">
        <span>Nome do ambiente</span>
        <input ref="nameInput" v-model="name" required />
      </label>

      <ErrorMessage :message="error" />

      <div class="form-actions">
        <button class="button button--ghost" type="button" @click="cancelRename">
          Cancelar
        </button>
        <button class="button" type="submit">Salvar</button>
      </div>
    </form>

    <div v-if="rows.length" class="card-list collection-list">
      <article
        v-for="row in rows"
        :key="row.element.id"
        class="card card--interactive card--with-action"
      >
        <RouterLink class="card__link" :to="elementLink(row)">
          <span class="card__icon"><Box :size="22" aria-hidden="true" /></span>
          <div class="card__body">
            <h2>{{ row.element.name }}</h2>
            <span class="card__meta">{{ elementMeta(row) }}</span>
          </div>
          <StatusBadge :status="row.status" />
        </RouterLink>

        <ActionMenu
          class="card__action"
          :label="`Ações de ${row.element.name}`"
          :items="elementMenuItems"
          @select="(action) => onElementAction(action, row.element)"
        />
      </article>
    </div>

    <EmptyState
      v-else-if="!editing"
      :icon="Box"
      title="Nenhum elemento ainda"
      text="Cadastre portas, rampas e sanitários."
    >
      <RouterLink class="button" :to="newElementRoute">
        <Plus :size="18" aria-hidden="true" />Adicionar elemento
      </RouterLink>
    </EmptyState>

    <div v-if="rows.length && !editing" class="page-action">
      <RouterLink class="button" :to="newElementRoute">
        <Plus :size="18" aria-hidden="true" />Adicionar elemento
      </RouterLink>
    </div>
  </template>

  <EmptyState
    v-else
    :icon="Box"
    title="Ambiente não encontrado"
    text="Ele pode ter sido removido."
  >
    <RouterLink class="button" to="/projects">Projetos</RouterLink>
  </EmptyState>
</template>
