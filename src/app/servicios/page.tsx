import { Metadata } from "next";
import { ServiciosSection } from "@/components/sections/ServiciosSection";
import { JsonLd } from "@/components/JsonLd";
import {
  buildPageMetadata,
  buildBreadcrumbSchema,
  buildServiceSchema,
} from "@/lib/seo";
import { SERVICES_LIST } from "@/lib/data";

export const metadata: Metadata = buildPageMetadata({
  path: "/servicios",
  title: "Servicios",
  description:
    "Servicios de marketing sostenible: SEO, SEM, GEO, redes sociales, web, data, branding, email, audiovisuales y marketplaces para empresas con propósito.",
});

export default function ServiciosPage() {
  const serviceSchemas = SERVICES_LIST.map((service) =>
    buildServiceSchema({
      name: service.title,
      description: service.description,
      path: `/servicios/${service.slug}`,
    })
  );

  return (
    <>
      <JsonLd
        data={[
          buildBreadcrumbSchema([
            { name: "Inicio", path: "/" },
            { name: "Servicios", path: "/servicios" },
          ]),
          ...serviceSchemas,
        ]}
      />
      <h1 className="sr-only">Servicios de Marketing Sostenible para Empresas con Propósito</h1>
      <ServiciosSection />
    </>
  );
}
