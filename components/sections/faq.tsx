import * as React from "react";

import { faqs, site, whatsappUrl } from "@/lib/site";
import { SectionHeading } from "@/components/primitives/section-heading";
import { Reveal } from "@/components/primitives/reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

/** Transforma o número de WhatsApp presente na resposta em link clicável. */
function renderAnswer(answer: string) {
  const parts = answer.split(site.whatsappDisplay);
  if (parts.length === 1) return answer;
  return (
    <>
      {parts[0]}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="font-semibold text-primary underline underline-offset-2 hover:text-primary-hover"
      >
        {site.whatsappDisplay}
      </a>
      {parts[1]}
    </>
  );
}

export function Faq() {
  return (
    <section id="faq" className="scroll-mt-24 bg-nude-200/50 py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Dúvidas frequentes"
          title="Ainda com dúvidas? Tudo bem."
        />

        <Reveal className="mt-10" delay={0.05}>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((item, i) => (
              <AccordionItem key={item.q} value={`item-${i}`}>
                <AccordionTrigger>{item.q}</AccordionTrigger>
                <AccordionContent>{renderAnswer(item.a)}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
