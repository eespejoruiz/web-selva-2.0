import { Metadata } from "next"
import { ContactoSection } from "@/components/sections/ContactoSection"

export const metadata: Metadata = {
  title: "Contacto | Web Selva Ecomarketing",
  description: "Contáctanos y empecemos a transformar tu comunicación. Estamos listos para escuchar tu proyecto y potenciar tu impacto.",
}

export default function ContactoPage() {
  return <ContactoSection />
}
