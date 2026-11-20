<script setup>
import { computed, inject, onMounted, ref } from "vue";
import { ChevronRight, ClipboardCheck } from "@lucide/vue";
import { RouterLink } from "vue-router";
import { countGroupRules, groupBuiltInRuleSets, groupCustomRuleSets } from "../domain/ruleGroup.js";
import { filterImportableFiles, importGroupFor, summarizeImport } from "../domain/ruleSetImport.js";
import PageHeader from "../components/PageHeader.vue";
import EmptyState from "../components/EmptyState.vue";
import ErrorMessage from "../components/ErrorMessage.vue";

const services = inject("services");
const builtInRuleSets = inject("builtInRuleSets");

const groups = ref([]);
const loading = ref(true);
const importing = ref(false);
const error = ref("");

const standardGroups = computed(() => groups.value.filter(group => group.source === "standard"));
const customGroups = computed(() => groups.value.filter(group => group.source === "user"));

async function load() {
  loading.value = true;
  try {
    const custom = await services.ruleSetService.list();
    groups.value = [...groupBuiltInRuleSets(builtInRuleSets), ...groupCustomRuleSets(custom)];
  } finally {
    loading.value = false;
  }
}

function groupPath(group) {
  return `/rules/${encodeURIComponent(group.source)}/${encodeURIComponent(group.id)}`;
}

async function importFiles(event) {
  const allFiles = [...(event.target.files ?? [])];
  if (!allFiles.length) return;

  // webkitdirectory ignora o atributo accept: uma pasta traz todo tipo de
  // arquivo (.DS_Store, .git, README, etc.), não só .json/.yaml/.yml.
  const { importable, skipped } = filterImportableFiles(allFiles);
  if (!importable.length) {
    error.value = "Nenhum arquivo .json, .yaml ou .yml encontrado.";
    event.target.value = "";
    return;
  }

  error.value = "";
  importing.value = true;

  try {
    // Ler o texto é I/O de arquivo: fica na UI. O serviço só coordena o import.
    const entries = [];
    for (const file of importable) {
      try {
        entries.push({ name: file.name, content: await file.text() });
      } catch (e) {
        entries.push({ name: file.name, error: e.message });
      }
    }

    const { failures } = await services.ruleSetService.importFromEntries(entries, importGroupFor(importable));
    error.value = summarizeImport({ total: importable.length, failures, skipped });

    await load();
  } finally {
    importing.value = false;
    event.target.value = "";
  }
}

onMounted(load);
</script>

<template>
  <PageHeader
    class="rules-page-header"
    title="Conjuntos de regras"
    description="Cada pasta ou importação é exibida como um único conjunto."
  >
    <template #action>
      <div class="rules-actions">
        <label class="button import-button">
          Importar arquivos
          <input type="file" accept=".json,.yaml,.yml" multiple :disabled="importing" @change="importFiles">
        </label>
        <label class="button button--outline import-button">
          Importar pasta
          <input type="file" accept=".json,.yaml,.yml" webkitdirectory :disabled="importing" @change="importFiles">
        </label>
        <RouterLink class="rules-help-link" to="/rules/documentation">Como criar regras</RouterLink>
      </div>
    </template>
  </PageHeader>

  <p v-if="importing" class="muted" role="status">Importando…</p>
  <ErrorMessage :message="error" />

  <template v-if="loading">
    <p class="muted" role="status">Carregando…</p>
  </template>

  <template v-else>
    <div class="rules-library">
      <section class="rules-section rules-section--first rules-library__section">
        <h2>Regras padrão</h2>
        <div class="card-list rules-library__list">
          <RouterLink
            v-for="group in standardGroups"
            :key="group.id"
            class="card card--interactive rules-card"
            :to="groupPath(group)"
          >
            <span class="card__icon"><ClipboardCheck :size="22" aria-hidden="true" /></span>
            <div>
              <h2>{{ group.nome }}</h2>
              <p>{{ group.ruleSets.length }} checklists · {{ countGroupRules(group) }} regras</p>
            </div>
            <ChevronRight :size="20" class="chevron" aria-hidden="true" />
          </RouterLink>
        </div>
      </section>

      <section class="rules-section rules-library__section">
        <h2>Suas regras</h2>
        <div v-if="customGroups.length" class="card-list rules-library__list">
          <RouterLink
            v-for="group in customGroups"
            :key="group.id"
            class="card card--interactive rules-card"
            :to="groupPath(group)"
          >
            <span class="card__icon"><ClipboardCheck :size="22" aria-hidden="true" /></span>
            <div>
              <h2>{{ group.nome }}</h2>
              <p>{{ group.ruleSets.length }} checklists</p>
            </div>
            <ChevronRight :size="20" class="chevron" aria-hidden="true" />
          </RouterLink>
        </div>
        <EmptyState v-else title="Nenhum conjunto importado" text="Importe arquivos ou uma pasta para começar." />
      </section>
    </div>
  </template>
</template>
