import { Metadata } from "next"
import { QuienEresSection } from "@/components/sections/QuienEresSection"

export const metadata: Metadata = {
  title: "¿Quién Eres? | Web Selva Ecomarketing",
  description: "Entendemos tus necesidades. Dinos en qué etapa te encuentras y te diremos cómo podemos ayudarte.",
}

export default function QuienEresPage() {
  return <QuienEresSection />
}
