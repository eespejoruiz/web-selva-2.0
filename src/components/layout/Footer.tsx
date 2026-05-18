import React from "react";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/site-config";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-neutral-900 text-neutral-400 py-12">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-sm">
          © {year} {SITE_CONFIG.brandFull}. Todos los derechos reservados.
        </div>
        <div className="flex gap-6 text-sm">
          <Link
            href="/politicas-de-privacidad"
            className="hover:text-white transition-colors"
          >
            Políticas de Privacidad
          </Link>
          <Link
            href="/terminos-y-condiciones"
            className="hover:text-white transition-colors"
          >
            Términos y Condiciones
          </Link>
        </div>
      </div>
    </footer>
  );
}
