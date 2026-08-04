import type { Metadata } from "next";
import Link from "next/link";
import { Home } from "lucide-react";

import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Página não encontrada",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main className="grid min-h-dvh place-items-center px-6 py-24 text-center">
      <div className="max-w-md">
        <p className="font-serif text-6xl font-semibold text-primary">404</p>
        <h1 className="mt-4 font-serif text-3xl font-semibold text-heading">
          Página não encontrada
        </h1>
        <p className="mt-4 leading-relaxed text-muted">
          O endereço que você tentou acessar não existe ou foi movido. Vamos te
          levar de volta ao início.
        </p>
        <div className="mt-8 flex justify-center">
          <Button asChild variant="primary" size="lg">
            <Link href="/">
              <Home className="size-5" />
              Voltar ao início
            </Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
