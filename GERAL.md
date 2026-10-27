# GeoCODE Programmer — Portfolio & Catálogo de Serviços

---

## GeoCODE Programmer

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

---

## Psicóloga Meire França

```
/
├── index.html · 404.html · offline.html · google8db25cb623bffe2d.html
├── firebase-messaging-sw.js        # Service Worker: cache offline + push (precisa ficar na raiz)
├── site.webmanifest · robots.txt
├── firestore.rules                 # Security Rules (publicar no Firebase)
├── vercel.json                     # cache, rewrites (post, sitemap), cron
├── package.json                    # só firebase-admin (usado pelas funções)
├── firebase.json                   # só para o emulador de testes
├── api/
│   ├── _lib/admin.js               # Firebase Admin + utilitários
│   ├── notify-booking.js           # avisa a psicóloga de uma nova solicitação
│   ├── cron-reminders.js           # lembretes 24h + resumo do dia seguinte (cron diário)
│   ├── link-patient.js             # une cadastro manual ao login do paciente
│   ├── post.js                     # HTML do artigo com título/imagem para compartilhar
│   ├── sitemap.js                  # sitemap.xml dinâmico (inclui os artigos)
│   ├── weather.js                  # proxy do OpenWeather (chave só no servidor)
│   └── signage.js                  # senha do WiFi só para a TV (com chave)
├── pages/                          # agenda, app, blog, post, biosite, digitalsignage, política, termos
├── assets/
│   ├── css/                        # index, blog, footer, cookie-consent, digitalsignage, politica-termo, 404
│   ├── js/                         # scripts das páginas + módulos compartilhados
│   ├── img/                        # imagens do site (consultorio/, logo/, perfil/, slides/, og-image.jpg)
│   ├── ui/                         # favicons e ícones do PWA (.ico, .svg, .png)
│   ├── audio/                      # músicas do Digital Signage
│   └── config.json                 # conteúdo do Digital Signage
└── tests/                          # testes (não vão para a Vercel: ver .vercelignore)
```

---

## Fundação Fênix 193

```
ff193/
├── index.html                         # Página inicial (home)
├── pesquisa.html                      # Página de resultados da pesquisa global
├── 404.html                           # Página de erro personalizada
├── akannihub.html                     # Painel administrativo (autenticado)
├── firestore.rules                    # Regras de segurança Firestore v1.9.0
├── vercel.json                        # Configuração de deploy, cache e headers
├── site.webmanifest                   # PWA manifest
├── sitemap.xml                        # Mapa do site para SEO
├── robots.txt                         # Diretivas para crawlers
│
├── pages/                             # Subpáginas públicas
│   ├── nossa-historia.html
│   ├── missao-valores.html
│   ├── equipe.html
│   ├── projetos.html
│   ├── capacitacao.html
│   ├── eventos.html
│   ├── parcerias.html
│   ├── noticias.html
│   ├── noticia.html                   # Leitura de uma notícia
│   ├── transparencia.html
│   └── fale-conosco.html              # Formulário de contato (75 municípios de SE)
│
├── assets/
│   ├── css/
│   │   ├── style.css                  # Design system global (tokens, layout, componentes)
│   │   ├── header.css                 # Header em duas camadas (header--top / header--main)
│   │   ├── dropdown.css               # Menu dropdown desktop/mobile
│   │   ├── pages.css                  # Estilos compartilhados entre subpáginas
│   │   ├── noticias.css               # Grid, modal e estilos da página de notícias
│   │   ├── contato.css                # Página Fale Conosco
│   │   ├── pesquisa.css               # Página de resultados da pesquisa
│   │   ├── acessibilidade.css         # Painel de acessibilidade, paletas e player AD
│   │   ├── back-to-top.css            # Botão "Voltar ao topo"
│   │   ├── cbmse-feed.css             # Widget "Segurança & Defesa Civil"
│   │   ├── chatbot.css                # Chatbot flutuante LuminIA
│   │   └── 404.css                    # Animação da página de erro
│   │
│   ├── js/
│   │   ├── script.js                  # Lógica principal: menu, notícias, números de impacto, LGPD
│   │   ├── search-core.js             # Núcleo da busca (índice, leitura das páginas, Firestore, ranking)
│   │   ├── search.js                  # Dropdown de sugestões do hero
│   │   ├── pesquisa.js                # Lógica da página de resultados
│   │   ├── acessibilidade.js          # Painel de acessibilidade (auto-injetado)
│   │   ├── back-to-top.js             # Botão "Voltar ao topo" (auto-injetado)
│   │   ├── media-player.js            # Player de vídeo com audiodescrição
│   │   ├── cbmse-feed.js              # Widget "Segurança & Defesa Civil"
│   │   └── chatbot.js                 # Assistente virtual LuminIA
│   │
│   ├── data/                          # Faixas de audiodescrição (.json)
│   ├── img/                           # Imagens estáticas (logos, fotos institucionais)
│   └── ui/                            # Favicons e ícones PWA
│
└── .github/
    └── ISSUE_TEMPLATE/
        └── solicitacao_cliente.yml    # Template legado de chamado (o painel não aponta mais para ele)
```

---

## LuminaBoard

```
/
├── index.html                  # Marcação (HTML) do painel — carrega css/ e js/main.js
├── offline.html                # Página mostrada sem internet quando o painel ainda não está guardado
├── css/                        # Estilos (a ordem de carregamento é a cascata)
│   ├── tokens-base.css         # Variáveis (cores, espaçamento, tipografia) e base
│   ├── login.css               # Login e overlay de início
│   ├── modals.css              # Modais (histórico, relatório semanal, ansiedade)
│   ├── shell.css               # Barra lateral, player e área principal
│   ├── components.css          # Cronômetro, chips, progresso, heatmap, configurações
│   ├── flashcards.css          # Janela de Flashcards
│   ├── ticker.css              # Rodapé e aviso de nova versão
│   └── responsive.css          # Media queries (tablet e celular)
├── js/                         # Módulos ES (ver "Estrutura do código" abaixo)
├── config.json                 # Configurações e valores padrão do LuminaBoard
├── firestore.rules             # Regras de segurança do Firestore
├── firebase-messaging-sw.js    # Service Worker — cache offline + push em segundo plano
├── firestore.indexes.json      # Índices do Firestore (leitura por período e soma de horas)
├── site.webmanifest            # PWA manifest (ícone, nome, cores)
├── README.md                   # Este guia
│
├── img/
│   ├── favicon-96x96.png
│   ├── web-app-manifest-192x192.png
│   ├── web-app-manifest-512x512.png
│   ├── maskable-192x192.png    # ícone maskable (conteúdo dentro da zona segura de 80%)
│   └── maskable-512x512.png
│
├── audio/
│   ├── foco-01.mp3
│   ├── foco-02.mp3
│   └── foco-03.mp3
│
├── vendor/                     # JSZip, sql.js e fzstd (só carregados ao importar/exportar do Anki) + LICENSES.md
├── tests/                      # Testes automáticos dos flashcards (npm install && npm test)
└── functions/                  # Opcional (requer plano Blaze) — push real agendado, por pessoa (ver Configuração e Deploy)
    ├── index.js                # Agendador `enviarLembretes` (a cada 5 min)
    ├── lib/reminders.js        # Lógica pura: horários, fuso, janela de 5 min
    ├── lib/send-reminders.js   # Envio: aparelhos da pessoa, sem duplicar, limpa tokens inválidos
    ├── test/                   # 20 testes (npm test)
    └── package.json
    ├── index.js
    └── package.json
```

---

## 👨‍💻 Créditos

<div align="center">

| | |
| -- | -- |
| **Desenvolvimento** | Geovani Santos — GeoCODE Programmer |
| **Portfólio** | [eusougeovani.vercel.app](https://eusougeovani.vercel.app) |
| **Suporte técnico** | (79) 9 8866-3905 |
| **Contato** | Instagram [@geovanikeeper](https://instagram.com/geovanikeeper) · LinkedIn/Discord [@eusougeovani](https://github.com/eusougeovani) |

*Desenvolvido com ☕ por GeoCODE Programmer — 2025 / 2026*

</div>
