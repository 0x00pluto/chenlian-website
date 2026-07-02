import type { Metadata } from "next";
import { DM_Sans, Instrument_Serif } from "next/font/google";

import { JsonLd } from "@/components/seo/json-ld";
import { pageDescription, pageTitle } from "@/lib/geo/facts";
import { SITE_NAME, SITE_URL } from "@/lib/geo/site";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "zh_CN",
    url: "/",
    siteName: SITE_NAME,
    title: pageTitle,
    description: pageDescription,
    images: [
      {
        url: "/images/chenlian-hero.jpg",
        width: 1200,
        height: 630,
        alt: "宸联教育 OPC 孵化营实训场景",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/images/chenlian-hero.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="zh-CN"
      className={`${dmSans.variable} ${instrumentSerif.variable} antialiased`}
      suppressHydrationWarning
    >
      <head>
        <JsonLd />
      </head>
      <body
        className="bg-ink text-white selection:bg-warm/30"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
