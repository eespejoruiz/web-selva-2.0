"use client"

import React, { useRef } from "react"
import { SERVICES_LIST } from "@/lib/data"
import { TransitionLink } from "@/components/ui/TransitionLink"
import { ArrowLeft } from "lucide-react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"

interface QuienEresDetailProps {
  option: {
    slug: string
    title: string
    paragraph: string
    services?: string[]
  }
}

export function QuienEresDetail({ option }: QuienEresDetailProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const isThinkingToWork = option.slug === "estoy-pensando-trabajar-con-ustedes"

  useGSAP(() => {
    // Split text simulation (lines/words)
    // Since we don't have SplitText plugin (paid), we animate opacity/y
    
    const tl = gsap.timeline({ delay: 0.3 })
    
    tl.from("h1", {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    })
    
    tl.from("p", {
      y: 30,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    }, "-=0.6")
    
    tl.from(".fade-in", {
      opacity: 0,
      y: 20,
      stagger: 0.1,
      duration: 0.8,
      ease: "power2.out"
    }, "-=0.6")

  }, { scope: containerRef })

  return (
    <div ref={containerRef} className="min-h-screen bg-neutral-900 text-white pt-32 pb-20 px-4 md:px-8 flex flex-col justify-center relative overflow-hidden">
       {/* Background decoration */}
       <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

       <div className="container mx-auto max-w-5xl relative z-10">
         <TransitionLink href="/quien-eres" className="fade-in inline-flex items-center gap-2 text-neutral-400 hover:text-white mb-12 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Volver a elegir
         </TransitionLink>

         <h1 className="text-4xl md:text-6xl lg:text-7xl font-abroad font-bold mb-8 leading-tight tracking-tight">
           {option.title}
         </h1>

         <p className="text-xl md:text-2xl text-neutral-300 leading-relaxed max-w-3xl mb-12">
           {option.paragraph}
         </p>

         {/* Services Chips for specific slug */}
         {isThinkingToWork && option.services && (
            <div className="flex flex-wrap gap-3 mb-16 fade-in">
                {option.services.map(slug => {
                    const service = SERVICES_LIST.find(s => s.slug === slug)
                    if (!service) return null

                    return (
                        <TransitionLink 
                            key={slug} 
                            href={`/servicios/${slug}`} 
                            className="px-4 py-2 bg-transparent border border-white/20 rounded-full text-sm font-medium hover:bg-primary/20 hover:text-white transition-all"
                        >
                            {service.title}
                        </TransitionLink>
                    )
                })}
            </div>
         )}

         <div className="flex flex-wrap gap-6 pt-8 border-t border-white/10 fade-in">
            <TransitionLink 
                href="/quien-eres" 
                className="px-6 py-3 border border-white/30 rounded-full hover:bg-white hover:text-neutral-900 transition-all"
            >
                Volver a elegir quién eres
            </TransitionLink>
            <TransitionLink 
                href="/" 
                className="px-6 py-3 bg-transparent border border-primary text-primary rounded-full hover:bg-primary/20 hover:text-white transition-all"
            >
                Volver al inicio
            </TransitionLink>
         </div>
       </div>
    </div>
  )
}