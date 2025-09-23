import { Card } from "@/components/ui/card"
import { FadeInWhenVisible } from "@/components/fade-in-when-visible"
import { StaggerContainer, StaggerItem } from "@/components/stagger-animation"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Dental Before & After Cases | Smile Transformations | Beyond Smiles Alexandria",
  description: "View our dental before and after cases including teeth whitening, cosmetic veneers, and smile makeovers. Real patient transformations at Beyond Smiles dental clinic in Alexandria.",
  keywords: "dental before after, smile transformation, teeth whitening results, cosmetic dentistry cases, dental veneers, smile makeover Alexandria",
  openGraph: {
    title: "Dental Before & After Cases | Beyond Smiles Alexandria",
    description: "View our dental before and after cases including teeth whitening, cosmetic veneers, and smile makeovers.",
    url: "https://beyondsmiles.com/cases",
    images: [
      {
        url: "https://obxgbxpiygppoztqzksw.supabase.co/storage/v1/object/public/Pictures/beyondsmiles/Before%20and%20After/111_9466.jpg",
        width: 1200,
        height: 630,
        alt: "Dental Before and After Transformation - Beyond Smiles",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dental Before & After Cases | Beyond Smiles Alexandria",
    description: "View our dental before and after cases including teeth whitening and smile makeovers.",
  },
  alternates: {
    canonical: "https://beyondsmiles.com/cases",
  },
};

export default function CasesPage() {
  const cases = [
    {
      after: "https://obxgbxpiygppoztqzksw.supabase.co/storage/v1/object/public/Pictures/beyondsmiles/Before%20and%20After/whatsappafter1.jpeg",
      before: "https://obxgbxpiygppoztqzksw.supabase.co/storage/v1/object/public/Pictures/beyondsmiles/Before%20and%20After/whatsappbefore1.jpeg",
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
            <p className="text-lg text-dark-grey leading-relaxed">After image shown by default. Hover to see the before image.</p>
          </FadeInWhenVisible>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cases.map((c, idx) => (
              <StaggerItem key={idx}>
                <Card className="overflow-hidden border-sage-green/20 hover:border-sage-green/40 transition-all duration-300 hover:shadow-lg group">
                  <div className="relative aspect-square">
                    {/* After image (default) */}
                    <img src={c.after} alt={`Dental transformation after treatment at Beyond Smiles Dental Clinic`} className="absolute inset-0 w-full h-full object-cover" />
                    {/* Before image (revealed on hover) */}
                    <img
                      src={c.before}
                      alt={`Dental transformation before treatment at Beyond Smiles Dental Clinic`}
                      className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-sm text-neutral-grey">Hover to reveal the before image</p>
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


