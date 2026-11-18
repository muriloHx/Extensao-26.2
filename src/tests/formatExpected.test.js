import assert from "node:assert/strict";
import test from "node:test";
import { formatExpected, formatUnit } from "../core/formatExpected.js";

const degraus = { singular: "degrau", plural: "degraus" };

test("unidade com singular e plural concorda com o valor", () => {
  assert.equal(formatUnit(degraus, 1), "degrau");
  assert.equal(formatUnit(degraus, 2), "degraus");
  assert.equal(formatUnit(degraus, 0), "degraus");
  assert.equal(formatUnit("m", 1), "m");
  assert.equal(formatUnit("", 1), "");
  assert.equal(formatUnit(undefined, 1), "");
});

test("critério usa o singular quando o limite é 1", () => {
  assert.equal(formatExpected(">=", 1, degraus), "No mínimo 1 degrau (inclusive)");
  assert.equal(formatExpected("<=", 2, degraus), "No máximo 2 degraus (inclusive)");
});

test("critério mantém símbolos, booleanos e ausência de unidade", () => {
  assert.equal(formatExpected(">=", 1.2, "m"), "No mínimo 1.2 m (inclusive)");
  assert.equal(formatExpected("==", true, ""), "Igual a sim");
  assert.equal(formatExpected("<=", 3), "No máximo 3 (inclusive)");
});
