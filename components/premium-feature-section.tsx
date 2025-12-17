"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { Video, Zap, CheckCircle, Phone, MessageCircle, Calendar } from "lucide-react";
import { FadeInWhenVisible } from "./fade-in-when-visible";

interface PremiumFeatureSectionProps {
  onOpenModal: (feature: "virtual" | "sameday") => void;
}

export function PremiumFeatureSection({ onOpenModal }: PremiumFeatureSectionProps) {
  const [hoveredPanel, setHoveredPanel] = useState<"virtual" | "sameday" | null>(null);

  const handleWhatsApp = (feature: string) => {
    const message = `Hi! I'm interested in ${feature}. Can you help me schedule?`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/201289107773?text=${encodedMessage}`, '_blank');
  };

  const handleCall = () => {
    window.location.href = 'tel:+201289107773';
  };

  return (
    <section className="relative px-6 py-20 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <FadeInWhenVisible className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-sage-green/10 px-4 py-2 rounded-full mb-6">
            <div className="w-2 h-2 bg-sage-green rounded-full animate-pulse"></div>
            <span className="text-sage-green font-neutral-medium text-sm">Exclusive Offers</span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl text-sage-green mb-4">
            Premium Services That{" "}
            <span className="italic text-sage-green/80">Set Us Apart</span>
          </h2>
          <p className="text-lg text-dark-grey max-w-3xl mx-auto font-neutral-medium">
            Experience convenience and excellence with our exclusive offerings
          </p>
        </FadeInWhenVisible>

        {/* Split Screen Container */}
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Virtual Free Consultation Panel */}
          <FadeInWhenVisible direction="left" delay={0.2}>
            <div
              className={`
                relative group overflow-hidden rounded-3xl
                bg-gradient-to-br from-mint-green/30 via-mint-green/20 to-white
                border-2 border-mint-green/30
                transition-all duration-500 ease-out
                hover:scale-[1.02] hover:shadow-2xl hover:border-mint-green/50
                ${hoveredPanel === "virtual" ? "scale-[1.02] shadow-2xl" : ""}
              `}
              onMouseEnter={() => setHoveredPanel("virtual")}
              onMouseLeave={() => setHoveredPanel(null)}
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-mint-green/10 opacity-50"></div>
              
              {/* Content */}
              <div className="relative p-8 md:p-10 lg:p-12 min-h-[500px] flex flex-col">
                {/* Icon & Badge */}
                <div className="flex items-start justify-between mb-6">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-mint-green/50 rounded-2xl flex items-center justify-center group-hover:bg-mint-green/70 transition-colors duration-300">
                    <Video className="w-8 h-8 md:w-10 md:h-10 text-sage-green animate-pulse" />
                  </div>
                  <div className="bg-sage-green text-white px-4 py-2 rounded-full font-neutral-bold text-sm animate-pulse shadow-lg">
                    100% FREE
                  </div>
                </div>

                {/* Headline */}
                <h3 className="font-serif text-3xl md:text-4xl text-sage-green mb-3">
                  Virtual Free Consultation
                </h3>
                <p className="text-lg text-dark-grey font-neutral-medium mb-6">
                  Expert Advice From Home
                </p>

                {/* Benefits */}
                <ul className="space-y-3 mb-8 flex-grow">
                  {[
                    "Connect with our specialists via video call",
                    "Get personalized treatment recommendations",
                    "Review your smile goals in comfort",
                    "Zero obligation, completely FREE"
                  ].map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-sage-green flex-shrink-0 mt-0.5" />
                      <span className="text-dark-grey font-neutral-regular">{benefit}</span>
                    </li>
                  ))}
                </ul>

                {/* CTAs */}
                <div className="space-y-3">
                  <Button
                    onClick={() => onOpenModal("virtual")}
                    className="w-full bg-sage-green hover:bg-sage-green/90 text-white py-6 text-lg font-neutral-medium shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <Calendar className="w-5 h-5 mr-2" />
                    Schedule My Free Consult
                  </Button>
                  <div className="grid grid-cols-2 gap-3">
                    <Button
                      onClick={handleCall}
                      variant="outline"
                      className="border-sage-green text-sage-green hover:bg-sage-green hover:text-white font-neutral-medium"
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      Call Now
                    </Button>
                    <Button
                      onClick={() => handleWhatsApp("Virtual Free Consultation")}
                      variant="outline"
                      className="border-green-500 text-green-600 hover:bg-green-500 hover:text-white font-neutral-medium"
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      WhatsApp
                    </Button>
                  </div>
                </div>

                {/* Hover Indicator */}
                <div className={`
                  absolute bottom-4 left-1/2 -translate-x-1/2
                  text-sage-green text-sm font-neutral-medium
                  transition-opacity duration-300
                  ${hoveredPanel === "virtual" ? "opacity-100" : "opacity-0"}
                `}>
                  Click to learn more →
                </div>
              </div>
            </div>
          </FadeInWhenVisible>

          {/* Same-Day Crown/Implants Panel */}
          <FadeInWhenVisible direction="right" delay={0.2}>
            <div
              className={`
                relative group overflow-hidden rounded-3xl
                bg-gradient-to-br from-sage-green/20 via-sage-green/10 to-light-grey
                border-2 border-sage-green/30
                transition-all duration-500 ease-out
                hover:scale-[1.02] hover:shadow-2xl hover:border-sage-green/50
                ${hoveredPanel === "sameday" ? "scale-[1.02] shadow-2xl" : ""}
              `}
              onMouseEnter={() => setHoveredPanel("sameday")}
              onMouseLeave={() => setHoveredPanel(null)}
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-sage-green/10 opacity-50"></div>
              
              {/* Content */}
              <div className="relative p-8 md:p-10 lg:p-12 min-h-[500px] flex flex-col">
                {/* Icon & Badge */}
                <div className="flex items-start justify-between mb-6">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-sage-green/30 rounded-2xl flex items-center justify-center group-hover:bg-sage-green/50 transition-colors duration-300">
                    <Zap className="w-8 h-8 md:w-10 md:h-10 text-sage-green animate-pulse" />
                  </div>
                  <div className="bg-gradient-to-r from-sage-green to-sage-green/80 text-white px-4 py-2 rounded-full font-neutral-bold text-sm animate-pulse shadow-lg">
                    SAME DAY
                  </div>
                </div>

                {/* Headline */}
                <h3 className="font-serif text-3xl md:text-4xl text-sage-green mb-3">
                  One Visit Crown & Single Visit Implants
                </h3>
                <p className="text-lg text-dark-grey font-neutral-medium mb-6">
                  Your Smile, Transformed Today
                </p>

                {/* Benefits */}
                <ul className="space-y-3 mb-8 flex-grow">
                  {[
                    "Complete crown placement in ONE appointment",
                    "Same-day dental implants available",
                    "Advanced CEREC technology",
                    "Walk in with problem, leave with solution"
                  ].map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-sage-green flex-shrink-0 mt-0.5" />
                      <span className="text-dark-grey font-neutral-regular">{benefit}</span>
                    </li>
                  ))}
                </ul>

                {/* CTAs */}
                <div className="space-y-3">
                  <Button
                    onClick={() => onOpenModal("sameday")}
                    className="w-full bg-sage-green hover:bg-sage-green/90 text-white py-6 text-lg font-neutral-medium shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <Zap className="w-5 h-5 mr-2" />
                    Book Same-Day Treatment
                  </Button>
                  <div className="grid grid-cols-2 gap-3">
                    <Button
                      onClick={handleCall}
                      variant="outline"
                      className="border-sage-green text-sage-green hover:bg-sage-green hover:text-white font-neutral-medium"
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      Call Now
                    </Button>
                    <Button
                      onClick={() => handleWhatsApp("Same-Day Crown & Implants")}
                      variant="outline"
                      className="border-green-500 text-green-600 hover:bg-green-500 hover:text-white font-neutral-medium"
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      WhatsApp
                    </Button>
                  </div>
                </div>

                {/* Hover Indicator */}
                <div className={`
                  absolute bottom-4 left-1/2 -translate-x-1/2
                  text-sage-green text-sm font-neutral-medium
                  transition-opacity duration-300
                  ${hoveredPanel === "sameday" ? "opacity-100" : "opacity-0"}
                `}>
                  Click to learn more →
                </div>
              </div>
            </div>
          </FadeInWhenVisible>
        </div>

        {/* Bottom Trust Indicators */}
        <FadeInWhenVisible delay={0.4} className="mt-12 text-center">
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
              <CheckCircle className="w-4 h-4 text-sage-green" />
              <span className="font-neutral-medium text-dark-grey">5000+ Happy Patients</span>
            </div>
            <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
              <CheckCircle className="w-4 h-4 text-sage-green" />
              <span className="font-neutral-medium text-dark-grey">15+ Years Experience</span>
            </div>
            <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
              <CheckCircle className="w-4 h-4 text-sage-green" />
              <span className="font-neutral-medium text-dark-grey">Award-Winning Team</span>
            </div>
          </div>
        </FadeInWhenVisible>
      </div>
    </section>
  );
}
