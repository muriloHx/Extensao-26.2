import assert from "node:assert/strict";
import test from "node:test";
import { STATUS_LABELS, statusBucket, statusLabel } from "../core/evaluationStatus.js";
import { evaluateChecklist, getEvaluationStatus } from "../services/evaluationService.js";

test("o rótulo do badge e a contagem usam a mesma classificação", () => {
  for (const status of Object.keys(STATUS_LABELS)) {
    const label = statusLabel(status);
    const bucket = statusBucket(status);
    const esperado = label === "Não conforme"
      ? "nao_conforme"
      : label === "Conforme"
        ? "conforme"
        : "pendente";

    assert.equal(
      bucket,
      esperado,
      `${status} aparece como "${label}" mas é contado como "${bucket}"`
    );
  }
});

test("status desconhecido cai no mesmo balde do rótulo padrão", () => {
  assert.equal(statusLabel("status-que-nao-existe"), "Pendente");
  assert.equal(statusBucket("status-que-nao-existe"), "pendente");
});

const checklist = {
  parametros: {
    largura: { tipo: "number", unidade: "m", obrigatorio: true },
    possui_corrimao: { tipo: "boolean", obrigatorio: true }
  },
  regras: [
    { id: "r1", nome: "Largura mínima", parametro: "largura", operador: ">=", valor: 1.2 },
    { id: "r2", nome: "Corrimão", tipo: "checklist", parametro: "possui_corrimao" }
  ]
};

test("avaliação em branco fica pendente, não não conforme", () => {
  const result = evaluateChecklist(checklist, {});

  assert.deepEqual(result.map((item) => item.status), ["invalido", "invalido"]);
  assert.deepEqual(result.map((item) => statusLabel(item.status)), ["Pendente", "Pendente"]);
  assert.equal(getEvaluationStatus([{ result }]), "nao_avaliado");
});

test("valor medido e reprovado continua não conforme", () => {
  const result = evaluateChecklist(checklist, { largura: 1, possui_corrimao: false });

  assert.deepEqual(result.map((item) => item.status), ["nao_conforme", "nao_conforme"]);
  assert.equal(getEvaluationStatus([{ result }]), "nao_conforme");
});

test("pendência junto com reprovação mantém o elemento não conforme", () => {
  const result = evaluateChecklist(checklist, { largura: 1 });

  assert.deepEqual(result.map((item) => item.status), ["nao_conforme", "invalido"]);
  assert.equal(getEvaluationStatus([{ result }]), "nao_conforme");
});
