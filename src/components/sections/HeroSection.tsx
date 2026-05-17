"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as const;

export function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  
  // Cinematic parallax effects
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const productY = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 90]);

  return (
    <section ref={ref} className="relative w-full overflow-hidden bg-[#021411]" style={{ minHeight: "100dvh" }}>
      
      {/* =========================================
          BACKGROUND: Cinematic Marble Canvas
          ========================================= */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 z-0">
        <Image 
          src="/assets/hero-bg.jpeg" 
          alt="Luxury Marble Canvas" 
          fill 
          className="object-cover object-center scale-[1.05] saturate-[0.85] contrast-[1.05] brightness-[0.9]" 
          priority 
          quality={100} 
        />
      </motion.div>

      {/* =========================================
          MASK: Deep Cinematic Vignette & Blur
          ========================================= */}
      {/* Heavy dark vignette to focus the center and frame the product */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(2,20,17,0.7)_100%)]" />
      
      {/* Targeted extremely soft blur for text readability */}
      <div 
        className="hidden lg:block absolute inset-0 z-0 pointer-events-none" 
        style={{
          background: "linear-gradient(to right, rgba(250,250,248,0.92) 0%, rgba(250,250,248,0.5) 45%, rgba(250,250,248,0) 70%)",
          backdropFilter: "blur(30px)",
          WebkitBackdropFilter: "blur(30px)",
          maskImage: "linear-gradient(to right, black 30%, transparent 70%)",
          WebkitMaskImage: "linear-gradient(to right, black 30%, transparent 70%)"
        }} 
      />

      <div 
        className="block lg:hidden absolute inset-0 z-0 pointer-events-none" 
        style={{
          background: "linear-gradient(to bottom, rgba(250,250,248,0.95) 0%, rgba(250,250,248,0.7) 45%, rgba(250,250,248,0) 75%)",
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
          maskImage: "linear-gradient(to bottom, black 30%, transparent 75%)",
          WebkitMaskImage: "linear-gradient(to bottom, black 30%, transparent 75%)"
        }} 
      />


      <div className="relative z-10 w-full h-full min-h-[100dvh] flex flex-col lg:flex-row">
        
        {/* =========================================
            LEFT SIDE: Sculptural Typography
            ========================================= */}
        <motion.div style={{ y: textY }} className="w-full lg:w-[50%] flex flex-col justify-center px-8 sm:px-12 lg:pl-[12%] lg:pr-12 pt-40 lg:pt-0 pb-16 lg:pb-0">
          <div className="w-full max-w-[540px] mx-auto lg:mx-0">
            
            {/* Logo */}
            <div className="mb-12 relative z-10 w-full max-w-[300px] lg:max-w-[340px] h-[80px] lg:h-[90px] -ml-2">
              <motion.div initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:1.0, ease:EASE }} className="relative w-full h-full">
                <Image src="/assets/brand/skyliqua-logo-clean.png" alt="Skyliqua" fill className="object-contain object-left" priority />
              </motion.div>
            </div>

            {/* Monumental Headline */}
            <div className="overflow-hidden mb-6">
              <motion.h1 initial={{ y:"110%" }} animate={{ y:0 }} transition={{ duration:1.2, ease:EASE, delay: 0.1 }}
                className="font-serif m-0 font-medium tracking-tight leading-none"
                style={{ color:"#031815", fontSize:"clamp(3.8rem, 6.5vw, 7rem)" }}>
                Pure Water.<br/>
                <span className="italic" style={{ color:"#AC885B", fontWeight: 400 }}>Beautifully Refined.</span>
              </motion.h1>
            </div>

            {/* Minimal Copy */}
            <motion.p initial={{ opacity:0, y:12 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.8, delay: 0.3 }}
              className="text-base lg:text-lg tracking-wide mb-12 max-w-[420px] font-sans"
              style={{ color:"rgba(3,24,21,0.65)", lineHeight: 1.6 }}>
              A statement of absolute luxury for the modern home. Impeccable 12-stage purification wrapped in sculptural elegance.
            </motion.p>

            {/* Single Premium CTA */}
            <motion.div initial={{ opacity:0, y:12 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.8, delay: 0.4 }}>
              <a href="#products"
                className="inline-flex items-center justify-center rounded-full font-bold tracking-[0.2em] uppercase transition-all duration-500 hover:bg-[#222222] hover:shadow-[0_10px_40px_rgba(0,0,0,0.15)] group"
                style={{ padding:"16px 42px", background:"#0F0F0F", color:"#FFFFFF", fontSize:"10px" }}>
                Explore Collection
              </a>
            </motion.div>
          </div>
        </motion.div>

        {/* =========================================
            RIGHT SIDE: Aspirational Product Object
            ========================================= */}
        <div className="w-full lg:w-[50%] flex items-center justify-center relative pb-20 lg:pb-0 pt-10 lg:pt-0">
          
          {/* Sculptural Lighting: Ambient Rim Glow */}
          <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ duration: 2, delay: 0.5 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[400px] lg:w-[500px] lg:h-[600px] rounded-[100%] blur-[100px] lg:blur-[140px] pointer-events-none"
            style={{ background: "radial-gradient(ellipse, rgba(255,255,255,0.4) 0%, rgba(200,169,126,0.15) 50%, rgba(200,169,126,0) 80%)" }}
          />

          <motion.div style={{ y: productY }} className="relative z-10 w-full max-w-[400px] lg:max-w-[600px] aspect-[4/5] flex items-center justify-center">
            
            <motion.div initial={{ opacity:0, scale:0.95, y:40 }} animate={{ opacity:1, scale:1, y:0 }} transition={{ duration:1.6, delay:0.2, ease:"easeOut" }} className="relative w-full h-full flex items-center justify-center">
              
              {/* Product floating slowly */}
              <motion.div animate={{ y:[0,-8,0] }} transition={{ duration:6, repeat:Infinity, ease:"easeInOut" }} className="relative w-full h-[110%]">
                <Image src="/assets/products/elite-removed.png" alt="Skyliqua Elite"
                  fill className="object-contain" priority
                  style={{ filter:"drop-shadow(0 40px 50px rgba(0,0,0,0.5)) drop-shadow(0 20px 20px rgba(0,0,0,0.3)) brightness(1.05) contrast(1.02)" }}
                  sizes="(max-width: 1024px) 400px, 600px" />
              </motion.div>

              {/* Sculptural Ground Reflection / Shadow */}
              <motion.div animate={{ scale:[1, 0.95, 1], opacity:[0.6, 0.4, 0.6] }} transition={{ duration:6, repeat:Infinity, ease:"easeInOut" }}
                className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[70%] h-[16px] rounded-[100%] blur-[12px]"
                style={{ background: "radial-gradient(ellipse at center, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 70%)" }}
              />
              
            </motion.div>

          </motion.div>
        </div>
      </div>

    </section>
  );
}
