import { ElementRepository } from "../repositories/elementRepository.js";
import { EnvironmentRepository } from "../repositories/environmentRepository.js";
import { EvaluationRepository } from "../repositories/evaluationRepository.js";
import { openDatabase } from "../repositories/indexedDb.js";
import { ProjectRepository } from "../repositories/projectRepository.js";
import { RuleSetRepository } from "../repositories/ruleSetRepository.js";
import { EvaluationService } from "./evaluationService.js";
import { ProjectService } from "./projectService.js";
import { QuickEvaluationService } from "./quickEvaluationService.js";
import { RuleSetService } from "./ruleSetService.js";

// Ponto de composição para a futura UI. Nenhuma entidade de domínio depende dele.
export async function createApplicationServices({ indexedDB } = {}) {
  const database = await openDatabase(indexedDB);
  const repositories = {
    projectRepository: new ProjectRepository(database),
    environmentRepository: new EnvironmentRepository(database),
    elementRepository: new ElementRepository(database),
    evaluationRepository: new EvaluationRepository(database),
    ruleSetRepository: new RuleSetRepository(database)
  };

  const evaluationService = new EvaluationService(repositories);

  return {
    projectService: new ProjectService(repositories),
    evaluationService,
    quickEvaluationService: new QuickEvaluationService({ evaluationService }),
    ruleSetService: new RuleSetService(repositories),
    // A interface também usa os repositórios para operações de remoção que não
    // pertencem aos casos de uso de criação e avaliação.
    repositories,
    close: () => database.close()
  };
}
