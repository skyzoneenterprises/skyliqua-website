"use client";

import { useState, useEffect, Suspense } from "react";
import { motion } from "framer-motion";
import { useSearchParams } from "next/navigation";

function CtaFormContent() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const searchParams = useSearchParams();
  const [selectedModel, setSelectedModel] = useState("unspecified");

  useEffect(() => {
    const model = searchParams.get("model");
    if (model) {
      setSelectedModel(model);
    }
  }, [searchParams]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate submission
    setTimeout(() => setIsSubmitting(false), 1500);
  };

  return (
    <section style={{ padding: "100px 24px", background: "#f8f7f4" }} id="contact">
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          style={{
            background: "#ffffff",
            borderRadius: "4px",
            border: "1px solid rgba(0,0,0,0.08)",
            overflow: "hidden",
            position: "relative"
          }}
          className="flex flex-col md:flex-row"
        >
          {/* Left Side: Copy */}
          <div style={{ flex: 1, background: "#0C0F0D", color: "#ffffff", position: "relative" }} className="md:p-16 p-8">
            <div className="mb-8">
              <img src="/assets/brand/skyliqua-logo-clean.png" alt="Skyliqua" style={{ height: "28px", width: "auto", filter: "brightness(0) invert(1)", opacity: 0.8 }} />
            </div>
            <h2 style={{ fontWeight: 600, color: "#ffffff", marginBottom: "24px", letterSpacing: "-0.02em", lineHeight: 1.1, position: "relative", zIndex: 1 }} className="text-3xl md:text-5xl">
              Book Your Free <br/><span style={{ color: "#0BABA6" }}>Home Consultation</span>
            </h2>
            <p style={{ color: "rgba(255,255,255,0.7)", marginBottom: "40px", lineHeight: 1.6, position: "relative", zIndex: 1 }} className="text-base md:text-lg">
              Experience the Puresense difference in your own home. Our experts will test your water quality and recommend the perfect Skyliqua system.
            </p>

            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "20px", position: "relative", zIndex: 1 }}>
              {[
                "Complimentary Water Testing",
                "Expert Product Demonstration",
                "No-Obligation Quotation"
              ].map((item, i) => (
                <li key={i} style={{ display: "flex", alignItems: "center", gap: "16px", color: "rgba(255,255,255,0.85)" }} className="text-sm md:text-base">
                  <div style={{ width: "24px", height: "24px", borderRadius: "4px", background: "rgba(11,171,166,0.2)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0BABA6" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Right Side: Form */}
          <div style={{ flex: 1, background: "#ffffff" }} className="md:p-16 p-8">
            <h3 style={{ fontSize: "1.5rem", fontWeight: 600, color: "#0C0F0D", marginBottom: "32px" }}>
              Request a Callback
            </h3>
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <label htmlFor="name" style={{ fontSize: "0.875rem", fontWeight: 500, color: "rgba(12,15,13,0.7)" }}>Full Name</label>
                <input
                  type="text" id="name" required
                  style={{ width: "100%", padding: "14px 20px", borderRadius: "4px", border: "1px solid rgba(12,15,13,0.1)", background: "#f8f7f4", fontSize: "1rem", color: "#0C0F0D", outline: "none", transition: "all 0.2s ease" }}
                  onFocus={e => { e.currentTarget.style.border = "1px solid #0BABA6"; e.currentTarget.style.background = "#ffffff"; }}
                  onBlur={e => { e.currentTarget.style.border = "1px solid rgba(12,15,13,0.1)"; e.currentTarget.style.background = "#f8f7f4"; }}
                  placeholder="Rahul Sharma"
                />
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <label htmlFor="phone" style={{ fontSize: "0.875rem", fontWeight: 500, color: "rgba(12,15,13,0.7)" }}>Phone Number</label>
                <input
                  type="tel" id="phone" required
                  style={{ width: "100%", padding: "14px 20px", borderRadius: "4px", border: "1px solid rgba(12,15,13,0.1)", background: "#f8f7f4", fontSize: "1rem", color: "#0C0F0D", outline: "none", transition: "all 0.2s ease" }}
                  onFocus={e => { e.currentTarget.style.border = "1px solid #0BABA6"; e.currentTarget.style.background = "#ffffff"; }}
                  onBlur={e => { e.currentTarget.style.border = "1px solid rgba(12,15,13,0.1)"; e.currentTarget.style.background = "#f8f7f4"; }}
                  placeholder="+91 98765 43210"
                />
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <label htmlFor="city" style={{ fontSize: "0.875rem", fontWeight: 500, color: "rgba(12,15,13,0.7)" }}>City / Pincode</label>
                <input
                  type="text" id="city" required
                  style={{ width: "100%", padding: "14px 20px", borderRadius: "4px", border: "1px solid rgba(12,15,13,0.1)", background: "#f8f7f4", fontSize: "1rem", color: "#0C0F0D", outline: "none", transition: "all 0.2s ease" }}
                  onFocus={e => { e.currentTarget.style.border = "1px solid #0BABA6"; e.currentTarget.style.background = "#ffffff"; }}
                  onBlur={e => { e.currentTarget.style.border = "1px solid rgba(12,15,13,0.1)"; e.currentTarget.style.background = "#f8f7f4"; }}
                  placeholder="e.g. Mumbai"
                />
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <label htmlFor="model" style={{ fontSize: "0.875rem", fontWeight: 500, color: "rgba(12,15,13,0.7)" }}>Product of Interest</label>
                <select
                  id="model" value={selectedModel} onChange={e => setSelectedModel(e.target.value)}
                  style={{ width: "100%", padding: "14px 20px", borderRadius: "4px", border: "1px solid rgba(12,15,13,0.1)", background: "#f8f7f4", fontSize: "1rem", color: "#0C0F0D", outline: "none", transition: "all 0.2s ease", cursor: "pointer" }}
                  onFocus={e => { e.currentTarget.style.border = "1px solid #0BABA6"; e.currentTarget.style.background = "#ffffff"; }}
                  onBlur={e => { e.currentTarget.style.border = "1px solid rgba(12,15,13,0.1)"; e.currentTarget.style.background = "#f8f7f4"; }}
                >
                  <option value="unspecified">Not sure yet / Need consultation</option>
                  <option value="prime">Skyliqua Prime (9-Stage)</option>
                  <option value="zen">Skyliqua Zen (Alkaline)</option>
                  <option value="elite">Skyliqua Elite (Smart LED)</option>
                </select>
                <div style={{ position: "absolute", right: "20px", top: "50%", transform: "translateY(-50%)", pointerEvents: "none" }}>
                  {/* The select caret isn't strictly necessary with appearance:none if we add a custom svg, but we can keep it simple or remove appearance:none on Windows */}
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                style={{
                  width: "100%", padding: "16px", borderRadius: "4px", background: "#0BABA6", color: "#ffffff", fontSize: "1rem", fontWeight: 600, cursor: isSubmitting ? "not-allowed" : "pointer", border: "none", outline: "none", marginTop: "8px", transition: "all 0.2s ease", display: "flex", justifyContent: "center", alignItems: "center", gap: "10px"
                }}
                onMouseEnter={e => { if(!isSubmitting) { e.currentTarget.style.opacity = "0.9"; } }}
                onMouseLeave={e => { if(!isSubmitting) { e.currentTarget.style.opacity = "1"; } }}
              >
                {isSubmitting ? "Submitting..." : "Submit Request"}
                {!isSubmitting && (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                  </svg>
                )}
              </button>
            </form>
            <p style={{ fontSize: "0.8rem", color: "rgba(12,15,13,0.4)", textAlign: "center", marginTop: "24px" }}>
              By submitting this form, you agree to our privacy policy.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function CtaSection() {
  return (
    <Suspense fallback={<div style={{ padding: "100px", textAlign: "center" }}>Loading...</div>}>
      <CtaFormContent />
    </Suspense>
  );
}
