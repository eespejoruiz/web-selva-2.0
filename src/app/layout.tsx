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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={montserrat.variable} suppressHydrationWarning>
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
