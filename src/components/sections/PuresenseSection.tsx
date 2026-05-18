"use client";

import { motion, type Variants } from "framer-motion";
import Image from "next/image";

const PHASES = [
  {
    id: "phase-1",
    title: "01. Pre-Filtration",
    desc: "Removing bulk impurities, chemicals, and heavy metals.",
    stages: ["Sediment Pre-Filter", "Activated Carbon Block", "Granular Carbon", "RO Membrane (0.0001 µm)"]
  },
  {
    id: "phase-2",
    title: "02. Core Defense",
    desc: "Eradicating pathogens and ensuring absolute safety.",
    stages: ["UV Sterilisation (99.99%)", "UF Membrane", "TDS Controller", "Copper Chamber"]
  },
  {
    id: "phase-3",
    title: "03. Enrichment",
    desc: "Elevating pH, restoring minerals, and polishing taste.",
    stages: ["Alkaline Filter (pH 7.5-9.5)", "Mineral Cartridge", "Post Carbon Polish", "Smart LED Monitor"]
  }
];

const cV: Variants = { hidden:{}, show:{ transition:{ staggerChildren:0.1 } } };
const iV: Variants = { hidden:{ opacity:0, y:20 }, show:{ opacity:1, y:0, transition:{ duration:0.5, ease:"easeOut" } } };

export function PuresenseSection() {
  return (
    <section id="puresense" className="relative overflow-hidden bg-[#0A0C0B]" style={{ padding:"100px 0 80px" }}>
      {/* Cinematic Marble Background with Blur */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/assets/hero_bg_desktop.png" 
          alt="Luxury Marble Texture" 
          fill 
          className="object-cover object-center opacity-60" 
          quality={80} 
        />
        <div className="absolute inset-0 backdrop-blur-[40px] bg-[#050A09]/70" />
      </div>

      {/* Ambient top glow & Watermark */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none opacity-20 z-0"
        style={{ width:"600px", height:"280px", background:"radial-gradient(ellipse, rgba(200,169,126,0.15) 0%, transparent 70%)", filter:"blur(40px)" }} />
      <div className="absolute top-[10%] right-[-10%] pointer-events-none opacity-[0.02] mix-blend-screen select-none">
        <img src="/assets/brand/skyliqua-logo-clean.png" alt="" style={{ width:"800px", height:"auto", filter:"grayscale(1) brightness(200%)" }} />
      </div>

      <div className="w-full max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-16 relative z-10">

        {/* Header */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <p className="text-[10px] font-bold tracking-[0.28em] uppercase mb-4" style={{ color:"#C4E2DB" }}>
            The Science Inside
          </p>
          <h2 className="font-serif font-medium tracking-tight text-white m-0 mb-4" style={{ fontSize:"clamp(1.9rem,4vw,3.2rem)", lineHeight:1.1 }}>
            Puresense Technology.<br />
            <em className="font-normal" style={{ fontStyle:"italic" }}>Twelve stages of pure science.</em>
          </h2>
          <p className="text-sm sm:text-base leading-relaxed font-light" style={{ color:"rgba(255,255,255,0.38)" }}>
            Every litre passes through twelve precision-engineered stages — structured into three core phases to deliver water that goes far beyond clean.
          </p>
        </div>

        {/* 3-Phase Layout */}
        <motion.div
          variants={cV} initial="hidden" whileInView="show" viewport={{ once:true, margin:"-60px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16"
        >
          {PHASES.map((phase) => (
            <motion.div key={phase.id} variants={iV}
              className="flex flex-col p-8 sm:p-10 rounded-sm"
              style={{ background:"rgba(10, 20, 18, 0.4)", backdropFilter:"blur(16px)", border:"1px solid rgba(255,255,255,0.04)" }}>
              <h3 className="font-serif font-medium tracking-tight text-xl sm:text-2xl mb-3" style={{ color:"#ffffff" }}>
                {phase.title}
              </h3>
              <p className="text-sm mb-8 leading-relaxed" style={{ color:"rgba(255,255,255,0.4)" }}>
                {phase.desc}
              </p>
              
              <ul className="space-y-4 mt-auto">
                {phase.stages.map((stage, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="flex-shrink-0 w-1.5 h-1.5 rounded-sm" style={{ background:"#C4E2DB" }} />
                    <span className="text-[13px] font-medium tracking-wide" style={{ color:"rgba(255,255,255,0.7)" }}>
                      {stage}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-px rounded-sm overflow-hidden"
          style={{ background:"rgba(255,255,255,0.06)" }}>
          {[
            { v:"99.9%", l:"Pathogen Elimination",  s:"RO + UV dual barrier" },
            { v:"12",    l:"Purification Stages",    s:"Each targeting a specific threat" },
            { v:"10 L",  l:"Insulated Storage",      s:"Always-ready, always pure" },
          ].map(stat => (
            <div key={stat.l} className="text-center py-8 sm:py-10 px-6" style={{ background:"rgba(10, 20, 18, 0.5)", backdropFilter:"blur(16px)" }}>
              <div className="font-serif font-medium tracking-tight leading-none mb-2" style={{ fontSize:"clamp(2.2rem,4vw,3rem)", color:"#C4E2DB" }}>{stat.v}</div>
              <div className="font-semibold text-sm mb-1.5" style={{ color:"rgba(255,255,255,0.72)" }}>{stat.l}</div>
              <div className="text-xs" style={{ color:"rgba(255,255,255,0.28)" }}>{stat.s}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
