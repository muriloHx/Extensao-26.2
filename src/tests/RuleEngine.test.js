import test from "node:test";
import assert from "node:assert/strict";
import { RuleEngine } from "../core/RuleEngine.js";

const parameters = {
  largura: { tipo: "number", unidade: "cm", obrigatorio: true },
  inclinacao: { tipo: "number", unidade: "%", obrigatorio: true },
  inclinacao_opcional: { tipo: "number", unidade: "%" }
};

test(">= retorna conforme quando o valor atende ao mínimo", () => {
  const engine = new RuleEngine();

  const result = engine.evaluate(
    [{
      id: "largura",
      nome: "Largura",
      parametro: "largura",
      operador: ">=",
      valor: 80
    }],
    { largura: 80 },
    parameters
  );

  assert.equal(result[0].status, "conforme");
});

test(">= retorna não conforme quando o valor não atende ao mínimo", () => {
  const engine = new RuleEngine();

  const result = engine.evaluate(
    [{
      id: "largura",
      nome: "Largura",
      parametro: "largura",
      operador: ">=",
      valor: 80
    }],
    { largura: 79 },
    parameters
  );

  assert.equal(result[0].status, "nao_conforme");
});

// Regra condicional sem valor: ainda não dá para decidir.
test("condição sem valor informado continua pendente", () => {
  const engine = new RuleEngine();

  const result = engine.evaluate(
    [{
      id: "faixas",
      nome: "Faixas de inclinação",
      tipo: "conditional",
      parametro: "inclinacao_opcional",
      condicoes: [
        { quando: { operador: "<=", valor: 3 }, resultado: "conforme" }
      ]
    }],
    {},
    parameters
  );

  assert.equal(result[0].status, "nao_avaliado");
});

// Valor informado que nenhuma condição cobre é lacuna do conjunto, não pendência.
test("condição sem ramo para o valor informado vira erro do conjunto", () => {
  const engine = new RuleEngine();

  const result = engine.evaluate(
    [{
      id: "faixas",
      nome: "Faixas de inclinação",
      tipo: "conditional",
      parametro: "inclinacao",
      condicoes: [
        { quando: { operador: "<=", valor: 3 }, resultado: "conforme" }
      ]
    }],
    { inclinacao: 10 },
    parameters
  );

  assert.equal(result[0].status, "erro");
  assert.match(result[0].mensagem, /nenhuma condição cobre inclinacao = 10/i);
});
