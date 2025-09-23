import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Logo } from "@/components/logo"
import { FooterLogo } from "./footerLogo"
import { Facebook, Instagram, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-sage-green text-white">
      {/* Main Footer Content */}
      <div className="px-4 sm:px-6 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Company Info */}
            <div className="flex flex-col justify-between space-y-6 sm:space-y-8 lg:col-span-1">
              
              <div>
                <FooterLogo size="sm" />
              </div>
              {/* Social Media Links */}
              <div className="flex gap-3 sm:gap-4">
                <Button
                  size="sm"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white hover:text-sage-green bg-transparent w-10 h-10 p-0 transition-all duration-300"
                >
                  <span className="text-lg"><Phone/></span>
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white hover:text-sage-green bg-transparent w-10 h-10 p-0 transition-all duration-300"
                >
                  <span className="text-lg"><Instagram/></span>
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white hover:text-sage-green bg-transparent w-10 h-10 p-0 transition-all duration-300"
                >
                  <span className="text-lg"><Facebook/></span>
                </Button>
              </div>
            </div>

            {/* Quick Links */}
            <div className="mt-8 sm:mt-0">
              <h3 className="font-serif text-lg sm:text-xl mb-4 sm:mb-6">Quick Links</h3>
              <ul className="space-y-2 sm:space-y-3">
                <li>
                  <Link href="/" className="text-white/90 hover:text-white transition-colors text-sm sm:text-base">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-white/90 hover:text-white transition-colors text-sm sm:text-base">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-white/90 hover:text-white transition-colors text-sm sm:text-base">
                    Our Services
                  </Link>
                </li>
                <li>
                  <Link href="/team" className="text-white/90 hover:text-white transition-colors text-sm sm:text-base">
                    Our Team
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-white/90 hover:text-white transition-colors text-sm sm:text-base">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div className="mt-8 sm:mt-0">
              <h3 className="font-serif text-lg sm:text-xl mb-4 sm:mb-6">Our Services</h3>
              <ul className="space-y-2 sm:space-y-3">
                <li>
                  <Link href="/services" className="text-white/90 hover:text-white transition-colors text-sm sm:text-base">
                    General Dentistry
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-white/90 hover:text-white transition-colors text-sm sm:text-base">
                    Orthodontics
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-white/90 hover:text-white transition-colors text-sm sm:text-base">
                    Cosmetic Dentistry
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-white/90 hover:text-white transition-colors text-sm sm:text-base">
                    Oral Surgery
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-white/90 hover:text-white transition-colors text-sm sm:text-base">
                    Endodontics
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="mt-8 sm:mt-0 sm:col-span-2 lg:col-span-1">
              <h3 className="font-serif text-lg sm:text-xl mb-4 sm:mb-6">Contact Info</h3>
              <div className="space-y-3 sm:space-y-4">
                <div>
                  <p className="text-white mb-1 text-sm sm:text-base font-medium">📍 Location</p>
                  <p className="text-xs sm:text-sm text-white/90 leading-relaxed">
                    New Giza, Health Park, Meditown
                    <br />
                    Building 1, Floor 2, Clinic 24
                  </p>
                </div>
                <div>
                  <p className="text-white mb-1 text-sm sm:text-base font-medium">📞 Phone</p>
                  <div className="text-xs sm:text-sm text-white/90 space-y-1">
                    <p>+201289107773</p>
                    <p>+201109721677</p>
                  </div>
                </div>
                <div>
                  <p className="text-white mb-1 text-sm sm:text-base font-medium">🕒 Working Hours</p>
                  <div className="text-xs sm:text-sm text-white/90 leading-relaxed">
                    <p>Monday - Thursday: 11:00 AM - 7:00 PM</p>
                    <p>Friday: Closed</p>
                    <p>Saturday - Sunday: 11:00 AM - 7:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/20 px-4 sm:px-6 py-4 sm:py-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
            <p className="text-white/90 text-xs sm:text-sm text-center sm:text-left">
              © 2025 Beyond Smiles. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center sm:justify-end gap-4 sm:gap-6 text-xs sm:text-sm">
              <Link href="#" className="text-white/90 hover:text-white transition-colors whitespace-nowrap">
                Privacy Policy
              </Link>
              <Link href="#" className="text-white/90 hover:text-white transition-colors whitespace-nowrap">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-white/90 hover:text-white transition-colors whitespace-nowrap">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
