"use client"
import React, { useRef } from "react"
import Image from "next/image"
import { TransitionLink } from "@/components/ui/TransitionLink"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"

export function QuienEresSection() {
  const containerRef = useRef<HTMLElement>(null)

  useGSAP(() => {
    // Fade out effect when scrolling out
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

    // Simple fade in for the content
    gsap.from(".animate-item", {
      opacity: 0,
      y: 30,
      duration: 1,
      stagger: 0.1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 60%",
      }
    })
  }, { scope: containerRef })

  return (
    <section
      id="quien-eres"
      ref={containerRef}
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#005f73]"
    >
      {/* Background Texture - Full Width/Height fixed or absolute */}
      <div 
        className="absolute inset-0 z-0 w-full h-full"
        style={{
            backgroundImage: "url('/Recurso%203quieneres.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
        }}
      />
      
      {/* Content Container */}
      <div className="container mx-auto max-w-7xl relative z-10 px-4 md:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-24 items-center">
          
          {/* Left Column: Title, Links, Buttons */}
          <div className="flex flex-col gap-8 text-white lg:col-span-2">
            
            {/* Title Block */}
            <div className="relative animate-item">
              <h2 className="text-6xl md:text-8xl font-abroad tracking-wide leading-[0.9] uppercase">
                <span className="block">
                  Y t
                  <span className="relative inline-block">
                    u
                  </span>,
                </span>
                <span className="block">Quien eres?</span>
              </h2>
            </div>

            {/* Links Block */}
            <div className="text-lg md:text-xl font-medium leading-relaxed animate-item space-y-2">
                <p className="flex flex-wrap gap-x-2">
                  <TransitionLink href="/quien-eres/ya-trabajo-con-selva" className="hover:underline opacity-90 hover:opacity-100">
                    Ya trabajo con Selva ›
                  </TransitionLink>
                  <span className="opacity-50 hidden md:inline">•</span>
                  <TransitionLink href="/quien-eres/estoy-pensando-trabajar-con-ustedes" className="hover:underline opacity-90 hover:opacity-100">
                    Estoy pensando trabajar con ustedes ›
                  </TransitionLink>
                  <span className="opacity-50 hidden md:inline">•</span>
                  <TransitionLink href="/quien-eres/antes-fui-cliente" className="hover:underline opacity-90 hover:opacity-100">
                    Antes fui cliente ›
                  </TransitionLink>
                  <span className="opacity-50 hidden md:inline">•</span>
                  <TransitionLink href="/quien-eres/trabajo-en-otra-agencia" className="hover:underline opacity-90 hover:opacity-100">
                    Trabajo en otra agencia ›
                  </TransitionLink>
                  <span className="opacity-50 hidden md:inline">•</span>
                  <TransitionLink href="/quien-eres/busco-una-alianza-con-selva" className="hover:underline opacity-90 hover:opacity-100">
                    Busco una alianza con Selva ›
                  </TransitionLink>
                  <span className="opacity-50 hidden md:inline">•</span>
                  <TransitionLink href="/quien-eres/soy-la-mama-de-alguien-aqui" className="hover:underline opacity-90 hover:opacity-100">
                    Soy la mamá de alguien aquí ›
                  </TransitionLink>
                  <span className="opacity-50 hidden md:inline">•</span>
                  <TransitionLink href="/quien-eres/estoy-buscando-respuestas" className="hover:underline opacity-90 hover:opacity-100">
                    Estoy buscando respuestas ›
                  </TransitionLink>
                  <span className="opacity-50 hidden md:inline">•</span>
                  <TransitionLink href="/quien-eres/no-termino-de-entender-esta-web" className="hover:underline opacity-90 hover:opacity-100">
                    No termino de entender esta web ›
                  </TransitionLink>
                </p>
            </div>

            {/* Buttons Block */}
            <div className="flex flex-col items-start gap-4 mt-4 animate-item">
               <TransitionLink 
                href="/servicios" 
                className="px-8 py-3 bg-transparent border border-white text-white rounded-full text-sm md:text-base font-bold hover:shadow-lg hover:scale-105 hover:bg-white/10 transition-all duration-300"
              >
                Ver servicios y casos ›
              </TransitionLink>
              
               <TransitionLink 
                href="/simulador" 
                className="px-8 py-3 bg-transparent border border-white text-white rounded-full text-sm md:text-base font-bold hover:shadow-lg hover:scale-105 hover:bg-white/10 transition-all duration-300"
              >
                Armar mi mix con el simulador ›
              </TransitionLink>
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="relative h-full w-full flex justify-center items-end animate-item pointer-events-none">
            <div className="relative w-full aspect-[4/5] origin-bottom scale-[1.25] translate-y-12 md:translate-y-16 md:scale-[1.8] z-0">
              <Image 
                src="/Recurso 2quieneres.webp"
                alt="Ilustración personas"
                fill
                className="object-contain object-bottom drop-shadow-2xl"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
