import React from "react";
import { SERVICES_LIST } from "@/lib/data";
import { notFound } from "next/navigation";
import { TransitionLink } from "@/components/ui/TransitionLink";
import { ArrowLeft, Check } from "lucide-react";
import Image from "next/image";
import { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import {
  buildPageMetadata,
  buildBreadcrumbSchema,
  buildServiceSchema,
} from "@/lib/seo";

// Títulos ricos para SEO — los slugs de acrónimos (GEO, SEO, SEM) necesitan
// contexto extra para superar el mínimo de longitud que premia Google.
const SEO_TITLE_BY_SLUG: Record<string, string> = {
  geo: "GEO — Optimización para Respuestas de IA",
  seo: "SEO Sostenible — Posicionamiento Orgánico en Google",
  sem: "SEM — Google, Meta y TikTok Ads que Convierten",
  rrdd: "Gestión de Redes Sociales para Marcas con Propósito",
  web: "Desarrollo Web Sostenible y de Bajo Impacto",
  data: "Análisis de Datos y Dashboards de Marketing",
  branding: "Branding con Propósito y Coherencia de Marca",
  email: "Email Marketing y Automatización CRM",
  audiovisuales: "Audiovisuales para Marcas con Impacto",
  marketplaces: "Posicionamiento en Amazon y Alibaba",
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES_LIST.find((s) => s.slug === slug);
  if (!service) return { robots: { index: false, follow: false } };

  return buildPageMetadata({
    path: `/servicios/${slug}`,
    title: SEO_TITLE_BY_SLUG[slug] ?? service.title,
    description: service.description,
    image: service.image,
  });
}

export function generateStaticParams() {
  return SERVICES_LIST.map((service) => ({
    slug: service.slug,
  }));
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = SERVICES_LIST.find((s) => s.slug === slug);
  if (!service) notFound();

  return (
    <>
      <JsonLd
        data={[
          buildBreadcrumbSchema([
            { name: "Inicio", path: "/" },
            { name: "Servicios", path: "/servicios" },
            { name: service.title, path: `/servicios/${slug}` },
          ]),
          buildServiceSchema({
            name: service.title,
            description: service.description,
            path: `/servicios/${slug}`,
          }),
        ]}
      />
      <div className="min-h-screen bg-white">
        {/* Hero */}
        <div className="relative h-[60vh] md:h-[70vh] w-full bg-neutral-900 flex items-center overflow-hidden">
          {/* Desktop Image */}
          <div className="hidden md:block absolute inset-0">
            <Image
              src={(service as { imageDesktop?: string }).imageDesktop || service.image || "/logo_selva.webp"}
              alt={service.title}
              fill
              className="object-cover opacity-70"
              priority
            />
          </div>

          {/* Mobile Image */}
          <div className="block md:hidden absolute inset-0">
            <Image
              src={(service as { imageMobile?: string }).imageMobile || service.image || "/logo_selva.webp"}
              alt={service.title}
              fill
              className="object-cover opacity-70"
              priority
            />
          </div>

          <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/50 to-transparent opacity-80" />

          <div className="container mx-auto px-4 md:px-8 relative z-10 text-white pt-20">
            <TransitionLink
              href="/servicios"
              className="inline-flex items-center gap-2 text-white/70 hover:text-white mb-8 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              Volver a servicios
            </TransitionLink>
            <h1 className="text-6xl md:text-8xl font-abroad font-bold tracking-wide mb-6">
              {service.title}
            </h1>
            <p className="text-xl md:text-3xl max-w-4xl font-light text-white/90 leading-relaxed">
              {service.description}
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 md:px-8 py-24 grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-abroad font-bold mb-8 text-neutral-900">
              ¿Qué incluye?
            </h2>
            <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
              Nos enfocamos en resultados tangibles y sostenibles. Nuestro proceso está
              diseñado para maximizar el impacto minimizando la fricción.
            </p>
            <ul className="flex flex-col gap-4">
              {service.includes.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-4 p-4 bg-neutral-50 rounded-xl hover:bg-neutral-100 transition-colors border border-transparent hover:border-neutral-200"
                >
                  <div className="bg-primary/10 p-2 rounded-full text-primary mt-1">
                    <Check className="w-4 h-4" />
                  </div>
                  <span className="text-lg font-medium text-neutral-800">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col justify-center items-start bg-neutral-900 text-white p-12 rounded-3xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

            <h3 className="text-4xl font-abroad font-bold mb-6 relative z-10">
              ¿Listo para empezar?
            </h3>
            <p className="text-xl text-neutral-400 mb-8 relative z-10">
              Hablemos sobre cómo {service.title} puede transformar tu impacto.
            </p>
            <TransitionLink
              href="/contacto"
              className="px-8 py-4 bg-primary text-white rounded-full text-lg font-bold hover:bg-white hover:text-primary transition-all w-full md:w-auto text-center relative z-10"
            >
              Hablemos ahora
            </TransitionLink>
          </div>
        </div>
      </div>
    </>
  );
}
