import assert from "node:assert/strict";
import test from "node:test";
import { STATUS_LABELS, statusBucket, statusLabel, summarizeResult } from "../core/evaluationStatus.js";
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

test("cada tipo de pendência tem rótulo próprio", () => {
  assert.notEqual(statusLabel("erro"), statusLabel("nao_avaliado"));
  assert.notEqual(statusLabel("invalido"), statusLabel("nao_avaliado"));
  assert.notEqual(statusLabel("erro"), statusLabel("invalido"));
});

test("summarizeResult conta os totais e abre as pendências", () => {
  const counts = summarizeResult([
    { status: "conforme" },
    { status: "nao_conforme" },
    { status: "invalido" },
    { status: "nao_avaliado" },
    { status: "manual" },
    { status: "atencao" },
    { status: "erro" }
  ]);

  assert.equal(counts.conforme, 1);
  assert.equal(counts.nao_conforme, 1);
  assert.equal(counts.pendente, 5);
  assert.deepEqual(counts.pendingBreakdown, [
    { id: "preencher", label: "aguardando medição", count: 2 },
    { id: "verificar", label: "para verificar", count: 2 },
    { id: "erro", label: "com erro no conjunto", count: 1 }
  ]);
});

test("a abertura das pendências sempre fecha com o total", () => {
  const counts = summarizeResult([
    { status: "invalido" },
    { status: "status-desconhecido" }
  ]);

  assert.equal(counts.pendente, 2);
  assert.equal(
    counts.pendingBreakdown.reduce((total, group) => total + group.count, 0),
    counts.pendente
  );
  assert.deepEqual(
    counts.pendingBreakdown.map((group) => group.id),
    ["preencher", "outros"]
  );
});

test("resultado vazio não gera contagem", () => {
  assert.deepEqual(summarizeResult([]), {
    conforme: 0,
    nao_conforme: 0,
    pendente: 0,
    pendingBreakdown: []
  });
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
  for (const item of result) {
    assert.equal(statusBucket(item.status), "pendente");
    assert.equal(statusLabel(item.status), statusLabel("invalido"));
  }
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
