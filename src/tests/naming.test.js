import assert from "node:assert/strict";
import test from "node:test";
import { isNameTaken, normalizeName } from "../domain/naming.js";

const itens = [
  { id: "a", name: "Porta principal" },
  { id: "b", name: "Janela" }
];

test("normalizeName ignora espaços nas pontas, espaços repetidos e caixa", () => {
  assert.equal(normalizeName("  Porta   principal "), "porta principal");
  assert.equal(normalizeName("JANELA"), "janela");
  assert.equal(normalizeName(undefined), "");
});

test("reconhece nome repetido mesmo escrito diferente", () => {
  assert.equal(isNameTaken(itens, "Porta principal"), true);
  assert.equal(isNameTaken(itens, "porta principal"), true);
  assert.equal(isNameTaken(itens, "  PORTA   PRINCIPAL  "), true);
});

test("nome livre não é conflito", () => {
  assert.equal(isNameTaken(itens, "Rampa"), false);
});

test("o próprio item não conta como conflito", () => {
  assert.equal(isNameTaken(itens, "Porta principal", { exceptId: "a" }), false);
  assert.equal(isNameTaken(itens, "Porta principal", { exceptId: "b" }), true);
});

test("nome vazio nunca é conflito", () => {
  assert.equal(isNameTaken(itens, ""), false);
  assert.equal(isNameTaken(itens, "   "), false);
  assert.equal(isNameTaken(itens, undefined), false);
});

test("lista ausente não quebra a checagem", () => {
  assert.equal(isNameTaken(undefined, "Porta"), false);
  assert.equal(isNameTaken([], "Porta"), false);
});
