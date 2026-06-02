# GeoCODE Programmer · Site Oficial

Site de captação de clientes e apresentação de serviços do **Geovani Santos — GeoCODE Programmer**, desenvolvedor web especializado em Sites Institucionais, Digital Signage, sistemas (Akanni) e Google Meu Negócio. Hospedado na **Vercel**, sem custo de infraestrutura.

---

## 📁 Estrutura de Arquivos

```
/
├── index.html          # Landing page principal (hero, soluções, stack, sobre, clientes, CTA)
├── privacidade.html    # Política de Privacidade (LGPD)
├── termos.html         # Termos de Uso
├── README.md           # Este arquivo
└── assets/
    ├── logos/
    │   ├── ff193.png
    │   └── psimf.png
    └── ui/
        ├── favicon.ico
        ├── favicon.svg
        ├── favicon-96x96.png
        ├── apple-touch-icon.png
        └── site.webmanifest
```

> ⚠️ **Atenção:** O diretório de assets é `assets/` (sem o "e"). Verifique se sua pasta local está nomeada corretamente.

---

## 🎨 Design System

| Token | Valor |
|---|---|
| Background | `#0D1520` |
| Surface | `#131F30` |
| Surface-2 | `#1C2B40` |
| Mint (accent) | `#34D1B7` |
| Steel (secundário) | `#75A7BD` |
| Orange (CTA) | `#FF5E00` |
| Texto principal | `#F0F6FA` |

**Tipografia:**
- Títulos → `Syne` (800)
- Corpo → `Figtree` (400/500/600)
- Código/labels → `JetBrains Mono` (400/500)

---

## 📱 Responsividade

Todos os arquivos são responsivos em quatro camadas de breakpoint:

| Breakpoint | Largura | Ajustes principais |
|---|---|---|
| Desktop | > 860px | Layout completo, nav links visíveis, footer 4 colunas, hint de carrossel oculto |
| Tablet | ≤ 860px | Menu hambúrguer, planos em carrossel, footer 2 colunas |
| Mobile | ≤ 600px | Botões full-width, stack 2 colunas, WA float compacto, footer 1 coluna |
| Mobile P | ≤ 380px | Tipografia reduzida, cards compactos |

**Mobile nav:** ao abrir o menu hambúrguer, `.nav-links` ocupa a tela cheia e `.nav-cta-wrap` fica fixo no rodapé (bottom: 2.5rem), evitando sobreposição dos dois overlays.

---

## ⚙️ Tecnologias e Dependências

Nenhuma dependência local. Tudo via CDN:

- **Google Fonts** — Syne, Figtree, JetBrains Mono
- **Font Awesome 6.5** — Ícones (`cdnjs.cloudflare.com`)

**Infraestrutura de hospedagem (free tier):**

| Serviço | Uso |
|---|---|
| Vercel | Deploy e CDN do front-end |
| Firebase (Spark) | Banco de dados Firestore + Auth |
| GitHub | Repositório + chamados de suporte |
| Cloudinary | Armazenamento e otimização de mídias |
| Google Cloud | Maps API + Workspace |

---

## 🚀 Deploy

O projeto é **zero-build** — apenas HTML, CSS e JS vanilla. Para publicar:

```bash
# Via Vercel CLI
vercel deploy

# Ou simplesmente arraste a pasta para vercel.com/new
```

O único custo fixo obrigatório é o **domínio próprio: R$ 40,00/ano**.

---

## 📄 Páginas

### `index.html`
Landing page completa com seções:
- **Hero** — título, descrição, botões CTA e stats com contador animado
- **Soluções** — Carrossel horizontal com 5 cards de serviço: Site Institucional, Sistema Akanni, Digital Signage, SEO & Google Meu Negócio, Aulas de Informática. Inclui hint de scroll visível apenas em mobile (≤ 860px)
- **Stack** — 8 tecnologias principais em grid responsivo
- **Sobre** — Card de perfil + biografia
- **Clientes** — Faixa de logos com scroll automático infinito (animação pausada no hover)
- **CTA Final** — Banner de conversão com botão WhatsApp
- **Rodapé** — 4 colunas (Marca + Soluções + Navegação + Contato), responsivo até 1 coluna
- **WA Float** — Botão flutuante do WhatsApp fixo no canto inferior direito (z-index 900)

### `privacidade.html`
Política de Privacidade conforme a **Lei nº 13.709/2018 (LGPD)**, cobrindo:
coleta e finalidade dos dados, base legal, direitos do titular, compartilhamento com subprocessadores, retenção, segurança e canal do DPO. Inclui breadcrumb, meta pills e cards de retenção. Rodapé simplificado (apenas footer-bottom).

### `termos.html`
Termos de Uso com: aceitação e âmbito, obrigações das partes, propriedade intelectual, SLA e infraestrutura, cronograma de pagamento (30/30/40%), limitação de responsabilidade, política de atualizações e foro competente (Aracaju/SE). Mesma estrutura visual do `privacidade.html`.

---

## 🐛 Correções Aplicadas (v1.1)

| Arquivo | Correção |
|---|---|
| Todos | Typo no path de assets: `/assetes/ui/` → `/assets/ui/` |
| `index.html` | Adicionadas meta tags Open Graph (`og:title`, `og:description`, `og:type`, `og:url`) |
| `index.html` | Corrigida propriedade duplicada `width` em `.client-logo img`; `object-fit: cover` → `contain` (correta para logos) |
| `index.html` | Adicionado `transform: translateY(-2px)` ao hover de `.plan-link.primary` |
| `index.html` | Botão WA Float adicionado ao HTML e CSS |
| `index.html` | Hint de scroll do carrossel adicionado (visível apenas em mobile) |
| `index.html` | Mobile nav: `.nav-cta-wrap` separado do overlay principal, posicionado em `bottom: 2.5rem` |
| `privacidade.html` | Mobile nav corrigido (mesmo padrão do index) |
| `privacidade.html` | Botão WA Float adicionado |
| `termos.html` | Mobile nav corrigido (mesmo padrão do index) |
| `termos.html` | Botão WA Float adicionado |

---

## 📞 Contato

**Geovani Santos — GeoCODE Programmer**
- WhatsApp: [+55 79 98866-3905](https://wa.me/+5579988663905)
- E-mail: geocodeprogrammer@gmail.com
- LinkedIn: [linkedin.com/in/eusougeovani](https://linkedin.com/in/eusougeovani)
- Instagram: [@geovanikeeper](https://instagram.com/geovanikeeper)
- Localização: Aracaju, Sergipe — Brasil

---

*Desenvolvido no Linux com ☕ · © 2025 GeoCODE Programmer*