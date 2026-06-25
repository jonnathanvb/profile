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
      "about.p1": "Engenheiro de Software com mais de {years} anos de experiência no desenvolvimento e arquitetura de soluções com foco em .NET e C#. Atuei desde o desenvolvimento full stack até a definição de arquitetura de sistemas centralizados e distribuídos, com passagem por startups e empresas de tecnologia no Brasil e em Portugal.",
      "about.p2": "Ao longo da carreira, desenvolvi expertise em domínios técnicos exigentes. Um dos marcos mais relevantes foi a implementação de sistemas de integração fiscal no Brasil, com foco em NFC-e (Nota Fiscal do Consumidor Eletrônica) — um domínio que exige precisão técnica, profundo conhecimento de legislação tributária e integração com SEFAZ, certificados digitais e regras fiscais estaduais. Essa experiência me fez desenvolver uma atenção redobrada à confiabilidade, conformidade e tratamento de falhas em sistemas críticos.",
      "about.p3": "Tenho sólida experiência em back-end com C# e .NET, front-end com Angular, integração de APIs REST, implementação de SSO com KeyCloak, automação de infraestrutura com Terraform e pipelines de CI/CD. Na nuvem, trabalho com Microsoft Azure com foco em arquitetura de soluções.",
      "about.p4": "Como Arquiteto de Soluções, fui responsável por decisões estratégicas: definição de arquitetura, escolha de stack, governança técnica, avaliação de riscos e suporte às equipes de desenvolvimento — sempre com foco em qualidade, desempenho e alinhamento com os objetivos do negócio.",
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

      "resume.r.genesis.title": "Desenvolvedor Full Stack",
      "resume.r.genesis.desc": "Back-end .NET (C#) e front-end (Angular, Vue), Infraestrutura como Código (IaC/Terraform), CI/CD e Azure (Web Apps, Functions, Storage, Service Bus, Database, VM).",
      "resume.r.freela.title": "Desenvolvedor de Software",
      "resume.r.freela.desc": "Desenvolvimento de um sistema de SSO (Single Sign-On) baseado em Keycloak.",
      "resume.r.linked.a.title": "Arquiteto de Soluções",
      "resume.r.linked.a.desc": "Arquitetura de uma plataforma de PDV/food-service em microsserviços .NET (Clean Architecture e CQRS), com bibliotecas compartilhadas (NuGet) e persistência poliglota (SQL Server, Redis, CouchDB e SQLite offline). Mensageria com Azure Service Bus, módulos em tempo real (KDS via Socket.IO) e integração fiscal (SEFAZ/NFCe, SAT) e de periféricos. Responsável por padrões técnicos, governança, revisão de código, infraestrutura Azure (Azure Container Apps) com CI/CD e mentoria do time.",
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
      "about.p1": "Software Engineer with over {years} years of experience in software development and solutions architecture, focused on .NET and C#. I have worked from full stack development to defining the architecture of centralized and distributed systems, with experience at startups and technology companies in Brazil and Portugal.",
      "about.p2": "Throughout my career, I have developed expertise in demanding technical domains. One of the most significant milestones was implementing fiscal integration systems in Brazil, focused on NFC-e (Brazil's electronic consumer invoice) — a domain that requires technical precision, deep knowledge of tax legislation and integration with SEFAZ, digital certificates and state-level tax rules. This experience gave me heightened attention to reliability, compliance and fault handling in critical systems.",
      "about.p3": "I have solid experience in back-end with C# and .NET, front-end with Angular, REST API integration, SSO implementation with Keycloak, infrastructure automation with Terraform and CI/CD pipelines. In the cloud, I work with Microsoft Azure focused on solutions architecture.",
      "about.p4": "As a Solutions Architect, I was responsible for strategic decisions: architecture definition, stack selection, technical governance, risk assessment and support to development teams — always focused on quality, performance and alignment with business goals.",
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

      "resume.r.genesis.title": "Full Stack Developer",
      "resume.r.genesis.desc": "Back-end .NET (C#) and front-end (Angular, Vue), Infrastructure as Code (IaC/Terraform), CI/CD and Azure (Web Apps, Functions, Storage, Service Bus, Database, VM).",
      "resume.r.freela.title": "Software Developer",
      "resume.r.freela.desc": "Development of a Single Sign-On (SSO) system based on Keycloak.",
      "resume.r.linked.a.title": "Solutions Architect",
      "resume.r.linked.a.desc": "Architecture of a POS/food-service platform built as .NET microservices (Clean Architecture and CQRS), with shared NuGet libraries and polyglot persistence (SQL Server, Redis, CouchDB and offline SQLite). Azure Service Bus messaging, real-time modules (KDS over Socket.IO) and fiscal (SEFAZ/NFCe, SAT) and peripheral integrations. Owned technical standards, governance, code review, Azure infrastructure (Azure Container Apps) with CI/CD and team mentoring.",
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
