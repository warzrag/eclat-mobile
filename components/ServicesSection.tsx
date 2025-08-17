"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Sparkles, Users, Clock, Award } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: <Sparkles className="w-12 h-12" />,
      title: "COCKTAILS SIGNATURE",
      description: "Créations uniques et personnalisées pour votre événement",
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "ÉQUIPE PROFESSIONNELLE",
      description: "Barmen expérimentés et service impeccable",
    },
    {
      icon: <Clock className="w-12 h-12" />,
      title: "SERVICE FLEXIBLE",
      description: "Disponible pour tous types d'événements",
    },
    {
      icon: <Award className="w-12 h-12" />,
      title: "QUALITÉ PREMIUM",
      description: "Produits haut de gamme et présentation soignée",
    },
  ];

  return (
    <section id="services" className="section-padding bg-gray-light">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-wider mb-4">
            Nos Services
          </h2>
          <div className="w-20 h-0.5 bg-gold mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="mb-6 text-gold group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-lg font-bold uppercase tracking-wider mb-3">
                {service.title}
              </h3>
              <p className="text-gray-dark">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Nous transformons chaque événement en une expérience unique et mémorable. 
            Notre expertise et notre passion pour la mixologie garantissent un service d'exception.
          </p>
          <Link href="#galerie" className="btn-primary">
            VOIR NOTRE PORTFOLIO
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;