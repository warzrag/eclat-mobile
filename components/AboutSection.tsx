"use client";

import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <img
              src="https://images.unsplash.com/photo-1574096079513-d8259312b785?q=80&w=2074"
              alt="Bar mobile L'Éclat"
              className="w-full h-[500px] object-cover"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-wider mb-4">
              Notre Histoire
            </h2>
            <div className="w-20 h-0.5 bg-gold mb-8"></div>
            
            <p className="mb-6 text-gray-dark leading-relaxed">
              L'Éclat Mobile est né de la passion de deux amis pour l'art de la mixologie et le désir de créer des expériences uniques. Après des années d'expérience dans les plus prestigieux établissements parisiens, nous avons décidé d'apporter notre expertise directement à vos événements.
            </p>
            
            <p className="mb-6 text-gray-dark leading-relaxed">
              Depuis 2018, nous avons eu le privilège d'accompagner plus de 500 couples dans leur grand jour et de participer à des centaines d'événements privés et professionnels. Notre mission : transformer chaque moment en une célébration inoubliable.
            </p>

            <p className="mb-8 text-gray-dark leading-relaxed">
              Avec une équipe de barmen professionnels passionnés et un bar mobile entièrement équipé, nous apportons l'excellence du service et la créativité des cocktails là où vous en avez besoin.
            </p>

            <div className="grid grid-cols-3 gap-8 text-center">
              <div>
                <p className="text-3xl font-bold text-gold">500+</p>
                <p className="text-sm uppercase tracking-wider">Événements</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-gold">50+</p>
                <p className="text-sm uppercase tracking-wider">Cocktails</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-gold">100%</p>
                <p className="text-sm uppercase tracking-wider">Satisfaction</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;