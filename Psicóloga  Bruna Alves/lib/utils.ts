import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/** Une classes Tailwind resolvendo conflitos (padrão shadcn/ui). */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
