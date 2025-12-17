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
import { PremiumFeaturesWrapper } from "@/components/premium-features-wrapper"


const garamond = EB_Garamond({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-garamond",
  preload: true,
  fallback: ['serif'],
})

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  preload: true,
  fallback: ['system-ui', 'arial'],
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
  preload: true,
  fallback: ['system-ui', 'arial'],
})

export const metadata: Metadata = {
  title: "Beyond Smiles - Premium Dental Care",
  description: "New Giza Clinic - Expert dental care with advanced technology and personalized treatment plans. From routine checkups to complex procedures.",
  generator: "v0.app",
  keywords: ["dental clinic", "premium dental care", "New Giza", "dental treatment", "cosmetic dentistry", "orthodontics"],
  authors: [{ name: "Beyond Smiles" }],
  creator: "Beyond Smiles",
  publisher: "Beyond Smiles",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.beyondsmiles.net",
    siteName: "Beyond Smiles",
    title: "Beyond Smiles - Premium Dental Care",
    description: "New Giza Clinic - Expert dental care with advanced technology and personalized treatment plans. From routine checkups to complex procedures.",
    images: [
      {
        url: "https://www.beyondsmiles.net/beyond-smiles-logo.svg",
        width: 1200,
        height: 630,
        alt: "Beyond Smiles - Premium Dental Care Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Beyond Smiles - Premium Dental Care",
    description: "New Giza Clinic - Expert dental care with advanced technology and personalized treatment plans.",
    images: ["https://www.beyondsmiles.net/beyond-smiles-logo.svg"],
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
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
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
      <head>
        {/* Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'GA_MEASUREMENT_ID', {
                page_title: document.title,
                page_location: window.location.href,
              });
            `,
          }}
        />
        {/* Preload critical resources */}
        <link rel="preload" href="/fonts/NeutralSans-Regular.otf" as="font" type="font/otf" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="//obxgbxpiygppoztqzksw.supabase.co" />
        <link rel="preconnect" href="https://obxgbxpiygppoztqzksw.supabase.co" crossOrigin="anonymous" />
        
        {/* Preload hero carousel images to prevent caching issues */}
        <link rel="preload" href="https://obxgbxpiygppoztqzksw.supabase.co/storage/v1/object/public/Pictures/beyondsmiles/Slideshow%20Hero%20Section/1.jpeg" as="image" />
        <link rel="preload" href="https://obxgbxpiygppoztqzksw.supabase.co/storage/v1/object/public/Pictures/beyondsmiles/Slideshow%20Hero%20Section/2%20(1).jpg" as="image" />
        <link rel="preload" href="https://obxgbxpiygppoztqzksw.supabase.co/storage/v1/object/public/Pictures/beyondsmiles/Slideshow%20Hero%20Section/3%20(1).jpg" as="image" />
        <link rel="preload" href="https://obxgbxpiygppoztqzksw.supabase.co/storage/v1/object/public/Pictures/beyondsmiles/Slideshow%20Hero%20Section/4%20(1).jpg" as="image" />
        <link rel="preload" href="https://obxgbxpiygppoztqzksw.supabase.co/storage/v1/object/public/Pictures/beyondsmiles/Slideshow%20Hero%20Section/5%20(1).jpg" as="image" />
        <link rel="preload" href="https://obxgbxpiygppoztqzksw.supabase.co/storage/v1/object/public/Pictures/beyondsmiles/Slideshow%20Hero%20Section/6%20(1).jpg" as="image" />
        <link rel="preload" href="https://obxgbxpiygppoztqzksw.supabase.co/storage/v1/object/public/Pictures/beyondsmiles/Slideshow%20Hero%20Section/7%20(1).jpg" as="image" />
      </head>
      <body className="font-sans">
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "DentalClinic",
              "name": "Beyond Smiles - Premium Dental Care",
              "alternateName": "Beyond Smiles New Giza Clinic",
              "description": "New Giza Clinic - Expert dental care with advanced technology and personalized treatment plans. From routine checkups to complex procedures.",
              "url": "https://www.beyondsmiles.net",
              "logo": "https://www.beyondsmiles.net/beyond-smiles-logo.svg",
              "image": "https://obxgbxpiygppoztqzksw.supabase.co/storage/v1/object/public/Pictures/beyondsmiles/Dentalimages/HIMA6418.jpg",
              "telephone": ["+201289107773", "+201109721677"],
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Building 1, Floor 2, Clinic 24",
                "addressLocality": "New Giza",
                "addressRegion": "New Giza",
                "addressCountry": "Egypt",
                "postalCode": "21500"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "29.989877676120393",
                "longitude": "31.066055996654775"
              },
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday"],
                  "opens": "11:00",
                  "closes": "19:00"
                },
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": "Friday",
                  "opens": "00:00",
                  "closes": "00:00"
                },
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Saturday", "Sunday"],
                  "opens": "11:00",
                  "closes": "19:00"
                }
              ],
              "medicalSpecialty": [
                "Cosmetic Dentistry",
                "Dental Implants",
                "Orthodontics",
                "Oral Surgery",
                "Endodontics",
                "Periodontics",
                "Pediatric Dentistry",
                "General Dentistry"
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Dental Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "MedicalProcedure",
                      "name": "Cosmetic Dentistry"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "MedicalProcedure",
                      "name": "Dental Implants"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "MedicalProcedure",
                      "name": "Orthodontics"
                    }
                  }
                ]
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "5.0",
                "reviewCount": "9"
              },
              "review": [
                {
                  "@type": "Review",
                  "author": {
                    "@type": "Person",
                    "name": "Jilan Kadry"
                  },
                  "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5"
                  },
                  "reviewBody": "From one generation to another our whole family has always been blessed to have such an outstanding dental care in New Giza. Thank you Dr Mohamed and all his team for always being the best."
                }
              ]
            })
          }}
        />
        <Navigation />
        <PageTransition>
          {children}
        </PageTransition>
        <Footer />
        <StickyActions />
        <PremiumFeaturesWrapper />
      </body>
    </html>
  )
}
