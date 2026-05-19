import React from "react"
import Link from "next/link"
import Image from "next/image"
import { Instagram, Linkedin, Facebook, Mail, Phone, MapPin } from "lucide-react"
import { SITE_CONFIG } from "@/lib/site-config"

const SERVICE_LINKS = [
  { label: "SEO Sostenible", href: "/servicios/seo/" },
  { label: "GEO / AI SEO", href: "/servicios/geo/" },
  { label: "SEM y Ads", href: "/servicios/sem/" },
  { label: "Desarrollo Web", href: "/servicios/web/" },
  { label: "Branding", href: "/servicios/branding/" },
  { label: "Gestión de RRDD", href: "/servicios/rrdd/" },
  { label: "Email Marketing", href: "/servicios/email/" },
  { label: "Análisis de Datos", href: "/servicios/data/" },
  { label: "Audiovisuales", href: "/servicios/audiovisuales/" },
  { label: "Marketplaces", href: "/servicios/marketplaces/" },
]

const EMPRESA_LINKS = [
  { label: "Nosotros", href: "/nosotros/" },
  { label: "Portafolio", href: "/portafolio/" },
  { label: "Clientes", href: "/clientes/" },
  { label: "¿Quién eres?", href: "/quien-eres/" },
  { label: "Simulador", href: "/simulador/" },
  { label: "Contacto", href: "/contacto/" },
]

const LEGAL_LINKS = [
  { label: "Políticas de Privacidad", href: "/politicas-de-privacidad/" },
  { label: "Términos y Condiciones", href: "/terminos-y-condiciones/" },
]

function WhatsAppIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
    </svg>
  )
}

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="bg-neutral-900 text-neutral-300 pt-16 pb-8 md:pb-12">
      <div className="container mx-auto px-4 md:px-8">
        {/* Top: 4 columns on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 mb-12">
          {/* Brand block */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-3 mb-4" aria-label="Selva Ecomarketing — Inicio">
              <Image
                src="/SVG-SELVAISOTIPO-DEGRADADO.svg"
                alt="Selva Ecomarketing logo"
                width={64}
                height={64}
                className="h-12 w-auto"
              />
              <span className="text-sm font-bold tracking-[0.2em] uppercase text-white">
                Selva<br/>Ecomarketing
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-neutral-400 mb-4">
              Agencia de marketing sostenible en Perú. Impacto medible, comunicación clara, marketing con propósito.
            </p>
            <div className="flex items-center gap-3">
              <a href="https://wa.me/51913527489" target="_blank" rel="noopener noreferrer"
                 aria-label="WhatsApp"
                 className="flex items-center justify-center w-10 h-10 rounded-full bg-white/5 hover:bg-[#25D366]/20 hover:text-[#25D366] transition-colors">
                <WhatsAppIcon className="w-5 h-5" />
              </a>
              {SITE_CONFIG.social.instagram && (
                <a href={SITE_CONFIG.social.instagram} target="_blank" rel="noopener noreferrer"
                   aria-label="Instagram"
                   className="flex items-center justify-center w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 hover:text-primary transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
              )}
              {SITE_CONFIG.social.linkedin && (
                <a href={SITE_CONFIG.social.linkedin} target="_blank" rel="noopener noreferrer"
                   aria-label="LinkedIn"
                   className="flex items-center justify-center w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 hover:text-primary transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
              )}
              {SITE_CONFIG.social.facebook && (
                <a href={SITE_CONFIG.social.facebook} target="_blank" rel="noopener noreferrer"
                   aria-label="Facebook"
                   className="flex items-center justify-center w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 hover:text-primary transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
              )}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold tracking-widest uppercase text-xs mb-4">Servicios</h3>
            <ul className="space-y-2 text-sm">
              {SERVICE_LINKS.map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className="hover:text-white transition-colors">{s.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h3 className="text-white font-bold tracking-widest uppercase text-xs mb-4">Empresa</h3>
            <ul className="space-y-2 text-sm">
              {EMPRESA_LINKS.map((e) => (
                <li key={e.href}>
                  <Link href={e.href} className="hover:text-white transition-colors">{e.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold tracking-widest uppercase text-xs mb-4">Contacto</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href={`mailto:${SITE_CONFIG.contact.email}`} className="flex items-start gap-2 hover:text-white transition-colors">
                  <Mail className="w-4 h-4 mt-0.5 shrink-0 text-primary" />
                  <span>{SITE_CONFIG.contact.email}</span>
                </a>
              </li>
              <li>
                <a href={`tel:${SITE_CONFIG.contact.phone}`} className="flex items-start gap-2 hover:text-white transition-colors">
                  <Phone className="w-4 h-4 mt-0.5 shrink-0 text-primary" />
                  <span>+51 913 527 489</span>
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-primary" />
                <span>Lima, Perú</span>
              </li>
              <li className="pt-2">
                <Link href="/contacto/"
                      className="inline-flex items-center justify-center px-4 py-2 bg-primary text-white rounded-full font-bold text-xs tracking-wide hover:bg-secondary transition-colors">
                  Solicita una auditoría
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-neutral-500">
          <div>© {year} {SITE_CONFIG.brandFull}. Todos los derechos reservados.</div>
          <div className="flex gap-6">
            {LEGAL_LINKS.map((l) => (
              <Link key={l.href} href={l.href} className="hover:text-white transition-colors">{l.label}</Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
