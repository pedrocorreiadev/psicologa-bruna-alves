# Bruna Alves — Psicóloga Clínica

Site institucional premium (landing page) da psicóloga clínica **Bruna Alves** —
Terapia Cognitivo-Comportamental (TCC), aplicadora ABA/DENVER e Neuropsicologia.

Redesign completo com foco em **acolhimento, elegância e autoridade**, construído
sobre a paleta de marca da cliente. O conteúdo institucional foi 100% preservado;
apenas a forma (UI/UX, performance, acessibilidade e SEO) foi elevada.

## Design System
Fonte única dos tokens: [`app/globals.css`](app/globals.css).

### Paleta (— definida pela cliente)

| Papel | Cor | HEX | Uso |
|-------|-----|-----|-----|
| **Primária — Marsala** | 🟥 | `#955251` | CTAs, links ativos, destaques, ícones importantes |
| **Secundária — Castanho** | 🟫 | `#6A4A38` | Títulos, menu, footer, textos importantes |
| **Apoio — Nude** | 🟧 | `#F3D9C1` | Fundos, cards, seções, áreas de respiro |

Tons derivados (`--marsala-50…800`, `--castanho-50…900`, `--nude-50…400`) cobrem
hover, active, disabled, gradientes, sombras, overlays e bordas — sempre dentro da
mesma identidade. Contraste de texto validado para **WCAG AA**.

## Estrutura

```
app/
  layout.tsx        # fontes, metadata/SEO, Open Graph, JSON-LD, skip-link
  page.tsx          # composição das seções
  globals.css       # design system (tokens, base, animações)
  sitemap.ts, robots.ts
components/
  ui/               # primitivos shadcn (button, accordion)
  primitives/       # reveal (motion), section-heading, icons, whatsapp-cta
  layout/           # header, footer, brand, whatsapp-fab
  sections/         # hero, trust-band, about, approaches, how-it-works,
                    # modalities, testimonials, faq, final-cta
  seo/              # json-ld (Psychologist + FAQPage)
lib/
  site.ts           # conteúdo institucional centralizado (single source)
  motion.ts         # variantes Framer Motion
  utils.ts          # cn()
public/img/         # imagens otimizadas via next/image
legacy/             # protótipo estático original (referência)
```


