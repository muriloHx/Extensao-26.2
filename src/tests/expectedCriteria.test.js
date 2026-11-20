import assert from "node:assert/strict";
import test from "node:test";
import { RuleEngine } from "../core/RuleEngine.js";
import { formatExpected } from "../core/formatExpected.js";
import { firstMatchingCondition } from "../core/conditions.js";
import {
  expectedCriteria,
  hasParameterHelp,
  manualParameters,
} from "../core/expectedCriteria.js";

function checklist({ parametros = {}, regras = [] } = {}) {
  return { id: "teste", nome: "Teste", parametros, regras };
}

// Regra condicional usada em vários casos: desnível pequeno passa direto,
// desnível médio depende de chanfro, desnível grande vira atenção.
function conditionalChecklist() {
  return checklist({
    parametros: {
      desnivel: { tipo: "number", unidade: "cm" },
      possui_chanfro: { tipo: "boolean" },
    },
    regras: [{
      id: "tratamento",
      nome: "Tratamento do desnível",
      tipo: "conditional",
      parametro: "desnivel",
      condicoes: [
        { quando: { operador: "<=", valor: 5 }, resultado: "conforme" },
        {
          quando: { operador: "<=", valor: 15 },
          verificar: { parametro: "possui_chanfro", operador: "==", valor: true },
        },
        { quando: { operador: ">", valor: 15 }, resultado: "atencao" },
      ],
    }],
  });
}

test("a comparação direta vira o critério exibido, com unidade", () => {
  const criteria = expectedCriteria(checklist({
    parametros: { largura: { tipo: "number", unidade: "m" } },
    regras: [{ id: "largura-minima", parametro: "largura", operador: ">=", valor: 0.9 }],
  }), {});

  assert.deepEqual(criteria.largura, ["No mínimo 0.9 m (inclusive)"]);
});

test("critérios do mesmo campo saem em ordem de leitura: mínimo, igualdade, máximo", () => {
  const criteria = expectedCriteria(checklist({
    parametros: { largura: { tipo: "number", unidade: "m" } },
    regras: [
      { id: "maximo", parametro: "largura", operador: "<=", valor: 1.2 },
      { id: "minimo", parametro: "largura", operador: ">=", valor: 0.9 },
      { id: "exato", parametro: "largura", operador: "==", valor: 1 },
    ],
  }), {});

  assert.deepEqual(criteria.largura, [
    "No mínimo 0.9 m (inclusive)",
    "Igual a 1 m",
    "No máximo 1.2 m (inclusive)",
  ]);
});

test("o mesmo critério escrito duas vezes aparece uma vez só", () => {
  const criteria = expectedCriteria(checklist({
    parametros: { piso: { tipo: "select", opcoes: ["liso"] } },
    regras: [
      { id: "a", parametro: "piso", operador: "==", valor: "liso" },
      { id: "b", parametro: "piso", operador: "eq", valor: "liso" },
    ],
  }), {});

  assert.deepEqual(criteria.piso, ["Igual a liso"]);
});

test("o ramo condicional é escolhido pelo valor já informado", () => {
  const base = conditionalChecklist();

  // Sem valor informado não há ramo alcançado.
  assert.deepEqual(expectedCriteria(base, {}), {});
  // Ramo com resultado não impõe critério a nenhum campo.
  assert.deepEqual(expectedCriteria(base, { desnivel: 3 }), {});
  // Ramo com verificar impõe o critério ao parâmetro verificado.
  assert.deepEqual(expectedCriteria(base, { desnivel: 10 }), {
    possui_chanfro: ["Igual a sim"],
  });
});

test("o campo numérico é comparado como número enquanto o usuário digita", () => {
  const criteria = expectedCriteria(conditionalChecklist(), { desnivel: "10,5" });

  assert.deepEqual(criteria, { possui_chanfro: ["Igual a sim"] });
});

test("ramo sem resultado nem verificar é ignorado, como no motor", () => {
  const regra = {
    condicoes: [
      { quando: { operador: "<=", valor: 10 } },
      { quando: { operador: "<=", valor: 20 }, resultado: "atencao" },
    ],
  };

  assert.equal(firstMatchingCondition(regra, 5).resultado, "atencao");
  assert.equal(firstMatchingCondition(regra, 30), undefined);
});

test("o critério exibido corresponde ao ramo que o motor avalia", () => {
  const base = conditionalChecklist();
  const data = { desnivel: 10, possui_chanfro: false };

  const [result] = new RuleEngine().evaluate(base.regras, data, base.parametros);
  const displayed = expectedCriteria(base, data);

  assert.equal(result.parametro, "possui_chanfro");
  assert.equal(result.status, "nao_conforme");
  assert.deepEqual(displayed[result.parametro], [
    formatExpected(result.operador, result.valorEsperado),
  ]);
});

test("julgamento humano não tem valor esperado e é marcado como manual", () => {
  const base = checklist({
    parametros: { rota: { tipo: "select", opcoes: ["livre"] } },
    regras: [{ id: "rota", tipo: "checklist", parametro: "rota", mensagem: "A rota está livre?" }],
  });

  assert.deepEqual(expectedCriteria(base, { rota: "livre" }), {});
  assert.deepEqual([...manualParameters(base)], ["rota"]);
});

test("o botão de ajuda só aparece quando há algo para mostrar", () => {
  assert.equal(hasParameterHelp({ definicao: "Vão livre de 0,80 m" }), true);
  assert.equal(hasParameterHelp({}, ["No mínimo 0.9 m (inclusive)"]), true);
  assert.equal(hasParameterHelp({}, [], true), true);
  assert.equal(hasParameterHelp({}, [], false), false);
  assert.equal(hasParameterHelp(undefined), false);
});
