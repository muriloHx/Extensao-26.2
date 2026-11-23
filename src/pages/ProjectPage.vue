<script setup>
import { computed, inject, nextTick, onMounted, ref } from "vue";
import { ClipboardCheck, FolderPlus, House, Pencil, Trash2 } from "@lucide/vue";
import { RouterLink, useRouter } from "vue-router";
import PageHeader from "../components/PageHeader.vue";
import ActionMenu from "../components/ActionMenu.vue";
import EmptyState from "../components/EmptyState.vue";
import ErrorMessage from "../components/ErrorMessage.vue";
import StatusBadge from "../components/StatusBadge.vue";
import EvaluationSummary from "../components/EvaluationSummary.vue";
import { plural } from "../core/plural.js";

const props = defineProps({
  projectId: String,
});

const services = inject("services");
const confirmPopup = inject("confirmPopup");
const router = useRouter();

const project = ref(null);
const environments = ref([]);
const summary = ref(null);
const name = ref("");
const description = ref("");
const editing = ref(null);
const error = ref("");
const nameInput = ref(null);
const formCard = ref(null);

const environmentMenuItems = [
  { id: "rename", label: "Renomear", icon: Pencil },
  { id: "delete", label: "Excluir", icon: Trash2, danger: true },
];

const formHeading = computed(() => {
  if (editing.value?.kind === "project") return "Dados do projeto";
  return editing.value?.environment ? "Nome do ambiente" : "Novo ambiente";
});

const isProjectForm = computed(() => editing.value?.kind === "project");

async function loadData() {
  project.value = await services.projectService.getProject(props.projectId);
  if (!project.value) return;

  const status = await services.evaluationService.getProjectStatus(props.projectId);

  summary.value = status.summary;
  environments.value = status.environments.map((row) => ({
    ...row.environment,
    elementCount: row.elements.length,
    status: row.summary.overallStatus,
  }));
}

function focusContent() {
  nextTick(() => document.getElementById("conteudo")?.focus?.());
}

async function focusNameInput() {
  await nextTick();
  formCard.value?.scrollIntoView({ behavior: "smooth" });
  // O scroll suave acima cuida da posição: o foco não deve pular de novo.
  nameInput.value?.focus({ preventScroll: true });
  nameInput.value?.select();
}

async function startCreate() {
  editing.value = { kind: "environment" };
  name.value = "";
  error.value = "";
  await focusNameInput();
}

async function startRenameProject() {
  editing.value = { kind: "project" };
  name.value = project.value.name;
  description.value = project.value.description ?? "";
  error.value = "";
  await focusNameInput();
}

async function startRenameEnvironment(environment) {
  editing.value = { kind: "environment", environment };
  name.value = environment.name;
  error.value = "";
  await focusNameInput();
}

function cancelEdit() {
  editing.value = null;
  name.value = "";
  description.value = "";
  error.value = "";
  focusContent();
}

async function save() {
  error.value = "";

  try {
    if (isProjectForm.value) {
      await services.projectService.updateProject(props.projectId, {
        name: name.value,
        description: description.value,
      });
    } else if (editing.value.environment) {
      await services.projectService.renameEnvironment(editing.value.environment.id, name.value);
    } else {
      await services.projectService.createEnvironment(props.projectId, {
        name: name.value,
      });
    }

    editing.value = null;
    name.value = "";
    description.value = "";
    await loadData();
    focusContent();
  } catch (e) {
    error.value = e.message;
  }
}

function removeEnvironment(environment, opener) {
  confirmPopup.open({
    title: `Excluir ambiente “${environment.name}”?`,
    details: `Também serão removidos ${plural(environment.elementCount, "elemento", "elementos")} e as avaliações registradas neles.`,
    returnFocusTo: opener,
    onAccept: () => deleteEnvironment(environment),
  });
}

function onEnvironmentAction(action, environment, opener) {
  if (action === "rename") startRenameEnvironment(environment);
  else removeEnvironment(environment, opener);
}

async function deleteEnvironment(environment) {
  await services.projectService.deleteEnvironment(environment.id);
  await loadData();
}

function removeProject(opener) {
  confirmPopup.open({
    title: `Excluir projeto “${project.value.name}”?`,
    details: `Também serão removidos ${plural(environments.value.length, "ambiente", "ambientes")}, ${plural(summary.value?.totalElements ?? 0, "elemento", "elementos")} e todas as avaliações registradas.`,
    returnFocusTo: opener,
    onAccept: deleteProject,
  });
}

async function deleteProject() {
  await services.projectService.deleteProject(props.projectId);
  router.push("/projects");
}

onMounted(loadData);
</script>

<template>
  <template v-if="project">
    <PageHeader
      :title="project.name"
      parent="Projetos"
      back-to="/projects"
      :description="project.description"
      menu
      @rename="startRenameProject"
      @delete="removeProject"
    >
      <template #summary>
        <EvaluationSummary
          v-if="summary"
          compact
          :summary="summary"
          :environment-count="environments.length"
        />
      </template>

      <template #action>
        <RouterLink
          v-if="environments.length"
          class="button button--outline"
          :to="`/projects/${projectId}/status`"
        >
          <ClipboardCheck :size="18" aria-hidden="true" />Status detalhado
        </RouterLink>
      </template>
    </PageHeader>

    <form
      v-if="editing"
      ref="formCard"
      class="form-card collection-form"
      @submit.prevent="save"
      @keydown.esc="cancelEdit"
    >
      <div class="collection-form__heading">
        <h2>{{ formHeading }}</h2>
        <p v-if="isProjectForm">
          Defina um nome e, se quiser, uma breve descrição para este local.
        </p>
        <p v-else>Use um nome que ajude a identificar este espaço no projeto.</p>
      </div>

      <div :class="{ 'fields-grid': isProjectForm }">
        <label class="field">
          <span>{{ isProjectForm ? "Nome do projeto" : "Nome do ambiente" }}</span>
          <input ref="nameInput" v-model="name" required />
        </label>

        <label v-if="isProjectForm" class="field">
          <span>Descrição <small>(opcional)</small></span>
          <input v-model="description" />
        </label>
      </div>

      <ErrorMessage :message="error" />

      <div class="form-actions">
        <button class="button button--ghost" type="button" @click="cancelEdit">
          Cancelar
        </button>
        <button class="button" type="submit">Salvar</button>
      </div>
    </form>

    <div v-if="environments.length" class="card-list collection-list">
      <article
        v-for="environment in environments"
        :key="environment.id"
        class="card card--interactive card--with-action"
      >
        <RouterLink
          class="card__link"
          :to="`/projects/${project.id}/environments/${environment.id}`"
        >
          <span class="card__icon"><House :size="22" aria-hidden="true" /></span>
          <div class="card__body">
            <h2>{{ environment.name }}</h2>
            <span class="card__meta">
              <span>{{ plural(environment.elementCount, "elemento", "elementos") }}</span>
              <StatusBadge :status="environment.status" />
            </span>
          </div>
        </RouterLink>

        <ActionMenu
          class="card__action"
          :label="`Ações de ${environment.name}`"
          :items="environmentMenuItems"
          @select="(action, opener) => onEnvironmentAction(action, environment, opener)"
        />
      </article>
    </div>

    <EmptyState
      v-else-if="!editing"
      :icon="House"
      title="Nenhum ambiente ainda"
      text="Adicione entrada, banheiro ou circulação."
    >
      <button class="button" @click="startCreate">
        <FolderPlus :size="18" aria-hidden="true" />Novo ambiente
      </button>
    </EmptyState>

    <div v-if="environments.length && !editing" class="page-action">
      <button class="button" @click="startCreate">
        <FolderPlus :size="18" aria-hidden="true" />Novo ambiente
      </button>
    </div>
  </template>

  <EmptyState
    v-else
    :icon="House"
    title="Projeto não encontrado"
    text="Ele pode ter sido removido."
  >
    <RouterLink class="button" to="/projects">Voltar aos projetos</RouterLink>
  </EmptyState>
</template>
