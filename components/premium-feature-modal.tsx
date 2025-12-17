"use client";

import { useState, useEffect } from "react";
import { X, Phone, MessageCircle, Calendar, CheckCircle, Video, Zap, Star } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";

interface PremiumFeatureModalProps {
  isOpen: boolean;
  onClose: () => void;
  feature: "virtual" | "sameday" | null;
}

export function PremiumFeatureModal({ isOpen, onClose, feature }: PremiumFeatureModalProps) {
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [showCallOptions, setShowCallOptions] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });
  const [countryCode, setCountryCode] = useState("+20");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  // Reset form when modal opens/closes
  useEffect(() => {
    if (!isOpen) {
      setShowBookingForm(false);
      setShowCallOptions(false);
      setSubmitStatus("idle");
    }
  }, [isOpen]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Handle ESC key to close modal
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [isOpen, onClose]);

  const handleWhatsApp = () => {
    const featureName = feature === "virtual" ? "Virtual Free Consultation" : "Same-Day Crown & Implants";
    const message = `Hi! I'm interested in ${featureName}. Can you help me schedule?`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/201289107773?text=${encodedMessage}`, '_blank');
  };

  const handleCall = (number: string) => {
    window.location.href = `tel:${number}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    const featureName = feature === "virtual" ? "Virtual Free Consultation" : "Same-Day Crown & Implants";

    try {
      // Submit to our secure API route (which handles Web3Forms server-side)
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          phone: `${countryCode}${formData.phone}`,
          message: `${featureName} Request: ${formData.message || "No additional message provided"}`,
          subject: `${featureName} - New Booking Request from Beyond Smiles Website`,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus("success");
        setFormData({ name: "", phone: "", message: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    if (name === "phone") {
      const numericValue = value.replace(/\D/g, "");
      setFormData({
        ...formData,
        [name]: numericValue,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  if (!isOpen || !feature) return null;

  const featureConfig = {
    virtual: {
      title: "Virtual Free Consultation",
      subtitle: "Expert Advice From Home",
      icon: Video,
      color: "mint-green",
      benefits: [
        "Connect with our specialists via video call",
        "Get personalized treatment recommendations",
        "Review your smile goals in comfort",
        "Zero obligation, completely FREE"
      ],
      badge: "100% FREE"
    },
    sameday: {
      title: "One Visit Crown & Single Visit Implants",
      subtitle: "Your Smile, Transformed Today",
      icon: Zap,
      color: "sage-green",
      benefits: [
        "Complete crown placement in ONE appointment",
        "Same-day dental implants available",
        "Advanced CEREC technology",
        "Walk in with problem, leave with solution"
      ],
      badge: "SAME DAY"
    }
  };

  const config = featureConfig[feature];
  const Icon = config.icon;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
      />

      {/* Modal Content */}
      <Card className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-2xl animate-slide-up">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5 text-gray-600" />
        </button>

        {/* Header */}
        <div className={`
          p-8 md:p-10
          ${feature === "virtual" ? "bg-gradient-to-br from-mint-green/30 to-mint-green/10" : "bg-gradient-to-br from-sage-green/20 to-sage-green/10"}
        `}>
          <div className="flex items-start gap-4 mb-4">
            <div className={`
              w-16 h-16 rounded-2xl flex items-center justify-center
              ${feature === "virtual" ? "bg-mint-green/50" : "bg-sage-green/30"}
            `}>
              <Icon className={`w-8 h-8 ${feature === "virtual" ? "text-sage-green" : "text-sage-green"}`} />
            </div>
            <div className="flex-1">
              <div className={`
                inline-block px-3 py-1 rounded-full text-xs font-neutral-bold mb-2
                ${feature === "virtual" ? "bg-sage-green text-white" : "bg-sage-green text-white"}
              `}>
                {config.badge}
              </div>
              <h2 className="font-serif text-3xl md:text-4xl text-sage-green mb-2">
                {config.title}
              </h2>
              <p className="text-lg text-dark-grey font-neutral-medium">
                {config.subtitle}
              </p>
            </div>
          </div>

          {/* Benefits */}
          <ul className="space-y-2 mb-6">
            {config.benefits.map((benefit, index) => (
              <li key={index} className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-sage-green flex-shrink-0 mt-0.5" />
                <span className="text-dark-grey font-neutral-regular">{benefit}</span>
              </li>
            ))}
          </ul>

          {/* Trust Indicators */}
          <div className="flex flex-wrap gap-3 text-xs">
            <div className="flex items-center gap-1 bg-white/80 px-3 py-1.5 rounded-full">
              <Star className="w-3 h-3 text-sage-green fill-sage-green" />
              <span className="font-neutral-medium text-dark-grey">5000+ Patients</span>
            </div>
            <div className="flex items-center gap-1 bg-white/80 px-3 py-1.5 rounded-full">
              <Star className="w-3 h-3 text-sage-green fill-sage-green" />
              <span className="font-neutral-medium text-dark-grey">15+ Years</span>
            </div>
            <div className="flex items-center gap-1 bg-white/80 px-3 py-1.5 rounded-full">
              <Star className="w-3 h-3 text-sage-green fill-sage-green" />
              <span className="font-neutral-medium text-dark-grey">Award-Winning</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-8 md:p-10">
          {!showBookingForm ? (
            <>
              <h3 className="font-serif text-2xl text-sage-green mb-4 text-center">
                How would you like to connect?
              </h3>
              <p className="text-center text-dark-grey mb-6 font-neutral-regular">
                Choose your preferred way to schedule your appointment
              </p>

              <div className="space-y-3">
                {/* Book Online Button */}
                <button
                  onClick={() => setShowBookingForm(true)}
                  className="w-full flex items-center justify-between p-5 rounded-xl bg-sage-green hover:bg-sage-green/90 text-white transition-all duration-300 group shadow-lg hover:shadow-xl"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                      <Calendar className="w-6 h-6" />
                    </div>
                    <div className="text-left">
                      <p className="font-neutral-bold text-lg">Book Online</p>
                      <p className="text-sm opacity-90">Quick & convenient</p>
                    </div>
                  </div>
                  <div className="text-2xl group-hover:translate-x-1 transition-transform">→</div>
                </button>

                {/* Call Now Button */}
                <button
                  onClick={() => setShowCallOptions(!showCallOptions)}
                  className="w-full flex items-center justify-between p-5 rounded-xl bg-white border-2 border-sage-green/20 hover:border-sage-green/40 hover:bg-sage-green/5 text-sage-green transition-all duration-300 group"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-sage-green/10 rounded-full flex items-center justify-center group-hover:bg-sage-green/20 transition-colors">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div className="text-left">
                      <p className="font-neutral-bold text-lg">Call Now</p>
                      <p className="text-sm text-dark-grey">Speak with our team</p>
                    </div>
                  </div>
                  <div className="text-2xl group-hover:translate-x-1 transition-transform">→</div>
                </button>

                {/* Call Options Dropdown */}
                {showCallOptions && (
                  <div className="pl-4 space-y-2 animate-slide-down">
                    <button
                      onClick={() => handleCall("+201289107773")}
                      className="w-full flex items-center gap-3 p-4 rounded-lg bg-light-grey hover:bg-sage-green/10 transition-colors text-left group"
                    >
                      <Phone className="w-5 h-5 text-sage-green" />
                      <span className="font-neutral-medium text-dark-grey group-hover:text-sage-green">+201289107773</span>
                    </button>
                    <button
                      onClick={() => handleCall("+201109721677")}
                      className="w-full flex items-center gap-3 p-4 rounded-lg bg-light-grey hover:bg-sage-green/10 transition-colors text-left group"
                    >
                      <Phone className="w-5 h-5 text-sage-green" />
                      <span className="font-neutral-medium text-dark-grey group-hover:text-sage-green">+201109721677</span>
                    </button>
                  </div>
                )}

                {/* WhatsApp Button */}
                <button
                  onClick={handleWhatsApp}
                  className="w-full flex items-center justify-between p-5 rounded-xl bg-green-50 border-2 border-green-200 hover:bg-green-100 text-green-700 transition-all duration-300 group"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                      <MessageCircle className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-left">
                      <p className="font-neutral-bold text-lg">WhatsApp Chat</p>
                      <p className="text-sm opacity-75">Instant messaging</p>
                    </div>
                  </div>
                  <div className="text-2xl group-hover:translate-x-1 transition-transform">→</div>
                </button>
              </div>
            </>
          ) : (
            <>
              {/* Booking Form */}
              <div className="mb-4">
                <button
                  onClick={() => {
                    setShowBookingForm(false);
                    setSubmitStatus("idle");
                  }}
                  className="flex items-center gap-2 text-sage-green hover:text-sage-green/80 font-neutral-medium transition-colors"
                >
                  ← Back to options
                </button>
              </div>

              <h3 className="font-serif text-2xl text-sage-green mb-4">
                Book Your Appointment
              </h3>
              <p className="text-dark-grey mb-6 font-neutral-regular">
                Fill out the form and we'll contact you to confirm your appointment
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-sage-green mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-sage-green/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-sage-green/50 focus:border-transparent transition-all"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-sage-green mb-2">
                    Phone Number *
                  </label>
                  <div className="flex gap-2">
                    <select
                      value={countryCode}
                      onChange={(e) => setCountryCode(e.target.value)}
                      className="px-3 py-3 border border-sage-green/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-sage-green/50 focus:border-transparent transition-all bg-white"
                    >
                      <option value="+20">🇪🇬 +20</option>
                      <option value="+1">🇺🇸 +1</option>
                      <option value="+44">🇬🇧 +44</option>
                      <option value="+971">🇦🇪 +971</option>
                      <option value="+966">🇸🇦 +966</option>
                    </select>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="flex-1 px-4 py-3 border border-sage-green/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-sage-green/50 focus:border-transparent transition-all"
                      placeholder="1234567890"
                      inputMode="numeric"
                      pattern="[0-9]*"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-sage-green mb-2">
                    Additional Information (Optional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={3}
                    className="w-full px-4 py-3 border border-sage-green/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-sage-green/50 focus:border-transparent transition-all resize-none"
                    placeholder="Tell us about your needs..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-sage-green hover:bg-sage-green/90 text-white py-3 text-lg disabled:opacity-50 disabled:cursor-not-allowed font-neutral-medium"
                >
                  {isSubmitting ? "Sending..." : "Submit Request"}
                </Button>

                {submitStatus === "success" && (
                  <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-800 text-center">
                    ✓ Thank you! We'll contact you shortly to confirm your appointment.
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-800 text-center">
                    ✗ Something went wrong. Please try calling us directly.
                  </div>
                )}
              </form>
            </>
          )}
        </div>
      </Card>
    </div>
  );
}
