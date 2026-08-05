import * as React from "react";

import { specialties } from "@/lib/site";
import { iconMap } from "@/components/primitives/icons";
import { RevealGroup, Reveal } from "@/components/primitives/reveal";

/** Faixa de especialidades — reforço de autoridade logo abaixo do hero. */
export function TrustBand() {
  return (
    <section aria-label="Especialidades" className="bg-secondary text-nude-100">
      <RevealGroup className="mx-auto grid max-w-6xl gap-6 px-4 py-7 text-center sm:grid-cols-3 sm:px-6 sm:divide-x sm:divide-nude-200/15">
        {specialties.map(({ icon, label }) => {
          const Icon = iconMap[icon];
          return (
            <Reveal
              asItem
              key={label}
              className="flex items-center justify-center gap-3"
            >
              <Icon className="size-6 shrink-0 text-nude-300" strokeWidth={1.75} />
              <span className="font-serif text-lg">{label}</span>
            </Reveal>
          );
        })}
      </RevealGroup>
    </section>
  );
}
