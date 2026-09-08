<script setup>
import { inject, onMounted, ref } from "vue";
import { RouterLink } from "vue-router";
import PageHeader from "../components/PageHeader.vue";
import EmptyState from "../components/EmptyState.vue";

const services = inject("services");

const projects = ref([]);
const name = ref("");
const description = ref("")
const editing = ref(null);
const error = ref("");

async function loadProjects() {
  projects.value = await services.projectService.listProjects();
}

function startCreate() {
  editing.value = {};
  name.value = "";
  description.value = "";
  error.value = "";
}

function startEdit(project) {
  editing.value = project;
  name.value = project.name;
  error.value = "";
  description.value = project.description || "";
}

function cancelEdit() {
  editing.value = null;
  name.value = "";
  description.value = "";
  error.value = "";
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
  } catch (e) {
    error.value = e.message;
  }
}

async function remove(project) {
  const confirmed = window.confirm(`Excluir o projeto “${project.name}” e seus dados?`);
  if (!confirmed) return;

  const environments = await services.projectService.listEnvironments(project.id);

  for (const environment of environments) {
    const elements = await services.projectService.listElements(environment.id);

    for (const element of elements) {
      const evaluations = await services.evaluationService.listEvaluations(element.id);

      for (const evaluation of evaluations) {
        await services.repositories.evaluationRepository.delete(evaluation.id);
      }

      await services.repositories.elementRepository.delete(element.id);
    }

    await services.repositories.environmentRepository.delete(environment.id);
  }

  await services.repositories.projectRepository.delete(project.id);
  await loadProjects();
}

function formatDate(dateString) {
  return new Intl.DateTimeFormat("pt-BR", { dateStyle: "medium" }).format(new Date(dateString));
}

onMounted(loadProjects);
</script>

<template>
  <PageHeader
    eyebrow="Visão geral"
    title="Projetos"
    description="Acompanhe seus locais e avaliações."
  >
    <template #action>
      <button class="button" @click="startCreate">+ Novo projeto</button>
    </template>
  </PageHeader>

  <!-- Form Modal/Card -->
  <form v-if="editing" class="form-card" @submit.prevent="save">
    <label class="field">
      <span>{{ editing.id ? "Nome do projeto" : "Novo projeto" }}</span>
      <input v-model="name" required autofocus />

      <span>Descrição</span>
      <input v-model="description" />
    </label>

    <p v-if="error" class="muted">{{ error }}</p>

    <div class="form-actions">
      <button class="button button--ghost" type="button" @click="cancelEdit">
        Cancelar
      </button>
      <button class="button" type="submit">Salvar</button>
    </div>
  </form>

  <!-- Projects List -->
  <div v-if="projects.length" class="card-list">
    <article v-for="project in projects" :key="project.id" class="card project-card">
      <RouterLink class="card__link" :to="`/projects/${project.id}`">
        <span class="card__icon">▦</span>
        <div>
          <h2>{{ project.name }}</h2>
          <p>Atualizado em {{ formatDate(project.updatedAt) }}</p>
          <p v-if="project.description">{{ project.description }}</p>
        </div>
        <span class="chevron">›</span>
      </RouterLink>

      <div class="card__menu">
        <button class="text-button" @click="startEdit(project)">
          Editar
        </button>
        <button class="text-button text-button--danger" @click="remove(project)">
          Excluir
        </button>
      </div>
    </article>
  </div>

  <!-- Empty State -->
  <EmptyState
    v-else
    title="Comece por um projeto"
    text="Organize as avaliações de acessibilidade por obra ou local."
  >
    <button class="button" @click="startCreate">+ Novo projeto</button>
  </EmptyState>
</template>
