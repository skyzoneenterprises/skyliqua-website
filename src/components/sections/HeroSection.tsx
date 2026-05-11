"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as const;
const MARQUEE = [
  "12-Stage Puresense","Copper Enrichment","Alkaline Balance","Smart LED Monitor",
  "RO · UV · UF","Life-Long Service","pH 7.5–9.5","Ayurvedic Wellness","99.9% Purity","Auto-Sanitisation",
];
const STRIP = [...MARQUEE, ...MARQUEE];

export function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <section ref={ref} className="flex flex-col overflow-hidden" style={{ height: "100dvh", paddingTop: "72px" }}>

      {/* ── Main area ─────────────────────────────────────────── */}
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-[46%_54%] min-h-0">

        {/* LEFT — dark panel (full on mobile, left on desktop) */}
        <div className="relative flex flex-col justify-center overflow-hidden px-6 py-8 sm:px-10 md:px-14 lg:px-16"
          style={{ background: "#0C0F0D" }}>
          {/* Halos */}
          <div className="absolute top-0 right-0 w-2/3 h-1/2 pointer-events-none opacity-20" style={{ background: "radial-gradient(ellipse at top right, rgba(11,171,166,0.15) 0%, transparent 65%)" }} />
          <div className="absolute bottom-0 left-0 w-2/5 h-1/3 pointer-events-none opacity-20" style={{ background: "radial-gradient(ellipse at bottom left, rgba(11,171,166,0.08) 0%, transparent 65%)" }} />
          {/* Dot texture */}
          <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.022) 1px, transparent 1px)", backgroundSize: "30px 30px" }} />

          {/* Mobile-only product image (sits inside dark panel) */}
          <div className="lg:hidden relative flex-shrink-0 mx-auto w-52 h-44 sm:w-64 sm:h-56 mb-4">
            <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at 50% 60%, rgba(11,171,166,0.22) 0%, transparent 65%)" }} />
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <Image src="/assets/products/elite-removed.png" alt="Skyliqua Elite" fill className="object-contain"
                style={{ filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.15))" }}
                sizes="256px" priority />
            </motion.div>
          </div>

          {/* Text content */}
          <div className="relative z-10">
            {/* Eyebrow */}
            <motion.div initial={{ opacity:0, x:-12 }} animate={{ opacity:1, x:0 }} transition={{ duration:0.55 }}
              className="flex items-center gap-3 mb-5 lg:mb-8">
              <div className="w-7 h-px flex-shrink-0" style={{ background:"#0BABA6" }} />
              <span className="text-[9px] sm:text-[10px] font-semibold uppercase tracking-[0.26em]" style={{ color:"#0BABA6" }}>
                Skyliqua · Puresense Technology
              </span>
            </motion.div>

            {/* Headline */}
            <div className="mb-4 lg:mb-6">
              <div className="overflow-hidden leading-none">
                <motion.h1 initial={{ y:"110%" }} animate={{ y:0 }} transition={{ duration:1.0, ease:EASE }}
                  className="font-display m-0"
                  style={{ fontStyle:"italic", color:"#0BABA6", fontSize:"clamp(2.4rem,6.5vw,6rem)", lineHeight:1.02, letterSpacing:"-0.025em" }}>
                  Water,
                </motion.h1>
              </div>
              <div className="overflow-hidden leading-none">
                <motion.h1 initial={{ y:"110%" }} animate={{ y:0 }} transition={{ duration:1.0, ease:EASE, delay:0.07 }}
                  className="font-display m-0"
                  style={{ color:"#FFFFFF", fontSize:"clamp(2.4rem,6.5vw,6rem)", lineHeight:1.05, letterSpacing:"-0.025em" }}>
                  Reimagined.
                </motion.h1>
              </div>
            </div>

            {/* Rule */}
            <motion.div initial={{ scaleX:0 }} animate={{ scaleX:1 }} transition={{ duration:0.8, delay:0.28, ease:"easeOut" }}
              className="h-px mb-4 lg:mb-5" style={{ background:"rgba(255,255,255,0.08)", transformOrigin:"left" }} />

            {/* Body */}
            <motion.p initial={{ opacity:0, y:12 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.7, delay:0.34 }}
              className="text-sm lg:text-base leading-relaxed font-light max-w-xs sm:max-w-sm lg:max-w-[380px] mb-6 lg:mb-8"
              style={{ color:"rgba(255,255,255,0.42)" }}>
              Twelve stages of precision purification, copper-enriched and alkaline-balanced —
              engineered for the family that demands the absolute best.
            </motion.p>

            {/* CTAs */}
            <motion.div initial={{ opacity:0, y:12 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.7, delay:0.42 }}
              className="flex flex-wrap items-center gap-3 sm:gap-4 mb-6 lg:mb-8">
              <a href="#products"
                className="inline-flex items-center gap-2 rounded-sm text-white font-semibold text-[13px] tracking-wide transition-all duration-200 hover:opacity-90 active:scale-95"
                style={{ padding:"13px 26px", background:"#0BABA6" }}>
                Explore Collection
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
              </a>
              <a href="#puresense" className="text-[13px] font-medium tracking-wide"
                style={{ color:"rgba(255,255,255,0.35)" }}>
                How it works →
              </a>
            </motion.div>

            {/* Stats — 2-col on mobile, 4-col on desktop */}
            <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ duration:0.8, delay:0.58 }}
              className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-0 pt-5 lg:pt-5"
              style={{ borderTop:"1px solid rgba(255,255,255,0.08)" }}>
              {[
                { v:"12",    l:"Purification Stages" },
                { v:"10 L",  l:"Storage Capacity"    },
                { v:"99.9%", l:"Bacteria Eliminated" },
                { v:"∞",     l:"Lifetime Service"    },
              ].map((s, i) => (
                <div key={s.v} className={`${i>0 && "lg:border-l"} lg:pl-4 xl:pl-5`}
                  style={{ borderColor:"rgba(255,255,255,0.07)" }}>
                  <div className="font-display text-xl lg:text-2xl mb-1 leading-none" style={{ color:"#0BABA6" }}>{s.v}</div>
                  <div className="text-[9px] lg:text-[10px] leading-snug" style={{ color:"rgba(255,255,255,0.28)", letterSpacing:"0.04em" }}>{s.l}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* RIGHT — desktop-only product panel */}
        <div className="hidden lg:block relative overflow-hidden" style={{ background:"#EEF1EF" }}>
          <div className="absolute pointer-events-none" style={{ top:"50%", left:"50%", transform:"translate(-50%,-52%)", width:"75%", aspectRatio:"1", borderRadius:"50%", background:"radial-gradient(ellipse, rgba(11,171,166,0.13) 0%, rgba(220,240,238,0.35) 45%, transparent 72%)" }} />
          <div className="absolute pointer-events-none" style={{ top:"50%", left:"50%", transform:"translate(-50%,-50%)", width:"72%", aspectRatio:"1", borderRadius:"50%", border:"1px solid rgba(11,171,166,0.11)" }} />
          <div className="absolute pointer-events-none" style={{ top:"50%", left:"50%", transform:"translate(-50%,-50%)", width:"86%", aspectRatio:"1", borderRadius:"50%", border:"1px solid rgba(11,171,166,0.05)" }} />

          <motion.div style={{ y:imgY }} className="absolute inset-[4%_8%] flex items-center justify-center">
            <div className="absolute bottom-[5%] left-[15%] right-[15%] h-7 rounded-full pointer-events-none" style={{ background:"rgba(0,0,0,0.07)", filter:"blur(22px)" }} />
            <motion.div initial={{ opacity:0, scale:0.92, y:20 }} animate={{ opacity:1, scale:1, y:0 }} transition={{ duration:1.1, delay:0.18, ease:"easeOut" }} className="relative w-full h-full">
              <motion.div animate={{ y:[0,-18,0] }} transition={{ duration:5.5, repeat:Infinity, ease:"easeInOut", delay:1.2 }} className="absolute inset-0">
                <Image src="/assets/products/elite-removed.png" alt="Skyliqua Elite Water Purifier"
                  fill className="object-contain" priority
                  style={{ filter:"drop-shadow(0 44px 88px rgba(0,0,0,0.16))" }}
                  sizes="54vw" />
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div initial={{ opacity:0, y:12 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.6, delay:1.2 }}
            className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2.5 whitespace-nowrap"
            style={{ background:"#ffffff", border:"1px solid rgba(0,0,0,0.05)", padding:"9px 20px 9px 13px", borderRadius:"4px" }}>
            <div className="w-[7px] h-[7px] rounded-sm flex-shrink-0" style={{ background:"#0BABA6" }} />
            <span className="text-[13px] font-semibold" style={{ color:"#0C0F0D" }}>Skyliqua Elite</span>
            <span className="w-px h-3" style={{ background:"rgba(12,15,13,0.12)" }} />
            <span className="text-[11px]" style={{ color:"rgba(12,15,13,0.38)" }}>Flagship · Puresense</span>
          </motion.div>
          <motion.div initial={{ opacity:0, x:10 }} animate={{ opacity:1, x:0 }} transition={{ duration:0.5, delay:1.0 }}
            className="absolute top-5 right-5 text-[10px] font-bold tracking-[0.18em] uppercase"
            style={{ padding:"6px 15px", borderRadius:"4px", background:"#ffffff", border:"1px solid rgba(200,168,75,0.3)", color:"#C8A84B" }}>
            Premium
          </motion.div>
        </div>
      </div>

      {/* ── Marquee strip ─────────────────────────────────────── */}
      <div className="flex-shrink-0 flex items-center overflow-hidden"
        style={{ height:"44px", background:"#0A0D0C", borderTop:"1px solid rgba(255,255,255,0.05)" }}>
        <div className="animate-marquee flex items-center" style={{ width:"max-content" }}>
          {STRIP.map((item, i) => (
            <span key={i} className="inline-flex items-center gap-4 px-6">
              <span className="text-[9px] sm:text-[10px] font-semibold tracking-[0.2em] uppercase whitespace-nowrap"
                style={{ color:"rgba(255,255,255,0.28)" }}>{item}</span>
              <span className="w-[3px] h-[3px] rounded-full flex-shrink-0" style={{ background:"#0BABA6" }} />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
