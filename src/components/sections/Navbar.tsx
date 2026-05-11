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
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        padding: scrolled ? "12px 0" : "18px 0",
        background: scrolled ? "rgba(12,15,13,0.96)" : "#0C0F0D",
        backdropFilter: scrolled ? "blur(18px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.05)" : "1px solid transparent",
        boxShadow: scrolled ? "0 4px 24px rgba(0,0,0,0.2)" : "none",
      }}
    >
      <div className="w-full max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-16 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="relative flex-shrink-0 w-36 h-9">
          <Image src="/assets/brand/skyliqua-logo-clean.png" alt="Skyliqua" fill className="object-contain object-left" priority />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {LINKS.map((l) => (
            <Link key={l.name} href={l.href}
              className="text-[13px] font-medium tracking-wide transition-colors duration-200"
              style={{ color: "rgba(255,255,255,0.65)" }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = "#ffffff"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.65)"; }}
            >
              {l.name}
            </Link>
          ))}
          <a href="#contact"
            className="px-5 py-2.5 rounded-sm text-white text-[13px] font-semibold tracking-wide transition-all duration-200 hover:opacity-90 active:scale-95"
            style={{ background: "#0BABA6" }}>
            Get Yours Now
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
            style={{ background: "rgba(12,15,13,0.98)", backdropFilter: "blur(20px)", borderColor: "rgba(255,255,255,0.05)" }}
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
                className="mt-2 w-full py-4 text-center rounded-sm text-white font-semibold text-[15px] tracking-wide"
                style={{ background: "#0BABA6" }}>
                Get Yours Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
