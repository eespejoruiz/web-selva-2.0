import { Metadata } from "next";
import { SimulatorSection } from "@/components/sections/SimulatorSection";
import { JsonLd } from "@/components/JsonLd";
import { buildPageMetadata, buildBreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  path: "/simulador",
  title: "Simulador de Servicios",
  description:
    "Configura tu plan de marketing sostenible. Mezcla SEO, SEM, GEO, web y branding según las metas de tu empresa y obtén una propuesta a tu medida.",
});

export default function SimuladorPage() {
  return (
    <>
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: "Inicio", path: "/" },
          { name: "Simulador", path: "/simulador" },
        ])}
      />
      <SimulatorSection />
    </>
  );
}
