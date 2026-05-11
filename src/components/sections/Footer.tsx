"use client";

import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer id="contact" style={{ background:"#0C0F0D", paddingTop:"64px", paddingBottom:"36px" }}>
      <div className="w-full max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-16">

        {/* Grid — 1-col mobile, 2-col sm, 4-col lg */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12 lg:gap-16 mb-12">

          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="relative w-36 h-9 mb-6">
              <Image src="/assets/brand/skyliqua-logo-clean.png" alt="Skyliqua" fill className="object-contain object-left"
                style={{ filter:"brightness(0) invert(1)" }} />
            </div>
            <p className="text-sm leading-relaxed font-light mb-6 max-w-xs" style={{ color:"rgba(255,255,255,0.35)" }}>
              Advanced 12-stage Puresense purification, enriched with copper and alkaline goodness. Life-long care for your family's health.
            </p>
            <div className="flex gap-2.5">
              {[
                { label:"Facebook", fill:true, path:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" },
                { label:"Instagram", fill:false, isInsta:true },
                { label:"X (Twitter)", fill:true, path:"M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" },
              ].map(s => (
                <a key={s.label} href="#" aria-label={s.label}
                  className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200"
                  style={{ background:"rgba(255,255,255,0.06)", color:"rgba(255,255,255,0.38)" }}
                  onMouseEnter={e=>{ const el=e.currentTarget as HTMLElement; el.style.background="rgba(11,171,166,0.15)"; el.style.color="#0BABA6"; }}
                  onMouseLeave={e=>{ const el=e.currentTarget as HTMLElement; el.style.background="rgba(255,255,255,0.06)"; el.style.color="rgba(255,255,255,0.38)"; }}>
                  {s.isInsta
                    ? <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                    : <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d={s.path!}/></svg>
                  }
                </a>
              ))}
            </div>
          </div>

          {/* Products */}
          <div>
            <div className="text-[10px] font-bold tracking-[0.22em] uppercase mb-5" style={{ color:"rgba(255,255,255,0.3)" }}>Products</div>
            {["Skyliqua Prime","Skyliqua Zen","Skyliqua Elite"].map(item => (
              <Link key={item} href="#products"
                className="block text-sm font-light mb-3.5 transition-colors duration-200"
                style={{ color:"rgba(255,255,255,0.48)" }}
                onMouseEnter={e=>{ (e.currentTarget as HTMLElement).style.color="#0BABA6"; }}
                onMouseLeave={e=>{ (e.currentTarget as HTMLElement).style.color="rgba(255,255,255,0.48)"; }}>
                {item}
              </Link>
            ))}
          </div>

          {/* Technology */}
          <div>
            <div className="text-[10px] font-bold tracking-[0.22em] uppercase mb-5" style={{ color:"rgba(255,255,255,0.3)" }}>Technology</div>
            {["Puresense Filtration","Copper Enrichment","Alkaline Balance","Smart LED Tech"].map(item => (
              <Link key={item} href="#puresense"
                className="block text-sm font-light mb-3.5 transition-colors duration-200"
                style={{ color:"rgba(255,255,255,0.48)" }}
                onMouseEnter={e=>{ (e.currentTarget as HTMLElement).style.color="#0BABA6"; }}
                onMouseLeave={e=>{ (e.currentTarget as HTMLElement).style.color="rgba(255,255,255,0.48)"; }}>
                {item}
              </Link>
            ))}
          </div>

          {/* Contact */}
          <div>
            <div className="text-[10px] font-bold tracking-[0.22em] uppercase mb-5" style={{ color:"rgba(255,255,255,0.3)" }}>Contact</div>
            {[
              { icon:Phone, text:"1800-XXX-XXXX" },
              { icon:Mail,  text:"support@skyliqua.com" },
              { icon:MapPin,text:"123 Pure Water Avenue,\nTech Park, City — 400001" },
            ].map(({ icon:Icon, text }) => (
              <div key={text} className="flex items-start gap-3 mb-4">
                <Icon size={14} className="flex-shrink-0 mt-0.5" style={{ color:"#0BABA6" }} />
                <span className="text-sm font-light leading-relaxed whitespace-pre-line" style={{ color:"rgba(255,255,255,0.42)" }}>{text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-7"
          style={{ borderTop:"1px solid rgba(255,255,255,0.07)" }}>
          <p className="text-xs font-light" style={{ color:"rgba(255,255,255,0.25)" }}>
            © {new Date().getFullYear()} Skyliqua. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy Policy","Terms of Service"].map(t => (
              <Link key={t} href="#"
                className="text-xs font-light transition-colors duration-200"
                style={{ color:"rgba(255,255,255,0.25)" }}
                onMouseEnter={e=>{ (e.currentTarget as HTMLElement).style.color="#0BABA6"; }}
                onMouseLeave={e=>{ (e.currentTarget as HTMLElement).style.color="rgba(255,255,255,0.25)"; }}>
                {t}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
