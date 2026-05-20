"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Settings2, Droplets, Box, Factory } from "lucide-react";

const PRODUCTS = {
  featured: {
    id: "main-dispenser",
    name: "Commercial Standing Dispenser",
    description: "Our flagship commercial water dispenser. Hot, cold, and ambient water on demand, compatible with multiple high-capacity filtration cores.",
    image: "/assets/commercial device filter.jpeg",
    icon: Droplets,
  },
  standard: [
    {
      id: "plant-100",
      name: "RO Plant 100 LPH",
      description: "Industrial-grade 100 Liters Per Hour capacity. Engineered for relentless performance.",
      image: "/assets/filter3.jpeg",
      icon: Factory,
    },
    {
      id: "undersink",
      name: "Under-Sink System",
      description: "Space-saving design, uncompromised purity for modular kitchens.",
      image: "/assets/filter1.jpg",
      icon: Box,
    },
    {
      id: "plant-standard",
      name: "Standard Plant",
      description: "High-volume reverse osmosis purification for cafes and restaurants.",
      image: "/assets/filter2.jpeg",
      icon: Settings2,
    },
    {
      id: "multi-stage",
      name: "Multi-Stage Unit",
      description: "Comprehensive 5-stage purification removing dissolved solids and heavy metals.",
      image: "/assets/filter4.jpeg",
      icon: Settings2,
    },
    {
      id: "skyliqua-pure",
      name: "Skyliqua Pure",
      description: "Advanced commercial purification system for uninterrupted clean water supply.",
      image: "/assets/skyliqua-pure.jpeg",
      icon: Droplets,
    }
  ]
};

const containerVariants = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.1 } } } as any;
const itemVariants = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } } as any;

export function CommercialShowcase() {
  return (
    <section className="py-12 sm:py-16 relative overflow-hidden bg-[#FAFAF8]">
      {/* Decorative luxury elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[1px] bg-gradient-to-r from-transparent via-[#B68F54]/30 to-transparent" />
      
      <div className="w-full max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        
        {/* Editorial Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-8 sm:mb-12 gap-6">
          <div className="max-w-2xl">
            <motion.div initial={{ opacity: 0, scaleX: 0 }} whileInView={{ opacity: 1, scaleX: 1 }} viewport={{ once: true }} className="h-[2px] w-12 bg-[#B68F54] mb-4 origin-left" />
            <motion.h2 
              initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="font-serif font-medium tracking-tight leading-none mb-4" 
              style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", color: "#0C0F0D" }}>
              Beyond <br className="hidden sm:block" />
              <span className="text-grad-primary italic">Residential</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
              className="text-[15px] sm:text-[17px] leading-relaxed font-light" style={{ color: "rgba(12,15,13,0.6)", maxWidth: "540px" }}>
              Engineered for scale. Built for endurance. Skyliqua&apos;s commercial line delivers uncompromising water purity for offices, hospitality, and industrial applications.
            </motion.p>
          </div>
          
          <motion.a 
            initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
            href="#contact" 
            className="group inline-flex items-center gap-4 text-[11px] sm:text-[12px] font-bold tracking-[0.2em] uppercase transition-colors"
            style={{ color: "#14878E" }}>
            Explore Full Range 
            <span className="w-10 h-10 rounded-full border border-[#14878E]/30 flex items-center justify-center group-hover:bg-[#14878E] group-hover:text-white transition-all duration-300">
              <ArrowRight size={16} />
            </span>
          </motion.a>
        </div>

        {/* Bento Grid Layout */}
        <motion.div 
          variants={containerVariants} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6">
          
          {/* Featured Large Item (Left Column) */}
          <motion.div variants={itemVariants} className="lg:col-span-5 group lg:sticky lg:top-8 h-fit">
            <div className="relative flex flex-col bg-white overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-700 h-[calc(100vh-200px)] max-h-[600px] min-h-[400px]" style={{ border: "1px solid rgba(182,143,84,0.25)" }}>
              <div className="absolute top-4 left-4 z-20">
                <p className="text-[9px] font-bold tracking-[0.2em] uppercase text-white bg-[#B68F54] px-3 py-1 rounded-sm shadow-sm">
                  Flagship Unit
                </p>
              </div>
              
              <div className="relative w-full flex-1 bg-[#F9FAFB] overflow-hidden flex items-center justify-center p-6">
                <motion.div className="relative w-full h-full" whileHover={{ scale: 1.05 }} transition={{ duration: 0.8, ease: "easeOut" }}>
                  <Image src={PRODUCTS.featured.image} alt={PRODUCTS.featured.name} fill className="object-contain drop-shadow-2xl" sizes="(max-width: 1024px) 100vw, 40vw" priority />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-t from-white/60 via-transparent to-transparent pointer-events-none" />
              </div>

              <div className="flex flex-col p-5 bg-white relative z-10 border-t border-[rgba(182,143,84,0.1)] shrink-0">
                <h3 className="font-serif text-2xl font-medium tracking-tight mb-2" style={{ color: "#0C0F0D" }}>
                  {PRODUCTS.featured.name}
                </h3>
                <p className="text-[13px] leading-relaxed font-light mb-4" style={{ color: "rgba(12,15,13,0.6)", maxWidth: "420px" }}>
                  {PRODUCTS.featured.description}
                </p>
                <div className="w-12 h-[1px] bg-[#B68F54]/40" />
              </div>
            </div>
          </motion.div>

          {/* Standard Items Carousel (Right Column) */}
          <div className="lg:col-span-7 overflow-hidden flex items-center relative min-h-[400px]">
             {/* Gradient fades for smooth scrolling edges */}
             <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-r from-[#FAFAF8] to-transparent z-10 pointer-events-none" />
             <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-l from-[#FAFAF8] to-transparent z-10 pointer-events-none" />

            <motion.div 
               className="flex gap-5 w-max py-4"
               animate={{ x: ["0%", "-50%"] }}
               transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
             >
                {[...PRODUCTS.standard, ...PRODUCTS.standard].map((prod, index) => {
                  const Icon = prod.icon;
                  
                  return (
                     <div key={`carousel-${index}`} className="w-[260px] sm:w-[300px] shrink-0 group relative bg-white overflow-hidden flex flex-col shadow-sm hover:shadow-lg transition-shadow duration-500 border border-[rgba(12,15,13,0.06)]">
                         <div className="relative w-full aspect-[4/3] bg-[#F9FAFB] p-6 flex items-center justify-center overflow-hidden border-b border-[rgba(12,15,13,0.03)] group-hover:bg-gray-50 transition-colors duration-500">
                           <div className="relative w-full h-full transform group-hover:scale-105 transition-transform duration-700 ease-out">
                             <Image src={prod.image} alt={prod.name} fill className="object-contain drop-shadow-md" sizes="(max-width: 768px) 260px, 300px" />
                           </div>
                         </div>
                         <div className="p-6 flex flex-col flex-1 bg-white">
                           <div className="flex items-center gap-3 mb-3">
                             <div className="w-8 h-8 rounded-full flex shrink-0 items-center justify-center bg-[rgba(20,135,142,0.05)] border border-[rgba(20,135,142,0.1)] text-[#14878E] group-hover:bg-[#14878E] group-hover:text-white transition-colors duration-300">
                               <Icon size={14} className="text-[inherit]" />
                             </div>
                             <h4 className="font-serif text-[17px] sm:text-[18px] font-medium tracking-tight" style={{ color: "#0C0F0D" }}>
                               {prod.name}
                             </h4>
                           </div>
                           <p className="text-[13px] leading-relaxed font-light" style={{ color: "rgba(12,15,13,0.55)" }}>
                             {prod.description}
                           </p>
                         </div>
                     </div>
                  );
                })}
            </motion.div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
