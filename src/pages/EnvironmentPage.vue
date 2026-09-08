<script setup>
import { inject, onMounted, ref } from "vue";
import { RouterLink } from "vue-router";
import PageHeader from "../components/PageHeader.vue";
import EmptyState from "../components/EmptyState.vue";
import StatusBadge from "../components/StatusBadge.vue";

const props = defineProps({
  projectId: String,
  environmentId: String,
});

const services = inject("services");

// Estados reativos
const environment = ref(null);
const project = ref(null);
const rows = ref([]);

/**
 * Determina o status geral do elemento com base nas avaliações
 */
function getElementStatus(evaluations) {
  const result = evaluations[0]?.result;

  if (!result?.length) {
    return "nao_avaliado";
  }

  // Se houver qualquer item com erro ou não conforme
  const hasNonConformity = result.some((item) =>
    ["nao_conforme", "erro", "invalido"].includes(item.status)
  );
  if (hasNonConformity) {
    return "nao_conforme";
  }

  // Se houver itens pendentes de verificação manual ou atenção
  const hasPendingItems = result.some((item) =>
    ["atencao", "manual", "nao_avaliado"].includes(item.status)
  );
  if (hasPendingItems) {
    return "nao_avaliado";
  }

  return "conforme";
}

async function loadData() {
  // 1. Carrega dados do Ambiente
  environment.value = await services.repositories.environmentRepository.get(
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

  rows.value = await Promise.all(
    elements.map(async (element) => {
      const evaluations = await services.evaluationService.listEvaluations(
        element.id
      );

      return {
        element,
        status: getElementStatus(evaluations),
      };
    })
  );
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
      ‹ {{ project?.name ?? "Projeto" }}
    </RouterLink>

    <!-- Cabeçalho -->
    <PageHeader
      eyebrow="Ambiente"
      :title="environment.name"
      description="Elementos e situação da última avaliação."
    >
      <template #action>
        <RouterLink
          class="button"
          :to="{
            path: '/elements/new',
            query: { environmentId: environment.id },
          }"
        >
          + Adicionar elemento
        </RouterLink>
      </template>
    </PageHeader>

    <!-- Lista de Elementos -->
    <div v-if="rows.length" class="card-list">
      <RouterLink
        v-for="row in rows"
        :key="row.element.id"
        class="card card--interactive"
        :to="`/elements/${row.element.id}`"
      >
        <div class="card__link">
          <span class="card__icon">◇</span>
          <div>
            <h2>{{ row.element.name }}</h2>
            <p>{{ row.element.type }}</p>
          </div>
          <StatusBadge :status="row.status" />
          <span class="chevron">›</span>
        </div>
      </RouterLink>
    </div>

    <!-- Estado Vazio (Sem elementos no ambiente) -->
    <EmptyState
      v-else
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
        + Adicionar elemento
      </RouterLink>
    </EmptyState>
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
