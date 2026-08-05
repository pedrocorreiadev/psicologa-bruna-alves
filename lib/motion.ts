import type { Variants, Transition } from "framer-motion";

/**
 * Variantes de animação reutilizáveis (Framer Motion).
 * Movimento sutil e elegante — nunca exagerado. Deslocamentos curtos,
 * durações curtas e easing suave. `prefers-reduced-motion` é respeitado
 * pelo componente <Reveal /> e pelo CSS global.
 */

const easeOut: Transition["ease"] = [0.22, 1, 0.36, 1];

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: easeOut },
  },
};

export const fadeLeft: Variants = {
  hidden: { opacity: 0, x: 28 },
  show: { opacity: 1, x: 0, transition: { duration: 0.55, ease: easeOut } },
};

export const fadeRight: Variants = {
  hidden: { opacity: 0, x: -28 },
  show: { opacity: 1, x: 0, transition: { duration: 0.55, ease: easeOut } },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: easeOut } },
};

export const blurReveal: Variants = {
  hidden: { opacity: 0, y: 18, filter: "blur(10px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: easeOut },
  },
};

/** Container para efeito stagger nos filhos (usar com <Reveal variant="stagger">). */
export const staggerContainer: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.09, delayChildren: 0.05 },
  },
};

export const variantMap = {
  "fade-up": fadeUp,
  "fade-left": fadeLeft,
  "fade-right": fadeRight,
  scale: scaleIn,
  blur: blurReveal,
  stagger: staggerContainer,
} as const;

export type RevealVariant = keyof typeof variantMap;
