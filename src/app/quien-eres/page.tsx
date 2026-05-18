import { Metadata } from "next";
import { QuienEresSection } from "@/components/sections/QuienEresSection";
import { JsonLd } from "@/components/JsonLd";
import { buildPageMetadata, buildBreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  path: "/quien-eres",
  title: "¿Quién Eres?",
  description:
    "Entendemos tus necesidades. Dinos en qué etapa te encuentras y te diremos cómo Selva Ecomarketing puede ayudarte.",
});

export default function QuienEresPage() {
  return (
    <>
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: "Inicio", path: "/" },
          { name: "¿Quién Eres?", path: "/quien-eres" },
        ])}
      />
      <QuienEresSection />
    </>
  );
}
