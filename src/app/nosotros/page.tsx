import { Metadata } from "next"
import { NosotrosPageContent } from "@/components/sections/NosotrosPageContent"

export const metadata: Metadata = {
  title: "Nosotros | Web Selva Ecomarketing",
  description: "Conoce a Web Selva, la agencia de marketing digital que une sostenibilidad y resultados. Nuestro equipo transforma acciones verdes en impacto real.",
}


export default function NosotrosPage() {
  return <NosotrosPageContent />
}
