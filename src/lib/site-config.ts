/**
 * Single source of truth for site identity.
 * Cambiar brand, dominio o contacto SOLO aquí.
 */

export const SITE_CONFIG = {
  brandFull: "Selva Ecomarketing",
  brandShort: "Selva",
  tagline: "Agencia de Marketing Sostenible en Perú",
  defaultDescription:
    "Agencia de marketing digital en Perú especializada en sostenibilidad: SEO, SEM, GEO, diseño web y branding para empresas con propósito. Impacto medible, comunicación clara.",
  domain: "selvagencia.com",
  baseUrl: "https://selvagencia.com",
  defaultLocale: "es_PE",
  country: "PE",
  contact: {
    email: "info@selvagencia.pe",
    phone: "+51913527489",
    whatsapp: "https://wa.me/51913527489",
  },
  // Rellenar con URLs reales antes del merge final
  social: {
    instagram: "",
    linkedin: "",
    facebook: "",
  },
  logoPath: "/logo_selva.webp",
} as const;

export type SiteConfig = typeof SITE_CONFIG;

export function absoluteUrl(path: string): string {
  if (!path || path === "/") return SITE_CONFIG.baseUrl;
  const clean = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_CONFIG.baseUrl}${clean}`;
}
