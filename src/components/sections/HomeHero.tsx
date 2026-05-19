"use client"
import React, { useRef } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

export function HomeHero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const maskRef = useRef<SVGSVGElement>(null)

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger)

    if (maskRef.current && containerRef.current) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=200%",
          scrub: 0.5,
          pin: true,
          pinSpacing: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      })

      const mm = gsap.matchMedia()

      mm.add("(min-width: 768px)", () => {
        tl.fromTo(
          maskRef.current,
          { scale: 1, transformOrigin: "50% 50%" },
          { scale: 100, transformOrigin: "45% 30%", ease: "power2.inOut", duration: 1, immediateRender: true },
        )
      })

      mm.add("(max-width: 767px)", () => {
        tl.fromTo(
          maskRef.current,
          { scale: 1, transformOrigin: "50% 50%" },
          { scale: 100, transformOrigin: "45% 35%", ease: "power2.inOut", duration: 1, immediateRender: true },
        )
      })

      tl.to({}, { duration: 0.2 })
    }
  }, { scope: containerRef })

  return (
    <div id="home-hero" ref={containerRef} className="relative h-screen w-full overflow-hidden bg-neutral-100">
      {/* H1 semántico para SEO — visualmente oculto, no afecta la animación del hero */}
      <h1 className="sr-only">
        Selva Ecomarketing — Agencia de Marketing Digital Sostenible en Perú
      </h1>

      {/* Video Background */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        src="/jungle-2025-12-09-22-46-01-utc_1.webm"
      />

      {/* Mask Layer */}
      <svg
        ref={maskRef}
        className="absolute inset-0 w-full h-full z-10 origin-[45%_35%] md:origin-[45%_30%]"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <mask id="hero-mask">
            <rect width="100%" height="100%" fill="white" />
            <text x="50%" y="30%" textAnchor="middle" dominantBaseline="middle"
              className="hidden md:inline text-[30vw] font-black uppercase tracking-tighter"
              style={{ fontFamily: "Arial Black, Verdana, sans-serif" }} fill="black">ECO</text>
            <text x="50%" y="70%" textAnchor="middle" dominantBaseline="middle"
              className="hidden md:inline text-[28vw] font-black uppercase tracking-tighter"
              style={{ fontFamily: "Arial Black, Verdana, sans-serif" }} fill="black">MKT</text>
            <text x="50%" y="35%" textAnchor="middle" dominantBaseline="middle"
              className="md:hidden text-[48vw] font-black uppercase tracking-tighter"
              style={{ fontFamily: "Arial Black, Verdana, sans-serif" }} fill="black">ECO</text>
            <text x="50%" y="65%" textAnchor="middle" dominantBaseline="middle"
              className="md:hidden text-[44vw] font-black uppercase tracking-tighter"
              style={{ fontFamily: "Arial Black, Verdana, sans-serif" }} fill="black">MKT</text>
          </mask>
        </defs>
        <rect width="100%" height="100%" fill="#F5F5F5" mask="url(#hero-mask)" />
      </svg>

      {/* Foreground content — H2 + tagline + CTAs (over mask, below logo) */}
      <div className="absolute inset-x-0 bottom-24 md:bottom-32 z-20 px-6 md:px-12 flex flex-col items-center text-center pointer-events-none">
        <p className="text-xs md:text-sm font-bold tracking-[0.3em] uppercase text-neutral-700 mb-3">
          Marketing con propósito · Perú
        </p>
        <p className="text-base md:text-xl text-neutral-800 max-w-xl mb-6 leading-relaxed">
          Estrategias que unen <span className="text-primary font-bold">impacto, reputación y negocio</span>.
          Sin greenwashing, con datos reales.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 pointer-events-auto">
          <Link
            href="/servicios/"
            className="inline-flex items-center justify-center gap-2 px-6 md:px-8 py-3 md:py-4 bg-primary text-white rounded-full text-sm md:text-base font-bold tracking-wide hover:bg-secondary transition-all shadow-lg shadow-primary/20 hover:shadow-xl hover:-translate-y-0.5"
          >
            Ver servicios <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/simulador/"
            className="inline-flex items-center justify-center gap-2 px-6 md:px-8 py-3 md:py-4 bg-white/80 backdrop-blur text-neutral-900 rounded-full text-sm md:text-base font-bold tracking-wide hover:bg-white transition-all border border-neutral-200 shadow-sm"
          >
            Armar mi mix
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-20 text-neutral-700 flex flex-col items-center gap-1 animate-pulse pointer-events-none">
        <span className="text-[10px] md:text-xs font-medium tracking-widest uppercase">Scroll</span>
        <div className="w-[1px] h-6 md:h-8 bg-neutral-700" />
      </div>
    </div>
  )
}
