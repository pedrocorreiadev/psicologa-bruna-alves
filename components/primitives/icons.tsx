import * as React from "react";
import {
  Sparkles,
  Grid3x3,
  Brain,
  MapPin,
  Monitor,
  type LucideIcon,
} from "lucide-react";

/** Mapa de ícones Lucide referenciados por nome no conteúdo (lib/site.ts). */
export const iconMap: Record<string, LucideIcon> = {
  Sparkles,
  Grid3x3,
  Brain,
  MapPin,
  Monitor,
};

/** Ícone oficial do WhatsApp (glyph de marca — não existe no Lucide). */
export function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.5 2 12.04 2zm5.8 14.16c-.24.68-1.42 1.31-1.96 1.35-.5.05-1.12.24-3.68-.77-3.1-1.22-5.08-4.38-5.24-4.59-.15-.2-1.25-1.66-1.25-3.17 0-1.51.79-2.25 1.07-2.56.28-.31.61-.38.81-.38.2 0 .41.002.58.01.19.008.44-.07.69.53.24.6.82 2.07.89 2.22.07.15.12.32.02.52-.1.2-.15.32-.29.5-.15.17-.31.39-.44.52-.15.15-.3.31-.13.6.17.29.76 1.25 1.63 2.03 1.12 1 2.06 1.31 2.35 1.46.29.15.46.12.63-.07.17-.2.73-.85.92-1.14.2-.29.39-.24.66-.15.27.1 1.71.81 2 .96.29.15.49.22.56.34.07.12.07.68-.17 1.36z" />
    </svg>
  );
}
