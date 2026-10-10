# Acesso Verificador

Aplicação web para organizar e apoiar avaliações de acessibilidade em ambientes e elementos arquitetônicos. O projeto permite registrar locais, preencher checklists e acompanhar resultados com base em conjuntos de regras configuráveis.

> **Importante:** os resultados são uma ferramenta de apoio e não substituem uma avaliação profissional. Confira os critérios na edição oficial da ABNT NBR 9050 e nas demais normas aplicáveis antes de tomar decisões ou declarar conformidade.

## Funcionalidades

- Organização das avaliações em projetos, ambientes e elementos.
- Avaliação completa dentro de um projeto ou avaliação rápida de um elemento.
- Checklists padrão baseados na ABNT NBR 9050:2020, agrupados por assunto.
- Importação e exportação de conjuntos personalizados em YAML e JSON.
- Resumo dos resultados por projeto e ambiente.
- Persistência local no navegador, sem necessidade de uma conta ou backend.

## Começando

### Requisitos

- Node.js e npm instalados.

### Instalação e execução

```bash
npm install
npm run dev
```

O Vite exibirá o endereço local para abrir a aplicação no navegador.

### Outros comandos

```bash
npm test       # executa os testes
npm run build  # gera a versão de produção em dist/
npm run preview # serve localmente a versão de produção
```

## Como usar

1. Crie um projeto para o local ou obra que deseja avaliar.
2. Adicione ambientes, como entrada, circulação ou sanitário.
3. Cadastre os elementos que serão avaliados, como portas, rampas, pisos e equipamentos.
4. Selecione os checklists pertinentes, preencha os dados solicitados e consulte os resultados.
5. Acompanhe o resumo no projeto ou no ambiente.

Para uma verificação pontual, use **Avaliação rápida**. Na área **Regras**, consulte os conjuntos disponíveis ou importe arquivos YAML/JSON próprios. Os arquivos importados ficam associados ao navegador em uso.

## Conjuntos de regras personalizados

Cada arquivo representa um checklist independente. YAML e JSON são aceitos; os campos principais são `id`, `nome`, `parametros` e `regras`.

```yaml
id: bebedouros
nome: Bebedouros
norma:
  nome: Norma interna
  versao: "1"
parametros:
  altura_bica:
    label: Altura da bica
    tipo: number
    unidade: m
    obrigatorio: true
regras:
  - id: altura_maxima
    nome: Altura máxima da bica
    parametro: altura_bica
    operador: "<="
    valor: 0.90
```

Parâmetros podem ser do tipo `number`, `boolean` ou `select`. Regras podem usar comparações (`>=`, `<=`, `>`, `<`, `==`, `!=`), verificações manuais (`tipo: checklist`) ou condições (`tipo: conditional`). A tela **Regras → Como criar regras** documenta o formato completo e os resultados possíveis.

## Dados e privacidade

Projetos, ambientes, elementos, avaliações e regras importadas são armazenados localmente no navegador, usando IndexedDB. Não há serviço de backend configurado para sincronizar esses dados. Limpar os dados do site ou trocar de navegador/dispositivo pode removê-los ou torná-los indisponíveis; exporte conjuntos personalizados para mantê-los fora do navegador.

Os conjuntos padrão são incluídos no bundle da aplicação e não precisam ser importados.

## Estrutura do projeto

```text
src/
├── core/          # motor e validação de regras
├── domain/        # entidades e modelos do domínio
├── pages/         # telas da aplicação
├── repositories/  # persistência local em IndexedDB
├── rules/         # conjuntos padrão em YAML
├── services/      # casos de uso e coordenação
├── tests/         # testes automatizados
└── components/    # componentes compartilhados da interface
```

## Escopo e limitações

O aplicativo avalia os dados informados nos checklists. Não interpreta plantas baixas, não inspeciona ambientes automaticamente e não substitui medições, análise técnica ou responsabilidade profissional. A cobertura depende dos conjuntos de regras selecionados e dos dados preenchidos.

## Tecnologias

- Vue 3
- Vite
- JavaScript (ES modules)
- IndexedDB para persistência local
- YAML para os conjuntos de regras padrão

