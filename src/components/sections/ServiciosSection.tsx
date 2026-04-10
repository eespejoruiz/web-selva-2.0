"use client"
import React, { useRef, useState, useEffect } from "react"
import { SERVICES_LIST } from "@/lib/data"
import { TransitionLink } from "@/components/ui/TransitionLink"
import { ArrowRight } from "lucide-react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import Image from "next/image"

export function ServiciosSection() {
  const containerRef = useRef<HTMLElement>(null)
  const sliderRef = useRef<HTMLDivElement>(null)
  const [scrollWidth, setScrollWidth] = useState(0)
  const [viewportHeight, setViewportHeight] = useState(0)

  // Capture viewport height on client only (avoids SSR hydration mismatch)
  React.useEffect(() => {
    setViewportHeight(window.innerHeight)
    const handleResize = () => setViewportHeight(window.innerHeight)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Calculate the total scrollable width
  useEffect(() => {
    if (sliderRef.current) {
      const width = sliderRef.current.scrollWidth
      const viewportWidth = window.innerWidth
      // Add a buffer so the transition happens after the last card is fully visible for a bit
      setScrollWidth(width - viewportWidth + viewportWidth * 0.5)
    }
  }, [])

  useGSAP(() => {
    if (!sliderRef.current || scrollWidth <= 0) return

    // Create the horizontal scroll animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
        invalidateOnRefresh: true,
      }
    })

    // Animate to the end (left scroll) but leave some space at the end to "pause"
    tl.to(sliderRef.current, {
      x: -(sliderRef.current.scrollWidth - window.innerWidth), // Scroll exactly to the end of content
      ease: "none",
      duration: 0.8 // Use 80% of the scroll distance for moving
    })
    
    // The remaining 20% of scroll distance will be just "waiting" with the last card visible
    tl.to({}, { duration: 0.2 }) 


    // Fade out effect
    gsap.to(containerRef.current, {
      opacity: 0,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "bottom-=100 bottom", // Start fading slightly before the end
        end: "bottom top", 
        scrub: true,
        pinSpacing: false
      }
    })

  }, { scope: containerRef, dependencies: [scrollWidth] })

  return (
    <section 
      id="servicios" 
      ref={containerRef} 
      className="w-full relative bg-[#005f73]"
      // Increase height multiplier to allow for the pause at the end
      style={{ height: scrollWidth > 0 && viewportHeight > 0 ? `${scrollWidth + viewportHeight}px` : '150vh' }}
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 w-full h-full">
          <Image
            src="/Recurso 34quieneres.webp"
            alt="Background Texture"
            fill
            className="object-cover opacity-100"
            priority
          />
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="relative z-10 h-full flex flex-col justify-center">
          {/* Header Content */}
          <div className="container mx-auto px-4 md:px-8 pt-24 md:pt-40 pb-4 md:pb-8 shrink-0">
            <h2 className="text-4xl md:text-8xl font-abroad tracking-wide leading-[0.9] uppercase text-white mb-4 md:mb-6">
              <span className="block">Nuestros</span>
              <span className="block relative inline-block">
                Servicios
              </span>
            </h2>
            <p className="text-lg md:text-2xl text-neutral-200 max-w-3xl leading-relaxed">
              Estrategias que unen impacto, reputación y negocio. Desliza para explorar.
            </p>
          </div>

          {/* Horizontal Slider Container */}
          <div className="w-full overflow-hidden py-4 md:py-10 pl-4 md:pl-8 pb-20 md:pb-32">
            {/* Reduced right padding on mobile to minimize empty space at the end */}
            <div ref={sliderRef} className="flex gap-6 md:gap-16 w-max pr-4 md:pr-20 items-start">
              {SERVICES_LIST.map((service, index) => (
                <TransitionLink 
                  key={service.slug} 
                  href={`/servicios/${service.slug}`}
                  className="group flex flex-col gap-3 md:gap-5 items-start w-[200px] md:w-[288px] shrink-0"
                >
                   {/* Image - Clean without background */}
                   <div className="relative w-full aspect-square max-w-[160px] md:max-w-[200px] overflow-hidden rounded-2xl transition-transform duration-500 group-hover:scale-105">
                      <Image 
                          src={service.image || `https://picsum.photos/seed/${service.slug}/800/1000`} 
                          alt={service.title}
                          fill
                          className="object-cover"
                      />
                   </div>
                   
                   {/* Content - Below image */}
                   <div className="flex flex-col gap-2 md:gap-2 w-full">
                     <h3 className="text-lg md:text-2xl font-abroad font-bold text-white tracking-tight">{service.title}</h3>
                     <p className="text-neutral-200 text-xs md:text-sm leading-relaxed line-clamp-4">{service.description}</p>
                     
                     <div className="flex items-center gap-2 text-[#3BD280] font-bold tracking-wide uppercase text-[10px] md:text-xs mt-1 md:mt-2 group-hover:translate-x-2 transition-transform duration-300">
                       Ver detalle <ArrowRight className="w-3 h-3 md:w-3.5 md:h-3.5" />
                     </div>
                   </div>
                </TransitionLink>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
