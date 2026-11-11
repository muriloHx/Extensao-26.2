---
name: Acesso Verificador
description: Design system do PWA de verificação de acessibilidade (NBR 9050). Use as variáveis CSS, nunca valores soltos.
version: 1.0.0
base: Mintlify (adaptado)
---

# Acesso Verificador — Design System

Base visual inspirada no Mintlify: fundo off-white quente, sombras suaves, sem gradientes.
Adaptado para app (Vue + Vite + CSS puro em `src/style/`, sem Tailwind) e para leitura sob luz do sol: o app é usado em vistoria de campo, com o celular na mão e o brilho no máximo.

> Os hex de azul e laranja abaixo são aproximações. Troque pelos hex reais da logo e
> confira o contraste antes de usar.

## Regra de ouro

Use sempre as variáveis CSS abaixo. Não invente cores, raios, sombras, fontes ou pesos fora deste arquivo.

## Cores

Somente tema claro: em ambiente externo, fundo claro com texto quase preto é o que a tela consegue entregar de maior contraste — um tema escuro viraria um espelho escuro sob o sol.

Os contrastes abaixo são calculados sobre `--bg` (#fefdfb) e são **piso**, não meta. Luz ambiente alta e reflexo na tela comprimem a faixa dinâmica: o que mede 1,1:1 no papel desaparece na rua. Por isso as camadas têm separação mínima de 1,1:1, os contornos partem de 4,5:1 e o texto parte de 7:1 — e não dos mínimos da WCAG AA.

```css
:root {
  /* Superfícies — a diferença entre elas precisa sobreviver ao reflexo */
  --bg:          #fefdfb;  /* fundo da página */
  --surface:     #f1eee8;  /* cards, painéis — 1,14:1 sobre --bg */
  --fill:        #e5e0d8;  /* áreas rebaixadas, chips — 1,29:1 sobre --bg */

  /* Texto — AAA (7:1+) porque o sol derruba o contraste percebido */
  --text:        #121715;  /* 17,8:1 — texto principal */
  --text-2:      #303a36;  /* 11,6:1 — texto secundário */
  --text-3:      #4e5854;  /* 7,3:1  — legendas, ajuda (mínimo permitido) */

  /* Bordas — precisam ser vistas ao sol, não só decorar no desktop */
  --line:        #ccc6bb;  /* divisórias, 1,5:1 sobre --surface */
  --border:      #626d67;  /* 5,3:1 — inputs, botões, checkbox (WCAG 1.4.11) */

  /* Marca */
  --brand:       #1a5490;  /* 7,6:1 — links, botão primário, foco */
  --brand-hover: #123c68;  /* 11,0:1 */
  --on-brand:    #ffffff;  /* texto sobre --brand (7,7:1) */
  --accent:      #d0640b;  /* laranja: SOMENTE decoração (3,8:1), nunca texto */

  /* Estado — verificados também sobre --fill, onde aparecem em badges */
  --error:       #9d1f13;  /* 7,8:1 — 6,1:1 sobre --fill */
  --success:     #0b5a3b;  /* 8,1:1 — 6,3:1 sobre --fill */
}
```

Regras:
- Texto pequeno: no mínimo 7:1 sobre `--bg`/`--surface`; sobre `--fill`, no mínimo 5,5:1 (piso dos badges de estado). Os 4,5:1 da WCAG AA não se sustentam sob sol direto.
- Camadas (`--surface`, `--fill`) precisam de 1,1:1 ou mais entre si e nunca podem ser a única diferença entre dois blocos: no sol a sombra não separa nada.
- Componentes de interface (borda de input, ícone, foco) precisam de 4,5:1 ou mais; o mínimo de 3:1 da WCAG 1.4.11 é insuficiente em campo.
- O laranja aparece só como faixa fina de 4px (ex.: topo do card da tela de instalação) e nunca em área grande, que estoura sob luz forte.
- Não comunicar estado só por cor: sempre acompanhar de ícone ou texto — o sol reduz a discriminação entre vermelho e verde.

## Tipografia

```css
:root {
  --font-sans: "Inter", system-ui, -apple-system, "Segoe UI", sans-serif;
  --font-mono: "Geist Mono", ui-monospace, "SF Mono", Menlo, monospace;
}
body { font-family: var(--font-sans); font-size: 1rem; line-height: 1.6; color: var(--text); }
```

- Pesos permitidos: 400, 500, 600, 700. Nada fora disso.
- Corpo mínimo 16px. Evite texto abaixo de 14px.
- Escala: 14 / 16 / 18 / 22 / 28 / 36 px. `line-height` 1.2 nos títulos, 1.6 no corpo.
- Títulos com `letter-spacing: normal`. Sem espaçamento negativo.
- Sem texto em caixa alta com letter-spacing largo. Sem fontes decorativas.
- `text-wrap: balance` em títulos e `text-wrap: pretty` em parágrafos.
- Mono só para código e identificadores de regra.

## Espaçamento

Escala base de 4px: `4, 8, 12, 16, 24, 32, 48`. Margem lateral 16px no celular, 32px no desktop. Largura máxima de conteúdo 1088px; texto corrido até ~70 caracteres por linha.

## Formas

Raios variam por componente, não uniformes:

| Elemento | Raio |
| --- | --- |
| Foco, badges inline | 2px |
| Botões, inputs | 4px |
| Cards, imagens | 6px |
| Pílulas, bolinhas, spinner | 9999px |

## Elevação

Duas sombras, baixas e difusas. Nada de sombra escura ou colorida.

```css
:root {
  --shadow-sm: 0 1px 2px rgb(18 23 21 / 0.06), 0 1px 3px rgb(18 23 21 / 0.08);
  --shadow-md: 0 4px 12px rgb(18 23 21 / 0.08), 0 2px 4px rgb(18 23 21 / 0.06);
}
```

Elemento que tem sombra e também borda: desenhe a borda com `box-shadow: inset 0 0 0 1px` ou `outline` semitransparente, não com `border` opaco (a borda e a sombra se fundem em uma só aresta suave).

Sob sol a sombra desaparece antes da cor: a hierarquia de superfícies vem de `--surface`, `--fill` e `--line`, e a sombra só refina.

## Movimento

- Transições de 150–250ms com `cubic-bezier(0.22, 1, 0.36, 1)`.
- Movimento só para esclarecer mudança de estado, nunca decoração.
- Sempre respeitar `prefers-reduced-motion`:

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after { animation: none !important; transition: none !important; }
}
```

## Componentes

- **Botão primário:** fundo `--brand`, texto `--on-brand`, raio 4px, altura mínima 44px (alvo de toque), hover `--brand-hover`.
- **Botão secundário:** fundo transparente, borda `--border` 1px, texto `--text`.
- **Input:** fundo `--bg`, borda `--border` 1px, raio 4px, altura mínima 44px. Rótulo sempre visível acima do campo (nunca só placeholder).
- **Card:** fundo `--surface`, raio 6px, `--shadow-sm`, padding 16–24px. Sem cores pastel por categoria.
- **Link:** cor `--brand` e sublinhado sempre visível no texto corrido.
- **Foco (obrigatório em todo elemento interativo):**

```css
:focus-visible { outline: 2px solid var(--brand); outline-offset: 2px; border-radius: 2px; }
```

## Faça e não faça

- **Faça** usar as variáveis, não hex solto, e manter os alvos de toque em 44px ou mais.
- **Faça** testar cada tela nova no próprio checker de contraste do app.
- **Faça** conferir a tela no sol direto, com o brilho no máximo: se a camada sumir, o problema é cor, não sombra.
- **Faça** manter uma hierarquia visual simples: um botão primário por tela.
- **Não** use gradientes decorativos, cards pastel coloridos, mesmo raio e sombra em tudo, ou rótulos em caixa alta com letter-spacing.
- **Não** remova outline de foco.
- **Não** use laranja para texto ou ícone informativo.
- **Não** adicione biblioteca de UI ou Tailwind.
- **Não** crie cor, sombra ou raio novos: se faltar token, proponha antes de adicionar.
