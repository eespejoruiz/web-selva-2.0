import React from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { SERVICES_LIST } from "@/lib/data"

/**
 * Grid responsive de servicios.
 * Usado tanto en /servicios/ standalone como dentro del sticky-stack del home.
 * Bg neutral-900 (dark) para contraste con secciones adyacentes claras.
 */
export function ServiciosGrid() {
  return (
    <section className="bg-neutral-900 pt-24 md:pt-32 pb-20 md:pb-28 min-h-screen flex flex-col justify-center">
      <div className="container mx-auto px-4 md:px-8">
        {/* Heading + intro */}
        <div className="max-w-4xl mb-10 md:mb-14">
          <p className="text-sm font-bold tracking-widest uppercase text-primary mb-3">Nuestros Servicios</p>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-abroad font-bold leading-[1.05] tracking-tight text-white mb-5">
            10 disciplinas para construir <span className="text-primary">impacto medible</span>
          </h2>
          <p className="text-base md:text-xl text-neutral-300 leading-relaxed max-w-3xl">
            Estrategias que unen reputación, sostenibilidad y resultados. Cada servicio se diseña
            a medida del momento de tu marca.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 md:gap-6">
          {SERVICES_LIST.map((service) => {
            const img = (service as { imageDesktop?: string }).imageDesktop || service.image || "/logo_selva.webp"
            return (
              <Link
                key={service.slug}
                href={`/servicios/${service.slug}/`}
                className="group flex flex-col bg-neutral-800/60 backdrop-blur rounded-2xl overflow-hidden hover:bg-neutral-800 transition-all duration-300 hover:-translate-y-1 border border-white/5 hover:border-primary/40"
              >
                <div className="relative aspect-[5/4] w-full bg-neutral-700 overflow-hidden">
                  <Image
                    src={img}
                    alt={`${service.title} — Selva Ecomarketing`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 20vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-col flex-1 p-4 md:p-5">
                  <h3 className="text-lg md:text-xl font-abroad font-bold text-white mb-2 leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-xs md:text-sm text-neutral-400 leading-relaxed mb-4 flex-1 line-clamp-3">
                    {service.description}
                  </p>
                  <div className="flex items-center gap-1.5 text-primary font-bold tracking-wider uppercase text-[10px] md:text-xs group-hover:gap-2.5 transition-all">
                    Ver detalle <ArrowRight className="w-3 h-3 md:w-3.5 md:h-3.5" />
                  </div>
                </div>
              </Link>
            )
          })}
        </div>

        {/* CTA block */}
        <div className="mt-10 md:mt-16 flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/simulador/" className="px-6 md:px-8 py-3 md:py-4 bg-primary text-white rounded-full font-bold tracking-wide hover:bg-secondary transition-colors text-center">
            Armar mi mix con el simulador
          </Link>
          <Link href="/contacto/" className="px-6 md:px-8 py-3 md:py-4 bg-white/10 text-white rounded-full font-bold tracking-wide hover:bg-white/20 transition-colors border border-white/20 text-center">
            Hablar con un estratega
          </Link>
        </div>
      </div>
    </section>
  )
}
