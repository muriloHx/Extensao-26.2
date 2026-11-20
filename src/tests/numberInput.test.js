import assert from "node:assert/strict";
import test from "node:test";
import { caretAfterSanitize, parseDecimalInput, sanitizeDecimalInput } from "../core/numberInput.js";

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

test("caretAfterSanitize mantém o cursor no lugar quando uma letra é descartada", () => {
  // "1a2" + cursor depois do "a": o cursor fica depois do 1 em "12".
  assert.equal(caretAfterSanitize("1a2", "12", 2), 1);
  // Letra digitada no fim: o cursor continua no fim.
  assert.equal(caretAfterSanitize("0,9x", "0,9", 4), 3);
  // Nada sobrou: cursor no início.
  assert.equal(caretAfterSanitize("abc", "", 3), 0);
});

test("caretAfterSanitize não passa do fim do texto limpo", () => {
  assert.equal(caretAfterSanitize("0,9", "0,9", 99), 3);
  assert.equal(caretAfterSanitize("12", "12", 0), 0);
});
