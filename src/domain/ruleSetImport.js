const IMPORTABLE_FILE = /\.(json|ya?ml)$/i;

/** Formatos aceitos na importação: cada checklist é um .json, .yaml ou .yml. */
export function isImportableFileName(name = "") {
  return IMPORTABLE_FILE.test(name);
}

/**
 * Separa os arquivos que podem virar checklists dos que serão ignorados.
 * webkitdirectory entrega pastas inteiras (.DS_Store, .git, README), então o
 * filtro é necessário mesmo com o atributo accept no input.
 */
export function filterImportableFiles(files = []) {
  const importable = files.filter((file) => isImportableFileName(file.name));
  return { importable, skipped: files.length - importable.length };
}

/** Conjunto que agrupa os checklists importados juntos (nomeado pela pasta, quando houver). */
export function importGroupFor(files, { createId = () => crypto.randomUUID() } = {}) {
  const folder = files[0]?.webkitRelativePath?.split("/")[0];
  return {
    id: `importado-${folder || createId()}`,
    nome: folder || (files.length === 1 ? files[0].name.replace(IMPORTABLE_FILE, "") : "Regras importadas")
  };
}

/** Mensagem única com o que falhou e o que foi ignorado; vazia quando tudo entrou. */
export function summarizeImport({ total, failures = [], skipped = 0 }) {
  const notes = [];

  if (failures.length) {
    notes.push(total === 1
      ? failures[0]
      : `${failures.length} de ${total} arquivo(s) não importado(s) — ${failures.join("; ")}`);
  }

  if (skipped) {
    notes.push(`${skipped} arquivo(s) ignorado(s) por não serem .json/.yaml/.yml.`);
  }

  return notes.join(" ");
}
