# Projeto — Currículo Online de Jonnathan Barroso

Planejamento técnico e de produto do site. Define **o que** será construído, **como**
e em **quais etapas**. Atualizar este arquivo conforme o projeto evolui.

> Regras de trabalho válidas para todo o projeto estão em [`CLAUDE.md`](CLAUDE.md).
> Conteúdo do currículo deve seguir [`docs/revisao-pdf.md`](docs/revisao-pdf.md) e
> [`docs/revisao-linked.md`](docs/revisao-linked.md).

---

## 1. Objetivo

Publicar um **currículo profissional em formato de site** (single page, estático) no
**GitHub Pages**, moderno, responsivo, acessível, com **tema escuro** e **suporte a
dois idiomas: Português (Brasil) e Inglês**.

## 2. Referência visual

Layout próprio, no estilo "cartão de perfil + conteúdo", criado do zero com a nossa
stack (sem copiar código de terceiros).

- Elementos centrais do visual:
  - **Sidebar/card de perfil fixo** à esquerda (foto, nome, cargo, links sociais,
    botão de download do CV).
  - **Conteúdo à direita** com navegação entre seções e tema escuro.
  - Elementos de currículo: **timeline** de experiência/formação, **chips** de
    competência por categoria, cartões de "O que eu faço".

## 3. Stack e restrições técnicas

- **HTML5 + CSS3 + JavaScript (vanilla, ES6+).** Sem build, sem backend.
- **Bootstrap 5.3.8** via CDN (grid, utilitários, componentes, dark mode nativo
  `data-bs-theme="dark"`).
- **Sem outras dependências** sem autorização (ícones, fontes, libs de animação,
  bandeiras etc. — pedir antes). Ver regra 3 do `CLAUDE.md`.
- Hospedagem: **GitHub Pages** (`index.html` na raiz).

## 4. Estrutura de pastas prevista

```
/
  index.html               página única
  Projeto.md               este planejamento
  CLAUDE.md                guia do projeto
  /assets
    /css/style.css         estilos próprios (complementam o Bootstrap)
    /js/main.js            navegação, ano, efeito de digitação
    /js/i18n.js            motor de tradução + dicionários PT-BR / EN
    /img/                  foto (photo.jpg), favicon
    /cv/                   PDF do currículo gerado (download)
  /tools/generate_cv.py    gerador do PDF (reportlab) — uso opcional/dev
  /docs                    material de origem e revisões (já existe)
```

## 5. Seções do site

Seções **básicas** solicitadas + uma seção de abertura:

1. **Home / Início** — nome, cargo-título, breve chamada e CTAs (ver currículo /
   contato / baixar PDF).
2. **About me / Sobre** — resumo profissional (versão curta e impessoal, conforme
   revisão), dados rápidos (localização, idiomas, disponibilidade) e bloco
   **"O que eu faço"** (ex.: Arquitetura de Software, Back-end .NET, Front-end,
   Cloud/DevOps).
3. **Resume / Currículo** — o núcleo:
   - **Experiência** em **timeline**, modelando **empresa → cargos/períodos**
     (acomoda Linked Gourmet→Linked Tech e Link do Brasil estágio→desenvolvedor;
     ver seção 3 da revisão do PDF).
   - **Formação acadêmica** (UNINOVE, FIEB).
   - **Competências** como **chips agrupados por categoria** (Linguagens, Front-end,
     Bancos, Cloud/DevOps, Práticas). Sem porcentagens/escalas — elas passam falsa
     precisão (ex.: "80% de Kubernetes" não é mensurável).
   - **Destaques** (ex.: Alura — +276 cursos / 11.317 exercícios) e idiomas com nível.
   - Dois botões: **Baixar CV** (baixa um PDF tipográfico pré-gerado em
     `assets/cv/Jonnathan_Barroso_CV.pdf`) e **Imprimir** (usa o stylesheet
     `@media print` do navegador). O PDF é gerado por `tools/generate_cv.py`
     (reportlab) — ao mudar o conteúdo do site, rodar o script de novo.
4. **Contact / Contato** — e-mail, localização, status (disponível para vagas) e
   links (LinkedIn, GitHub, Alura). Formulário de contato **opcional** (ver seção 8).

Navegação entre seções: menu fixo (na sidebar e/ou topo), com **scrollspy** do
Bootstrap e rolagem suave. Single page com âncoras (`#sobre`, `#resume`, `#contato`).

## 6. Internacionalização (PT-BR / EN)

- **Idioma padrão:** Português (Brasil). Alternância via **botão/seletor PT | EN**.
- **Estratégia (sem framework):**
  - Textos traduzíveis marcados no HTML com atributo **`data-i18n="chave"`** (e
    `data-i18n-attr="attr:chave"` para `aria-label`, `placeholder`, `title`).
  - Dicionários **embutidos em `assets/js/i18n.js`** (objeto JS com chaves planas
    `a.b.c`). Optou-se por embutir em vez de `*.json` para o site funcionar também
    ao abrir o `index.html` localmente via `file://` (sem servidor/`fetch`).
  - **`assets/js/i18n.js`** percorre os elementos `[data-i18n]`/`[data-i18n-attr]`
    e injeta os textos; atualiza `<html lang>`, `<title>`/`meta description` e o
    estado do seletor; emite o evento `langchange`.
  - Preferência persistida em **`localStorage`**; fallback para o idioma do
    navegador (`navigator.language`) na primeira visita.
- **SEO multilíngue:** `<title>`/`meta description` traduzidos ao trocar idioma;
  considerar `hreflang` (avaliar viabilidade em página única no GitHub Pages).

## 7. Requisitos transversais

- **Responsividade:** mobile-first; sidebar vira topo/*offcanvas* em telas pequenas.
- **Acessibilidade:** HTML semântico, `h1` único, contraste adequado no tema escuro,
  navegação por teclado, `alt`/`aria-label`, foco visível.
- **Performance:** imagens otimizadas (WebP, `loading="lazy"`), CSS/JS enxutos,
  CDN do Bootstrap com `defer`.
- **SEO:** `<title>` e `meta description` descritivos, **Open Graph**/Twitter Card,
  `favicon`, `lang` correto.
- **Tema:** escuro por padrão (`data-bs-theme="dark"`). *Toggle* claro/escuro é
  opcional (incremento futuro).
- **Efeitos (sem dependência):** *scroll-reveal* (entrada animada das seções/itens
  via `IntersectionObserver`) e **contadores** que sobem ao aparecer (faixa de dados
  na seção Sobre). Ambos respeitam `prefers-reduced-motion` e são ocultados na
  impressão/PDF.

## 8. Pontos que dependem de decisão do usuário

Itens a confirmar antes ou durante a implementação (não bloqueiam o início):

1. **Foto de perfil** e **PDF para download** — quais arquivos usar em `/assets/img`
   e `/docs`?
2. **Contato público:** quais dados expor (e-mail, telefone, cidade)? Lembrar que o
   repositório é público (regra 4 do `CLAUDE.md`).
3. **Formulário de contato:** GitHub Pages não tem backend. Opções: link `mailto:`
   (simples, sem dependência) **ou** serviço externo (ex.: Formspree) — este último
   **exige autorização**. Padrão proposto: `mailto:` + links sociais.
4. **Ícones e fontes:** o modelo usa ícones e tipografia próprios. Para fidelidade
   visual pode ser desejável **Bootstrap Icons** e/ou **Google Fonts** — ambos são
   dependências externas e **precisam de autorização** (regra 3). Sem autorização,
   uso apenas recursos do sistema/Bootstrap.
5. **Cargo Freelance (Keycloak)** e **cidade** (Itapevi × Osasco): definir o que
   exibir (ver revisões).
6. **Cor de destaque** (accent) do tema escuro.

## 9. Roadmap incremental (um commit por etapa)

> Cada etapa concluída → `git add` + `git commit` em português, no imperativo.
> **Nunca `git push`** (feito manualmente pelo usuário).

1. **Esqueleto** — `index.html` base com Bootstrap (CDN), tema escuro, layout
   sidebar + conteúdo e seções vazias com âncoras.
2. **Estilos base** — `assets/css/style.css`, variáveis de cor (accent), tipografia,
   responsividade da sidebar/offcanvas.
3. **Navegação** — menu, scrollspy, rolagem suave (`assets/js/main.js`).
4. **Home + About** — conteúdo da abertura e do "Sobre" + "O que eu faço".
5. **Resume** — timeline de experiência (empresa→cargos), formação, competências,
   destaques e botão de download do CV.
6. **Contact** — dados de contato e links; `mailto:` (ou formulário, se autorizado).
7. **i18n** — `i18n.js`, dicionários `pt-BR.json`/`en.json`, seletor de idioma e
   persistência.
8. **SEO + meta + favicon + OG image.**
9. **Acessibilidade e responsividade** — auditoria e ajustes finais.
10. **Polimento** — performance, revisão de conteúdo e revisão geral.

## 10. Critérios de pronto (Definition of Done)

- Site abre como **página única estática**, funciona no GitHub Pages.
- Seções **Home, About, Resume, Contact** completas e fiéis às revisões.
- **PT-BR e EN** funcionando, com persistência da escolha.
- **Responsivo** (mobile/tablet/desktop) e **acessível** (navegável por teclado,
  contraste ok).
- Apenas **Bootstrap** como framework (ou dependências **autorizadas**).
- Sem dados sensíveis indevidos no repositório.
