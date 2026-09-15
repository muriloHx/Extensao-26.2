<script setup>
import { inject, onMounted, ref } from "vue";
import { Box, ChevronLeft, ChevronRight, Plus, Trash2 } from "@lucide/vue";
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

async function deleteElement(element) {
  const confirmed = window.confirm(
    `Excluir o elemento ${element.name} e suas avaliações?`)

  if (!confirmed) return;

  const evaluations = await services.evaluationService.listEvaluations(
    element.id
  );

  console.log("ELEMENT NAME: " + element.name);
  for (const evaluation of evaluations) {
    await services.repositories.evaluationRepository.delete(evaluation.id);
    console.log("EVAL ID: " + evaluation.id);
  }

  await services.repositories.elementRepository.delete(element.id);

  await loadData();
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
      <ChevronLeft :size="18" aria-hidden="true" />{{ project?.name ?? "Projeto" }}
    </RouterLink>

    <!-- Cabeçalho -->
    <PageHeader
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
          <Plus :size="18" aria-hidden="true" />Adicionar elemento
        </RouterLink>
      </template>
    </PageHeader>

    <!-- Lista de Elementos -->
    <div v-if="rows.length" class="card-list">
      <article
        v-for="row in rows"
        :key="row.element.id"
        class="card card--interactive"
      >
        <!-- Link navegável do card -->
        <RouterLink
          class="card__link"
          :to="`/elements/${row.element.id}`"
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
            @click="deleteElement(row.element)"
          >
            <Trash2 :size="18" aria-hidden="true" />
          </button>
        </div>
      </article>
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
        <Plus :size="18" aria-hidden="true" />Adicionar elemento
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
