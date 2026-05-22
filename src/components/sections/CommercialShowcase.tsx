"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Settings2, Droplets, Box, Factory, ZoomIn, X } from "lucide-react";
import { ShareButton } from "@/components/ui/ShareButton";

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
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);

  return (
    <section className="py-12 sm:py-16 relative overflow-hidden bg-[#FAFAF8]">
      {/* Zoom Modal */}
      <AnimatePresence>
        {zoomedImage && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-10"
            style={{ background: "rgba(12,15,13,0.9)", backdropFilter: "blur(8px)" }}
            onClick={() => setZoomedImage(null)}
          >
            <button className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white">
              <X size={24} />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-4xl max-h-[90vh] aspect-square sm:aspect-video"
              onClick={e => e.stopPropagation()}
            >
              <Image src={zoomedImage} alt="Zoomed Product" fill className="object-contain" sizes="100vw" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
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
          <motion.div variants={itemVariants} className="lg:col-span-5 group lg:h-full">
            <div className="relative flex flex-col bg-white overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-700 min-h-[400px] lg:h-full" style={{ border: "1px solid rgba(182,143,84,0.25)" }}>
              <div className="absolute top-4 left-4 z-20">
                <p className="text-[9px] font-bold tracking-[0.2em] uppercase text-white bg-[#B68F54] px-3 py-1 rounded-sm shadow-sm">
                  Flagship Unit
                </p>
              </div>
              
              <div 
                className="relative w-full aspect-[4/3] lg:aspect-auto lg:flex-1 bg-[#F9FAFB] overflow-hidden flex items-center justify-center p-6 cursor-pointer group/zoom"
                onClick={() => setZoomedImage(PRODUCTS.featured.image)}
              >
                <motion.div className="relative w-full h-full" whileHover={{ scale: 1.05 }} transition={{ duration: 0.8, ease: "easeOut" }}>
                  <Image src={PRODUCTS.featured.image} alt={PRODUCTS.featured.name} fill className="object-contain drop-shadow-2xl" sizes="(max-width: 1024px) 100vw, 40vw" priority />
                </motion.div>
                
                {/* Zoom Icon Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/zoom:opacity-100 transition-opacity duration-300 bg-black/5 pointer-events-none">
                  <div className="bg-white/90 backdrop-blur-md p-3.5 rounded-full shadow-lg border border-black/5">
                    <ZoomIn size={22} color="#B68F54" />
                  </div>
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-white/60 via-transparent to-transparent pointer-events-none" />
              </div>

              <div className="flex flex-col p-5 bg-white relative z-10 border-t border-[rgba(182,143,84,0.1)] shrink-0">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-serif text-2xl font-medium tracking-tight mb-2" style={{ color: "#0C0F0D" }}>
                    {PRODUCTS.featured.name}
                  </h3>
                  <ShareButton
                    shareUrl={`/?commercial=${PRODUCTS.featured.id}`}
                    shareTitle={`Skyliqua Commercial - ${PRODUCTS.featured.name}`}
                    accentColor="#B68F54"
                    size="sm"
                    align="left"
                  />
                </div>
                <p className="text-[13px] leading-relaxed font-light mb-4" style={{ color: "rgba(12,15,13,0.6)", maxWidth: "420px" }}>
                  {PRODUCTS.featured.description}
                </p>
                <div className="w-12 h-[1px] bg-[#B68F54]/40" />
              </div>
            </div>
          </motion.div>

          {/* Standard Items Static Grid (Right Column) */}
          <div className="lg:col-span-7 flex flex-col justify-start">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-6">
              {PRODUCTS.standard.map((prod, index) => {
                const Icon = prod.icon;
                const isLastOdd = index === PRODUCTS.standard.length - 1 && PRODUCTS.standard.length % 2 !== 0;

                if (isLastOdd) {
                  return (
                    <motion.div 
                      key={prod.id} 
                      variants={itemVariants}
                      className="sm:col-span-2 group relative bg-white overflow-hidden flex flex-col sm:flex-row shadow-sm hover:shadow-lg transition-shadow duration-500 border border-[rgba(12,15,13,0.06)] min-h-[180px]"
                    >
                      <div 
                        className="relative w-full sm:w-[45%] aspect-[4/3] sm:aspect-auto bg-[#F9FAFB] p-6 flex items-center justify-center overflow-hidden border-b sm:border-b-0 sm:border-r border-[rgba(12,15,13,0.03)] min-h-[200px] sm:min-h-0 cursor-pointer group/zoom"
                        onClick={() => setZoomedImage(prod.image)}
                      >
                        <div className="relative w-full h-full transform group-hover/zoom:scale-105 transition-transform duration-700 ease-out">
                          <Image src={prod.image} alt={prod.name} fill className="object-contain drop-shadow-md" sizes="(max-width: 768px) 100vw, 30vw" />
                        </div>
                        
                        {/* Zoom Icon Overlay */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/zoom:opacity-100 transition-opacity duration-300 bg-black/5 pointer-events-none">
                          <div className="bg-white/90 backdrop-blur-md p-3 rounded-full shadow-lg border border-black/5">
                            <ZoomIn size={18} color="#14878E" />
                          </div>
                        </div>
                      </div>
                      <div className="p-6 flex flex-col justify-center flex-1 bg-white">
                        <div className="flex items-start justify-between gap-3 mb-3">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full flex shrink-0 items-center justify-center bg-[rgba(20,135,142,0.05)] border border-[rgba(20,135,142,0.1)] text-[#14878E] group-hover:bg-[#14878E] group-hover:text-white transition-colors duration-300">
                              <Icon size={14} className="text-[inherit]" />
                            </div>
                            <h4 className="font-serif text-[17px] sm:text-[18px] font-medium tracking-tight" style={{ color: "#0C0F0D" }}>
                              {prod.name}
                            </h4>
                          </div>
                          <ShareButton
                            shareUrl={`/?commercial=${prod.id}`}
                            shareTitle={`Skyliqua Commercial - ${prod.name}`}
                            accentColor="#14878E"
                            size="sm"
                            align="left"
                          />
                        </div>
                        <p className="text-[13px] leading-relaxed font-light" style={{ color: "rgba(12,15,13,0.55)" }}>
                          {prod.description}
                        </p>
                      </div>
                    </motion.div>
                  );
                }

                return (
                  <motion.div 
                    key={prod.id} 
                    variants={itemVariants}
                    className="group relative bg-white overflow-hidden flex flex-col shadow-sm hover:shadow-lg transition-shadow duration-500 border border-[rgba(12,15,13,0.06)]"
                  >
                    <div 
                      className="relative w-full aspect-[4/3] bg-[#F9FAFB] p-6 flex items-center justify-center overflow-hidden border-b border-[rgba(12,15,13,0.03)] cursor-pointer group/zoom"
                      onClick={() => setZoomedImage(prod.image)}
                    >
                      <div className="relative w-full h-full transform group-hover/zoom:scale-105 transition-transform duration-700 ease-out">
                        <Image src={prod.image} alt={prod.name} fill className="object-contain drop-shadow-md" sizes="(max-width: 768px) 100vw, 20vw" />
                      </div>
                      
                      {/* Zoom Icon Overlay */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/zoom:opacity-100 transition-opacity duration-300 bg-black/5 pointer-events-none">
                        <div className="bg-white/90 backdrop-blur-md p-3 rounded-full shadow-lg border border-black/5">
                          <ZoomIn size={18} color="#14878E" />
                        </div>
                      </div>
                    </div>
                    <div className="p-6 flex flex-col flex-1 bg-white">
                      <div className="flex items-start justify-between gap-3 mb-3">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full flex shrink-0 items-center justify-center bg-[rgba(20,135,142,0.05)] border border-[rgba(20,135,142,0.1)] text-[#14878E] group-hover:bg-[#14878E] group-hover:text-white transition-colors duration-300">
                            <Icon size={14} className="text-[inherit]" />
                          </div>
                          <h4 className="font-serif text-[17px] sm:text-[18px] font-medium tracking-tight" style={{ color: "#0C0F0D" }}>
                            {prod.name}
                          </h4>
                        </div>
                        <ShareButton
                          shareUrl={`/?commercial=${prod.id}`}
                          shareTitle={`Skyliqua Commercial - ${prod.name}`}
                          accentColor="#14878E"
                          size="sm"
                          align="left"
                        />
                      </div>
                      <p className="text-[13px] leading-relaxed font-light" style={{ color: "rgba(12,15,13,0.55)" }}>
                        {prod.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
