import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  // base — estados focus/disabled/transição consistentes
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-semibold cursor-pointer select-none transition-all duration-200 ease-out outline-none focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[color-mix(in_srgb,var(--color-ring)_35%,transparent)] disabled:pointer-events-none disabled:opacity-50 disabled:saturate-50 [&_svg]:shrink-0 [&_svg]:pointer-events-none active:translate-y-0",
  {
    variants: {
      variant: {
        // CTA principal — Marsala
        primary:
          "bg-primary text-on-primary shadow-marsala hover:bg-primary-hover hover:-translate-y-0.5 hover:shadow-lg active:bg-primary-active",
        // Castanho — hierarquia secundária forte
        secondary:
          "bg-secondary text-nude-50 shadow-soft hover:bg-castanho-700 hover:-translate-y-0.5 active:bg-castanho-800",
        // Contorno discreto
        outline:
          "border border-border-strong bg-surface/60 text-secondary hover:bg-marsala-50 hover:border-marsala-300 hover:text-primary",
        // Fantasma / links de navegação
        ghost:
          "text-secondary hover:bg-marsala-50 hover:text-primary",
        // Sobre fundos escuros (footer, CTA)
        onDark:
          "bg-nude-50 text-primary shadow-md hover:bg-white hover:-translate-y-0.5",
      },
      size: {
        sm: "h-10 px-4 text-sm",
        md: "h-12 px-6 text-[0.95rem]",
        lg: "h-14 px-7 text-base",
        icon: "h-14 w-14 p-0",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        ref={ref}
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
