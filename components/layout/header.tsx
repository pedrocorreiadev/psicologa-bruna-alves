"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

import { nav } from "@/lib/site";
import { cn } from "@/lib/utils";
import { Brand } from "@/components/layout/brand";
import { WhatsAppCta } from "@/components/primitives/whatsapp-cta";

export function Header() {
  const [open, setOpen] = React.useState(false);
  const [hidden, setHidden] = React.useState(false);
  const visible = open || !hidden;
  const menuButtonRef = React.useRef<HTMLButtonElement>(null);
  const closeButtonRef = React.useRef<HTMLButtonElement>(null);

  React.useEffect(() => {
    let previousScrollY = Math.max(0, window.scrollY);

    const onScroll = () => {
      const scrollY = Math.max(0, window.scrollY);
      const delta = scrollY - previousScrollY;

      if (open || scrollY <= 16) {
        setHidden(false);
        previousScrollY = scrollY;
        return;
      }

      // Ignore small movements to keep the menu from flickering.
      if (Math.abs(delta) < 4) return;

      setHidden(delta > 0);
      previousScrollY = scrollY;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [open]);

  React.useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    if (open) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", onKeyDown);
      const closeButton = closeButtonRef.current;
      if (closeButton) {
        requestAnimationFrame(() => closeButton.focus());
      }
    } else {
      document.body.style.overflow = "";
      const menuButton = menuButtonRef.current;
      if (menuButton) {
        requestAnimationFrame(() => menuButton.focus());
      }
    }

    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const handleToggleMenu = () => {
    setOpen((previous) => {
      const next = !previous;

      if (next) {
        requestAnimationFrame(() => closeButtonRef.current?.focus());
      } else {
        requestAnimationFrame(() => menuButtonRef.current?.focus());
      }

      return next;
    });
  };

  const handleNavigate = () => {
    setOpen(false);
    requestAnimationFrame(() => menuButtonRef.current?.focus());
  };

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 py-2">
      <div
        inert={!visible}
        className={cn(
          "mx-auto max-w-6xl px-4 transition-[transform,opacity] duration-300 ease-out sm:px-6 motion-reduce:transition-none",
          visible
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-[calc(100%+1rem)] opacity-0",
        )}
      >
        <nav
          className="flex h-16 items-center justify-between rounded-full border border-border bg-surface/95 px-3 pl-4 shadow-soft backdrop-blur-md"
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
              ref={menuButtonRef}
              type="button"
              onClick={handleToggleMenu}
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
            className="pointer-events-auto fixed inset-0 z-[70] md:hidden p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
          >
            <button
              type="button"
              aria-label="Fechar menu"
              onClick={handleNavigate}
              className="absolute inset-0 bg-black/35 backdrop-blur-[2px]"
            />

            <div className="relative flex min-h-full items-center justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.96, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96, y: 10 }}
                transition={{ duration: 0.24, ease: "easeOut" }}
                onClick={(event) => event.stopPropagation()}
                role="dialog"
                aria-modal="true"
                aria-label="Menu de navegação"
                className="relative z-10 flex max-h-[85vh] w-full max-w-sm flex-col overflow-hidden rounded-[28px] border border-border bg-surface/95 p-3.5 shadow-2xl backdrop-blur-xl"
              >
                <div className="flex items-center justify-between pb-3">
                  <Brand />
                  <button
                    ref={closeButtonRef}
                    type="button"
                    onClick={handleNavigate}
                    aria-label="Fechar menu"
                    className="grid size-10 place-items-center rounded-full border border-border text-secondary transition-colors hover:bg-marsala-50 hover:text-primary"
                  >
                    <X className="size-5" />
                  </button>
                </div>

                <div className="flex min-h-0 flex-1 overflow-hidden rounded-2xl border border-border bg-surface">
                  <ul className="flex w-full flex-col gap-1 overflow-y-auto p-2">
                    {nav.map((item) => (
                      <li key={item.href}>
                        <a
                          href={item.href}
                          onClick={handleNavigate}
                          className="block rounded-xl px-3 py-2.5 text-[15px] font-medium text-secondary transition-colors hover:bg-marsala-50 hover:text-primary"
                        >
                          {item.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-3">
                  <WhatsAppCta
                    size="md"
                    className="w-full"
                    onClick={handleNavigate}
                  >
                    Agendar no WhatsApp
                  </WhatsAppCta>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
