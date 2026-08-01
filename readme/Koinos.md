<div align="center">

<img src="assets/icons/icon-512.png" width="80" alt="Akanni Koinos logo" />

# Akanni Koinos — Gestão Financeira

**`v1.3.0`** · Julho 2026 · Produção estável

[![Deploy](https://img.shields.io/badge/deploy-Vercel-000?style=flat-square&logo=vercel)](https://akannikoinos.vercel.app)
[![Firebase](https://img.shields.io/badge/backend-Firebase-FFCA28?style=flat-square&logo=firebase&logoColor=000)](https://firebase.google.com)
[![Stack](https://img.shields.io/badge/stack-Vanilla%20JS-F7DF1E?style=flat-square&logo=javascript&logoColor=000)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![PWA](https://img.shields.io/badge/PWA-instalável-5A0FC8?style=flat-square&logo=pwa&logoColor=fff)](#-instalação-como-pwa)
[![License](https://img.shields.io/badge/license-Privado-red?style=flat-square)](#-créditos)

*SaaS de administração financeira do dia a dia — dashboard com gráficos, transações com contas e parcelamento, metas, cofres nomeados, alertas de gasto, relatórios em PDF e importação de CSV.*

</div>

---

## Índice

- [Visão Geral](#-visão-geral)
- [Arquitetura e Stack](#-arquitetura-e-stack)
- [Autenticação](#-autenticação)
- [Dashboard](#-dashboard)
- [Transações](#-transações)
- [Metas de Economia](#-metas-de-economia)
- [Cofres](#-cofres)
- [Alertas de Gastos](#-alertas-de-gastos)
- [Relatórios](#-relatórios)
- [Importação de CSV](#-importação-de-csv)
- [Configurações](#-configurações)
- [Instalação como PWA](#-instalação-como-pwa)
- [Segurança — Firestore Rules](#-segurança--firestore-rules)
- [Estrutura de Arquivos](#-estrutura-de-arquivos)
- [Configuração e Deploy](#-configuração-e-deploy)
- [Versionamento](#-versionamento)
- [Roadmap — Próximas Atualizações](#-roadmap--próximas-atualizações)
- [Créditos](#-créditos)

---

## 📌 Visão Geral

Webapp financeiro desenvolvido por **GeoCODE Programmer (Geovani Santos)** para administração financeira pessoal do dia a dia — saldo, transações, metas, cofres e limites de gasto, tudo em tempo real via Firestore. Interface em **dark theme** (com alternância para tema claro), tipografia Outfit para texto e JetBrains Mono para valores monetários, com identidade visual em tons de verde-menta/esmeralda para indicadores positivos.

> **Filosofia de desenvolvimento:** zero dependências de framework, zero processo de build, Firebase SDK via CDN, plano **Spark (gratuito)** como back-end — máxima performance e custo zero de infraestrutura para uso pessoal ou small-scale SaaS.

---

## 🛠 Arquitetura e Stack

### Frontend

| Camada | Tecnologia |
| -------- | ----------- |
| Marcação | HTML5 semântico |
| Estilização | CSS3 + Custom Properties (design tokens, tema claro/escuro) |
| Lógica | JavaScript ES6+ Vanilla |
| Fontes | Google Fonts — Outfit · JetBrains Mono |
| Gráficos | Chart.js 4.4 (doughnut + linha, adaptável ao tema) |
| PDF | jsPDF 2.5 + jsPDF-AutoTable 3.8 |

### Backend / BaaS

| Serviço | Finalidade |
| --------- | ----------- |
| Firebase Authentication | Login e-mail/senha + Google OAuth |
| Cloud Firestore | Banco NoSQL em tempo real — 6 coleções por usuário |
| Firebase Security Rules | Isolamento total de dados por `uid` + validação de campos |

### Infraestrutura

| Item | Configuração |
| ------ | ------------- |
| Hosting | Vercel |
| Roteamento | `cleanUrls`, `trailingSlash: false` |
| Headers de segurança | `X-Content-Type-Options`, `X-Frame-Options: DENY`, `Referrer-Policy` |
| PWA | `manifest.json` + `sw.js` (cache do app shell, instalável) |
| Domínio | `akannikoinos.vercel.app` |

---

## 🔐 Autenticação

- Tela de login em layout dividido (`index.html`): formulário à direita, apresentação da marca à esquerda.
- **E-mail/senha** e **Google OAuth** (popup), com criação automática do documento do usuário (`users/{uid}`) e categorias/contas padrão no primeiro acesso.
- Cadastro com nome, e-mail e senha (mínimo 6 caracteres), com mensagens de erro traduzidas para pt-BR.
- Guarda de rota em `app.html` — sem sessão ativa, redireciona para `index.html`.
- Logout acessível via botão dedicado no dropdown do perfil (topbar) e na tela de Configurações.

---

## 📊 Dashboard

<details>
<summary><strong>Cards de estatística</strong></summary>

- **Saldo Global** — soma de todas as transações já lançadas, com sparkline dos últimos 12 meses.
- **Saldo do Mês** — entradas menos saídas do período selecionado, com variação percentual vs. mês anterior.
- **Entradas** e **Saídas** do mês.
- **Cofre** — saldo agregado de todos os cofres nomeados; clicar no card leva direto à tela de Cofres.

</details>

<details>
<summary><strong>Gráficos (Chart.js, adaptáveis ao tema claro/escuro)</strong></summary>

- **Evolução do saldo** — linha com saldo acumulado dos últimos 12 meses.
- **Despesas por tipo** — doughnut (Essencial / Não essencial / Recorrente) com legenda de valores.
- **Despesas por categoria** — doughnut com paleta de 10 cores.
- **Comparativo anual** — linha comparando o ano selecionado com o anterior, mês a mês.

</details>

<details>
<summary><strong>Saldo por conta / instituição</strong></summary>

Lista todas as contas/instituições financeiras usadas nas transações (PicPay, Caixa, Mercado Pago, Banese, Carteira, etc.), com o saldo líquido de cada uma calculado a partir de todo o histórico — útil para saber quanto está em cada banco/carteira digital.

</details>

Seletor de **mês/ano** no dropdown do perfil (topbar) controla o período de todo o dashboard e da lista de transações, com janela de (ano atual − 10) a (ano atual + 20).

---

## 💳 Transações

- Listagem com **busca inteligente** (descrição + categoria) e filtros combinados: tipo (receita/despesa), categoria, conta, método de pagamento e status.
- Modal único de criação/edição para receitas e despesas:
  - **Categoria** e **conta/instituição** customizáveis (editadas em Configurações).
  - Despesas aceitam **tipo** (Essencial / Não essencial / Recorrente), **método de pagamento** (PIX, Dinheiro, Débito, Crédito, Boleto), **status** (Pago/Pendente) e **parcelamento**.
  - Parcelamentos são gravados como N transações (uma por mês, valor dividido), ligadas por `installments.groupId` via `WriteBatch` — cada parcela aparece corretamente no mês em que vence.
- Transações originadas de aportes/resgates de **Metas** ou movimentações de **Cofre** aparecem marcadas com a origem vinculada.

---

## 🎯 Metas de Economia

- Cards com nome, prazo, barra de progresso e percentual concluído.
- Criação com nome, valor alvo e prazo (valor inicial opcional).
- Saldo da meta só muda através das ações **Aportar** / **Resgatar** — cada uma gera automaticamente uma transação vinculada (categoria `Metas`), mantendo o extrato geral sempre consistente com o progresso da meta.
- Edição posterior é restrita a nome, valor alvo e prazo — o histórico de aportes fica no extrato de Transações.

---

## 🏦 Cofres

- Suporte a **múltiplos cofres nomeados** (ex: Viagem, Emergência, Presente) — sem meta de valor nem prazo obrigatórios, diferente das Metas.
- Grade de cofres com saldo individual; clique em um cofre abre o histórico completo de depósitos e retiradas.
- Cada depósito/retirada gera (e mantém sincronizada) uma transação vinculada — editar ou excluir uma movimentação atualiza a transação correspondente; excluir um cofre remove suas movimentações e transações vinculadas em lote.
- Saldo sempre calculado como soma das movimentações (nunca um número solto), eliminando risco de dessincronização.

---

## 🔔 Alertas de Gastos

- Limite mensal configurável por categoria, com barra de progresso colorida (verde/âmbar/vermelho conforme 0–79% / 80–99% / 100%+).
- Alertas de 80% e 100% aparecem como uma **área inline no dropdown do perfil** — não como pop-up separado — e só ocupam espaço quando existe pelo menos um alerta ativo.
- Indicador visual (badge) no avatar do usuário sinaliza alertas pendentes mesmo com o dropdown fechado.

---

## 📄 Relatórios

- **Extrato do mês** — PDF com resumo (entradas/saídas/saldo) e tabela detalhada de transações, incluindo conta e método de pagamento.
- **Extrato anual** — PDF consolidado com totais por mês, detalhamento por categoria e saldo por conta/instituição no ano.
- Gerados 100% client-side com jsPDF + AutoTable, sem dependência de backend.

---

## 📥 Importação de CSV

Parser tolerante para históricos vindos de outras planilhas ou bancos:

- Aceita separador `,` ou `;` e reconhece colunas por nome (com/sem acento): `data`/`date`, `descricao`/`description`, `categoria`/`category` (opcional), `conta`/`account`/`instituicao`/`banco` (opcional), `valor`/`amount`, `tipo`/`type` (opcional).
- Datas em `AAAA-MM-DD`, `DD/MM/AAAA` ou `DD-MM-AAAA`; valores em formato brasileiro (`1.234,56`) ou internacional (`1234.56`).
- Pré-visualização antes de confirmar, com contagem de linhas reconhecidas vs. com erro; linhas inválidas ficam esmaecidas e não são importadas.
- Importação em lote via `WriteBatch` (chunks de até 400 documentos).

---

## ⚙️ Configurações

- Edição de nome e categorias/contas personalizadas (campos separados por vírgula).
- **Tema claro/escuro** com toggle dedicado — preferência salva no Firestore (`theme`) e em `localStorage` para aplicação instantânea no próximo carregamento, sem flash de tema errado. Os gráficos recalculam suas cores automaticamente ao trocar de tema.

---

## 📲 Instalação como PWA

- `manifest.json` com ícones (192/512/maskable), cor de tema e `display: standalone`.
- `sw.js` com cache do app shell (estratégia *stale-while-revalidate*) para uso offline básico — chamadas ao Firebase e a CDNs externos sempre passam direto pela rede.
- Layout responsivo: abaixo de 720px a sidebar vira um menu deslizante (hambúrguer) e o dropdown do perfil concentra mês/ano, alertas e logout para manter a topbar enxuta em qualquer tamanho de tela.
- Instalável via banner automático (Android/Chrome) ou **Compartilhar → Adicionar à Tela de Início** (iOS/Safari).

---

## 🔒 Segurança — Firestore Rules

| Coleção | Leitura | Escrita | Validações |
| --------- | --------- | --------- | ----------- |
| `users/{uid}` | Apenas o próprio `uid` | Apenas o próprio `uid` | `email is string` |
| `users/{uid}/transactions/{id}` | Apenas o dono | Apenas o dono | tipo enum · valor > 0 · descrição, data e categoria obrigatórios |
| `users/{uid}/goals/{id}` | Apenas o dono | Apenas o dono | nome obrigatório · valor alvo > 0 · prazo obrigatório |
| `users/{uid}/budgets/{id}` | Apenas o dono | Apenas o dono | categoria obrigatória · limite > 0 |
| `users/{uid}/vaults/{id}` | Apenas o dono | Apenas o dono | nome obrigatório |
| `users/{uid}/vaultMovements/{id}` | Apenas o dono | Apenas o dono | tipo enum · valor > 0 · data e `vaultId` obrigatórios |

Qualquer coleção fora dessa estrutura é bloqueada por padrão (`match /{document=**} { allow read, write: if false; }`). Nenhuma consulta usada no app exige índice composto no Firestore.

---

## 📁 Estrutura de Arquivos

```
akanni-koinos/
├── index.html                 # Tela de login (split layout + Google)
├── app.html                   # Shell da aplicação (SPA: sidebar + topbar + views)
├── firestore.rules            # Regras de segurança do Firestore
├── vercel.json                # Configuração de deploy (rewrites, headers)
├── manifest.json              # Web App Manifest (instalação como PWA)
├── sw.js                      # Service Worker (cache do app shell)
│
├── assets/
│   └── icons/                 # Ícones do PWA (192, 512, maskable, apple-touch-icon)
│
├── css/
│   └── style.css              # Design system (dark/light theme, tokens, componentes)
│
└── js/
    ├── firebase-config.js     # Credenciais do projeto Firebase + categorias/contas padrão
    ├── utils.js                # Formatação, toasts, helpers de DOM
    ├── auth.js                 # Login, cadastro, Google, guarda de rota, logout
    ├── store.js                 # Camada única de acesso ao Firestore (CRUD + listeners)
    ├── charts.js                # Wrappers Chart.js — cores lidas das CSS vars (tema)
    ├── dashboard.js              # Stat cards, gráficos e saldo por conta
    ├── transactions.js           # Listagem, filtros, busca e modal de receita/despesa
    ├── goals.js                   # Metas: nome/alvo/prazo + aportes/resgates vinculados
    ├── vault.js                   # Cofres nomeados (múltiplos) + histórico vinculado
    ├── alerts.js                  # Limites por categoria + área de alertas no dropdown
    ├── reports.js                 # Exportação de PDF (mês/ano)
    ├── csv-import.js              # Parser de CSV com pré-visualização
    └── app.js                     # Boot, navegação, período, tema, dropdown, settings
```

---

## ⚙️ Configuração e Deploy

### Pré-requisitos

- Projeto Firebase configurado (Authentication + Firestore) no plano **Spark**
- Conta Vercel com repositório vinculado

### Variáveis de configuração

Todas as configurações estão inline nos arquivos JS (sem `.env`):

| Arquivo | Constante | Finalidade |
| --------- | ----------- | ----------- |
| `js/firebase-config.js` | `firebaseConfig` | Credenciais do projeto Firebase |
| `js/firebase-config.js` | `DEFAULT_CATEGORIES` / `DEFAULT_ACCOUNTS` | Categorias e contas padrão de novos usuários |

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

Após o deploy, adicione o domínio final aos **Authorized domains** em Firebase Authentication → Settings.

---

## 🏷 Versionamento

O projeto adota **Semantic Versioning (SemVer)**:

```
v1.3.0
│ │ └── Patch  — correções de bugs, ajustes de CSS
│ └──── Minor  — novas features adicionadas
└────── Major  — mudança arquitetural significativa
```

### Histórico de marcos

| Versão | Marco |
| -------- | ------- |
| `v1.0.0` | MVP inicial — login, dashboard, transações com parcelamento, metas, cofre único, alertas, relatórios em PDF, importação de CSV, Firestore Rules |
| `v1.1.0` | Cofre com histórico dedicado de movimentações, botão de logout visível, instalação como PWA (manifest + service worker), seletor de período estendido |
| `v1.2.0` | Dropdown unificado do perfil (mês/ano, alertas, logout) para corrigir o layout da topbar no mobile |
| **`v1.3.0`** | **Versão atual** — conta/instituição financeira nas transações, Metas e Cofres vinculados ao extrato, múltiplos cofres nomeados (sem meta/prazo), alertas como área inline no dropdown, tema claro/escuro |

---

## 🚀 Roadmap — Próximas Atualizações

As sugestões abaixo foram derivadas da análise da base de código atual e representam evoluções naturais do sistema.

---

### 🔴 Alta Prioridade

#### `v1.4.0` — Notificações push reais

Os alertas de 80%/100% hoje só são recalculados com o app aberto. Uma Cloud Function agendada (exige plano Blaze) poderia enviar push notifications via Firebase Cloud Messaging quando um limite for atingido, mesmo com o app fechado.

#### `v1.4.0` — Sincronização de edição/exclusão de transações vinculadas

Editar ou excluir pela tela de Transações uma transação vinculada a uma meta ou cofre (`source` preenchido) hoje não atualiza o saldo da meta/cofre de volta. Fechar esse loop — recalculando `currentAmount`/saldo do cofre ao editar a transação de origem — eliminaria essa inconsistência conhecida.

#### `v1.4.1` — Testes de Firestore Rules

Criar uma suíte com `@firebase/rules-unit-testing` cobrindo os casos de borda de cada coleção (transações parceladas, movimentações de cofre sem `vaultId` válido, etc.), garantindo que as regras seguem corretas a cada alteração.

---

### 🟡 Média Prioridade

#### `v1.5.0` — Relatórios com período personalizado

Hoje os relatórios cobrem apenas o mês ou o ano selecionado no topo da tela. Permitir escolher um intervalo de datas arbitrário para exportação em PDF ou CSV.

#### `v1.5.0` — Regras de recorrência automática

Lançamento automático de transações recorrentes (aluguel, assinaturas) em uma data fixa do mês, sem precisar recriar manualmente o lançamento — usando o campo `expenseType: 'recurring'` já existente como gatilho.

#### `v1.6.0` — Multi-moeda

O app é fixo em `pt-BR`/BRL. Suporte a moedas adicionais (com taxa de câmbio manual ou via API) ampliaria o uso para quem recebe ou paga em moeda estrangeira.

#### `v1.6.0` — Compartilhamento de cofre/meta entre usuários

Permitir convidar outro usuário (ex: cônjuge) para visualizar ou contribuir com um cofre ou meta específica, via `uid` adicional na subcoleção — hoje o modelo é estritamente de um único usuário por conta.

---

### 🟢 Melhorias e Qualidade de Vida

#### `v1.7.0` — Modo offline mais completo

O Service Worker hoje cobre o app shell; adicionar fila de operações offline (criar transação sem conexão, sincronizar ao reconectar) tornaria o uso em campo mais robusto.

#### `v1.7.0` — Acessibilidade (a11y)

Auditoria com Lighthouse/axe-core, `aria-live` nos alertas e no painel de notificações, foco de teclado consistente ao abrir/fechar modais.

#### `v1.7.1` — Variáveis de configuração em ambiente Vercel

Mover as credenciais do Firebase para variáveis de ambiente Vercel + endpoint mínimo, eliminando a chave exposta diretamente no código-fonte.

#### `v1.8.0` — Exportação/backup completo em JSON

Botão em Configurações para baixar todos os dados do usuário (transações, metas, cofres, orçamentos) em um único arquivo JSON — útil como backup pessoal e para portabilidade.

---

### 🔵 Longo Prazo / Exploratório

#### `v2.0.0` — App mobile nativo (Capacitor/Cordova)

Empacotar o mesmo código vanilla como app nativo Android/iOS via Capacitor, reaproveitando 100% da base atual e ganhando notificações push nativas.

#### `v2.0.0` — Dashboard de orçamento preditivo

Projeção de saldo futuro com base em transações recorrentes e parcelamentos já cadastrados, alertando com antecedência sobre meses com saldo projetado negativo.

#### `v2.0.0` — Integração com Open Finance (Open Banking Brasil)

Importação automática de extratos bancários via API de Open Finance, eliminando a necessidade de importação manual de CSV para instituições participantes.

---

## 👨‍💻 Créditos

<div align="center">

| | |
| -- | -- |
| **Desenvolvimento** | Geovani Santos — GeoCODE Programmer |
| **Portfólio** | [eusougeovani.vercel.app](https://eusougeovani.vercel.app) |
| **Suporte técnico** | (79) 9 8866-3905 |
| **Produto** | Akanni Koinos — ferramenta própria GeoCODE Programmer |
| **Site** | [akannikoinos.vercel.app](https://akannikoinos.vercel.app) |

*Desenvolvido com ☕ por GeoCODE Programmer — 2026*

</div>