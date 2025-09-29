import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Users, Award, Heart, Lightbulb } from "lucide-react"
import Link from "next/link"
import { FadeInWhenVisible } from "@/components/fade-in-when-visible"
import { StaggerContainer, StaggerItem } from "@/components/stagger-animation"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Beyond Smiles - Expert Dental Team in New Giza | 15+ Years Experience",
  description: "Learn about Beyond Smiles dental clinic in New Giza. Our expert team provides comprehensive dental care with advanced technology and patient-centered approach. 15+ years of excellence.",
  keywords: "about Beyond Smiles, dental team New Giza, dental clinic Egypt, expert dentists, dental specialists, patient care",
  openGraph: {
    title: "About Beyond Smiles - Expert Dental Team in New Giza",
    description: "Learn about our expert dental team and comprehensive care approach. 15+ years of excellence in dental care.",
    url: "https://www.beyondsmiles.net/about",
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
    title: "About Beyond Smiles - Expert Dental Team in New Giza",
    description: "Learn about our expert dental team and comprehensive care approach. 15+ years of excellence in dental care.",
  },
  alternates: {
    canonical: "https://www.beyondsmiles.net/about",
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative px-6 py-24 md:py-32 bg-gradient-to-br from-light-grey via-white to-mint-green/20 overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-20 right-10 w-64 h-32 bg-gradient-to-r from-mint-green/30 to-sage-green/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-48 h-24 bg-gradient-to-r from-sage-green/20 to-mint-green/20 rounded-full blur-2xl"></div>

        <div className="max-w-7xl mx-auto text-center">
          <FadeInWhenVisible direction="up">
            <h1 className="font-serif text-5xl md:text-6xl text-sage-green mb-6">
              About <span className="italic text-sage-green/80">Beyond Smiles</span>
            </h1>
          </FadeInWhenVisible>
        
          <FadeInWhenVisible direction="up" delay={0.2}>
            <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
              More than just a dental clinic - we are a full-service dental center dedicated to providing advanced oral
              care with specialists across all fields of dentistry.
            </p>
          </FadeInWhenVisible>
        </div>
      </section>

      {/* Mission Section */}
      <section className="px-6 py-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeInWhenVisible direction="left" className="relative">
              <div className="relative aspect-[4/3] md:aspect-auto md:h-auto">
                <img
                  src="https://obxgbxpiygppoztqzksw.supabase.co/storage/v1/object/public/Pictures/beyondsmiles/Dentalimages/aboutus.jpeg"
                  alt="Modern dental clinic interior"
                  className="absolute inset-0 w-full h-full object-contain md:object-cover rounded-2xl shadow-lg"
                />
              </div>
            </FadeInWhenVisible>
            <FadeInWhenVisible direction="right" delay={0.2} className="space-y-6">
              <h2 className="font-serif text-4xl text-sage-green mb-6">
                Our <span className="italic text-sage-green/80">Mission</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                To provide high-quality, patient-centered dental care with a focus on understanding, innovation,
                technology, and comprehensive treatment planning. Every patient receives the best care possible under
                one roof.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-sage-green mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Expert Specialists</h3>
                    <p className="text-gray-600">Across all fields of dentistry</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-sage-green mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Advanced Technology</h3>
                    <p className="text-gray-600">State-of-the-art equipment and techniques</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-sage-green mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Comprehensive Care</h3>
                    <p className="text-gray-600">All treatments available under one roof</p>
                  </div>
                </div>
              </div>
            </FadeInWhenVisible>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 bg-gradient-to-br from-mint-green/10 to-sage-green/5">
        <div className="max-w-7xl mx-auto">
          <FadeInWhenVisible className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl text-sage-green mb-6">
              Our <span className="italic text-sage-green/80">Values</span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
              The principles that guide everything we do
            </p>
          </FadeInWhenVisible>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Heart className="w-8 h-8 text-sage-green" />,
                title: "Patient-Centered Care",
                description: "Every treatment is tailored to your unique needs and comfort.",
              },
              {
                icon: <Award className="w-8 h-8 text-sage-green" />,
                title: "Excellence in Dentistry",
                description: "Our specialists stay ahead with the latest advancements.",
              },
              {
                icon: <Users className="w-8 h-8 text-sage-green" />,
                title: "Transparency",
                description: "Clear communication about treatments and pricing.",
              },
              {
                icon: <Lightbulb className="w-8 h-8 text-sage-green" />,
                title: "Innovation",
                description: "Advanced technology for precise and efficient care.",
              },
            ].map((value, index) => (
              <StaggerItem key={index}>
                <Card
                  className="text-center border-sage-green/20 hover:border-sage-green/40 transition-all duration-300 hover:shadow-lg group"
                >
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-sage-green/10 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:bg-sage-green/20 transition-colors">
                      {value.icon}
                    </div>
                    <h3 className="font-serif text-xl text-sage-green mb-3">{value.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20 bg-gradient-to-br from-sage-green/5 to-mint-green/10">
        <div className="max-w-7xl mx-auto text-center">
          <FadeInWhenVisible>
            <h2 className="font-serif text-4xl md:text-5xl text-sage-green mb-6">
              Ready to Get{" "}
              <span className="italic text-sage-green/80">Started?</span>
            </h2>
            <p className="text-xl text-dark-grey leading-relaxed max-w-4xl mx-auto mb-12 font-neutral-medium">
              Schedule your consultation today and let us create a personalized treatment plan for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-sage-green font-neutral-medium cursor-pointer hover:bg-sage-green/90 text-white px-8"
                >
                  Book Appointment
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-sage-green cursor-pointer font-neutral-medium text-sage-green hover:bg-sage-green hover:text-white px-8 bg-transparent"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </FadeInWhenVisible>
        </div>
      </section>
    </div>
  )
}
