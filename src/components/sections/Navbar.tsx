"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const LINKS = [
  { name: "Products",  href: "#products"  },
  { name: "Puresense", href: "#puresense" },
  { name: "Features",  href: "#features"  },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        padding: scrolled ? "12px 0" : "28px 0",
        background: scrolled ? "rgba(255, 255, 255, 0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(24px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(0,0,0,0.03)" : "1px solid transparent",
        boxShadow: scrolled ? "0 10px 40px rgba(0,0,0,0.03)" : "none",
      }}
    >
      <div className="w-full max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-16 flex items-center justify-between">

        {/* Logo (Hidden when at top since it's massive in the Hero) */}
        <Link href="/" className={`relative flex-shrink-0 w-32 h-10 transition-all duration-300 ${scrolled ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4 pointer-events-none'}`}>
          <Image src="/assets/brand/skyliqua-logo-clean.png" alt="Skyliqua" fill className="object-contain object-left" priority />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-12">
          {LINKS.map((l) => (
            <Link key={l.name} href={l.href}
              className="text-[11px] font-medium tracking-[0.2em] uppercase transition-all duration-300"
              style={{ color: scrolled ? "rgba(17,17,17,0.7)" : "rgba(255,255,255,0.7)", textShadow: scrolled ? "none" : "0 2px 10px rgba(0,0,0,0.15)" }}
              onMouseEnter={e => { 
                (e.currentTarget as HTMLElement).style.color = scrolled ? "#111111" : "#FFFFFF"; 
                (e.currentTarget as HTMLElement).style.textShadow = scrolled ? "none" : "0 0 12px rgba(255,255,255,0.8)";
              }}
              onMouseLeave={e => { 
                (e.currentTarget as HTMLElement).style.color = scrolled ? "rgba(17,17,17,0.7)" : "rgba(255,255,255,0.7)"; 
                (e.currentTarget as HTMLElement).style.textShadow = scrolled ? "none" : "0 2px 10px rgba(0,0,0,0.15)";
              }}
            >
              {l.name}
            </Link>
          ))}
          <a href="#contact"
            className="px-8 py-[14px] rounded-full text-[10px] font-bold tracking-[0.2em] transition-all duration-500 hover:bg-[#222222] hover:shadow-[0_10px_30px_rgba(0,0,0,0.1)] active:scale-95 uppercase"
            style={{ background: "#0F0F0F", color: "#FFFFFF" }}>
            Enquire Now
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-sm transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
          style={{ background: open ? "rgba(255,255,255,0.05)" : "transparent" }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round">
            {open
              ? <><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></>
              : <><line x1="3" y1="7" x2="21" y2="7"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="17" x2="21" y2="17"/></>
            }
          </svg>
        </button>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-full left-0 right-0 border-b"
            style={{ background: "rgba(5,20,19,0.98)", backdropFilter: "blur(20px)", borderColor: "rgba(255,255,255,0.05)" }}
          >
            <div className="px-5 py-4 flex flex-col gap-1">
              {LINKS.map((l) => (
                <Link key={l.name} href={l.href} onClick={() => setOpen(false)}
                  className="block px-4 py-3.5 text-[15px] font-medium rounded-sm transition-colors"
                  style={{ color: "rgba(255,255,255,0.8)" }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.05)"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "transparent"; }}
                >
                  {l.name}
                </Link>
              ))}
                <a href="#contact" onClick={() => setOpen(false)}
                className="mt-2 w-full py-4 text-center rounded-sm text-white font-bold text-[15px] tracking-wide uppercase"
                style={{ background: "#C8A97E" }}>
                Get Yours Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
