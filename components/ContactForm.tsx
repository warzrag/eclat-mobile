"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    date: "",
    location: "",
    guests: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="section-padding bg-black text-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-wider mb-4">
            Contactez-Nous
          </h2>
          <div className="w-20 h-0.5 bg-gold mx-auto mb-8"></div>
          <p className="text-xl max-w-2xl mx-auto">
            Prêt à créer un événement inoubliable ? Contactez-nous pour un devis personnalisé.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
            <div>
              <input
                type="text"
                name="name"
                placeholder="NOM COMPLET *"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-0 py-3 bg-transparent border-b border-gray-medium text-white placeholder-gray-medium focus:outline-none focus:border-gold transition-colors"
              />
            </div>

            <div>
              <input
                type="email"
                name="email"
                placeholder="EMAIL *"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-0 py-3 bg-transparent border-b border-gray-medium text-white placeholder-gray-medium focus:outline-none focus:border-gold transition-colors"
              />
            </div>

            <div>
              <input
                type="tel"
                name="phone"
                placeholder="TÉLÉPHONE *"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-0 py-3 bg-transparent border-b border-gray-medium text-white placeholder-gray-medium focus:outline-none focus:border-gold transition-colors"
              />
            </div>

            <div>
              <select
                name="eventType"
                required
                value={formData.eventType}
                onChange={handleChange}
                className="w-full px-0 py-3 bg-transparent border-b border-gray-medium text-white focus:outline-none focus:border-gold transition-colors"
              >
                <option value="" className="bg-black">TYPE D'ÉVÉNEMENT *</option>
                <option value="mariage" className="bg-black">Mariage</option>
                <option value="corporate" className="bg-black">Corporate</option>
                <option value="anniversaire" className="bg-black">Anniversaire</option>
                <option value="autre" className="bg-black">Autre</option>
              </select>
            </div>

            <div>
              <input
                type="date"
                name="date"
                placeholder="DATE DE L'ÉVÉNEMENT *"
                required
                value={formData.date}
                onChange={handleChange}
                className="w-full px-0 py-3 bg-transparent border-b border-gray-medium text-white placeholder-gray-medium focus:outline-none focus:border-gold transition-colors"
              />
            </div>

            <div>
              <input
                type="text"
                name="location"
                placeholder="LIEU *"
                required
                value={formData.location}
                onChange={handleChange}
                className="w-full px-0 py-3 bg-transparent border-b border-gray-medium text-white placeholder-gray-medium focus:outline-none focus:border-gold transition-colors"
              />
            </div>

            <div>
              <input
                type="number"
                name="guests"
                placeholder="NOMBRE D'INVITÉS *"
                required
                value={formData.guests}
                onChange={handleChange}
                className="w-full px-0 py-3 bg-transparent border-b border-gray-medium text-white placeholder-gray-medium focus:outline-none focus:border-gold transition-colors"
              />
            </div>

            <div className="md:col-span-2">
              <textarea
                name="message"
                placeholder="MESSAGE"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-0 py-3 bg-transparent border-b border-gray-medium text-white placeholder-gray-medium focus:outline-none focus:border-gold transition-colors resize-none"
              />
            </div>

            <div className="md:col-span-2 text-center mt-8">
              <button
                type="submit"
                className="inline-block px-12 py-4 bg-gold text-black uppercase tracking-wider text-sm font-bold transition-all duration-300 hover:bg-white"
              >
                Envoyer la demande
              </button>
            </div>
          </form>

          <div className="grid md:grid-cols-3 gap-8 mt-16 text-center">
            <div>
              <h3 className="text-lg font-bold uppercase tracking-wider mb-2">Téléphone</h3>
              <p className="text-gray-medium">06 00 00 00 00</p>
            </div>
            <div>
              <h3 className="text-lg font-bold uppercase tracking-wider mb-2">Email</h3>
              <p className="text-gray-medium">contact@eclat-mobile.fr</p>
            </div>
            <div>
              <h3 className="text-lg font-bold uppercase tracking-wider mb-2">Zone de service</h3>
              <p className="text-gray-medium">Île-de-France</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactForm;