"use client"

import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from "lucide-react"

export type LightboxImage = {
  src: string
  alt?: string
}

type LightboxProps = {
  images: LightboxImage[]
  index: number
  onClose: () => void
  onNavigate?: (nextIndex: number) => void
}

export function Lightbox({ images, index, onClose, onNavigate }: LightboxProps) {
  const [current, setCurrent] = useState(index)
  const [zoom, setZoom] = useState(1)
  const [isDragging, setIsDragging] = useState(false)
  const [offset, setOffset] = useState({ x: 0, y: 0 })
  const dragStartRef = useRef<{ x: number; y: number } | null>(null)
  const touchStartRef = useRef<{ x: number; y: number } | null>(null)

  // Sync internal state when index prop changes externally
  useEffect(() => {
    setCurrent(index)
    setZoom(1)
    setOffset({ x: 0, y: 0 })
  }, [index])

  const image = useMemo(() => images[current], [images, current])

  const close = useCallback(() => {
    onClose()
  }, [onClose])

  const navigate = useCallback(
    (delta: number) => {
      const nextIndex = (current + delta + images.length) % images.length
      setCurrent(nextIndex)
      setZoom(1)
      setOffset({ x: 0, y: 0 })
      onNavigate?.(nextIndex)
    },
    [current, images.length, onNavigate]
  )

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") return close()
      if (e.key === "ArrowLeft") return navigate(-1)
      if (e.key === "ArrowRight") return navigate(1)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [close, navigate])

  const onWheel = useCallback((e: React.WheelEvent) => {
    if (e.ctrlKey) return
    e.preventDefault()
    const direction = e.deltaY < 0 ? 1 : -1
    setZoom((z) => {
      const next = Math.min(4, Math.max(1, +(z + direction * 0.2).toFixed(2)))
      if (next === 1) setOffset({ x: 0, y: 0 })
      return next
    })
  }, [])

  const onDoubleClick = useCallback(() => {
    setZoom((z) => (z > 1 ? 1 : 2))
    if (zoom > 1) setOffset({ x: 0, y: 0 })
  }, [zoom])

  const onMouseDown = useCallback((e: React.MouseEvent) => {
    if (zoom === 1) return
    setIsDragging(true)
    dragStartRef.current = { x: e.clientX - offset.x, y: e.clientY - offset.y }
  }, [zoom, offset.x, offset.y])

  const onMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDragging || !dragStartRef.current) return
    setOffset({ x: e.clientX - dragStartRef.current.x, y: e.clientY - dragStartRef.current.y })
  }, [isDragging])

  const onMouseUp = useCallback(() => {
    setIsDragging(false)
    dragStartRef.current = null
  }, [])

  // Touch swipe to navigate
  const onTouchStart = useCallback((e: React.TouchEvent) => {
    const t = e.touches[0]
    touchStartRef.current = { x: t.clientX, y: t.clientY }
  }, [])

  const onTouchMove = useCallback((e: React.TouchEvent) => {
    if (!touchStartRef.current) return
    const t = e.touches[0]
    const dx = t.clientX - touchStartRef.current.x
    const dy = t.clientY - touchStartRef.current.y
    if (zoom > 1) {
      setOffset((o) => ({ x: o.x + dx * 0.2, y: o.y + dy * 0.2 }))
    }
    touchStartRef.current = { x: t.clientX, y: t.clientY }
  }, [zoom])

  const onTouchEnd = useCallback((e: React.TouchEvent) => {
    const changed = e.changedTouches[0]
    if (!changed || !touchStartRef.current) return
    const dx = changed.clientX - touchStartRef.current.x
    const threshold = 50
    if (Math.abs(dx) > threshold && zoom === 1) {
      navigate(dx > 0 ? -1 : 1)
    }
    touchStartRef.current = null
  }, [navigate, zoom])

  return (
    <div
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm text-white"
      role="dialog"
      aria-modal="true"
    >
      {/* Top bar */}
      <div className="absolute top-0 left-0 right-0 p-4 flex items-center justify-between select-none">
        <div className="text-sm opacity-80">
          {current + 1} / {images.length}
        </div>
        <div className="flex gap-2">
          <button
            aria-label="Zoom out"
            className="p-2 rounded-md bg-white/10 hover:bg-white/20"
            onClick={() => setZoom((z) => Math.max(1, +(z - 0.25).toFixed(2)))}
          >
            <ZoomOut className="w-5 h-5" />
          </button>
          <button
            aria-label="Zoom in"
            className="p-2 rounded-md bg-white/10 hover:bg-white/20"
            onClick={() => setZoom((z) => Math.min(4, +(z + 0.25).toFixed(2)))}
          >
            <ZoomIn className="w-5 h-5" />
          </button>
          <button
            aria-label="Close"
            className="p-2 rounded-md bg-white/10 hover:bg-white/20"
            onClick={close}
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Navigation */}
      <button
        aria-label="Previous"
        className="absolute left-2 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20"
        onClick={() => navigate(-1)}
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        aria-label="Next"
        className="absolute right-2 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20"
        onClick={() => navigate(1)}
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Image area */}
      <div
        className="w-full h-full flex items-center justify-center cursor-zoom-in select-none"
        onWheel={onWheel}
        onDoubleClick={onDoubleClick}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        onClick={(e) => {
          // Close if clicking on backdrop (not on image when not dragging)
          if (e.target === e.currentTarget && !isDragging) close()
        }}
      >
        <div
          className="relative"
          style={{
            width: "90vw",
            height: "90vh",
          }}
        >
          <Image
            src={image.src}
            alt={image.alt || "Gallery image"}
            fill
            className="object-contain will-change-transform"
            sizes="100vw"
            quality={60}
            fetchPriority="high"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
            onError={() => console.log('Lightbox image failed to load:', image.src)}
            style={{
              transform: `translate3d(${offset.x}px, ${offset.y}px, 0) scale(${zoom})`,
              transition: isDragging ? "none" : "transform 200ms ease",
            }}
            priority
          />
        </div>
      </div>

      {/* Filmstrip thumbnails */}
      <div className="absolute bottom-0 left-0 right-0 px-4 pb-4 pt-2 bg-gradient-to-t from-black/60 to-transparent">
        <div className="mx-auto flex gap-2 overflow-x-auto no-scrollbar max-w-5xl">
          {images.map((img, i) => (
            <button
              key={`${i}-${img.src}`}
              className={`relative h-14 w-20 rounded-md overflow-hidden ring-1 transition-all ${
                i === current ? "ring-white" : "ring-white/20 hover:ring-white/40"
              }`}
              onClick={() => navigate(i - current)}
              aria-label={`Go to image ${i + 1}`}
            >
              <Image 
                src={img.src} 
                alt={img.alt || ""} 
                fill 
                className="object-cover" 
                sizes="80px"
                quality={40}
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                onError={() => console.log('Thumbnail failed to load:', img.src)}
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

