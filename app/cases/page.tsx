"use client";

import { Card } from "@/components/ui/card"
import { FadeInWhenVisible } from "@/components/fade-in-when-visible"
import { StaggerContainer, StaggerItem } from "@/components/stagger-animation"
import { useState } from "react"


export default function CasesPage() {
  const [activeImage, setActiveImage] = useState<number | null>(null);
  
  const cases = [
    {
      after: "https://obxgbxpiygppoztqzksw.supabase.co/storage/v1/object/public/Pictures/beyondsmiles/Before%20and%20After/whatsappafter1.jpeg",
      before: "https://obxgbxpiygppoztqzksw.supabase.co/storage/v1/object/public/Pictures/beyondsmiles/Before%20and%20After/whatsappbefore1%20(1).jpeg",
    },
    {
      after: "https://obxgbxpiygppoztqzksw.supabase.co/storage/v1/object/public/Pictures/beyondsmiles/Before%20and%20After/whatsappafter2.jpeg",
      before: "https://obxgbxpiygppoztqzksw.supabase.co/storage/v1/object/public/Pictures/beyondsmiles/Before%20and%20After/whatsappbefore2.jpeg",
    },
    {
      after: "https://obxgbxpiygppoztqzksw.supabase.co/storage/v1/object/public/Pictures/beyondsmiles/Before%20and%20After/whatsappafter4.jpeg",
      before: "https://obxgbxpiygppoztqzksw.supabase.co/storage/v1/object/public/Pictures/beyondsmiles/Before%20and%20After/whatsappbefore3.jpeg",
    },
    {
      after: "https://obxgbxpiygppoztqzksw.supabase.co/storage/v1/object/public/Pictures/beyondsmiles/Before%20and%20After/IMG_0073%20(1).jpg",
      before: "https://obxgbxpiygppoztqzksw.supabase.co/storage/v1/object/public/Pictures/beyondsmiles/Before%20and%20After/before%20(1).JPG",
    },
    {
      after: "https://obxgbxpiygppoztqzksw.supabase.co/storage/v1/object/public/Pictures/beyondsmiles/Before%20and%20After/111_9466.jpg",
      before: "https://obxgbxpiygppoztqzksw.supabase.co/storage/v1/object/public/Pictures/beyondsmiles/Before%20and%20After/before.JPG",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative px-6 py-24 md:py-32 bg-gradient-to-br from-light-grey via-white to-mint-green/20">
        <div className="max-w-7xl mx-auto text-center">
          <FadeInWhenVisible direction="up">
            <h1 className="font-serif text-5xl md:text-6xl text-sage-green mb-6">
              Smile <span className="italic text-sage-green/80">Cases</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Explore real transformations. Hover on each image to reveal the before photo.
            </p>
          </FadeInWhenVisible>
        </div>
      </section>

      {/* Hover Reveal Grid */}
      <section className="px-6 py-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <FadeInWhenVisible className="text-center mb-12">
            <h2 className="font-serif text-4xl md:text-5xl text-sage-green mb-4">Before & After</h2>
            <p className="text-lg text-dark-grey leading-relaxed">View our patient transformations. Tap or hover to see the before images.</p>
          </FadeInWhenVisible>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cases.map((c, idx) => (
              <StaggerItem key={idx}>
                <Card className="overflow-hidden border-sage-green/20 hover:border-sage-green/40 transition-all duration-300 hover:shadow-lg group">
                  <div 
                    className="relative aspect-square cursor-pointer"
                    onClick={() => setActiveImage(activeImage === idx ? null : idx)}
                  >
                    {/* After image (default) */}
                    <img 
                      src={c.after} 
                      alt={`Dental transformation after treatment at Beyond Smiles Dental Clinic`} 
                      className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-300 ${
                        activeImage === idx 
                          ? 'opacity-0' 
                          : 'opacity-100'
                      }`}
                      onError={(e) => {
                        console.log('After image failed to load for case', idx, c.after);
                      }}
                    />
                    {/* Before image (revealed on hover/touch) */}
                    <img
                      src={c.before}
                      alt={`Dental transformation before treatment at Beyond Smiles Dental Clinic`}
                      className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-300 ${
                        activeImage === idx 
                          ? 'opacity-100' 
                          : 'opacity-0 group-hover:opacity-100 md:opacity-0 md:group-hover:opacity-100'
                      }`}
                      onError={(e) => {
                        console.log('Before image failed to load for case', idx, c.before);
                      }}
                    />
                    {/* Clean labels - only show current state */}
                    <div className={`absolute top-3 left-3 bg-sage-green text-white px-3 py-1 rounded-full text-sm font-medium transition-opacity duration-300 ${
                      activeImage === idx ? 'opacity-0' : 'opacity-100'
                    }`}>
                      After
                    </div>
                    <div className={`absolute top-3 right-3 bg-sage-green text-white px-3 py-1 rounded-full text-sm font-medium transition-opacity duration-300 ${
                      activeImage === idx 
                        ? 'opacity-100' 
                        : 'opacity-0 group-hover:opacity-100 md:opacity-0 md:group-hover:opacity-100'
                    }`}>
                      Before
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="text-sm text-neutral-grey text-center">
                      <span className="md:hidden">
                        {activeImage === idx ? 'Tap to return to after' : 'Tap to see transformation'}
                      </span>
                      <span className="hidden md:inline">Hover to see transformation</span>
                    </p>
                  </div>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

    </div>
  )
}


