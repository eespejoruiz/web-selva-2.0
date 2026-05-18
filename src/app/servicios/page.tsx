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
    "Nuestros servicios de marketing sostenible: SEO, SEM, GEO, diseño web, gestión de redes sociales, análisis de datos, email marketing, branding, audiovisuales y marketplaces.",
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
      <ServiciosSection />
    </>
  );
}
