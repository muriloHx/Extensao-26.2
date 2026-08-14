import fs from 'node:fs/promises';
import path from 'node:path';
import yaml from 'js-yaml';

export async function loadRuleFile(filePath) {
  // Resolve o caminho relativo a partir do diretório atual de execução
  const absolutePath = path.resolve(process.cwd(), filePath);

  // Lê o conteúdo do arquivo YAML
  const fileContent = await fs.readFile(absolutePath, 'utf8');

  // Converte o YAML para um objeto JavaScript
  return yaml.load(fileContent);
}
