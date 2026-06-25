/* ============================================================
   Interações do site — navegação, ano, efeito de digitação.
   Vanilla JS, depende do i18n.js (carregado antes).
   ============================================================ */
(function () {
  "use strict";

  /* ---------- Ano no rodapé ---------- */
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  const sidebar = document.getElementById("sidebar");
  function hideSidebar() {
    const oc = window.bootstrap && bootstrap.Offcanvas.getInstance(sidebar);
    if (oc) oc.hide();
  }

  /* ---------- Baixar CV: link do PDF conforme o idioma ativo ---------- */
  const downloadCv = document.getElementById("downloadCv");
  function updateCvLink() {
    if (!downloadCv) return;
    const lang = (window.i18n && window.i18n.current()) || "pt-BR";
    const href = lang === "en"
      ? downloadCv.getAttribute("data-cv-en")
      : downloadCv.getAttribute("data-cv-pt");
    if (href) downloadCv.setAttribute("href", href);
  }
  updateCvLink();
  document.addEventListener("langchange", updateCvLink);

  /* ---------- Imprimir: usa o layout @media print do navegador ---------- */
  const printBtn = document.getElementById("printCv");
  if (printBtn) {
    printBtn.addEventListener("click", () => {
      hideSidebar();          // fecha o menu mobile antes de imprimir
      window.print();
    });
  }

  /* ---------- Fecha o offcanvas ao clicar num link (mobile) ---------- */
  if (sidebar) {
    sidebar.querySelectorAll(".side-nav .nav-link").forEach((link) => {
      link.addEventListener("click", hideSidebar);
    });
  }

  /* ---------- Efeito de digitação (typed) ---------- */
  const typedEl = document.getElementById("typed");
  let typedTimer = null;

  function getRoles() {
    const roles = window.i18n && window.i18n.get("home.typedRoles");
    return Array.isArray(roles) && roles.length ? roles : ["Software Engineer"];
  }

  function startTyped() {
    if (!typedEl) return;
    if (typedTimer) clearTimeout(typedTimer);

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const roles = getRoles();

    if (reduce) {                 // sem animação: mostra o primeiro papel
      typedEl.textContent = roles[0];
      return;
    }

    let r = 0, c = 0, deleting = false;

    function tick() {
      const word = roles[r];
      typedEl.textContent = word.slice(0, c);

      if (!deleting && c < word.length) {
        c++;
        typedTimer = setTimeout(tick, 90);
      } else if (!deleting && c === word.length) {
        deleting = true;
        typedTimer = setTimeout(tick, 1600);          // pausa no fim
      } else if (deleting && c > 0) {
        c--;
        typedTimer = setTimeout(tick, 45);
      } else {
        deleting = false;
        r = (r + 1) % roles.length;
        typedTimer = setTimeout(tick, 250);
      }
    }
    tick();
  }

  startTyped();

  // Reinicia o efeito quando o idioma muda
  document.addEventListener("langchange", startTyped);

  /* ---------- Scroll-reveal: entrada animada das seções/itens ---------- */
  (function setupReveal() {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !("IntersectionObserver" in window)) return;

    document.querySelectorAll(".section-head, .about-text, .stats")
      .forEach((el) => el.classList.add("reveal"));

    [".service-card", ".timeline-item", ".skill-group", ".highlights li", ".contact-card"]
      .forEach((sel) => {
        document.querySelectorAll(sel).forEach((el) => {
          const sibs = Array.from(el.parentElement.children).filter((c) => c.matches(sel));
          el.classList.add("reveal");
          el.style.animationDelay = Math.min(sibs.indexOf(el), 6) * 70 + "ms";
        });
      });

    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        const el = e.target;
        el.classList.add("is-visible");
        el.addEventListener("animationend", () => {
          el.classList.remove("reveal", "is-visible");
          el.style.animationDelay = "";
        }, { once: true });
        io.unobserve(el);
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });

    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
  })();

  /* ---------- Contadores: números que sobem ao aparecer ---------- */
  (function setupCounters() {
    const nums = document.querySelectorAll(".stat-num[data-count], .stat-num[data-years]");
    if (!nums.length) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const target = (el) => el.hasAttribute("data-years")
      ? ((window.i18n && window.i18n.years && window.i18n.years()) || 0)
      : (parseInt(el.dataset.count, 10) || 0);

    function render(el, value) {
      const lang = (window.i18n && window.i18n.current()) || "pt-BR";
      el.textContent = Number(value).toLocaleString(lang) + (el.dataset.suffix || "");
    }

    // Reformata (separador de milhar) ao trocar de idioma
    document.addEventListener("langchange", () => nums.forEach((el) => render(el, target(el))));

    if (reduce || !("IntersectionObserver" in window)) {
      nums.forEach((el) => render(el, target(el)));
      return;
    }

    nums.forEach((el) => render(el, 0));

    function animate(el) {
      const end = target(el), dur = 1200, start = performance.now();
      (function frame(now) {
        const p = Math.min((now - start) / dur, 1);
        render(el, Math.round(end * (1 - Math.pow(1 - p, 3))));
        if (p < 1) requestAnimationFrame(frame);
        else render(el, end);
      })(start);
    }

    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        animate(e.target);
        io.unobserve(e.target);
      });
    }, { threshold: 0.4 });

    nums.forEach((el) => io.observe(el));
  })();
})();
