import * as React from "react";
import Image from "next/image";
import { BadgeCheck, MapPin, Monitor } from "lucide-react";

import { site } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/primitives/reveal";
import { Eyebrow } from "@/components/primitives/section-heading";
import { WhatsAppCta } from "@/components/primitives/whatsapp-cta";

const chips = [
  { icon: BadgeCheck, label: site.crp },
  { icon: MapPin, label: "Atendimento presencial" },
  { icon: Monitor, label: "Atendimento online" },
];

export function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden pb-16 pt-28 md:pb-28 md:pt-36"
    >
      {/* Formas orgânicas / profundidade */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -right-24 -top-24 size-[26rem] rounded-full bg-marsala-200/40 blur-3xl" />
        <div className="absolute -left-32 top-40 size-[22rem] rounded-full bg-nude-300/50 blur-3xl" />
      </div>

      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 md:grid-cols-2 lg:gap-16">
        <div>
          <Reveal>
            <Eyebrow>{site.role}</Eyebrow>
          </Reveal>

          <Reveal delay={0.06}>
            <h1 className="mt-5 font-serif text-4xl font-semibold leading-[1.08] text-heading sm:text-5xl lg:text-[3.4rem]">
              Cuidar de você com toda{" "}
              <em className="text-gradient-marsala not-italic">
                atenção, cuidado e carinho
              </em>
              .
            </h1>
          </Reveal>

          <Reveal delay={0.12}>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-muted">
              Terapia Cognitivo-Comportamental (TCC), aplicadora ABA/DENVER e
              neuropsicologia. Um espaço seguro e sem julgamentos — presencial e
              online.
            </p>
          </Reveal>

          <Reveal delay={0.18}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <WhatsAppCta />
              <Button asChild variant="outline" size="lg">
                <a href="#sobre">Conhecer meu trabalho</a>
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.24}>
            <ul className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted">
              {chips.map(({ icon: Icon, label }) => (
                <li key={label} className="inline-flex items-center gap-2">
                  <Icon className="size-4 text-primary" strokeWidth={2} />
                  {label}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal variant="scale" className="relative">
          <div className="relative mx-auto max-w-md">
            {/* Camada de profundidade atrás da foto */}
            <div
              aria-hidden
              className="absolute inset-0 translate-x-5 translate-y-5 rounded-[2rem] bg-nude-200"
            />
            <div className="relative overflow-hidden rounded-[2rem] shadow-lg ring-1 ring-black/5">
              <Image
                src="/img/bruna-hero.jpg"
                alt="Bruna Alves, psicóloga, em seu consultório com expressão acolhedora"
                width={1080}
                height={1440}
                priority
                sizes="(max-width: 768px) 90vw, 420px"
                className="aspect-[3/4] w-full object-cover"
              />
            </div>

            {/* Cartão flutuante de credibilidade (glass) */}
            <div className="glass absolute -bottom-5 -left-5 hidden items-center gap-3 rounded-2xl border border-border p-4 shadow-md sm:flex">
              <span className="grid size-11 place-items-center rounded-full bg-primary text-on-primary">
                <BadgeCheck className="size-5" strokeWidth={2} />
              </span>
              <span className="leading-tight">
                <span className="block font-serif text-base font-semibold text-heading">
                  Psicóloga registrada
                </span>
                <span className="block text-xs text-muted">{site.crp}</span>
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
