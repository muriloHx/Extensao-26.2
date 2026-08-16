import yaml from "js-yaml";

// Os arquivos são incorporados ao bundle no build, portanto não há leitura de
// disco nem chamada HTTP para obter as regras durante o uso offline.
const ruleFiles = import.meta.glob("../rules/**/*.yaml", {
  eager: true,
  import: "default",
  query: "?raw"
});

export async function loadRuleFile(filePath) {
  const modulePath = `../${filePath.replace(/^\.?(\/)+/, "")}`;
  const fileContent = ruleFiles[modulePath];

  if (typeof fileContent !== "string") {
    throw new Error(`Arquivo de regras não encontrado: ${filePath}`);
  }

  return yaml.load(fileContent);
}

// Conjuntos oficiais que acompanham o aplicativo. Eles não são persistidos:
// assim, continuam distinguíveis dos conjuntos criados pelo usuário.
export async function loadBuiltInRuleSets() {
  return Object.entries(ruleFiles)
    .map(([path, content]) => ({ path, ruleSet: yaml.load(content) }))
    .sort((left, right) => left.ruleSet.nome.localeCompare(right.ruleSet.nome));
}
