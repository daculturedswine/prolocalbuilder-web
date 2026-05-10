import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { site, team } from "@/lib/site";
import {
  seo,
  organizationSchema,
  websiteSchema,
  localBusinessSchema,
  serviceSchema,
  faqSchema,
} from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { HashScrollHandler } from "@/components/HashScrollHandler";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

const title = `${site.name} · ${site.tagline}`;

export const metadata: Metadata = {
  metadataBase: new URL(seo.siteUrl),
  title: {
    default: title,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  keywords: [
    "local business website",
    "affordable website design",
    "small business website",
    "Appleton WI web designer",
    "San Jose web designer",
    "Bay Area web design",
    "HVAC website",
    "dentist website",
    "lawyer website",
    "contractor website",
    "$750 website",
    "flat fee web design",
    "no monthly website",
    "Wix alternative",
    "Squarespace alternative",
    "WordPress alternative",
  ],
  authors: team.map((m) => ({ name: m.firstName, url: seo.siteUrl })),
  creator: team.map((m) => m.firstName).join(", "),
  publisher: site.name,
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: seo.siteUrl,
    siteName: site.name,
    title,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: site.description,
    creator: "@prolocalbuilder",
  },
  verification: {
    google: seo.googleVerification,
    other: { "msvalidate.01": [seo.bingVerification] },
  },
  category: "business",
  applicationName: site.name,
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  appleWebApp: {
    title: site.name,
    capable: true,
    statusBarStyle: "default",
  },
  other: {
    "geo.region": "US-WI;US-CA;US-NV",
    "geo.placename": "Appleton, San Jose, Las Vegas",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-orange-500 focus:px-4 focus:py-2 focus:text-white focus:shadow-lg"
        >
          Skip to main content
        </a>
        <HashScrollHandler />
        {children}
        <JsonLd
          data={[
            organizationSchema(),
            websiteSchema(),
            localBusinessSchema(),
            serviceSchema(),
            faqSchema(),
          ]}
        />
      </body>
    </html>
  );
}
