import type { Metadata } from "next";
import { DM_Serif_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { WhatsAppBubble } from "@/components/ui/WhatsAppBubble";

const dmSerif = DM_Serif_Display({
  variable: "--font-dm-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Skyliqua | Premium Water Purifiers",
  description:
    "Experience Puresense Technology — 12-stage water purification enriched with copper and alkaline goodness.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={cn(dmSerif.variable, dmSans.variable, "h-full antialiased")}>
      <body className="min-h-full flex flex-col bg-background text-foreground overflow-x-hidden">
        {children}
        <WhatsAppBubble />
      </body>
    </html>
  );
}
