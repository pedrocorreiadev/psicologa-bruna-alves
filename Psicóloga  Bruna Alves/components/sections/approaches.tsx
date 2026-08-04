import * as React from "react";

import { approaches } from "@/lib/site";
import { iconMap } from "@/components/primitives/icons";
import { SectionHeading } from "@/components/primitives/section-heading";
import { RevealGroup, Reveal } from "@/components/primitives/reveal";

export function Approaches() {
  return (
    <section id="abordagens" className="scroll-mt-24 bg-nude-200/50 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Como eu posso te ajudar"
          title="Abordagens e especialidades"
          description="Cada demanda pede um caminho. Trabalho com abordagens complementares para cuidar de você de forma completa."
        />

        <RevealGroup className="mt-14 grid gap-6 md:grid-cols-3">
          {approaches.map((item) => {
            const Icon = iconMap[item.icon];
            return (
              <Reveal
                asItem
                key={item.key}
                className="group relative flex flex-col rounded-[1.5rem] border border-border bg-surface p-7 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:border-marsala-200 hover:shadow-lg"
              >
                <span className="mb-5 grid size-14 place-items-center rounded-2xl bg-marsala-50 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-on-primary">
                  <Icon className="size-7" strokeWidth={1.75} />
                </span>
                <h3 className="font-serif text-xl font-semibold text-heading">
                  {item.title}
                </h3>
                <p className="mt-3 leading-relaxed text-muted">
                  {item.description}
                </p>
              </Reveal>
            );
          })}
        </RevealGroup>
      </div>
    </section>
  );
}
