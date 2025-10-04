"use client";

import { Card } from "@/components/ui/card"
import { FadeInWhenVisible } from "@/components/fade-in-when-visible"
import { StaggerContainer, StaggerItem } from "@/components/stagger-animation"
import { useState, useCallback, useMemo, useEffect } from "react"
import Image from "next/image"


export default function CasesPage() {
  const [activeImage, setActiveImage] = useState<number | null>(null);
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());
  const [failedImages, setFailedImages] = useState<Set<number>>(new Set());
  
  const cases = useMemo(() => [
    {
      after: "https://obxgbxpiygppoztqzksw.supabase.co/storage/v1/object/public/Pictures/beyondsmiles/Before%20and%20After/whatsappafter1.jpeg",
      before: "https://obxgbxpiygppoztqzksw.supabase.co/storage/v1/object/public/Pictures/beyondsmiles/Before%20and%20After/whatsappbefore1%20(1).jpeg",
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
    // David case
    {
      after: "https://obxgbxpiygppoztqzksw.supabase.co/storage/v1/object/public/Pictures/beyondsmiles/Before%20and%20After/David/IMG_5553.jpg",
      before: "https://obxgbxpiygppoztqzksw.supabase.co/storage/v1/object/public/Pictures/beyondsmiles/Before%20and%20After/David/DSC_0203.JPG",
    },
    // Rama case
    {
      after: "https://obxgbxpiygppoztqzksw.supabase.co/storage/v1/object/public/Pictures/beyondsmiles/Before%20and%20After/Rama/IMG_0400.jpg",
      before: "https://obxgbxpiygppoztqzksw.supabase.co/storage/v1/object/public/Pictures/beyondsmiles/Before%20and%20After/Rama/IMG_6064.jpg",
    },
    // Sarah case
    {
      after: "https://obxgbxpiygppoztqzksw.supabase.co/storage/v1/object/public/Pictures/beyondsmiles/Before%20and%20After/Sarah/after.jpeg",
      before: "https://obxgbxpiygppoztqzksw.supabase.co/storage/v1/object/public/Pictures/beyondsmiles/Before%20and%20After/Sarah/3353E69A-19B9-499C-AAC9-A81B1F6A2E65_1_105_c.jpeg",
    },
    // Tarek case
    {
      after: "https://obxgbxpiygppoztqzksw.supabase.co/storage/v1/object/public/Pictures/beyondsmiles/Before%20and%20After/Tarek/after.png",
      before: "https://obxgbxpiygppoztqzksw.supabase.co/storage/v1/object/public/Pictures/beyondsmiles/Before%20and%20After/Tarek/before.jpeg",
    },
    // Eladham case
    {
      after: "https://obxgbxpiygppoztqzksw.supabase.co/storage/v1/object/public/Pictures/beyondsmiles/Before%20and%20After/eladham/DSC_0878.JPG",
      before: "https://obxgbxpiygppoztqzksw.supabase.co/storage/v1/object/public/Pictures/beyondsmiles/Before%20and%20After/eladham/DSC_0727.JPG",
    },
    // Farida smile makeover veneers case
    {
      after: "https://obxgbxpiygppoztqzksw.supabase.co/storage/v1/object/public/Pictures/beyondsmiles/Before%20and%20After/farida%20smile%20makeover%20veneers/IMG_0065.jpg",
      before: "https://obxgbxpiygppoztqzksw.supabase.co/storage/v1/object/public/Pictures/beyondsmiles/Before%20and%20After/farida%20smile%20makeover%20veneers/before.JPG",
    },
    // Inas implements case
    {
      after: "https://obxgbxpiygppoztqzksw.supabase.co/storage/v1/object/public/Pictures/beyondsmiles/Before%20and%20After/inas%20implements%20/WhatsApp%20Image%202025-08-17%20at%204.57.50%20PM.jpeg",
      before: "https://obxgbxpiygppoztqzksw.supabase.co/storage/v1/object/public/Pictures/beyondsmiles/Before%20and%20After/inas%20implements%20/IMG_3019.jpeg",
    },
    // Maha mobasher case
    {
      after: "https://obxgbxpiygppoztqzksw.supabase.co/storage/v1/object/public/Pictures/beyondsmiles/Before%20and%20After/maha%20mobasher/WhatsApp%20Image%202025-09-29%20at%205.09.52%20PM.jpeg",
      before: "https://obxgbxpiygppoztqzksw.supabase.co/storage/v1/object/public/Pictures/beyondsmiles/Before%20and%20After/maha%20mobasher/WhatsApp%20Image%202025-09-29%20at%205.09.51%20PM.jpeg",
    },
    // Nagib case
    {
      after: "https://obxgbxpiygppoztqzksw.supabase.co/storage/v1/object/public/Pictures/beyondsmiles/Before%20and%20After/nagib/WhatsApp%20Image%202025-09-29%20at%204.33.50%20PM%20(1).jpeg",
      before: "https://obxgbxpiygppoztqzksw.supabase.co/storage/v1/object/public/Pictures/beyondsmiles/Before%20and%20After/nagib/WhatsApp%20Image%202025-09-29%20at%204.33.50%20PM%20(2).jpeg",
    },
    // Ortho1 case
    {
      after: "https://obxgbxpiygppoztqzksw.supabase.co/storage/v1/object/public/Pictures/beyondsmiles/Before%20and%20After/ortho1/Picture2.png",
      before: "https://obxgbxpiygppoztqzksw.supabase.co/storage/v1/object/public/Pictures/beyondsmiles/Before%20and%20After/ortho1/Picture1.png",
    },
    // Ortho2 case
    {
      after: "https://obxgbxpiygppoztqzksw.supabase.co/storage/v1/object/public/Pictures/beyondsmiles/Before%20and%20After/ortho2/Picture4.png",
      before: "https://obxgbxpiygppoztqzksw.supabase.co/storage/v1/object/public/Pictures/beyondsmiles/Before%20and%20After/ortho2/Picture3.png",
    },
    // Ortho3 case
    {
      after: "https://obxgbxpiygppoztqzksw.supabase.co/storage/v1/object/public/Pictures/beyondsmiles/Before%20and%20After/ortho3/Picture6.png",
      before: "https://obxgbxpiygppoztqzksw.supabase.co/storage/v1/object/public/Pictures/beyondsmiles/Before%20and%20After/ortho3/Picture5.png",
    },
  ], []);

  const handleImageLoad = useCallback((index: number) => {
    setLoadedImages(prev => new Set(prev).add(index));
  }, []);

  const handleImageError = useCallback((index: number) => {
    setFailedImages(prev => new Set(prev).add(index));
    console.log('Image failed to load for case', index);
    
    // Retry after 3 seconds
    setTimeout(() => {
      setFailedImages(prev => {
        const newSet = new Set(prev);
        newSet.delete(index);
        return newSet;
      });
    }, 3000);
  }, []);

  const handleImageClick = useCallback((idx: number) => {
    setActiveImage(activeImage === idx ? null : idx);
  }, [activeImage]);

  const handleMouseEnter = useCallback((idx: number) => {
    setActiveImage(idx);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setActiveImage(null);
  }, []);

  // Preload images for better performance
  const preloadImages = useCallback(() => {
    cases.forEach((c, idx) => {
      if (idx < 2) { // Preload first 2 images only
        const afterImg = new window.Image();
        const beforeImg = new window.Image();
        afterImg.src = c.after;
        beforeImg.src = c.before;
      }
    });
  }, [cases]);

  // Preload images on component mount
  useEffect(() => {
    preloadImages();
  }, [preloadImages]);

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
                <Card className="overflow-hidden border-sage-green/20 hover:border-sage-green/40 transition-all duration-300 hover:shadow-lg">
                  <div 
                    className="relative aspect-square cursor-pointer select-none"
                    onClick={() => handleImageClick(idx)}
                    onMouseEnter={() => handleMouseEnter(idx)}
                    onMouseLeave={handleMouseLeave}
                  >
                    {/* Loading skeleton */}
                    {!loadedImages.has(idx) && !failedImages.has(idx) && (
                      <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-lg flex items-center justify-center">
                        <div className="w-8 h-8 border-2 border-sage-green border-t-transparent rounded-full animate-spin"></div>
                      </div>
                    )}
                    
                    {/* Error fallback */}
                    {failedImages.has(idx) && (
                      <div className="absolute inset-0 bg-gray-100 rounded-lg flex items-center justify-center">
                        <div className="text-center text-gray-500">
                          <div className="w-12 h-12 mx-auto mb-2 text-sage-green">
                            <svg fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <p className="text-sm">Image loading...</p>
                        </div>
                      </div>
                    )}
                    
                    {/* After image (default) */}
                    <Image
                      key={`after-${idx}`}
                      src={c.after} 
                      alt={`Dental transformation after treatment at Beyond Smiles Dental Clinic`} 
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className={`object-contain transition-opacity duration-300 ${
                        activeImage === idx 
                          ? 'opacity-0' 
                          : 'opacity-100'
                      }`}
                      priority={idx < 2} // Load first 2 images with priority
                      quality={60}
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                      onLoad={() => handleImageLoad(idx)}
                      onError={() => handleImageError(idx)}
                    />
                    {/* Before image (revealed on hover/touch) */}
                    <Image
                      key={`before-${idx}`}
                      src={c.before}
                      alt={`Dental transformation before treatment at Beyond Smiles Dental Clinic`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className={`object-contain transition-opacity duration-300 ${
                        activeImage === idx 
                          ? 'opacity-100' 
                          : 'opacity-0'
                      }`}
                      quality={60}
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                      onError={() => handleImageError(idx)}
                    />
                    {/* Clean labels - only show current state */}
                    <div className={`absolute top-3 left-3 bg-sage-green text-white px-3 py-1 rounded-full text-sm font-medium transition-opacity duration-300 pointer-events-none ${
                      activeImage === idx ? 'opacity-0' : 'opacity-100'
                    }`}>
                      After
                    </div>
                    <div className={`absolute top-3 right-3 bg-sage-green text-white px-3 py-1 rounded-full text-sm font-medium transition-opacity duration-300 pointer-events-none ${
                      activeImage === idx 
                        ? 'opacity-100' 
                        : 'opacity-0'
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


