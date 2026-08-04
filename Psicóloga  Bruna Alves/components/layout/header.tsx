"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

import { nav } from "@/lib/site";
import { cn } from "@/lib/utils";
import { Brand } from "@/components/layout/brand";
import { WhatsAppCta } from "@/components/primitives/whatsapp-cta";

export function Header() {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Trava o scroll do body quando o menu mobile está aberto.
  React.useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "py-2" : "py-3",
      )}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <nav
          className={cn(
            "flex h-16 items-center justify-between rounded-full px-3 pl-4 transition-all duration-300",
            scrolled
              ? "glass border border-border shadow-soft"
              : "border border-transparent",
          )}
          aria-label="Navegação principal"
        >
          <Brand />

          <div className="hidden items-center gap-1 md:flex">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-full px-3.5 py-2 text-sm font-medium text-muted transition-colors hover:bg-marsala-50 hover:text-primary"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <WhatsAppCta size="sm" className="hidden sm:inline-flex">
              Agendar
            </WhatsAppCta>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Fechar menu" : "Abrir menu"}
              aria-expanded={open}
              aria-controls="mobile-menu"
              className="grid size-11 cursor-pointer place-items-center rounded-full border border-border bg-surface/70 text-secondary transition-colors hover:bg-marsala-50 hover:text-primary md:hidden"
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </nav>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="mx-auto mt-2 max-w-6xl px-4 sm:px-6 md:hidden"
          >
            <div className="glass rounded-2xl border border-border p-3 shadow-md">
              <ul className="flex flex-col">
                {nav.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="block rounded-xl px-4 py-3.5 text-base font-medium text-secondary transition-colors hover:bg-marsala-50 hover:text-primary"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="p-2 pt-1">
                <WhatsAppCta size="md" className="w-full">
                  Agendar no WhatsApp
                </WhatsAppCta>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
