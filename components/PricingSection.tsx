"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Check } from "lucide-react";

const PricingSection = () => {
  const packages = [
    {
      name: "ESSENTIEL",
      price: "800€",
      features: [
        "Bar mobile équipé",
        "2 barmen professionnels",
        "5 cocktails signature",
        "Service 4 heures",
        "50 personnes maximum",
        "Verrerie incluse",
      ],
    },
    {
      name: "PREMIUM",
      price: "1500€",
      popular: true,
      features: [
        "Bar mobile premium lumineux",
        "3 barmen professionnels",
        "10 cocktails signature",
        "Service 6 heures",
        "150 personnes maximum",
        "Décoration personnalisée",
        "Animation cocktails",
        "Bar à champagne inclus",
      ],
    },
    {
      name: "PRESTIGE",
      price: "Sur devis",
      features: [
        "Bar mobile sur-mesure",
        "Équipe complète",
        "Cocktails illimités",
        "Service toute la soirée",
        "Sans limite de personnes",
        "Décoration complète",
        "Show de mixologie",
        "Consultation préalable",
      ],
    },
  ];

  return (
    <section id="tarifs" className="section-padding bg-gray-light">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-wider mb-4">
            Nos Tarifs
          </h2>
          <div className="w-20 h-0.5 bg-gold mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative bg-white p-8 ${
                pkg.popular ? "ring-2 ring-gold" : ""
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gold text-white px-4 py-1 text-sm uppercase tracking-wider">
                  Plus populaire
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold uppercase tracking-wider mb-4">
                  {pkg.name}
                </h3>
                <p className="text-4xl font-bold text-gold">
                  {pkg.price}
                </p>
              </div>

              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="#contact"
                className={`block text-center py-3 uppercase tracking-wider text-sm font-medium transition-all duration-300 ${
                  pkg.popular
                    ? "bg-gold text-white hover:bg-black"
                    : "bg-black text-white hover:bg-gold"
                }`}
              >
                Choisir cette formule
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;