"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const LINKS = [
  { name: "Products",  href: "#products",  className: "" },
  { name: "Puresense", href: "#puresense", className: "" },
  { name: "Features",  href: "#features",  className: "hidden sm:inline-block" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

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

        {/* Desktop nav (always visible on mobile now, with mobile-hidden items) */}
        <nav className="flex items-center gap-5 sm:gap-8">
          {LINKS.map((l) => (
            <Link key={l.name} href={l.href}
              className={`text-[11px] font-medium tracking-[0.2em] uppercase transition-all duration-300 ${l.className}`}
              style={{ color: scrolled ? "#0C0F0D" : "rgba(12,15,13,0.7)", textShadow: "none" }}
              onMouseEnter={e => { 
                (e.currentTarget as HTMLElement).style.color = "#14878E"; 
              }}
              onMouseLeave={e => { 
                (e.currentTarget as HTMLElement).style.color = scrolled ? "#0C0F0D" : "rgba(12,15,13,0.7)"; 
              }}
            >
              {l.name}
            </Link>
          ))}
          <a href="#contact"
            className="hidden sm:inline-flex items-center justify-center px-8 py-[14px] rounded-full text-[10px] font-bold tracking-[0.2em] transition-all duration-500 hover:bg-[#222222] hover:shadow-[0_10px_30px_rgba(0,0,0,0.1)] active:scale-95 uppercase"
            style={{ background: "#0F0F0F", color: "#FFFFFF" }}>
            Enquire Now
          </a>
        </nav>

        {/* Mobile uses same nav as desktop; hamburger removed per request */}
      </div>
      
    </header>
  );
}
