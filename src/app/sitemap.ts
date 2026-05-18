import { MetadataRoute } from "next";
import { SERVICES_LIST, WHO_ARE_YOU_OPTIONS } from "@/lib/data";
import { SITE_CONFIG } from "@/lib/site-config";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_CONFIG.baseUrl;
  const lastModified = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { path: "", priority: 1.0, freq: "weekly" as const },
    { path: "/nosotros", priority: 0.9, freq: "monthly" as const },
    { path: "/servicios", priority: 0.9, freq: "weekly" as const },
    { path: "/portafolio", priority: 0.8, freq: "monthly" as const },
    { path: "/clientes", priority: 0.7, freq: "monthly" as const },
    { path: "/contacto", priority: 0.8, freq: "yearly" as const },
    { path: "/quien-eres", priority: 0.6, freq: "monthly" as const },
    { path: "/simulador", priority: 0.7, freq: "monthly" as const },
    { path: "/politicas-de-privacidad", priority: 0.2, freq: "yearly" as const },
    { path: "/terminos-y-condiciones", priority: 0.2, freq: "yearly" as const },
  ].map(({ path, priority, freq }) => ({
    url: `${baseUrl}${path}`,
    lastModified,
    changeFrequency: freq,
    priority,
  }));

  const serviceRoutes: MetadataRoute.Sitemap = SERVICES_LIST.map((service) => ({
    url: `${baseUrl}/servicios/${service.slug}`,
    lastModified,
    changeFrequency: "weekly" as const,
    priority: 0.85,
  }));

  const whoAreYouRoutes: MetadataRoute.Sitemap = WHO_ARE_YOU_OPTIONS.map((option) => ({
    url: `${baseUrl}/quien-eres/${option.slug}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }));

  return [...staticRoutes, ...serviceRoutes, ...whoAreYouRoutes];
}
