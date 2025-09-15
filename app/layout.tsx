import type React from "react"
import type { Metadata } from "next"
import { EB_Garamond } from "next/font/google"
import { Inter } from "next/font/google"
import localFont from "next/font/local"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { PageTransition } from "@/components/page-transition"


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

// Neutral Sans font - using Inter as fallback until font files are added
const neutralSans = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-neutral-sans",
  weight: ["400", "500", "700", "900"],
})

export const metadata: Metadata = {
  title: "Beyond Smiles - Beyond Dentistry. Beyond Expectations.",
  description:
    "Expert dental care with advanced technology and personalized treatment plans. From routine checkups to complex procedures.",
  generator: "v0.app",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" }
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }
    ],
    other: [
      { url: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
      { url: "/safari-pinned-tab.svg", type: "image/svg+xml" }
    ]
  },
  manifest: "/site.webmanifest",
  themeColor: "#2d5a4a",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Beyond Smiles"
  }
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
      </body>
    </html>
  )
}
