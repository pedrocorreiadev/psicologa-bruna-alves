import * as React from "react";

import { Button, type ButtonProps } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/primitives/icons";
import { whatsappUrl } from "@/lib/site";
import { cn } from "@/lib/utils";

type WhatsAppCtaProps = {
  children?: React.ReactNode;
  variant?: ButtonProps["variant"];
  size?: ButtonProps["size"];
  className?: string;
  iconClassName?: string;
};

/** Botão/CTA padrão para agendamento via WhatsApp (abre em nova aba, seguro). */
export function WhatsAppCta({
  children = "Agendar no WhatsApp",
  variant = "primary",
  size = "lg",
  className,
  iconClassName,
}: WhatsAppCtaProps) {
  return (
    <Button asChild variant={variant} size={size} className={className}>
      <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
        <WhatsAppIcon className={cn("size-5", iconClassName)} />
        {children}
      </a>
    </Button>
  );
}
