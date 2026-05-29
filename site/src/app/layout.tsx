import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
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
  metadataBase: new URL("https://www.ecosoceanobusiness.com"),
  title: {
    default:
      "ECOS DO OCEANO BUSINESS | Consultoria, Formação e Desenvolvimento Institucional",
    template: "%s | ECOS DO OCEANO BUSINESS",
  },
  description:
    "Empresa angolana especializada em consultoria institucional, gestão da formação, apoio técnico e desenvolvimento organizacional.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon.png", type: "image/png" }],
  },
  keywords: [
    "consultoria institucional Angola",
    "gestão da formação",
    "formação marítima",
    "formação offshore",
    "desenvolvimento institucional",
  ],
  openGraph: {
    title: "ECOS DO OCEANO BUSINESS",
    description:
      "Consultoria, formação e desenvolvimento institucional para organizações públicas e privadas em Angola.",
    url: "https://www.ecosoceanobusiness.com",
    siteName: "ECOS DO OCEANO BUSINESS",
    locale: "pt_AO",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-AO"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
