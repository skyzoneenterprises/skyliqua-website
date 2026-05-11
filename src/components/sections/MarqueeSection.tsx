const ITEMS = [
  "12-Stage Puresense Purification",
  "Copper Enrichment",
  "Alkaline Balance",
  "Smart LED Monitor",
  "RO · UV · UF Technology",
  "Life-Long Service",
  "pH 7.5 – 9.5",
  "Ayurvedic Wellness",
  "Auto-Sanitisation",
  "99.9% Purity Rate",
];

const strip = [...ITEMS, ...ITEMS];

export function MarqueeSection() {
  return (
    <div
      style={{
        borderTop: "1px solid rgba(12,15,13,0.06)",
        borderBottom: "1px solid rgba(12,15,13,0.06)",
        overflow: "hidden",
        padding: "18px 0",
        background: "#FFFFFF",
      }}
    >
      <div className="animate-marquee" style={{ display: "flex", width: "max-content", gap: 0 }}>
        {strip.map((item, i) => (
          <span key={i} style={{ display: "inline-flex", alignItems: "center", gap: "20px", padding: "0 36px" }}>
            <span style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(12,15,13,0.35)", whiteSpace: "nowrap" }}>
              {item}
            </span>
            <span style={{ width: "3px", height: "3px", borderRadius: "50%", background: "#0BABA6", flexShrink: 0 }} />
          </span>
        ))}
      </div>
    </div>
  );
}
