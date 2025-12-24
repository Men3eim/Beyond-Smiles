"use client";

import { useState, useEffect } from "react";
import { Video, Zap } from "lucide-react";

interface PremiumFeatureBadgesProps {
  onOpenModal: (feature: "virtual" | "sameday") => void;
}

export function PremiumFeatureBadges({ onOpenModal }: PremiumFeatureBadgesProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          
          // Collapse badges when scrolled down
          setIsScrolled(currentScrollY > 100);
          
          // Hide badges when scrolling down, show when scrolling up
          if (currentScrollY > lastScrollY && currentScrollY > 200) {
            setIsVisible(false);
          } else {
            setIsVisible(true);
          }
          
          setLastScrollY(currentScrollY);
          ticking = false;
        });

        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div
      className={`
        fixed top-24 md:top-28 right-4 md:right-6 z-40
        transition-all duration-300 ease-out
        ${isVisible ? "translate-x-0 opacity-100" : "translate-x-[200%] opacity-0"}
      `}
    >
      <div className="flex flex-col gap-2">
        {/* Virtual Consultation Badge */}
        <button
          onClick={() => onOpenModal("virtual")}
          className={`
            group relative
            flex items-center gap-3
            bg-gradient-to-r from-mint-green/90 to-mint-green/80
            hover:from-mint-green hover:to-mint-green/90
            text-sage-green
            rounded-full shadow-lg hover:shadow-xl
            transition-all duration-300
            animate-gentle-bounce
            ${isScrolled ? "px-3 py-3" : "px-4 py-3 md:px-5"}
            hover:scale-105
            backdrop-blur-sm
            border border-mint-green/50
          `}
          style={{
            animationDelay: '0s',
            animationDuration: '3s'
          }}
          aria-label="Virtual Free Consultation"
        >
          <div className="w-8 h-8 md:w-9 md:h-9 bg-white/90 rounded-full flex items-center justify-center flex-shrink-0">
            <Video className="w-4 h-4 md:w-5 md:h-5 text-sage-green" />
          </div>
          
          <span
            className={`
              font-neutral-bold text-xs md:text-sm whitespace-nowrap
              transition-all duration-300 overflow-hidden
              ${isScrolled ? "max-w-0 opacity-0" : "max-w-[200px] opacity-100"}
            `}
          >
            FREE Virtual Consult
          </span>

          {/* Free badge - always visible */}
          <div className={`
            absolute -top-1 -right-1
            bg-sage-green text-white
            text-[10px] font-neutral-bold
            px-1.5 py-0.5 rounded-full
            shadow-md
            animate-pulse
          `}>
            FREE
          </div>

          {/* Tooltip on hover for collapsed state */}
          {isScrolled && (
            <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-sage-green text-white px-3 py-2 rounded-lg text-sm font-neutral-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none shadow-lg">
              FREE Virtual Consult
              <div className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-sage-green"></div>
            </div>
          )}
        </button>

        {/* Same-Day Service Badge */}
        <button
          onClick={() => onOpenModal("sameday")}
          className={`
            group relative
            flex items-center gap-3
            bg-gradient-to-r from-sage-green to-sage-green/90
            hover:from-sage-green/90 hover:to-sage-green
            text-white
            rounded-full shadow-lg hover:shadow-xl
            transition-all duration-300
            animate-gentle-bounce
            ${isScrolled ? "px-3 py-3" : "px-4 py-3 md:px-5"}
            hover:scale-105
            backdrop-blur-sm
          `}
          style={{
            animationDelay: '1.5s',
            animationDuration: '3s'
          }}
          aria-label="Same-Day Crown & Implants"
        >
          <div className="w-8 h-8 md:w-9 md:h-9 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
            <Zap className="w-4 h-4 md:w-5 md:h-5 text-white" />
          </div>
          
          <span
            className={`
              font-neutral-bold text-xs md:text-sm whitespace-nowrap
              transition-all duration-300 overflow-hidden
              ${isScrolled ? "max-w-0 opacity-0" : "max-w-[200px] opacity-100"}
            `}
          >
            Same-Day Service
          </span>

          {/* Same day badge - always visible */}
          <div className={`
            absolute -top-1 -right-1
            bg-mint-green text-sage-green
            text-[10px] font-neutral-bold
            px-1.5 py-0.5 rounded-full
            shadow-md
            animate-pulse
          `}>
            TODAY
          </div>

          {/* Tooltip on hover for collapsed state */}
          {isScrolled && (
            <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-sage-green text-white px-3 py-2 rounded-lg text-sm font-neutral-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none shadow-lg">
              Same-Day Crown & Implants
              <div className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-sage-green"></div>
            </div>
          )}
        </button>
      </div>
    </div>
  );
}


