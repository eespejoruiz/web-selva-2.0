import { Metadata } from "next";
import { NosotrosPageContent } from "@/components/sections/NosotrosPageContent";
import { JsonLd } from "@/components/JsonLd";
import { buildPageMetadata, buildBreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  path: "/nosotros",
  title: "Nosotros",
  description:
    "Conoce a Selva, la agencia de marketing digital que une sostenibilidad y resultados. Nuestro equipo transforma acciones verdes en impacto real y medible.",
});

export default function NosotrosPage() {
  return (
    <>
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: "Inicio", path: "/" },
          { name: "Nosotros", path: "/nosotros" },
        ])}
      />
      <NosotrosPageContent />
    </>
  );
}
