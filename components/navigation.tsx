"use client";

import Link from "next/link";
import { useState } from "react";
import { Logo } from "./logo";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Services" },
    { href: "/cases", label: "Cases" },
    { href: "/gallery", label: "Gallery" },
    { href: "/team", label: "Our Team" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          <Link href="/" className="flex-shrink-0">
            <Logo size="sm" className="md:hidden" />
            <Logo size="md" className="hidden md:flex lg:hidden" />
            <Logo size="lg" className="hidden lg:flex" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-700 hover:text-sage-green transition-colors duration-200 font-medium text-sm xl:text-base font-sans"
              >
                {item.label}
              </Link>
            ))}
            <Link href="/contact">
            
            <Button className="bg-sage-green cursor-pointer  hover:bg-sage-green/90 text-white text-sm xl:text-base px-4 xl:px-6 font-sans">
              Book Appointment
            </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-sage-green p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-gray-100 bg-white">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-gray-700 hover:text-sage-green hover:bg-gray-50 transition-colors duration-200 font-medium px-4 py-3 rounded-md font-sans"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="px-4 pt-2">
                <Link href="/contact">
                  <Button className="w-full bg-sage-green hover:bg-sage-green/90 text-white font-sans">
                    Book Appointment
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
