<script setup>
import { computed, inject, onMounted, ref } from "vue";
import { ChevronRight, Trash2 } from "@lucide/vue";
import { countFields, countRules, groupBuiltInRuleSets, groupCustomRuleSets } from "../domain/ruleGroup.js";
import { ruleSetToYaml } from "../domain/ruleSet.js";
import PageHeader from "../components/PageHeader.vue";
import EmptyState from "../components/EmptyState.vue";
import ErrorMessage from "../components/ErrorMessage.vue";
import RuleSetPopup from "../components/RuleSetPopup.vue";

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
const openRuleSet = ref(null);
const openTrigger = ref(null);

const currentGroup = computed(() =>
  groups.value.find(group => group.source === props.source && group.id === props.groupId)
);

// Prévia no mesmo formato aceito pela importação, gerada só quando o popup abre.
const openYaml = computed(() => (openRuleSet.value ? ruleSetToYaml(openRuleSet.value) : ""));

function openDetail(ruleSet, event) {
  openTrigger.value = event.currentTarget;
  openRuleSet.value = ruleSet;
}

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
      <p class="rules-section__hint">Toque em um checklist para ver os parâmetros e o YAML.</p>
      <div class="card-list ruleset-list">
        <article
          v-for="ruleSet in currentGroup.ruleSets"
          :key="ruleSet.id"
          class="card ruleset-card"
        >
          <h3 class="ruleset-card__heading">
            <button
              type="button"
              class="ruleset-card__trigger"
              aria-haspopup="dialog"
              @click="openDetail(ruleSet, $event)"
            >
              <span class="ruleset-card__text">
                <span class="ruleset-card__title">{{ ruleSet.nome }}</span>
                <span class="ruleset-card__meta">
                  <code>{{ ruleSet.id }}</code>
                  <span>{{ countRules(ruleSet) }} regras · {{ countFields(ruleSet) }} campos</span>
                </span>
              </span>
              <ChevronRight :size="20" class="chevron" aria-hidden="true" />
            </button>
          </h3>

          <div v-if="source === 'user'" class="ruleset-card__actions">
            <button class="button button--outline" @click="exportRule(ruleSet, 'yaml')">Exportar YAML</button>
            <button class="button button--outline" @click="exportRule(ruleSet, 'json')">Exportar JSON</button>
            <button class="icon-button icon-button--danger" title="Excluir" aria-label="Excluir" @click="remove(ruleSet, $event)"><Trash2 :size="18" aria-hidden="true" /></button>
          </div>
        </article>
      </div>
    </section>

    <RuleSetPopup
      v-if="openRuleSet"
      :rule-set="openRuleSet"
      :yaml="openYaml"
      :opener="openTrigger"
      @close="openRuleSet = null"
    />
  </template>

  <EmptyState v-else title="Conjunto não encontrado" text="Ele pode ter sido removido." />
</template>
