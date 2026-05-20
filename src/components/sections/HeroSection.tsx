"use client";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";

const HERO_PRODUCTS = [
  { id: 'elite', image: '/assets/products/elite-removed.png', alt: 'Skyliqua Elite', scale: 1 },
  { id: 'zen', image: '/assets/products/zen-removed.png', alt: 'Skyliqua Zen', scale: 1 },
  { id: 'prime', image: '/assets/products/prime-removed.png', alt: 'Skyliqua Prime', scale: 0.85 }
];

const EASE = [0.16, 1, 0.3, 1] as const;

export function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % HERO_PRODUCTS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 400 : -400,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 400 : -400,
      opacity: 0
    })
  };
  
  // Cinematic parallax effects
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const productY = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 90]);

  return (
    <section ref={ref} className="relative w-full overflow-hidden bg-[#FAFAF8]" style={{ minHeight: "100dvh" }}>
      
      {/* =========================================
          BACKGROUND: Cinematic Marble Canvas
          ========================================= */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 z-0 bg-[#FAFAF8]">
        {/* Desktop Canvas */}
        <Image 
          src="/assets/bg-upsclaed.jpeg" 
          alt="Luxury Marble Canvas" 
          fill 
          className="hidden md:block object-cover object-center scale-[1.02]" 
          priority 
          quality={100} 
        />
        {/* Mobile Canvas */}
        <Image 
          src="/assets/bg-upsclaed.jpeg" 
          alt="Luxury Marble Canvas" 
          fill 
          className="block md:hidden object-cover object-center scale-[1.02]" 
          priority 
          quality={100} 
        />
        
        {/* Photographic Grain Overlay for Matte Finish */}
        <div className="absolute inset-0 z-10 opacity-[0.04] mix-blend-overlay pointer-events-none" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')" }}></div>
      </motion.div>

      {/* =========================================
          MASK: Bright Cinematic Vignette & Blur
          ========================================= */}
      {/* Refined Vignette to add depth without muddying */}
      <div className="absolute inset-0 z-0 pointer-events-none mix-blend-screen bg-[radial-gradient(ellipse_at_center,transparent_20%,rgba(250,250,248,0.4)_100%)]" />
      
      {/* Targeted cinematic blur for text readability (Desktop) */}
      <div 
        className="hidden lg:block absolute inset-0 z-0 pointer-events-none" 
        style={{
          background: "linear-gradient(to right, rgba(250,250,248,0.96) 0%, rgba(250,250,248,0.65) 45%, rgba(250,250,248,0) 75%)",
          backdropFilter: "blur(40px) saturate(1.1)",
          WebkitBackdropFilter: "blur(40px) saturate(1.1)",
          maskImage: "linear-gradient(to right, black 35%, transparent 75%)",
          WebkitMaskImage: "linear-gradient(to right, black 35%, transparent 75%)"
        }} 
      />

      {/* Targeted cinematic blur for text readability (Mobile) */}
      <div 
        className="block lg:hidden absolute inset-0 z-0 pointer-events-none" 
        style={{
          background: "linear-gradient(to bottom, rgba(250,250,248,0.98) 0%, rgba(250,250,248,0.75) 45%, rgba(250,250,248,0) 80%)",
          backdropFilter: "blur(30px) saturate(1.1)",
          WebkitBackdropFilter: "blur(30px) saturate(1.1)",
          maskImage: "linear-gradient(to bottom, black 35%, transparent 80%)",
          WebkitMaskImage: "linear-gradient(to bottom, black 35%, transparent 80%)"
        }} 
      />


      <div className="relative z-10 w-full h-full min-h-[100dvh] flex flex-col lg:flex-row">
        
        {/* =========================================
            LEFT SIDE: Sculptural Typography
            ========================================= */}
        <motion.div style={{ y: textY }} className="w-full lg:w-[50%] flex flex-col justify-center px-8 sm:px-12 lg:pl-[12%] lg:pr-12 pt-40 lg:pt-0 pb-16 lg:pb-0">
          <div className="w-full max-w-[650px] mx-auto lg:mx-0">
            
            {/* Logo */}
            <div className="mb-12 relative z-10 w-full max-w-[300px] lg:max-w-[340px] h-[80px] lg:h-[90px] -ml-2">
              <motion.div initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:1.0, ease:EASE }} className="relative w-full h-full">
                <Image src="/assets/brand/skyliqua-logo-clean.png" alt="Skyliqua" fill className="object-contain object-left" priority />
              </motion.div>
            </div>

            {/* Monumental Headline */}
            <div className="overflow-y-hidden overflow-x-visible mb-6" style={{ minWidth: "120%" }}>
              <motion.h1 initial={{ y:"110%" }} animate={{ y:0 }} transition={{ duration:1.2, ease:EASE, delay: 0.1 }}
                className="font-serif m-0 font-medium tracking-tight leading-none"
                style={{ color:"#111111", fontSize:"clamp(3.5rem, 5.5vw, 5.8rem)" }}>
                Pure&nbsp;Water.<br/>
                <span className="italic" style={{ color:"#B68F54", fontWeight: 400 }}>Beautifully<br/>Refined.</span>
              </motion.h1>
            </div>

            {/* Minimal Copy */}
            <motion.p initial={{ opacity:0, y:12 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.8, delay: 0.3 }}
              className="text-base lg:text-lg tracking-wide mb-12 max-w-[420px] font-sans"
              style={{ color:"rgba(17,17,17,0.75)", lineHeight: 1.6 }}>
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
            style={{ background: "radial-gradient(ellipse, rgba(255,255,255,0.4) 0%, rgba(182,143,84,0.15) 50%, rgba(182,143,84,0) 80%)" }}
          />

          <motion.div style={{ y: productY }} className="relative z-10 w-full max-w-[400px] lg:max-w-[600px] aspect-[4/5] flex items-center justify-center">
            
            <motion.div initial={{ opacity:0, scale:0.95, y:40 }} animate={{ opacity:1, scale:1, y:0 }} transition={{ duration:1.6, delay:0.2, ease:"easeOut" }} className="relative w-full h-full flex items-center justify-center">
              
              {/* Product floating slowly with horizontal sliding */}
              <motion.div animate={{ y:[0,-8,0] }} transition={{ duration:6, repeat:Infinity, ease:"easeInOut" }} className="relative w-full h-[110%] flex items-center justify-center overflow-visible">
                <AnimatePresence initial={false} custom={direction}>
                  <motion.div
                    key={currentIndex}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                      x: { type: "spring", stiffness: 300, damping: 30 },
                      opacity: { duration: 0.2 }
                    }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <div className="relative w-full h-full" style={{ transform: `scale(${HERO_PRODUCTS[currentIndex].scale})` }}>
                      <Image src={HERO_PRODUCTS[currentIndex].image} alt={HERO_PRODUCTS[currentIndex].alt}
                        fill className="object-contain" priority
                        style={{ filter:"drop-shadow(0 40px 50px rgba(0,0,0,0.5)) drop-shadow(0 20px 20px rgba(0,0,0,0.3)) brightness(1.05) contrast(1.02)" }}
                        sizes="(max-width: 1024px) 400px, 600px" />
                    </div>
                  </motion.div>
                </AnimatePresence>
              </motion.div>

              {/* Sculptural Ground Reflection / Shadow */}
              <motion.div animate={{ scale:[1, 0.95, 1], opacity:[0.6, 0.4, 0.6] }} transition={{ duration:6, repeat:Infinity, ease:"easeInOut" }}
                className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[70%] h-[16px] rounded-[100%] blur-[12px]"
                style={{ background: "radial-gradient(ellipse at center, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 70%)" }}
              />

              {/* Slide Indicators */}
              <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 flex gap-3 z-20">
                {HERO_PRODUCTS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      if (i === currentIndex) return;
                      setDirection(i > currentIndex ? 1 : -1);
                      setCurrentIndex(i);
                    }}
                    className="w-8 h-1 rounded-full transition-all duration-500 hover:opacity-80"
                    style={{ background: i === currentIndex ? "#B68F54" : "rgba(255,255,255,0.2)" }}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>
              
            </motion.div>

          </motion.div>
        </div>
      </div>

    </section>
  );
}
