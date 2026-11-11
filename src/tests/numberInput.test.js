import assert from "node:assert/strict";
import test from "node:test";
import { parseDecimalInput, sanitizeDecimalInput } from "../core/numberInput.js";

test("sanitizeDecimalInput descarta letras, sinais e espaços", () => {
  assert.equal(sanitizeDecimalInput("12a"), "12");
  assert.equal(sanitizeDecimalInput("-1e5"), "15");
  assert.equal(sanitizeDecimalInput("R$ 80"), "80");
  assert.equal(sanitizeDecimalInput("abc"), "");
  assert.equal(sanitizeDecimalInput(""), "");
});

test("sanitizeDecimalInput mantém só o primeiro separador decimal", () => {
  assert.equal(sanitizeDecimalInput("1,5"), "1,5");
  assert.equal(sanitizeDecimalInput("1.5"), "1.5");
  assert.equal(sanitizeDecimalInput("1.2,3"), "1.23");
  assert.equal(sanitizeDecimalInput(",5"), "0,5");
});

test("parseDecimalInput aceita vírgula ou ponto e rejeita texto", () => {
  assert.equal(parseDecimalInput("1,5"), 1.5);
  assert.equal(parseDecimalInput("1.5"), 1.5);
  assert.equal(parseDecimalInput("80"), 80);
  assert.equal(parseDecimalInput("0."), 0);
  assert.equal(parseDecimalInput(""), null);
  assert.equal(parseDecimalInput("."), null);
  assert.equal(parseDecimalInput("abc"), null);
  assert.equal(parseDecimalInput("1.2.3"), null);
});
