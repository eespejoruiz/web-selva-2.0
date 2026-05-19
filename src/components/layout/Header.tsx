"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

const navLinks = [
  { name: "Inicio", href: "/" },
  { name: "Nosotros", href: "/nosotros" },
  { name: "Servicios", href: "/servicios" },
  { name: "Portafolio", href: "/portafolio" },
  { name: "Clientes", href: "/clientes" },
  { name: "¿Quién eres?", href: "/quien-eres" },
  { name: "Contacto", href: "/contacto" },
]

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const isWhiteHeaderPage = pathname?.startsWith("/servicios") ||
                            pathname?.startsWith("/contacto") ||
                            pathname?.startsWith("/clientes") ||
                            pathname?.startsWith("/nosotros") ||
                            pathname?.startsWith("/quien-eres")

  const isActiveLink = (href: string) => {
    if (href === "/") return pathname === "/"
    return pathname?.startsWith(href)
  }

  // Close menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  // Lock body scroll while menu is open (and pause Lenis if available)
  useEffect(() => {
    if (typeof window === "undefined") return
    const lenis = (window as unknown as { lenis?: { stop: () => void; start: () => void } }).lenis
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden"
      lenis?.stop()
    } else {
      document.body.style.overflow = ""
      lenis?.start()
    }
    return () => {
      document.body.style.overflow = ""
      lenis?.start()
    }
  }, [isMobileMenuOpen])

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-[100]">
        <div className="container mx-auto px-4 h-20 md:h-28 flex items-center justify-between relative">
          {/* Logo */}
          <Link href="/" className="z-[110] flex items-center gap-3 shrink-0">
            <Image
              src="/SVG-SELVAISOTIPO-DEGRADADO.svg"
              alt="Selva Ecomarketing logo"
              width={96}
              height={96}
              className="h-12 md:h-16 w-auto object-contain"
              priority
            />
            <span className={cn(
              "hidden md:block text-[10px] font-bold tracking-[0.2em] uppercase leading-none",
              isWhiteHeaderPage ? "text-white" : "text-neutral-800"
            )}>
              ECO MARKETING
            </span>
          </Link>

          {/* Desktop nav — always visible (sin hover) */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => {
              const active = isActiveLink(link.href)
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "px-3 py-2 text-sm font-medium rounded-full transition-colors relative",
                    isWhiteHeaderPage
                      ? active ? "bg-white text-primary" : "text-white/80 hover:text-white hover:bg-white/10"
                      : active ? "bg-primary text-white" : "text-neutral-800 hover:bg-neutral-100"
                  )}
                >
                  {link.name}
                </Link>
              )
            })}
            <Link
              href="/contacto"
              className="ml-2 lg:ml-3 px-4 py-2 text-sm font-bold rounded-full bg-primary text-white hover:bg-secondary transition-colors shadow-md"
            >
              Conversemos
            </Link>
          </nav>

          {/* Mobile hamburger */}
          <button
            type="button"
            className={cn(
              "md:hidden p-2 z-[125] transition-colors",
              isWhiteHeaderPage ? "text-white" : "text-foreground"
            )}
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            aria-label={isMobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X className="w-8 h-8 text-white" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>
      </header>

      {/* Mobile fullscreen overlay — uses display (no opacity tricks) + transform-gpu to force own stacking ctx */}
      <div
        className={cn(
          "md:hidden fixed inset-0 z-[120] bg-neutral-900 transform-gpu",
          isMobileMenuOpen ? "flex" : "hidden",
          "flex-col items-stretch justify-between pt-24 pb-10 px-8"
        )}
        role="dialog"
        aria-modal="true"
        aria-hidden={!isMobileMenuOpen}
      >
        <nav className="flex flex-col gap-1 text-center">
          {navLinks.map((link) => {
            const active = isActiveLink(link.href)
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={cn(
                  "py-4 text-3xl sm:text-4xl font-abroad font-bold transition-colors border-b border-white/10",
                  active ? "text-primary" : "text-white hover:text-secondary"
                )}
              >
                {link.name}
              </Link>
            )
          })}
        </nav>
        <div className="flex flex-col items-center gap-3 text-white/80">
          <Link
            href="/contacto"
            onClick={() => setIsMobileMenuOpen(false)}
            className="w-full text-center px-6 py-4 bg-primary text-white rounded-full font-bold tracking-wide hover:bg-secondary transition-colors"
          >
            Conversemos
          </Link>
          <a
            href="https://wa.me/51913527489"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium tracking-wide hover:text-white"
          >
            WhatsApp +51 913 527 489
          </a>
          <a
            href="mailto:info@selvagencia.pe"
            className="text-sm font-medium tracking-wide hover:text-white"
          >
            info@selvagencia.pe
          </a>
        </div>
      </div>
    </>
  )
}
