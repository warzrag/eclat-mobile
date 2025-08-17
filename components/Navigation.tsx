"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#accueil", label: "ACCUEIL" },
    { href: "#services", label: "NOS SERVICES" },
    { href: "#galerie", label: "GALERIE" },
    { href: "#tarifs", label: "TARIFS" },
    { href: "#contact", label: "CONTACT" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? "bg-white shadow-md py-4" : "bg-transparent py-6"
    }`}>
      <div className="container-custom">
        <div className="flex items-center justify-between">
          <Link href="/" className={`text-2xl font-bold tracking-wider transition-colors ${
            isScrolled ? "text-black" : "text-white"
          }`}>
            L'ÉCLAT MOBILE
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium tracking-wider transition-all hover:text-gold ${
                  isScrolled ? "text-black" : "text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#reservation"
              className="btn-primary"
            >
              RÉSERVER
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 ${isScrolled ? "text-black" : "text-white"}`}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg">
          <div className="container-custom py-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block py-3 text-black text-sm font-medium tracking-wider hover:text-gold transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#reservation"
              onClick={() => setIsOpen(false)}
              className="btn-primary inline-block mt-4"
            >
              RÉSERVER
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;