"use client"
import React, { useState, useRef, useEffect } from "react"
import { cn } from "@/lib/utils"
import Image from "next/image"
import { X, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import { TransitionLink } from "@/components/ui/TransitionLink"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"

const CATEGORIES = ["Web", "Productos", "Publicidad"]
const SCROLL_BUFFER = 400 // Pixels to wait after gallery finishes before next section

const PROJECTS = [
  // Web
  { id: 1, title: "Amazon Andes", category: "Web", img: "/Recurso 35port.webp", link: "https://amazon-andes.com" },
  { id: 2, title: "Palo Santo Premium", category: "Web", img: "/Recurso 36port.webp", link: "https://palosantopremium.com" },
  { id: 3, title: "Dragon's Blood Resin", category: "Web", img: "/Recurso 37port.webp", link: "https://dragonsbloodsresin.com" },
  { id: 4, title: "Maca Suppliers", category: "Web", img: "/Recurso 38port.webp", link: "https://macasuppliers.com" },
  { id: 5, title: "Omegas Peru", category: "Web", img: "/Recurso 39port.webp", link: "https://omegasperu.com" },
  { id: 6, title: "Mapacho Peru", category: "Web", img: "/Recurso 40port.webp", link: "https://mapachoperu.com" },
  // Productos
  { id: 7, title: "Producto 1", category: "Productos", img: "/Recurso 41port.webp" },
  { id: 8, title: "Producto 2", category: "Productos", img: "/Recurso 42port.webp" },
  { id: 9, title: "Producto 3", category: "Productos", img: "/Recurso 43port.webp" },
  { id: 10, title: "Producto 4", category: "Productos", img: "/Recurso 44port.webp" },
  { id: 11, title: "Producto 5", category: "Productos", img: "/Recurso 45port.webp" },
  { id: 12, title: "Producto 6", category: "Productos", img: "/Recurso 46port.webp" },
  // Publicidad
  { id: 13, title: "Publicidad 1", category: "Publicidad", img: "/Recurso 47port.webp" },
  { id: 14, title: "Publicidad 2", category: "Publicidad", img: "/Recurso 48port.webp" },
  { id: 15, title: "Publicidad 3", category: "Publicidad", img: "/Recurso 49port.webp" },
  { id: 16, title: "Publicidad 4", category: "Publicidad", img: "/Recurso 50port.webp" },
  { id: 17, title: "Publicidad 5", category: "Publicidad", img: "/Recurso 51port.webp" },
  { id: 18, title: "Publicidad 6", category: "Publicidad", img: "/Recurso 52port.webp" },
]

import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

export function PortafolioSection({ showLink = true }: { showLink?: boolean }) {
  const [filter, setFilter] = useState("Web")
  const [selectedProject, setSelectedProject] = useState<typeof PROJECTS[0] | null>(null)
  const containerRef = useRef<HTMLElement>(null)
  const sliderRef = useRef<HTMLDivElement>(null)
  const [scrollWidth, setScrollWidth] = useState(0)
  const [viewportHeight, setViewportHeight] = useState(0)

  // Capture viewport height on client only (avoids SSR mismatch)
  React.useEffect(() => {
    setViewportHeight(window.innerHeight)
    const handleResize = () => setViewportHeight(window.innerHeight)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const filteredProjects = PROJECTS.filter(p => p.category === filter)

  const handleCategoryChange = (cat: string) => {
    if (cat === filter) return;
    
    // Instead of scrolling the window, we just want to reset the internal slider state
    // and maybe ensure we are "in" the section if we scrolled past it, but not jump abruptly.
    
    // Let's just reset the slider first.
    if (sliderRef.current) {
      // Reset horizontal position immediately
      gsap.set(sliderRef.current, { x: 0 })
    }

    setFilter(cat);
    
    // Find current trigger and scroll to start if we are past it
    const st = ScrollTrigger.getAll().find(st => st.trigger === containerRef.current);
    if (st && st.progress > 0) {
       if (containerRef.current) {
         // We want to scroll to where the container STARTS.
         // Check if st.start is valid
         if (st.start !== undefined) {
             gsap.to(window, { scrollTo: st.start, duration: 0.5, overwrite: true });
         }
       }
    }
  }

  // Calculate the total scrollable width
  useEffect(() => {
    const calculateWidth = () => {
      if (sliderRef.current && containerRef.current) {
        // We calculate the width needed to scroll
        const sliderWidth = sliderRef.current.scrollWidth
        const viewportWidth = window.innerWidth
        const isMobile = viewportWidth < 1024;
        const visibleWidth = isMobile ? viewportWidth : viewportWidth * 0.66;
        
        // Calculate scroll width based on the content width
        if (sliderWidth <= visibleWidth) { 
           setScrollWidth(0)
        } else {
           // Scroll width = Total content width - Visible viewport width + Extra padding to ensure last item is fully shown
           // On mobile, we add more padding to ensure the last item is clearly visible and there's a pause
           // We add viewportWidth * 0.5 buffer for the "pause" effect
           const extraPadding = isMobile ? viewportWidth * 0.8 : viewportWidth * 0.5
           setScrollWidth(sliderWidth - visibleWidth + extraPadding) 
        }
        
        // Ensure slider is at 0 if we just changed filters
        const st = ScrollTrigger.getAll().find(st => st.trigger === containerRef.current);
        if (st && st.progress === 0) {
           gsap.set(sliderRef.current, { x: 0 })
        }
        
        // Refresh ScrollTrigger to ensure pin duration is updated
        ScrollTrigger.refresh();
      }
    }
    
    // Small delay to ensure DOM is ready and images are loaded
    const timer = setTimeout(calculateWidth, 500)
    window.addEventListener('resize', calculateWidth)
    
  return () => {
      window.removeEventListener('resize', calculateWidth)
      clearTimeout(timer)
    }
  }, [filter])

  const handleNextProject = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!selectedProject) return;
    const currentIndex = filteredProjects.findIndex(p => p.id === selectedProject.id);
    const nextIndex = (currentIndex + 1) % filteredProjects.length;
    setSelectedProject(filteredProjects[nextIndex]);
  }

  const handlePrevProject = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!selectedProject) return;
    const currentIndex = filteredProjects.findIndex(p => p.id === selectedProject.id);
    const prevIndex = (currentIndex - 1 + filteredProjects.length) % filteredProjects.length;
    setSelectedProject(filteredProjects[prevIndex]);
  }

  useGSAP(() => {
    // Kill any existing ScrollTrigger instances for this container to avoid conflicts
    ScrollTrigger.getAll().forEach(st => {
      if (st.trigger === containerRef.current) {
        st.kill()
      }
    })

    if (!sliderRef.current) return

    // If there is scrollable content
    if (scrollWidth > 0) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom bottom", 
          scrub: 1, 
          invalidateOnRefresh: true,
        }
      })
      
      // 1. Move to the end
      tl.to(sliderRef.current, {
        x: -scrollWidth,
        ease: "none",
        duration: 0.8 // Use 80% of scroll for movement
      })
      
      // 2. Hold/Pause at the end
      tl.to(sliderRef.current, { 
        x: -scrollWidth, // Stay at the same position
        duration: 0.2 // Hold for 20% of scroll
      })
    } 

    // Fade out effect matching preceding sections
    gsap.to(containerRef.current, {
      opacity: 0,
      scrollTrigger: {
        trigger: containerRef.current,
        // Start fading when next section (Clientes) enters viewport
        start: "bottom bottom", 
        end: "bottom top", 
        scrub: true,
      }
    })

  }, { scope: containerRef, dependencies: [scrollWidth, filter] })

  return (
    <section 
      id="portafolio" 
      ref={containerRef} 
      className="w-full relative bg-background"
      style={{ height: scrollWidth > 0 && viewportHeight > 0 ? `${scrollWidth + viewportHeight * 1.2}px` : '100vh' }}
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col lg:flex-row">
        
        {/* Left Column (Static/Sticky content) */}
        <div className="lg:w-1/3 h-auto lg:h-full flex flex-col justify-start lg:justify-center px-4 pt-24 md:pt-6 pb-2 md:px-12 md:py-12 z-10 bg-background/95 backdrop-blur-sm shrink-0">
           <h2 className="text-5xl md:text-8xl font-abroad tracking-wide leading-[0.9] uppercase text-[#d12c93] mb-3 md:mb-6 relative inline-block">
              Portafolio
           </h2>
           {/* Description hidden on mobile to save space */}
           <p className="hidden md:block text-lg text-neutral-600 mb-12 leading-relaxed">
             Somos una agencia de marketing que convierte marcas en historias que venden: estrategia clara, creatividad con intención y contenido que conecta. Diseñamos identidades, campañas y piezas para redes y e-commerce, cuidando coherencia, estética y resultados.
             <br /><br />
             Cada proyecto parte de entender a tu audiencia y termina en una ejecución lista para crecer.
           </p>

           {/* Filter buttons — mobile: large touch targets; desktop: vertical list */}
           <div className="flex gap-2 w-full md:flex md:flex-col md:gap-4 md:items-start md:w-auto mb-3 md:mb-0">
             {CATEGORIES.map(cat => (
               <button
                 key={cat}
                 onClick={() => handleCategoryChange(cat)}
                 className={cn(
                   "flex-1 md:flex-none text-sm md:text-xl font-medium transition-all duration-300 relative hover:text-primary",
                   "py-3 px-3 md:py-0 md:px-0 rounded-xl md:rounded-none",
                   "border md:border-none text-center md:text-left",
                   "min-h-[48px] md:min-h-0",
                   filter === cat
                     ? "text-primary md:pl-6 font-bold border-primary bg-primary/5 md:bg-transparent"
                     : "text-neutral-400 border-neutral-200"
                 )}
               >
                 {filter === cat && <span className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-primary rounded-full animate-pulse" />}
                 {cat}
               </button>
             ))}
           </div>

           {showLink && (
             <TransitionLink
              href="/portafolio"
              className="mt-3 md:mt-12 inline-block px-6 py-3 md:px-8 md:py-3 bg-transparent border border-primary text-primary text-sm md:text-base rounded-full font-bold hover:bg-primary/10 transition-colors w-full md:w-fit text-center md:text-left"
            >
               Ver portafolio completo
             </TransitionLink>
           )}
        </div>

        {/* Right Column (Horizontal Scroll) */}
        <div className="lg:w-2/3 h-full flex-grow overflow-hidden flex items-center pb-8 lg:pb-0">
           <div ref={sliderRef} className="flex gap-4 md:gap-12 px-4 md:px-12 w-max items-end lg:items-center">
             {filteredProjects.map((project) => (
               <div 
                 key={project.id} 
                 className="group relative cursor-pointer overflow-hidden rounded-xl transition-all duration-500 shrink-0 h-[40vh] lg:h-[60vh]"
                 style={{ 
                   width: 'auto', 
                   aspectRatio: 'auto' 
                 }}
                 onClick={() => setSelectedProject(project)}
               >
                 <Image 
                   src={project.img} 
                   alt={project.title} 
                   width={800}
                   height={1000}
                   className="w-auto h-full object-contain transition-transform duration-700 group-hover:scale-105" 
                 />
               </div>
             ))}
             {/* Add some padding at the end so the last item is fully visible */}
             <div className="w-[10vw] shrink-0" />
           </div>
        </div>

      </div>

      {/* Lightbox */}
      {selectedProject && (
        <div className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 animate-in fade-in duration-300 backdrop-blur-xl" onClick={() => setSelectedProject(null)}>
           <button 
             onClick={(e) => { e.stopPropagation(); setSelectedProject(null); }}
             className="absolute top-8 right-8 text-white hover:text-primary transition-colors p-2 bg-transparent rounded-full z-[110]"
           >
             <X className="w-8 h-8" />
           </button>
           
           <div className="relative w-full max-w-6xl h-[85vh] flex flex-col items-center justify-center gap-6" onClick={(e) => e.stopPropagation()}>
             
             {/* Title and Info (Now above the image) */}
             <div className="text-center text-white z-[110] animate-in slide-in-from-top-4 duration-500">
                <h2 className="text-3xl font-abroad font-bold drop-shadow-md">{selectedProject.title}</h2>
                <p className="text-neutral-300 drop-shadow-md">{selectedProject.category}</p>
             </div>

             {/* Previous Button */}
             <button 
                onClick={handlePrevProject}
                className="absolute left-0 md:-left-16 top-1/2 -translate-y-1/2 z-[110] text-white hover:text-primary transition-colors p-2"
             >
                <ChevronLeft className="w-10 h-10 md:w-16 md:h-16" />
             </button>

             <div className="relative w-full h-full overflow-hidden rounded-xl">
                <Image 
                    src={selectedProject.img} 
                    alt={selectedProject.title}
                    fill
                    className="object-contain"
                />
             </div>

             {/* Next Button */}
             <button 
                onClick={handleNextProject}
                className="absolute right-0 md:-right-16 top-1/2 -translate-y-1/2 z-[110] text-white hover:text-primary transition-colors p-2"
             >
                <ChevronRight className="w-10 h-10 md:w-16 md:h-16" />
             </button>
           
             {/* Link Button (Below image) */}
             <div className="flex flex-col items-center gap-4 z-[110]">
                {selectedProject.link && (
                    <a 
                    href={selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pointer-events-auto px-6 py-2 bg-transparent border border-[#d12c93] text-[#d12c93] rounded-full font-bold hover:bg-[#d12c93]/10 transition-colors flex items-center gap-2"
                    >
                    Visitar sitio web
                    <ArrowRight className="w-4 h-4" />
                    </a>
                )}
             </div>
           </div>
        </div>
      )}
    </section>
  )
}
