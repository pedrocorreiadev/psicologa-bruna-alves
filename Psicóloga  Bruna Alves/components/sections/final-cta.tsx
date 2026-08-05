import * as React from "react";
import Image from "next/image";

import { Reveal } from "@/components/primitives/reveal";
import { WhatsAppCta } from "@/components/primitives/whatsapp-cta";

export function FinalCta() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal variant="scale">
          <div className="relative grid overflow-hidden rounded-[2rem] bg-secondary text-nude-100 shadow-lg md:grid-cols-2">
            {/* brilho orgânico */}
            <div
              aria-hidden
              className="pointer-events-none absolute -left-16 -top-16 size-72 rounded-full bg-marsala-400/25 blur-3xl"
            />

            <div className="relative order-2 p-8 sm:p-12 lg:p-16 md:order-1">
              <h2 className="font-serif text-3xl font-semibold leading-tight text-nude-50 sm:text-4xl">
                Comece agora a sua jornada de transformação.
              </h2>
              <p className="mt-5 max-w-md text-lg leading-relaxed text-nude-200/85">
                Se você sente que precisa de um espaço seguro para falar, se
                acolher e se compreender melhor, estarei aqui para te acompanhar
                nesse processo.
              </p>
              <div className="mt-8">
                <WhatsAppCta variant="onDark" />
              </div>
            </div>

            <div className="relative order-1 min-h-[320px] w-full md:order-2 md:min-h-[460px]">
              <Image
                src="/img/bruna-cta.png"
                alt="Bruna Alves sorrindo, pronta para atender"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-top"
              />
              {/* leve overlay para harmonizar com a paleta */}
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-castanho-900/30 to-transparent md:bg-gradient-to-r md:from-secondary/60 md:to-transparent"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
