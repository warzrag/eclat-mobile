"use client";

import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-white py-12 border-t border-gray-light">
      <div className="container-custom">
        <div className="text-center">
          <h3 className="text-2xl font-bold uppercase tracking-wider mb-8">L'ÉCLAT MOBILE</h3>
          
          <div className="flex flex-wrap justify-center gap-8 mb-8">
            <Link href="#accueil" className="text-sm uppercase tracking-wider hover:text-gold transition-colors">
              Accueil
            </Link>
            <Link href="#services" className="text-sm uppercase tracking-wider hover:text-gold transition-colors">
              Services
            </Link>
            <Link href="#galerie" className="text-sm uppercase tracking-wider hover:text-gold transition-colors">
              Galerie
            </Link>
            <Link href="#tarifs" className="text-sm uppercase tracking-wider hover:text-gold transition-colors">
              Tarifs
            </Link>
            <Link href="#contact" className="text-sm uppercase tracking-wider hover:text-gold transition-colors">
              Contact
            </Link>
          </div>

          <div className="flex justify-center gap-6 mb-8">
            <a href="#" className="w-10 h-10 border border-black rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-all">
              <span className="text-xs font-bold">FB</span>
            </a>
            <a href="#" className="w-10 h-10 border border-black rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-all">
              <span className="text-xs font-bold">IG</span>
            </a>
            <a href="#" className="w-10 h-10 border border-black rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-all">
              <span className="text-xs font-bold">IN</span>
            </a>
          </div>

          <p className="text-sm text-gray-dark">
            © 2024 L'Éclat Mobile. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;