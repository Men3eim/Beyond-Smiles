"use client"

import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import Image from "next/image"

export type JustifiedItem = {
  src: string
  width: number
  height: number
  alt?: string
}

type Props = {
  items: JustifiedItem[]
  targetRowHeight?: number
  rowSpacing?: number
  gap?: number
  onItemClick?: (index: number) => void
  sizes?: string
  quality?: number
}

type LayoutBox = {
  left: number
  top: number
  width: number
  height: number
  index: number
}

function measureContainerWidth(container: HTMLDivElement | null): number {
  if (!container) return 0
  const rect = container.getBoundingClientRect()
  return Math.floor(rect.width)
}

export function JustifiedGallery({
  items,
  targetRowHeight = 280,
  rowSpacing = 16,
  gap = 16,
  onItemClick,
  sizes = "(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 1200px",
  quality = 90,
}: Props) {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const [containerWidth, setContainerWidth] = useState(0)

  // Recalculate on resize
  useEffect(() => {
    const update = () => setContainerWidth(measureContainerWidth(containerRef.current))
    update()
    const ro = new ResizeObserver(update)
    if (containerRef.current) ro.observe(containerRef.current)
    return () => ro.disconnect()
  }, [])

  // Responsive row height based on container width for a more editorial feel
  const effectiveRowHeight = useMemo(() => {
    if (!containerWidth) return targetRowHeight
    if (containerWidth < 640) return Math.max(200, Math.round(targetRowHeight * 0.85))
    if (containerWidth < 1024) return targetRowHeight
    return Math.min(targetRowHeight + 60, Math.round(targetRowHeight * 1.15))
  }, [containerWidth, targetRowHeight])

  const layout = useMemo<LayoutBox[]>(() => {
    if (!containerWidth || items.length === 0) return []

    const boxes: LayoutBox[] = []
    let row: { index: number; aspect: number }[] = []
    let rowAspectSum = 0
    const maxWidth = containerWidth
    const effectiveWidth = maxWidth - gap // account for right padding visually
    const rowGap = gap

    const flushRow = (isLastRow: boolean) => {
      if (row.length === 0) return
      const gapsTotal = rowGap * (row.length - 1)
      const rawRowWidthUnits = rowAspectSum * effectiveRowHeight
      let rowHeight = effectiveRowHeight

      if (!isLastRow && rawRowWidthUnits + gapsTotal > effectiveWidth) {
        rowHeight = (effectiveWidth - gapsTotal) / rowAspectSum
      } else if (!isLastRow && rawRowWidthUnits + gapsTotal < effectiveWidth * 0.95) {
        rowHeight = Math.min(effectiveRowHeight * 1.5, (effectiveWidth - gapsTotal) / rowAspectSum)
      }

      let x = 0
      const top = boxes.length === 0 ? 0 : boxes[boxes.length - 1].top + boxes[boxes.length - 1].height + rowSpacing

      row.forEach((r, i) => {
        const w = Math.round(r.aspect * rowHeight)
        const h = Math.round(rowHeight)
        boxes.push({ left: x, top, width: w, height: h, index: r.index })
        x += w + rowGap
      })

      row = []
      rowAspectSum = 0
    }

    items.forEach((it, idx) => {
      const aspect = it.width / it.height
      row.push({ index: idx, aspect })
      rowAspectSum += aspect

      const gapsTotal = rowGap * (row.length - 1)
      const widthIfAtTarget = rowAspectSum * effectiveRowHeight + gapsTotal
      if (widthIfAtTarget >= effectiveWidth) {
        flushRow(false)
      }
    })

    // Last row
    flushRow(true)
    return boxes
  }, [containerWidth, items, effectiveRowHeight, rowSpacing, gap])

  const totalHeight = useMemo(() => {
    if (layout.length === 0) return 0
    const last = layout[layout.length - 1]
    return last.top + last.height
  }, [layout])

  const clickHandler = useCallback(
    (i: number) => () => {
      onItemClick?.(i)
    },
    [onItemClick]
  )

  return (
    <div ref={containerRef} className="relative" style={{ height: totalHeight }}>
      {layout.map((b) => {
        const it = items[b.index]
        return (
          <button
            key={`${b.index}-${it.src}`}
            aria-label={it.alt || "Open image"}
            className="group absolute overflow-hidden rounded-2xl shadow-sm hover:shadow-md transition-shadow focus:outline-none focus:ring-2 focus:ring-sage-green/60"
            style={{ left: b.left, top: b.top, width: b.width, height: b.height }}
            onClick={clickHandler(b.index)}
          >
            <div className="relative w-full h-full">
              <Image
                src={it.src}
                alt={it.alt || ""}
                fill
                className="object-cover will-change-transform transition-transform duration-500 group-hover:scale-[1.03]"
                sizes={sizes}
                quality={quality}
                priority={false}
              />
            </div>
          </button>
        )
      })}
    </div>
  )
}


