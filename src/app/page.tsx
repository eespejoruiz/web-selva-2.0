import dynamic from "next/dynamic";
import { HomeHero } from "@/components/sections/HomeHero";

// Lazy load sections that are below the fold
const QuienEresSection = dynamic(() => import("@/components/sections/QuienEresSection").then(mod => mod.QuienEresSection), { ssr: true });
const NosotrosSection = dynamic(() => import("@/components/sections/NosotrosSection").then(mod => mod.NosotrosSection), { ssr: true });
const ServiciosSection = dynamic(() => import("@/components/sections/ServiciosSection").then(mod => mod.ServiciosSection), { ssr: true });
const PortafolioSection = dynamic(() => import("@/components/sections/PortafolioSection").then(mod => mod.PortafolioSection), { ssr: true });
const ClientesSection = dynamic(() => import("@/components/sections/ClientesSection").then(mod => mod.ClientesSection), { ssr: true });
const ContactoSection = dynamic(() => import("@/components/sections/ContactoSection").then(mod => mod.ContactoSection), { ssr: true });

export default function Home() {
  return (
    <main className="relative flex flex-col">
      <HomeHero />
      <div className="sticky top-0 z-10 bg-background w-full shadow-[0_-20px_50px_rgba(0,0,0,0.1)] min-h-screen"><QuienEresSection /></div>
      <div className="sticky top-0 z-20 bg-background w-full shadow-[0_-20px_50px_rgba(0,0,0,0.1)] min-h-screen"><NosotrosSection /></div>
      <div className="sticky top-0 z-30 bg-background w-full shadow-[0_-20px_50px_rgba(0,0,0,0.1)] min-h-screen"><ServiciosSection /></div>
      <div className="sticky top-0 z-40 bg-background w-full shadow-[0_-20px_50px_rgba(0,0,0,0.1)] min-h-screen"><PortafolioSection /></div>
      <div className="sticky top-0 z-50 bg-black w-full shadow-[0_-20px_50px_rgba(0,0,0,0.1)] min-h-screen"><ClientesSection /></div>
      <div className="sticky top-0 z-[60] bg-background w-full shadow-[0_-20px_50px_rgba(0,0,0,0.1)] min-h-screen"><ContactoSection /></div>
    </main>
  );
}
