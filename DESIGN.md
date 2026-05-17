# Design System

## Colors

| Token | Hex | Uso |
|-------|-----|-----|
| Primary (ink) | `#111111` | Texto principal, títulos, navegação |
| Muted | `#666666` | Texto secundário, descrições, captions |
| Background (paper) | `#ffffff` | Fundo geral da página |
| Surface (cream) | `#f8f8f8` | Fundos de seções alternadas, cards sutis |
| Border (line) | `#e5e5e5` | Divisores, bordas de inputs, linhas finas |
| Accent | `#7c3aed` | Links, estados ativos, elementos de destaque |
| Accent soft | `#ede9fe` | Hover states, seleção de texto, badges leves |

### Motion Phrase Colors

| Phrase | Color |
|--------|-------|
| crio experiências visuais | `#7A9B3A` |
| crio identidades marcantes | `#B7A7E6` |
| crio campanhas criativas | `#FFBC65` |
| crio ilustrações autorais | `#7C93B6` |
| crio motion designs | `#D98C7C` |

## Typography

| Função | Fonte | Pesos | Uso |
|--------|-------|-------|-----|
| Heading | Special Gothic Condensed One | normal | Títulos de seção, Hero, headlines grandes |
| Body | Inter | 300, 400, 500, 600, 700, 800, 900 | Texto corrido, parágrafos, descrições |
| Motion phrases | Raleway | 400, 600, 700, 800 | Frases em rotação/loop no Hero |
| Accent script | Caveat / Gochi Hand | 400–700 | Detalhes manuscritos, assinaturas, toques pessoais |

### Scale (base 16px)

- **Display**: 4rem–6rem / Special Gothic Condensed One
- **H1**: 2.5rem–3.5rem / Special Gothic Condensed One
- **H2**: 1.5rem–2rem / Special Gothic Condensed One
- **Body**: 1rem / Inter 400
- **Small / Label**: 0.75rem–0.875rem / Inter 500, uppercase ou sentence case

## Components

### Buttons

- **Primary**: Fundo ink (#111111), texto branco, padding 0.75rem 1.5rem, borda arredondada sutil (0.375rem), fonte Inter 500.
- **Secondary/Outline**: Borda 1px ink, fundo transparente, hover inverte para ink.
- **Ghost**: Sem fundo, sem borda, apenas texto com underline no hover.

### Cards

- Fundo paper (#ffffff) ou cream (#f8f8f8) em seções alternadas.
- Borda sutil opcional (1px line).
- Sombra: evitar sombras pesadas; usar apenas sombra mínima ou nenhuma.
- Cantos levemente arredondados (0.5rem–0.75rem).

### Inputs

- Borda 1px line, fundo paper.
- Padding 0.625rem 0.875rem.
- Focus: borda accent (#7c3aed) com ring sutil.

### Navigation

- Navbar fixa ou sticky no topo.
- Links com Inter 500, tamanho 0.875rem.
- Hover: transição suave de cor para muted ou accent.
- Mobile: hamburger menu com animação suave.

## Rules

1. **Preserve tokens**: Nunca substituir as cores do motion phrases por outras; elas são parte da identidade.
2. **Asimetria do Hero**: Manter texto à esquerda e imagem à direita; não centralizar ambos.
3. **No elementos flutuantes decorativos**: Não adicionar PNGs geométricos flutuando no Hero.
4. **Timing de animação**: Loop a cada 3s, transição 0.5s easeInOut. Manter consistência.
5. **Imagens com transparência**: A imagem do Hero tem fundo transparente e saturação 90% — preservar isso.
6. **Espaçamento generoso**: Padding e margin amplos entre seções (py-16 a py-24 em Tailwind).
7. **Responsividade**: Quebra de layout no mobile deve manter a hierarquia; foto pode empilhar abaixo do texto no Hero.
8. **Font loading**: Garantir que Special Gothic Condensed One, Inter, Raleway, Caveat e Gochi Hand estejam carregadas antes de medidas críticas.
