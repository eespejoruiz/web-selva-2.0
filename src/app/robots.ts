import { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://webselva.com' // TODO: Actualizar con el dominio real

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}