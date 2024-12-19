import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL!),
  title: {
    default: "Topps Games - Play & Earn Diamonds",
    template: "%s | Topps Games",
  },
  description: "Choose your game and play with Topps Diamonds. Join our gaming community, earn rewards, and compete with players worldwide.",
  keywords: ["games", "topps", "diamonds", "gaming", "rewards", "online games"],
  authors: [{ name: "Topps Games" }],
  creator: "Topps Games",
  publisher: "Topps Games",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: process.env.NEXT_PUBLIC_BASE_URL!,
    title: "Topps Games - Play & Earn Diamonds",
    description: "Choose your game and play with Topps Diamonds. Join our gaming community, earn rewards, and compete with players worldwide.",
    siteName: "Topps Games",
  },
  twitter: {
    card: "summary_large_image",
    title: "Topps Games - Play & Earn Diamonds",
    description: "Choose your game and play with Topps Diamonds",
    creator: "@topps",
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
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
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
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="antialiased min-h-screen">
        <Providers>
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-white focus:text-black"
          >
            Skip to main content
          </a>
          <main id="main-content">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
