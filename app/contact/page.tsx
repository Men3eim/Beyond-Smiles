import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { FadeInWhenVisible } from "@/components/fade-in-when-visible"
import { StaggerContainer, StaggerItem } from "@/components/stagger-animation"
import Link from "next/link"

export default function ContactPage() {
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

      {/* Contact Information */}
      <section className="px-6 py-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Details */}
            <FadeInWhenVisible direction="left">
              <h2 className="font-serif text-4xl text-sage-green mb-8">
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
                        Monday - Friday: 9:00 AM - 8:00 PM
                        <br />
                        Saturday: 9:00 AM - 6:00 PM
                        <br />
                        Sunday: 10:00 AM - 4:00 PM
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </FadeInWhenVisible>

            {/* Contact Form */}
            <FadeInWhenVisible direction="right" delay={0.2}>
              <Card className="p-8 border-sage-green/20">
                <h3 className="font-serif text-2xl text-sage-green mb-6">Send us a Message</h3>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sage-green/20 focus:border-sage-green"
                        placeholder="Your first name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sage-green/20 focus:border-sage-green"
                        placeholder="Your last name"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sage-green/20 focus:border-sage-green"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sage-green/20 focus:border-sage-green"
                      placeholder="Your phone number"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Service Interest</label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sage-green/20 focus:border-sage-green">
                      <option>Select a service</option>
                      <option>General Dentistry</option>
                      <option>Orthodontics</option>
                      <option>Cosmetic Dentistry</option>
                      <option>Oral Surgery</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sage-green/20 focus:border-sage-green"
                      placeholder="Tell us about your needs..."
                    ></textarea>
                  </div>

                  <Button className="w-full font-neutral-medium cursor-pointer bg-sage-green hover:bg-sage-green/90 text-white py-3">Send Message</Button>
                </form>
              </Card>
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
            <div className="bg-gray-200 rounded-2xl h-96 flex items-center justify-center">
              <p className="text-gray-500">Interactive Map Coming Soon</p>
            </div>
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
