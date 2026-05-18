"use client";

import { useRef, useEffect } from "react";
import { motion, useInView, useMotionValue, animate, type Variants } from "framer-motion";

function Counter({ to, suffix="" }: { to:number; suffix?:string }) {
  const spanRef = useRef<HTMLSpanElement>(null);
  const inView  = useInView(spanRef, { once:true, margin:"-60px" });
  const val     = useMotionValue(0);
  useEffect(() => {
    if (!inView) return;
    const c = animate(val, to, { duration:2.2, ease:"easeOut", onUpdate:v => { if(spanRef.current) spanRef.current.textContent = Math.round(v)+suffix; } });
    return c.stop;
  }, [inView, to, suffix, val]);
  return <span ref={spanRef}>0{suffix}</span>;
}

const pillarsV: Variants = { hidden:{}, show:{ transition:{ staggerChildren:0.1 } } };
const pillarV:  Variants = { hidden:{ opacity:0, y:20 }, show:{ opacity:1, y:0, transition:{ duration:0.55, ease:"easeOut" } } };

const REASONS = [
  { title:"Certified Safe",    body:"Every unit passes multi-stage quality assurance. Peace of mind built into every component." },
  { title:"Life-Long Service", body:"Our commitment does not end at purchase. Skyliqua stands with you for the lifetime of your purifier." },
  { title:"Eco-Conscious",     body:"Optimised recovery ratios and long-life filter cartridges reduce environmental impact without compromise." },
  { title:"Premium Materials", body:"Food-grade stainless steel tanks and BPA-free components throughout — what touches your water matters." },
];

export function WhySkyliqua() {
  return (
    <section style={{ background:"#FAFAF8" }}>

      {/* Stats band */}
      <div style={{ background:"#FAFAF8" }}>
        <div className="w-full max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-16 py-12 sm:py-14 lg:py-16">
          {/* 2-col mobile, 4-col desktop */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px rounded-sm overflow-hidden"
            style={{ background:"rgba(12,15,13,0.05)" }}>
            {[
              { to:12,  suffix:"",    label:"Purification Stages",  sub:"in every Skyliqua"       },
              { to:10,  suffix:" L",  label:"Insulated Storage",    sub:"always-ready capacity"   },
              { to:99,  suffix:".9%", label:"Pathogen Eliminated",  sub:"RO + UV dual barrier"    },
              { to:100, suffix:"%",   label:"Service Commitment",   sub:"lifetime support"        },
            ].map(s => (
              <div key={s.label} className="text-center py-8 sm:py-10 px-4 sm:px-6 bg-white">
                <div className="font-serif font-medium tracking-tight leading-none mb-3" style={{ fontSize:"clamp(2.2rem,4.5vw,3.8rem)", color:"#C8A97E" }}>
                  <Counter to={s.to} suffix={s.suffix} />
                </div>
                <div className="text-xs sm:text-[13px] font-semibold mb-1.5 tracking-wide" style={{ color:"#0C0F0D" }}>{s.label}</div>
                <div className="text-[10px] sm:text-xs" style={{ color:"rgba(12,15,13,0.4)" }}>{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Brand promise */}
      <div className="w-full max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-16 py-16 sm:py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Left */}
          <motion.div initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true, margin:"-60px" }} transition={{ duration:0.65, ease:"easeOut" }}>
            <p className="text-[10px] font-bold tracking-[0.28em] uppercase mb-4" style={{ color:"#12423F" }}>Our Promise</p>
            <h2 className="font-serif font-medium tracking-tight m-0 mb-5 leading-tight" style={{ fontSize:"clamp(1.8rem,3.5vw,3rem)", color:"#0C0F0D" }}>
              Built for Life. <em className="font-normal" style={{ fontStyle:"italic", color:"#12423F" }}>Backed for Life.</em>
            </h2>
            <p className="text-sm sm:text-base leading-relaxed font-light mb-8" style={{ color:"rgba(12,15,13,0.5)", maxWidth:"420px" }}>
              Skyliqua was founded on a single conviction: your family deserves water that doesn't merely meet a
              safety standard — it surpasses it, in every stage, in every sip.
            </p>
            <blockquote className="m-0 pl-5" style={{ borderLeft:"2px solid #C8A97E" }}>
              <p className="text-sm sm:text-base leading-relaxed mb-3" style={{ fontStyle:"italic", color:"rgba(12,15,13,0.58)" }}>
                "We don't just purify water. We care for the people who drink it —
                and the families whose health depends on it."
              </p>
              <cite className="text-[10px] font-bold tracking-[0.16em] uppercase not-italic" style={{ color:"#C8A97E" }}>
                — The Skyliqua Team
              </cite>
            </blockquote>
          </motion.div>

          {/* Right — pillars */}
          <motion.ul variants={pillarsV} initial="hidden" whileInView="show" viewport={{ once:true, margin:"-60px" }}
            className="list-none m-0 p-0 flex flex-col">
            {REASONS.map((r, i) => (
              <motion.li key={r.title} variants={pillarV}
                className="flex items-start gap-4 sm:gap-5 py-6 sm:py-7"
                style={{ borderTop:i>0?"1px solid rgba(12,15,13,0.07)":"none" }}>
                <div className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ background:"rgba(18,66,63,0.08)" }}>
                  <div className="w-1.5 h-1.5 rounded-full" style={{ background:"#12423F" }} />
                </div>
                <div>
                  <div className="text-sm sm:text-[0.9375rem] font-semibold mb-1.5" style={{ color:"#0C0F0D" }}>{r.title}</div>
                  <div className="text-sm leading-relaxed font-light" style={{ color:"rgba(12,15,13,0.45)" }}>{r.body}</div>
                </div>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}
