import assert from "node:assert/strict";
import test from "node:test";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import yaml from "js-yaml";
import { validateRuleSet } from "../core/ruleSetValidation.js";

const DIR = path.join(
  path.dirname(fileURLToPath(import.meta.url)),
  "..",
  "rules",
  "nbr9050-2020"
);

const base = (overrides = {}) => ({
  id: "teste",
  nome: "Teste",
  parametros: { largura: { tipo: "number" } },
  regras: [
    { id: "r1", nome: "Largura", parametro: "largura", operador: ">=", valor: 1.2 }
  ],
  ...overrides
});

const selecao = (condicoes) => base({
  parametros: { tipo_piso: { tipo: "select", opcoes: ["liso", "irregular"] } },
  regras: [
    { id: "piso", nome: "Piso", tipo: "conditional", parametro: "tipo_piso", condicoes }
  ]
});

function erros(ruleSet) {
  return validateRuleSet(ruleSet).errors.join(" ");
}

test("resultado fora dos status conhecidos é rejeitado", () => {
  const invalido = selecao([
    { quando: { operador: "==", valor: "liso" }, resultado: "nao-conforme" },
    { quando: { operador: "!=", valor: "liso" }, resultado: "conforme" }
  ]);

  assert.equal(validateRuleSet(invalido).valid, false);
  assert.match(erros(invalido), /resultado deve ser um de/);
});

test("condição numérica exige ramo final com > ou >=", () => {
  const semFim = base({
    regras: [
      {
        id: "faixas",
        nome: "Faixas",
        tipo: "conditional",
        parametro: "largura",
        condicoes: [{ quando: { operador: "<=", valor: 1 }, resultado: "conforme" }]
      }
    ]
  });

  assert.equal(validateRuleSet(semFim).valid, false);
  assert.match(erros(semFim), /deve cobrir todos os valores de largura/);

  const comFim = base({
    regras: [
      {
        id: "faixas",
        nome: "Faixas",
        tipo: "conditional",
        parametro: "largura",
        condicoes: [
          { quando: { operador: "<=", valor: 1 }, resultado: "conforme" },
          { quando: { operador: ">", valor: 1 }, resultado: "nao_conforme" }
        ]
      }
    ]
  });

  assert.equal(validateRuleSet(comFim).valid, true);
});

test("condição booleana precisa cobrir as duas respostas", () => {
  const metade = base({
    parametros: { possui_corrimao: { tipo: "boolean" } },
    regras: [
      {
        id: "corrimao",
        nome: "Corrimão",
        tipo: "conditional",
        parametro: "possui_corrimao",
        condicoes: [{ quando: { operador: "==", valor: true }, resultado: "conforme" }]
      }
    ]
  });

  assert.equal(validateRuleSet(metade).valid, false);

  const completo = base({
    parametros: { possui_corrimao: { tipo: "boolean" } },
    regras: [
      {
        id: "corrimao",
        nome: "Corrimão",
        tipo: "conditional",
        parametro: "possui_corrimao",
        condicoes: [
          { quando: { operador: "==", valor: true }, resultado: "conforme" },
          { quando: { operador: "==", valor: false }, resultado: "nao_conforme" }
        ]
      }
    ]
  });

  assert.equal(validateRuleSet(completo).valid, true);
});

test("condição de seleção aceita == e != cobrindo as opções", () => {
  const ruleSet = selecao([
    { quando: { operador: "==", valor: "liso" }, resultado: "nao_conforme" },
    { quando: { operador: "!=", valor: "liso" }, resultado: "conforme" }
  ]);

  assert.equal(validateRuleSet(ruleSet).valid, true);
});

test("campo select sem opções é rejeitado", () => {
  const semOpcoes = base({ parametros: { tipo_piso: { tipo: "select" } } });

  assert.equal(validateRuleSet(semOpcoes).valid, false);
  assert.match(erros(semOpcoes), /opcoes deve listar as opções/);
});

test("tipo de parâmetro desconhecido é rejeitado", () => {
  const invalido = base({ parametros: { largura: { tipo: "texto" } } });

  assert.equal(validateRuleSet(invalido).valid, false);
  assert.match(erros(invalido), /tipo deve ser number, boolean ou select/);
});

test("todos os conjuntos oficiais passam na validação", () => {
  const falhas = [];

  for (const file of fs.readdirSync(DIR).filter((name) => name.endsWith(".yaml"))) {
    const ruleSet = yaml.load(fs.readFileSync(path.join(DIR, file), "utf8"));
    const validation = validateRuleSet(ruleSet);
    if (!validation.valid) {
      falhas.push(`${file}: ${validation.errors.join(" | ")}`);
    }
  }

  assert.deepEqual(falhas, []);
});
