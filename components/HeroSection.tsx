"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section id="accueil" className="relative h-screen flex items-center justify-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2070')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      />

      {/* Content */}
      <div className="container-custom relative z-10 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 uppercase tracking-wider">
            L'Éclat Mobile
          </h1>
          <p className="text-xl md:text-2xl mb-2 font-light tracking-wide">
            BAR MOBILE PREMIUM
          </p>
          <div className="w-20 h-0.5 bg-gold mx-auto mb-8"></div>
          <p className="text-lg md:text-xl mb-12 max-w-2xl mx-auto font-light">
            Transformez vos événements en expériences inoubliables avec notre service de bar mobile haut de gamme
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#services" className="btn-primary">
              DÉCOUVRIR NOS SERVICES
            </Link>
            <Link 
              href="#contact" 
              className="inline-block px-8 py-3 border-2 border-white text-white uppercase tracking-wider text-sm font-medium transition-all duration-300 hover:bg-white hover:text-black"
            >
              DEMANDER UN DEVIS
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;