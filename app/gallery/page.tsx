import { FadeInWhenVisible } from "@/components/fade-in-when-visible";
import { StaggerContainer, StaggerItem } from "@/components/stagger-animation";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Camera, Heart } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dental Clinic Gallery | Modern Facilities & Equipment | Beyond Smiles Alexandria",
  description: "Explore our modern dental clinic gallery in Alexandria. See our state-of-the-art equipment, comfortable patient areas, and professional treatment rooms at New Giza Health Park.",
  keywords: "dental clinic gallery, modern dental clinic, dental equipment, clinic interior, Beyond Smiles facility, Alexandria dental center",
  openGraph: {
    title: "Dental Clinic Gallery | Beyond Smiles Alexandria",
    description: "Explore our modern dental clinic facilities and state-of-the-art equipment in Alexandria.",
    url: "https://beyondsmiles.com/gallery",
    images: [
      {
        url: "https://obxgbxpiygppoztqzksw.supabase.co/storage/v1/object/public/Pictures/beyondsmiles/Dentalimages/HIMA6418.jpg",
        width: 1200,
        height: 630,
        alt: "Beyond Smiles Dental Clinic Gallery",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dental Clinic Gallery | Beyond Smiles Alexandria",
    description: "Explore our modern dental clinic facilities and state-of-the-art equipment.",
  },
  alternates: {
    canonical: "https://beyondsmiles.com/gallery",
  },
};

export default function GalleryPage() {
  const galleryImages = [
    {
      src: "https://obxgbxpiygppoztqzksw.supabase.co/storage/v1/object/public/Pictures/beyondsmiles/Dentalimages/HIMA6418.jpg",
      alt: "Modern dental clinic interior at Beyond Smiles",
      category: "Clinic Interior"
    },
    {
      src: "https://obxgbxpiygppoztqzksw.supabase.co/storage/v1/object/public/Pictures/beyondsmiles/Dentalimages/HIMA6449.jpg",
      alt: "State-of-the-art dental equipment at Beyond Smiles",
      category: "Equipment"
    },
    {
      src: "https://obxgbxpiygppoztqzksw.supabase.co/storage/v1/object/public/Pictures/beyondsmiles/Dentalimages/HIMA6466.jpg",
      alt: "Expert dental team at Beyond Smiles",
      category: "Team"
    },
    {
      src: "https://obxgbxpiygppoztqzksw.supabase.co/storage/v1/object/public/Pictures/beyondsmiles/Dentalimages/HIMA6472.jpg",
      alt: "Professional dental care environment",
      category: "Clinic Interior"
    },
    {
      src: "https://obxgbxpiygppoztqzksw.supabase.co/storage/v1/object/public/Pictures/beyondsmiles/Dentalimages/HIMA6497.jpg",
      alt: "Advanced dental technology and equipment",
      category: "Equipment"
    },
    {
      src: "https://obxgbxpiygppoztqzksw.supabase.co/storage/v1/object/public/Pictures/beyondsmiles/Dentalimages/HIMA6512.jpg",
      alt: "Comfortable patient care area",
      category: "Patient Care"
    },
    {
      src: "https://obxgbxpiygppoztqzksw.supabase.co/storage/v1/object/public/Pictures/beyondsmiles/Dentalimages/HIMA6416.jpg",
      alt: "Professional dental treatment room",
      category: "Treatment Room"
    },
    {
      src: "https://obxgbxpiygppoztqzksw.supabase.co/storage/v1/object/public/Pictures/beyondsmiles/Dentalimages/HIMA6445.jpg",
      alt: "Modern dental clinic waiting area",
      category: "Clinic Interior"
    },
    {
      src: "https://obxgbxpiygppoztqzksw.supabase.co/storage/v1/object/public/Pictures/beyondsmiles/Dentalimages/HIMA6522%20(1).jpg",
      alt: "Advanced dental technology setup",
      category: "Technology"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative px-6 py-24 md:py-32 bg-gradient-to-br from-light-grey via-white to-mint-green/20 overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-20 right-10 w-64 h-32 bg-gradient-to-r from-mint-green/30 to-sage-green/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-48 h-24 bg-gradient-to-r from-sage-green/20 to-mint-green/20 rounded-full blur-2xl"></div>

        <div className="max-w-7xl mx-auto">
          <FadeInWhenVisible className="text-center">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-sm mb-6">
              <div className="w-2 h-2 bg-sage-green rounded-full animate-pulse"></div>
              <span className="font-neutral-medium text-sage-green">Behind the Scenes</span>
            </div>
            
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl mb-6 leading-tight">
              <span className="text-gradient-beyond">Gallery</span>{" "}
              <span className="italic text-sage-green/90">
                See Our World
              </span>
            </h1>
            
            <p className="text-xl text-dark-grey mb-8 leading-relaxed max-w-4xl mx-auto font-neutral-medium">
              <strong>Take a virtual tour of our modern dental clinic.</strong> From our state-of-the-art equipment to our comfortable patient areas, see why Beyond Smiles is the premier choice for dental care in Alexandria.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-sage-green font-neutral-medium cursor-pointer hover:bg-sage-green/90 text-white px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  Schedule Your Visit
                </Button>
              </Link>
              <Link href="/services">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-sage-green cursor-pointer font-neutral-medium text-sage-green hover:bg-sage-green hover:text-white px-8 py-4 text-lg bg-transparent hover:shadow-lg transition-all duration-300"
                >
                  Our Services
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-dark-grey font-neutral-medium">
              <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm px-4 py-3 rounded-lg">
                <Camera className="w-5 h-5 text-sage-green" />
                <span>{galleryImages.length} Photos</span>
              </div>
              <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm px-4 py-3 rounded-lg">
                <Heart className="w-5 h-5 text-sage-green" />
                <span>Patient-Focused Design</span>
              </div>
            </div>
          </FadeInWhenVisible>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="px-6 py-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <FadeInWhenVisible className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-sage-green/10 px-4 py-2 rounded-full mb-6">
              <div className="w-2 h-2 bg-sage-green rounded-full animate-pulse"></div>
              <span className="text-sage-green font-neutral-medium text-sm">Clinic Gallery</span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl text-sage-green mb-6">
              Our{" "}
              <span className="italic text-sage-green/80">Modern Clinic</span>
            </h2>
            <p className="text-xl text-dark-grey leading-relaxed max-w-4xl mx-auto font-neutral-medium">
              <strong>Experience the difference of modern dentistry.</strong> Our clinic combines cutting-edge technology with comfortable, welcoming spaces designed with your comfort and care in mind.
            </p>
          </FadeInWhenVisible>

          {/* Gallery Grid */}
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryImages.map((image, index) => (
              <StaggerItem key={index}>
                <Card className="border-sage-green/20 hover:border-sage-green/40 transition-all duration-300 hover:shadow-xl group overflow-hidden">
                  <CardContent className="p-0">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      
                    </div>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* CTA Section */}
          <FadeInWhenVisible className="text-center mt-16">
            <div className="bg-gradient-to-r from-sage-green/5 to-mint-green/10 rounded-2xl p-12">
              <h3 className="font-serif text-3xl text-sage-green mb-4">
                Ready to Visit Our Clinic?
              </h3>
              <p className="text-lg text-dark-grey mb-8 font-neutral-medium max-w-2xl mx-auto">
                See our modern facilities in person. Book your consultation today and experience the Beyond Smiles difference.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="bg-sage-green font-neutral-medium cursor-pointer hover:bg-sage-green/90 text-white px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  >
                    Book Your Visit
                  </Button>
                </Link>
                <Link href="/services">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-sage-green cursor-pointer font-neutral-medium text-sage-green hover:bg-sage-green hover:text-white px-8 py-4 text-lg bg-transparent hover:shadow-lg transition-all duration-300"
                  >
                    Explore Services
                  </Button>
                </Link>
              </div>
            </div>
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
              <span className="text-white font-neutral-medium text-sm">Ready to Experience It?</span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
              See Our Clinic in Person
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto mb-8">
              <strong>Experience the comfort and technology firsthand.</strong> Book your free consultation and take a personal tour of our modern dental clinic.
            </p>
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-white font-neutral-medium cursor-pointer text-sage-green hover:bg-gray-100 px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Schedule Your Visit Today
              </Button>
            </Link>
          </FadeInWhenVisible>
        </div>
      </section>
    </div>
  );
}
