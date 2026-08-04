import * as React from "react";
import Image from "next/image";
import { Check } from "lucide-react";

import { aboutHighlights } from "@/lib/site";
import { Reveal } from "@/components/primitives/reveal";
import { Eyebrow } from "@/components/primitives/section-heading";

export function About() {
  return (
    <section id="sobre" className="py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 md:grid-cols-2 lg:gap-16">
        <Reveal variant="fade-right" className="order-1 md:order-none">
          <div className="relative mx-auto max-w-md">
            <div
              aria-hidden
              className="absolute inset-0 -translate-x-5 translate-y-5 rounded-[2rem] bg-marsala-100"
            />
            <div className="relative overflow-hidden rounded-[2rem] shadow-md ring-1 ring-black/5">
              <Image
                src="/img/bruna-sobre.jpg"
                alt="Retrato de Bruna Alves em tom sereno e reflexivo"
                width={1080}
                height={1440}
                sizes="(max-width: 768px) 90vw, 420px"
                className="aspect-[3/4] w-full object-cover"
              />
            </div>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <Eyebrow className="justify-start">Sobre mim</Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-4 font-serif text-3xl font-semibold leading-tight text-heading sm:text-4xl">
              Prazer, sou a Bruna. Psicóloga.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-lg leading-relaxed text-muted">
              Escolhi a psicologia porque acredito que ninguém deveria enfrentar
              suas questões emocionais sozinho.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              Cada pessoa carrega histórias, emoções, inseguranças e desafios
              únicos — e meu propósito é oferecer um espaço acolhedor, seguro
              e sem julgamentos para cada uma delas.
            </p>
          </Reveal>

          <ul className="mt-8 space-y-3.5">
            {aboutHighlights.map((item, i) => (
              <Reveal asItem={false} delay={0.2 + i * 0.06} key={item}>
                <li className="flex items-start gap-3 text-foreground">
                  <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-marsala-50 text-primary">
                    <Check className="size-3.5" strokeWidth={3} />
                  </span>
                  {item}
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
