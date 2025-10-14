import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { locales } from '@/i18n';
import "../globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export function generateStaticParams() {
  return locales.map((locale) => ({ lang: locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;

  const titles = {
    en: "AIOT - Industrial IoT Solutions | Medical, Pharma, Agriculture & Transport",
    fr: "AIOT - Solutions IoT Industrielles | Médical, Pharma, Agriculture & Transport"
  };

  const descriptions = {
    en: "Tunisia-based IoT solutions provider delivering industrial sensors, real-time monitoring, and data analytics for medical, pharmaceutical, agriculture, and transport industries. Based in Sousse with global reach.",
    fr: "Fournisseur de solutions IoT basé en Tunisie offrant des capteurs industriels, surveillance en temps réel et analyses de données pour les industries médicales, pharmaceutiques, agricoles et du transport. Basé à Sousse avec une portée mondiale."
  };

  return {
    metadataBase: new URL('https://aiot-solutions.tn'),
    title: titles[lang as keyof typeof titles] || titles.en,
    description: descriptions[lang as keyof typeof descriptions] || descriptions.en,
    keywords: ["IoT solutions Tunisia", "industrial IoT monitoring", "pharmaceutical temperature monitoring", "medical equipment tracking", "smart agriculture sensors", "fleet management IoT", "cold chain monitoring", "real-time industrial monitoring", "IoT Sousse Tunisia", "solutions IoT Tunisie"],
    authors: [{ name: "AIOT" }],
    creator: "AIOT",
    publisher: "AIOT",

    openGraph: {
      title: titles[lang as keyof typeof titles] || titles.en,
      description: descriptions[lang as keyof typeof descriptions] || descriptions.en,
      url: `https://aiot-solutions.tn/${lang}`,
      siteName: "AIOT",
      locale: lang === 'fr' ? "fr_FR" : "en_US",
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
      title: titles[lang as keyof typeof titles] || titles.en,
      description: descriptions[lang as keyof typeof descriptions] || descriptions.en,
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
    alternates: {
      languages: {
        'en': '/en',
        'fr': '/fr',
      },
    },
  };
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}>) {
  const { lang } = await params;

  // Validate locale
  if (!locales.includes(lang as typeof locales[number])) {
    notFound();
  }

  // Get messages for the locale
  const messages = await getMessages();

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
      "areaServed": ["TN", "DZ", "MA", "LY", "FR", "EU"],
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
    <html lang={lang}>
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
        className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} antialiased font-sans`}
        style={{ fontFamily: 'var(--font-inter), sans-serif' }}
      >
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
