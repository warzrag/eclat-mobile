"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const PortfolioSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("tous");

  const categories = ["tous", "mariages", "corporate", "anniversaires"];

  const images = [
    { id: 1, category: "mariages", title: "Mariage Château de Versailles", image: "https://images.unsplash.com/photo-1481887328591-3e277f9729dc?q=80&w=2080" },
    { id: 2, category: "mariages", title: "Mariage Garden Party", image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=2070" },
    { id: 3, category: "corporate", title: "Soirée Corporate", image: "https://images.unsplash.com/photo-1566737236500-c8ac43014a67?q=80&w=2070" },
    { id: 4, category: "anniversaires", title: "Anniversaire 50 ans", image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=2070" },
    { id: 5, category: "mariages", title: "Mariage Bohème", image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?q=80&w=2074" },
    { id: 6, category: "corporate", title: "Lancement de Produit", image: "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?q=80&w=2073" },
  ];

  const filteredImages = selectedCategory === "tous" 
    ? images 
    : images.filter(img => img.category === selectedCategory);

  return (
    <section id="galerie" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-wider mb-4">
            Notre Portfolio
          </h2>
          <div className="w-20 h-0.5 bg-gold mx-auto mb-8"></div>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 uppercase tracking-wider text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-black text-white"
                    : "bg-transparent text-black border border-black hover:bg-black hover:text-white"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group overflow-hidden cursor-pointer"
            >
              <div className="aspect-square">
                <img
                  src={image.image}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-center text-white">
                  <h3 className="text-xl font-bold uppercase tracking-wider mb-2">
                    {image.title}
                  </h3>
                  <p className="text-sm uppercase tracking-wider">
                    {image.category}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;