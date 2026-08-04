"use client";

import * as React from "react";
import { motion, type HTMLMotionProps } from "framer-motion";

import { variantMap, type RevealVariant } from "@/lib/motion";
import { cn } from "@/lib/utils";

type MotionDivProps = Omit<
  HTMLMotionProps<"div">,
  "variants" | "initial" | "animate" | "whileInView" | "children"
>;

type RevealProps = {
  variant?: RevealVariant;
  /** Renderiza como item de um <RevealGroup> (herda o stagger do container). */
  asItem?: boolean;
  delay?: number;
  className?: string;
  children: React.ReactNode;
} & MotionDivProps;

/**
 * Revelação ao rolar (Framer Motion).
 *
 * Renderiza SEMPRE um `motion.div` com `initial="hidden"` — o tipo do elemento e
 * o markup inicial são idênticos no servidor e no cliente, então não há hydration
 * mismatch. A animação só ocorre no cliente, quando o elemento entra na viewport
 * (`whileInView`), disparada uma única vez.
 *
 * A preferência de "menos movimento" é tratada globalmente por
 * `<MotionConfig reducedMotion="user">` (ver app/providers.tsx) — não há
 * ramificação de render aqui.
 */
export function Reveal({
  variant = "fade-up",
  asItem = false,
  delay = 0,
  className,
  children,
  ...props
}: RevealProps) {
  const variants = variantMap[variant];

  // Item dentro de um container com stagger: o container controla o "show".
  if (asItem) {
    return (
      <motion.div variants={variants} className={cn(className)} {...props}>
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      className={cn(className)}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2, margin: "0px 0px -80px 0px" }}
      transition={delay ? { delay } : undefined}
      {...props}
    >
      {children}
    </motion.div>
  );
}

type RevealGroupProps = {
  className?: string;
  amount?: number;
  children: React.ReactNode;
} & Omit<
  HTMLMotionProps<"div">,
  "variants" | "initial" | "whileInView" | "children"
>;

/**
 * Container que orquestra o efeito stagger nos <Reveal asItem /> internos.
 * Mesmo princípio de estabilidade SSR/cliente do <Reveal>.
 */
export function RevealGroup({
  className,
  children,
  amount = 0.15,
  ...props
}: RevealGroupProps) {
  return (
    <motion.div
      className={cn(className)}
      variants={variantMap.stagger}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
