/**
 * GeoCODE Programmer — script.js
 * Inspirado na estrutura do Alfama Web — alfamaweb.com.br
 * Vanilla JS ES6+ · Modular · Performático
 * Author: Geovani Santos
 */

'use strict';

/* ════════════════════════════════════════════════════════════════
   01. UTILITÁRIOS
   ════════════════════════════════════════════════════════════════ */

const qs = (sel, ctx = document) => ctx.querySelector(sel);
const qsa = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

/* ════════════════════════════════════════════════════════════════
   02. ANO ATUAL NO FOOTER
   ════════════════════════════════════════════════════════════════ */

function initCurrentYear() {
  const el = qs('#anoAtual');
  if (el) el.textContent = new Date().getFullYear();
}

/* ════════════════════════════════════════════════════════════════
   03. NAVEGAÇÃO MOBILE (menu hambúrguer)
   ════════════════════════════════════════════════════════════════ */

function initMobileNav() {
  const toggle = qs('#menuToggle');
  const navLinks = qs('#navLinks');

  if (!toggle || !navLinks) return;

  function openMenu() {
    navLinks.classList.add('is-open');
    toggle.classList.add('is-open');
    toggle.setAttribute('aria-expanded', 'true');
    toggle.setAttribute('aria-label', 'Fechar menu');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    navLinks.classList.remove('is-open');
    toggle.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Abrir menu');
    document.body.style.overflow = '';
  }

  function toggleMenu() {
    navLinks.classList.contains('is-open') ? closeMenu() : openMenu();
  }

  toggle.addEventListener('click', toggleMenu);

  qsa('a[href^="#"]', navLinks).forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('click', (e) => {
    if (
      navLinks.classList.contains('is-open') &&
      !navLinks.contains(e.target) &&
      !toggle.contains(e.target)
    ) closeMenu();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navLinks.classList.contains('is-open')) closeMenu();
  });
}

/* ════════════════════════════════════════════════════════════════
   04. HEADER — SCROLL BEHAVIOR
   ════════════════════════════════════════════════════════════════ */

function initHeaderScroll() {
  const header = qs('#site-header');
  if (!header) return;

  let rafId = null;

  function updateHeader() {
    rafId = null;
    header.classList.toggle('scrolled', window.scrollY > 60);
  }

  window.addEventListener('scroll', () => {
    if (!rafId) rafId = requestAnimationFrame(updateHeader);
  }, { passive: true });

  updateHeader();
}

/* ════════════════════════════════════════════════════════════════
   05. SMOOTH SCROLL PARA ÂNCORAS
   ════════════════════════════════════════════════════════════════ */

function initSmoothScroll() {
  const headerHeight = qs('#site-header')?.offsetHeight ?? 72;

  qsa('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const href = anchor.getAttribute('href');
      const target = qs(href);
      if (!target) return;

      e.preventDefault();

      const top = target.getBoundingClientRect().top + window.scrollY - headerHeight;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });
}

/* ════════════════════════════════════════════════════════════════
   06. SCROLL REVEAL — IntersectionObserver
   ════════════════════════════════════════════════════════════════ */

function initScrollReveal() {
  const elements = qsa('.reveal');
  if (!elements.length) return;

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    elements.forEach(el => el.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
  );

  elements.forEach(el => observer.observe(el));
}

/* ════════════════════════════════════════════════════════════════
   07. CONTADOR ANIMADO NAS ESTATÍSTICAS DO HERO
   ════════════════════════════════════════════════════════════════ */

function initCounters() {
  const counters = qsa('[data-count]');
  if (!counters.length) return;

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    counters.forEach(el => { el.textContent = el.dataset.count; });
    return;
  }

  function animateCount(el, target, duration = 1800) {
    const start = performance.now();
    const easeOut = t => 1 - Math.pow(1 - t, 3);

    function step(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      el.textContent = Math.round(easeOut(progress) * target);
      if (progress < 1) requestAnimationFrame(step);
    }

    requestAnimationFrame(step);
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = parseInt(el.dataset.count, 10);
          animateCount(el, target);
          observer.unobserve(el);
        }
      });
    },
    { threshold: 0.5 }
  );

  counters.forEach(el => observer.observe(el));
}

/* ════════════════════════════════════════════════════════════════
   08. ACTIVE NAV LINK — SCROLLSPY
   ════════════════════════════════════════════════════════════════ */

function initScrollspy() {
  const navLinks = qsa('.nav-link');
  const sections = qsa('section[id]');

  if (!navLinks.length || !sections.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;

        const id = entry.target.getAttribute('id');

        navLinks.forEach(link => {
          link.classList.toggle(
            'is-active',
            link.getAttribute('href') === `#${id}`
          );
        });
      });
    },
    { rootMargin: '-40% 0px -55% 0px' }
  );

  sections.forEach(sec => observer.observe(sec));
}

/* ════════════════════════════════════════════════════════════════
   09. FILTRO DE PORTFÓLIO — inspirado no Alfama Web
   ════════════════════════════════════════════════════════════════ */

function initPortfolioFilter() {
  const filterBtns = qsa('.filter-btn');
  const cards = qsa('.project-card');

  if (!filterBtns.length || !cards.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.dataset.filter;

      // Atualiza botão ativo
      filterBtns.forEach(b => {
        b.classList.remove('is-active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('is-active');
      btn.setAttribute('aria-selected', 'true');

      // Filtra os cards com animação suave
      cards.forEach(card => {
        const category = card.dataset.category;
        const show = filter === 'all' || category === filter;

        if (show) {
          card.classList.remove('is-hidden');
          // Re-trigger reveal se ainda não visível
          requestAnimationFrame(() => {
            if (!card.classList.contains('is-visible')) {
              card.classList.add('is-visible');
            }
          });
        } else {
          card.classList.add('is-hidden');
        }
      });
    });
  });
}

/* ════════════════════════════════════════════════════════════════
   10. INICIALIZAÇÃO
   ════════════════════════════════════════════════════════════════ */

function init() {
  initCurrentYear();
  initMobileNav();
  initHeaderScroll();
  initSmoothScroll();
  initScrollReveal();
  initCounters();
  initScrollspy();
  initPortfolioFilter();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}