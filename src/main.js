import { loadRuleFile } from "./services/ruleLoader.js";
import { evaluateChecklist } from "./services/evaluationService.js";

async function main() {


  const checklist_sanitario = await loadRuleFile("rules/nbr9050-2020/sanitario_acessivel.yaml")
  const dados = {
    diametro_giro: 1.3,
    vao_livre_porta_sanitario: 2,
    comprimento_puxador_sanitario: 1,
    altura_assento_bacia: 2.1,
    eixo_bacia_parede: 1.2,
    altura_lavatorio_borda: 2,
    altura_livre_sob_lavatorio: 2.5,
  }
  const resultados = evaluateChecklist(checklist_sanitario, dados);

  console.table(resultados);
}

main().catch(console.error);
