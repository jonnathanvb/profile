/* ============================================================
   Internacionalização (i18n) — PT-BR / EN
   Dicionários embutidos em JS (chaves planas "a.b.c") para
   funcionar tanto no GitHub Pages quanto via file:// local,
   sem depender de fetch de JSON.
   ============================================================ */
(function () {
  "use strict";

  const DICT = {
    "pt-BR": {
      "meta.title": "Jonnathan Barroso — Engenheiro de Software",
      "meta.description": "Currículo de Jonnathan Barroso, engenheiro de software com mais de 12 anos de experiência em arquitetura de software, .NET/C# e Azure.",

      "nav.open": "Abrir menu",
      "nav.close": "Fechar",
      "nav.home": "Início",
      "nav.about": "Sobre",
      "nav.resume": "Currículo",
      "nav.contact": "Contato",

      "profile.role": "Software Engineer | .NET | C# | Azure | Tech Lead | Arquiteto de Soluções",
      "profile.download": "Baixar CV",
      "profile.print": "Imprimir",

      "home.greeting": "Olá, eu sou",
      "home.iam": "Sou",
      "home.lead": "Mais de {years} anos transformando requisitos de negócio em sistemas escaláveis, com foco em arquitetura de software, back-end .NET e nuvem Azure.",
      "home.ctaResume": "Ver currículo",
      "home.ctaContact": "Fale comigo",
      "home.typedRoles": ["Arquiteto de Soluções", "Tech Lead", "Desenvolvedor .NET", "Especialista em Azure"],

      "about.title": "Sobre mim",
      "about.p1": "Engenheiro de software com mais de {years} anos de experiência ajudando empresas a transformar a operação do dia a dia em sistemas confiáveis, com forte vivência em varejo, ponto de venda (PDV) e gestão empresarial (ERP). Atuo de ponta a ponta — do desenvolvimento full stack à definição de arquitetura de sistemas distribuídos —, com passagem por startups e empresas de tecnologia no Brasil e em Portugal.",
      "about.p2": "Conheço de perto os módulos que sustentam o negócio: estoque, vendas, financeiro (fechamento de caixa e conciliação) e fiscal (emissão de NFC-e e integração com a SEFAZ). Também atuei com o ERP TOTVS (Protheus), entendendo as rotinas de quem opera esses processos no dia a dia.",
      "about.p3": "Essa vivência me trouxe atenção redobrada à confiabilidade e à conformidade — em sistemas que lidam com dinheiro e obrigações fiscais, cada detalhe importa. No lado técnico, trabalho com back-end em C#/.NET, front-end em Angular e nuvem Microsoft Azure; como Arquiteto de Soluções, atuo nas decisões estratégicas (arquitetura, governança técnica e mentoria), sempre alinhado aos objetivos do negócio.",
      "about.location": "Localização",
      "about.languages": "Idiomas",
      "about.languagesValue": "Português (Nativo), Inglês (Básico)",
      "about.availability": "Disponibilidade",
      "about.availabilityValue": "Aberto a novas oportunidades",
      "about.whatIDo": "O que eu faço",
      "stats.years": "Anos de experiência",
      "stats.courses": "Cursos concluídos",
      "stats.exercises": "Exercícios resolvidos",
      "about.s1.title": "Arquitetura de Software",
      "about.s1.text": "Sistemas distribuídos, padrões e governança técnica.",
      "about.s2.title": "Back-end (.NET / C#)",
      "about.s2.text": "APIs, integrações e serviços escaláveis.",
      "about.s3.title": "Front-end",
      "about.s3.text": "Angular, HTML, CSS e JavaScript.",
      "about.s4.title": "Cloud & DevOps",
      "about.s4.text": "Azure, IaC (Terraform), CI/CD e Kubernetes.",

      "resume.title": "Currículo",
      "resume.experience": "Experiência",
      "resume.education": "Formação",
      "resume.skills": "Competências",
      "resume.skills.cat.data": "Dados & ORM",
      "resume.skills.cat.arch": "Arquitetura & Integrações",
      "resume.skills.cat.tools": "Ferramentas & IA",
      "skill.apisrest": "APIs REST",
      "skill.micro": "Microsserviços",
      "skill.messaging": "Mensageria (Azure Service Bus)",
      "skill.realtime": "Tempo real (Socket.IO)",
      "skill.fiscal": "Integração fiscal (NFC-e/SEFAZ)",
      "resume.highlights": "Destaques",
      "common.remote": "Remoto",

      "resume.r.genesis.title": "Arquiteto de Software",
      "resume.r.genesis.desc": "Back-end .NET (C#) e front-end (Angular, Vue), Infraestrutura como Código (IaC/Terraform), CI/CD e Azure (Web Apps, Functions, Storage, Service Bus, Database, VM).",
      "resume.r.genesis.res1": "Projetei uma arquitetura em microsserviços dimensionada para 1.000 requisições por minuto.",
      "resume.r.linked.a.title": "Arquiteto de Soluções",
      "resume.r.linked.a.desc": "Arquitetura de uma plataforma de PDV/food-service em microsserviços .NET (Clean Architecture e CQRS), com bibliotecas compartilhadas (NuGet) e persistência poliglota (SQL Server, Redis, CouchDB e SQLite offline). Mensageria com Azure Service Bus, módulos em tempo real (KDS via Socket.IO), autenticação centralizada (SSO) com Keycloak e integração fiscal (SEFAZ/NFCe, SAT) e de periféricos. Responsável por padrões técnicos, governança, revisão de código, infraestrutura Azure (Azure Container Apps) com CI/CD e mentoria do time.",
      "resume.r.linked.a.res1": "Reduzi a fila de bugs de ~1.000 para ~10, elevando de forma expressiva a estabilidade da plataforma.",
      "resume.r.linked.a.res2": "Reduzi cerca de 30% do custo de nuvem ao corrigir bugs de consumo excessivo (ex.: escalonamento indevido por esgotamento de portas), migrar a hospedagem de Windows para Linux e otimizar consumo de banda larga.",
      "resume.r.linked.b.title": "Desenvolvedor Full Stack",
      "resume.r.linked.b.desc": "Desenvolvimento back-end (C#) e front-end (Angular) do PDV, com integrações de meios de pagamento (POS Stone) e plataformas de delivery (iFood, Rappi), automação de infraestrutura e CI/CD.",
      "resume.r.iterative.title": "Desenvolvedor Full Stack",
      "resume.r.iterative.desc": "APIs em .NET (projeto ConectCar), boas práticas de front-end com Angular (projeto Poder do Voto) e aplicação web (HTML/CSS/JS) para o POS da Stone.",
      "resume.r.betta.title": "Desenvolvedor",
      "resume.r.betta.desc": "Desenvolvimento e manutenção de sistemas (.NET e PHP) para as universidades FMU e Anhembi Morumbi.",
      "resume.r.link.a.title": "Desenvolvedor",
      "resume.r.link.a.desc": "Sistemas internos em C#, manutenção em VB.NET e suporte ao ERP TOTVS.",
      "resume.r.link.b.title": "Estagiário",
      "resume.r.link.b.desc": "Migração de sistemas legados de VB6 para VB.NET, manutenção de sistemas internos e suporte ao ERP TOTVS.",

      "resume.e.uninove.title": "Bacharelado em Sistemas de Informação",
      "resume.e.fieb.title": "Técnico em Informática",

      "resume.h.alura": "Alura: +280 cursos concluídos e 11.427 exercícios resolvidos",
      "resume.h.exp": "Mais de {years} anos de experiência em desenvolvimento e arquitetura",
      "resume.h.cert": "Foco atual: certificações Microsoft em arquitetura e IA",

      "contact.title": "Contato",
      "contact.lead": "Vamos conversar sobre seu próximo projeto ou oportunidade? Fico à disposição.",

      "footer.built": "Feito com HTML, CSS e Bootstrap"
    },

    "en": {
      "meta.title": "Jonnathan Barroso — Software Engineer",
      "meta.description": "Resume of Jonnathan Barroso, a software engineer with 12+ years of experience in software architecture, .NET/C# and Azure.",

      "nav.open": "Open menu",
      "nav.close": "Close",
      "nav.home": "Home",
      "nav.about": "About",
      "nav.resume": "Resume",
      "nav.contact": "Contact",

      "profile.role": "Software Engineer | .NET | C# | Azure | Tech Lead | Solutions Architect",
      "profile.download": "Download CV",
      "profile.print": "Print",

      "home.greeting": "Hi, I'm",
      "home.iam": "I'm a",
      "home.lead": "{years}+ years turning business requirements into scalable systems, focused on software architecture, .NET back-end and Azure cloud.",
      "home.ctaResume": "View resume",
      "home.ctaContact": "Get in touch",
      "home.typedRoles": ["Solutions Architect", "Tech Lead", ".NET Developer", "Azure Specialist"],

      "about.title": "About me",
      "about.p1": "Software engineer with over {years} years of experience helping companies turn day-to-day operations into reliable systems, with a strong background in retail, point of sale (POS) and enterprise management (ERP). I work end to end — from full stack development to the architecture of distributed systems — with experience at startups and technology companies in Brazil and Portugal.",
      "about.p2": "I know the modules that run the business firsthand: inventory, sales, finance (cash closing and reconciliation) and fiscal (NFC-e issuance and SEFAZ integration). I also worked with the TOTVS (Protheus) ERP, understanding the daily routines of the people who operate these processes.",
      "about.p3": "This background gave me heightened attention to reliability and compliance — in systems that handle money and tax obligations, every detail matters. On the technical side, I work with C#/.NET back-end, Angular front-end and Microsoft Azure cloud; as a Solutions Architect, I drive strategic decisions (architecture, technical governance and mentoring), always aligned with business goals.",
      "about.location": "Location",
      "about.languages": "Languages",
      "about.languagesValue": "Portuguese (Native), English (Basic)",
      "about.availability": "Availability",
      "about.availabilityValue": "Open to new opportunities",
      "about.whatIDo": "What I do",
      "stats.years": "Years of experience",
      "stats.courses": "Courses completed",
      "stats.exercises": "Exercises solved",
      "about.s1.title": "Software Architecture",
      "about.s1.text": "Distributed systems, patterns and technical governance.",
      "about.s2.title": "Back-end (.NET / C#)",
      "about.s2.text": "APIs, integrations and scalable services.",
      "about.s3.title": "Front-end",
      "about.s3.text": "Angular, HTML, CSS and JavaScript.",
      "about.s4.title": "Cloud & DevOps",
      "about.s4.text": "Azure, IaC (Terraform), CI/CD and Kubernetes.",

      "resume.title": "Resume",
      "resume.experience": "Experience",
      "resume.education": "Education",
      "resume.skills": "Skills",
      "resume.skills.cat.data": "Data & ORM",
      "resume.skills.cat.arch": "Architecture & Integrations",
      "resume.skills.cat.tools": "Tools & AI",
      "skill.apisrest": "REST APIs",
      "skill.micro": "Microservices",
      "skill.messaging": "Messaging (Azure Service Bus)",
      "skill.realtime": "Real-time (Socket.IO)",
      "skill.fiscal": "Fiscal integration (NFC-e/SEFAZ)",
      "resume.highlights": "Highlights",
      "common.remote": "Remote",

      "resume.r.genesis.title": "Software Architect",
      "resume.r.genesis.desc": "Back-end .NET (C#) and front-end (Angular, Vue), Infrastructure as Code (IaC/Terraform), CI/CD and Azure (Web Apps, Functions, Storage, Service Bus, Database, VM).",
      "resume.r.genesis.res1": "Designed a microservices architecture sized for 1,000 requests per minute.",
      "resume.r.linked.a.title": "Solutions Architect",
      "resume.r.linked.a.desc": "Architecture of a POS/food-service platform built as .NET microservices (Clean Architecture and CQRS), with shared NuGet libraries and polyglot persistence (SQL Server, Redis, CouchDB and offline SQLite). Azure Service Bus messaging, real-time modules (KDS over Socket.IO), centralized authentication (SSO) with Keycloak, and fiscal (SEFAZ/NFCe, SAT) and peripheral integrations. Owned technical standards, governance, code review, Azure infrastructure (Azure Container Apps) with CI/CD and team mentoring.",
      "resume.r.linked.a.res1": "Cut the bug backlog from ~1,000 to ~10, significantly improving platform stability.",
      "resume.r.linked.a.res2": "Reduced cloud costs by around 30% by fixing excessive-consumption bugs (e.g., unnecessary auto-scaling caused by port exhaustion), migrating hosting from Windows to Linux and optimizing bandwidth usage.",
      "resume.r.linked.b.title": "Full Stack Developer",
      "resume.r.linked.b.desc": "Back-end (C#) and Angular front-end development for the POS, with payment (Stone POS) and delivery (iFood, Rappi) integrations, infrastructure automation and CI/CD.",
      "resume.r.iterative.title": "Full Stack Developer",
      "resume.r.iterative.desc": ".NET APIs (ConectCar project), front-end best practices with Angular (Poder do Voto project) and a web app (HTML/CSS/JS) for the Stone POS.",
      "resume.r.betta.title": "Developer",
      "resume.r.betta.desc": "Development and maintenance of systems (.NET and PHP) for FMU and Anhembi Morumbi universities.",
      "resume.r.link.a.title": "Developer",
      "resume.r.link.a.desc": "Internal systems in C#, VB.NET maintenance and TOTVS ERP support.",
      "resume.r.link.b.title": "Intern",
      "resume.r.link.b.desc": "Migration of legacy systems from VB6 to VB.NET, internal systems maintenance and TOTVS ERP support.",

      "resume.e.uninove.title": "Bachelor's in Information Systems",
      "resume.e.fieb.title": "Technical degree in IT",

      "resume.h.alura": "Alura: 280+ courses completed and 11,427 exercises solved",
      "resume.h.exp": "{years}+ years of experience in development and architecture",
      "resume.h.cert": "Current focus: Microsoft certifications in architecture and AI",

      "contact.title": "Contact",
      "contact.lead": "Want to talk about your next project or opportunity? I'm available.",

      "footer.built": "Built with HTML, CSS and Bootstrap"
    }
  };

  const STORAGE_KEY = "preferredLang";
  const SUPPORTED = Object.keys(DICT);
  const DEFAULT_LANG = "pt-BR";

  let current = DEFAULT_LANG;

  function resolveInitialLang() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved && SUPPORTED.includes(saved)) return saved;
    const nav = (navigator.language || "").toLowerCase();
    if (nav.startsWith("pt")) return "pt-BR";
    if (nav.startsWith("en")) return "en";
    return DEFAULT_LANG;
  }

  // Início da experiência profissional (estágio na Link do Brasil): jul/2013.
  // Usado para calcular dinamicamente os "anos de experiência".
  const EXP_START = Date.UTC(2013, 6, 1); // mês 6 = julho
  function yearsExp() {
    return Math.floor((Date.now() - EXP_START) / (365.25 * 24 * 3600 * 1000));
  }

  function get(key) {
    const table = DICT[current] || DICT[DEFAULT_LANG];
    return Object.prototype.hasOwnProperty.call(table, key) ? table[key] : null;
  }

  // Substitui tokens dinâmicos (ex.: {years}) nas strings traduzidas.
  function subst(value) {
    return value.replace(/\{years\}/g, String(yearsExp()));
  }

  function applyTranslations() {
    // Textos
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const value = get(el.getAttribute("data-i18n"));
      if (typeof value === "string") el.textContent = subst(value);
    });

    // Atributos: data-i18n-attr="attr:key[, attr2:key2]"
    document.querySelectorAll("[data-i18n-attr]").forEach((el) => {
      el.getAttribute("data-i18n-attr").split(",").forEach((pair) => {
        const [attr, key] = pair.split(":").map((s) => s.trim());
        const value = get(key);
        if (attr && typeof value === "string") el.setAttribute(attr, value);
      });
    });

    // <title> e meta description (também marcados com data-i18n, mas garantimos title/lang)
    const title = get("meta.title");
    if (title) document.title = title;
    const desc = get("meta.description");
    if (desc) {
      const m = document.querySelector('meta[name="description"]');
      if (m) m.setAttribute("content", desc);
    }
    document.documentElement.lang = current;
  }

  function setActiveButtons() {
    document.querySelectorAll(".lang-btn").forEach((btn) => {
      const on = btn.getAttribute("data-lang") === current;
      btn.classList.toggle("active", on);
      btn.setAttribute("aria-pressed", String(on));
    });
  }

  function setLang(lang) {
    if (!SUPPORTED.includes(lang)) return;
    current = lang;
    localStorage.setItem(STORAGE_KEY, lang);
    applyTranslations();
    setActiveButtons();
    document.dispatchEvent(new CustomEvent("langchange", { detail: { lang } }));
  }

  // API pública mínima para o main.js
  window.i18n = {
    get,
    setLang,
    current: () => current,
    supported: SUPPORTED,
    years: yearsExp
  };

  // Inicialização (defer garante DOM pronto)
  current = resolveInitialLang();
  applyTranslations();
  setActiveButtons();

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => setLang(btn.getAttribute("data-lang")));
  });
})();
