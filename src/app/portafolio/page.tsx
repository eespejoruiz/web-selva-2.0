import { Metadata } from "next";
import { PortafolioSection } from "@/components/sections/PortafolioSection";
import { JsonLd } from "@/components/JsonLd";
import { buildPageMetadata, buildBreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  path: "/portafolio",
  title: "Portafolio",
  description:
    "Explora nuestros proyectos de marketing sostenible. Casos de éxito donde el impacto positivo y los resultados de negocio se encuentran.",
});

export default function PortafolioPage() {
  return (
    <>
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: "Inicio", path: "/" },
          { name: "Portafolio", path: "/portafolio" },
        ])}
      />
      <PortafolioSection />
    </>
  );
}
