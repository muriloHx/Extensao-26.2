# Acessibilidade Checker

Protótipo de uma plataforma open source para verificação de requisitos de acessibilidade em ambientes e elementos arquitetônicos.

## Conceito

As regras normativas são mantidas em YAML e o `RuleEngine` interpreta essas regras para avaliar os dados fornecidos pelo usuário.

Fluxo:

Projeto → Ambiente → Checklist → Dados → RuleEngine → Resultados

Persistência e serviços (para a futura interface):

UI → Services (`ProjectService`, `EvaluationService`) → Repositories → IndexedDB

Conjuntos de regras personalizados seguem o mesmo formato de checklist dos YAMLs
(`id`, `nome`, `parametros` e `regras`). A futura UI pode passar o texto de um arquivo
YAML para `RuleSetService.importFromYaml()`: ele é validado e salvo no store `ruleSets`
do IndexedDB. `exportByIdToYaml()` produz esse mesmo formato portátil (há também as
variantes JSON). As regras oficiais continuam incorporadas ao bundle por
`import.meta.glob()`; ambas são passadas ao `RuleEngine` como checklist, sem origem
especial no motor.

As entidades em `src/domain/` são objetos puros e serializáveis: usam UUIDs e datas
em ISO 8601. Elas não dependem do navegador, do IndexedDB, da UI ou do motor de regras.
Os YAMLs de regras também são incorporados ao bundle de produção; não há backend para
carregá-los. A instalação PWA (manifest e service worker) fica para a etapa de UI.

## Estrutura

- `src/core/` — motor de regras
- `src/rules/` — critérios normativos em YAML
- `src/domain/` — entidades de projeto, ambiente, elemento e avaliação
- `src/services/` — casos de uso e coordenação
- `src/repositories/` — adaptadores de persistência IndexedDB
- `src/ui/` — interface futura
- `src/tests/` — testes

## Desenvolvimento

```bash
npm install
npm run dev
```

Testes:

```bash
npm test
```

## Escopo

O MVP não interpreta plantas baixas nem avalia automaticamente rotas acessíveis. A primeira versão é focada em verificações objetivas de portas, rampas, pisos/desníveis, escadas e sanitários acessíveis.

## Observação

Os critérios normativos deste protótipo devem ser conferidos diretamente na edição oficial da ABNT NBR 9050 antes de serem utilizados como implementação normativa definitiva.
