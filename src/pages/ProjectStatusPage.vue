<script setup>
import { inject, onMounted, ref } from "vue";
import { ChevronLeft, ChevronRight } from "@lucide/vue";
import { RouterLink } from "vue-router";
import PageHeader from "../components/PageHeader.vue";
import EmptyState from "../components/EmptyState.vue";
import StatusBadge from "../components/StatusBadge.vue";
import EvaluationSummary from "../components/EvaluationSummary.vue";

const props = defineProps({
  projectId: String,
});

const services = inject("services");

const project = ref(null);
const status = ref(null);
const loading = ref(true);
const error = ref("");

async function loadData() {
  try {
    project.value = await services.projectService.getProject(props.projectId);

    if (project.value) {
      status.value = await services.evaluationService.getProjectStatus(props.projectId);
    }
  } catch (cause) {
    error.value = cause.message;
  } finally {
    loading.value = false;
  }
}

// Pendente abre a edição do elemento; concluído abre o resultado da avaliação.
function elementLink(row) {
  return row.status === "nao_avaliado"
    ? `/elements/${row.element.id}`
    : `/elements/${row.element.id}/evaluation`;
}

function plural(count, singular, pluralForm) {
  return `${count} ${count === 1 ? singular : pluralForm}`;
}

onMounted(loadData);
</script>

<template>
  <p v-if="loading" class="muted" role="status">Carregando…</p>

  <!-- Projeto e status carregados -->
  <template v-else-if="project && status">
    <RouterLink class="back-link" :to="`/projects/${projectId}`">
      <ChevronLeft :size="18" aria-hidden="true" />{{ project.name }}
    </RouterLink>

    <PageHeader
      title="Status do projeto"
      :description="`${project.name} · ${plural(status.environments.length, 'ambiente', 'ambientes')}`"
    >
      <template #action>
        <RouterLink class="button button--outline" :to="`/projects/${projectId}`">
          Abrir projeto
        </RouterLink>
      </template>
    </PageHeader>

    <p v-if="error" class="alert alert--error" role="alert">{{ error }}</p>

    <EvaluationSummary
      v-if="status.summary.totalElements"
      :summary="status.summary"
      scope="projeto"
    />

    <template v-if="status.environments.length">
      <section class="project-status" aria-label="Status por ambiente">
        <article
          v-for="row in status.environments"
          :key="row.environment.id"
          class="card project-status__environment"
        >
          <header class="project-status__heading">
            <div>
              <h2>{{ row.environment.name }}</h2>
              <p>{{ plural(row.elements.length, "elemento", "elementos") }}</p>
            </div>
            <StatusBadge :status="row.summary.overallStatus" />
          </header>

          <div
            v-if="row.elements.length"
            class="project-status__counts"
            :aria-label="`Situação dos elementos de ${row.environment.name}`"
          >
            <span class="status status--conforme">{{ row.summary.conforme }} conforme{{ row.summary.conforme === 1 ? "" : "s" }}</span>
            <span class="status status--nao_conforme">{{ row.summary.nao_conforme }} não conforme{{ row.summary.nao_conforme === 1 ? "" : "s" }}</span>
            <span class="status status--nao_avaliado">{{ row.summary.nao_avaliado }} pendente{{ row.summary.nao_avaliado === 1 ? "" : "s" }}</span>
          </div>

          <ul v-if="row.elements.length" class="project-status__elements">
            <li v-for="item in row.elements" :key="item.element.id">
              <RouterLink class="project-status__element" :to="elementLink(item)">
                <span class="project-status__element-name">{{ item.element.name }}</span>
                <StatusBadge :status="item.status" />
                <ChevronRight :size="18" class="chevron" aria-hidden="true" />
              </RouterLink>
            </li>
          </ul>
          <p v-else class="muted">Nenhum elemento cadastrado neste ambiente.</p>

          <RouterLink
            class="text-button"
            :to="`/projects/${projectId}/environments/${row.environment.id}`"
          >
            Abrir ambiente
          </RouterLink>
        </article>
      </section>
    </template>

    <EmptyState
      v-else
      class="collection-empty"
      title="Nenhum ambiente cadastrado"
      text="Crie um ambiente e cadastre elementos para acompanhar o status do projeto."
    >
      <RouterLink class="button" :to="`/projects/${projectId}`">Abrir projeto</RouterLink>
    </EmptyState>
  </template>

  <!-- Projeto existe, mas o status não pôde ser carregado -->
  <template v-else-if="project">
    <EmptyState
      title="Não foi possível carregar o status"
      :text="error || 'Tente novamente mais tarde.'"
    >
      <RouterLink class="button" :to="`/projects/${projectId}`">Abrir projeto</RouterLink>
    </EmptyState>
  </template>

  <!-- Projeto não encontrado -->
  <EmptyState
    v-else
    title="Projeto não encontrado"
    text="Ele pode ter sido removido."
  >
    <RouterLink class="button" to="/projects">Projetos</RouterLink>
  </EmptyState>
</template>
