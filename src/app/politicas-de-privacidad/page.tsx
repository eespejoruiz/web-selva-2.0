import React from "react";
import { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { buildPageMetadata, buildBreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  path: "/politicas-de-privacidad",
  title: "Políticas de Privacidad",
  description:
    "Políticas de privacidad y protección de datos de Selva Ecomarketing.",
});

export default function PrivacyPolicyPage() {
  return (
    <>
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: "Inicio", path: "/" },
          { name: "Políticas de Privacidad", path: "/politicas-de-privacidad" },
        ])}
      />
      <main className="min-h-screen bg-neutral-50 pt-32 pb-20 px-4 md:px-8">
        <div className="container mx-auto max-w-4xl bg-white p-8 md:p-12 rounded-2xl shadow-sm">
          <h1 className="text-4xl md:text-5xl font-abroad font-bold mb-8 text-neutral-900">
            Políticas de Privacidad
          </h1>

          <div className="prose prose-neutral max-w-none text-neutral-600 space-y-6">
            <p>
              En <strong>Selva Ecomarketing</strong>, nos comprometemos a proteger la privacidad y seguridad de los datos personales de nuestros usuarios y clientes. Esta Política de Privacidad describe cómo recopilamos, utilizamos y protegemos su información.
            </p>

            <h2 className="text-2xl font-bold text-neutral-800 mt-8 mb-4">1. Recopilación de Información</h2>
            <p>
              Recopilamos información que usted nos proporciona directamente cuando utiliza nuestros servicios, se pone en contacto con nosotros o se suscribe a nuestras comunicaciones. Esto puede incluir:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Nombre y apellidos.</li>
              <li>Dirección de correo electrónico.</li>
              <li>Número de teléfono.</li>
              <li>Información sobre su empresa o proyecto.</li>
            </ul>

            <h2 className="text-2xl font-bold text-neutral-800 mt-8 mb-4">2. Uso de la Información</h2>
            <p>
              Utilizamos la información recopilada para:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Proveer, mantener y mejorar nuestros servicios.</li>
              <li>Responder a sus consultas y solicitudes.</li>
              <li>Enviarle información relevante sobre nuestros servicios y novedades (si ha aceptado recibirla).</li>
              <li>Analizar el uso de nuestro sitio web para mejorar la experiencia del usuario.</li>
            </ul>

            <h2 className="text-2xl font-bold text-neutral-800 mt-8 mb-4">3. Protección de Datos</h2>
            <p>
              Implementamos medidas de seguridad técnicas y organizativas para proteger sus datos personales contra el acceso no autorizado, la alteración, la divulgación o la destrucción.
            </p>

            <h2 className="text-2xl font-bold text-neutral-800 mt-8 mb-4">4. Cookies</h2>
            <p>
              Nuestro sitio web utiliza cookies para mejorar su experiencia de navegación. Puede configurar su navegador para rechazar todas las cookies o para que le avise cuando se envíe una cookie.
            </p>

            <h2 className="text-2xl font-bold text-neutral-800 mt-8 mb-4">5. Contacto</h2>
            <p>
              Si tiene alguna pregunta sobre nuestra Política de Privacidad, no dude en contactarnos a través de nuestro correo electrónico:{" "}
              <a href="mailto:info@selvagencia.pe" className="text-primary hover:underline">
                info@selvagencia.pe
              </a>
              .
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
