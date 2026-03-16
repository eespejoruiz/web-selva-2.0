"use client"
import React, { useRef } from "react"
import { TransitionLink } from "@/components/ui/TransitionLink"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import Image from "next/image"

export function NosotrosSection({ showLink = true }: { showLink?: boolean }) {
  const containerRef = useRef<HTMLElement>(null)
  const imgRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    // Fade out effect
    gsap.to(containerRef.current, {
      opacity: 0,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
        pinSpacing: false
      }
    })

    // Parallax Image
    if (imgRef.current) {
        gsap.to(imgRef.current, {
        yPercent: 20,
        ease: "none",
        scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true
        }
        })
    }

    // Text Reveal
    if (textRef.current) {
        gsap.from(textRef.current, {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
            trigger: textRef.current,
            start: "top 80%",
        }
        })
    }
  }, { scope: containerRef })

  return (
    <section id="nosotros" ref={containerRef} className="relative min-h-screen py-8 md:py-20 px-4 md:px-8 overflow-hidden flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full z-0">
         <Image 
            src="/Recurso%206quieneres.webp" 
            alt="Background Texture" 
            fill
            className="object-cover"
            priority
            sizes="100vw"
         />
      </div>

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-12 items-center relative z-10">
        {/* Left Column: Image */}
        <div className="relative h-[30vh] md:h-[70vh] w-full order-1">
          <div ref={imgRef} className="absolute inset-0 w-full h-full md:h-[120%] md:-top-[10%]">
             <Image 
                src="/Recurso%205quieneres.webp" 
                alt="Selva Ecomarketing Team"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 50vw"
             />
          </div>
        </div>

        {/* Right Column: Text */}
        <div ref={textRef} className="flex flex-col gap-3 md:gap-6 order-2">
          <h2 className="text-4xl md:text-8xl font-abroad tracking-wide leading-[0.9] uppercase text-white">
            <span className="block">
              <span className="relative inline-block">
                N
              </span>
              OSOTROS
            </span>
          </h2>
          
          <div className="text-sm md:text-lg text-white leading-snug font-medium">
            <p className="mb-2">
              Hay marcas que hacen mucho por el planeta… y casi nadie se entera. Selva existe para esas empresas: las que ya tienen acciones sostenibles, pero no las están usando como deberían para construir marca, confianza y preferencia.
            </p>
            <p>
              Tomamos lo que hoy está perdido entre reportes, certificaciones y proyectos aislados, y lo convertimos en estrategia, contenido y campañas que hablan claro: impacto real, sin greenwashing, y marketing que respeta tanto a tu audiencia como al planeta.
            </p>
          </div>
          
          {showLink && (
            <TransitionLink 
              href="/nosotros" 
              className="mt-1 px-6 py-2 md:px-8 md:py-3 bg-transparent border border-primary text-white text-sm md:text-base rounded-full font-bold hover:bg-primary/20 transition-colors w-fit"
            >
              Conoce más sobre nosotros
            </TransitionLink>
          )}
        </div>
      </div>
    </section>
  )
}
