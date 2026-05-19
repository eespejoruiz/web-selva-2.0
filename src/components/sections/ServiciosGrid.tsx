import React from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { SERVICES_LIST } from "@/lib/data"

/**
 * Grid responsive de servicios para la página standalone /servicios/.
 * NO usar este componente en home (allí se usa ServiciosSection con scroll horizontal).
 * Optimizado para SEO: links directos, alt descriptivos, jerarquía clara, sin animación heavy.
 */
export function ServiciosGrid() {
  return (
    <section className="bg-neutral-50 pt-32 md:pt-40 pb-24 md:pb-32">
      <div className="container mx-auto px-4 md:px-8">
        {/* Heading + intro */}
        <div className="max-w-4xl mb-12 md:mb-16">
          <p className="text-sm font-bold tracking-widest uppercase text-primary mb-3">Servicios</p>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-abroad font-bold leading-[1.05] tracking-tight text-neutral-900 mb-6">
            10 disciplinas para construir <span className="text-primary">impacto medible</span>
          </h2>
          <p className="text-lg md:text-xl text-neutral-600 leading-relaxed max-w-3xl">
            Estrategias que unen reputación, sostenibilidad y resultados. Cada servicio se diseña
            a medida del momento de tu marca — desde primer manual de marca hasta scale internacional.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {SERVICES_LIST.map((service) => {
            const img = (service as { imageDesktop?: string }).imageDesktop || service.image || "/logo_selva.webp"
            return (
              <Link
                key={service.slug}
                href={`/servicios/${service.slug}/`}
                className="group flex flex-col bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-neutral-200/50"
              >
                <div className="relative aspect-[4/3] w-full bg-neutral-100 overflow-hidden">
                  <Image
                    src={img}
                    alt={`${service.title} — Selva Ecomarketing`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-col flex-1 p-6 md:p-7">
                  <h3 className="text-xl md:text-2xl font-abroad font-bold text-neutral-900 mb-3 leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-sm md:text-base text-neutral-600 leading-relaxed mb-5 flex-1">
                    {service.description}
                  </p>
                  <ul className="space-y-1.5 mb-6">
                    {service.includes.slice(0, 3).map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-neutral-500">
                        <span className="w-1 h-1 rounded-full bg-primary mt-1.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center gap-2 text-primary font-bold tracking-wider uppercase text-xs group-hover:gap-3 transition-all">
                    Ver detalle <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            )
          })}
        </div>

        {/* CTA block */}
        <div className="mt-16 md:mt-24 bg-neutral-900 rounded-3xl p-8 md:p-12 lg:p-16 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4" />
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-abroad font-bold text-white mb-4 leading-tight">
              ¿No sabes qué necesitas? <span className="text-primary">Empieza por el simulador.</span>
            </h2>
            <p className="text-lg text-neutral-300 mb-8 leading-relaxed">
              Cuéntanos tu momento y armamos un mix personalizado de servicios alineado a tus metas, presupuesto y plazos.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/simulador/" className="px-8 py-4 bg-primary text-white rounded-full font-bold tracking-wide hover:bg-secondary transition-colors">
                Armar mi mix
              </Link>
              <Link href="/contacto/" className="px-8 py-4 bg-white/10 text-white rounded-full font-bold tracking-wide hover:bg-white/20 transition-colors border border-white/20">
                Hablar con un estratega
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
