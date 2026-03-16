"use client"
import React from 'react'
import { SERVICES_LIST } from "@/lib/data"
import { TransitionLink } from "@/components/ui/TransitionLink"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

export function ServicesSlider() {
  return (
    <div className="container mx-auto px-4 md:px-8 py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
        {SERVICES_LIST.map((service, index) => (
          <TransitionLink 
            key={service.slug} 
            href={`/servicios/${service.slug}`}
            className="group flex flex-col gap-6 items-start"
          >
             {/* Image - Smaller and without container background */}
             <div className="relative w-full aspect-square max-w-[200px] mx-auto md:mx-0 overflow-hidden rounded-2xl transition-transform duration-500 group-hover:scale-105">
                <Image 
                    src={service.image || `https://picsum.photos/seed/${service.slug}/800/1000`} 
                    alt={service.title}
                    fill
                    className="object-cover"
                />
             </div>
             
             {/* Content - Below image */}
            <div className="flex flex-col gap-3 w-full">
              <h3 className="text-2xl font-abroad font-bold text-neutral-900 tracking-tight">{service.title}</h3>
              <p className="text-neutral-600 text-sm leading-relaxed line-clamp-3 md:line-clamp-none">{service.description}</p>
              
              <div className="flex items-center gap-2 text-primary font-bold tracking-wide uppercase text-xs mt-2 group-hover:translate-x-2 transition-transform duration-300">
                Ver detalle <ArrowRight className="w-3 h-3" />
              </div>
            </div>
          </TransitionLink>
        ))}
      </div>
    </div>
  )
}
