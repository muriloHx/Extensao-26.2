import assert from "node:assert/strict";
import test from "node:test";
import { countFields, countGroupRules, countRules, groupBuiltInRuleSets, groupCustomRuleSets } from "../domain/ruleGroup.js";

const ruleSet = (id, nome = id) => ({ id, nome, parametros: {}, regras: [] });

test("cada pasta de regras padrão forma um único conjunto da biblioteca", () => {
  const groups = groupBuiltInRuleSets([
    { path: "../rules/nbr9050-2020/portas.yaml", ruleSet: { ...ruleSet("portas"), norma: { nome: "ABNT NBR 9050", versao: "2020" } } },
    { path: "../rules/nbr9050-2020/rampas.yaml", ruleSet: ruleSet("rampas") },
    { path: "../rules/outras/itens.yaml", ruleSet: ruleSet("itens") }
  ]);

  assert.equal(groups.length, 2);
  assert.equal(groups.find((group) => group.id === "rules/nbr9050-2020")?.ruleSets.length, 2);
  assert.equal(groups.find((group) => group.id === "rules/nbr9050-2020")?.nome, "ABNT NBR 9050 · 2020");
});

test("importações do mesmo grupo aparecem juntas", () => {
  const groups = groupCustomRuleSets([
    { ...ruleSet("portas"), grupo: { id: "importado-escritorio", nome: "Escritório" } },
    { ...ruleSet("rampas"), grupo: { id: "importado-escritorio", nome: "Escritório" } },
    ruleSet("avulso", "Regra avulsa")
  ]);

  assert.equal(groups.length, 2);
  assert.equal(groups.find((group) => group.id === "importado-escritorio")?.ruleSets.length, 2);
});

test("a biblioteca conta regras e campos de cada checklist", () => {
  const portas = {
    ...ruleSet("portas"),
    parametros: { largura: {}, altura: {} },
    regras: [{ id: "a" }, { id: "b" }, { id: "c" }]
  };

  assert.equal(countRules(portas), 3);
  assert.equal(countFields(portas), 2);
  assert.equal(countGroupRules({ ruleSets: [portas, ruleSet("rampas")] }), 3);
});

test("as contagens toleram checklist e conjunto incompletos", () => {
  assert.equal(countRules({}), 0);
  assert.equal(countFields({}), 0);
  assert.equal(countGroupRules({}), 0);
});
