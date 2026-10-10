---
name: acesso-verificador-rule-engine
description: Use ao criar, converter, revisar ou corrigir arquivos YAML ou JSON de regras para o aplicativo Acesso Verificador deste projeto. Gera checklists importáveis, compatíveis com o motor de regras, incluindo comparações, checklists manuais e condições.
---

# Regras para o Acesso Verificador

Use este skill para escrever regras do aplicativo **Acesso Verificador** deste
projeto. O resultado deve ser um checklist portátil em YAML ou JSON, pronto
para importar em **Conjuntos de regras**. Cada arquivo representa um
checklist avaliável; não produza código JavaScript, nem campos de banco de
dados ou de interface que não estejam documentados aqui.

## Contexto de Negócio e Domínio

O Acesso Verificador é uma aplicação voltada para a verificação técnica de requisitos de acessibilidade arquitetônica com base em normas como a ABNT NBR 9050.

A estrutura do sistema é organizada em três níveis hierárquicos:
Projeto -> Ambiente -> Elemento / Checklist

* Cada arquivo YAML ou JSON representa um Elemento Arquitetônico individual (por exemplo: portas, rampas, sanitários acessíveis).

* Objetivo do arquivo: Definir os parâmetros de entrada (medidas, dimensões e presença de recursos) que o usuário preencherá ao avaliar aquele elemento específico em um determinado ambiente, juntamente com as regras normativas para testar esses dados.

* Escopo: O foco é a avaliação técnica, individual e objetiva de cada elemento. Não crie regras baseadas em leitura de plantas baixas ou análises de rotas de circulação entre ambientes.

## Como responder

1. Confirme a fonte, versão e os valores normativos antes de criar regras.
   Não invente limites, exceções ou referências técnicas.
2. Quando faltarem dados que mudam a regra, pergunte. Se o usuário apenas
   pediu uma estrutura, use marcadores explícitos como `TODO` em vez de
   presumir um valor.
3. Entregue um arquivo completo e válido, em um único bloco `yaml` (ou
   `json`, se solicitado). Mantenha ids estáveis, em minúsculas, com
   algarismos e `_` ou `-`; embora o motor aceite outros textos não vazios,
   esse padrão evita colisões e facilita manutenção.
4. Use números YAML/JSON sem aspas para medidas (`0.8`, não `"0.8"`),
   booleanos reais (`true`/`false`, não `"true"`/`"false"`) e a mesma unidade
   no valor informado e no limite da regra.
5. Antes de entregar, confira a lista de validação ao fim deste documento.

## Modelo mínimo

Os únicos campos exigidos na importação são `id`, `nome`, `parametros` e
`regras`. `parametros` deve ser um objeto e `regras`, uma lista. Toda regra
deve apontar para uma chave existente em `parametros`.

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
    referencia: "Norma interna — item 4.2"
```

## Esquema completo aceito

O importador preserva campos desconhecidos, mas eles não têm efeito no motor
ou na tela. Use somente os campos abaixo para comportamento suportado.

### Checklist (raiz do arquivo)

| Campo | Tipo | Obrigatório | Uso |
| --- | --- | --- | --- |
| `id` | texto não vazio | Sim | Identificador único do checklist. Também é usado para selecioná-lo e persistir a importação. |
| `nome` | texto não vazio | Sim | Nome exibido para o tipo de elemento. |
| `norma` | objeto | Não | Metadado mostrado e usado como filtro na interface. |
| `norma.nome` | texto | Não | Nome da norma ou fonte. |
| `norma.versao` | texto ou valor exibível | Não | Versão/edição da norma. Recomenda-se texto, por exemplo `"2020"`. |
| `parametros` | objeto | Sim | Mapa `{ id_do_parametro: definicao }` que gera os campos de entrada. |
| `regras` | lista | Sim | Regras avaliadas na ordem da lista. |
| `grupo` | objeto | Não, normalmente adicionado pela importação pela interface | Metadado de agrupamento: `grupo.id` e `grupo.nome`. Não é necessário em arquivos portáteis individuais. |

Não inclua `source`, `createdAt` nem `updatedAt`: eles são atributos locais de
persistência e são removidos na exportação.

### Definição de parâmetro (`parametros.<id>`)

| Campo | Tipo | Obrigatório | Uso e comportamento |
| --- | --- | --- | --- |
| `label` | texto | Não | Rótulo do campo; na ausência, a interface mostra o id do parâmetro. |
| `tipo` | `number`, `boolean` ou `select` | Recomendado | Define o controle da interface e a validação de tipo. Use sempre um dos três valores. |
| `unidade` | texto | Não | Sufixo exibido para números, como `m`, `mm` ou `%`. Não converte unidades. |
| `obrigatorio` | booleano | Não | Com `true`, valor ausente (`undefined`, `null` ou vazio) resulta em `invalido`; sem ele, resulta em `nao_avaliado`. |
| `opcoes` | lista | Para `tipo: select` | Valores oferecidos no seletor. Use o mesmo tipo/valor em regras `==` ou `!=`; para a interface atual, prefira textos. |

Comportamento por tipo:

- `number`: a interface converte a entrada para número e o motor rejeita valor
  que não seja numérico.
- `boolean`: a interface oferece `Sim` (`true`) e `Não` (`false`); o motor
  rejeita valor que não seja booleano.
- `select`: a interface oferece `opcoes`; o motor aceita qualquer valor não
  vazio e **não** verifica se ele pertence à lista. Portanto, declare opções
  e comparações de forma consistente.

Não use tipo ausente ou desconhecido: a tela o trata como campo numérico, mas
o motor não aplica validação de tipo. Isso torna o arquivo ambíguo.

### Regra comum a todos os tipos

| Campo | Tipo | Obrigatório | Uso |
| --- | --- | --- | --- |
| `id` | texto não vazio | Sim | Identificador da regra. Mantenha-o único dentro do checklist. |
| `nome` | texto não vazio | Sim | Nome exibido no resultado. |
| `parametro` | texto | Sim | Chave existente em `parametros`; é o dado que inicia a avaliação. |
| `tipo` | ausente, `checklist` ou `conditional` | Não | Ausente significa comparação direta. |
| `referencia` | texto | Não | Fonte exibida em todos os resultados desta regra. Declare aqui, no nível da regra. |

### Comparação direta (`tipo` ausente)

Além dos campos comuns, exige:

| Campo | Tipo | Obrigatório | Uso |
| --- | --- | --- | --- |
| `operador` | veja operadores | Sim | Operação aplicada entre o valor informado e `valor`. |
| `valor` | qualquer valor YAML/JSON | Sim | Limite ou valor esperado, no tipo compatível com o parâmetro. |

Retorna `conforme` ou `nao_conforme`. Exemplo:

```yaml
- id: largura_minima
  nome: Largura mínima
  parametro: largura
  operador: ">="
  valor: 0.80
  referencia: "ABNT NBR 9050:2020 — item aplicável"
```

### Checklist manual (`tipo: checklist`)

Use para uma observação que exige julgamento humano. Requer apenas os campos
comuns; `operador` e `valor` não são usados. Se houver valor para o parâmetro,
retorna `manual` e o registra como `valor`; não conclui automaticamente
`conforme` ou `nao_conforme`.

```yaml
- id: rota_livre
  nome: Rota livre de obstáculos
  tipo: checklist
  parametro: possui_rota_livre
  referencia: "Vistoria em campo"
```

### Regra condicional (`tipo: conditional`)

Use para faixas, exceções ou uma verificação dependente de outro parâmetro.
Além dos campos comuns, exige `condicoes`, uma lista não vazia. As condições
são avaliadas de cima para baixo; a **primeira** cujo `quando` seja verdadeiro
encerra a avaliação. Se nenhuma corresponder, retorna `nao_avaliado`.

Cada item de `condicoes` aceita:

| Campo | Tipo | Obrigatório | Uso |
| --- | --- | --- | --- |
| `quando` | objeto de comparação | Sim | Teste sobre o `parametro` da regra. |
| `resultado` | texto não vazio | Exatamente um de `resultado` ou `verificar` | Status a retornar diretamente, como `conforme` ou `atencao`. |
| `verificar` | objeto de comparação com `parametro` | Exatamente um de `resultado` ou `verificar` | Compara outro parâmetro e retorna `conforme` ou `nao_conforme`. |
| `mensagem` | texto | Não | Mensagem exibida no resultado da condição. |

Um objeto de comparação — tanto `quando` quanto `verificar` — contém:

| Campo | Tipo | Obrigatório | Uso |
| --- | --- | --- | --- |
| `operador` | veja operadores | Sim | Operador da comparação. |
| `valor` | qualquer valor YAML/JSON | Sim | Valor esperado. |
| `parametro` | texto | Só em `verificar` | Chave existente em `parametros` a ser comparada. Não é usado nem permitido com efeito em `quando`. |

```yaml
- id: tratamento_desnivel
  nome: Tratamento do desnível
  tipo: conditional
  parametro: desnivel_mm
  condicoes:
    - quando: { operador: "<=", valor: 5 }
      resultado: conforme
      mensagem: Sem tratamento adicional.
    - quando: { operador: "<=", valor: 15 }
      verificar:
        parametro: possui_chanfro
        operador: "=="
        valor: true
      mensagem: Exige chanfro adequado.
    - quando: { operador: ">", valor: 15 }
      resultado: atencao
      mensagem: Avaliar como rampa.
  referencia: "Fonte — item 3"
```

`referencia` dentro de uma condição não é devolvida pelo motor; coloque-a na
regra condicional. Além disso, a validação de `obrigatorio` ocorre apenas no
`parametro` principal da regra. Se o parâmetro de `verificar` estiver ausente,
o motor ainda executa a comparação e ela tende a resultar em
`nao_conforme`; marque-o como obrigatório apenas se ele também for parâmetro
principal de alguma regra, ou modele faixas de modo que essa consequência seja
adequada.

## Operadores aceitos

Use exclusivamente estes seis operadores, sempre entre aspas no YAML:

| Operador | Significado | Uso típico |
| --- | --- | --- |
| `>=` | maior ou igual | mínimo |
| `<=` | menor ou igual | máximo |
| `>` | maior que | acima de um limite exclusivo |
| `<` | menor que | abaixo de um limite exclusivo |
| `==` | estritamente igual | booleanos e opções de `select` |
| `!=` | estritamente diferente | exclusões |

As comparações são estritas para igualdade (`==`/`!=`). Para grandezas
numéricas, use `number` e números; para booleanos, use booleanos. Não há
conversão de unidades, arredondamento, tolerância, expressões, `AND`/`OR`,
nem comparação entre dois campos fora de `conditional.verificar`.

## Resultados do motor

| Status | Quando ocorre |
| --- | --- |
| `conforme` | Comparação direta ou `verificar` atendida; ou `resultado: conforme`. |
| `nao_conforme` | Comparação direta ou `verificar` não atendida. |
| `manual` | Regra `checklist` com valor preenchido. |
| `atencao` | Status explícito em `resultado`, normalmente para exigir análise. |
| `nao_avaliado` | Parâmetro principal opcional sem valor, ou nenhuma condição correspondente. |
| `invalido` | Parâmetro principal obrigatório sem valor, ou valor incompatível com `number`/`boolean`. |
| `erro` | A regra aponta para um parâmetro principal inexistente; a importação normalmente impede esse caso. |

Qualquer texto não vazio pode ser usado em `resultado`, mas a interface trata
como pendentes apenas `atencao`, `manual` e `nao_avaliado`. Prefira os status
da tabela para manter o resumo correto.

## Checklist antes da entrega

- O arquivo tem `id`, `nome`, `parametros` e `regras`.
- Cada id de regra e de parâmetro é único e cada `parametro` referenciado
  existe.
- Toda comparação tem `operador` aceito e contém `valor`, com tipo e unidade
  coerentes.
- Cada regra `conditional` tem condições ordenadas do caso mais específico ao
  mais amplo, e cada condição tem `quando` mais exatamente um de `resultado`
  ou `verificar`.
- Campos opcionais que podem ficar sem dado não produzem uma conclusão
  indevida; em especial, os usados em `verificar`.
- Cada critério técnico tem `referencia` no nível da regra e seus valores foram
  fornecidos ou confirmados pelo usuário.
- Não há `source`, `createdAt` ou `updatedAt` no arquivo portátil.
