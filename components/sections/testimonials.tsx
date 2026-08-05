import * as React from "react";
import { Quote } from "lucide-react";

import { testimonials } from "@/lib/site";
import { SectionHeading } from "@/components/primitives/section-heading";
import { RevealGroup, Reveal } from "@/components/primitives/reveal";

export function Testimonials() {
  return (
    <section aria-label="Depoimentos" className="py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Confiança"
          title="Um cuidado que acolhe de verdade"
          description="Espaços preservando o sigilo de cada paciente."
        />

        <RevealGroup className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <Reveal
              asItem
              key={t.author}
              className="flex flex-col rounded-[1.5rem] border border-border bg-surface p-7 shadow-soft"
            >
              <Quote
                className="size-8 text-marsala-300"
                strokeWidth={1.5}
                aria-hidden
              />
              <blockquote className="mt-4 flex-1 leading-relaxed text-foreground">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-5 text-sm font-semibold text-primary">
                — {t.author}
              </figcaption>
            </Reveal>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
