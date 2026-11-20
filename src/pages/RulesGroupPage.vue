<script setup>
import { computed, inject, onMounted, ref } from "vue";
import { Trash2 } from "@lucide/vue";
import { countFields, countRules, groupBuiltInRuleSets, groupCustomRuleSets } from "../domain/ruleGroup.js";
import PageHeader from "../components/PageHeader.vue";
import EmptyState from "../components/EmptyState.vue";
import ErrorMessage from "../components/ErrorMessage.vue";

const props = defineProps({
  source: String,
  groupId: String,
});

const services = inject("services");
const builtInRuleSets = inject("builtInRuleSets");
const confirmPopup = inject("confirmPopup");

const groups = ref([]);
const loading = ref(true);
const error = ref("");

const currentGroup = computed(() =>
  groups.value.find(group => group.source === props.source && group.id === props.groupId)
);

async function load() {
  loading.value = true;
  try {
    const custom = await services.ruleSetService.list();
    groups.value = [...groupBuiltInRuleSets(builtInRuleSets), ...groupCustomRuleSets(custom)];
  } finally {
    loading.value = false;
  }
}

function remove(ruleSet, event) {
  confirmPopup.confirm(
    event,
    `Excluir "${ruleSet.nome}"? Esta ação não pode ser desfeita.`,
    () => deleteRuleSet(ruleSet)
  );
}

async function deleteRuleSet(ruleSet) {
  error.value = "";
  try {
    await services.ruleSetService.delete(ruleSet.id);
    await load();
  } catch (e) {
    error.value = e.message;
  }
}

async function exportRule(ruleSet, format) {
  try {
    const content = format === "json"
      ? await services.ruleSetService.exportByIdToJson(ruleSet.id)
      : await services.ruleSetService.exportByIdToYaml(ruleSet.id);
    const mimeType = format === "json" ? "application/json" : "text/yaml";
    const link = document.createElement("a");
    link.href = URL.createObjectURL(new Blob([content], { type: mimeType }));
    link.download = `${ruleSet.id}.${format}`;
    link.click();
    URL.revokeObjectURL(link.href);
  } catch (e) {
    error.value = e.message;
  }
}

onMounted(load);
</script>

<template>
  <template v-if="loading">
    <p class="muted" role="status">Carregando…</p>
  </template>

  <template v-else-if="currentGroup">
    <PageHeader
      :title="currentGroup.nome"
      :description="`${currentGroup.ruleSets.length} checklists que compõem este conjunto.`"
    />

    <ErrorMessage :message="error" />

    <section class="rules-section rules-section--first">
      <h2>Checklists</h2>
      <div class="card-list ruleset-list">
        <article v-for="ruleSet in currentGroup.ruleSets" :key="ruleSet.id" class="card ruleset-card">
          <div>
            <h2>{{ ruleSet.nome }}</h2>
            <p>{{ ruleSet.norma?.nome ?? 'Conjunto personalizado' }}</p>
            <small>{{ countRules(ruleSet) }} regras · {{ countFields(ruleSet) }} campos</small>
          </div>
          <div v-if="source === 'user'" class="ruleset-card__actions">
            <button class="button button--outline" @click="exportRule(ruleSet, 'yaml')">Exportar YAML</button>
            <button class="button button--outline" @click="exportRule(ruleSet, 'json')">Exportar JSON</button>
            <button class="icon-button icon-button--danger" title="Excluir" aria-label="Excluir" @click="remove(ruleSet, $event)"><Trash2 :size="18" aria-hidden="true" /></button>
          </div>
        </article>
      </div>
    </section>
  </template>

  <EmptyState v-else title="Conjunto não encontrado" text="Ele pode ter sido removido." />
</template>
