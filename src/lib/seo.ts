import type { Metadata } from "next";
import { SITE_CONFIG, absoluteUrl } from "./site-config";

export interface PageMetaInput {
  /** Path relativo del canónico, ej "/servicios" o "/servicios/seo". Para home, "/" o "". */
  path: string;
  /** Title específico de la página. NO incluir el brand — el template lo agrega. */
  title?: string;
  /** Meta description específica. Si se omite, usa la default del sitio. */
  description?: string;
  /** Imagen para OG/Twitter. Si se omite, usa el logo. */
  image?: string;
  /** Marcar como noindex (ej. para páginas internas o thank-you). */
  noindex?: boolean;
  /** Override del og:type. Default "website". */
  ogType?: "website" | "article" | "profile";
}

/**
 * Construye un objeto Metadata consistente para cualquier página.
 * Garantiza canonical, og:url, og:image absolutos y title correcto.
 */
export function buildPageMetadata(input: PageMetaInput): Metadata {
  const canonicalPath = input.path === "" ? "/" : input.path;
  const canonical = absoluteUrl(canonicalPath);
  const description = input.description ?? SITE_CONFIG.defaultDescription;
  const image = input.image ?? SITE_CONFIG.logoPath;

  const meta: Metadata = {
    title: input.title,
    description,
    alternates: { canonical },
    openGraph: {
      title: input.title
        ? `${input.title} | ${SITE_CONFIG.brandFull}`
        : `${SITE_CONFIG.brandFull} | ${SITE_CONFIG.tagline}`,
      description,
      url: canonical,
      siteName: SITE_CONFIG.brandFull,
      locale: SITE_CONFIG.defaultLocale,
      type: input.ogType ?? "website",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: input.title ?? SITE_CONFIG.brandFull,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: input.title
        ? `${input.title} | ${SITE_CONFIG.brandFull}`
        : SITE_CONFIG.brandFull,
      description,
      images: [image],
    },
  };

  if (input.noindex) {
    meta.robots = { index: false, follow: false };
  }

  return meta;
}

/** ---------- JSON-LD builders ---------- */

interface BreadcrumbItem {
  name: string;
  path: string;
}

export function buildOrganizationSchema() {
  const sameAs = Object.values(SITE_CONFIG.social).filter(Boolean);
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_CONFIG.brandFull,
    alternateName: SITE_CONFIG.brandShort,
    url: SITE_CONFIG.baseUrl,
    logo: absoluteUrl(SITE_CONFIG.logoPath),
    email: SITE_CONFIG.contact.email,
    telephone: SITE_CONFIG.contact.phone,
    address: {
      "@type": "PostalAddress",
      addressCountry: SITE_CONFIG.country,
    },
    ...(sameAs.length > 0 ? { sameAs } : {}),
  };
}

export function buildWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_CONFIG.brandFull,
    url: SITE_CONFIG.baseUrl,
    inLanguage: "es-PE",
    publisher: {
      "@type": "Organization",
      name: SITE_CONFIG.brandFull,
    },
  };
}

export function buildBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function buildServiceSchema(input: {
  name: string;
  description: string;
  path: string;
  serviceType?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: input.name,
    description: input.description,
    url: absoluteUrl(input.path),
    serviceType: input.serviceType ?? input.name,
    provider: {
      "@type": "Organization",
      name: SITE_CONFIG.brandFull,
      url: SITE_CONFIG.baseUrl,
    },
    areaServed: {
      "@type": "Country",
      name: "Perú",
    },
  };
}

export function buildContactPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: `Contacto | ${SITE_CONFIG.brandFull}`,
    url: absoluteUrl("/contacto"),
    mainEntity: {
      "@type": "Organization",
      name: SITE_CONFIG.brandFull,
      email: SITE_CONFIG.contact.email,
      telephone: SITE_CONFIG.contact.phone,
    },
  };
}
