import type { Metadata, Viewport } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { GoogleAnalytics, GoogleAnalyticsNoScript } from "@/components/analytics/GoogleAnalytics";
import { CookieBanner } from "@/components/analytics/CookieBanner";
import { generateOrganizationJsonLd } from "@/lib/jsonLd";
import { SITE_CONFIG } from "@/data/siteData";

export const viewport: Viewport = {
  themeColor: "#f59e0b",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: "PowerDashboard | Consultoría Power BI y Business Intelligence en España",
    template: "%s | PowerDashboard.es",
  },
  description: "Consultoría especializada en Power BI, Looker Studio, cuadros de mando interactivos y automatización analítica. Ahorra cientos de horas y rentabiliza tus datos.",
  keywords: [
    "consultor power bi",
    "consultoria business intelligence españa",
    "cuadros de mando power bi",
    "dashboards looker studio",
    "automatizacion excel a power bi",
    "consultor bi freelance",
    "cuadro de mandos financiero",
    "dashboard de ventas",
    "power bi madrid",
    "power bi barcelona",
    "guillermo yuste"
  ],
  authors: [{ name: SITE_CONFIG.founder.name, url: SITE_CONFIG.founder.linkedin }],
  creator: SITE_CONFIG.founder.name,
  publisher: SITE_CONFIG.name,
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
  alternates: {
    canonical: SITE_CONFIG.url,
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    title: "PowerDashboard | Consultoría Power BI y Business Intelligence en España",
    description: "Transformamos el caos de tus datos y hojas de Excel en Cuadros de Mando interactivos que multiplican tu rentabilidad.",
    images: [
      {
        url: "/logos/PowerDashboardLogoCompleto.png",
        width: 1200,
        height: 630,
        alt: "PowerDashboard - Consultoría de Business Intelligence",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PowerDashboard | Consultoría Power BI & Business Intelligence",
    description: "Cuadros de mando interactivos y automatización de datos para empresas.",
    images: ["/logos/PowerDashboardLogoCompleto.png"],
  },
  icons: {
    icon: "/logos/Logo Min Min-min.png",
    shortcut: "/logos/Logo Min Min-min.png",
    apple: "/logos/PowerDashboardLogoY.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const orgJsonLd = generateOrganizationJsonLd();

  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
      </head>
      <body className={`${inter.variable} ${outfit.variable} bg-[#080c14] text-slate-100 min-h-screen flex flex-col font-sans`}>
        <GoogleAnalyticsNoScript />
        <GoogleAnalytics />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
