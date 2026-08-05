import { faqs, site, whatsappUrl } from "@/lib/site";

/**
 * Dados estruturados (schema.org) para rich results:
 * - Psychologist / ProfessionalService (perfil profissional)
 * - FAQPage (perguntas frequentes)
 */
export function JsonLd() {
  const profile = {
    "@context": "https://schema.org",
    "@type": ["Psychologist", "ProfessionalService"],
    name: `${site.name} — ${site.role}`,
    description: site.description,
    url: site.url,
    image: `${site.url}${site.ogImage}`,
    telephone: `+${site.whatsappNumber}`,
    priceRange: "$$",
    areaServed: "Acre, Brasil",
    availableLanguage: "Portuguese",
    knowsAbout: [
      "Terapia Cognitivo-Comportamental (TCC)",
      "ABA",
      "Modelo DENVER",
      "Neuropsicologia",
      "Psicologia infantil e adulta",
    ],
    sameAs: [site.instagram, whatsappUrl],
    address: {
      "@type": "PostalAddress",
      addressRegion: "AC",
      addressCountry: "BR",
    },
  };

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profile) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPage) }}
      />
    </>
  );
}
