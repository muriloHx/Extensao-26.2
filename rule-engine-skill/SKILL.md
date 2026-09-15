---
name: acessibilidade-rule-sets
description: Crie conjuntos de regras YAML ou JSON para o verificador de acessibilidade, respeitando o formato e os comportamentos do motor de regras.
---

# Conjuntos de regras de acessibilidade

Use este skill quando a pessoa quiser criar, converter ou revisar um checklist
importável no aplicativo. Produza apenas critérios que a pessoa forneceu ou
confirmou; não invente valores normativos. Preserve a referência da fonte em
cada regra, quando disponível.

## Formato do arquivo

Cada arquivo é um checklist independente. Os campos obrigatórios são `id`,
`nome`, `parametros` (objeto) e `regras` (lista). YAML e JSON são aceitos.
Os identificadores de `parametro` usados pelas regras devem existir em
`parametros`.

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
  possui_area_livre:
    label: Possui área livre
    tipo: boolean
regras:
  - id: altura_maxima
    nome: Altura máxima da bica
    parametro: altura_bica
    operador: "<="
    valor: 0.90
    referencia: "Norma interna — item 4.2"
```

Parâmetros usados pela interface podem ter `tipo: number`, `boolean` ou
`select`. Em `select`, informe `opcoes` como uma lista. `label`, `unidade`,
`obrigatorio`, `opcoes`, `norma` e `referencia` são metadados opcionais, mas
`obrigatorio: true` faz o motor retornar `invalido` quando o valor não foi
preenchido. Valores ausentes em campos não obrigatórios ficam como
`nao_avaliado`.

## Tipos de regra

Uma regra sem `tipo` é uma comparação direta. Use somente `>=`, `<=`, `>`,
`<`, `==` ou `!=`; o valor deve ter o mesmo tipo do dado avaliado. O resultado
é `conforme` ou `nao_conforme`.

```yaml
- id: largura_minima
  nome: Largura mínima
  parametro: largura
  operador: ">="
  valor: 0.80
```

Para uma verificação que exige julgamento humano, use `tipo: checklist`. Ela
retorna `manual` com o valor informado, sem comparar `operador` ou `valor`.

```yaml
- id: rota_livre
  nome: Rota livre de obstáculos
  tipo: checklist
  parametro: possui_rota_livre
```

Para faixas ou exceções, use `tipo: conditional`. As condições são avaliadas
na ordem; a primeira cujo `quando` for verdadeiro encerra a avaliação. Cada
condição precisa ter `quando` e exatamente um de `resultado` ou `verificar`.
`resultado` pode ser, por exemplo, `conforme` ou `atencao`. `verificar`
compara outro parâmetro e retorna `conforme` ou `nao_conforme`.

```yaml
- id: tratamento_desnivel
  nome: Tratamento do desnível
  tipo: conditional
  parametro: desnivel
  condicoes:
    - quando: { operador: "<=", valor: 5 }
      resultado: conforme
      mensagem: Sem tratamento adicional.
    - quando: { operador: "<=", valor: 15 }
      verificar:
        parametro: possui_chanfro
        operador: "=="
        valor: true
    - quando: { operador: ">", valor: 15 }
      resultado: atencao
      mensagem: Avaliar como rampa.
  referencia: "Fonte — item 3"
```

Se nenhuma condição for atendida, o resultado é `nao_avaliado`. Declare o
parâmetro de `verificar` em `parametros` e peça seu valor: o motor não aplica
automaticamente a validação de obrigatoriedade a esse segundo parâmetro.

## Como o aplicativo usa o arquivo

Na importação, o aplicativo lê YAML/JSON, valida a estrutura e salva uma cópia
somente no navegador. Arquivos em uma mesma pasta aparecem agrupados na
biblioteca. Ao avaliar um elemento, os parâmetros geram os campos do formulário
e cada regra é executada com os valores preenchidos. Conjuntos personalizados e
regras padrão usam exatamente o mesmo motor; não inclua campos de persistência
como `source`, `createdAt` ou `updatedAt` no arquivo portátil.

Antes de entregar o arquivo, confirme ids únicos e claros, parâmetros existentes,
unidades coerentes e a ordem das condições. Quando faltar uma fonte ou um valor
de critério, pergunte em vez de supor.
