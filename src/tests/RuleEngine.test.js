import test from "node:test";
import assert from "node:assert/strict";
import { RuleEngine } from "../core/RuleEngine.js";

const parameters = {
  largura: { tipo: "number", unidade: "cm", obrigatorio: true }
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
