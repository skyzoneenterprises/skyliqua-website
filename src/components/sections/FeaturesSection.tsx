"use client";

import { motion } from "framer-motion";

const FEATURES = [
  { title:"12-Stage", sub:"Filtration", icon: "M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" },
  { title:"Copper", sub:"Enriched", icon: "M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z M12 6v6l4 2" },
  { title:"Alkaline", sub:"pH Balance", icon: "M20 12V8H6a2 2 0 0 1-2-2c0-1.1.9-2 2-2h12v4" },
  { title:"Smart LED", sub:"Monitoring", icon: "M4 6h16v12H4z M12 10v4" },
  { title:"Eco-Save", sub:"Zero Waste", icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z M12 18v-6 M12 8h.01" },
];

export function FeaturesSection() {
  return (
    <section id="features" className="hidden md:block relative w-full py-32 bg-[#041D1A] overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[1px] bg-gradient-to-r from-transparent via-[#C8A97E]/30 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(200,169,126,0.05)_0%,transparent_50%)]" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 sm:px-12 flex flex-col items-center">
        
        <motion.div initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true, margin:"-100px" }} transition={{ duration:1 }}
          className="text-center mb-20">
          <h2 className="font-serif text-3xl md:text-5xl text-white font-light tracking-wide mb-6">
            The Science of <span className="italic text-[#C8A97E]">Purity.</span>
          </h2>
          <p className="text-white/60 font-sans tracking-widest uppercase text-xs">Uncompromising Filtration Standards</p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-6 w-full">
          {FEATURES.map((f, i) => (
            <motion.div key={f.title} 
              initial={{ opacity:0, y:30 }} 
              whileInView={{ opacity:1, y:0 }} 
              viewport={{ once:true, margin:"-50px" }} 
              transition={{ duration:0.8, delay: i * 0.1 }}
              whileHover={{ y: -5, background: "rgba(255,255,255,0.08)" }}
              className="flex-1 min-w-[200px] max-w-[260px] flex flex-col items-center text-center p-8 lg:p-10 rounded-2xl border backdrop-blur-2xl transition-all duration-300 group"
              style={{
                background: "rgba(255,255,255,0.03)",
                borderColor: "rgba(200,169,126,0.1)",
                boxShadow: "0 20px 40px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.05)"
              }}>
              <div className="flex items-center justify-center w-12 h-12 rounded-full mb-6 transition-transform duration-500 group-hover:scale-110" style={{ background:"rgba(200,169,126,0.1)" }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C8A97E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d={f.icon}/>
                </svg>
              </div>
              <div>
                <div className="text-[10px] font-bold tracking-[0.2em] uppercase mb-2" style={{ color:"rgba(255,255,255,0.4)" }}>{f.sub}</div>
                <div className="text-base lg:text-lg font-medium tracking-wide text-white">{f.title}</div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
