# Orientações para agentes

## Projeto

Aplicação web em Vue 3 e Vite para organizar avaliações de acessibilidade. A interface é em português. Os dados de projetos, ambientes, elementos, avaliações e regras personalizadas ficam no navegador, em IndexedDB; não há backend.

## Estrutura

- `src/pages/`: telas e fluxos da aplicação.
- `src/components/`: componentes compartilhados.
- `src/core/`: motor, operadores, validação e formatação de regras.
- `src/domain/`: entidades e modelos do domínio.
- `src/services/`: casos de uso e coordenação.
- `src/repositories/`: persistência local.
- `src/rules/nbr9050-2020/`: conjuntos de regras padrão em YAML.
- `src/tests/`: testes automatizados com `node:test`.
- `src/style/`: estilos globais compartilhados, por camada (`tokens.css`, `base.css`, `layout.css`, `components/`, `pages/`, `responsive.css`, `vendor/`), reunidos por `src/style/index.css`.

## Práticas de implementação

- Preserve os limites entre interface, domínio, serviços e persistência; coloque lógica de avaliação em `src/core/`, não em componentes Vue.
- Mantenha suporte aos conjuntos de regras personalizados em YAML/JSON e valide alterações no esquema com `src/core/ruleSetValidation.js` e `public/rule-engine-skill/SKILL.md`.
- Ao alterar a avaliação, considere os estados `conforme`, `nao_conforme`, `nao_avaliado`, `manual`, `atencao`, `invalido` e `erro`, além dos resumos que os agregam.
- Regras padrão devem continuar compatíveis com o formato consumido pelo `RuleEngine`.
- Reutilize componentes e utilitários existentes quando fizer sentido; mantenha a interface e as mensagens em português.
- Evite adicionar dependências sem necessidade.

## Interface e design

Consulte [`DESIGN.md`](./DESIGN.md) como referência visual atual do projeto. O design ainda está em evolução e será alterado; trate esse documento como referência vigente, não como decisão permanente. Mudanças futuras podem atualizar a interface e o próprio `DESIGN.md` em conjunto. Não force mudanças visuais a seguirem escolhas que estejam sendo revistas.

## Comandos

- `npm run dev`: iniciar o servidor de desenvolvimento.
- `npm test`: executar os testes (`node --test`).
- `npm run build`: gerar a versão de produção.

Execute verificações relevantes à alteração realizada e reporte o que foi executado.
