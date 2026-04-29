import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/SmoothScrollProvider";
import { TransitionProvider } from "@/context/TransitionContext";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
  weight: ["400", "500", "600", "700"],
  // [OPTIMIZACIÓN] Añadimos un fallback explícito. 
  // Next.js creará automáticamente los "ajustes métricos" para que Arial 
  // ocupe el mismo espacio exacto que ocuparía Montserrat.
  adjustFontFallback: true, 
});

export const metadata: Metadata = {
  // [SEO-006] Usamos variable de entorno con fallback al dominio real
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://selvagencia.com"), 
  title: {
    default: "Selva Ecomarketing | Agencia de Marketing Sostenible",
    template: "%s | Selva Ecomarketing",
  },
  description: "Agencia de marketing digital especializada en sostenibilidad, impacto y responsabilidad social. Estrategias de SEO, SEM, y diseño web para empresas conscientes.",
  keywords: ["marketing sostenible", "agencia de marketing verde", "seo", "sem", "diseño web sostenible", "ecomarketing", "marketing de impacto"],
  authors: [{ name: "Selva Ecomarketing" }],
  creator: "Selva Ecomarketing",
  publisher: "Selva Ecomarketing",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  
  // [SEO-001] AQUÍ NACE LA ETIQUETA CANONICAL QUE MATA EL DUPLICADO
  alternates: {
    canonical: "https://selvagencia.com",
  },

  openGraph: {
    title: "Selva Ecomarketing | Agencia de Marketing Sostenible",
    description: "Agencia de marketing digital especializada en sostenibilidad. Impulsamos marcas con propósito.",
    url: "https://selvagencia.com", // [SEO-006] Dominio corregido
    siteName: "Selva Ecomarketing",
    locale: "es_PE", // [SEO-007] Locale corregido para Perú
    type: "website",
    images: [
      {
        url: "/logo_selva.webp",
        width: 1200,
        height: 630,
        alt: "Selva Ecomarketing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Selva Ecomarketing | Agencia de Marketing Sostenible",
    description: "Agencia de marketing digital especializada en sostenibilidad.",
    images: ["/logo_selva.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://selvagencia.com/#organization",
      "name": "Selva Ecomarketing",
      "url": "https://selvagencia.com/",
      "logo": {
        "@type": "ImageObject",
        "url": "https://selvagencia.com/logo_selva.webp",
        "width": "600",
        "height": "60"
      },
      "parentOrganization": {
        "@type": "Organization",
        "name": "Amazon Andes Export"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+51-913527489",
        "contactType": "customer service",
        "areaServed": "PE",
        "availableLanguage": "Spanish"
      }
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://selvagencia.com/#service",
      "name": "Selva Ecomarketing",
      "url": "https://selvagencia.com/",
      "logo": "https://selvagencia.com/logo_selva.webp",
      "description": "Agencia de marketing digital especializada en sostenibilidad, impacto y responsabilidad social.",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "PE"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Servicios",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "GEO para Empresas Sostenibles",
              "url":"https://selvagencia.com/servicios/geo/"
            }
          },
                    {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "SEO para Empresas Sostenibles",
              "url":"https://selvagencia.com/servicios/seo/"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "SEM para Empresas Sostenibles",
              "url":"https://selvagencia.com/servicios/sem/"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Gestión de Redes Sociales",
              "url":"https://selvagencia.com/servicios/rrdd/"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Desarrollo Web",
              "url":"https://selvagencia.com/servicios/web/"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Análisis de Datos",
              "url":"https://selvagencia.com/servicios/data/"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Branding",
              "url":"https://selvagencia.com/servicios/branding/"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "e-mail marketing",
              "url":"https://selvagencia.com/servicios/email/"
            }
          },
        ]
      }
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={montserrat.variable} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased bg-background text-foreground overflow-x-hidden selection:bg-primary selection:text-white">
        <SmoothScrollProvider>
          <TransitionProvider>
            <Header />
            <main className="min-h-screen">
              {children}
            </main>
            <WhatsAppButton />
            <Footer />
          </TransitionProvider>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
