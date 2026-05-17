# Skill: Impeccable

## Purpose

Melhorar interfaces frontend com critério visual rigoroso: layout, hierarquia, espaçamento, cores, responsividade, acessibilidade e polimento de componentes.

## Scope

Use esta skill quando o usuário pedir para:

- Desenhar ou redesenhar uma tela;
- Melhorar uma interface existente;
- Auditar UX/UI;
- Polir componentes;
- Ajustar layout, espaçamento, tipografia, cores ou ícones;
- Trabalhar em uma experiência visual no navegador;
- Fazer iteração visual com uma página local rodando.

## Setup

### 1. Carregar Contexto do Produto

Antes de alterar UI, o agente deve abrir e ler:

- `PRODUCT.md` na raiz do projeto
- `DESIGN.md` na raiz do projeto
- `.agents/skills/impeccable/SKILL.md` (este arquivo)

Se `PRODUCT.md` ou `DESIGN.md` não existirem, crie-os antes de continuar.

### 2. Identificar o Registro

Determine o tipo de interface:

- **`product`**: app, dashboard, ferramenta, sistema, produto funcional com fluxos de uso.
- **`brand`**: landing page, campanha, portfólio, página editorial ou institucional com foco em comunicação e identidade.

Carregue a referência adequada, se existir:

- `.agents/skills/impeccable/reference/product.md` — para interfaces de produto
- `.agents/skills/impeccable/reference/brand.md` — para interfaces de marca/portfólio

### 3. Carregar Contexto com Script (se disponível)

Se existir, execute:

```bash
node .agents/skills/impeccable/scripts/load-context.mjs
```

Este script exibe o contexto consolidado de produto e design para consulta durante a edição.

## Commands

Quando a skill suportar subcomandos, use estes padrões:

| Command | Descrição |
|---------|-----------|
| `impeccable polish <alvo>` | Refinar e polir a interface alvo sem mudar estrutura. |
| `impeccable audit <alvo>` | Analisar e reportar problemas visuais/UX sem editar arquivos. |
| `impeccable layout <alvo>` | Reorganizar layout, grid, alinhamento e fluxo visual. |
| `impeccable colorize <alvo>` | Ajustar paleta, contraste, estados e consistência cromática. |
| `impeccable typeset <alvo>` | Corrigir tipografia: tamanho, peso, altura de linha, escala. |
| `impeccable adapt <alvo>` | Ajustar responsividade e breakpoints para diferentes telas. |
| `impeccable live <url-ou-tela>` | Iterar visualmente com a página aberta no navegador local. |

### Exemplos

```
impeccable polish homepage
impeccable audit /dashboard
impeccable layout components/ProductCard.tsx
impeccable live http://localhost:3000
```

## Rules

1. **Não faça mudanças visuais genéricas sem ler PRODUCT.md e DESIGN.md.**
2. **Não invente um novo design system se o projeto já tiver um.** Use os tokens, cores e tipografias existentes.
3. **Use os componentes existentes antes de criar novos.** Prefira editar e polir o que já está no codebase.
4. **Preserve tokens, cores e padrões locais.** Só introduza novos tokens se houver justificativa clara.
5. **Faça mudanças pequenas e verificáveis.** Um componente ou seção por vez. Evite refactors massivos de uma só vez.
6. **Valide após editar.** Rode lint, typecheck e build quando scripts estiverem disponíveis:
   - `npm.cmd run lint`
   - `npm.cmd run build`
7. **Verifique visualmente no navegador.** Se for frontend, abra a página local (`npm.cmd run dev`) e confira o resultado.
8. **Em modo live, observe antes de alterar.** Abra a tela, identifique os principais problemas, faça ajustes pequenos, valide visualmente, depois prossiga.
9. **Mantenha acessibilidade mínima:** contraste adequado, foco visível, semântica HTML correta, alt text em imagens.
10. **Respeite o motion existente.** Se houver animações definidas (Framer Motion, CSS transitions), mantenha o timing e easing ou evolua gradualmente.

## Workflow: Modo Live

1. Abra a URL local ou rota indicada no navegador.
2. Capture o estado atual mentalmente ou anote os pontos.
3. Identifique os 3 principais problemas visuais (hierarquia, espaçamento, contraste, alinhamento, etc.).
4. Faça ajustes no código, um por vez.
5. Recarregue e valide visualmente.
6. Itere até o resultado estar satisfatório.
7. Finalize com lint/build.

## Reporting

Ao final de qualquer trabalho com esta skill, reporte:

- **Arquivos alterados** com paths absolutos ou relativos claros.
- **Principais decisões visuais** tomadas e por quê.
- **Validações executadas** (lint, typecheck, build, visual).
- **Limitações encontradas** (tokens ausentes, dependências bloqueantes, etc.).
- **URL local usada** para conferência visual, se aplicável.
