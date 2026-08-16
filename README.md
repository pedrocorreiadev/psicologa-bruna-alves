# Bruna Alves — Psicóloga Clínica

Site institucional (landing page) da psicóloga clínica **Bruna Alves** —
Terapia Cognitivo-Comportamental (TCC), aplicadora ABA/DENVER e Neuropsicologia.

## Stack

- **Next.js 15** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS v4** (tokens via `@theme`)
- **shadcn/ui** (Button, Accordion) + **Radix UI**
- **Framer Motion** (revelação ao rolar, stagger, microinterações)
- **Lucide React** (ícones) + `next/font` (Playfair Display + Inter) + `next/image`

## Design System

Fonte única dos tokens: [`app/globals.css`](app/globals.css).

### Paleta (definida pela cliente)

| Papel                     | Cor | HEX       | Uso                                               |
| ------------------------- | --- | --------- | ------------------------------------------------- |
| **Primária — Marsala**    | 🟥  | `#955251` | CTAs, links ativos, destaques, ícones importantes |
| **Secundária — Castanho** | 🟫  | `#6A4A38` | Títulos, menu, footer, textos importantes         |
| **Apoio — Nude**          | 🟧  | `#F3D9C1` | Fundos, cards, seções, áreas de respiro           |

Tons derivados (`--marsala-50…800`, `--castanho-50…900`, `--nude-50…400`) cobrem
hover, active, disabled, gradientes, sombras, overlays e bordas — sempre dentro da
mesma identidade. Contraste de texto validado para **WCAG AA**.

### Tipografia — “Classic Elegant”

- **Títulos:** Playfair Display (serif, elegante/editorial)
- **Corpo & botões:** Inter

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

## Acessibilidade, SEO e Performance

- **A11y:** foco visível, navegação por teclado, `aria-*`, skip-link, contraste AA,
  `prefers-reduced-motion` respeitado.
- **SEO:** metadata + Open Graph/Twitter, `sitemap.xml`, `robots.txt`, HTML semântico,
  hierarquia de headings e dados estruturados JSON-LD (Psychologist + FAQPage).
- **Performance:** `next/image` (AVIF/WebP, lazy), `next/font` (self-host),
  code splitting via `next/dynamic`, página pré-renderizada estaticamente.
