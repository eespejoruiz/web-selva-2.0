import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/SmoothScrollProvider";
import { TransitionProvider } from "@/context/TransitionContext";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { MobileBottomBar } from "@/components/layout/MobileBottomBar";
import { JsonLd } from "@/components/JsonLd";
import { SITE_CONFIG } from "@/lib/site-config";
import {
  buildOrganizationSchema,
  buildWebsiteSchema,
} from "@/lib/seo";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.baseUrl),
  alternates: { canonical: "/" },
  title: {
    default: `${SITE_CONFIG.brandFull} | ${SITE_CONFIG.tagline}`,
    template: `%s | ${SITE_CONFIG.brandFull}`,
  },
  description: SITE_CONFIG.defaultDescription,
  keywords: [
    "agencia marketing sostenible",
    "agencia marketing Perú",
    "marketing digital sostenible",
    "SEO sostenible",
    "SEM Perú",
    "GEO marketing IA",
    "diseño web sostenible",
    "ecomarketing",
    "marketing de impacto",
    "comunicación de impacto",
  ],
  authors: [{ name: SITE_CONFIG.brandFull, url: SITE_CONFIG.baseUrl }],
  creator: SITE_CONFIG.brandFull,
  publisher: SITE_CONFIG.brandFull,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: `${SITE_CONFIG.brandFull} | ${SITE_CONFIG.tagline}`,
    description: SITE_CONFIG.defaultDescription,
    url: SITE_CONFIG.baseUrl,
    siteName: SITE_CONFIG.brandFull,
    locale: SITE_CONFIG.defaultLocale,
    type: "website",
    images: [
      {
        url: SITE_CONFIG.logoPath,
        width: 1200,
        height: 630,
        alt: SITE_CONFIG.brandFull,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_CONFIG.brandFull,
    description: SITE_CONFIG.defaultDescription,
    images: [SITE_CONFIG.logoPath],
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
      <head>
        <JsonLd data={[buildOrganizationSchema(), buildWebsiteSchema()]} />
      </head>
      <body className="antialiased bg-background text-foreground overflow-x-hidden selection:bg-primary selection:text-white">
        <SmoothScrollProvider>
          <TransitionProvider>
            <Header />
            <main className="min-h-screen">
              {children}
            </main>
            <WhatsAppButton />
            <MobileBottomBar />
            <Footer />
          </TransitionProvider>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
