import { MetadataRoute } from 'next'
import { SERVICES_LIST, WHO_ARE_YOU_OPTIONS } from '@/lib/data'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://webselva.com' // TODO: Actualizar con el dominio real

  const staticRoutes = [
    '',
    '/nosotros',
    '/servicios',
    '/portafolio',
    '/clientes',
    '/contacto',
    '/quien-eres',
    '/politicas-de-privacidad',
    '/terminos-y-condiciones',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  const serviceRoutes = SERVICES_LIST.map((service) => ({
    url: `${baseUrl}/servicios/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }))

  const whoAreYouRoutes = WHO_ARE_YOU_OPTIONS.map((option) => ({
    url: `${baseUrl}/quien-eres/${option.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))

  return [...staticRoutes, ...serviceRoutes, ...whoAreYouRoutes]
}