"use client"

import React, { useState, useRef, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { useTransition } from "@/context/TransitionContext"
import { Menu, X } from "lucide-react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { cn } from "@/lib/utils"

const navLinks = [
  { name: "Inicio", href: "/" },
  { name: "¿Quién eres?", href: "/quien-eres" },
  { name: "Nosotros", href: "/nosotros" },
  { name: "Servicios", href: "/servicios" },
  { name: "Portafolio", href: "/portafolio" },
  { name: "Clientes", href: "/clientes" },
  { name: "Contacto", href: "/contacto" },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const headerRef = useRef<HTMLElement>(null)
  const logoRef = useRef<HTMLDivElement>(null)
  const menuContainerRef = useRef<HTMLDivElement>(null)
  const { navigate } = useTransition()
  const pathname = usePathname()
  
  // Check if we are on a page that needs white header elements
  const isWhiteHeaderPage = pathname?.startsWith('/servicios') || 
                           pathname?.startsWith('/contacto') || 
                           pathname?.startsWith('/clientes') || 
                           pathname?.startsWith('/nosotros') || 
                           pathname?.startsWith('/quien-eres')
                           
  // Special check for layout positioning - only services page has the special logo position
  const isServicePage = pathname?.startsWith('/servicios')

  useGSAP(() => {
    // Header scroll visibility
    const showAnim = gsap.from(headerRef.current, { 
      yPercent: -100,
      paused: true,
      duration: 0.3,
      ease: "power2.out"
    }).progress(1);

    ScrollTrigger.create({
      start: "top top",
      end: 99999,
      onUpdate: (self) => {
        if (self.direction === -1) {
            showAnim.play()
        } else {
            showAnim.reverse()
        }
      }
    });

    // Logo visibility - Hide when not at top
    if (logoRef.current) {
        gsap.to(logoRef.current, {
            opacity: 0,
            y: -20,
            pointerEvents: "none",
            duration: 0.3,
            ease: "power2.out",
            scrollTrigger: {
                trigger: document.body,
                start: "100 top", // Start hiding after 100px scroll
                toggleActions: "play none none reverse"
            }
        })
    }
  }, { scope: headerRef })

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const handleLinkClick = (href: string) => {
    // No need to close state since it is hover based for desktop
    // But for mobile click we might need it.
    // Actually, requested style is hover-based horizontal expansion.
    navigate(href)
  }

  return (
    <>
      <header ref={headerRef} className="fixed top-0 left-0 right-0 z-[100] transition-transform will-change-transform">
        {/* Background removed for transparency */}
        {/* <div className="bg-white/80 backdrop-blur-md border-b border-gray-100 absolute inset-0 z-10" /> */}
        <div className="container mx-auto px-4 h-32 flex items-center justify-between relative z-[110]">
          <Link 
            href="/" 
            onClick={(e) => { e.preventDefault(); handleLinkClick("/") }} 
            className={cn(
              "z-50 transition-all duration-300",
              !isServicePage && "absolute left-1/2 -translate-x-1/2 md:relative md:left-auto md:translate-x-0",
              isServicePage && "absolute right-4 top-24 md:top-28"
            )}
          >
            <div ref={logoRef} className={cn(
              "flex flex-col gap-1 transition-opacity",
              isServicePage ? "items-end" : "items-center"
            )}>
              <Image 
                src="/SVG-SELVAISOTIPO-DEGRADADO.svg" 
                alt="Selva Logo" 
                width={96} 
                height={96} 
                className="h-[96px] w-auto object-contain"
                priority
              />
              <span className={cn(
                "text-[10px] font-bold tracking-[0.2em] uppercase leading-none transition-colors",
                isWhiteHeaderPage ? "text-white" : "text-neutral-800"
              )}>
                ECO MARKETING
              </span>
            </div>
          </Link>

          {/* Desktop Interactive Menu */}
          <div 
              className="hidden md:flex items-center ml-auto"
              onMouseEnter={() => setIsOpen(true)}
              onMouseLeave={() => setIsOpen(false)}
          >
              <div className={cn(
                  "flex items-center gap-1 bg-transparent rounded-full py-2 px-2 transition-all duration-500 ease-out overflow-hidden",
                  isOpen ? "w-auto pr-6" : "w-12"
              )}>
                  {/* Burger Icon (Always visible) */}
                  <div className={cn(
                    "w-8 h-8 flex items-center justify-center shrink-0 cursor-pointer transition-colors",
                    isWhiteHeaderPage ? "text-white" : "text-foreground"
                  )}>
                      <Menu className="w-5 h-5" />
                  </div>

                  {/* Links (Reveal on Hover) */}
                  <nav className={cn(
                      "flex items-center gap-6 whitespace-nowrap transition-all duration-300",
                      isOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4 pointer-events-none"
                  )}>
                      {navLinks.map((link) => (
                          <Link 
                              key={link.href} 
                              href={link.href}
                              onClick={(e) => { e.preventDefault(); handleLinkClick(link.href) }}
                              className={cn(
                                "text-sm font-medium transition-colors hover:text-primary",
                                isWhiteHeaderPage ? "text-white" : "text-neutral-800"
                              )}
                          >
                              {link.name}
                          </Link>
                      ))}
                  </nav>
              </div>
          </div>

          {/* Mobile Menu Button (Classic) */}
          <button 
              className={cn(
                "md:hidden p-2 z-[130] absolute right-4 transition-colors",
                isWhiteHeaderPage ? "text-white" : "text-foreground"
              )}
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-8 h-8 text-white" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>
      </header>

      {/* Mobile Full Screen Menu Overlay (Only visible on mobile when open) */}
      <div className={cn(
        "md:hidden fixed inset-0 bg-black z-[120] flex flex-col items-center justify-center transition-all duration-500",
        isOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
      )}>
        <nav className="flex flex-col gap-8 text-center">
          {navLinks.map((link, i) => (
            <Link 
                key={link.href} 
                href={link.href}
                className={cn(
                    "text-5xl font-bold text-white/50 hover:text-white transition-all duration-300 transform translate-y-8 opacity-0",
                    isOpen && "translate-y-0 opacity-100"
                )}
                style={{ transitionDelay: `${i * 100}ms` }}
                onClick={(e) => { e.preventDefault(); setIsOpen(false); handleLinkClick(link.href) }}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </>
  )
}
