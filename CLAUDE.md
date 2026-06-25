# CLAUDE.md

Guia de contexto e boas práticas para este projeto. Leia antes de qualquer alteração.

## Sobre o projeto

Currículo profissional online (one-page / single page application estática) do
**Jonnathan Barroso**, para publicação no **GitHub Pages**.

- **Stack:** HTML5, CSS3 e JavaScript (vanilla). Sem build, sem bundler, sem backend.
- **Framework de UI:** **Bootstrap 5.3.8** (versão estável mais recente em jun/2026).
- **Hospedagem alvo:** GitHub Pages (site 100% estático).

## Regras inegociáveis

1. **Nunca executar `git push`.** Commits locais são permitidos e incentivados; o
   envio para o remoto é sempre feito manualmente pelo usuário.
2. **Commit a cada implementação concluída.** Mensagens claras, em português, no
   imperativo (ex.: `Adiciona seção de experiência`). Um commit por unidade lógica
   de trabalho, não um commit gigante no final.
3. **Apenas Bootstrap como framework.** Para usar **qualquer outra** biblioteca ou
   framework (jQuery, AOS, Font Awesome, Google Fonts, ícones, animações, etc.) é
   **obrigatório pedir autorização ao usuário antes**. Não adicionar dependências
   por conta própria.
4. **Sem dados sensíveis no repositório.** Nada de tokens, senhas ou e-mails/telefones
   que o usuário não queira públicos. Lembrar que o repositório será público.

## Convenções de código

### Estrutura de pastas sugerida
```
/                 raiz (index.html fica aqui — exigência do GitHub Pages)
  index.html
  /assets
    /css          estilos próprios (style.css)
    /js           scripts próprios (main.js)
    /img          imagens e ícones
  /docs           material de origem (PDF do currículo, revisões)
```

### HTML
- HTML5 semântico: `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`.
- `lang="pt-BR"` no `<html>`.
- Meta `viewport` para responsividade (já vem nos snippets do Bootstrap).
- Atributos de acessibilidade: `alt` em imagens, `aria-label` em ícones/botões,
  hierarquia correta de headings (`h1` único, depois `h2`, `h3`...).

### CSS
- Preferir **utilitários do Bootstrap** antes de escrever CSS próprio.
- CSS customizado só para o que o Bootstrap não cobre, em `assets/css/style.css`.
- Usar **CSS custom properties** (`:root { --cor-primaria: ... }`) para cores e
  espaçamentos reutilizados. Aproveitar o suporte a dark mode do Bootstrap
  (`data-bs-theme="dark"`) se for desejado.
- Mobile-first: começar pelo layout pequeno e ampliar com os breakpoints.

### JavaScript
- Vanilla JS, ES6+ (`const`/`let`, arrow functions, `addEventListener`).
- Sem dependências externas sem autorização (ver regra 3).
- Código em `assets/js/main.js`, carregado com `defer`.
- Componentes interativos do Bootstrap (collapse, modal, scrollspy) via os
  atributos `data-bs-*`; só recorrer à API JS quando necessário.

### Bootstrap — como incluir
Via CDN (mais simples para um site estático). Confirmar sempre a versão 5.3.8 e
o hash de integridade na documentação oficial antes de fixar:
```html
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet">
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js" defer></script>
```

## Boas práticas gerais

- **Responsividade real:** validar em larguras de celular, tablet e desktop.
- **Acessibilidade (a11y):** contraste adequado, navegação por teclado, textos
  alternativos.
- **Performance:** imagens otimizadas (WebP quando possível), `loading="lazy"`,
  CSS/JS mínimos.
- **SEO básico:** `<title>` descritivo, meta `description`, Open Graph tags para
  compartilhamento, `favicon`.
- **Conteúdo correto:** o conteúdo do currículo deve refletir as **correções**
  documentadas em [`docs/revisao-pdf.md`](docs/revisao-pdf.md) e
  [`docs/revisao-linked.md`](docs/revisao-linked.md). Não copiar os erros do PDF.

## Fluxo de trabalho com o Claude

- Trabalhar em incrementos pequenos e testáveis.
- Após cada incremento: revisar, então `git add` + `git commit` (nunca `push`).
- Em caso de dúvida sobre escopo, dependências ou conteúdo do currículo, **perguntar**.
