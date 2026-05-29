# GeoCODE Programmer · Site Oficial

Site de captação de clientes e apresentação de serviços do **Geovani Santos — GeoCODE Programmer**, desenvolvedor web especializado em Sites Institucionais, Digital Signage, sistemas (Akanni) e Google Meu Negócio. Hospedado na **Vercel**, sem custo de infraestrutura.

---

## 📁 Estrutura de Arquivos

```
/
├── index.html          # Landing page principal (hero, soluções, planos, stack, sobre, CTA)
├── privacidade.html    # Política de Privacidade (LGPD)
├── termos.html         # Termos de Uso
├── README.md           # Este arquivo
└── assetes/
    └── ui/
        ├── favicon.ico
        ├── favicon.svg
        ├── favicon-96x96.png
        ├── apple-touch-icon.png
        └── site.webmanifest
```

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

Todos os arquivos são responsivos em três camadas de breakpoint:

| Breakpoint | Largura | Ajustes principais |
|---|---|---|
| Desktop | > 860px | Layout completo, nav links visíveis, footer 4 colunas |
| Tablet | ≤ 860px | Menu hambúrguer, planos em coluna única, infra badges 2 por linha, footer 2 colunas |
| Mobile | ≤ 600px | Botões full-width, tabela simplificada, stack 2 colunas, WA float circular, footer 1 coluna |
| Mobile P | ≤ 380px | Tipografia reduzida, cards compactos |

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
- **Hero** — título, descrição, badge animado, botões CTA e stats com contador
- **Soluções** — Site Institucional, Digital Signage, Akanni, Google Meu Negócio
- **Planos** — Combos (Básico, Clínico, Ecossistema) + tabela de módulos avulsos
- **Stack** — 8 tecnologias principais
- **Sobre** — Card de perfil + biografia
- **CTA Final** — Banner de conversão
- **Rodapé** — Links, contato e redes sociais

### `privacidade.html`
Política de Privacidade conforme a **Lei nº 13.709/2018 (LGPD)**, cobrindo:
coleta e finalidade dos dados, base legal, direitos do titular, compartilhamento com subprocessadores, retenção, segurança e canal do DPO.

### `termos.html`
Termos de Uso com: aceitação e âmbito, obrigações das partes, propriedade intelectual, SLA e infraestrutura, cronograma de pagamento (30/30/40%), limitação de responsabilidade, política de atualizações e foro competente (Aracaju/SE).

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