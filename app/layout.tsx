import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
