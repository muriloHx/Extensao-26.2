import assert from "node:assert/strict";
import test from "node:test";
import { normalizeAnswers } from "../domain/answers.js";

const checklist = {
  id: "checklist",
  nome: "Checklist",
  parametros: {
    altura: { tipo: "number", unidade: "m", obrigatorio: true },
    possui_rota: { tipo: "boolean" },
    piso: { tipo: "select", opcoes: ["liso", "irregular"] }
  },
  regras: []
};

test("número digitado com vírgula vira número", () => {
  const answers = normalizeAnswers(checklist, { altura: "0,9", piso: "liso" });

  assert.deepEqual(answers, { altura: 0.9, piso: "liso" });
});

test("campo vazio não entra: quem decide pendente ou inválido é o motor", () => {
  const answers = normalizeAnswers(checklist, { altura: "", piso: "", possui_rota: null });

  assert.deepEqual(answers, {});
});

test("número ilegível é descartado em vez de virar NaN", () => {
  assert.deepEqual(normalizeAnswers(checklist, { altura: "abc" }), {});
});

test("zero é resposta, não ausência", () => {
  assert.deepEqual(normalizeAnswers(checklist, { altura: "0" }), { altura: 0 });
});

test("booleano aceita valor da tela e o que volta do armazenamento", () => {
  assert.deepEqual(normalizeAnswers(checklist, { possui_rota: true }), { possui_rota: true });
  assert.deepEqual(normalizeAnswers(checklist, { possui_rota: "true" }), { possui_rota: true });
});

test("responder \"não\" preserva o false", () => {
  assert.deepEqual(normalizeAnswers(checklist, { possui_rota: false }), { possui_rota: false });
  assert.deepEqual(normalizeAnswers(checklist, { possui_rota: "false" }), { possui_rota: false });
});

test("resposta de campo que não pertence ao checklist é descartada", () => {
  const answers = normalizeAnswers(checklist, { piso: "liso", sobra_de_outro: "x" });

  assert.deepEqual(answers, { piso: "liso" });
});

test("checklist ausente devolve objeto vazio", () => {
  assert.deepEqual(normalizeAnswers(undefined, { altura: "1" }), {});
  assert.deepEqual(normalizeAnswers(undefined), {});
});
