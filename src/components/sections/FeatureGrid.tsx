"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";

const fadeUp: Variants = { hidden:{ opacity:0, y:32 }, show:{ opacity:1, y:0, transition:{ duration:0.65, ease:"easeOut" } } };
const fadeIn: Variants  = { hidden:{ opacity:0 },      show:{ opacity:1,      transition:{ duration:0.75, ease:"easeOut" } } };

function ProductPanel({ src, alt, oval, shadow, minH="min-h-[280px] sm:min-h-[360px] lg:min-h-0 lg:h-full" }:
  { src:string; alt:string; oval:string; shadow:string; minH?:string }) {
  return (
    <div className={`relative rounded-sm overflow-hidden flex items-center justify-center ${minH}`}
      style={{ background:oval, padding:"40px 32px" }}>
      <div className="absolute bottom-[6%] left-[18%] right-[18%] h-6 rounded-full pointer-events-none"
        style={{ background:"rgba(0,0,0,0.06)", filter:"blur(16px)" }} />
      <motion.div animate={{ y:[0,-10,0] }} transition={{ duration:5, repeat:Infinity, ease:"easeInOut" }}
        className="relative w-full h-64 sm:h-72 lg:h-80">
        <Image src={src} alt={alt} fill className="object-contain" style={{ filter:shadow }} sizes="(max-width:1024px) 90vw, 50vw" />
      </motion.div>
    </div>
  );
}

export function FeatureGrid() {
  return (
    <section id="features" style={{ background:"#FAFAF8" }}>

      {/* ── ROW 1: Copper ──────────────────────────────────────── */}
      <div className="w-full max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-16 py-16 sm:py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once:true, margin:"-60px" }}>
            <p className="text-[10px] font-bold tracking-[0.28em] uppercase mb-4" style={{ color:"#12423F" }}>Feature 01 · Copper Enrichment</p>
            <h2 className="font-serif font-medium tracking-tight m-0 mb-5 leading-tight" style={{ fontSize:"clamp(1.8rem,3.5vw,3rem)", color:"#0C0F0D" }}>
              Ancient Wisdom,<br /><em className="font-normal" style={{ fontStyle:"italic" }}>Modern Precision.</em>
            </h2>
            <p className="text-sm sm:text-base leading-relaxed font-light mb-6" style={{ color:"rgba(12,15,13,0.5)", maxWidth:"440px" }}>
              Our copper-infused chamber dissolves trace ions into every litre — a practice rooted in 5,000 years
              of Ayurveda, re-engineered with food-grade precision. Supports natural immunity, gut health, and metabolic function.
            </p>
            <div className="flex flex-wrap gap-2 sm:gap-2.5">
              {["Antimicrobial","Supports Immunity","Aids Digestion","Thyroid Health"].map(tag => (
                <span key={tag} className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-[12px] font-semibold"
                  style={{ color:"#12423F", background:"rgba(18,66,63,0.08)", border:"1px solid rgba(18,66,63,0.14)" }}>{tag}</span>
              ))}
            </div>
          </motion.div>
          <motion.div variants={fadeIn} initial="hidden" whileInView="show" viewport={{ once:true, margin:"-60px" }}>
            <ProductPanel src="/assets/products/prime-removed.png" alt="Skyliqua Prime"
              oval="radial-gradient(ellipse 80% 70% at 50% 45%, rgba(18,66,63,0.10) 0%, rgba(225,243,241,0.9) 55%, #E8F2F0 100%)"
              shadow="drop-shadow(0 24px 48px rgba(0,0,0,0.10))" />
          </motion.div>
        </div>
      </div>

      {/* ── ROW 2: Alkaline ────────────────────────────────────── */}
      <div style={{ background:"#FAFAF8" }}>
        <div className="w-full max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-16 py-16 sm:py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Image first on mobile, second on desktop */}
            <motion.div variants={fadeIn} initial="hidden" whileInView="show" viewport={{ once:true, margin:"-60px" }}
              className="lg:order-first">
              <ProductPanel src="/assets/products/zen-removed.png" alt="Skyliqua Zen"
                oval="radial-gradient(ellipse 80% 70% at 50% 45%, rgba(165,203,193,0.14) 0%, rgba(20,35,33,0.05) 55%, #F0F5F4 100%)"
                shadow="drop-shadow(0 24px 48px rgba(0,0,0,0.15)) drop-shadow(0 4px 16px rgba(165,203,193,0.05))" />
            </motion.div>
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once:true, margin:"-60px" }}>
              <p className="text-[10px] font-bold tracking-[0.28em] uppercase mb-4" style={{ color:"#12423F" }}>Feature 02 · Alkaline Balance</p>
              <h2 className="font-serif font-medium tracking-tight m-0 mb-5 leading-tight" style={{ fontSize:"clamp(1.8rem,3.5vw,3rem)", color:"#0C0F0D" }}>
                pH Optimised<br /><em className="font-normal" style={{ fontStyle:"italic" }}>for Your Body.</em>
              </h2>
              <p className="text-sm sm:text-base leading-relaxed font-light mb-6" style={{ color:"rgba(12,15,13,0.5)", maxWidth:"440px" }}>
                Our alkaline filter raises water pH to the optimal 7.5–9.5 range — where cellular absorption is
                maximised and excess acidity is naturally neutralised. Feel the difference from the first glass.
              </p>
              <div className="flex flex-wrap gap-2 sm:gap-2.5">
                {["pH 7.5–9.5","Enhanced Absorption","Neutralises Acidity","Bone Health"].map(tag => (
                  <span key={tag} className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-[12px] font-semibold"
                    style={{ color:"#12423F", background:"rgba(18,66,63,0.08)", border:"1px solid rgba(18,66,63,0.14)" }}>{tag}</span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ── ROW 3: Smart LED ────────────────────────────────────── */}
      <div style={{ background:"#FDFBF5", borderTop:"1px solid rgba(200,169,126,0.1)" }}>
        <div className="w-full max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-16 py-16 sm:py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once:true, margin:"-60px" }}>
              <p className="text-[10px] font-bold tracking-[0.28em] uppercase mb-4" style={{ color:"#C8A97E" }}>Feature 03 · Smart LED · Elite Exclusive</p>
              <h2 className="font-serif font-medium tracking-tight m-0 mb-5 leading-tight" style={{ fontSize:"clamp(1.8rem,3.5vw,3rem)", color:"#0C0F0D" }}>
                Total Visibility,<br /><em className="font-normal" style={{ fontStyle:"italic" }}>Total Confidence.</em>
              </h2>
              <p className="text-sm sm:text-base leading-relaxed font-light mb-6" style={{ color:"rgba(12,15,13,0.5)", maxWidth:"440px" }}>
                The Elite's intelligent LED panel displays real-time TDS levels, water purity status, filter life
                remaining, and purification stage — so you always know exactly what you're drinking.
              </p>
              <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
                {[
                  { l:"Real-time TDS",  d:"Live dissolved solids reading" },
                  { l:"Filter Life",    d:"Know exactly when to replace" },
                  { l:"Purity Status",  d:"Instant water quality read" },
                  { l:"Auto-Sanitise",  d:"Self-cleaning UV cycle" },
                ].map(item => (
                  <div key={item.l} className="rounded-xl p-3 sm:p-4"
                    style={{ background:"rgba(200,169,126,0.07)", border:"1px solid rgba(200,169,126,0.14)" }}>
                    <div className="text-[11px] sm:text-xs font-bold mb-1" style={{ color:"#C8A97E" }}>{item.l}</div>
                    <div className="text-[10px] sm:text-[11px] leading-snug" style={{ color:"rgba(12,15,13,0.45)" }}>{item.d}</div>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div variants={fadeIn} initial="hidden" whileInView="show" viewport={{ once:true, margin:"-60px" }}>
              <ProductPanel src="/assets/products/elite-removed.png" alt="Skyliqua Elite"
                oval="radial-gradient(ellipse 80% 70% at 50% 45%, rgba(172,136,91,0.10) 0%, rgba(250,244,228,0.9) 55%, #F5EDD8 100%)"
                shadow="drop-shadow(0 24px 48px rgba(0,0,0,0.10)) drop-shadow(0 4px 16px rgba(172,136,91,0.10))" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
