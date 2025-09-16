import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
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
  title: {
    default: "AquaSense - Smart Water Quality Monitoring Solutions",
    template: "%s | AquaSense - Sensifai"
  },
  description: "AquaSense provides intelligent water quality monitoring solutions using AI and IoT technology. Real-time water analysis, environmental monitoring, and sustainable water management for industries and communities.",
  keywords: [
    "water quality monitoring",
    "AI water analysis",
    "IoT sensors",
    "environmental monitoring",
    "water management",
    "smart sensors",
    "water pollution detection",
    "real-time monitoring",
    "industrial water treatment",
    "environmental sustainability"
  ],
  authors: [{ name: "Sensifai BV" }],
  creator: "Sensifai BV",
  publisher: "Sensifai BV",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://aquasense.sensifai.com"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
      "nl-NL": "/nl-NL",
    },
  },
  openGraph: {
    title: "AquaSense - Smart Water Quality Monitoring Solutions",
    description: "Intelligent water quality monitoring solutions using AI and IoT technology for real-time water analysis and environmental monitoring.",
    url: "https://aquasense.sensifai.com",
    siteName: "AquaSense",
    images: [
      {
        url: "/android-chrome-512x512.png",
        width: 512,
        height: 512,
        alt: "AquaSense Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AquaSense - Smart Water Quality Monitoring Solutions",
    description: "Intelligent water quality monitoring solutions using AI and IoT technology for real-time water analysis and environmental monitoring.",
    images: ["/android-chrome-512x512.png"],
    creator: "@sensifai",
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
  verification: {
    google: "your-google-site-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  category: "Technology",
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
