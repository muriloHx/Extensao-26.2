<script setup>
import { inject, nextTick, onMounted, ref } from "vue";
import { FolderKanban, FolderPlus, Pencil, Trash2 } from "@lucide/vue";
import { RouterLink } from "vue-router";
import PageHeader from "../components/PageHeader.vue";
import ActionMenu from "../components/ActionMenu.vue";
import EmptyState from "../components/EmptyState.vue";
import ErrorMessage from "../components/ErrorMessage.vue";
import StatusBadge from "../components/StatusBadge.vue";
import WelcomePopup from "../components/WelcomePopup.vue";
import { plural } from "../core/plural.js";

const services = inject("services");
const confirmPopup = inject("confirmPopup");

const projects = ref([]);
const name = ref("");
const description = ref("");
const editing = ref(null);
const error = ref("");
const showWelcome = ref(false);
const nameInput = ref(null);
const formTrigger = ref(null);

const projectMenuItems = [
  { id: "rename", label: "Renomear", icon: Pencil },
  { id: "delete", label: "Excluir", icon: Trash2, danger: true },
];

// Abre o formulário já com o foco no primeiro campo, pronto para digitar.
function focusNameInput() {
  return nextTick(() => {
    nameInput.value?.focus();
    nameInput.value?.select();
  });
}

// Devolve o foco ao botão que abriu o formulário, quando ele ainda existe.
function restoreTriggerFocus() {
  const trigger = formTrigger.value;
  formTrigger.value = null;
  nextTick(() => {
    if (trigger?.isConnected) trigger.focus();
    else document.getElementById("conteudo")?.focus?.();
  });
}

function openWelcome() {
  showWelcome.value = true;
}

// Cada cartão mostra os totais e a situação do projeto.
async function loadProjects() {
  const list = await services.projectService.listProjects();

  projects.value = await Promise.all(
    list.map(async (project) => {
      const status = await services.evaluationService.getProjectStatus(project.id);

      return {
        ...project,
        environmentCount: status.environments.length,
        elementCount: status.summary.totalElements,
        status: status.summary.overallStatus,
      };
    })
  );
}

function projectMeta(project) {
  return [
    plural(project.environmentCount, "ambiente", "ambientes"),
    plural(project.elementCount, "elemento", "elementos"),
  ].join(" · ");
}

async function startCreate(event) {
  formTrigger.value = event?.currentTarget ?? null;
  editing.value = {};
  name.value = "";
  description.value = "";
  error.value = "";

  await focusNameInput();
}

async function startEdit(project, event) {
  formTrigger.value = event?.currentTarget ?? null;
  editing.value = project;
  name.value = project.name;
  error.value = "";
  description.value = project.description || "";

  await focusNameInput();
}

function cancelEdit() {
  editing.value = null;
  name.value = "";
  description.value = "";
  error.value = "";
  restoreTriggerFocus();
}

async function save() {
  try {
    error.value = "";

    if (editing.value?.id) {
      await services.projectService.updateProject(editing.value.id, {
        name: name.value,
        description: description.value,
      });
    } else {
      await services.projectService.createProject({
        name: name.value,
        description: description.value
      });
    }

    name.value = "";
    description.value = "";
    editing.value = null;
    await loadProjects();
    restoreTriggerFocus();
  } catch (e) {
    error.value = e.message;
  }
}

function onProjectAction(action, project, opener) {
  if (action === "rename") startEdit(project);
  else remove(project, opener);
}

function remove(project, opener) {
  confirmPopup.open({
    title: `Excluir projeto “${project.name}”?`,
    details: `Também serão removidos ${plural(project.environmentCount, "ambiente", "ambientes")}, ${plural(project.elementCount, "elemento", "elementos")} e todas as avaliações registradas.`,
    returnFocusTo: opener,
    onAccept: () => deleteProject(project),
  });
}

async function deleteProject(project) {
  await services.projectService.deleteProject(project.id);
  await loadProjects();
}

onMounted(loadProjects);
</script>

<template>
  <PageHeader
    title="Projetos"
    description="Acompanhe seus locais e avaliações."
    helpButton
    @help="openWelcome"
  />

  <form v-if="editing" class="form-card collection-form" @submit.prevent="save" @keydown.esc="cancelEdit">
    <div class="collection-form__heading">
      <h2>{{ editing.id ? "Dados do projeto" : "Novo projeto" }}</h2>
      <p>Defina um nome e, se quiser, uma breve descrição para este local.</p>
    </div>

    <div class="fields-grid">
      <label class="field">
        <span>Nome do projeto</span>
        <input ref="nameInput" v-model="name" required />
      </label>

      <label class="field">
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

  <div v-if="projects.length" class="card-list collection-list">
    <article
      v-for="project in projects"
      :key="project.id"
      class="card card--interactive card--with-action"
    >
      <RouterLink class="card__link" :to="`/projects/${project.id}`">
        <span class="card__icon"><FolderKanban :size="22" aria-hidden="true" /></span>
        <div class="card__body">
          <h2>{{ project.name }}</h2>
          <span class="card__meta">{{ projectMeta(project) }}</span>
        </div>
        <StatusBadge :status="project.status" />
      </RouterLink>

      <ActionMenu
        class="card__action"
        :label="`Ações de ${project.name}`"
        :items="projectMenuItems"
        @select="(action, opener) => onProjectAction(action, project, opener)"
      />
    </article>
  </div>

  <EmptyState
    v-else-if="!editing"
    :icon="FolderKanban"
    title="Comece por um projeto"
    text="Organize as avaliações por obra ou local."
  >
    <button class="button" @click="startCreate($event)">
      <FolderPlus :size="18" aria-hidden="true" />Novo projeto
    </button>
  </EmptyState>

  <div v-if="projects.length && !editing" class="page-action">
    <button class="button" @click="startCreate($event)">
      <FolderPlus :size="18" aria-hidden="true" />Novo projeto
    </button>
  </div>

  <WelcomePopup v-if="showWelcome" @close="showWelcome = false" />
</template>
