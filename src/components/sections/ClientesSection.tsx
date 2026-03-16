"use client"
import React, { useRef } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import Image from "next/image"

const CLIENTS = [
  { id: 1, src: "/Recurso 54port.svg", alt: "Amazon Andes" },
  { id: 2, src: "/Recurso 55port.svg", alt: "Munay" },
  { id: 3, src: "/Recurso 56port.svg", alt: "Inka Roots" },
  { id: 4, src: "/Recurso 57port.svg", alt: "Expreso" },
  { id: 5, src: "/Recurso 58port.svg", alt: "Client 5" },
]

export function ClientesSection() {
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

        {/* Pagination / Progress Indicator */}
        <div className="client-pagination mt-20 md:mt-32 flex flex-col items-center gap-4 z-10 w-full">
          {/* Line */}
          <div className="w-64 h-1 bg-neutral-800 rounded-full overflow-hidden relative">
              <div className="absolute left-[30%] top-0 h-full w-1/4 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.5)]"></div>
          </div>
          {/* Dots */}
          <div className="flex gap-3 mt-2">
              <div className="w-1.5 h-1.5 rounded-full bg-neutral-600"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-neutral-600"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-neutral-600"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
