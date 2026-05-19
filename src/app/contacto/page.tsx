import { Metadata } from "next";
import { ContactoSection } from "@/components/sections/ContactoSection";
import { JsonLd } from "@/components/JsonLd";
import {
  buildPageMetadata,
  buildBreadcrumbSchema,
  buildContactPageSchema,
} from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  path: "/contacto",
  title: "Contacto",
  description:
    "Contáctanos y empecemos a transformar tu comunicación. Estamos listos para escuchar tu proyecto y potenciar tu impacto en Perú y LatAm.",
});

export default function ContactoPage() {
  return (
    <>
      <JsonLd
        data={[
          buildBreadcrumbSchema([
            { name: "Inicio", path: "/" },
            { name: "Contacto", path: "/contacto" },
          ]),
          buildContactPageSchema(),
        ]}
      />
      <h1 className="sr-only">Contacto — Selva Ecomarketing, Agencia de Marketing Sostenible</h1>
      <ContactoSection />
    </>
  );
}
