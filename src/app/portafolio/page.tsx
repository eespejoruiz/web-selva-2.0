import { Metadata } from "next"
import { PortafolioSection } from "@/components/sections/PortafolioSection"

export const metadata: Metadata = {
  title: "Portafolio | Web Selva Ecomarketing",
  description: "Explora nuestros proyectos de marketing sostenible. Casos de éxito donde el impacto positivo y los resultados de negocio se encuentran.",
}

export default function PortafolioPage() {
  return <PortafolioSection showLink={false} />
}
