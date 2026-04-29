import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  // [SEO-006] Eliminamos webselva.com y usamos la variable de entorno con fallback al dominio real
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://selvagencia.com'

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/private/', 
        '/_next/', 
        '/api/'
      ], // Buenas prácticas: bloqueamos rutas internas que no deben indexarse
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}