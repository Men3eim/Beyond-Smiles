import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { FadeInWhenVisible } from "@/components/fade-in-when-visible"
import { StaggerContainer, StaggerItem } from "@/components/stagger-animation"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Beyond Smiles Dental Clinic | New Giza Health Park | Alexandria",
  description: "Contact Beyond Smiles dental clinic in New Giza Health Park, Alexandria. Call +201289107773 or +201109721677. Open Mon-Thu & Sat-Sun 11AM-7PM. Book your appointment today.",
  keywords: "contact Beyond Smiles, dental clinic Alexandria, New Giza Health Park, dental appointment, phone number, address, working hours",
  openGraph: {
    title: "Contact Beyond Smiles Dental Clinic | Alexandria",
    description: "Contact us at New Giza Health Park, Alexandria. Call +201289107773 or +201109721677. Book your appointment today.",
    url: "https://www.beyondsmiles.net/contact",
    images: [
      {
        url: "https://obxgbxpiygppoztqzksw.supabase.co/storage/v1/object/public/Pictures/beyondsmiles/Dentalimages/HIMA6418.jpg",
        width: 1200,
        height: 630,
        alt: "Beyond Smiles Dental Clinic Location",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Beyond Smiles Dental Clinic | Alexandria",
    description: "Contact us at New Giza Health Park, Alexandria. Call +201289107773 or +201109721677.",
  },
  alternates: {
    canonical: "https://www.beyondsmiles.net/contact",
  },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section */}
      <section className="relative px-6 py-24 md:py-32 bg-gradient-to-br from-light-grey via-white to-mint-green/20">
        <div className="max-w-7xl mx-auto text-center">
          <FadeInWhenVisible direction="up">
            <h1 className="font-serif text-5xl md:text-6xl text-sage-green mb-6">
              Contact <span className="italic text-sage-green/80">Us</span>
            </h1>
          </FadeInWhenVisible>
          <FadeInWhenVisible direction="up" delay={0.2}>
            <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
              Have a question or want to book an appointment? Reach out to us! We're here to help you achieve your perfect
              smile.
            </p>
          </FadeInWhenVisible>
        </div>
      </section>

      {/* Contact Information */}
      <section className="px-6 py-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl mx-auto">
            {/* Contact Details */}
            <FadeInWhenVisible direction="up">
              <h2 className="font-serif text-4xl text-sage-green mb-8">
                Get in <span className="italic text-sage-green/80">Touch</span>
              </h2>

              <div className="space-y-8">
                <Card className="p-6 border-sage-green/20">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-sage-green/10 rounded-xl flex items-center justify-center">
                      <span className="text-sage-green text-xl">📍</span>
                    </div>
                    <div>
                      <h3 className="font-serif text-lg text-sage-green mb-2">Location</h3>
                      <p className="text-gray-600">
                        New Giza, Health Park, Meditown
                        <br />
                        Building 1, Floor 2, Clinic 24
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 border-sage-green/20">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-sage-green/10 rounded-xl flex items-center justify-center">
                      <span className="text-sage-green text-xl">📞</span>
                    </div>
                    <div>
                      <h3 className="font-serif text-lg text-sage-green mb-2">Phone Numbers</h3>
                      <p className="text-gray-600">
                        +201289107773
                        <br />
                        +201109721677
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 border-sage-green/20">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-sage-green/10 rounded-xl flex items-center justify-center">
                      <span className="text-sage-green text-xl">🕒</span>
                    </div>
                    <div>
                      <h3 className="font-serif text-lg text-sage-green mb-2">Working Hours</h3>
                      <p className="text-gray-600">
                        Monday - Thursday: 11:00 AM - 7:00 PM
                        <br />
                        Friday: Closed
                        <br />
                        Saturday - Sunday: 11:00 AM - 7:00 PM
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </FadeInWhenVisible>

          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="px-6 py-20 bg-gradient-to-br from-mint-green/10 to-sage-green/5">
        <div className="max-w-7xl mx-auto text-center">
          <FadeInWhenVisible>
            <h2 className="font-serif text-4xl text-sage-green mb-6">
              Find <span className="italic text-sage-green/80">Us</span>
            </h2>
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.5!2d31.066055996654775!3d29.989877676120393!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjnCsDU5JzIzLjYiTiAzMcKwMDMnNTcuOCJF!5e0!3m2!1sen!2seg!4v1234567890"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Beyond Smiles Dental Clinic Location"
                className="w-full h-96"
              ></iframe>
            </div>
            <p className="text-sm text-dark-grey mt-4 font-neutral-regular">
              Click and drag to explore our location
            </p>
          </FadeInWhenVisible>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20 bg-gradient-to-br from-sage-green/5 to-mint-green/10">
        <div className="max-w-7xl mx-auto text-center">
          <FadeInWhenVisible>
            <h2 className="font-serif text-4xl md:text-5xl text-sage-green mb-6">
              Meet Our{" "}
              <span className="italic text-sage-green/80">Expert Team</span>
            </h2>
            <p className="text-xl text-dark-grey leading-relaxed max-w-4xl mx-auto mb-12 font-neutral-medium">
              Get to know the specialists who will be taking care of your dental health and smile transformation.
            </p>
            <Link href="/team">
              <Button
                size="lg"
                className="bg-sage-green font-neutral-medium cursor-pointer hover:bg-sage-green/90 text-white px-8"
              >
                Meet Our Team
              </Button>
            </Link>
          </FadeInWhenVisible>
        </div>
      </section>
    </div>
  )
}
