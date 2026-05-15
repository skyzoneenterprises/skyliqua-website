"use client";
import { CtaSection } from "@/components/sections/CtaSection";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, X, MessageSquare } from "lucide-react";

export function CallbackPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasDismissed, setHasDismissed] = useState(false);

  useEffect(() => {
    // Show after 10 seconds of page load (for demo)
    // Real-world scenario might use 60-120 seconds or exit-intent
    const timer = setTimeout(() => {
      if (!hasDismissed) {
        setIsVisible(true);
      }
    }, 10000);

    return () => clearTimeout(timer);
  }, [hasDismissed]);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="fixed bottom-6 right-6 sm:bottom-10 sm:right-10 z-[100] w-[calc(100vw-48px)] sm:w-[380px] rounded-xl overflow-hidden shadow-2xl"
        style={{
          background: "#ffffff",
          border: "1px solid rgba(12,15,13,0.08)",
        }}
      >
        {/* Close Button */}
        <button
          onClick={() => {
            setIsVisible(false);
            setHasDismissed(true);
          }}
          className="absolute top-3 right-3 p-1.5 rounded-full hover:bg-gray-100 transition-colors"
          style={{ color: "rgba(12,15,13,0.4)" }}
        >
          <X size={18} />
        </button>

        {/* Content */}
        <div className="p-6">
          <div className="w-12 h-12 rounded-full mb-4 flex items-center justify-center" style={{ background: "rgba(11,171,166,0.1)" }}>
            <Phone size={22} color="#0BABA6" />
          </div>

          <h3 className="font-display text-xl font-bold mb-2" style={{ color: "#0C0F0D" }}>
            Talk with an expert now!
          </h3>
          <p className="text-sm leading-relaxed font-light mb-6" style={{ color: "rgba(12,15,13,0.6)" }}>
            Need help choosing the right Skyliqua model or want to check your existing filter? Let's connect.
          </p>

          <div className="flex flex-col gap-3">
            <a href="#contact"
              className="flex items-center justify-center gap-2 w-full py-3 rounded-sm font-semibold text-[13px] tracking-wide text-white transition-all hover:opacity-90 active:scale-[0.98]"
              style={{ background: "#0BABA6" }}>
              <Phone size={16} />
              Request Callback
            </a>
            <a href="https://wa.me/919483548853" target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 rounded-sm font-semibold text-[13px] tracking-wide transition-all hover:bg-gray-50 active:scale-[0.98]"
              style={{ background: "rgba(12,15,13,0.03)", color: "#0C0F0D", border: "1px solid rgba(12,15,13,0.06)" }}>
              <MessageSquare size={16} />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
