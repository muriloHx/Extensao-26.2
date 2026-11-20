<script setup>
import { inject, nextTick, onMounted, ref } from "vue";
import { ClipboardCheck, FolderPlus, House, Trash2 } from "@lucide/vue";
import { RouterLink, useRouter } from "vue-router";
import PageHeader from "../components/PageHeader.vue";
import EmptyState from "../components/EmptyState.vue";
import ErrorMessage from "../components/ErrorMessage.vue";
import EvaluationSummary from "../components/EvaluationSummary.vue";

const props = defineProps({
  projectId: String,
});

const services = inject("services");
const confirmPopup = inject("confirmPopup");
const router = useRouter();

const project = ref(null);
const environments = ref([]);
const name = ref("");
const editing = ref(null);
const error = ref("");
const summary = ref(null);
const inputCreate = ref(null);
const nameInput = ref(null);
const formTrigger = ref(null);

// Devolve o foco ao botão que abriu o formulário, quando ele ainda existe.
function restoreTriggerFocus() {
  const trigger = formTrigger.value;
  formTrigger.value = null;
  nextTick(() => {
    if (trigger?.isConnected) trigger.focus();
  });
}

async function loadData() {
  project.value = await services.projectService.getProject(props.projectId);

  if (project.value) {
    [environments.value, summary.value] = await Promise.all([
      services.projectService.listEnvironments(props.projectId),
      services.evaluationService.getProjectSummary(props.projectId),
    ]);
  }
}

async function startCreate(event) {
  formTrigger.value = event?.currentTarget ?? null;
  editing.value = {};
  name.value = "";
  error.value = "";

  await nextTick();
  inputCreate.value?.scrollIntoView({ behavior: "smooth" });
  // O scroll suave acima cuida da posição: o foco não deve pular de novo.
  nameInput.value?.focus({ preventScroll: true });
  nameInput.value?.select();
}

async function startEdit(environment, event) {
  formTrigger.value = event?.currentTarget ?? null;
  editing.value = environment;
  name.value = environment.name;
  error.value = "";

  await nextTick();
  nameInput.value?.focus();
  nameInput.value?.select();
}

function cancelEdit() {
  editing.value = null;
  name.value = "";
  error.value = "";
  restoreTriggerFocus();
}

async function save() {
  error.value = "";

  try {
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
  } catch (e) {
    error.value = e.message;
  }
}

function remove(environment, event) {
  confirmPopup.open({
    target: event.currentTarget,
    message: `Excluir o ambiente “${environment.name}” e seus elementos?`,
    onAccept: () => deleteEnvironment(environment),
  });
}

async function deleteEnvironment(environment) {
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

// Excluir o projeto a partir da própria página dele: a confirmação fica no mesmo
// popup das outras exclusões e, ao concluir, a lista de projetos é o destino.
function removeProject(event) {
  confirmPopup.open({
    target: event.currentTarget,
    message: `Excluir o projeto “${project.value.name}” e seus ambientes?`,
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
      :description="`${environments.length} ambiente${environments.length === 1 ? '' : 's'} cadastrado${environments.length === 1 ? '' : 's'}.
      \n${project.description}`"
    >
      <template #action>
        <div class="project-header__actions">
          <RouterLink
            v-if="environments.length"
            class="button button--outline"
            :to="`/projects/${projectId}/status`"
          >
            <ClipboardCheck :size="18" aria-hidden="true" />Status detalhado
          </RouterLink>
          <button v-if="environments.length" class="button" @click="startCreate($event)"><FolderPlus :size="18" aria-hidden="true" />Novo ambiente</button>
        </div>
      </template>
    </PageHeader>

    <form v-if="editing" class="form-card collection-form" @submit.prevent="save" @keydown.esc="cancelEdit" ref="inputCreate">
      <div class="collection-form__heading">
        <h2>{{ editing.id ? "Nome do ambiente" : "Novo ambiente" }}</h2>
        <p>Use um nome que ajude a identificar este espaço no projeto.</p>
      </div>
      <label class="field">
        <span>Nome do ambiente</span>
        <input ref="nameInput" v-model="name" required />
      </label>

      <ErrorMessage :message="error" />

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

    <EvaluationSummary v-if="summary && environments.length" :summary="summary" scope="projeto" />

    <div class="environments-summary-container">
      <div v-if="environments.length" class="card-grid-environment collection-list">
        <article
          v-for="environment in environments"
          :key="environment.id"
          class="card-environment"
        >
          <RouterLink
            class="card__link"
            :to="`/projects/${project.id}/environments/${environment.id}`"
          >
            <span class="card__icon"><House :size="22" aria-hidden="true" /></span>
            <div>
              <h2>{{ environment.name }}</h2>
              <p>Ambiente</p>
            </div>
          </RouterLink>

          <div class="card__menu">
            <button class="text-button" @click="startEdit(environment, $event)">
              Editar
            </button>
            <button
              class="icon-button icon-button--danger"
              title="Excluir"
              aria-label="Excluir"
              @click="remove(environment, $event)"
            >
              <Trash2 :size="18" aria-hidden="true" />
            </button>
          </div>
        </article>
      </div>

      <EmptyState
        v-if="!environments.length && !editing"
        class="collection-empty"
        title="Nenhum ambiente ainda"
        text="Adicione espaços como entrada, banheiro ou circulação."
      >
        <button class="button" @click="startCreate($event)"><FolderPlus :size="18" aria-hidden="true" />Novo ambiente</button>
      </EmptyState>


    </div>

    <!-- Ação destrutiva: no fim do conteúdo, longe das ações do topo -->
    <div class="page-footer-actions">
      <button class="text-button text-button--danger" @click="removeProject">
        Excluir projeto
      </button>
    </div>
  </template>

  <EmptyState
    v-else
    title="Projeto não encontrado"
    text="Ele pode ter sido removido."
  >
    <RouterLink class="button" to="/projects">Voltar aos projetos</RouterLink>
  </EmptyState>
</template>
