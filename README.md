# GeoCODE Programmer — Portfolio & Catálogo de Serviços

<div align="center">

![Version](https://img.shields.io/badge/versão-v2.3.0-34D1B7?style=for-the-badge&labelColor=0D1520)
![Status](https://img.shields.io/badge/status-production-brightgreen?style=for-the-badge&labelColor=0D1520)
![Stack](https://img.shields.io/badge/stack-Vanilla%20JS%20%2B%20Firebase-FF5E00?style=for-the-badge&labelColor=0D1520)
![Deploy](https://img.shields.io/badge/deploy-Vercel-black?style=for-the-badge&logo=vercel&labelColor=0D1520)
![License](https://img.shields.io/badge/licença-proprietária-6B8CA8?style=for-the-badge&labelColor=0D1520)

**Site institucional e catálogo comercial da GeoCODE Programmer.**  
Desenvolvido inteiramente em Vanilla JS sobre Linux, sem frameworks ou dependências de build.

[🌐 Acessar o site](https://geocodeprogrammer.vercel.app) · [💬 WhatsApp](https://wa.me/+5579988663905) · [📦 Catálogo](https://geocodeprogrammer.vercel.app/catalogo.html)

</div>

---

## Sumário

- [Visão Geral](#visão-geral)
- [Versão e Histórico](#versão-e-histórico)
- [Arquitetura e Estrutura de Arquivos](#arquitetura-e-estrutura-de-arquivos)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Features Ativas](#features-ativas)
  - [index.html — Portfolio Principal](#indexhtml--portfolio-principal)
  - [catalogo.html — Marketplace de Serviços](#catalogohtml--marketplace-de-serviços)
  - [privacidade.html — Política de Privacidade](#privacidadehtml--política-de-privacidade)
  - [termos.html — Termos de Uso](#termoshtml--termos-de-uso)
- [Design System](#design-system)
- [Infraestrutura e Deploy](#infraestrutura-e-deploy)
- [LGPD & Documentação Legal](#lgpd--documentação-legal)
- [Avaliação de Maturidade](#avaliação-de-maturidade)
- [Roadmap de Melhorias](#roadmap-de-melhorias)
- [Autor](#autor)

---

## Visão Geral

O **GeoCODE Programmer** é o site institucional e canal comercial de **Geovani Santos**, desenvolvedor web freelance baseado em **Aracaju, Sergipe**. O projeto opera como uma plataforma completa de apresentação de serviços, catalogação de produtos digitais e captação de leads qualificados via WhatsApp.

O escopo abrange quatro páginas interligadas:

| Arquivo | Função | Complexidade |
|---|---|---|
| `index.html` | Portfolio, hero, soluções com drawer, stack, sobre, CTA | ★★★★★ |
| `catalogo.html` | Marketplace filtrável com 8 serviços detalhados | ★★★★☆ |
| `privacidade.html` | Política de Privacidade LGPD com sidebar de navegação | ★★★☆☆ |
| `termos.html` | Termos de Uso com sidebar de navegação interativa | ★★★☆☆ |

O projeto é **100% serverless**, operando exclusivamente sobre o **free tier** de Vercel, Firebase e Cloudinary. O único custo fixo de terceiros é o domínio próprio (~R$ 40/ano).

---

## Versão e Histórico

```
v2.3.0 — Jun 2025  (atual)
  + Reestruturação completa do layout seguindo padrão de duas colunas (Desight-inspired)
  + catalogo.html: nova página marketplace com filtro por categoria e 8 cards detalhados
  + privacidade.html e termos.html: redesign com sidebar sticky + scrollspy ativo
  + Design system unificado em CSS custom properties compartilhadas entre os 4 arquivos
  + Accordion de serviços substituindo drawer apenas no index reestruturado
  + Mobile nav isolado fora do header (fix: backdrop-filter stacking context)

v2.2.0 — Mai 2025
  + Seção Soluções: grid 3×3 de mini-cards com sistema de drawers (9 serviços + 4 combos)
  + Seção Stack: categorias agrupadas (Front-end, Cloud, Ferramentas, Libs)
  + Hero two-column com foto, badges flutuantes e animated counters
  + Scrollspy de navegação via IntersectionObserver

v2.1.0 — Abr 2025
  + Geração e publicação de privacidade.html e termos.html (LGPD-compliant)
  + Footer compacto 4 colunas em todos os arquivos
  + Web App Manifest inline para suporte a PWA básico

v2.0.0 — Mar 2025
  + Redesign completo da identidade visual (paleta escura: #0D1520 + mint + orange)
  + Fontes Syne + Figtree + JetBrains Mono
  + Scroll reveal com IntersectionObserver + prefers-reduced-motion
  + Header fixo com glassmorphism + estado .scrolled

v1.x.x — 2021–2024
  Layout original. Seções básicas de apresentação sem sistema de drawers ou catálogo.
```

---

## Arquitetura e Estrutura de Arquivos

```
geocodeprogrammer/
│
├── index.html              # Página principal (portfolio + soluções + stack + sobre)
│
└── pages/
    ├── valores.html           # 
    ├── privacidade.html        # Política de Privacidade (LGPD)
    ├── termos.html             # Termos de Uso
    ├── suporte.html             # 
└── assets/
    ├── ui/
    │   ├── geovani.jpg         # Foto do desenvolvedor (hero)
    │   ├── favicon.ico
    │   ├── favicon.svg
    │   ├── favicon-96x96.png
    │   └── apple-touch-icon.png
    └── logos/
        ├── psimf.png           # Logo cliente: Psicóloga Meire França
        └── ff193.png           # Logo cliente: Fundação Fênix 193
```

> **Filosofia arquitetural:** cada página é um arquivo HTML autocontido — CSS inline via `<style>` e JavaScript via `<script>` no final do body. Zero arquivos externos de estilo ou script próprios. Sem bundler, sem transpilador, sem framework.

---

## Tecnologias Utilizadas

### Front-end

| Tecnologia | Versão | Uso |
|---|---|---|
| **HTML5** | — | Semântica, SEO, acessibilidade (`aria-*`) |
| **CSS3** | — | Custom Properties, Grid, Flexbox, `clamp()`, `mask-image`, animations |
| **JavaScript** | ES6+ | Vanilla, sem transpilação — IntersectionObserver, async/await |

### Cloud & Infraestrutura

| Serviço | Plano | Uso |
|---|---|---|
| **Vercel** | Free | Hospedagem, CDN global, SSL automático, deploy via GitHub |
| **Firebase** | Spark (Free) | Firestore (banco de dados), Authentication, Storage |
| **Cloudinary** | Free | CDN e otimização de imagens/mídias |
| **Google APIs** | Free tier | Fonts, Maps, Calendar, Workspace, Search Console |
| **OpenWeatherMap** | Free | Clima em tempo real (Digital Signage) |

### Bibliotecas CDN (carregadas nos projetos clientes)

| Biblioteca | Uso |
|---|---|
| **Font Awesome 6.5** | Ícones em todo o projeto |
| **Chart.js** | Gráficos interativos (dashboards Akanni) |
| **jsPDF** | Geração de relatórios em PDF |
| **QRCode.js** | Geração de QR Code e integração PIX |
| **Swiper.js** | Carrosséis touch-friendly |
| **Cloudflare** | DNS, CDN e segurança |

### Ambiente de Desenvolvimento

| Ferramenta | Detalhe |
|---|---|
| **Sistema Operacional** | Linux — Ubuntu & Mint (100%) |
| **Controle de versão** | GitHub |
| **Editor** | VS Code / Cursor (Linux) |
| **Deploy pipeline** | Push to main → Vercel auto-deploy |

---

## Features Ativas

### `index.html` — Portfolio Principal

#### Header & Navegação
- **Header fixo glassmorphism** com `backdrop-filter: blur(20px)` e transição de estado `.scrolled` ao scroll
- **Nav desktop** em grid de 3 colunas (logo · links centrais · CTA laranja)
- **Nav mobile full-screen** isolada fora do `<header>` para evitar conflito de stacking context com `backdrop-filter` — solução arquitetural para bug documentado de CSS
- **Hamburger animado** com transição de ícone (≡ → ✕) via CSS puro
- **Scrollspy** via `IntersectionObserver` — destaca o link ativo conforme seção visível
- Fecha o menu ao clicar em qualquer link ou pressionar `Escape`

#### Hero
- Layout two-column: coluna de texto + coluna de foto
- **Animated counters** com easing cúbico (`1 - (1-t)³`) disparados por `IntersectionObserver`
- Foto com bordas arredondadas, glow gradiente e **2 badges flutuantes** sobrepostos
- Eyebrow pulsante via `@keyframes pulse-dot`
- Grid decorativo de fundo com `mask-image` radial
- Glow blobs posicionados com `radial-gradient`

#### Seção Soluções (Sistema de Drawers)
- **9 mini-cards de serviços** em grid responsivo (3 colunas desktop / 2 tablet / 1 mobile):
  - Landing Page · Site Institucional · Loja Virtual · AkanniMED · AkanniHUB · Micro-Site · Blog/Portal · SEO & Google Meu Negócio · Digital Signage
- **4 mini-cards de combos** com descontos agrupados:
  - Combo Essencial · Combo de Vendas · Combo Clínico · Combo Enterprise
- **Sistema de Drawer lateral** completo:
  - Abertura/fechamento via `data-drawer` attribute
  - Overlay com bloqueio de scroll do body (`drawer-open` class)
  - Suporte a múltiplos drawers com fechamento do anterior ao abrir novo
  - Fechar via botão ✕, clique no overlay ou tecla `Escape`
  - Animação de slide-in via CSS `transform: translateX()`
  - Cada drawer contém: ícone · título · tag · descrição · preço setup · mensalidade · lista de features · prazo · CTA WhatsApp com texto pré-preenchido

#### Seção Stack
- **Categorias agrupadas:** Front-end · Cloud & Infra · Ferramentas · Bibliotecas JS · SO
- Grid responsivo com `auto-fit minmax(155px, 1fr)`
- Hover com `translateY(-4px)` e glow colorido por categoria via `--item-glow` CSS variable

#### Seção Sobre
- Card de perfil com avatar, nome, cargo, localização e tags de tecnologia
- Texto biográfico em duas colunas no desktop
- CTA WhatsApp integrado

#### Seção Clientes
- Logos de clientes reais com link para os projetos publicados
- Filtro `grayscale(1)` com transição para cores no hover

#### Footer
- Grid 4 colunas: Brand + Soluções + Navegação + Contato
- Redes sociais: Instagram, LinkedIn, E-mail
- Links legais: Privacidade · Termos
- Rodapé com ano dinâmico (`new Date().getFullYear()`)

#### Comportamentos Globais
- **Scroll reveal** com `IntersectionObserver` e stagger delays (`d1`–`d5`)
- Respeita `prefers-reduced-motion` — desativa animações para usuários sensíveis
- **Smooth scroll** com offset dinâmico baseado na altura real do header
- **WhatsApp float** fixo no canto inferior direito
- `'use strict'` em todo o JavaScript

---

### `catalogo.html` — Marketplace de Serviços

- **Filter bar sticky** (abaixo do header) com 6 chips de categoria:
  - Todos · Sites · Sistemas · Digital Signage · Marketing · E-commerce
- **8 cards de serviço completos** com:
  - Banner visual com background gradient exclusivo por serviço
  - Ícone decorativo gigante semitransparente
  - Badge de categoria com cor temática
  - Nome + tagline + descrição detalhada
  - Lista de 6 features com ícone colorido
  - Meta-row: prazo estimado · tecnologia · característica principal
  - Bloco de preço: setup + mensalidade com destaque tipográfico
  - CTA WhatsApp com mensagem pré-preenchida específica por serviço
- **Lógica de filtro JS:** `data-cat` attribute + toggle de classe `.hidden` + empty state automático
- **Seção "Como funciona":** timeline de 5 etapas + grid de 6 diferenciais competitivos
- **CTA final** com referência ao catálogo no texto da mensagem WhatsApp

---

### `privacidade.html` — Política de Privacidade

- **8 seções temáticas** numeradas: Compromissos · Dados Coletados · Base Legal · Direitos LGPD · Compartilhamento · Retenção · Segurança · DPO/Contato
- **Sidebar de navegação sticky** com scrollspy ativo (highlight da seção em leitura)
- **Banners informativos** diferenciados: info (mint) e alerta (laranja)
- **Cards de retenção** com valores por tipo de dado (5 anos · 12 meses · até revogação · 6 meses)
- Conformidade integral com **Lei nº 13.709/2018 (LGPD)**
- Card de contato DPO com links diretos para e-mail e WhatsApp
- Listagem de subprocessadores: Vercel · Firebase · GitHub · Cloudinary · Google Workspace

---

### `termos.html` — Termos de Uso

- **9 seções temáticas** numeradas: Aceitação · Obrigações do Contratante · Obrigações da GeoCODE · PI · SLA · Pagamentos · Responsabilidade · Atualizações · Suporte/Foro
- Mesmo sistema de sidebar + scrollspy da privacidade, com cor de destaque laranja
- **Cronograma de pagamento** 30/30/40% visualizado como steps verticais
- **Fluxo de atualizações** do sistema em 4 etapas visuais
- Infobanner sobre Digital Signage e responsabilidade de infraestrutura local
- Foro eleito: **Comarca de Aracaju/SE**
- Version bar com versão, data de vigência e data de revisão

---

## Design System

Todas as 4 páginas compartilham o mesmo sistema de tokens CSS:

```css
:root {
  /* Backgrounds */
  --bg:        #0D1520;   /* Background principal */
  --surface:   #131F30;   /* Cards, seções alternadas */
  --surface-2: #1C2B40;   /* Hover states, inputs */

  /* Bordas */
  --border:    rgba(100,160,190,.14);  /* Default */
  --border-h:  rgba(52,209,183,.32);   /* Hover / ativo */

  /* Cores de marca */
  --mint:   #34D1B7;   /* Primária — CTA, links, destaques */
  --steel:  #75A7BD;   /* Secundária — subtítulos, meta */
  --orange: #FF5E00;   /* Accent — botões primários, alertas */

  /* Tipografia */
  --text:      #F0F6FA;   /* Títulos e textos principais */
  --text-soft: #C8D8E8;   /* Parágrafos */
  --muted:     #6B8CA8;   /* Labels, metadados */

  /* Gradientes */
  --grad:   linear-gradient(135deg, #75A7BD 0%, #34D1B7 100%);
  --grad-o: linear-gradient(135deg, #FF5E00 0%, #FF8C42 100%);

  /* Tipografia */
  --font-h: 'Syne', sans-serif;          /* Títulos — display weight 800 */
  --font-b: 'Figtree', sans-serif;       /* Body — weights 300–600 */
  --font-m: 'JetBrains Mono', monospace; /* Código, labels, meta */

  /* Border-radius */
  --r:    12px;
  --r-lg: 20px;
  --r-xl: 28px;
  --r-pill: 999px;

  /* Motion */
  --ease: cubic-bezier(.16,1,.3,1);
  --dur:  320ms;
}
```

### Padrões de Componentes

| Componente | Implementação |
|---|---|
| Scroll reveal | `.rv` + `.on` via `IntersectionObserver` · delays `.d1`–`.d5` |
| Animated counters | `data-count` attr + RAF loop com cubic easing |
| Scrollspy | `IntersectionObserver` com `rootMargin: "-40% 0px -55% 0px"` |
| Smooth scroll | `getBoundingClientRect()` + offset dinâmico do header |
| Glassmorphism | `backdrop-filter: blur(20px)` + `rgba()` background |
| Grid responsivo | `repeat(auto-fit, minmax(min(100%, Xpx), 1fr))` |
| Fluid typography | `clamp(min, preferred, max)` em todos os títulos |

---

## Infraestrutura e Deploy

```
GitHub (main branch)
       │
       ▼ push automático
    Vercel
       │
       ├── CDN global (edge network)
       ├── SSL automático (Let's Encrypt)
       ├── Preview URLs por branch
       └── geocodeprogrammer.vercel.app
```

**Requisitos de runtime:** zero. O projeto não requer Node.js, Python, banco de dados local ou qualquer servidor. É HTML estático puro servido via CDN.

**Custos de infraestrutura:**

| Serviço | Custo |
|---|---|
| Vercel (hospedagem + SSL + CDN) | R$ 0/mês |
| Firebase Spark (Firestore + Auth + Storage) | R$ 0/mês |
| Cloudinary (mídias) | R$ 0/mês |
| Google APIs (Fonts, Maps, etc.) | R$ 0/mês |
| **Domínio próprio** | **~R$ 40/ano** |
| **Total mensal** | **~R$ 3,30/mês** |

---

## LGPD & Documentação Legal

O projeto conta com documentação legal completa e em conformidade com a **Lei Geral de Proteção de Dados (Lei nº 13.709/2018)**:

| Documento | Seções | Última revisão |
|---|---|---|
| `privacidade.html` | 8 seções (Compromissos, Dados, Base Legal, Direitos, Compartilhamento, Retenção, Segurança, DPO) | Jan 2025 |
| `termos.html` | 9 seções (Aceitação, Obrigações, PI, SLA, Pagamento, Responsabilidade, Atualizações, Foro) | Jan 2025 |

**Encarregado de Dados (DPO):** Geovani Santos — geocodeprogrammer@gmail.com  
**Foro eleito:** Comarca de Aracaju/SE  
**Prazo de resposta a titulares:** 30 dias corridos (conforme LGPD Art. 18)

---

## Avaliação de Maturidade

### Pontos Fortes

```
✅ Zero dependências de build — sem vulnerabilidades de supply chain
✅ Performance nativa — sem overhead de framework
✅ Acessibilidade: aria-*, roles, aria-modal, aria-expanded implementados
✅ prefers-reduced-motion respeitado em todas as animações
✅ Design system coeso com CSS custom properties compartilhadas
✅ Código JavaScript em strict mode ('use strict')
✅ Sem memory leaks: observers desconectados após uso (obs.unobserve)
✅ Mobile-first com breakpoints bem definidos (860px, 600px, 480px, 380px)
✅ HTML semântico: <header>, <main>, <footer>, <section>, <aside>, <article>
✅ Meta tags OG completas para compartilhamento social
✅ PWA básico: Web App Manifest inline com theme-color
✅ SSL, CDN e deploy automatizado via Vercel
✅ LGPD compliant com documentação legal publicada
✅ Clamp() fluid — sem media queries quebradas para tipografia/espaçamento
```

### Limitações Identificadas

```
⚠️  CSS e JS inline — dificulta cache de assets entre páginas
⚠️  Sem sistema de testes automatizados (unit, E2E)
⚠️  Firebase config não visível nos arquivos analisados — assumido em projetos clientes
⚠️  Sem formulário de contato nativo — 100% dependente de WhatsApp externo
⚠️  Sem analytics embutido (Google Analytics / Plausible)
⚠️  PWA sem Service Worker real — não funciona offline
⚠️  Sem sitemap.xml ou robots.txt explicitado nos arquivos analisados
```

### Classificação de Maturidade

| Dimensão | Nível | Nota |
|---|---|---|
| Qualidade de código | Profissional | ★★★★☆ |
| Design e UX | Alta | ★★★★★ |
| Performance técnica | Alta | ★★★★☆ |
| Acessibilidade | Intermediária | ★★★☆☆ |
| SEO on-page | Básico | ★★★☆☆ |
| Documentação (este README) | Alta | ★★★★★ |
| Cobertura de testes | Nenhuma | ★☆☆☆☆ |
| Maturidade global | **Produção estável** | **★★★★☆** |

---

## Roadmap de Melhorias

As recomendações abaixo estão ordenadas por impacto estimado no negócio e viabilidade técnica dentro do stack atual.

### 🔴 Alta Prioridade

#### v2.4.0 — Formulário de Contato Nativo
Substituir ou complementar o CTA de WhatsApp com um formulário HTML integrado ao **Firebase Firestore** ou **EmailJS**. Permite capturar leads mesmo quando o usuário não tem WhatsApp instalado no dispositivo e gera um histórico consultável de orçamentos recebidos.

#### v2.4.0 — Analytics e Rastreamento
Implementar **Google Analytics 4** ou **Plausible Analytics** (mais leve e sem cookies de terceiros). Essencial para medir taxa de conversão dos CTAs, origem do tráfego e páginas com maior engajamento. Sem dados, não há base para decisões de melhoria.

#### v2.5.0 — SEO Estrutural
- Adicionar `sitemap.xml` e `robots.txt`
- Implementar **Schema.org** (JSON-LD) para `LocalBusiness`, `Service` e `Person`
- Meta tags `canonical` e `hreflang` se houver versão em inglês futura
- Open Graph images com dimensões corretas (1200×630px)

---

### 🟡 Média Prioridade

#### v2.5.0 — Service Worker (PWA Real)
Implementar um Service Worker com estratégia de cache `Cache First` para assets estáticos. O site passaria a funcionar offline e poderia ser instalado na tela inicial do celular, aumentando recorrência de visitas.

#### v2.6.0 — Externalização do Design System
Mover os CSS custom properties para um arquivo `design-tokens.css` compartilhado e os scripts comuns (header, footer, reveal, scrollspy) para `core.js`. Reduz de ~3.000 linhas por arquivo para ~800 e melhora o cache entre páginas.

```
assets/
  css/
    tokens.css      ← custom properties globais
    components.css  ← header, footer, botões, cards
  js/
    core.js         ← nav, reveal, scrollspy, counters
```

#### v2.6.0 — Página de Portfólio com Projetos
Criar `portfolio.html` exibindo os projetos entregues (FF193, PsiMF, Digital Signage, etc.) com capturas de tela, stack usada, link ao vivo e breve descrição. Aumenta autoridade e prova social diretamente no site.

#### v3.0.0 — Blog Técnico (Firebase CMS)
Implementar um sistema de blog leve com artigos armazenados no **Firestore** — títulos, tags, markdown e data de publicação. Um painel admin simples com autenticação Firebase permitiria publicar artigos sem mexer no código. Benefício direto: SEO de longo prazo via conteúdo técnico.

---

### 🟢 Baixa Prioridade / Longo Prazo

#### v3.0.0 — Sistema de Orçamentos Automatizado
Formulário interativo com lógica de precificação em tempo real — o usuário seleciona serviços, prazos e addons, e o sistema gera uma proposta estimada + PDF para download (via jsPDF já disponível na stack). Integração com **Firebase Storage** para armazenar as propostas geradas.

#### v3.1.0 — Internacionalização (i18n)
Versão em inglês das páginas principais (index, catálogo) para alcançar clientes fora do Brasil via plataformas como **Upwork** e **Toptal**. Implementação com objeto de strings por idioma e `localStorage` para preferência do usuário.

#### v3.2.0 — Painel do Cliente
Área autenticada via **Firebase Authentication** onde clientes ativos podem acompanhar o status do projeto, acessar documentos entregues, histórico de chamados e faturas. Evolução natural do ecossistema Akanni aplicada ao próprio site da GeoCODE.

#### v3.2.0 — Testes Automatizados
Implementar testes de interface com **Playwright** (end-to-end) validando fluxos críticos: abertura de drawers, filtros do catálogo, scroll reveal, navegação mobile e CTAs WhatsApp. Não requer Node.js em produção — apenas no pipeline de CI/CD do GitHub Actions.

---

## Autor

<table>
  <tr>
    <td align="center">
      <strong>Geovani Santos</strong><br>
      GeoCODE Programmer<br>
      Aracaju, Sergipe — Brasil<br><br>
      <a href="https://wa.me/+5579988663905">💬 WhatsApp</a> ·
      <a href="mailto:geocodeprogrammer@gmail.com">📧 E-mail</a> ·
      <a href="https://www.linkedin.com/in/eusougeovani/">🔗 LinkedIn</a> ·
      <a href="https://instagram.com/geovanikeeper">📷 Instagram</a>
    </td>
  </tr>
</table>

---

<div align="center">

**GeoCODE Programmer** — Desenvolvido no Linux com ☕  
© 2025 Geovani Santos. Todos os direitos reservados.  
Código proprietário — uso, cópia e redistribuição não autorizados sem permissão expressa.

</div>