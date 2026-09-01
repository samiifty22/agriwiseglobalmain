import type { Metadata, Viewport } from "next";
import { Jost } from "next/font/google";
import "./globals.css";
import { company, seo } from "@/lib/content";
import { StructuredData } from "@/components/structured-data";

/**
 * Brand font is Futura. Futura has no free/Google web version, so we
 * self-host Jost (a faithful geometric-sans alternative) as the fallback
 * and put "Futura" first in the CSS stack — see app/globals.css.
 * To use real Futura, drop Futura .woff2 files in app/fonts/ and switch
 * this to next/font/local.
 */
const geom = Jost({
  variable: "--font-geom",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const siteUrl = company.url;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: seo.titleDefault,
    template: "%s · agriwise global",
  },
  description: seo.description,
  applicationName: "agriwise global",
  authors: [{ name: "agriwise global", url: siteUrl }],
  creator: "agriwise global",
  publisher: "agriwise global ltd.",
  category: "agriculture",
  keywords: [...seo.keywords],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "agriwise global",
    title: seo.titleDefault,
    description: seo.description,
  },
  twitter: {
    card: "summary_large_image",
    title: seo.titleDefault,
    description: seo.description,
  },
  icons: {
    icon: [
      { url: "/brand/agriwise_logo.png", type: "image/png" },
    ],
    apple: "/brand/agriwise_logo.png",
  },
  // fill these after registering the site — see CONTENT.md
  verification: {
    // google: "your-google-search-console-token",
  },
};

export const viewport: Viewport = {
  themeColor: "#1f5c37",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={geom.variable}>
      <body className="min-h-dvh bg-canvas text-ink antialiased">
        <StructuredData />
        {children}
      </body>
    </html>
  );
}
