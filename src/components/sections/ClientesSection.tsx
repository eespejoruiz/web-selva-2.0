"use client"
import React, { useRef } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import Image from "next/image"
import { TransitionLink } from "@/components/ui/TransitionLink"
import { ArrowRight } from "lucide-react"

const CLIENTS = [
  { id: 1, src: "/Recurso 54port.svg", alt: "Amazon Andes" },
  { id: 2, src: "/Recurso 55port.svg", alt: "Munay" },
  { id: 3, src: "/Recurso 56port.svg", alt: "Inka Roots" },
  { id: 4, src: "/Recurso 57port.svg", alt: "Expreso" },
  { id: 5, src: "/Recurso 58port.svg", alt: "Client 5" },
]

export function ClientesSection({ showLink = true }: { showLink?: boolean }) {
  const containerRef = useRef<HTMLElement>(null)

  useGSAP(() => {
    // Entrance Animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%", // Trigger earlier when entering viewport
        end: "bottom center",
        toggleActions: "play none none reverse"
      }
    })

    tl.from(".client-title", {
      y: 50,
      duration: 1,
      ease: "power3.out"
    })
    .from(".client-logo", {
      y: 30,
      duration: 0.8,
      stagger: 0.1,
      ease: "power3.out"
    }, "-=0.5")
    .from(".client-pagination", {
      y: 20,
      duration: 0.8,
      ease: "power3.out"
    }, "-=0.5")

    // Parallax effect
    gsap.to(".parallax-content", {
      yPercent: -20,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true
      }
    })

  }, { scope: containerRef })

  return (
    <section id="clientes" ref={containerRef} className="min-h-screen py-20 flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background - Solid black as background */}
      <div className="absolute inset-0 bg-black z-0"></div>
      
      <div className="parallax-content w-full flex flex-col items-center z-10 relative">
        {/* Title */}
        <h2 className="client-title mb-20 relative z-10 w-full px-4 text-center text-6xl md:text-8xl font-abroad tracking-wide leading-[0.9] uppercase text-white flex flex-col md:flex-row items-center justify-center gap-4">
          <span>NUESTROS</span>
          <span className="relative flex items-center gap-4">
            CLIENTES
          </span>
        </h2>

        {/* Logos Row */}
        <div className="w-full max-w-7xl px-4 md:px-8 z-10">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16">
            {CLIENTS.map((client) => (
              <div key={client.id} className="client-logo flex-shrink-0 flex justify-center items-center w-24 md:w-32 lg:w-40 h-24 md:h-32 lg:h-40">
                <Image
                  src={client.src}
                  alt={client.alt}
                  width={160}
                  height={160}
                  className="object-contain w-full h-full"
                />
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="client-pagination mt-16 md:mt-24 flex flex-col items-center gap-6 z-10 w-full">
          <p className="text-neutral-400 text-sm md:text-base tracking-widest uppercase">
            Y muchos más que confían en nosotros
          </p>
          {showLink && (
            <TransitionLink
              href="/clientes"
              className="flex items-center gap-2 px-8 py-3 border border-white/30 text-white rounded-full text-sm font-bold hover:bg-white/10 hover:border-white/60 transition-all duration-300"
            >
              Ver todos los clientes <ArrowRight className="w-4 h-4" />
            </TransitionLink>
          )}
        </div>
      </div>
    </section>
  )
}
