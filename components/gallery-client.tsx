"use client"

import { useState } from "react"
import { JustifiedGallery } from "@/components/justified-gallery"
import { Lightbox } from "@/components/lightbox"

type Item = {
  src: string
  alt?: string
  width: number
  height: number
}

type Props = {
  items: Item[]
}

export default function GalleryClient({ items }: Props) {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  return (
    <>
      <div className="mb-4">
        <JustifiedGallery
          items={items}
          targetRowHeight={320}
          gap={16}
          rowSpacing={16}
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 90vw, 1200px"
          quality={90}
          onItemClick={(i) => {
            setLightboxIndex(i)
            setLightboxOpen(true)
          }}
        />
      </div>

      {lightboxOpen ? (
        <Lightbox
          images={items}
          index={lightboxIndex}
          onClose={() => setLightboxOpen(false)}
          onNavigate={(i) => setLightboxIndex(i)}
        />
      ) : null}
    </>
  )
}


