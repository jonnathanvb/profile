# Currículo Profissional — Jonnathan Barroso

Currículo profissional online (página única) de **Jonnathan Barroso** — Engenheiro de
Software — publicado como **site estático** no GitHub Pages.

> Sem build e sem backend: apenas **HTML, CSS e JavaScript** (vanilla) com **Bootstrap**.

## ✨ Recursos

- **Tema escuro** com Bootstrap 5.3.8
- **Bilíngue (PT-BR / EN)** com seletor de idioma e preferência salva no `localStorage`
- **Responsivo** (mobile-first); em telas pequenas a sidebar vira menu
- **Animações discretas:** _scroll-reveal_ e contadores que sobem ao aparecer
- **Anos de experiência dinâmicos** (calculados automaticamente a partir do início da carreira)
- **Download do CV em PDF** (PT e EN), gerado a partir dos mesmos dados
- Acessibilidade (a11y), SEO básico e tags Open Graph

## 🧱 Stack

- HTML5 semântico, CSS3 (custom properties) e JavaScript (vanilla, ES6+)
- [Bootstrap 5.3.8](https://getbootstrap.com/) + Bootstrap Icons
- Google Fonts (Inter + Poppins)
- Geração de PDF: Python + [ReportLab](https://www.reportlab.com/) (`tools/generate_cv.py`)

## 📁 Estrutura

```
index.html                 página única
assets/
  css/style.css            estilos próprios (tema, layout, animações, impressão)
  js/i18n.js               internacionalização PT-BR / EN
  js/main.js               navegação, scroll-reveal e contadores
  img/                     foto e favicon
  cv/                      PDFs do currículo gerados (PT e EN)
tools/generate_cv.py       gerador dos PDFs (ReportLab)
```

## ▶️ Rodando localmente

Por ser estático, basta abrir o `index.html` no navegador. Para evitar restrições do
protocolo `file://`, o ideal é servir por HTTP:

```bash
# Python
python -m http.server 5500
# ou Node
npx serve
```

Depois acesse `http://localhost:5500`.

## 📄 Gerando o PDF do currículo

Os PDFs (PT e EN) ficam em `assets/cv/` e são produzidos por um script Python:

```bash
pip install reportlab
python tools/generate_cv.py
```

Ao alterar o conteúdo do site, rode o script novamente para manter os PDFs em sincronia.

## 🚀 Deploy

Publicado via **GitHub Pages** — o `index.html` na raiz é servido diretamente.

---

© Jonnathan Barroso
