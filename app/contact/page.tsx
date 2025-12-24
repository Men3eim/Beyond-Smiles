"use client"

import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { FadeInWhenVisible } from "@/components/fade-in-when-visible"
import { StaggerContainer, StaggerItem } from "@/components/stagger-animation"
import Link from "next/link"
import { useState } from "react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  })
  const [countryCode, setCountryCode] = useState("+20")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      // Using Web3Forms - Free forever, no limits!
      // Get your access key from https://web3forms.com/
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: "8cbaf783-1759-459e-b13c-88d04a120c48", // Replace with your key from web3forms.com
          name: formData.name,
          phone: `${countryCode}${formData.phone}`,
          message: formData.message || "No additional message provided",
          subject: "New Callback Request from Beyond Smiles Website",
        }),
      })

      const result = await response.json()

      if (result.success) {
        setSubmitStatus("success")
        setFormData({ name: "", phone: "", message: "" })
      } else {
        setSubmitStatus("error")
      }
    } catch (error) {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    
    // For phone field, only allow numbers
    if (name === "phone") {
      const numericValue = value.replace(/\D/g, "")
      setFormData({
        ...formData,
        [name]: numericValue,
      })
    } else {
      setFormData({
        ...formData,
        [name]: value,
      })
    }
  }

  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section */}
      <section className="relative px-6 py-24 md:py-32 bg-gradient-to-br from-light-grey via-white to-mint-green/20">
        <div className="max-w-7xl mx-auto text-center">
          <FadeInWhenVisible direction="up">
            <h1 className="font-serif text-5xl md:text-6xl text-sage-green mb-6">
              Contact <span className="italic text-sage-green/80">Us</span>
            </h1>
          </FadeInWhenVisible>
          <FadeInWhenVisible direction="up" delay={0.2}>
            <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
              Have a question or want to book an appointment? Reach out to us! We're here to help you achieve your perfect
              smile.
            </p>
          </FadeInWhenVisible>
        </div>
      </section>

      {/* Callback Request Form */}
      <section className="px-6 py-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mx-auto">
            <FadeInWhenVisible direction="up">
              <h2 className="font-serif text-4xl text-sage-green mb-4 text-center">
                Request a <span className="italic text-sage-green/80">Callback</span>
              </h2>
              <p className="text-gray-600 text-center mb-8">
                Fill out the form below and we'll call you back to schedule your appointment
              </p>

              <Card className="p-8 border-sage-green/20 bg-white shadow-lg">
                <form onSubmit={handleSubmit} className="space-y-6">
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
                        <option value="+965">🇰🇼 +965</option>
                        <option value="+974">🇶🇦 +974</option>
                        <option value="+968">🇴🇲 +968</option>
                        <option value="+962">🇯🇴 +962</option>
                        <option value="+961">🇱🇧 +961</option>
                        <option value="+212">🇲🇦 +212</option>
                        <option value="+213">🇩🇿 +213</option>
                        <option value="+216">🇹🇳 +216</option>
                        <option value="+249">🇸🇩 +249</option>
                        <option value="+218">🇱🇾 +218</option>
                        <option value="+90">🇹🇷 +90</option>
                        <option value="+33">🇫🇷 +33</option>
                        <option value="+49">🇩🇪 +49</option>
                        <option value="+39">🇮🇹 +39</option>
                        <option value="+34">🇪🇸 +34</option>
                        <option value="+86">🇨🇳 +86</option>
                        <option value="+91">🇮🇳 +91</option>
                        <option value="+81">🇯🇵 +81</option>
                        <option value="+82">🇰🇷 +82</option>
                        <option value="+61">🇦🇺 +61</option>
                        <option value="+7">🇷🇺 +7</option>
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
                    <p className="text-xs text-gray-500 mt-1">
                      Numbers only - Format: {countryCode} {formData.phone || "1234567890"}
                    </p>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-sage-green mb-2">
                      Message (Optional)
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 border border-sage-green/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-sage-green/50 focus:border-transparent transition-all resize-none"
                      placeholder="Tell us about your dental needs..."
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-sage-green hover:bg-sage-green/90 text-white py-3 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Sending..." : "Request Callback"}
                  </Button>

                  {submitStatus === "success" && (
                    <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-800 text-center">
                      ✓ Thank you! We'll call you back soon.
                    </div>
                  )}

                  {submitStatus === "error" && (
                    <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-800 text-center">
                      ✗ Something went wrong. Please call us directly.
                    </div>
                  )}
                </form>
              </Card>
            </FadeInWhenVisible>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="px-6 py-20 bg-gradient-to-br from-sage-green/5 to-mint-green/10">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl mx-auto">
            {/* Contact Details */}
            <FadeInWhenVisible direction="up">
              <h2 className="font-serif text-4xl text-sage-green mb-8 text-center">
                Get in <span className="italic text-sage-green/80">Touch</span>
              </h2>

              <div className="space-y-8">
                <Card className="p-6 border-sage-green/20">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-sage-green/10 rounded-xl flex items-center justify-center">
                      <span className="text-sage-green text-xl">📍</span>
                    </div>
                    <div>
                      <h3 className="font-serif text-lg text-sage-green mb-2">Location</h3>
                      <p className="text-gray-600">
                        New Giza, Health Park, Meditown
                        <br />
                        Building 1, Floor 2, Clinic 24
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 border-sage-green/20">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-sage-green/10 rounded-xl flex items-center justify-center">
                      <span className="text-sage-green text-xl">📞</span>
                    </div>
                    <div>
                      <h3 className="font-serif text-lg text-sage-green mb-2">Phone Numbers</h3>
                      <p className="text-gray-600">
                        +201289107773
                        <br />
                        +201109721677
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 border-sage-green/20">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-sage-green/10 rounded-xl flex items-center justify-center">
                      <span className="text-sage-green text-xl">🕒</span>
                    </div>
                    <div>
                      <h3 className="font-serif text-lg text-sage-green mb-2">Working Hours</h3>
                      <p className="text-gray-600">
                        Monday - Thursday: 11:00 AM - 7:00 PM
                        <br />
                        Friday: Closed
                        <br />
                        Saturday - Sunday: 11:00 AM - 7:00 PM
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </FadeInWhenVisible>

          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="px-6 py-20 bg-gradient-to-br from-mint-green/10 to-sage-green/5">
        <div className="max-w-7xl mx-auto text-center">
          <FadeInWhenVisible>
            <h2 className="font-serif text-4xl text-sage-green mb-6">
              Find <span className="italic text-sage-green/80">Us</span>
            </h2>
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.5!2d31.066055996654775!3d29.989877676120393!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjnCsDU5JzIzLjYiTiAzMcKwMDMnNTcuOCJF!5e0!3m2!1sen!2seg!4v1234567890"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Beyond Smiles Dental Clinic Location"
                className="w-full h-96"
              ></iframe>
            </div>
            <p className="text-sm text-dark-grey mt-4 font-neutral-regular">
              Click and drag to explore our location
            </p>
          </FadeInWhenVisible>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20 bg-gradient-to-br from-sage-green/5 to-mint-green/10">
        <div className="max-w-7xl mx-auto text-center">
          <FadeInWhenVisible>
            <h2 className="font-serif text-4xl md:text-5xl text-sage-green mb-6">
              Meet Our{" "}
              <span className="italic text-sage-green/80">Expert Team</span>
            </h2>
            <p className="text-xl text-dark-grey leading-relaxed max-w-4xl mx-auto mb-12 font-neutral-medium">
              Get to know the specialists who will be taking care of your dental health and smile transformation.
            </p>
            <Link href="/team">
              <Button
                size="lg"
                className="bg-sage-green font-neutral-medium cursor-pointer hover:bg-sage-green/90 text-white px-8"
              >
                Meet Our Team
              </Button>
            </Link>
          </FadeInWhenVisible>
        </div>
      </section>
    </div>
  )
}