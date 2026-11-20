import assert from "node:assert/strict";
import test from "node:test";
import { namesInUse, uniqueName } from "../domain/elementName.js";

test("nome livre é usado como está", () => {
  assert.equal(uniqueName("Porta principal", ["Janela"]), "Porta principal");
});

test("nome já usado ganha sufixo numérico", () => {
  assert.equal(uniqueName("Porta principal", ["Porta principal"]), "Porta principal (1)");
});

test("sufixos já ocupados são pulados", () => {
  assert.equal(
    uniqueName("Porta principal", ["Porta principal", "Porta principal (1)", "Porta principal (2)"]),
    "Porta principal (3)"
  );
});

test("sem nome base não há nome a gerar", () => {
  assert.equal(uniqueName("", ["Porta principal"]), "");
  assert.equal(uniqueName(undefined), "");
});

test("ao editar, o próprio elemento não conta como conflito", () => {
  const elementos = [
    { id: "a", name: "Porta principal" },
    { id: "b", name: "Janela" }
  ];

  assert.deepEqual(namesInUse(elementos, { exceptId: "a" }), ["Janela"]);
  assert.equal(uniqueName("Porta principal", namesInUse(elementos, { exceptId: "a" })), "Porta principal");
});

test("ao criar, todos os nomes do ambiente contam", () => {
  const elementos = [
    { id: "a", name: "Porta principal" },
    { id: "b", name: "Porta principal (1)" }
  ];

  assert.deepEqual(namesInUse(elementos), ["Porta principal", "Porta principal (1)"]);
  assert.equal(uniqueName("Porta principal", namesInUse(elementos)), "Porta principal (2)");
});
