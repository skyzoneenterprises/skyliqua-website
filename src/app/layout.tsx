import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import { WhatsAppBubble } from "@/components/ui/WhatsAppBubble";
import { CallbackPopup } from "@/components/ui/CallbackPopup";

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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground overflow-x-hidden">
        {children}
        <WhatsAppBubble />
        <CallbackPopup />
      </body>
    </html>
  );
}
