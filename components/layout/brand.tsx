import * as React from "react";

import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Brand({
  variant = "default",
  className,
}: {
  variant?: "default" | "onDark";
  className?: string;
}) {
  const onDark = variant === "onDark";
  return (
    <a
      href="#hero"
      className={cn("group inline-flex items-center gap-2.5", className)}
      aria-label={`${site.name} — ${site.role}`}
    >
      <span
        className={cn(
          "grid size-10 place-items-center rounded-full font-serif text-lg font-semibold shadow-soft transition-transform duration-300 group-hover:scale-105",
          onDark ? "bg-nude-50 text-primary" : "bg-primary text-on-primary",
        )}
      >
        B
      </span>
      <span className="leading-tight">
        <span
          className={cn(
            "block font-serif text-lg font-semibold",
            onDark ? "text-nude-50" : "text-heading",
          )}
        >
          {site.name}
        </span>
        <span
          className={cn(
            "-mt-0.5 block text-[11px] tracking-wide",
            onDark ? "text-nude-200/80" : "text-muted",
          )}
        >
          {site.role} · {site.crp}
        </span>
      </span>
    </a>
  );
}
