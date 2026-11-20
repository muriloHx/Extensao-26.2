import assert from "node:assert/strict";
import test from "node:test";
import {
  filterImportableFiles,
  importGroupFor,
  isImportableFileName,
  summarizeImport
} from "../domain/ruleSetImport.js";

const file = (name, webkitRelativePath) => ({ name, webkitRelativePath });

test("só arquivos de checklist são importáveis", () => {
  assert.equal(isImportableFileName("portas.yaml"), true);
  assert.equal(isImportableFileName("portas.yml"), true);
  assert.equal(isImportableFileName("portas.JSON"), true);
  assert.equal(isImportableFileName(".DS_Store"), false);
  assert.equal(isImportableFileName("README.md"), false);
});

test("uma pasta importada ignora os arquivos que não são checklists", () => {
  const { importable, skipped } = filterImportableFiles([
    file("portas.yaml"),
    file(".DS_Store"),
    file("README.md"),
    file("rampas.JSON")
  ]);

  assert.deepEqual(importable.map((item) => item.name), ["portas.yaml", "rampas.JSON"]);
  assert.equal(skipped, 2);
});

test("uma pasta vira um único conjunto com o nome da pasta", () => {
  const group = importGroupFor([
    file("portas.yaml", "escritorio/portas.yaml"),
    file("rampas.yml", "escritorio/rampas.yml")
  ]);

  assert.deepEqual(group, { id: "importado-escritorio", nome: "escritorio" });
});

test("um único arquivo dá nome ao conjunto, sem a extensão", () => {
  const group = importGroupFor([file("bebedouros.yaml")], { createId: () => "fixo" });

  assert.deepEqual(group, { id: "importado-fixo", nome: "bebedouros" });
});

test("vários arquivos avulsos caem no conjunto genérico", () => {
  const group = importGroupFor([file("portas.yaml"), file("rampas.yaml")], { createId: () => "fixo" });

  assert.equal(group.nome, "Regras importadas");
  assert.equal(group.id, "importado-fixo");
});

test("o resumo só fala do que deu errado", () => {
  assert.equal(summarizeImport({ total: 2, failures: [] }), "");
  assert.equal(
    summarizeImport({ total: 1, failures: ["portas.yaml: YAML malformado."] }),
    "portas.yaml: YAML malformado."
  );
  assert.equal(
    summarizeImport({ total: 3, failures: ["a.yaml: x", "b.yaml: y"] }),
    "2 de 3 arquivo(s) não importado(s) — a.yaml: x; b.yaml: y"
  );
  assert.equal(
    summarizeImport({ total: 1, skipped: 2 }),
    "2 arquivo(s) ignorado(s) por não serem .json/.yaml/.yml."
  );
});
