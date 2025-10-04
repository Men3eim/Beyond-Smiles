"use client"

import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

type CarouselImage = {
  src: string
  alt?: string
}

type Props = {
  images: CarouselImage[]
  autoPlay?: boolean
  intervalMs?: number
  transitionMs?: number
}

export default function FullScreenCarousel({
  images,
  autoPlay = true,
  intervalMs = 5000,
  transitionMs = 800,
}: Props) {
  const [index, setIndex] = useState(0)
  const timerRef = useRef<number | null>(null)

  const go = useCallback(
    (delta: number) => setIndex((i) => (i + delta + images.length) % images.length),
    [images.length]
  )

  const goTo = useCallback((i: number) => setIndex(((i % images.length) + images.length) % images.length), [images.length])

  // Autoplay
  useEffect(() => {
    if (!autoPlay || images.length <= 1) return
    if (timerRef.current) window.clearTimeout(timerRef.current)
    timerRef.current = window.setTimeout(() => go(1), intervalMs)
    return () => {
      if (timerRef.current) window.clearTimeout(timerRef.current)
    }
  }, [index, autoPlay, intervalMs, images.length, go])

  const transitionStyle = useMemo(() => ({ transition: `opacity ${transitionMs}ms ease, transform ${transitionMs}ms ease` }), [transitionMs])

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      {/* Slides */}
      <div className="absolute inset-0">
        {images.map((img, i) => {
          const isActive = i === index
          return (
            <div
              key={`${i}-${img.src}`}
              className="absolute inset-0"
              style={{
                opacity: isActive ? 1 : 0,
                ...transitionStyle,
                transform: isActive ? "scale(1.0)" : "scale(1.02)",
              }}
            >
              <Image
                src={img.src}
                alt={img.alt || ""}
                fill
                className="object-cover select-none"
                priority={i <= 1}
                fetchPriority={i === index ? 'high' : 'low'}
                sizes="100vw"
                quality={60}
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                onError={() => console.log('Carousel image failed to load:', img.src)}
              />
            </div>
          )
        })}
      </div>

      {/* Controls */}
      {images.length > 1 ? (
        <>
          <button
            aria-label="Previous image"
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 h-10 w-10 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center backdrop-blur-sm"
            onClick={() => go(-1)}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            aria-label="Next image"
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 h-10 w-10 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center backdrop-blur-sm"
            onClick={() => go(1)}
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots */}
          <div className="absolute bottom-6 left-0 right-0 flex items-center justify-center gap-2 z-10">
            {images.map((_, i) => (
              <button
                key={i}
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => goTo(i)}
                className={`h-2.5 rounded-full transition-all ${i === index ? "bg-white w-6" : "bg-white/50 hover:bg-white/70 w-2.5"}`}
              />
            ))}
          </div>
        </>
      ) : null}

      {/* Subtle gradient overlay edges for readability */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/40 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/40 to-transparent" />
    </section>
  )
}


