import * as React from "react";
import { Share2, MapPin } from "lucide-react";

import { nav, site, whatsappUrl } from "@/lib/site";
import { Brand } from "@/components/layout/brand";
import { WhatsAppIcon } from "@/components/primitives/icons";

export function Footer() {
  const year = 2026;

  return (
    <footer className="bg-castanho-800 text-nude-200/75">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3">
        <div className="max-w-xs">
          <Brand variant="onDark" />
          <p className="mt-5 text-sm leading-relaxed">
            {site.role} — {site.crp}.
            <br />
            Cuidar de você com atenção, cuidado e carinho.
          </p>
        </div>

        <nav aria-label="Rodapé">
          <h2 className="mb-4 font-serif text-base font-semibold text-nude-50">
            Navegação
          </h2>
          <ul className="space-y-2.5 text-sm">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="transition-colors hover:text-nude-50"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="mb-4 font-serif text-base font-semibold text-nude-50">
            Contato
          </h2>
          <ul className="space-y-3 text-sm">
            <li>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 transition-colors hover:text-nude-50"
              >
                <WhatsAppIcon className="size-4" />
                {site.whatsappDisplay}
              </a>
            </li>
            <li>
              <a
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 transition-colors hover:text-nude-50"
              >
                <Share2 className="size-4" strokeWidth={1.75} />
                {site.instagramHandle}
              </a>
            </li>
            <li className="inline-flex items-center gap-2">
              <MapPin className="size-4" strokeWidth={1.75} />
              {site.location}
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-nude-200/10">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-2 px-4 py-5 text-xs text-nude-200/55 sm:flex-row sm:px-6">
          <p>
            © {year} {site.name} · {site.role} · {site.crp}. Todos os direitos
            reservados.
          </p>
          <p>Este site respeita o sigilo profissional e a LGPD.</p>
        </div>
      </div>
    </footer>
  );
}
