import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter } from "next/font/google";

import { site } from "@/lib/site";
import { JsonLd } from "@/components/seo/json-ld";
import { Providers } from "./providers";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.role} | TCC, ABA/DENVER e Neuropsicologia`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    "psicóloga",
    "terapia",
    "TCC",
    "terapia cognitivo-comportamental",
    "ABA",
    "DENVER",
    "neuropsicologia",
    "atendimento online",
    "psicóloga Acre",
    "Bruna Alves",
  ],
  authors: [{ name: site.name }],
  creator: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: site.url,
    siteName: `${site.name} — ${site.role}`,
    title: `${site.name} — ${site.role}`,
    description:
      "Cuidar de você com toda atenção, cuidado e carinho. TCC, ABA/DENVER e Neuropsicologia. Presencial e online.",
    images: [
      {
        url: site.ogImage,
        width: 1080,
        height: 1440,
        alt: `${site.name}, ${site.role}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.role}`,
    description:
      "Cuidar de você com toda atenção, cuidado e carinho. TCC, ABA/DENVER e Neuropsicologia.",
    images: [site.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  category: "health",
};

export const viewport: Viewport = {
  themeColor: "#F3D9C1",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${playfair.variable} ${inter.variable}`}>
      <body className="bg-grain">
        <a
          href="#hero"
          className="sr-only left-4 top-4 z-[60] rounded-lg bg-primary px-4 py-2 font-semibold text-on-primary focus:not-sr-only focus:absolute"
        >
          Pular para o conteúdo
        </a>
        <Providers>{children}</Providers>
        <JsonLd />
      </body>
    </html>
  );
}
