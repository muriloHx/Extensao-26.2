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
