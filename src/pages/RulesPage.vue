<script setup>
import { computed, inject, onMounted, ref } from "vue";
import { RouterLink, useRouter } from "vue-router";
import { groupBuiltInRuleSets, groupCustomRuleSets } from "../domain/ruleGroup.js";
import PageHeader from "../components/PageHeader.vue";
import EmptyState from "../components/EmptyState.vue";

const props = defineProps({
  source: String,
  groupId: String,
  documentation: Boolean,
});

const services = inject("services");
const builtInRuleSets = inject("builtInRuleSets");
const router = useRouter();

const groups = ref([]);
const loading = ref(true);
const importing = ref(false);
const error = ref("");

const standardGroups = computed(() => groups.value.filter(group => group.source === "standard"));
const customGroups = computed(() => groups.value.filter(group => group.source === "user"));

const currentGroup = computed(() =>
  groups.value.find(group => group.source === props.source && group.id === props.groupId)
);

function ruleCount(ruleSet) {
  return ruleSet.regras?.length ?? 0;
}

function fieldCount(ruleSet) {
  return Object.keys(ruleSet.parametros ?? {}).length;
}

function totalRuleCount(group) {
  return group.ruleSets.reduce((total, ruleSet) => total + ruleCount(ruleSet), 0);
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

function groupPath(group) {
  return `/rules/${encodeURIComponent(group.source)}/${encodeURIComponent(group.id)}`;
}

async function importFiles(event) {
  const allFiles = [...(event.target.files ?? [])];
  if (!allFiles.length) return;

  // webkitdirectory ignora o atributo accept: uma pasta traz todo tipo de
  // arquivo (.DS_Store, .git, README, etc.), não só .json/.yaml/.yml.
  const files = allFiles.filter(file => /\.(json|ya?ml)$/i.test(file.name));
  const skipped = allFiles.length - files.length;
  if (!files.length) {
    error.value = "Nenhum arquivo .json, .yaml ou .yml encontrado.";
    event.target.value = "";
    return;
  }

  error.value = "";
  importing.value = true;

  const folder = files[0].webkitRelativePath?.split("/")[0];
  const group = {
    id: `importado-${folder || crypto.randomUUID()}`,
    nome: folder || (files.length === 1 ? files[0].name.replace(/\.(json|ya?ml)$/i, "") : "Regras importadas"),
  };

  const failures = [];
  for (const file of files) {
    try {
      const content = await file.text();
      if (/\.json$/i.test(file.name)) {
        await services.ruleSetService.importFromJson(content, group);
      } else {
        await services.ruleSetService.importFromYaml(content, group);
      }
    } catch (e) {
      failures.push(`${file.name}: ${e.message}`);
    }
  }

  const notes = [];
  if (failures.length) {
    notes.push(files.length === 1
      ? failures[0]
      : `${failures.length} de ${files.length} arquivo(s) não importado(s) — ${failures.join("; ")}`);
  }
  if (skipped) {
    notes.push(`${skipped} arquivo(s) ignorado(s) por não serem .json/.yaml/.yml.`);
  }
  error.value = notes.join(" ");

  await load();
  event.target.value = "";
  importing.value = false;
}

async function remove(ruleSet) {
  if (!window.confirm(`Excluir "${ruleSet.nome}"? Esta ação não pode ser desfeita.`)) return;
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
  <!-- Documentação -->
  <template v-if="documentation">
    <RouterLink class="back-link" to="/rules">‹ Conjuntos de regras</RouterLink>

    <PageHeader
      eyebrow="Documentação"
      title="Crie e importe regras"
      description="Monte checklists em YAML para avaliar os elementos do seu projeto."
    >
      <template #action>
        <a class="button button--outline" href="/rule-engine-skill/SKILL.md" download="SKILL.md">
          Baixar SKILL.md
        </a>
      </template>
    </PageHeader>

    <div class="documentation">
      <section class="documentation__intro">
        <span class="documentation__icon" aria-hidden="true">?</span>
        <div>
          <h2>Como o conjunto é organizado</h2>
          <p>Um arquivo YAML representa um checklist. Ao importar uma pasta, seus arquivos são agrupados na biblioteca.</p>
        </div>
      </section>

      <section class="documentation__section">
        <h2>Formato mínimo</h2>
        <pre class="documentation-code"><code>id: bebedouro
nome: Bebedouros
parametros:
  altura_bica:
    tipo: number
    obrigatorio: true
regras:
  - id: altura_maxima
    parametro: altura_bica
    operador: "&lt;="
    valor: 0.90</code></pre>
        <p class="documentation__note">
          Os tipos disponíveis para parâmetros são <code>number</code>, <code>boolean</code> e <code>select</code>.
          Regras importadas são validadas pela mesma lógica de domínio usada no restante do aplicativo.
        </p>
      </section>

      <section class="documentation__section">
        <h2>Importação</h2>
        <p>Escolha um ou mais arquivos YAML/JSON, ou uma pasta com vários checklists. Eles ficam armazenados somente neste navegador.</p>
        <RouterLink class="button" to="/rules">Ir para importação</RouterLink>
      </section>
    </div>
  </template>

  <!-- Detalhe de um conjunto -->
  <template v-else-if="groupId">
    <RouterLink class="back-link" to="/rules">‹ Conjuntos de regras</RouterLink>

    <template v-if="loading">
      <p class="muted" role="status">Carregando…</p>
    </template>

    <template v-else-if="currentGroup">
      <PageHeader
        :eyebrow="source === 'user' ? 'Importado' : 'Padrão'"
        :title="currentGroup.nome"
        :description="`${currentGroup.ruleSets.length} checklists que compõem este conjunto.`"
      />

      <p v-if="error" class="alert alert--error" role="alert">{{ error }}</p>

      <section class="rules-section rules-section--first">
        <h2>Checklists</h2>
        <div class="card-list">
          <article v-for="ruleSet in currentGroup.ruleSets" :key="ruleSet.id" class="card rules-card">
            <div>
              <div class="rule-source">{{ source === 'user' ? 'Adicionada por você' : 'Padrão' }}</div>
              <h2>{{ ruleSet.nome }}</h2>
              <p>{{ ruleSet.norma?.nome ?? 'Conjunto personalizado' }}</p>
              <small>{{ ruleCount(ruleSet) }} regras · {{ fieldCount(ruleSet) }} campos</small>
            </div>
            <div v-if="source === 'user'" class="rules-card__actions">
              <button class="text-button" @click="exportRule(ruleSet, 'yaml')">Exportar YAML</button>
              <button class="text-button" @click="exportRule(ruleSet, 'json')">Exportar JSON</button>
              <button class="text-button text-button--danger" @click="remove(ruleSet)">Excluir</button>
            </div>
          </article>
        </div>
      </section>
    </template>

    <EmptyState v-else title="Conjunto não encontrado" text="Ele pode ter sido removido." />
  </template>

  <!-- Biblioteca -->
  <template v-else>
    <PageHeader
      eyebrow="Biblioteca"
      title="Conjuntos de regras"
      description="Cada pasta ou importação é exibida como um único conjunto."
    >
      <template #action>
        <span class="import-actions">
          <RouterLink class="button button--ghost" to="/rules/documentation">Como criar regras</RouterLink>
          <label class="button button--outline import-button">
            Importar arquivos
            <input type="file" accept=".json,.yaml,.yml" multiple :disabled="importing" @change="importFiles">
          </label>
          <label class="button button--outline import-button">
            Importar pasta
            <input type="file" accept=".json,.yaml,.yml" webkitdirectory :disabled="importing" @change="importFiles">
          </label>
        </span>
      </template>
    </PageHeader>

    <p v-if="importing" class="muted" role="status">Importando…</p>
    <p v-if="error" class="alert alert--error" role="alert">{{ error }}</p>

    <template v-if="loading">
      <p class="muted" role="status">Carregando…</p>
    </template>

    <template v-else>
      <section class="rules-section rules-section--first">
        <h2>Regras padrão</h2>
        <div class="card-list">
          <RouterLink
            v-for="group in standardGroups"
            :key="group.id"
            class="card card--interactive rules-card"
            :to="groupPath(group)"
          >
            <span class="card__icon" aria-hidden="true">✓</span>
            <div>
              <div class="rule-source">Padrão</div>
              <h2>{{ group.nome }}</h2>
              <p>{{ group.ruleSets.length }} checklists · {{ totalRuleCount(group) }} regras</p>
            </div>
            <span class="chevron" aria-hidden="true">›</span>
          </RouterLink>
        </div>
      </section>

      <section class="rules-section">
        <h2>Suas regras</h2>
        <div v-if="customGroups.length" class="card-list">
          <RouterLink
            v-for="group in customGroups"
            :key="group.id"
            class="card card--interactive rules-card"
            :to="groupPath(group)"
          >
            <span class="card__icon" aria-hidden="true">✓</span>
            <div>
              <div class="rule-source">Adicionada por você</div>
              <h2>{{ group.nome }}</h2>
              <p>{{ group.ruleSets.length }} checklists</p>
            </div>
            <span class="chevron" aria-hidden="true">›</span>
          </RouterLink>
        </div>
        <EmptyState v-else title="Nenhum conjunto importado" text="Importe arquivos ou uma pasta para começar." />
      </section>
    </template>
  </template>
</template>
