import { loadRuleFile } from "./services/ruleLoader.js";
import { evaluateChecklist } from "./services/evaluationService.js";

async function main() {
  const checklist = await loadRuleFile("src/rules/nbr9050-2020/portas.yaml");

  const dados = {
    largura_vao: 0.85,
    altura_vao: 2.10,
    tipo_macaneta: "alavanca",
    comprimento_macaneta: 100,
    afastamento_macaneta: 40,
    altura_macaneta: 0.95,
    desnivel_soleira: 4
  };

  const resultados = evaluateChecklist(checklist, dados);

  console.table(resultados);
}

main().catch(console.error);
