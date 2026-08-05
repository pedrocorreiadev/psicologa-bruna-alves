import * as React from "react";
import { Check } from "lucide-react";

import { modalities } from "@/lib/site";
import { iconMap } from "@/components/primitives/icons";
import { SectionHeading } from "@/components/primitives/section-heading";
import { RevealGroup, Reveal } from "@/components/primitives/reveal";

export function Modalities() {
  return (
    <section className="bg-nude-200/50 py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Modalidades"
          title="Presencial ou online — do seu jeito"
        />

        <RevealGroup className="mt-12 grid gap-6 sm:grid-cols-2">
          {modalities.map((m) => {
            const Icon = iconMap[m.icon];
            return (
              <Reveal
                asItem
                key={m.title}
                className="rounded-[1.5rem] border border-border bg-surface p-8 shadow-soft transition-shadow duration-300 hover:shadow-md"
              >
                <div className="mb-5 flex items-center gap-3">
                  <span className="grid size-12 place-items-center rounded-xl bg-marsala-50 text-primary">
                    <Icon className="size-6" strokeWidth={1.75} />
                  </span>
                  <h3 className="font-serif text-xl font-semibold text-heading">
                    {m.title}
                  </h3>
                </div>
                <ul className="space-y-3">
                  {m.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-muted"
                    >
                      <Check
                        className="mt-1 size-4 shrink-0 text-primary"
                        strokeWidth={2.5}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
            );
          })}
        </RevealGroup>
      </div>
    </section>
  );
}
