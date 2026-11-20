<script setup>
import { inject, onMounted, ref } from "vue";
import { Box, ChevronLeft, ChevronRight, Plus, Trash2 } from "@lucide/vue";
import { RouterLink, useRouter } from "vue-router";
import PageHeader from "../components/PageHeader.vue";
import EmptyState from "../components/EmptyState.vue";
import StatusBadge from "../components/StatusBadge.vue";
import EvaluationSummary from "../components/EvaluationSummary.vue";
import { getEvaluationStatus } from "../services/evaluationService.js";

const props = defineProps({
  projectId: String,
  environmentId: String,
});

const services = inject("services");
const confirmPopup = inject("confirmPopup");
const router = useRouter();

// Estados reativos
const environment = ref(null);
const project = ref(null);
const rows = ref([]);
const summary = ref(null);

// Pendente abre a edição do elemento; concluído abre o resultado da avaliação.
function elementLink(row) {
  return row.status === "nao_avaliado"
    ? `/elements/${row.element.id}`
    : `/elements/${row.element.id}/evaluation`;
}

function removeElement(element, event) {
  confirmPopup.confirm(
    event,
    `Excluir o elemento ${element.name} e suas avaliações?`,
    () => deleteElement(element)
  );
}

async function deleteElement(element) {
  await services.projectService.deleteElement(element.id);
  await loadData();
}

function removeEnvironment(event) {
  confirmPopup.confirm(
    event,
    `Excluir o ambiente “${environment.value.name}” e seus elementos?`,
    deleteEnvironment
  );
}

async function deleteEnvironment() {
  await services.projectService.deleteEnvironment(environment.value.id);
  router.push(`/projects/${environment.value.projectId}`);
}


async function loadData() {
  // 1. Carrega dados do Ambiente
  environment.value = await services.projectService.getEnvironment(
    props.environmentId
  );

  if (!environment.value) {
    return;
  }

  // 2. Carrega dados do Projeto relacionado
  project.value = await services.projectService.getProject(
    environment.value.projectId
  );

  // 3. Carrega os Elementos do Ambiente com suas respectivas avaliações
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
    <!-- Navegação Voltar -->
    <RouterLink
      class="back-link"
      :to="`/projects/${environment.projectId}`"
    >
      <ChevronLeft :size="18" aria-hidden="true" /><span class="back-link__label">{{ project?.name ?? "Projeto" }}</span>
    </RouterLink>

    <!-- Cabeçalho -->
    <PageHeader
      :title="environment.name"
    >
      <template #action>
        <div class="project-header__actions">
          <RouterLink v-if="rows.length"
            class="button"
            :to="{
              path: '/elements/new',
              query: { environmentId: environment.id },
            }"
          >
            <Plus :size="18" aria-hidden="true" />Adicionar elemento
          </RouterLink>
        </div>
      </template>
    </PageHeader>

    <EvaluationSummary v-if="summary && rows.length" :summary="summary" scope="ambiente" />

    <!-- Lista de Elementos -->
    <div v-if="rows.length" class="card-list collection-list">
      <article
        v-for="row in rows"
        :key="row.element.id"
        class="card card--interactive"
      >
        <!-- Link navegável do card -->
        <RouterLink
          class="card__link"
          :to="elementLink(row)"
        >
          <span class="card__icon"><Box :size="22" aria-hidden="true" /></span>
          <div>
            <h2>{{ row.element.name }}</h2>
            <p>{{ row.element.type }}</p>
          </div>
          <StatusBadge :status="row.status" />
          <ChevronRight :size="20" class="chevron" aria-hidden="true" />
        </RouterLink>

        <!-- Área de ações (dentro do card, abaixo ou ao lado) -->
        <div class="card__menu">
          <button
            class="icon-button icon-button--danger"
            title="Excluir"
            aria-label="Excluir"
            @click="removeElement(row.element, $event)"
          >
            <Trash2 :size="18" aria-hidden="true" />
          </button>
        </div>
      </article>
    </div>

    <!-- Estado Vazio (Sem elementos no ambiente) -->
    <EmptyState
      v-if="!rows.length"
      class="collection-empty"
      title="Nenhum elemento ainda"
      text="Cadastre portas, rampas, sanitários e outros itens para avaliar."
    >
      <RouterLink
        class="button"
        :to="{
          path: '/elements/new',
          query: { environmentId: environment.id },
        }"
      >
        <Plus :size="18" aria-hidden="true" />Adicionar elemento
      </RouterLink>
    </EmptyState>

    <!-- Ação destrutiva: no fim do conteúdo, longe das ações do topo -->
    <div class="page-footer-actions">
      <button class="text-button text-button--danger" @click="removeEnvironment">
        Excluir ambiente
      </button>
    </div>
  </template>

  <!-- Estado Vazio (Ambiente não encontrado) -->
  <EmptyState
    v-else
    title="Ambiente não encontrado"
    text="Ele pode ter sido removido."
  >
    <RouterLink class="button" to="/projects">Projetos</RouterLink>
  </EmptyState>
</template>
