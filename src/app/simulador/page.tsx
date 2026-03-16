import { Metadata } from "next"
import { SimulatorSection } from "@/components/sections/SimulatorSection"

export const metadata: Metadata = {
  title: "Simulador de Servicios | Web Selva Ecomarketing",
  description: "Descubre el mix de marketing ideal para tu empresa en base a tus objetivos y necesidades.",
}

export default function SimulatorPage() {
  return <SimulatorSection />
}
