"use client"

import React, { useRef } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Image from "next/image"
import { 
  Check, 
  X, 
  ArrowRight, 
  BarChart3, 
  Globe, 
  PenTool, 
  Lightbulb, 
  Users, 
  Target, 
  ShieldCheck, 
  Leaf, 
  TrendingUp,
  Search,
  Mail,
  Smartphone
} from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

export function NosotrosPageContent() {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    // Fade in elements with class .animate-in
    const elements = gsap.utils.toArray('.animate-in')
    elements.forEach((el: any) => {
      gsap.fromTo(el, 
        { opacity: 0, y: 30 },
        {
          opacity: 1, 
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      )
    })
  }, { scope: containerRef })

  return (
    <div ref={containerRef} className="bg-background min-h-screen text-foreground font-sans overflow-hidden">
      
      {/* 1. PORTADA (HERO) */}
      <section className="relative min-h-[90vh] flex items-center justify-center px-4 md:px-8 pt-28 md:pt-40 pb-20 bg-foreground text-background">
         <div className="absolute inset-0 z-0 opacity-20">
            {/* Background texture or image placeholder */}
            <Image 
                src="/Recurso%206quieneres.webp" 
                alt="Background Texture" 
                fill
                className="object-cover"
                priority
            />
         </div>
         <div className="container mx-auto relative z-10 text-center max-w-4xl">
            <h1 className="text-6xl md:text-9xl font-abroad tracking-wider uppercase mb-6 animate-in">
              SELVA
            </h1>
            <h2 className="text-xl md:text-3xl font-medium leading-relaxed mb-8 animate-in">
              Marketing responsable, real, tangible y práctico, que cuida tu imagen y el planeta.
            </h2>
            <p className="text-lg md:text-xl opacity-80 animate-in">
              Agencia de marketing para marcas de impacto real, no greenwashing.
            </p>
         </div>
      </section>

      {/* 2. QUÉ ES SELVA */}
      <section className="py-20 px-4 md:px-8 bg-background">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="animate-in">
                <h2 className="text-4xl md:text-6xl font-abroad text-primary mb-6">¿QUÉ ES SELVA?</h2>
                <div className="space-y-6 text-lg leading-relaxed">
                    <p>
                        Selva es una agencia de eco marketing que trabaja solo con empresas que generan impacto real en personas y ecosistemas. Diseñamos estrategias que equilibran sostenibilidad, resultados de negocio y uso inteligente de recursos, usando big data y tecnología para lograr un estrategia digital efectiva.
                    </p>
                    <div className="bg-white p-6 rounded-2xl shadow-sm border-l-4 border-primary">
                        <p className="font-bold text-xl mb-2">En una frase:</p>
                        <p className="italic">
                            "Hacemos que lo que ya haces por el planeta se convierta en historias, campañas y resultados efectivos."
                        </p>
                    </div>
                </div>
            </div>
            <div className="bg-foreground text-background p-8 md:p-12 rounded-3xl animate-in">
                <h3 className="text-2xl font-bold mb-6 font-abroad">MANTRAS</h3>
                <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                        <Leaf className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                        <span className="text-lg">Impacto real, no maquillaje verde.</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <BarChart3 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                        <span className="text-lg">Marketing que se entiende y se mide.</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <Lightbulb className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                        <span className="text-lg">Tecnología para optimizar tu inversión.</span>
                    </li>
                </ul>
            </div>
        </div>
      </section>

      {/* 3. EL PROBLEMA */}
      <section className="py-20 px-4 md:px-8 bg-white">
        <div className="container mx-auto">
            <h2 className="text-3xl md:text-5xl font-abroad text-center mb-16 animate-in">EL PROBLEMA QUE VEMOS EN EL MERCADO</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                    {
                        title: "Impacto escondido en PDFs",
                        desc: "Las empresas hacen mucho por el planeta, pero su impacto se queda en reportes, certificaciones y documentos que nadie lee ni entiende.",
                        icon: <PenTool className="w-8 h-8" />
                    },
                    {
                        title: "Greenwashing y desconfianza",
                        desc: "El público se cansó de mensajes “verdes” vacíos. Cualquier error de coherencia se nota.",
                        icon: <ShieldCheck className="w-8 h-8" />
                    },
                    {
                        title: "Marketing que quema presupuesto",
                        desc: "Campañas y contenidos que no están alineados a una estrategia clara ni a indicadores de negocio.",
                        icon: <TrendingUp className="w-8 h-8" />
                    },
                    {
                        title: "Equipos saturados y sin sistema",
                        desc: "Acciones dispersas, esfuerzos que no se visibilizan, datos sin integrar y poca claridad sobre qué acciones funcionan.",
                        icon: <Users className="w-8 h-8" />
                    }
                ].map((item, i) => (
                    <div key={i} className="bg-background p-6 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow animate-in">
                        <div className="bg-primary/10 w-14 h-14 rounded-full flex items-center justify-center text-primary mb-4">
                            {item.icon}
                        </div>
                        <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                        <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* 4. VALUE PROP (DIFERENCIADORES) */}
      <section className="py-20 px-4 md:px-8 bg-foreground text-background">
        <div className="container mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16 animate-in">
                <h2 className="text-3xl md:text-5xl font-abroad mb-4">LO QUE HACE DISTINTA A SELVA</h2>
                <p className="text-lg opacity-80">
                    No somos una agencia “verde”. Somos una agencia que une sostenibilidad real, estrategia efectiva y tecnología.
                </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                    {
                        title: "Sostenibilidad con evidencia",
                        desc: "Trabajamos con acciones reales y datos verificables, no con slogans vacíos."
                    },
                    {
                        title: "Mix de servicios optimizado",
                        desc: "No vendemos servicios sueltos: diseñamos el mix adecuado a tus objetivos, tu presupuesto y tu nivel de digitalización."
                    },
                    {
                        title: "Tecnología y automatización",
                        desc: "Usamos herramientas, automatizaciones y análisis de datos para aprovechar mejor cada campaña."
                    },
                    {
                        title: "Transparencia y acompañamiento",
                        desc: "Explicamos qué hacemos, por qué lo hacemos y cómo se mide. Sin caja negra."
                    }
                ].map((item, i) => (
                    <div key={i} className="flex gap-4 animate-in">
                        <div className="w-12 h-12 rounded-full bg-primary flex-shrink-0 flex items-center justify-center text-white font-bold text-xl">
                            {i + 1}
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-2 text-primary">{item.title}</h3>
                            <p className="opacity-80 leading-relaxed">{item.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* 5. SERVICES */}
      <section className="py-20 px-4 md:px-8 bg-background">
        <div className="container mx-auto space-y-20">
            {/* Part 1 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start animate-in">
                <div>
                    <h2 className="text-3xl md:text-4xl font-abroad mb-8 text-primary">
                        CÓMO HACEMOS QUE TE ENCUENTREN Y TE ENTIENDAN
                    </h2>
                    <div className="space-y-6">
                        {[
                            { title: "SEO", desc: "Te encuentran por lo que realmente haces, con contenido que construye autoridad y reputación sostenible. Acompañamos tu proceso de internacionalización.", icon: <Search className="w-5 h-5" /> },
                            { title: "Marketing de Contenidos", desc: "Historias, artículos y recursos que explican con claridad tu impacto y por qué tu marca importa.", icon: <PenTool className="w-5 h-5" /> },
                            { title: "Gestión de Redes Sociales", desc: "Estrategia y ejecución diaria para construir comunidad, no solo presencia.", icon: <Smartphone className="w-5 h-5" /> },
                            { title: "Branding y Diseño Eco Friendly", desc: "Identidades y piezas visuales coherentes con tu propósito y tu mercado meta.", icon: <Leaf className="w-5 h-5" /> },
                        ].map((s, i) => (
                            <div key={i} className="flex gap-4">
                                <div className="mt-1 text-primary">{s.icon}</div>
                                <div>
                                    <h4 className="font-bold text-lg">{s.title}</h4>
                                    <p className="text-gray-600">{s.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="mt-8 p-4 bg-gray-100 rounded-lg text-sm italic border-l-4 border-gray-400">
                        Nota Selva: Elegimos el mix adecuado según tus objetivos, presupuesto y punto de partida digital.
                    </div>
                </div>
                {/* Image or Visual Placeholder */}
                <div className="bg-gray-200 rounded-3xl h-full min-h-[300px] relative overflow-hidden">
                     <Image 
                        src="/Recurso%2025quieneres.webp" 
                        alt="Services visual" 
                        fill
                        className="object-cover"
                    />
                </div>
            </div>

            {/* Part 2 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start animate-in">
                <div className="order-2 lg:order-1 bg-gray-200 rounded-3xl h-full min-h-[300px] relative overflow-hidden">
                     <Image 
                        src="/Recurso%2029quieneres.webp" 
                        alt="Results visual" 
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="order-1 lg:order-2">
                    <h2 className="text-3xl md:text-4xl font-abroad mb-8 text-primary">
                        CÓMO CONVERTIMOS IMPACTO EN RESULTADOS MEDIBLES
                    </h2>
                    <div className="space-y-6">
                        {[
                            { title: "SEM (Google Ads, Meta Ads, TikTok Ads)", desc: "Campañas orientadas a leads y ventas, con foco en retorno y mensaje responsable.", icon: <Target className="w-5 h-5" /> },
                            { title: "Desarrollo Web", desc: "Sitios rápidos, claros y listos para convertir visitas en oportunidades.", icon: <Globe className="w-5 h-5" /> },
                            { title: "Email Marketing & Automatización", desc: "Flujos que nutren relaciones y acompañan a tus audiencias sin saturarlas.", icon: <Mail className="w-5 h-5" /> },
                            { title: "Análisis de Datos & BI", desc: "Dashboards y reportes que conectan tus acciones con resultados y decisiones.", icon: <BarChart3 className="w-5 h-5" /> },
                        ].map((s, i) => (
                            <div key={i} className="flex gap-4">
                                <div className="mt-1 text-primary">{s.icon}</div>
                                <div>
                                    <h4 className="font-bold text-lg">{s.title}</h4>
                                    <p className="text-gray-600">{s.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="mt-8 p-4 bg-gray-100 rounded-lg text-sm italic border-l-4 border-gray-400">
                        Nota Selva: Elegimos el mix adecuado según tus objetivos, presupuesto y punto de partida digital.
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* 6. METHODOLOGY */}
      <section className="py-20 px-4 md:px-8 bg-foreground text-background">
        <div className="container mx-auto">
            <h2 className="text-3xl md:text-5xl font-abroad text-center mb-16 animate-in">CÓMO TRABAJAMOS CONTIGO</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                    { step: "01", title: "Entender contigo el impacto real", desc: "Revisamos qué estás haciendo hoy y qué quieres lograr." },
                    { step: "02", title: "Definir estrategia y mix de servicios", desc: "Diseñamos un plan claro que equilibra visibilidad, performance y sistemas." },
                    { step: "03", title: "Ejecutar, automatizar y medir", desc: "Ponemos en marcha contenidos, campañas y automatizaciones con indicadores concretos." },
                    { step: "04", title: "Ajustar y optimizar", desc: "Revisamos resultados, afinamos el mix y seguimos construyendo reputación." },
                ].map((m, i) => (
                    <div key={i} className="relative p-6 border border-white/20 rounded-2xl hover:bg-white/5 transition-colors animate-in">
                        <div className="text-5xl font-abroad text-primary/40 mb-4">{m.step}</div>
                        <h3 className="text-xl font-bold mb-3">{m.title}</h3>
                        <p className="text-sm opacity-80">{m.desc}</p>
                    </div>
                ))}
            </div>
            <div className="mt-12 text-center animate-in">
                <p className="inline-block bg-primary/20 px-6 py-3 rounded-full text-primary-foreground font-medium border border-primary/40">
                    Recuadro: Usamos herramientas y metodologías que se adaptan a tu equipo; no al revés.
                </p>
            </div>
        </div>
      </section>

      {/* 7. CLIENTS */}
      <section className="py-20 px-4 md:px-8 bg-white">
        <div className="container mx-auto">
            <h2 className="text-3xl md:text-5xl font-abroad text-center mb-16 animate-in">ALGUNAS MARCAS QUE CONFÍAN EN SELVA</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                    { name: "Amazon Andes Export", cat: "Superalimentos / Exportación", desc: "Ordenamos su ecosistema digital y conectamos sus historias de origen con clientes B2B internacionales." },
                    { name: "Munay Ki Perú", cat: "Bienestar / Productos espirituales", desc: "Alineamos contenido, marca y canales para comunicar el valor de lo natural y lo sostenible." },
                    { name: "Cervecería Inkaroots", cat: "Cervecería artesanal", desc: "Construimos un relato de marca fuerte y campañas que respetan la esencia local mientras crece la demanda." },
                    { name: "Expreso Ecuador", cat: "Transporte / Servicios", desc: "Optimizamos campañas y medición para invertir mejor y llegar a la audiencia adecuada." },
                    { name: "Inmobiliaria Coconuth", cat: "Inmobiliario", desc: "Ayudamos a explicar proyectos donde diseño, sostenibilidad y rentabilidad van de la mano." },
                    { name: "Ejército del Perú – IAFAS", cat: "Institucional / Salud", desc: "Mejoramos la claridad de la comunicación digital y la experiencia de los usuarios." },
                ].map((c, i) => (
                    <div key={i} className="bg-background p-6 rounded-2xl shadow-sm border border-gray-100 animate-in">
                        <h3 className="text-xl font-bold text-primary mb-1">{c.name}</h3>
                        <p className="text-xs font-bold uppercase text-gray-400 mb-3">{c.cat}</p>
                        <p className="text-sm text-gray-600 leading-relaxed">{c.desc}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* 8. AUDIENCE */}
      <section className="py-20 px-4 md:px-8 bg-gray-50">
        <div className="container mx-auto">
            <h2 className="text-3xl md:text-5xl font-abroad text-center mb-16 animate-in">¿ES SELVA PARA TI?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {/* YES */}
                <div className="bg-white p-8 rounded-3xl shadow-lg border-t-8 border-primary animate-in">
                    <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                        <Check className="w-8 h-8 text-primary" />
                        Perfecto para ti si...
                    </h3>
                    <ul className="space-y-4">
                        {[
                            "Tienes acciones reales en sostenibilidad/impacto y quieres comunicarlas mejor.",
                            "Te importa tanto la reputación como los resultados de negocio.",
                            "Estás dispuesto a medir y ajustar, no solo hacer “campañas bonitas”.",
                            "Buscas optimizar recursos, no simplemente gastar más en medios."
                        ].map((item, i) => (
                            <li key={i} className="flex items-start gap-3 text-gray-700">
                                <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                
                {/* NO */}
                <div className="bg-white p-8 rounded-3xl shadow-sm border-t-8 border-gray-400 animate-in opacity-80">
                    <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 text-gray-600">
                        <X className="w-8 h-8" />
                        Tal vez no somos tu agencia si...
                    </h3>
                    <ul className="space-y-4">
                        {[
                            "Solo quieres “parecer sostenible” sin cambios reales.",
                            "Buscas soluciones mágicas sin datos ni compromiso de tu equipo.",
                            "Quieres una agencia que diga a todo que sí, sin cuestionar coherencia e impacto."
                        ].map((item, i) => (
                            <li key={i} className="flex items-start gap-3 text-gray-600">
                                <X className="w-5 h-5 flex-shrink-0 mt-0.5" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
      </section>

      {/* 9. CONTACT */}
      <section className="py-20 px-4 md:px-8 bg-primary text-white text-center">
        <div className="container mx-auto max-w-3xl animate-in">
            <h2 className="text-4xl md:text-6xl font-abroad mb-8">HABLEMOS CLARO.</h2>
            <p className="text-xl md:text-2xl mb-8 leading-relaxed">
                Cuéntanos qué está haciendo tu empresa por el planeta y qué te gustaría lograr con tu marketing. Te proponemos un mix de servicios aterrizado a tu realidad.
            </p>
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-12">
                <a href="mailto:info@selvagencia.pe" className="bg-white text-primary px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors flex items-center gap-2">
                    <Mail className="w-5 h-5" /> info@selvagencia.pe
                </a>
                <a href="https://wa.me/51913527489" className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-colors flex items-center gap-2">
                    <Smartphone className="w-5 h-5" /> +51 913 527 489
                </a>
            </div>
            <p className="text-sm opacity-80">
                Selva. Marketing responsable para impacto real.
            </p>
        </div>
      </section>

    </div>
  )
}
