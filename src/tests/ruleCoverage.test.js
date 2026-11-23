import assert from "node:assert/strict";
import test from "node:test";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import yaml from "js-yaml";
import { evaluateChecklist } from "../services/evaluationService.js";

const DIR = path.join(
  path.dirname(fileURLToPath(import.meta.url)),
  "..",
  "rules",
  "nbr9050-2020"
);

const VALORES_NUMERICOS = [0, 0.5, 1, 2, 3, 4, 5, 6, 8, 10, 15, 20, 30, 50, 100];

function valoresPorTipo(parameter) {
  if (parameter.tipo === "boolean") return [true, false];
  if (parameter.tipo === "select") return parameter.opcoes ?? [];
  return VALORES_NUMERICOS;
}

function dadosBase(checklist) {
  const data = {};
  for (const [key, parameter] of Object.entries(checklist.parametros ?? {})) {
    data[key] = valoresPorTipo(parameter)[0];
  }
  return data;
}

function arquivos() {
  return fs.readdirSync(DIR).filter((name) => name.endsWith(".yaml"));
}

// Uma regra condicional que não chega a um veredito é defeito do conjunto:
// sem valor informado ela fica pendente; com valor que nenhuma condição cobre,
// o motor devolve erro. Nenhum dos dois é veredito.
test("toda regra chega a um veredito com os campos preenchidos", () => {
  const pendencias = new Set();

  for (const file of arquivos()) {
    const checklist = yaml.load(fs.readFileSync(path.join(DIR, file), "utf8"));
    const combinacoes = [dadosBase(checklist)];

    for (const [key, parameter] of Object.entries(checklist.parametros ?? {})) {
      for (const valor of valoresPorTipo(parameter)) {
        combinacoes.push({ ...dadosBase(checklist), [key]: valor });
      }
    }

    for (const data of combinacoes) {
      for (const item of evaluateChecklist(checklist, data)) {
        if (item.status === "nao_avaliado" || item.status === "erro") {
          pendencias.add(`${file.replace(".yaml", "")} › ${item.id} (${item.status})`);
        }
      }
    }
  }

  assert.deepEqual([...pendencias], [], `regras sem veredito: ${[...pendencias].join(", ")}`);
});

const areaDescanso = () => yaml.load(fs.readFileSync(path.join(DIR, "area_descanso.yaml"), "utf8"));

test("área de descanso dá veredito em toda faixa de inclinação", () => {
  const checklist = areaDescanso();
  const dados = (inclinacao, distancia = 40) => ({
    inclinacao_piso: inclinacao,
    distancia_entre_areas: distancia,
    fora_faixa_circulacao: true,
    permite_manobra_cadeira: true,
    banco_com_encosto_bracos: true
  });
  const regra = (inclinacao, distancia) =>
    evaluateChecklist(checklist, dados(inclinacao, distancia)).find((item) => item.id === "distancia_recomendada");

  assert.equal(regra(2, 40).status, "conforme");
  assert.equal(regra(2, 60).status, "nao_conforme");
  assert.equal(regra(4, 40).status, "nao_conforme");
  assert.equal(regra(4, 20).status, "conforme");

  // Acima de 5 % a NBR trata o percurso como rampa: o critério deste checklist
  // não se aplica, mas a regra não pode ficar muda.
  for (const inclinacao of [5.5, 6, 8.33, 10]) {
    const item = regra(inclinacao, 40);
    assert.equal(item.status, "atencao", `inclinação ${inclinacao} deveria pedir verificação`);
    assert.match(item.mensagem, /rampa/i);
  }
});

const regraNova = (arquivo) => yaml.load(fs.readFileSync(path.join(DIR, arquivo), "utf8"));

test("controle de acesso exige vão maior quando o obstáculo passa de 0,40 m", () => {
  const checklist = regraNova("controle_acesso.yaml");
  const dados = (vao, obstaculo) => ({
    tipo_controle: "catraca",
    vao_livre: vao,
    extensao_obstaculo: obstaculo,
    localizado_em_rota_acessivel: true,
    giro_180: true,
    sinalizacao: true,
  });
  const regra = (vao, obstaculo) =>
    evaluateChecklist(checklist, dados(vao, obstaculo)).find((item) => item.id === "transposicao_obstaculo");

  assert.equal(regra(0.8, 0.4).status, "conforme");
  assert.equal(regra(0.8, 0.5).status, "nao_conforme");
  assert.equal(regra(0.9, 0.5).status, "conforme");
});

test("plataforma vertical só aceita percurso aberto até 2 m", () => {
  const checklist = regraNova("plataforma_elevacao_vertical.yaml");
  const dados = (tipo, desnivel) => ({
    tipo_percurso: tipo,
    desnivel_percurso: desnivel,
    fechamento_continuo: true,
    altura_fechamento: 1.1,
    comunicacao_auxilio: true,
    atende_iso_9386_1: true,
  });
  const regra = (tipo, desnivel) =>
    evaluateChecklist(checklist, dados(tipo, desnivel)).find((item) => item.id === "percurso_conforme");

  assert.equal(regra("aberto", 2).status, "conforme");
  assert.equal(regra("aberto", 2.1).status, "nao_conforme");
  assert.equal(regra("fechado", 3).status, "conforme");
});
