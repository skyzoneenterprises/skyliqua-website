"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { Check } from "lucide-react";

const PRODUCTS = [
  {
    id:"prime", label:"Prime", name:"Skyliqua Prime",
    tagline:"Pure essentials, beautifully delivered.",
    image:"/assets/products/prime-removed.png",
    isElite:false, badge:"Best Value", accentColor:"#0BABA6",
    oval:"radial-gradient(ellipse 85% 80% at 50% 48%, rgba(11,171,166,0.09) 0%, rgba(226,244,242,0.9) 55%, #E8F3F2 100%)",
    features:["12-Stage Puresense Purification","Copper-Infused Chamber","10 L Insulated Storage Tank","RO + UV + UF Technology","TDS Controller Included","Sediment & Carbon Pre-Filters"],
    description:"The Prime delivers our core Puresense Technology in its most refined form. Copper-enriched and rigorously filtered — built for families who take health seriously.",
    specs:[{l:"Stages",v:"12"},{l:"Storage",v:"10 L"},{l:"Copper",v:"✓"},{l:"Alkaline",v:"—"},{l:"LED",v:"—"}],
  },
  {
    id:"zen", label:"Zen", name:"Skyliqua Zen",
    tagline:"Balance starts with every sip.",
    image:"/assets/products/zen-removed.png",
    isElite:false, badge:"Most Popular", accentColor:"#0BABA6",
    oval:"radial-gradient(ellipse 85% 80% at 50% 48%, rgba(11,171,166,0.09) 0%, rgba(226,244,242,0.9) 55%, #E8F3F2 100%)",
    features:["12-Stage Puresense Purification","Copper & Alkaline Dual Enrichment","10 L Premium Storage Tank","pH-Balancing Technology (7.5–9.5)","Mineral Retention Filter","RO + UV + UF + Alkaline Stack"],
    description:"The Zen adds alkaline pH balancing to our copper foundation — producing water that is cleaner, lighter, and tuned for daily wellbeing.",
    specs:[{l:"Stages",v:"12"},{l:"Storage",v:"10 L"},{l:"Copper",v:"✓"},{l:"Alkaline",v:"✓"},{l:"LED",v:"—"}],
  },
  {
    id:"elite", label:"Elite", name:"Skyliqua Elite",
    tagline:"The pinnacle. Nothing held back.",
    image:"/assets/products/elite-removed.png",
    isElite:true, badge:"Premium", accentColor:"#C8A84B",
    oval:"radial-gradient(ellipse 85% 80% at 50% 48%, rgba(200,168,75,0.10) 0%, rgba(248,242,226,0.9) 55%, #F2EBD6 100%)",
    features:["12-Stage Advanced Purification","Copper & Alkaline Excellence","10 L Crystal-Clear Storage Tank","Smart LED Water Quality Display","Real-Time Purity Monitoring","Auto-Sanitisation Mode"],
    description:"The Elite unites every Skyliqua innovation — copper, alkaline, and Smart LED intelligence — in one impeccable form. For those who accept only the very best.",
    specs:[{l:"Stages",v:"12"},{l:"Storage",v:"10 L"},{l:"Copper",v:"✓"},{l:"Alkaline",v:"✓"},{l:"LED",v:"✓"}],
  },
];

const listV: Variants = { hidden:{}, show:{ transition:{ staggerChildren:0.06 } } };
const itemV: Variants = { hidden:{ opacity:0, x:-10 }, show:{ opacity:1, x:0, transition:{ duration:0.3, ease:"easeOut" } } };

export function ProductShowcase() {
  const [activeId, setActiveId] = useState("prime");
  const p = PRODUCTS.find(x => x.id === activeId)!;

  return (
    <section id="products" className="flex flex-col bg-white" style={{ minHeight:"100dvh" }}>

      {/* Header */}
      <div className="px-5 sm:px-8 lg:px-20 pt-10 sm:pt-12 lg:pt-14 flex-shrink-0">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-6">
          <div>
            <p className="text-[10px] font-bold tracking-[0.28em] uppercase mb-2" style={{ color:"#0BABA6" }}>Our Collection</p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold m-0" style={{ color:"#0C0F0D", lineHeight:1.1, letterSpacing:"-0.02em" }}>
              Choose Your Purifier
            </h2>
          </div>
          <p className="text-sm text-right hidden sm:block max-w-[220px] leading-relaxed font-light" style={{ color:"rgba(12,15,13,0.4)" }}>
            Every model shares the same Puresense core.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex gap-0 overflow-x-auto" style={{ borderBottom:"1px solid rgba(12,15,13,0.07)" }}>
          {PRODUCTS.map(prod => (
            <button key={prod.id} onClick={() => setActiveId(prod.id)}
              className="flex-shrink-0 px-6 sm:px-8 py-3 text-[13px] font-semibold tracking-wide transition-all duration-200"
              style={{
                color: activeId===prod.id ? (prod.isElite?"#C8A84B":"#0BABA6") : "rgba(12,15,13,0.38)",
                background:"transparent", border:"none",
                borderBottom:`2px solid ${activeId===prod.id ? (prod.isElite?"#C8A84B":"#0BABA6") : "transparent"}`,
                cursor:"pointer", marginBottom:"-1px",
              }}>
              {prod.label}
            </button>
          ))}
        </div>
      </div>

      {/* Panel — flex-1 fills remaining space */}
      <div className="flex-1 px-5 sm:px-8 lg:px-20 py-5 sm:py-6 flex flex-col min-h-0">
        <AnimatePresence mode="wait">
          <motion.div key={activeId}
            initial={{ opacity:0, y:12 }} animate={{ opacity:1, y:0 }} exit={{ opacity:0, y:-12 }}
            transition={{ duration:0.3, ease:"easeOut" }}
            className="flex-1 flex flex-col lg:grid lg:grid-cols-2 gap-4 sm:gap-5 min-h-0">

            {/* Image */}
            <div className="relative rounded-sm overflow-hidden flex-shrink-0 h-64 sm:h-80 lg:h-auto lg:flex-1"
              style={{ background:p.oval }}>
              <div className="absolute top-3.5 right-3.5 z-10 px-3 py-1 rounded-sm text-[10px] font-bold tracking-[0.16em] uppercase"
                style={{ background:p.isElite?"#ffffff":"#ffffff", color:p.accentColor, border:`1px solid ${p.isElite?"rgba(200,168,75,0.3)":"rgba(11,171,166,0.3)"}` }}>
                {p.badge}
              </div>
              <div className="absolute bottom-[6%] left-[18%] right-[18%] h-5 rounded-full pointer-events-none"
                style={{ background:"rgba(0,0,0,0.05)", filter:"blur(14px)", zIndex:1 }} />
              <motion.div animate={{ y:[0,-12,0] }} transition={{ duration:4.5, repeat:Infinity, ease:"easeInOut" }}
                className="absolute inset-[6%] z-10">
                <Image src={p.image} alt={p.name} fill className="object-contain"
                  style={{ filter:"drop-shadow(0 18px 40px rgba(0,0,0,0.06))" }}
                  sizes="(max-width: 1024px) 90vw, 50vw" />
              </motion.div>
            </div>

            {/* Content */}
            <div className="rounded-sm flex flex-col lg:overflow-hidden"
              style={{ border:"1px solid rgba(12,15,13,0.07)", background:"#FAFAF8", padding:"24px sm:28px lg:36px" }}>
              <div className="p-6 sm:p-7 lg:p-9 flex-1 flex flex-col min-h-0">
                <div className="flex-1 min-h-0">
                  <p className="text-[10px] font-bold tracking-[0.22em] uppercase mb-2" style={{ color:p.accentColor }}>{p.tagline}</p>
                  <h3 className="font-display font-bold mb-3 leading-tight" style={{ fontSize:"clamp(1.5rem,2.5vw,2.2rem)", color:"#0C0F0D", letterSpacing:"-0.02em" }}>
                    {p.name}
                  </h3>
                  <p className="text-sm leading-relaxed font-light mb-5" style={{ color:"rgba(12,15,13,0.48)" }}>{p.description}</p>

                  <motion.ul key={activeId+"fl"} variants={listV} initial="hidden" animate="show"
                    className="space-y-2.5 mb-5 list-none m-0 p-0">
                    {p.features.map(f => (
                      <motion.li key={f} variants={itemV} className="flex items-start gap-2.5">
                        <span className="flex-shrink-0 mt-0.5 w-4 h-4 rounded-sm flex items-center justify-center"
                          style={{ background:p.isElite?"rgba(200,168,75,0.12)":"rgba(11,171,166,0.1)" }}>
                          <Check size={9} strokeWidth={3} color={p.accentColor} />
                        </span>
                        <span className="text-[13px] leading-snug" style={{ color:"rgba(12,15,13,0.62)" }}>{f}</span>
                      </motion.li>
                    ))}
                  </motion.ul>
                </div>

                {/* Specs + CTA */}
                <div className="flex-shrink-0 pt-4" style={{ borderTop:"1px solid rgba(12,15,13,0.06)" }}>
                  <div className="grid grid-cols-5 gap-2 mb-4">
                    {p.specs.map(s => (
                      <div key={s.l} className="text-center rounded-sm py-2.5"
                        style={{ background:"rgba(12,15,13,0.03)", border:"1px solid rgba(12,15,13,0.05)" }}>
                        <div className="text-sm font-bold mb-0.5" style={{ color:p.accentColor }}>{s.v}</div>
                        <div className="text-[8.5px] uppercase tracking-wide" style={{ color:"rgba(12,15,13,0.35)" }}>{s.l}</div>
                      </div>
                    ))}
                  </div>
                  <a href="#contact"
                    className="flex items-center justify-center w-full py-4 rounded-sm font-semibold text-sm tracking-wide text-white transition-all duration-200 hover:opacity-90 active:scale-[0.98]"
                    style={{ background:p.isElite?"#C8A84B":"#0BABA6" }}>
                    Enquire About {p.label}
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
