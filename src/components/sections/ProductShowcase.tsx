"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { Check, ZoomIn, X } from "lucide-react";

const PRODUCTS = [
  {
    id:"prime", label:"Prime", name:"Skyliqua Prime", colorway:"Grey & Black",
    tagline:"Pure essentials, beautifully delivered.",
    image:"/assets/products/prime-removed.png",
    isElite:false, badge:"Best Value", accentColor:"#22615F",
    oval:"radial-gradient(ellipse 85% 80% at 50% 48%, rgba(34,97,95,0.09) 0%, rgba(226,244,242,0.9) 55%, #E8F3F2 100%)",
    features:["9-Stage Puresense Purification","Copper-Infused Chamber","10 L Insulated Storage Tank","RO Technology","TDS Controller Included","Sediment & Carbon Pre-Filters"],
    description:"The Prime delivers our core Puresense Technology in its most refined form. Copper-enriched and rigorously filtered — built for families who take health seriously.",
    specs:[{l:"Stages",v:"9"},{l:"Storage",v:"10 L"},{l:"Copper",v:"✓"},{l:"Alkaline",v:"—"},{l:"LED",v:"—"}],
  },
  {
    id:"zen", label:"Zen", name:"Skyliqua Zen", colorway:"Black & Grey",
    tagline:"Balance starts with every sip.",
    image:"/assets/products/zen-removed.png",
    isElite:false, badge:"Most Popular", accentColor:"#22615F",
    oval:"radial-gradient(ellipse 85% 80% at 50% 48%, rgba(34,97,95,0.09) 0%, rgba(226,244,242,0.9) 55%, #E8F3F2 100%)",
    features:["12-Stage Puresense Purification","Copper & Alkaline Dual Enrichment","10 L Premium Storage Tank","pH-Balancing Technology (7.5–9.5)","Mineral Retention Filter","RO + UV + UF + Alkaline Stack"],
    description:"The Zen adds alkaline pH balancing to our copper foundation — producing water that is cleaner, lighter, and tuned for daily wellbeing.",
    specs:[{l:"Stages",v:"12"},{l:"Storage",v:"10 L"},{l:"Copper",v:"✓"},{l:"Alkaline",v:"✓"},{l:"LED",v:"—"}],
  },
  {
    id:"elite", label:"Elite", name:"Skyliqua Elite", colorway:"Marble White & Black Gold",
    tagline:"The pinnacle. Nothing held back.",
    image:"/assets/products/elite-removed.png",
    isElite:true, badge:"Premium", accentColor:"#AC885B",
    oval:"radial-gradient(ellipse 85% 80% at 50% 48%, rgba(172,136,91,0.10) 0%, rgba(248,242,226,0.9) 55%, #F2EBD6 100%)",
    features:["12-Stage Advanced Purification","Copper & Alkaline Excellence","10 L Crystal-Clear Storage Tank","Smart LED Water Quality Display","Real-Time Purity Monitoring","Auto-Sanitisation Mode"],
    description:"The Elite unites every Skyliqua innovation — copper, alkaline, and Smart LED intelligence — in one impeccable form. For those who accept only the very best.",
    specs:[{l:"Stages",v:"12"},{l:"Storage",v:"10 L"},{l:"Copper",v:"✓"},{l:"Alkaline",v:"✓"},{l:"LED",v:"✓"}],
  },
];

const listV: Variants = { hidden:{}, show:{ transition:{ staggerChildren:0.06 } } };
const itemV: Variants = { hidden:{ opacity:0, x:-10 }, show:{ opacity:1, x:0, transition:{ duration:0.3, ease:"easeOut" } } };

export function ProductShowcase() {
  const [activeId, setActiveId] = useState("prime");
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);
  const p = PRODUCTS.find(x => x.id === activeId)!;

  return (
    <section id="products" className="flex flex-col items-center justify-center py-10 sm:py-14" style={{ background:"#F8F7F4", minHeight:"100dvh" }}>
      
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
            <p className="text-[9px] sm:text-[10px] font-bold tracking-[0.25em] uppercase mb-1.5" style={{ color:"#22615F" }}>Our Collection</p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold m-0" style={{ color:"#0C0F0D", lineHeight:1.1, letterSpacing:"-0.02em" }}>
              Choose Your Purifier
            </h2>
          </div>
          
          {/* Premium Segmented Control (Light Mode) */}
          <div className="flex items-center p-1 rounded-full relative" style={{ background:"rgba(12,15,13,0.04)", border:"1px solid rgba(12,15,13,0.06)" }}>
            {PRODUCTS.map(prod => (
              <button key={prod.id} onClick={() => setActiveId(prod.id)}
                className="relative px-6 sm:px-8 py-2.5 rounded-full text-[11px] sm:text-[12px] font-bold tracking-wide transition-colors"
                style={{ color: activeId===prod.id ? "#FFFFFF" : "rgba(12,15,13,0.5)" }}>
                {activeId === prod.id && (
                  <motion.div layoutId="activeTab" className="absolute inset-0 rounded-full"
                    style={{ background: prod.isElite ? "#AC885B" : "#22615F", boxShadow: "0 2px 10px rgba(0,0,0,0.15)" }}
                    transition={{ type:"spring", duration:0.5 }} />
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
              initial={{ opacity:0, y:15 }} animate={{ opacity:1, y:0 }} exit={{ opacity:0, y:-15 }}
              transition={{ duration:0.35, ease:"easeOut" }}
              className="relative lg:absolute lg:inset-0 w-full lg:h-full bg-white rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-[rgba(12,15,13,0.03)] flex flex-col lg:flex-row">
              
              {/* Image Side */}
              <div className="relative w-full lg:w-[45%] flex items-center justify-center p-6 sm:p-8 min-h-[280px] lg:min-h-0"
                style={{ background: p.oval }}>
                 <div className="absolute top-5 left-5 z-10 px-3 py-1.5 rounded-full text-[9px] font-bold tracking-[0.2em] uppercase bg-white shadow-sm"
                  style={{ color:p.accentColor, border:`1px solid ${p.isElite?"rgba(172,136,91,0.2)":"rgba(34,97,95,0.2)"}` }}>
                  {p.badge}
                </div>
                <motion.div animate={{ y:[0,-8,0] }} transition={{ duration:5, repeat:Infinity, ease:"easeInOut" }}
                  whileHover={{ scale: 1.05 }}
                  onClick={() => setZoomedImage(p.image)}
                  className="relative w-full max-w-[240px] aspect-[4/5] cursor-pointer group">
                  <Image src={p.image} alt={p.name} fill className="object-contain transition-transform duration-500"
                    style={{ filter:"drop-shadow(0 20px 40px rgba(12,15,13,0.08))" }}
                    sizes="(max-width: 1024px) 90vw, 40vw" priority />
                  {/* Zoom Icon Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white/90 backdrop-blur-md p-3.5 rounded-full shadow-lg border border-black/5">
                      <ZoomIn size={22} color={p.accentColor} />
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Content Side */}
              <div className="w-full lg:w-[55%] p-6 sm:p-8 lg:p-12 flex flex-col justify-center bg-white lg:h-full lg:overflow-y-auto">
                <p className="text-[9px] sm:text-[10px] font-bold tracking-[0.25em] uppercase mb-1.5" style={{ color:p.accentColor }}>{p.tagline}</p>
                <h3 className="font-serif font-bold mb-1" style={{ fontSize:"clamp(1.8rem,3vw,2.5rem)", color:"#0C0F0D", lineHeight:1.1, letterSpacing:"-0.02em" }}>
                  {p.name}
                </h3>
                <p className="text-[10px] sm:text-[11px] font-bold tracking-[0.2em] uppercase mb-4" style={{ color:"rgba(12,15,13,0.4)" }}>
                  {p.colorway}
                </p>
                <p className="text-[13px] sm:text-[14px] leading-relaxed font-light mb-6" style={{ color:"rgba(12,15,13,0.6)" }}>{p.description}</p>

                <motion.ul key={activeId+"fl"} variants={listV} initial="hidden" animate="show"
                  className="space-y-2.5 mb-8 list-none m-0 p-0 lg:flex-1 lg:min-h-0">
                  {p.features.map(f => (
                    <motion.li key={f} variants={itemV} className="flex items-start gap-3">
                      <span className="flex-shrink-0 mt-0.5 w-4 h-4 rounded-full flex items-center justify-center shadow-sm"
                        style={{ background:p.isElite?"rgba(172,136,91,0.1)":"rgba(34,97,95,0.1)" }}>
                        <Check size={10} strokeWidth={3} color={p.accentColor} />
                      </span>
                      <span className="text-[13px] leading-snug font-medium" style={{ color:"rgba(12,15,13,0.7)" }}>{f}</span>
                    </motion.li>
                  ))}
                </motion.ul>

                {/* Specs Grid */}
                <div className="grid grid-cols-3 sm:grid-cols-5 gap-2 mb-6">
                  {p.specs.map(s => (
                    <div key={s.l} className="text-center rounded-xl p-2.5"
                      style={{ background:"#F8F7F4", border:"1px solid rgba(12,15,13,0.04)" }}>
                      <div className="text-[13px] font-bold mb-0.5" style={{ color:p.accentColor }}>{s.v}</div>
                      <div className="text-[8px] font-bold uppercase tracking-[0.1em]" style={{ color:"rgba(12,15,13,0.4)" }}>{s.l}</div>
                    </div>
                  ))}
                </div>

                <a href={`?model=${p.id}#contact`}
                  className="inline-flex items-center justify-center w-full sm:w-max px-8 py-3.5 rounded-full font-bold text-[12px] tracking-wide text-white transition-all duration-300 hover:opacity-90 hover:shadow-lg active:scale-95"
                  style={{ background:p.isElite?"#AC885B":"#22615F" }}>
                  Enquire About {p.label}
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
