import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "optional",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "optional",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://aiot-solutions.tn'),
  title: "AIOT - Industrial IoT Solutions | Medical, Pharma, Agriculture & Transport",
  description: "Tunisia-based IoT solutions provider delivering industrial sensors, real-time monitoring, and data analytics for medical, pharmaceutical, agriculture, and transport industries. Based in Sousse with global reach.",
  keywords: ["IoT solutions Tunisia", "industrial IoT monitoring", "pharmaceutical temperature monitoring", "medical equipment tracking", "smart agriculture sensors", "fleet management IoT", "cold chain monitoring", "real-time industrial monitoring", "IoT Sousse Tunisia"],
  authors: [{ name: "AIOT" }],
  creator: "AIOT",
  publisher: "AIOT",

  openGraph: {
    title: "AIOT - Intelligent IoT Solutions for Multiple Industries",
    description: "Real-time sensor monitoring and data analytics for medical, pharmaceutical, agriculture, and transport industries. Tunisia-based expertise with global standards.",
    url: "https://aiot-solutions.tn",
    siteName: "AIOT",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/logo/AIOT-logo-2025.png",
        width: 1200,
        height: 630,
        alt: "AIOT Industrial IoT Solutions",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "AIOT - Industrial IoT Monitoring Solutions",
    description: "Real-time sensor monitoring for medical, pharmaceutical, agriculture, and transport industries.",
    images: ["/images/logo/AIOT-logo-2025.png"],
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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "AIOT",
    "description": "Industrial IoT solutions provider delivering real-time monitoring, data analytics, and connectivity for medical, pharmaceutical, agriculture, and transport industries",
    "url": "https://aiot-solutions.tn",
    "logo": "https://aiot-solutions.tn/images/logo/AIOT-logo-2025.png",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Sousse",
      "addressCountry": "TN"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+216-92-214-755",
      "contactType": "sales",
      "areaServed": ["TN", "DZ", "MA", "LY"],
      "availableLanguage": ["Arabic", "French", "English"]
    },
    "sameAs": []
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "TechnologyCompany",
    "name": "AIOT",
    "description": "GMP/GDP-compliant IoT monitoring solutions for regulated industries",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Sousse",
      "addressRegion": "Sousse",
      "addressCountry": "Tunisia"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "35.8256",
      "longitude": "10.6369"
    },
    "telephone": "+216-92-214-755",
    "priceRange": "$$",
    "openingHours": "Mo-Fr 09:00-18:00"
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} antialiased font-sans`}
        style={{ fontFamily: 'var(--font-inter), sans-serif' }}
      >
        {children}
      </body>
    </html>
  );
}
