<div align="center">

<img src="assets/img/favicon-96x96.png" width="80" alt="Psi Meire França logo" />

# Psi Meire França — Sistema Web

**`v3.5.1`** · Produção estável

[![Deploy](https://img.shields.io/badge/deploy-Vercel-000?style=flat-square&logo=vercel)](https://psimeirefranca.vercel.app)
[![Firebase](https://img.shields.io/badge/backend-Firebase-FFCA28?style=flat-square&logo=firebase&logoColor=000)](https://firebase.google.com)
[![Stack](https://img.shields.io/badge/stack-Vanilla%20JS-F7DF1E?style=flat-square&logo=javascript&logoColor=000)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![License](https://img.shields.io/badge/license-Privado-red?style=flat-square)](#créditos)

*Sistema web completo para clínica de psicologia — site institucional, CRM clínico, portal do paciente, blog e digital signage.*

</div>

---

## Índice

- [Visão Geral](#-visão-geral)
- [Arquitetura e Stack](#-arquitetura-e-stack)
- [Produtos do Ecossistema](#-produtos-do-ecossistema)
- [AkanniMED — CRM Clínico](#-akannimed--crm-clínico)
- [Portal do Paciente](#-portal-do-paciente)
- [Site Institucional](#-site-institucional)
- [Blog Público](#-blog-público)
- [Digital Signage](#-digital-signage)
- [Segurança — Firestore Rules](#-segurança--firestore-rules)
- [Estrutura de Arquivos](#-estrutura-de-arquivos)
- [Configuração e Deploy](#-configuração-e-deploy)
- [Versionamento](#-versionamento)
- [Roadmap — Próximas Atualizações](#-roadmap--próximas-atualizações)
- [Créditos](#-créditos)

---

## 📌 Visão Geral

Sistema web full-stack desenvolvido por **GeoCODE Programmer (Geovani Santos)** para a **Psicóloga Meire França** (CRP 19/4078 — Aracaju/SE). O projeto é composto por cinco produtos integrados via Firebase, todos em stack vanilla sem build tools, com deploy contínuo na Vercel.

> **Filosofia de desenvolvimento:** zero dependências de framework, CSS modular com design tokens, arquitetura SPA lazy-load com router próprio — máxima performance sem complexidade desnecessária.

---

## 🛠 Arquitetura e Stack

### Frontend

| Camada | Tecnologia |
|--------|-----------|
| Marcação | HTML5 semântico |
| Estilização | CSS3 + Custom Properties (design tokens) |
| Lógica | JavaScript ES6+ Vanilla, ES Modules |
| Fontes | Google Fonts — Playfair Display · DM Sans · Lato |
| Ícones | Font Awesome 6.5 |
| Gráficos | Chart.js 4.4 |
| Carrossel | Swiper 11 |
| PDF | jsPDF 2.5 |
| QR Code | qrcodejs |

### Backend / BaaS

| Serviço | Finalidade |
|---------|-----------|
| Firebase Authentication | Login Google (psicóloga e pacientes) |
| Cloud Firestore | Banco NoSQL em tempo real |
| Firebase Security Rules | Controle de acesso granular por coleção |
| Firebase Cloud Messaging | Notificações push diárias |
| Cloudinary | Upload e hospedagem de imagens do blog |
| Google Calendar API | Sincronização de consultas (OAuth 2.0) |
| Jitsi Meet (8x8.vc) | Sessões de telepsicologia |
| OpenWeatherMap API | Clima em tempo real (digital signage) |

### Infraestrutura

| Item | Configuração |
|------|-------------|
| Hosting | Vercel |
| Roteamento | `cleanUrls`, `trailingSlash: false`, 404 customizado |
| Cache | `max-age=31536000, immutable` para assets estáticos |
| Domínio | `psimeirefranca.vercel.app` |

---

## 🗂 Produtos do Ecossistema

| # | Produto | Rota | Público-alvo |
|---|---------|------|-------------|
| 1 | **Site Institucional** | `/` | Visitantes em geral |
| 2 | **AkanniMED (CRM)** | `/pages/akannimed/app.html` | Psicóloga (admin) |
| 3 | **Portal do Paciente** | `/pages/portal` | Pacientes cadastrados |
| 4 | **Blog da Psi** | `/pages/blog` | Público em geral |
| 5 | **Digital Signage** | `/pages/digitalsignage` | Recepção do consultório |

---

## 🩺 AkanniMED — CRM Clínico

SPA (Single Page Application) de gestão clínica completo. O `router.js` injeta partials HTML dinamicamente no `#page-content`, com lazy-load de CSS por rota e cache de partials em memória.

### Autenticação

- Login exclusivo via **Google OAuth** com validação na coleção `allowedEmails`
- Modal LGPD (Lei 13.709/2018) na primeira sessão, aceite persistido em `localStorage`
- Avaliação de força de senha em tempo real (para contas email/password)

### Módulos disponíveis

<details>
<summary><strong>📊 Dashboard</strong></summary>

- KPIs do mês (pacientes, consultas, receita, a receber)
- Pills da semana com contagem de consultas por dia
- Saudação contextual (bom dia/tarde/noite) com nome do profissional
- Próximas consultas em tempo real
- Tarefas pendentes com conclusão inline
- Últimas publicações do blog
- Templates rápidos de documentos
- Gráfico de receita dos últimos 6 meses (Chart.js)
- Painel de solicitações externas pendentes

</details>

<details>
<summary><strong>👥 Pacientes</strong></summary>

- Grid de cards com avatar, código PSI-XXX, telefone e tipo
- Busca por nome, CPF e código
- Filtro por tipo (Particular / Convênio)
- **Offcanvas de cadastro/edição** com 3 abas: Dados Pessoais, Emergência, Responsável Legal
- Geração automática de código PSI-XXX sequencial
- Modal de ficha completa com 3 tabs: Dados, Consultas, Pagamentos
- Máscara de CPF inline

</details>

<details>
<summary><strong>📅 Agenda</strong></summary>

- Calendário interativo com dots de presença (interno/externo por cor)
- Lista de consultas do dia selecionado
- Formulário com recorrência semanal configurável (preview de datas)
- Integração Google Calendar — eventos criados/removidos automaticamente
- Link Jitsi Meet gerado e salvo na consulta ao confirmar
- Lembretes WhatsApp D-1 em lote (um clique, todas as consultas de amanhã)
- Confirmação/rejeição de agendamentos externos inline

</details>

<details>
<summary><strong>🖥 TelePsicologia</strong></summary>

- Geração de sala Jitsi (8x8.vc) com ID único por consulta
- Vinculação com consulta agendada do dia (select com cruzamento de caches)
- Compartilhamento WhatsApp dinâmico (com ou sem vínculo de paciente)
- Timer de sessão em tempo real
- Link da sala salvo no Firestore ao iniciar — visível no portal do paciente
- 4 views de estado: Setup → Loading → Ativa → Encerrada

</details>

<details>
<summary><strong>💰 Financeiro</strong></summary>

- Registro de pagamentos (PIX, Dinheiro, Débito, Crédito, Pacote)
- Pacotes de sessões com controle de saldo
- Histórico com filtros
- **Recibo PDF profissional**: cabeçalho com logo, QR Code PIX inline, badge de status colorido, assinatura
- Modal de QR Code PIX com payload EMV + CRC16 (copiável)
- WhatsApp pós-geração com mensagem personalizada (pago vs. pendente)

</details>

<details>
<summary><strong>📋 Prontuário</strong></summary>

- Tipos de registro: Evolução Diária, Anamnese, Nota de Retificação
- Bloqueio automático de edição após 48h (Resolução CFP 10/2005)
- Exportação em PDF com cabeçalho/rodapé profissional e faixas por tipo de registro

</details>

<details>
<summary><strong>📄 Documentos e Templates</strong></summary>

- 4 templates embutidos: Contrato de Prestação, TCLE, Atestado, Relatório
- Templates customizados persistidos no Firestore
- **20+ variáveis dinâmicas**: `{{nome_paciente}}`, `{{crp_psicologo}}`, `{{data_hoje}}`, `{{cidade}}` e outras
- Preview ao vivo com substituição em tempo real
- Exportação para PDF com layout profissional

</details>

<details>
<summary><strong>✅ Tarefas</strong></summary>

- Categorias: Clínico, Administrativo, Estudo/Supervisão
- Prioridades: Alta, Média, Baixa com alertas visuais de prazo (atrasado, urgente, hoje)
- Vínculo opcional com paciente
- Filtros combinados por categoria, prioridade, status e busca textual
- Checkbox circular animado de conclusão

</details>

<details>
<summary><strong>✍️ Blog (CRM)</strong></summary>

- Editor rich-text com toolbar (negrito, itálico, h2, h3, blockquote, listas, links)
- Upload de capa para Cloudinary (unsigned preset, validação de tamanho/tipo)
- Controle de status (rascunho / publicado)
- Slug gerado automaticamente a partir do título

</details>

### Componentes globais

| Componente | Descrição |
|------------|-----------|
| **FAB** | Menu radial com 4 ações rápidas, animação escalonada, fecha por Esc/clique externo |
| **Shell** | Topbar dinâmica (avatar Google, badge de notificações, dropdown de perfil), sidebar mobile com toggle/overlay |
| **AKRouter** | SPA com cache de partials, lazy-load de CSS, fallback de erro por rota |
| **Notificações push** | Service Worker, agendamento diário configurável, toast de lembrete D-1 |

---

## 👤 Portal do Paciente

Área de autoatendimento acessível via link compartilhado pelo profissional (`?uid=...`).

| Feature | Detalhe |
|---------|---------|
| **Login** | Google OAuth |
| **Auto-registro** | Primeiro acesso cria o paciente automaticamente no CRM, sem aprovação manual |
| **Vinculação de conta** | Se o e-mail já existir no CRM, `googleUID` é atualizado sem formulário |
| **Agendamento** | Grid de slots com verificação de conflitos em tempo real |
| **Confirmação em tempo real** | `onSnapshot` detecta `pendente → confirmado` e exibe toast imediato |
| **Meet** | Link da sessão online exibido diretamente no card da consulta |
| **Recibos** | Download de PDF gerado client-side (jsPDF) com mesmo layout do CRM |
| **Histórico** | Deduplicação inteligente entre coleções `consultas` e `solicitacoes` |

---

## 🌐 Site Institucional

| Seção | Conteúdo |
|-------|---------|
| **Hero** | Headline, subtítulo, CTA para agendamento |
| **Strip** | Diferenciais (modalidade, horário, abordagem) |
| **Sobre Mim** | Foto, especialização, benefícios da terapia |
| **Serviços** | Cards: Individual, Casal, Família, Grupo |
| **Atendimento** | Presencial (endereço) e Online (plataformas) |
| **Avaliações** | Carrossel com reviews reais do Google (Swiper.js) |
| **Mapa** | Google Maps embed com geolocalização do consultório |
| **FrançIA** | Chatbot flutuante com fluxo de opções (agendamento, terapia, contato, WhatsApp) |
| **Footer** | 4 colunas: marca, navegação, redes sociais, contato |
| **SEO** | Meta tags, Open Graph, Schema.org `MedicalBusiness`, sitemap, robots.txt, GA4 |

---

## 📰 Blog Público

- Feed de artigos filtrado por `status === 'published'` nas Security Rules
- Filtro dinâmico por categoria (gerado a partir dos dados do Firestore)
- Busca full-text client-side (título + resumo + autor)
- Paginação incremental (PAGE_SIZE = 6) com "Carregar mais"
- View de leitura completa com botão de voltar ao feed
- Skeletons de carregamento com animação shimmer
- Scroll reveal com IntersectionObserver

---

## 📺 Digital Signage

Painel de exibição para TV de recepção (Firefox / Android TV Box / 720p).

| Widget | Detalhe |
|--------|---------|
| **Relógio** | Hora com piscada de dois pontos, data e dia por extenso |
| **Clima** | OpenWeatherMap com cache em `sessionStorage` e fallback offline |
| **Status chip** | Dinâmico: Em Atendimento · Intervalo · Retorna às… · Retorna na Segunda |
| **Frases** | 12 frases inspiracionais com fade a cada 14s |
| **Player de áudio** | 20 faixas, shuffle Fisher-Yates, autoplay com overlay de ativação manual |
| **Slideshow** | Pré-carregamento do próximo slide, dots indicadores, suporte a imagem e vídeo |
| **Ticker** | RAF-based (sem `setInterval`), velocidade configurável, loop contínuo |
| **Anti-screensaver** | Alternância de título a cada 30s |
| **Reload diário** | Às 05h00 para garantir versão atualizada |

---

## 🔒 Segurança — Firestore Rules

| Coleção | Leitura | Escrita |
|---------|---------|---------|
| `allowedEmails/{id}` | Apenas o próprio usuário (e-mail = ID) | Apenas UID do admin |
| `users/{uid}/**` | `acessoAutorizado(uid)` | `acessoAutorizado(uid)` |
| `users/{uid}/pacientes/{id}` | Admin ou `googleUID == auth.uid` | Admin, auto-registro validado ou vinculação de UID |
| `users/{uid}/consultas/{id}` | Admin ou paciente vinculado | Apenas admin |
| `users/{uid}/pagamentos/{id}` | Admin ou paciente vinculado | Apenas admin |
| `users/{uid}/prontuarios/{id}` | Admin | Admin |
| `users/{uid}/perfil/{id}` | **Público** | Admin |
| `agendamentos/{uid}/solicitacoes/{id}` | Qualquer autenticado | Criação validada; update restrito a campos específicos |
| `portal_sessions/{pacienteId}` | Público | Apenas o `googleUID` da sessão |
| `posts/{postId}` | Publicados: público / Rascunhos: whitelist | Whitelist |

**Funções auxiliares:** `estaAutenticado()` · `eDono(uid)` · `emailNaWhitelist()` · `acessoAutorizado(uid)` · `ePacienteDono()` · `ePacienteDoDoc(uid)` · `autoRegistroPacienteValido()` · `vinculoGoogleUIDValido()` · `agendamentoExternoValido()` · `_postValido()`

---

## 📁 Estrutura de Arquivos

```
/
├── index.html                         # Site institucional
├── 404.html                           # Página de erro personalizada
├── firebase-messaging-sw.js           # Service Worker (FCM)
├── firestore.rules                    # Regras de segurança Firestore
├── vercel.json                        # Configuração de deploy
├── site.webmanifest                   # PWA manifest
├── sitemap.xml · robots.txt           # SEO
│
├── assets/
│   ├── css/
│   │   ├── index.css                  # Site institucional
│   │   ├── blog.css                   # Blog público
│   │   ├── portal.css                 # Portal do paciente
│   │   ├── digitalsignage.css         # Painel de TV
│   │   ├── 404.css                    # Página de erro
│   │   └── akannimed/                 # CSS modular do CRM
│   │       ├── global.css             # Design tokens + reset
│   │       ├── layout.css             # Login · sidebar · topbar
│   │       ├── components.css         # Botões · badges · modais
│   │       ├── dashboard.css          # Layout exclusivo do dashboard
│   │       ├── pacientes.css          # Cards + offcanvas
│   │       ├── tarefas.css            # Cards de tarefas
│   │       ├── agenda.css             # Calendário + consulta cards
│   │       ├── financeiro.css         # Pacotes e resumo financeiro
│   │       ├── fab.css                # Floating Action Button
│   │       ├── telepsicologia.css     # Views da telepsicologia
│   │       └── blog-crm.css           # Editor de blog interno
│   │
│   ├── js/
│   │   ├── index.js                   # Site (chatbot · carrossel · menu)
│   │   ├── blog.js                    # Feed público (ES Module)
│   │   ├── portal.js                  # Portal do paciente (ES Module)
│   │   ├── digitalsignage.js          # Digital signage (IIFE)
│   │   └── akannimed/
│   │       ├── firebase-config.js     # Init Firebase + helpers
│   │       ├── visual.js              # Engine principal do CRM
│   │       ├── router.js              # AKRouter (SPA lazy-load)
│   │       ├── shell.js               # Topbar + sidebar dinâmica
│   │       ├── fab.js                 # Floating Action Button
│   │       ├── pdf-export.js          # Recibo + prontuário PDF
│   │       ├── documentos.js          # Templates e documentos
│   │       ├── tarefas.js             # Gerenciador de tarefas
│   │       ├── post.js                # Blog CRM (Cloudinary)
│   │       └── telemedicina.js        # Sessões Jitsi
│   │
│   ├── img/ · icons/                  # Imagens e favicons
│   ├── audio/                         # 20 faixas de música ambiente
│   └── pictures/                      # Slides do digital signage
│
└── pages/
    ├── blog.html
    ├── portal.html
    ├── digitalsignage.html
    └── akannimed/
        ├── app.html                   # Shell único do CRM
        └── partials/                  # 11 partials (router lazy-load)
            ├── dashboard.html
            ├── pacientes.html
            ├── agenda.html
            ├── telepsicologia.html
            ├── financeiro.html
            ├── prontuario.html
            ├── documentos.html
            ├── tarefas.html
            ├── blog.html
            ├── perfil.html
            └── configuracoes.html
```

---

## ⚙️ Configuração e Deploy

### Pré-requisitos

- Projeto Firebase `psiconecta-crm` configurado (Auth + Firestore)
- Conta Cloudinary com upload preset `PsiMeireFrança` (unsigned)
- Google Cloud OAuth 2.0 Client ID (para Google Calendar)
- Conta Vercel com repositório vinculado

### Variáveis de configuração

Todas as configurações estão inline nos arquivos JS (sem `.env`):

| Arquivo | Constante | Finalidade |
|---------|-----------|-----------|
| `firebase-config.js` | `firebaseConfig` | Credenciais do projeto Firebase |
| `visual.js` | `GOOGLE_CLIENT_ID` | OAuth 2.0 — Google Calendar |
| `post.js` | `CLOUDINARY_CLOUD_NAME` / `CLOUDINARY_UPLOAD_PRESET` | Upload de imagens do blog |
| `digitalsignage.js` | `CFG.weatherKey` | API Key OpenWeatherMap |

### Deploy

```bash
# Via painel Vercel (recomendado):
# 1. Conectar repositório GitHub
# 2. Framework Preset: Other
# 3. Build Command: (vazio)
# 4. Output Directory: . (raiz)
# 5. Deploy

# Publicar regras do Firestore:
npm install -g firebase-tools
firebase login
firebase deploy --only firestore:rules
```

---

## 🏷 Versionamento

O projeto adota **Semantic Versioning (SemVer)**:

```
v3.5.1
│ │ └── Patch  — correções de bugs, ajustes de CSS
│ └──── Minor  — novas features adicionadas
└────── Major  — mudança arquitetural significativa
```

### Histórico de marcos

| Versão | Marco |
|--------|-------|
| `v1.0.0` | Site institucional + CRM monolítico inicial |
| `v1.5.0` | Financeiro, prontuário, Google Calendar |
| `v2.0.0` | Refatoração SPA — `router.js` + partials lazy-loaded |
| `v2.5.0` | Portal do paciente (Google Auth + agendamento em tempo real) |
| `v3.0.0` | CSS modular (7 arquivos), `shell.js`, topbar redesenhada |
| `v3.1.0` | FAB + `pacientes.css` + offcanvas de cadastro |
| `v3.2.0` | Dashboard reconstruído com Chart.js + pills da semana |
| `v3.3.0` | Módulo de telemedicina (Jitsi 8x8.vc) |
| `v3.4.0` | Blog CRM com Cloudinary + Security Rules para `posts` |
| `v3.5.0` | Documentos e templates com variáveis dinâmicas |
| **`v3.5.1`** | **Versão atual** — ajustes de sidebar, status chip, correções menores |

---

## 🚀 Roadmap — Próximas Atualizações

As sugestões abaixo foram derivadas da análise da base de código atual e representam evoluções naturais do sistema.

---

### 🔴 Alta Prioridade

#### `v3.6.0` — Refatoração de `visual.js` para módulos independentes
O arquivo `visual.js` acumula ~1.800 linhas cobrindo desde login até Google Calendar. A separação em módulos (`agenda.js`, `financeiro.js`, `pacientes.js`, `auth.js`) reduziria acoplamento, facilitaria manutenção e permitiria lazy-load por rota no router.

#### `v3.6.0` — Relatórios financeiros exportáveis
O módulo financeiro exibe apenas o mês atual. Evoluções previstas:
- Filtro por período personalizado (range de datas)
- Exportação de extrato em CSV ou PDF
- Gráfico de distribuição por método de pagamento (PIX, dinheiro, etc.)
- Comparativo mês a mês

#### `v3.6.0` — Confirmação automatizada de consulta por WhatsApp
Hoje a psicóloga precisa confirmar manualmente. Integrar a API oficial do WhatsApp Business (ou Evolution API self-hosted) para envio automático de mensagem de confirmação ao paciente assim que a consulta mudar de status para `confirmada`.

---

### 🟡 Média Prioridade

#### `v3.7.0` — Multi-tenant (arquitetura white-label)
O código já referencia comentários sobre white-label. Criar uma coleção `tenants` no Firestore e isolar os dados por `tenantId` permitiria vender o sistema para outros profissionais sem criar projetos Firebase separados.

#### `v3.7.0` — Prontuário digital avançado
- Campo de **objetivos terapêuticos** por paciente
- **Linha do tempo visual** das sessões (timeline scrollável)
- Busca full-text dentro das anotações de um paciente
- Exportação de prontuário completo com índice de sessões

#### `v3.7.0` — Dashboard v2 com filtros interativos
- Filtro de período no gráfico de receita (hoje, 7d, 30d, 3m, 6m, 1a)
- Card de **taxa de cancelamento** e **taxa de retorno de pacientes**
- Indicador de **ocupação da agenda** (% de slots preenchidos na semana)

#### `v3.7.0` — Avaliação de satisfação pós-sessão
Envio automático de link (WhatsApp ou e-mail) após sessão realizada com um formulário curto (NPS + comentário livre). Resultados exibidos no dashboard.

---

### 🟢 Melhorias e Qualidade de Vida

#### `v3.8.0` — PWA completa para o CRM
O `site.webmanifest` já existe, mas o CRM não tem Service Worker próprio. Adicionar cache offline dos partials e assets do CRM para uso em conexões instáveis.

#### `v3.8.0` — Acessibilidade (a11y)
- Auditoria com Lighthouse / axe-core
- Foco de teclado consistente no router (ao injetar partials, mover foco para `#page-content`)
- `aria-live` nos alertas e na lista de consultas do dia

#### `v3.8.0` — Testes de Firestore Rules
Criar uma suite de testes com `@firebase/rules-unit-testing` para garantir que as regras de segurança se comportam corretamente a cada deploy — especialmente os casos de borda do auto-registro de pacientes.

#### `v3.8.0` — Variáveis de configuração em `.env`
Mover chaves de API (OpenWeatherMap, Cloudinary, Google Client ID) para variáveis de ambiente Vercel, eliminando credenciais expostas no código-fonte.

#### `v3.9.0` — Internacionalização (i18n) básica
Preparar tokens de texto para suporte a inglês e espanhol — relevante caso o sistema seja adaptado para outros profissionais fora do Brasil.

#### `v3.9.0` — Modo escuro no CRM
Os design tokens já estão centralizados em `global.css`. Adicionar um `data-theme="dark"` com overrides das variáveis seria uma evolução natural e de alto impacto visual.

---

### 🔵 Longo Prazo / Exploratório

#### `v4.0.0` — Migração gradual para Web Components
Substituir componentes repetitivos (cards de paciente, badges de status, modais) por Custom Elements nativos — mantendo a filosofia vanilla mas com melhor encapsulamento.

#### `v4.0.0` — API de agendamento pública (Serverless Functions)
Criar endpoints Vercel Functions para expor uma API de agendamento que permita integrações com Calendly, AgendaFácil ou sistemas externos, sem expor as credenciais Firebase no front-end do portal.

#### `v4.0.0` — App mobile (PWA instalável com notificações nativas)
Com o Service Worker do CRM implementado e push notifications já funcionando, o próximo passo natural é garantir instalabilidade cross-platform (Android Chrome + iOS Safari 16.4+) com ícones, splash screen e comportamento standalone.

---

## 👨‍💻 Créditos

<div align="center">

| | |
|--|--|
| **Desenvolvimento** | Geovani Santos — GeoCODE Programmer |
| **Portfólio** | [eusougeovani.vercel.app](https://eusougeovani.vercel.app) |
| **Suporte técnico** | (79) 9 8866-3905 |
| **Cliente** | Psicóloga Meire França — CRP 19/4078 |
| **Site** | [psimeirefranca.vercel.app](https://psimeirefranca.vercel.app) |

*Desenvolvido com ☕ por GeoCODE Programmer — 2025 / 2026*

</div>