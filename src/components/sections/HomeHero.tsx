"use client"
import React, { useRef } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

export function HomeHero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const maskRef = useRef<SVGSVGElement>(null)

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger)
    
    // Zoom out animation
    if (maskRef.current && containerRef.current) {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top top",
                end: "+=200%", // Increase scroll distance significantly (was 100%)
                scrub: 0.5, // Slightly smoother scrubbing
                pin: true, 
                pinSpacing: true,
                anticipatePin: 1,
                invalidateOnRefresh: true // Force recalculation on resize/refresh
            }
        })

        const mm = gsap.matchMedia();

        // Desktop
        mm.add("(min-width: 768px)", () => {
          tl.fromTo(maskRef.current, 
            { 
                scale: 1, 
                transformOrigin: "50% 50%" 
            }, 
            { 
                scale: 100, 
                transformOrigin: "45% 30%", // Animate to text
                ease: "power2.inOut",
                duration: 1,
                immediateRender: true
            }
          )
        });

        // Mobile
        mm.add("(max-width: 767px)", () => {
          tl.fromTo(maskRef.current, 
            { 
                scale: 1, 
                transformOrigin: "50% 50%" 
            }, 
            { 
                scale: 100, 
                transformOrigin: "45% 35%", 
                ease: "power2.inOut",
                duration: 1,
                immediateRender: true
            }
          )
        });

        // Add a small pause at the end to ensure the effect is fully settled before unpinning
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
            {/* Desktop Layout - Separated and Centered */}
            <text 
                x="50%" y="30%" 
                textAnchor="middle" 
                dominantBaseline="middle" 
                className="hidden md:inline text-[30vw] font-black uppercase tracking-tighter" 
                style={{ fontFamily: 'Arial Black, Verdana, sans-serif' }}
                fill="black"
            >
              ECO
            </text>
            <text 
                x="50%" y="70%" 
                textAnchor="middle" 
                dominantBaseline="middle" 
                className="hidden md:inline text-[28vw] font-black uppercase tracking-tighter" 
                style={{ fontFamily: 'Arial Black, Verdana, sans-serif' }}
                fill="black"
            >
              MKT
            </text>

            {/* Mobile Layout - Stacked and Large */}
            <text 
                x="50%" y="35%" 
                textAnchor="middle" 
                dominantBaseline="middle"
                className="md:hidden text-[48vw] font-black uppercase tracking-tighter" 
                style={{ fontFamily: 'Arial Black, Verdana, sans-serif' }}
                fill="black"
            >
              ECO
            </text>
            <text 
                x="50%" y="65%" 
                textAnchor="middle" 
                dominantBaseline="middle"
                className="md:hidden text-[44vw] font-black uppercase tracking-tighter" 
                style={{ fontFamily: 'Arial Black, Verdana, sans-serif' }}
                fill="black"
            >
              MKT
            </text>
          </mask>
        </defs>
        {/* Overlay Rect - Color must match page background */}
        <rect width="100%" height="100%" fill="#F5F5F5" mask="url(#hero-mask)" />
      </svg>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 md:bottom-10 left-1/2 -translate-x-1/2 z-20 text-neutral-800 flex flex-col items-center gap-2 animate-pulse">
        <span className="text-xs md:text-sm font-medium tracking-widest uppercase">Scroll</span>
        <div className="w-[1px] h-8 md:h-12 bg-neutral-800" />
      </div>
    </div>
  )
}
