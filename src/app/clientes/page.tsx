import { Metadata } from "next"
import { ClientesSection } from "@/components/sections/ClientesSection"

export const metadata: Metadata = {
  title: "Clientes | Web Selva Ecomarketing",
  description: "Descubre las empresas y organizaciones que confían en Web Selva para potenciar su impacto y comunicación sostenible.",
}

export default function ClientesPage() {
  return (
    <main>
      <ClientesSection />
    </main>
  )
}
