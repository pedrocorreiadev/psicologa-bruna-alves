"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";

import { whatsappUrl } from "@/lib/site";
import { WhatsAppIcon } from "@/components/primitives/icons";

/** Botão flutuante de WhatsApp — surge após rolar um pouco a página. */
export function WhatsAppFab() {
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 480);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Agendar pelo WhatsApp"
          initial={{ opacity: 0, scale: 0.6, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 20 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="animate-soft-pulse fixed bottom-5 right-5 z-50 grid size-14 place-items-center rounded-full bg-primary text-on-primary shadow-marsala transition-colors hover:bg-primary-hover"
        >
          <WhatsAppIcon className="size-7" />
        </motion.a>
      )}
    </AnimatePresence>
  );
}
