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
