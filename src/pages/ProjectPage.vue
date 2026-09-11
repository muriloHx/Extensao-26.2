<script setup>
import { inject, onMounted, ref } from "vue";
import { RouterLink } from "vue-router";
import PageHeader from "../components/PageHeader.vue";
import EmptyState from "../components/EmptyState.vue";

const props = defineProps({
  projectId: String,
});

const services = inject("services");

// Estados Reativos
const project = ref(null);
const environments = ref([]);
const name = ref("");
const editing = ref(null);

// Funções de Negócio
async function loadData() {
  project.value = await services.projectService.getProject(props.projectId);

  if (project.value) {
    environments.value = await services.projectService.listEnvironments(
      props.projectId
    );
  }
}

function startCreate() {
  editing.value = {};
  name.value = "";
}

function startEdit(environment) {
  editing.value = environment;
  name.value = environment.name;
}

function cancelEdit() {
  editing.value = null;
  name.value = "";
}

async function save() {
  if (editing.value?.id) {
    await services.projectService.renameEnvironment(
      editing.value.id,
      name.value
    );
  } else {
    await services.projectService.createEnvironment(props.projectId, {
      name: name.value,
    });
  }

  cancelEdit();
  await loadData();
}

async function remove(environment) {
  const confirmed = window.confirm(
    `Excluir o ambiente “${environment.name}” e seus elementos?`
  );
  if (!confirmed) return;

  const elements = await services.projectService.listElements(environment.id);

  // Deleção em cascata: Avaliações -> Elementos -> Ambiente
  for (const element of elements) {
    const evaluations = await services.evaluationService.listEvaluations(
      element.id
    );

    for (const evaluation of evaluations) {
      await services.repositories.evaluationRepository.delete(evaluation.id);
    }

    await services.repositories.elementRepository.delete(element.id);
  }

  await services.repositories.environmentRepository.delete(environment.id);
  await loadData();
}

onMounted(loadData);
</script>

<template>
  <!-- Cenário 1: Projeto encontrado -->
  <template v-if="project">
    <RouterLink class="back-link" to="/projects">‹ Projetos</RouterLink>

    <PageHeader
      eyebrow="Projeto"
      :title="project.name"
      :description="`${environments.length} ambiente${environments.length === 1 ? '' : 's'} cadastrado${environments.length === 1 ? '' : 's'}.
      \n${project.description}`"
    >
      <template #action>
        <button class="button" @click="startCreate">+ Novo ambiente</button>
      </template>
    </PageHeader>

    <!-- Form Modal/Card para criação/edição -->
    <form v-if="editing" class="form-card" @submit.prevent="save">
      <label class="field">
        <span>Nome do ambiente</span>
        <input v-model="name" required autofocus />
      </label>

      <div class="form-actions">
        <button
          class="button button--ghost"
          type="button"
          @click="cancelEdit"
        >
          Cancelar
        </button>
        <button class="button" type="submit">Salvar</button>
      </div>
    </form>

    <!-- Lista de Ambientes -->
    <div v-if="environments.length" class="card-grid-environment">
      <article
        v-for="environment in environments"
        :key="environment.id"
        class="card-environment"
      >
        <RouterLink
          class="card__link"
          :to="`/projects/${project.id}/environments/${environment.id}`"
        >
          <span class="card__icon">⌂</span>
          <div>
            <h2>{{ environment.name }}</h2>
            <p>Ambiente</p>
          </div>
        </RouterLink>

        <div class="card__menu">
          <button class="text-button" @click="startEdit(environment)">
            Editar
          </button>
          <button
            class="text-button text-button--danger"
            @click="remove(environment)"
          >
            Excluir
          </button>
        </div>
      </article>
    </div>

    <!-- Estado Vazio (Sem ambientes no projeto) -->
    <EmptyState
      v-else
      title="Nenhum ambiente ainda"
      text="Adicione espaços como entrada, banheiro ou circulação."
    >
      <button class="button" @click="startCreate">+ Novo ambiente</button>
    </EmptyState>
  </template>

  <!-- Cenário 2: Projeto não encontrado -->
  <EmptyState
    v-else
    title="Projeto não encontrado"
    text="Ele pode ter sido removido."
  >
    <RouterLink class="button" to="/projects">Voltar aos projetos</RouterLink>
  </EmptyState>
</template>
