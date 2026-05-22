"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { Check, ZoomIn, X } from "lucide-react";
import { ShareButton } from "@/components/ui/ShareButton";

const PRODUCTS = [
  {
    id: "prime", label: "Prime", name: "Skyliqua Prime",
    tagline: "Pure essentials, beautifully delivered.",
    variants: [
      { name: "Classic White", hex: "#F9FAFB", image: "/assets/products/prime-removed.png" },
      { name: "Midnight Black", hex: "#1F2937", image: "/assets/products/prime-black-removebg.png" }
    ],
    isElite: false, badge: "Best Value", accentColor: "#14878E",
    oval: "radial-gradient(ellipse 85% 80% at 50% 48%, rgba(20,135,142,0.09) 0%, rgba(226,244,242,0.9) 55%, #E8F3F2 100%)",
    features: ["9-Stage Puresense Purification", "Copper-Infused Chamber", "10 L Insulated Storage Tank", "RO Technology", "TDS Controller Included", "Sediment & Carbon Pre-Filters"],
    description: "The Prime delivers our core Puresense Technology in its most refined form. Copper-enriched and rigorously filtered — built for families who take health seriously.",
    specs: [{ l: "Stages", v: "9" }, { l: "Storage", v: "10 L" }, { l: "Copper", v: "✓" }, { l: "Alkaline", v: "—" }, { l: "LED", v: "—" }],
  },
  {
    id: "zen", label: "Zen", name: "Skyliqua Zen",
    tagline: "Balance starts with every sip.",
    variants: [
      { name: "Midnight Black", hex: "#1F2937", image: "/assets/products/zen-removed.png" },
      { name: "Classic White", hex: "#F9FAFB", image: "/assets/products/zen-white-removebg.png" }
    ],
    isElite: false, badge: "Most Popular", accentColor: "#14878E",
    oval: "radial-gradient(ellipse 85% 80% at 50% 48%, rgba(20,135,142,0.09) 0%, rgba(226,244,242,0.9) 55%, #E8F3F2 100%)",
    features: ["12-Stage Puresense Purification", "Copper & Alkaline Dual Enrichment", "10 L Premium Storage Tank", "pH-Balancing Technology (7.5–9.5)", "Mineral Retention Filter", "RO + UV + UF + Alkaline Stack"],
    description: "The Zen adds alkaline pH balancing to our copper foundation — producing water that is cleaner, lighter, and tuned for daily wellbeing.",
    specs: [{ l: "Stages", v: "12" }, { l: "Storage", v: "10 L" }, { l: "Copper", v: "✓" }, { l: "Alkaline", v: "✓" }, { l: "LED", v: "—" }],
  },
  {
    id: "elite", label: "Elite", name: "Skyliqua Elite",
    tagline: "The pinnacle. Nothing held back.",
    variants: [
      { name: "Marble White", hex: "#F9FAFB", image: "/assets/products/elite-removed.png" },
      { name: "Black Gold", hex: "#111111", image: "/assets/products/elite-black-removebg.png" }
    ],
    isElite: true, badge: "Premium", accentColor: "#B68F54",
    oval: "radial-gradient(ellipse 85% 80% at 50% 48%, rgba(182,143,84,0.10) 0%, rgba(248,242,226,0.9) 55%, #F2EBD6 100%)",
    features: ["12-Stage Advanced Purification", "Copper & Alkaline Excellence", "10 L Crystal-Clear Storage Tank", "Smart LED Water Quality Display", "Real-Time Purity Monitoring", "Auto-Sanitisation Mode"],
    description: "The Elite unites every Skyliqua innovation — copper, alkaline, and Smart LED intelligence — in one impeccable form. For those who accept only the very best.",
    specs: [{ l: "Stages", v: "12" }, { l: "Storage", v: "10 L" }, { l: "Copper", v: "✓" }, { l: "Alkaline", v: "✓" }, { l: "LED", v: "✓" }],
  }
];

const listV: Variants = { hidden: {}, show: { transition: { staggerChildren: 0.06 } } };
const itemV: Variants = { hidden: { opacity: 0, x: -10 }, show: { opacity: 1, x: 0, transition: { duration: 0.3, ease: "easeOut" } } };

export function ProductShowcase() {
  const [activeId, setActiveId] = useState("prime");
  const [selectedVariants, setSelectedVariants] = useState<Record<string, number>>({ prime: 0, zen: 0, elite: 0 });
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const prodParam = params.get("product");
      if (prodParam && PRODUCTS.some(p => p.id === prodParam)) {
        setActiveId(prodParam);
        
        const colorParam = params.get("color");
        if (colorParam) {
          const targetProduct = PRODUCTS.find(p => p.id === prodParam);
          if (targetProduct) {
            const idx = targetProduct.variants.findIndex(v => v.name.replace(/\s+/g, '-').toLowerCase() === colorParam);
            if (idx !== -1) {
              setSelectedVariants(prev => ({ ...prev, [prodParam]: idx }));
            }
          }
        }
      }
    }
  }, []);

  const p = PRODUCTS.find(x => x.id === activeId)!;
  const activeVariantIndex = selectedVariants[activeId] || 0;
  const currentVariant = p.variants[activeVariantIndex];
  const isEliteBlack = currentVariant.image.includes("elite-black-removebg");

  return (
    <section id="products" className="flex flex-col items-center justify-center py-10 sm:py-14" style={{ background: "#FAFAF8", minHeight: "100dvh" }}>

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

      <div className="w-full max-w-[1200px] px-5 sm:px-8 lg:px-12 flex flex-col flex-1 lg:min-h-0">

        {/* Header & Tabs (Side-by-side on desktop to save vertical space) */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-6 sm:mb-8 gap-5">
          <div className="text-center md:text-left">
            <p className="text-[9px] sm:text-[10px] font-bold tracking-[0.25em] uppercase mb-1.5 text-grad-primary">Our Collection</p>
            <h2 className="font-serif text-3xl sm:text-4xl font-medium tracking-tight m-0" style={{ color: "#0C0F0D", lineHeight: 1.1 }}>
              Choose Your Purifier
            </h2>
          </div>

          {/* Premium Segmented Control (Light Mode) */}
          <div className="flex items-center p-1 rounded-full relative" style={{ background: "rgba(12,15,13,0.04)", border: "1px solid rgba(12,15,13,0.06)" }}>
            {PRODUCTS.map(prod => (
              <button key={prod.id} onClick={() => setActiveId(prod.id)}
                className="relative px-6 sm:px-8 py-2.5 rounded-full text-[11px] sm:text-[12px] font-bold tracking-wide transition-colors"
                style={{ color: activeId === prod.id ? "#FFFFFF" : "rgba(12,15,13,0.5)" }}>
                {activeId === prod.id && (
                  <motion.div layoutId="activeTab" className={`absolute inset-0 rounded-full ${prod.isElite ? 'bg-grad-gold' : 'bg-grad-primary'}`}
                    style={{ boxShadow: "0 2px 10px rgba(0,0,0,0.15)" }}
                    transition={{ type: "spring", duration: 0.5 }} />
                )}
                <span className="relative z-10">{prod.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Main Panel (Fills remaining height if necessary) */}
        <div className="w-full flex flex-col flex-1 lg:min-h-0 relative">
          <AnimatePresence mode="wait">
            <motion.div key={activeId}
              initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="relative lg:absolute lg:inset-0 w-full lg:h-full bg-white rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-[rgba(12,15,13,0.03)] flex flex-col lg:flex-row">

              {/* Image Side */}
              <div className="relative w-full lg:w-[45%] flex items-center justify-center p-6 sm:p-8 min-h-[280px] lg:min-h-0"
                style={{ background: p.oval }}>
                <div className="absolute top-5 left-5 z-10 px-3 py-1.5 rounded-full text-[9px] font-bold tracking-[0.2em] uppercase bg-white shadow-sm"
                  style={{ color: p.accentColor, border: `1px solid ${p.isElite ? "rgba(182,143,84,0.2)" : "rgba(20,135,142,0.2)"}` }}>
                  {p.badge}
                </div>
                <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  whileHover={{ scale: 1.05 }}
                  onClick={() => setZoomedImage(currentVariant.image)}
                  className={`relative w-full max-w-[320px] sm:max-w-[400px] lg:max-w-[460px] aspect-[4/5] cursor-pointer group ${isEliteBlack ? "scale-[0.95] sm:scale-[0.97]" : ""}`}>

                  {/* Crossfade when variant changes */}
                  <AnimatePresence mode="wait">
                    <motion.div key={currentVariant.image} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} className="absolute inset-0">
                      <Image src={currentVariant.image} alt={p.name} fill className="object-contain"
                        style={{ filter: "drop-shadow(0 20px 40px rgba(12,15,13,0.08))" }}
                        sizes="(max-width: 1024px) 90vw, 40vw" priority />
                    </motion.div>
                  </AnimatePresence>

                  {/* Zoom Icon Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white/90 backdrop-blur-md p-3.5 rounded-full shadow-lg border border-black/5 z-20">
                      <ZoomIn size={22} color={p.accentColor} />
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Content Side */}
              <div className="w-full lg:w-[55%] p-6 sm:p-8 lg:p-12 flex flex-col justify-center bg-white lg:h-full lg:overflow-y-auto">
                <p className={`text-[9px] sm:text-[10px] font-bold tracking-[0.25em] uppercase mb-1.5 ${p.isElite ? 'text-grad-gold' : 'text-grad-primary'}`}>{p.tagline}</p>
                <h3 className="font-serif font-medium tracking-tight mb-4" style={{ fontSize: "clamp(1.8rem,3vw,2.5rem)", color: "#0C0F0D", lineHeight: 1.1 }}>
                  {p.name}
                </h3>

                {/* Color Variants Swatches */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex gap-2">
                    {p.variants.map((v, i) => (
                      <button key={v.name} onClick={() => setSelectedVariants(prev => ({ ...prev, [activeId]: i }))}
                        className="w-5 h-5 rounded-full border shadow-sm transition-all hover:scale-110"
                        style={{
                          background: v.hex,
                          borderColor: activeVariantIndex === i ? p.accentColor : 'rgba(0,0,0,0.1)',
                          boxShadow: activeVariantIndex === i ? `0 0 0 1px white, 0 0 0 2px ${p.accentColor}` : 'none'
                        }}
                        title={v.name}
                        aria-label={`Select ${v.name}`}
                      />
                    ))}
                  </div>
                  <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.2em] uppercase" style={{ color: "rgba(12,15,13,0.5)" }}>
                    {currentVariant.name}
                  </span>
                </div>

                <p className="text-[13px] sm:text-[14px] leading-relaxed font-light mb-6" style={{ color: "rgba(12,15,13,0.6)" }}>{p.description}</p>

                <motion.ul key={activeId + "fl"} variants={listV} initial="hidden" animate="show"
                  className="space-y-2.5 mb-8 list-none m-0 p-0 lg:flex-1 lg:min-h-0">
                  {p.features.map(f => (
                    <motion.li key={f} variants={itemV} className="flex items-start gap-3">
                      <span className="flex-shrink-0 mt-0.5 w-4 h-4 rounded-full flex items-center justify-center shadow-sm"
                        style={{ background: p.isElite ? "rgba(182,143,84,0.1)" : "rgba(20,135,142,0.1)" }}>
                        <Check size={10} strokeWidth={3} color={p.accentColor} />
                      </span>
                      <span className="text-[13px] leading-snug font-medium" style={{ color: "rgba(12,15,13,0.7)" }}>{f}</span>
                    </motion.li>
                  ))}
                </motion.ul>

                {/* Specs Grid */}
                <div className="grid grid-cols-3 sm:grid-cols-5 gap-2 mb-6">
                  {p.specs.map(s => (
                    <div key={s.l} className="text-center rounded-xl p-2.5"
                      style={{ background: "#FAFAF8", border: "1px solid rgba(12,15,13,0.04)" }}>
                      <div className={`text-[13px] font-bold mb-0.5 ${p.isElite ? 'text-grad-gold' : 'text-grad-primary'}`}>{s.v}</div>
                      <div className="text-[8px] font-bold uppercase tracking-[0.1em]" style={{ color: "rgba(12,15,13,0.4)" }}>{s.l}</div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4 items-center w-full sm:w-auto mt-2">
                  <a href={`?model=${p.id}&color=${currentVariant.name.replace(/\s+/g, '-').toLowerCase()}#contact`}
                    className="inline-flex items-center justify-center w-full sm:w-max px-8 py-3.5 rounded-full font-bold text-[12px] tracking-wide text-white transition-all duration-300 active:scale-95"
                    style={{
                      background: p.isElite
                        ? "linear-gradient(135deg, #8E6B3E 0%, #B68F54 40%, #D4B886 100%)"
                        : "linear-gradient(135deg, #0F6C72 0%, #14878E 40%, #42A6A2 100%)",
                      boxShadow: p.isElite ? "0 8px 20px -6px rgba(182,143,84,0.4)" : "0 8px 20px -6px rgba(20,135,142,0.4)"
                    }}
                    onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = p.isElite ? "0 12px 24px -6px rgba(182,143,84,0.5)" : "0 12px 24px -6px rgba(20,135,142,0.5)"; }}
                    onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = p.isElite ? "0 8px 20px -6px rgba(182,143,84,0.4)" : "0 8px 20px -6px rgba(20,135,142,0.4)"; }}>
                    Enquire About {p.label}
                  </a>
                  
                  <ShareButton
                    shareUrl={`/?product=${p.id}&color=${currentVariant.name.replace(/\s+/g, '-').toLowerCase()}`}
                    shareTitle={`Skyliqua ${p.label} (${currentVariant.name}) - ${p.tagline}`}
                    accentColor={p.accentColor}
                  />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
