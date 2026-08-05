import * as React from "react";

import { steps } from "@/lib/site";
import { SectionHeading } from "@/components/primitives/section-heading";
import { RevealGroup, Reveal } from "@/components/primitives/reveal";

export function HowItWorks() {
  return (
    <section id="como-funciona" className="scroll-mt-24 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Simples começar"
          title="Do primeiro contato ao acolhimento"
          description="Dar o primeiro passo é o mais difícil. Por isso, deixei o processo leve e sem burocracia."
        />

        <RevealGroup
          className="relative mt-16 grid gap-10 md:grid-cols-4 md:gap-6"
          amount={0.1}
        >
          {/* Linha conectora (desktop) */}
          <div
            aria-hidden
            className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-border-strong to-transparent md:block"
          />
          {steps.map((step, i) => (
            <Reveal
              asItem
              key={step.title}
              className="relative text-center"
            >
              <span className="relative z-10 mx-auto grid size-14 place-items-center rounded-full bg-primary font-serif text-xl font-semibold text-on-primary shadow-marsala ring-8 ring-background">
                {i + 1}
              </span>
              <h3 className="mt-5 font-serif text-lg font-semibold text-heading">
                {step.title}
              </h3>
              <p className="mx-auto mt-2 max-w-[16rem] text-sm leading-relaxed text-muted">
                {step.description}
              </p>
            </Reveal>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
