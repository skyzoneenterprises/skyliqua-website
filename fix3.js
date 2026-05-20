const fs = require('fs');
let content = fs.readFileSync('src/components/sections/ProductShowcase.tsx', 'utf8');

// The original PRODUCTS array
const correctProducts = `const PRODUCTS = [
  {
    id: "prime", label: "Prime", name: "Skyliqua Prime",
    tagline: "Pure essentials, beautifully delivered.",
    variants: [
      { name: "Classic White", hex: "#F9FAFB", image: "/assets/products/prime-removed.png" },
      { name: "Midnight Black", hex: "#1F2937", image: "/assets/products/prime-other.png" }
    ],
    isElite: false, badge: "Best Value", accentColor: "#14878E",
    oval: "radial-gradient(ellipse 85% 80% at 50% 48%, rgba(20,135,142,0.09) 0%, rgba(226,244,242,0.9) 55%, #E8F3F2 100%)",
    features: ["9-Stage Puresense Purification", "Copper-Infused Chamber", "10 L Insulated Storage Tank", "RO Technology", "TDS Controller Included", "Sediment & Carbon Pre-Filters"],
    description: "The Prime delivers our core Puresense Technology in its most refined form. Copper-enriched and rigorously filtered — built for families who take health seriously.",
    specs: [{ l: "Stages", v: "9" }, { l: "Storage", v: "10 L" }, { l: "Copper", v: "✓" }, { l: "Alkaline", v: "—" }, { l: "LED", v: "—" }],
  },
  {
    id: "zen", label: "Zen", name: "Skyliqua Zen",
    tagline: "Balance starts with every sip.",
    variants: [
      { name: "Midnight Black", hex: "#1F2937", image: "/assets/products/zen-removed.png" },
      { name: "Classic White", hex: "#F9FAFB", image: "/assets/products/zen-other.png" }
    ],
    isElite: false, badge: "Most Popular", accentColor: "#14878E",
    oval: "radial-gradient(ellipse 85% 80% at 50% 48%, rgba(20,135,142,0.09) 0%, rgba(226,244,242,0.9) 55%, #E8F3F2 100%)",
    features: ["12-Stage Puresense Purification", "Copper & Alkaline Dual Enrichment", "10 L Premium Storage Tank", "pH-Balancing Technology (7.5–9.5)", "Mineral Retention Filter", "RO + UV + UF + Alkaline Stack"],
    description: "The Zen adds alkaline pH balancing to our copper foundation — producing water that is cleaner, lighter, and tuned for daily wellbeing.",
    specs: [{ l: "Stages", v: "12" }, { l: "Storage", v: "10 L" }, { l: "Copper", v: "✓" }, { l: "Alkaline", v: "✓" }, { l: "LED", v: "—" }],
  },
  {
    id: "elite", label: "Elite", name: "Skyliqua Elite",
    tagline: "The pinnacle. Nothing held back.",
    variants: [
      { name: "Marble White", hex: "#F9FAFB", image: "/assets/products/elite-removed.png" },
      { name: "Black Gold", hex: "#111111", image: "/assets/products/elite-other.png" }
    ],
    isElite: true, badge: "Premium", accentColor: "#B68F54",
    oval: "radial-gradient(ellipse 85% 80% at 50% 48%, rgba(182,143,84,0.10) 0%, rgba(248,242,226,0.9) 55%, #F2EBD6 100%)",
    features: ["12-Stage Advanced Purification", "Copper & Alkaline Excellence", "10 L Crystal-Clear Storage Tank", "Smart LED Water Quality Display", "Real-Time Purity Monitoring", "Auto-Sanitisation Mode"],
    description: "The Elite unites every Skyliqua innovation — copper, alkaline, and Smart LED intelligence — in one impeccable form. For those who accept only the very best.",
    specs: [{ l: "Stages", v: "12" }, { l: "Storage", v: "10 L" }, { l: "Copper", v: "✓" }, { l: "Alkaline", v: "✓" }, { l: "LED", v: "✓" }],
  }
];`;

content = content.replace(/const PRODUCTS = \[\s*\{[\s\S]*?\];/m, correctProducts);
content = content.replace('prime: 0, zen: 0, elite: 0, pure: 0 }', 'prime: 0, zen: 0, elite: 0 }');

fs.writeFileSync('src/components/sections/ProductShowcase.tsx', content, 'utf8');
