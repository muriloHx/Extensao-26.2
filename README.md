# Acessibilidade Checker

Protótipo de uma plataforma open source para verificação de requisitos de acessibilidade em ambientes e elementos arquitetônicos.

## Conceito

As regras normativas são mantidas em YAML e o `RuleEngine` interpreta essas regras para avaliar os dados fornecidos pelo usuário.

Fluxo:

Projeto → Ambiente → Checklist → Dados → RuleEngine → Resultados

## Estrutura

- `src/core/` — motor de regras
- `src/rules/` — critérios normativos em YAML
- `src/services/` — carregamento e coordenação
- `src/storage/` — persistência futura
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
