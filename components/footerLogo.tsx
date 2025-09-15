import Image from "next/image"

interface FooterLogoProps {
  className?: string
  showIcon?: boolean
  size?: "sm" | "md" | "lg" | "xl"
}

export function FooterLogo({ className = "", showIcon = true, size = "md" }: FooterLogoProps) {
  const sizeClasses = {
    sm: { width: 120, height: 36 },
    md: { width: 160, height: 48 }, 
    lg: { width: 200, height: 60 },
    xl: { width: 240, height: 72 }
  }

  const dimensions = sizeClasses[size]

  return (
    <div className={`${className}`}>
      <Image
        src="/Beyond Smiles - Wordmark-03.svg"
        alt="Beyond Smiles - Premium Dental Care"
        width={dimensions.width}
        height={dimensions.height}
        className="object-contain"
        priority
      />
    </div>
  )
}
