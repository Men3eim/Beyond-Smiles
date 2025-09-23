import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BeforeAfterSlider } from "@/components/before-after-slider";
import { FadeInWhenVisible } from "@/components/fade-in-when-visible";
import { StaggerContainer, StaggerItem } from "@/components/stagger-animation";
import Link from "next/link";
import Image from "next/image";
import {
  Shield,
  Smile,
  Sparkles,
  Wrench,
  Heart,
  Users,
  Star,
  Quote,
  CheckCircle,
  Scissors,
  Baby,
  Zap,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Beyond Smiles - Premier Dental Clinic in Alexandria | Cosmetic & General Dentistry",
  description: "Expert dental care in Alexandria with 15+ years experience. Cosmetic dentistry, implants, orthodontics, and general dental services. Book your appointment today at New Giza Health Park.",
  keywords: "dental clinic Alexandria, cosmetic dentistry, dental implants, orthodontics, teeth whitening, dental care Egypt, Beyond Smiles",
  authors: [{ name: "Beyond Smiles Dental Clinic" }],
  openGraph: {
    title: "Beyond Smiles - Premier Dental Clinic in Alexandria",
    description: "Expert dental care with 15+ years experience. Cosmetic dentistry, implants, orthodontics, and general dental services.",
    url: "https://beyondsmiles.com",
    siteName: "Beyond Smiles",
    images: [
      {
        url: "https://obxgbxpiygppoztqzksw.supabase.co/storage/v1/object/public/Pictures/beyondsmiles/Dentalimages/HIMA6418.jpg",
        width: 1200,
        height: 630,
        alt: "Beyond Smiles Dental Clinic Interior",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Beyond Smiles - Premier Dental Clinic in Alexandria",
    description: "Expert dental care with 15+ years experience. Cosmetic dentistry, implants, orthodontics, and general dental services.",
    images: ["https://obxgbxpiygppoztqzksw.supabase.co/storage/v1/object/public/Pictures/beyondsmiles/Dentalimages/HIMA6418.jpg"],
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
  alternates: {
    canonical: "https://beyondsmiles.com",
  },
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative px-6 py-24 md:py-32 bg-gradient-to-br from-light-grey via-white to-mint-green/20 overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-20 right-10 w-64 h-32 bg-gradient-to-r from-mint-green/30 to-sage-green/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-48 h-24 bg-gradient-to-r from-sage-green/20 to-mint-green/20 rounded-full blur-2xl"></div>

        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left content */}
            <FadeInWhenVisible direction="up" className="text-center lg:text-left">
              {/* Trust indicators - moved to top */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-6 mb-8 text-sm">
                <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
                  <div className="w-2 h-2 bg-sage-green rounded-full animate-pulse"></div>
                  <span className="font-neutral-medium text-sage-green">15+ Years Experience</span>
                </div>
                <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
                  <div className="w-2 h-2 bg-sage-green rounded-full animate-pulse"></div>
                  <span className="font-neutral-medium text-sage-green">5000+ Happy Patients</span>
                </div>
                <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
                  <div className="w-2 h-2 bg-sage-green rounded-full animate-pulse"></div>
                  <span className="font-neutral-medium text-sage-green">Award-Winning Team</span>
                </div>
              </div>

              <div className="mb-6">
                <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl mb-6 leading-tight">
                  <span className="text-gradient-beyond">Beyond Dentistry.</span>{" "}
                  <span className="italic text-sage-green/90">
                    Confidence, Precision, Experience.
                  </span>
                </h1>
              </div>

              <p className="text-xl text-dark-grey mb-8 leading-relaxed max-w-2xl font-neutral-medium">
                <strong>Finally, a dental experience that doesn't hurt your wallet or your comfort.</strong> Our advanced technology and gentle approach mean you'll actually look forward to your appointments. No more anxiety, no more pain – just beautiful, healthy smiles.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="bg-sage-green font-neutral-medium cursor-pointer hover:bg-sage-green/90 text-white px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  >
                    Book Your Smile Transformation
                  </Button>
                </Link>

                <Link href="/cases">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-sage-green cursor-pointer font-neutral-medium text-sage-green hover:bg-sage-green hover:text-white px-8 py-4 text-lg bg-transparent hover:shadow-lg transition-all duration-300"
                  >
                    See Our Results
                  </Button>
                </Link>
              </div>

              {/* Enhanced trust indicators */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-dark-grey font-neutral-medium">
                <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm px-4 py-3 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-sage-green" />
                  <span>Pain-free treatments</span>
                </div>
                <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm px-4 py-3 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-sage-green" />
                  <span>Same-day results</span>
                </div>
                <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm px-4 py-3 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-sage-green" />
                  <span>Lifetime guarantee</span>
                </div>
              </div>
            </FadeInWhenVisible>

            {/* Right content - Hero image carousel */}
            <FadeInWhenVisible direction="right" delay={0.2} className="relative">
              <div className="relative z-10 group">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                  <div className="relative w-full h-[500px] md:h-[600px]">
                    {/* Image 1 */}
                    <Image
                      src="https://obxgbxpiygppoztqzksw.supabase.co/storage/v1/object/public/Pictures/beyondsmiles/Slideshow%20Hero%20Section/1.jpeg"
                      alt="Professional dental care at Beyond Smiles"
                      fill
                      className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out opacity-100"
                      style={{ animation: 'fadeInOut 14s infinite 0s' }}
                      priority
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    {/* Image 2 */}
                    <Image
                      src="https://obxgbxpiygppoztqzksw.supabase.co/storage/v1/object/public/Pictures/beyondsmiles/Slideshow%20Hero%20Section/2.jpg"
                      alt="Advanced dental technology at Beyond Smiles"
                      fill
                      className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out opacity-0"
                      style={{ animation: 'fadeInOut 14s infinite 2s' }}
                      priority
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    {/* Image 3 */}
                    <Image
                      src="https://obxgbxpiygppoztqzksw.supabase.co/storage/v1/object/public/Pictures/beyondsmiles/Slideshow%20Hero%20Section/3.jpg"
                      alt="Modern dental clinic interior at Beyond Smiles"
                      fill
                      className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out opacity-0"
                      style={{ animation: 'fadeInOut 14s infinite 4s' }}
                      priority
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    {/* Image 4 */}
                    <Image
                      src="https://obxgbxpiygppoztqzksw.supabase.co/storage/v1/object/public/Pictures/beyondsmiles/Slideshow%20Hero%20Section/4.jpg"
                      alt="Expert dental team at Beyond Smiles"
                      fill
                      className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out opacity-0"
                      style={{ animation: 'fadeInOut 14s infinite 6s' }}
                      priority
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    {/* Image 5 */}
                    <Image
                      src="https://obxgbxpiygppoztqzksw.supabase.co/storage/v1/object/public/Pictures/beyondsmiles/Slideshow%20Hero%20Section/5.jpeg"
                      alt="State-of-the-art dental equipment at Beyond Smiles"
                      fill
                      className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out opacity-0"
                      style={{ animation: 'fadeInOut 14s infinite 8s' }}
                      priority
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    {/* Image 6 */}
                    <Image
                      src="https://obxgbxpiygppoztqzksw.supabase.co/storage/v1/object/public/Pictures/beyondsmiles/Slideshow%20Hero%20Section/6.jpg"
                      alt="Comprehensive dental services at Beyond Smiles"
                      fill
                      className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out opacity-0"
                      style={{ animation: 'fadeInOut 14s infinite 10s' }}
                      priority
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    {/* Image 7 */}
                    <Image
                      src="https://obxgbxpiygppoztqzksw.supabase.co/storage/v1/object/public/Pictures/beyondsmiles/Slideshow%20Hero%20Section/7.jpg"
                      alt="Patient-centered dental care at Beyond Smiles"
                      fill
                      className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out opacity-0"
                      style={{ animation: 'fadeInOut 14s infinite 12s' }}
                      priority
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  
                  {/* Before/After overlay preview */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                        <span className="text-sm font-medium">See more transformations below</span>
                      </div>
                      <div className="text-xs opacity-90">Before & After Results ↓</div>
                    </div>
                  </div>
                </div>
                
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-full h-full bg-gradient-to-br from-mint-green/20 to-sage-green/20 rounded-2xl -z-10"></div>
            </FadeInWhenVisible>
          </div>
        </div>
      </section>

      {/* What's Next Preview Section */}
      <section className="px-6 py-12 bg-gradient-to-r from-sage-green/5 to-mint-green/10">
        <div className="max-w-7xl mx-auto">
          <FadeInWhenVisible className="text-center">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-sm mb-6">
              <div className="w-2 h-2 bg-sage-green rounded-full animate-pulse"></div>
              <span className="text-sage-green font-neutral-medium">Scroll to discover more</span>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl text-sage-green mb-6">
              What You'll Discover Below
            </h2>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-sage-green/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <Star className="w-6 h-6 text-sage-green" />
                </div>
                <h3 className="font-serif text-lg text-sage-green mb-2">Real Patient Results</h3>
                <p className="text-sm text-dark-grey">See actual before & after transformations that will amaze you</p>
              </div>
              <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-sage-green/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <Sparkles className="w-6 h-6 text-sage-green" />
                </div>
                <h3 className="font-serif text-lg text-sage-green mb-2">9 Specialized Services</h3>
                <p className="text-sm text-dark-grey">From cosmetic dentistry to orthodontics - everything you need under one roof</p>
              </div>
              <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-sage-green/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <Users className="w-6 h-6 text-sage-green" />
                </div>
                <h3 className="font-serif text-lg text-sage-green mb-2">Expert Team</h3>
                <p className="text-sm text-dark-grey">Meet the specialists who will transform your smile</p>
              </div>
            </div>
            <div className="mt-8">
              <div className="inline-flex items-center gap-2 text-sage-green animate-bounce">
                <span className="text-sm font-neutral-medium">Keep scrolling to see more</span>
                <div className="w-1 h-1 bg-sage-green rounded-full animate-pulse"></div>
                <div className="w-1 h-1 bg-sage-green rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                <div className="w-1 h-1 bg-sage-green rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
              </div>
            </div>
          </FadeInWhenVisible>
        </div>
      </section>

      {/* Before & After Section - Moved up */}
      <section className="px-6 py-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <FadeInWhenVisible className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-sage-green/10 px-4 py-2 rounded-full mb-6">
              <div className="w-2 h-2 bg-sage-green rounded-full animate-pulse"></div>
              <span className="text-sage-green font-neutral-medium text-sm">Real Results</span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl text-sage-green mb-6">
              See The{" "}
              <span className="italic text-sage-green/80">Amazing Transformation</span>
            </h2>
            <p className="text-xl text-dark-grey leading-relaxed max-w-4xl mx-auto font-neutral-medium">
              <strong>Don't just take our word for it.</strong> See the incredible before and after results from our actual patients. This could be your smile transformation story too.
            </p>
          </FadeInWhenVisible>

          {/* Interactive Before/After Slider - Centered */}
          <FadeInWhenVisible direction="up" delay={0.2} className="flex justify-center">
            <BeforeAfterSlider
              beforeImage="https://obxgbxpiygppoztqzksw.supabase.co/storage/v1/object/public/Pictures/beyondsmiles/Before%20and%20After/bwfore.PNG"
              afterImage="https://obxgbxpiygppoztqzksw.supabase.co/storage/v1/object/public/Pictures/beyondsmiles/Before%20and%20After/after.jpeg"
              beforeAlt="Teeth before transformation"
              afterAlt="Teeth after amazing transformation"
              className="shadow-2xl max-w-4xl"
            />
          </FadeInWhenVisible>

          <FadeInWhenVisible delay={0.4} className="text-center">
            <p className="text-sm text-neutral-grey mt-6 mb-8 font-neutral-regular">
              Drag the slider to see the transformation
            </p>
            <Link href="/cases">
              <Button
                size="lg"
                className="bg-sage-green font-neutral-medium cursor-pointer hover:bg-sage-green/90 text-white px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                View All Transformations →
              </Button>
            </Link>
          </FadeInWhenVisible>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="px-6 py-20 bg-gradient-to-br from-mint-green/10 to-sage-green/5">
        <div className="max-w-7xl mx-auto">
          <FadeInWhenVisible className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl text-sage-green mb-6">
              What Our Patients{" "}
              <span className="italic text-sage-green/80">Say</span>
            </h2>
            <p className="text-xl text-dark-grey leading-relaxed max-w-4xl mx-auto font-neutral-medium">
              Real stories from real patients who have experienced the Beyond
              Smiles difference.
            </p>
          </FadeInWhenVisible>

          {/* Featured Video Testimonial */}
          <FadeInWhenVisible className="mb-12">
            <div className="max-w-2xl mx-auto">
              <Card className="border-sage-green/20 hover:border-sage-green/40 transition-all duration-300 hover:shadow-lg group relative overflow-hidden">
                <div className="p-6 text-center">
                  <h3 className="font-serif text-xl text-sage-green mb-4">Patient Review</h3>
                  <div className="relative rounded-lg overflow-hidden shadow-lg mb-4">
                    <video 
                      controls 
                      className="w-full h-auto"
                      poster="/placeholder.jpg"
                    >
                      <source 
                        src="https://obxgbxpiygppoztqzksw.supabase.co/storage/v1/object/public/Pictures/beyondsmiles/VIDEO-2025-09-02-18-58-35.mp4" 
                        type="video/mp4" 
                      />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                  <div className="flex gap-1 justify-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-dark-grey italic">"Hear from our satisfied patients"</p>
                </div>
              </Card>
            </div>
          </FadeInWhenVisible>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Jilan Kadry", location: "1 year ago", rating: 5, text: "From one generation to another our whole family has always been blessed to have such an outstanding dental care in Alexandria. Thank you Dr Mohamed and all his team for always being the best.", treatment: "Family Care" },
              { name: "Karim Salama", location: "3 years ago", rating: 5, text: "One of the most professional, hygienic clinic in Egypt with unmatched expertise. They care about their patients, pain control, follow up even when you don't. Excellent", treatment: "General Dentistry" },
              { name: "Maram Ghaly", location: "3 years ago", rating: 5, text: "Dr. Mohamed Abdallah is one of the best cosmetic dentists in Alex. He is so patient and his work is very accurate. He is a skilled doctor who knows well what he is doing.", treatment: "Cosmetic Dentistry" },
              { name: "Mostafa Mounir", location: "1 year ago", rating: 5, text: "Dr was very professional and did an awesome job on my teeth", treatment: "General Dentistry" },
              { name: "Maha Blakeway", location: "1 year ago", rating: 5, text: "Amazing, very meticulous work - 7 stars for sure", treatment: "Cosmetic Dentistry" },
              { name: "Rama Mourad", location: "1 year ago", rating: 5, text: "One of the very best dental clinics", treatment: "General Dentistry" },
              { name: "Eman Gamal", location: "2 years ago", rating: 5, text: "Very nice experience, thank you very much", treatment: "General Dentistry" },
              { name: "Khaled Aly", location: "1 year ago", rating: 5, text: "Great Dentist, highly recommended", treatment: "General Dentistry" },
              { name: "Lina Amr", location: "Recent", rating: 5, text: "Words won't do him justice, 1000% recommended, you're in safe hands. He gave me my dream smile in a matter of weeks and fixed what I thought couldn't be fixed. He is very patient and listens to his patients. Very understanding and professional, one of a kind dentist.", treatment: "Cosmetic Dentistry" },
            ].map((testimonial, index) => (
              <StaggerItem key={index}>
                <Card
                  className="p-6 border-sage-green/20 hover:border-sage-green/40 transition-all duration-300 hover:shadow-lg group relative overflow-hidden"
                >
                  {/* Quote icon */}
                  <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Quote className="w-8 h-8 text-sage-green" />
                  </div>

                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>

                  {/* Testimonial text */}
                  <p className="text-dark-grey mb-6 leading-relaxed font-neutral-regular italic">
                    "{testimonial.text}"
                  </p>

                  {/* Patient info */}
                  <div className="border-t border-gray-100 pt-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium text-sage-green font-neutral-medium">
                          {testimonial.name}
                        </h4>
                        <p className="text-sm text-neutral-grey font-neutral-regular">
                          {testimonial.location}
                        </p>
                      </div>
                      <div className="text-right">
                        <div className="text-xs text-sage-green font-medium bg-sage-green/10 px-2 py-1 rounded">
                          {testimonial.treatment}
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* CTA */}
          <FadeInWhenVisible className="text-center mt-12">
            <p className="text-lg text-dark-grey mb-6 font-neutral-medium">
              Ready to start your own transformation story?
            </p>
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-sage-green cursor-pointer hover:bg-sage-green/90 text-white px-8 font-neutral-medium"
              >
                Book Your Consultation
              </Button>
            </Link>
          </FadeInWhenVisible>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="px-6 py-20 bg-gradient-to-br from-mint-green/10 to-sage-green/5">
        <div className="max-w-7xl mx-auto">
          <FadeInWhenVisible className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-sage-green/10 px-4 py-2 rounded-full mb-6">
              <div className="w-2 h-2 bg-sage-green rounded-full animate-pulse"></div>
              <span className="text-sage-green font-neutral-medium text-sm">Why Choose Us</span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl text-sage-green mb-6">
              Everything You Need for a{" "}
              <span className="italic text-sage-green/80">Perfect Smile</span>
            </h2>
            <p className="text-xl text-dark-grey leading-relaxed max-w-4xl mx-auto font-neutral-medium">
              <strong>No more running between different clinics.</strong> Our team of expert specialists handles everything from routine cleanings to complex smile makeovers - all in one convenient location with cutting-edge technology.
            </p>
          </FadeInWhenVisible>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {/* Featured Services - showing all 9 services */}
            {[
              {
                title: "Cosmetic Dentistry",
                description: "Teeth whitening, veneers, and complete smile makeovers to enhance your natural beauty.",
                features: [
                  "Professional teeth whitening",
                  "Porcelain veneers",
                  "Complete smile design",
                  "Dental bonding",
                  "Gum contouring",
                  "Smile makeover consultations",
                ],
                icon: Sparkles,
              },
              {
                title: "Implants & Oral Surgery",
                description: "Dental implants, extractions, and bone grafting for comprehensive tooth replacement solutions.",
                features: [
                  "Single and multiple implants",
                  "All-on-4 implant solutions",
                  "Wisdom tooth extraction",
                  "Bone grafting procedures",
                  "Sinus lift surgery",
                  "Implant-supported dentures",
                ],
                icon: Wrench,
              },
              {
                title: "Orthodontics",
                description: "Metal braces, ceramic braces, and clear aligners to straighten teeth and correct bite issues.",
                features: [
                  "Traditional metal braces",
                  "Clear ceramic braces",
                  "Invisible aligners",
                  "Bite correction therapy",
                  "Retainer fitting",
                  "Early orthodontic intervention",
                ],
                icon: Smile,
              },
              {
                title: "Orthognathic Surgery",
                description: "Correcting facial bone position or size to improve function, balance, and appearance.",
                features: [
                  "Jaw repositioning surgery",
                  "Facial balance correction",
                  "Functional improvement",
                  "Sleep apnea treatment",
                  "TMJ disorder correction",
                  "Aesthetic facial enhancement",
                ],
                icon: Scissors,
              },
              {
                title: "Endodontics (Root Canal Treatment)",
                description: "Precision root canal therapy to save your natural teeth and eliminate pain.",
                features: [
                  "Root canal treatment",
                  "Pulp therapy",
                  "Endodontic retreatment",
                  "Apicoectomy",
                  "Pain management",
                  "Tooth preservation",
                ],
                icon: Heart,
              },
              {
                title: "Periodontics",
                description: "Gum disease treatment, deep cleanings, and gum surgery to maintain healthy gums.",
                features: [
                  "Gum disease treatment",
                  "Deep cleaning (scaling)",
                  "Gum surgery and grafting",
                  "Pocket reduction surgery",
                  "Crown lengthening",
                  "Maintenance therapy",
                ],
                icon: Users,
              },
              {
                title: "Pediatric Dentistry",
                description: "Gentle and fun dental care tailored specifically for children and adolescents.",
                features: [
                  "Child-friendly environment",
                  "Preventive care for kids",
                  "Early orthodontic evaluation",
                  "Dental education",
                  "Sedation options",
                  "Special needs care",
                ],
                icon: Baby,
              },
              {
                title: "TMJ & Jaw Treatment",
                description: "Solutions for jaw pain, TMJ disorders, and bite issues to restore comfort and function.",
                features: [
                  "TMJ disorder diagnosis",
                  "Jaw pain relief therapy",
                  "Bite correction treatment",
                  "Custom night guards",
                  "Physical therapy referrals",
                  "Stress management guidance",
                ],
                icon: Zap,
              },
              {
                title: "General & Preventive Dentistry",
                description:
                  "Regular checkups, cleanings, and fillings to maintain optimal oral health and prevent future issues.",
                features: [
                  "Comprehensive oral examinations",
                  "Professional dental cleanings",
                  "Cavity prevention and treatment",
                  "Fluoride treatments",
                  "Dental sealants",
                  "Oral cancer screenings",
                ],
                icon: Shield,
              },
            ].map((service, index) => (
              <StaggerItem key={index}>
                <Card
                  className="border-sage-green/20 hover:border-sage-green/40 transition-all duration-300 hover:shadow-lg group"
                >
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-sage-green/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-sage-green/20 transition-colors">
                      <service.icon className="w-8 h-8 text-sage-green" />
                    </div>
                    <h3 className="font-serif text-xl text-sage-green mb-4">{service.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-sage-green mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeInWhenVisible className="text-center">
            <div className="space-y-4">
              <p className="text-lg text-dark-grey font-neutral-medium mb-6">
                Ready to discover which service is perfect for you?
              </p>
              <Link href="/services">
                <Button
                  size="lg"
                  className="bg-sage-green font-neutral-medium cursor-pointer hover:bg-sage-green/90 text-white px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  Explore All Services →
                </Button>
              </Link>
              <div className="text-sm text-neutral-grey">
                <span className="inline-flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-sage-green" />
                  Free consultation included
                </span>
              </div>
            </div>
          </FadeInWhenVisible>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="px-6 py-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeInWhenVisible direction="left">
              <h2 className="font-serif text-4xl text-sage-green mb-6">
                Who We <span className="italic text-sage-green/80">Are</span>
              </h2>
              <p className="text-lg text-dark-grey leading-relaxed mb-8 font-neutral-regular">
                Beyond Smiles is more than just a dental clinic; we are a
                full-service dental center dedicated to providing advanced oral
                care. Our team consists of specialists across all fields of
                dentistry.
              </p>
              <Link href="/about">
                <Button className="bg-sage-green font-neutral-medium cursor-pointer hover:bg-sage-green/90 text-white">
                  Learn More About Us
                </Button>
              </Link>
            </FadeInWhenVisible>
            <FadeInWhenVisible direction="right" delay={0.2} className="relative">
              <img
                src="https://obxgbxpiygppoztqzksw.supabase.co/storage/v1/object/public/Pictures/beyondsmiles/Dentalimages/HIMA6414.jpg"
                alt="Modern dental clinic interior"
                className="w-full h-auto rounded-2xl shadow-lg"
                loading="lazy"
              />
            </FadeInWhenVisible>
          </div>
        </div>
      </section>

      {/* Team Preview Section */}
      <section className="px-6 py-20 bg-gradient-to-br from-sage-green/5 to-mint-green/10">
        <div className="max-w-7xl mx-auto text-center">
          <FadeInWhenVisible>
            <h2 className="font-serif text-4xl md:text-5xl text-sage-green mb-6">
              Meet Our{" "}
              <span className="italic text-sage-green/80">Expert Team</span>
            </h2>
            <p className="text-xl text-dark-grey leading-relaxed max-w-4xl mx-auto mb-12 font-neutral-medium">
              Our team is made up of experienced specialists in every field of
              dentistry, ensuring that every patient receives top-tier care.
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

      {/* Contact CTA Section */}
      <section className="px-6 py-20 bg-sage-green text-white relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 left-10 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>
        
        <div className="max-w-7xl mx-auto text-center space-y-8 relative z-10">
          <FadeInWhenVisible>
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              <span className="text-white font-neutral-medium text-sm">Limited Time Offer</span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Smile?
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto mb-8">
              <strong>Don't wait another day to love your smile.</strong> Book your personalized consultation now and get a custom treatment plan. Call +201289107773 to secure your spot.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-white font-neutral-medium cursor-pointer text-sage-green hover:bg-gray-100 px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  Start Your Journey
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white font-neutral-medium cursor-pointer text-white hover:bg-white hover:text-sage-green bg-transparent px-8 py-4 text-lg hover:shadow-lg transition-all duration-300"
                >
                  Call Now: +201289107773
                </Button>
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto text-sm">
              <div className="flex items-center gap-2 justify-center">
                <CheckCircle className="w-4 h-4 text-white" />
                <span>Free consultation</span>
              </div>
              <div className="flex items-center gap-2 justify-center">
                <CheckCircle className="w-4 h-4 text-white" />
                <span>No obligation</span>
              </div>
              <div className="flex items-center gap-2 justify-center">
                <CheckCircle className="w-4 h-4 text-white" />
                <span>Same-day booking</span>
              </div>
            </div>
          </FadeInWhenVisible>
        </div>
      </section>
    </div>
  );
}
