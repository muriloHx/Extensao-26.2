import assert from "node:assert/strict";
import test from "node:test";
import { RuleEngine } from "../core/RuleEngine.js";
import { validateRuleSet } from "../core/ruleSetValidation.js";
import { RuleSetService } from "../services/ruleSetService.js";

function customRuleSet() {
  return {
    id: "portas-personalizadas",
    nome: "Portas personalizadas",
    parametros: {
      largura: { tipo: "number", unidade: "m", obrigatorio: true }
    },
    regras: [{
      id: "largura-minima",
      nome: "Largura mínima",
      parametro: "largura",
      operador: ">=",
      valor: 0.9,
      referencia: "Regra interna"
    }]
  };
}

function repository() {
  const records = new Map();
  return {
    async get(id) { return records.get(id); },
    async getAll() { return [...records.values()]; },
    async put(value) { records.set(value.id, value); return value; },
    async delete(id) { records.delete(id); }
  };
}

test("RuleSetService valida, persiste localmente e exporta o formato do RuleEngine", async () => {
  const store = repository();
  const service = new RuleSetService({ ruleSetRepository: store });
  const saved = await service.save(customRuleSet());

  assert.equal(saved.source, "user");
  assert.match(saved.createdAt, /^\d{4}-\d{2}-\d{2}T/);

  const exported = await service.exportByIdToJson(saved.id);
  assert.deepEqual(JSON.parse(exported), customRuleSet());

  const result = new RuleEngine().evaluate(saved.regras, { largura: 0.9 }, saved.parametros);
  assert.equal(result[0].status, "conforme");
});

test("um arquivo inválido não é persistido", async () => {
  const store = repository();
  const service = new RuleSetService({ ruleSetRepository: store });
  const invalid = customRuleSet();
  invalid.regras[0].parametro = "ausente";

  assert.equal(validateRuleSet(invalid).valid, false);
  await assert.rejects(service.importFromJson(JSON.stringify(invalid)), /Conjunto de regras inválido/);
  assert.equal((await service.list()).length, 0);
});

test("um conjunto exportado pode ser importado em outro repositório", async () => {
  const source = new RuleSetService({ ruleSetRepository: repository() });
  await source.save(customRuleSet());
  const fileContent = await source.exportByIdToJson("portas-personalizadas");

  const target = new RuleSetService({ ruleSetRepository: repository() });
  const imported = await target.importFromJson(fileContent);

  assert.equal(imported.id, "portas-personalizadas");
  assert.equal(imported.regras[0].valor, 0.9);
});

test("o intercâmbio em YAML preserva o formato dos conjuntos oficiais", async () => {
  const source = new RuleSetService({ ruleSetRepository: repository() });
  await source.save(customRuleSet());
  const fileContent = await source.exportByIdToYaml("portas-personalizadas");

  const target = new RuleSetService({ ruleSetRepository: repository() });
  const imported = await target.importFromYaml(fileContent);

  assert.deepEqual(imported.regras, customRuleSet().regras);
});
