import assert from "node:assert/strict";
import test from "node:test";
import { matchesRuleSetQuery } from "../core/ruleSetSearch.js";

const porta = {
  id: "nbr9050-2020/portas",
  nome: "Portas",
  norma: { nome: "ABNT NBR 9050" },
  regras: [
    { id: "largura_minima", nome: "Largura mínima" },
    { id: "maçaneta", nome: "Tipo de maçaneta" }
  ]
};

test("busca vazia mostra todos os checklists", () => {
  assert.equal(matchesRuleSetQuery(porta, ""), true);
  assert.equal(matchesRuleSetQuery(porta, "   "), true);
  assert.equal(matchesRuleSetQuery(porta, undefined), true);
});

test("encontra pelo nome do checklist, sem diferenciar maiúsculas", () => {
  assert.equal(matchesRuleSetQuery(porta, "porta"), true);
  assert.equal(matchesRuleSetQuery(porta, "PORTAS"), true);
  assert.equal(matchesRuleSetQuery(porta, "  port  "), true);
});

test("encontra pelo nome da norma", () => {
  assert.equal(matchesRuleSetQuery(porta, "nbr 9050"), true);
});

test("encontra pelo nome ou pelo id de uma regra interna", () => {
  assert.equal(matchesRuleSetQuery(porta, "largura"), true);
  assert.equal(matchesRuleSetQuery(porta, "maçaneta"), true);
  assert.equal(matchesRuleSetQuery(porta, "largura_minima"), true);
});

test("devolve falso quando nada casa", () => {
  assert.equal(matchesRuleSetQuery(porta, "rampa"), false);
});

test("checklist sem norma ou sem regras não quebra a busca", () => {
  const simples = { id: "avulso", nome: "Regra avulsa" };

  assert.equal(matchesRuleSetQuery(simples, "avulsa"), true);
  assert.equal(matchesRuleSetQuery(simples, "porta"), false);
  assert.equal(matchesRuleSetQuery(undefined, "porta"), false);
});
