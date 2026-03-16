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
  metadataBase: new URL("https://webselva.com"), // TODO: Actualizar con el dominio real
  title: {
    default: "Web Selva Ecomarketing | Agencia de Marketing Sostenible",
    template: "%s | Web Selva Ecomarketing",
  },
  description: "Agencia de marketing digital especializada en sostenibilidad, impacto y responsabilidad social. Estrategias de SEO, SEM, y diseño web para empresas conscientes.",
  keywords: ["marketing sostenible", "agencia de marketing verde", "seo", "sem", "diseño web sostenible", "ecomarketing", "marketing de impacto"],
  authors: [{ name: "Web Selva" }],
  creator: "Web Selva",
  publisher: "Web Selva",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Web Selva Ecomarketing | Agencia de Marketing Sostenible",
    description: "Agencia de marketing digital especializada en sostenibilidad. Impulsamos marcas con propósito.",
    url: "https://webselva.com",
    siteName: "Web Selva Ecomarketing",
    locale: "es_ES",
    type: "website",
    images: [
      {
        url: "/logo_selva.webp", // Asegurarse de tener una imagen OG adecuada
        width: 1200,
        height: 630,
        alt: "Web Selva Ecomarketing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Selva Ecomarketing",
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
