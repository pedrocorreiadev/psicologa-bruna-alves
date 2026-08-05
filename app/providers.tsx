"use client";

import * as React from "react";
import { MotionConfig } from "framer-motion";

/**
 * Providers globais do lado do cliente.
 *
 * `MotionConfig reducedMotion="user"` faz o Framer Motion respeitar a
 * preferência do sistema (prefers-reduced-motion) de forma automática, em
 * tempo de animação — desabilitando transformações e mantendo apenas opacidade
 * para quem pede menos movimento.
 *
 * Isso é aplicado no cliente e NÃO altera o HTML renderizado no servidor, então
 * elimina a necessidade de ramificar o render por `useReducedMotion()` — que era
 * a causa do hydration mismatch (o hook retorna `null` no servidor e boolean no
 * cliente).
 *
 * Como este componente recebe `children` por prop, os filhos continuam sendo
 * Server Components (nada é forçado para o cliente).
 */
export function Providers({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
