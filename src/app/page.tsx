import dynamic from "next/dynamic";
import { HomeHero } from "@/components/sections/HomeHero";

// Lazy load sections that are below the fold
const QuienEresSection = dynamic(() => import("@/components/sections/QuienEresSection").then(mod => mod.QuienEresSection), { ssr: true });
const NosotrosSection = dynamic(() => import("@/components/sections/NosotrosSection").then(mod => mod.NosotrosSection), { ssr: true });
const ServiciosGrid = dynamic(() => import("@/components/sections/ServiciosGrid").then(mod => mod.ServiciosGrid), { ssr: true });
const PortafolioSection = dynamic(() => import("@/components/sections/PortafolioSection").then(mod => mod.PortafolioSection), { ssr: true });
const ClientesSection = dynamic(() => import("@/components/sections/ClientesSection").then(mod => mod.ClientesSection), { ssr: true });
const ContactoSection = dynamic(() => import("@/components/sections/ContactoSection").then(mod => mod.ContactoSection), { ssr: true });

/**
 * Home con sticky-stack — cada sección queda fija mientras la siguiente sube encima.
 * KEY FIX para overlap: cada wrapper tiene min-h-[110vh] (10vh extra de "buffer") en vez
 * de min-h-screen exacto. Esto evita que dos secciones queden visibles a la vez durante
 * la transición.
 *
 * Servicios usa ServiciosGrid (mismo que /servicios/ standalone) en lugar de
 * ServiciosSection (carousel sticky horizontal) — el horizontal scroll competía con
 * el vertical y confundía la UX.
 */
export default function Home() {
  return (
    <main className="relative flex flex-col">
      <HomeHero />
      <div className="sticky top-0 z-10 bg-background w-full shadow-[0_-20px_50px_rgba(0,0,0,0.1)] min-h-[110vh]"><QuienEresSection /></div>
      <div className="sticky top-0 z-20 bg-background w-full shadow-[0_-20px_50px_rgba(0,0,0,0.1)] min-h-[110vh]"><NosotrosSection /></div>
      <div className="sticky top-0 z-30 bg-neutral-900 w-full shadow-[0_-20px_50px_rgba(0,0,0,0.1)] min-h-[110vh]"><ServiciosGrid /></div>
      <div className="sticky top-0 z-40 bg-background w-full shadow-[0_-20px_50px_rgba(0,0,0,0.1)] min-h-[110vh]"><PortafolioSection /></div>
      <div className="sticky top-0 z-50 bg-black w-full shadow-[0_-20px_50px_rgba(0,0,0,0.1)] min-h-[110vh]"><ClientesSection /></div>
      <div className="sticky top-0 z-[60] bg-background w-full shadow-[0_-20px_50px_rgba(0,0,0,0.1)] min-h-[110vh]"><ContactoSection /></div>
    </main>
  );
}
