import { Metadata } from "next";
import { ClientesSection } from "@/components/sections/ClientesSection";
import { JsonLd } from "@/components/JsonLd";
import { buildPageMetadata, buildBreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  path: "/clientes",
  title: "Clientes",
  description:
    "Descubre las empresas y organizaciones que confían en Selva para potenciar su impacto y comunicación sostenible.",
});

export default function ClientesPage() {
  return (
    <>
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: "Inicio", path: "/" },
          { name: "Clientes", path: "/clientes" },
        ])}
      />
      <ClientesSection />
    </>
  );
}
