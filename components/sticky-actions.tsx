"use client";

import { useState } from "react";
import { Phone, MessageCircle, X, ChevronUp } from "lucide-react";

export function StickyActions() {
  const [isExpanded, setIsExpanded] = useState(false);

  const phoneNumbers = [
    { number: "+201289107773", label: "Primary" },
    { number: "+201109721677", label: "Secondary" }
  ];

  const handleWhatsApp = (number: string) => {
    const message = "Hello! I'm interested in booking an appointment at Beyond Smiles. Could you please provide me with more information?";
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${number.replace('+', '')}?text=${encodedMessage}`, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Main Action Buttons */}
      <div className="flex flex-col gap-3">
        {/* WhatsApp Button */}
        <button
          onClick={() => handleWhatsApp("+201289107773")}
          className="group relative bg-gradient-to-br from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white p-4 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 hover:shadow-green-500/25 animate-float"
          aria-label="Contact us on WhatsApp"
        >
          <MessageCircle className="w-6 h-6" />
          
          {/* Tooltip */}
          <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-sage-green text-white px-3 py-2 rounded-lg text-sm font-neutral-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none shadow-lg">
            WhatsApp Us
            <div className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-sage-green"></div>
          </div>
        </button>

        {/* Call Button */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="group relative bg-gradient-to-br from-sage-green to-sage-green/90 hover:from-sage-green/90 hover:to-sage-green/80 text-white p-4 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 hover:shadow-sage-green/25 animate-pulse-glow"
          aria-label="Call us"
        >
          {isExpanded ? (
            <X className="w-6 h-6" />
          ) : (
            <Phone className="w-6 h-6" />
          )}
          
          {/* Tooltip */}
          <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-sage-green text-white px-3 py-2 rounded-lg text-sm font-neutral-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none shadow-lg">
            {isExpanded ? "Close" : "Call Us"}
            <div className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-sage-green"></div>
          </div>
        </button>
      </div>

      {/* Expanded Call Options */}
      {isExpanded && (
        <div className="absolute bottom-full mb-3 right-0 bg-white rounded-2xl shadow-2xl border border-sage-green/20 overflow-hidden min-w-[280px] animate-slide-in-bottom">
          {/* Header */}
          <div className="bg-gradient-to-r from-sage-green to-sage-green/90 text-white px-4 py-3">
            <h3 className="font-serif text-lg font-medium">Call Us Now</h3>
            <p className="text-sm opacity-90">Choose your preferred number</p>
          </div>

          {/* Phone Numbers */}
          <div className="p-4 space-y-3">
            {phoneNumbers.map((phone, index) => (
              <div key={index} className="group">
                <a
                  href={`tel:${phone.number}`}
                  className="w-full flex items-center justify-between p-3 rounded-xl bg-light-grey hover:bg-sage-green/10 transition-all duration-300 group-hover:shadow-md cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-sage-green/20 rounded-full flex items-center justify-center group-hover:bg-sage-green/30 transition-colors duration-300">
                      <Phone className="w-5 h-5 text-sage-green" />
                    </div>
                    <div className="text-left">
                      <p className="font-neutral-medium text-dark-grey group-hover:text-sage-green transition-colors duration-300">
                        {phone.number}
                      </p>
                      <p className="text-sm text-neutral-grey">{phone.label} Number</p>
                    </div>
                  </div>
                  <ChevronUp className="w-4 h-4 text-neutral-grey group-hover:text-sage-green transition-colors duration-300 rotate-45" />
                </a>
              </div>
            ))}

            {/* WhatsApp Option */}
            <div className="pt-2 border-t border-light-grey">
              <button
                onClick={() => handleWhatsApp("+201289107773")}
                className="w-full flex items-center gap-3 p-3 rounded-xl bg-green-50 hover:bg-green-100 transition-all duration-300 group"
              >
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center group-hover:bg-green-600 transition-colors duration-300">
                  <MessageCircle className="w-5 h-5 text-white" />
                </div>
                <div className="text-left">
                  <p className="font-neutral-medium text-dark-grey group-hover:text-green-600 transition-colors duration-300">
                    WhatsApp Chat
                  </p>
                  <p className="text-sm text-neutral-grey">Quick message</p>
                </div>
              </button>
            </div>
          </div>

          {/* Footer */}
          <div className="px-4 py-3 bg-light-grey/50 border-t border-light-grey">
            <p className="text-xs text-neutral-grey text-center">
              Available during working hours
            </p>
          </div>
        </div>
      )}

      {/* Backdrop for mobile */}
      {isExpanded && (
        <div 
          className="fixed inset-0 bg-black/20 z-40 md:hidden"
          onClick={() => setIsExpanded(false)}
        />
      )}
    </div>
  );
}
