import type React from "react"
import type { Metadata } from "next"
import { EB_Garamond } from "next/font/google"
import { Inter } from "next/font/google"
import localFont from "next/font/local"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { PageTransition } from "@/components/page-transition"
import { StickyActions } from "@/components/sticky-actions"


const garamond = EB_Garamond({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-garamond",
})

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

// Neutral Sans font - custom local font
const neutralSans = localFont({
  src: [
    {
      path: "../public/fonts/NeutralSans-Regular.otf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-neutral-sans",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Beyond Smiles - Beyond Dentistry. Beyond Expectations.",
  description:
    "Expert dental care with advanced technology and personalized treatment plans. From routine checkups to complex procedures.",
  generator: "v0.app",
  icons: {
    icon: [
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" }
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }
    ],
    other: [
      { url: "/web-app-manifest-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/web-app-manifest-512x512.png", sizes: "512x512", type: "image/png" }
    ]
  },
  manifest: "/site.webmanifest",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Beyond Smiles"
  }
}

export const viewport = {
  themeColor: "#2d5a4a",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html 
      lang="en" 
      className={`${garamond.variable} ${inter.variable} ${neutralSans.variable} antialiased`}
    >
      <body className="font-sans">
        <Navigation />
        <PageTransition>
          {children}
        </PageTransition>
        <Footer />
        <StickyActions />
      </body>
    </html>
  )
}
