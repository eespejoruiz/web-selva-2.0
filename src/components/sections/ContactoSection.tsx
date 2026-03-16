"use client"
import React, { useState, useRef } from "react"
import Image from "next/image"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"

function WhatsAppIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
    </svg>
  )
}

export function ContactoSection() {
  const [isClient, setIsClient] = useState(false)
  const containerRef = useRef<HTMLElement>(null)

  // Fix hydration issues by only rendering form on client
  React.useEffect(() => {
    setIsClient(true)
  }, [])

  useGSAP(() => {
    // Animation for the section elements could go here
    gsap.fromTo(containerRef.current, 
      { opacity: 0 },
      { 
        opacity: 1, 
        duration: 1,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top center",
        }
      }
    )
  }, { scope: containerRef })

  return (
    <section 
      id="contacto" 
      ref={containerRef} 
      className="relative w-full min-h-screen flex flex-col items-center justify-center py-20 overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0 bg-black">
        <Image
          src="/Recurso 61port.webp"
          alt="Contact Background"
          fill
          className="object-cover"
          priority
        />

      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-8 flex flex-col items-center w-full max-w-5xl">
        
        {/* Header */}
        <div className="text-center mb-12 relative">
          <div className="relative inline-block">
            <h2 className="text-6xl md:text-8xl font-abroad font-bold text-white uppercase tracking-wider relative z-10">
              CONTÁCTANOS
            </h2>
          </div>
          
          <h3 className="text-2xl md:text-4xl font-bold text-white mt-4 mb-4">
            Hablemos de tu mix de marketing
          </h3>
          
          <div className="text-white text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            <p>Cuéntanos en qué punto estás y qué te gustaría lograr. Te proponemos</p>
            <p>un plan que equilibre sostenibilidad, resultados y uso inteligente de recursos.</p>
          </div>
        </div>

        {/* Form */}
        <div className="w-full max-w-3xl bg-white/5 backdrop-blur-sm rounded-3xl p-4 md:p-6 mx-auto">
            {isClient && (
                <>
                    <iframe 
                        src="https://api.leadconnectorhq.com/widget/form/XHqs0hdZwOxSYMUJbvVN" 
                        style={{ width: '100%', height: '100%', border: 'none', borderRadius: '3px', minHeight: '500px' }} 
                        id="inline-XHqs0hdZwOxSYMUJbvVN" 
                        data-layout="{'id':'INLINE'}" 
                        data-trigger-type="alwaysShow" 
                        data-trigger-value="" 
                        data-activation-type="alwaysActivated" 
                        data-activation-value="" 
                        data-deactivation-type="neverDeactivate" 
                        data-deactivation-value="" 
                        data-form-name="Web-Selva" 
                        data-height="500" 
                        data-layout-iframe-id="inline-XHqs0hdZwOxSYMUJbvVN" 
                        data-form-id="XHqs0hdZwOxSYMUJbvVN" 
                        title="Web-Selva" 
                    /> 
                    <script src="https://link.msgsndr.com/js/form_embed.js"></script>
                </>
            )}
        </div>

        {/* Footer Chips */}
        <div className="flex flex-col md:flex-row gap-6 mt-12 items-center">
          <div className="bg-transparent border border-[#6b8e23] text-white px-6 py-3 rounded-full flex items-center gap-2 shadow-lg">
            <span className="font-bold">Email:</span> info@selvagencia.pe
          </div>
          
          <a 
            href="https://wa.me/51913527489" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-transparent border border-[#6b8e23] text-white pl-6 pr-2 py-2 rounded-full flex items-center gap-3 shadow-lg hover:bg-[#6b8e23]/10 transition-colors"
          >
            <span className="font-bold">Escríbenos por</span>
            <div className="bg-white text-[#6b8e23] p-1.5 rounded-full w-8 h-8 flex items-center justify-center">
               <WhatsAppIcon className="w-4 h-4" />
            </div>
          </a>
        </div>

      </div>
    </section>
  )
}
