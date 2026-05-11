import type { Metadata } from "next";
import { DM_Serif_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { WhatsAppBubble } from "@/components/ui/WhatsAppBubble";

export const metadata: Metadata = {
  title: "Skyliqua | Premium Water Purifiers",
  description:
    "Experience Puresense Technology — 12-stage water purification enriched with copper and alkaline goodness.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-background text-foreground overflow-x-hidden">
        {children}
        <WhatsAppBubble />
      </body>
    </html>
  );
}
