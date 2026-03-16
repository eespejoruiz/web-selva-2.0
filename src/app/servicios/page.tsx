import { Metadata } from "next"
import { ServiciosSection } from "@/components/sections/ServiciosSection"

export const metadata: Metadata = {
  title: "Servicios | Web Selva Ecomarketing",
  description: "Nuestros servicios de marketing sostenible: SEO, SEM, Diseño Web, Gestión de Redes Sociales, Análisis de Datos y más.",
}

export default function ServiciosPage() {
  return <ServiciosSection />
}
