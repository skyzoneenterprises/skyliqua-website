"use client";

import { useState, useRef, useEffect } from "react";
import { Share2, Link, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ShareButtonProps {
  shareUrl: string;
  shareTitle: string;
  accentColor?: string;
  size?: "sm" | "md";
  align?: "top" | "bottom" | "left" | "right";
}

export function ShareButton({
  shareUrl,
  shareTitle,
  accentColor = "#14878E",
  size = "md",
  align = "top"
}: ShareButtonProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Close popover when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  // Construct absolute sharing URL dynamically on the client side
  const getFullShareUrl = () => {
    if (typeof window === "undefined") return shareUrl;
    // If it's a relative path, make it absolute
    if (shareUrl.startsWith("/")) {
      return `${window.location.origin}${shareUrl}`;
    }
    if (!shareUrl.startsWith("http")) {
      return `${window.location.origin}/${shareUrl}`;
    }
    return shareUrl;
  };

  const handleShareClick = async (e: React.MouseEvent) => {
    e.stopPropagation();
    const fullUrl = getFullShareUrl();

    // On modern mobile devices, use native sharing
    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share({
          title: shareTitle,
          text: `Check this out: ${shareTitle}`,
          url: fullUrl
        });
        return;
      } catch (err) {
        // Fallback to custom popover if user cancels or native sharing fails
        console.log("Native share failed or dismissed, opening custom popover", err);
      }
    }

    setIsOpen(!isOpen);
  };

  const handleCopyLink = async (e: React.MouseEvent) => {
    e.stopPropagation();
    const fullUrl = getFullShareUrl();
    try {
      await navigator.clipboard.writeText(fullUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy link", err);
    }
  };

  const handleWhatsAppShare = (e: React.MouseEvent) => {
    e.stopPropagation();
    const fullUrl = getFullShareUrl();
    const text = encodeURIComponent(`${shareTitle}\n${fullUrl}`);
    window.open(`https://api.whatsapp.com/send?text=${text}`, "_blank", "noopener,noreferrer");
  };

  const handleTwitterShare = (e: React.MouseEvent) => {
    e.stopPropagation();
    const fullUrl = getFullShareUrl();
    const text = encodeURIComponent(`Check out ${shareTitle}!`);
    const url = encodeURIComponent(fullUrl);
    window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`, "_blank", "noopener,noreferrer");
  };

  // Dimensions based on size
  const btnClasses = size === "sm"
    ? "w-8 h-8 rounded-full border border-black/10 hover:bg-gray-50 flex items-center justify-center transition-all active:scale-90"
    : "w-12 h-12 rounded-full border flex items-center justify-center transition-all duration-300 active:scale-95";

  const btnStyle = size === "sm"
    ? { borderColor: "rgba(12,15,13,0.1)", background: "rgba(255,255,255,0.8)" }
    : {
        borderColor: "rgba(12,15,13,0.08)",
        background: "#ffffff",
        color: "rgba(12,15,13,0.6)"
      };

  // Popover positioning logic
  const popoverPositionStyle = () => {
    switch (align) {
      case "bottom":
        return { top: "calc(100% + 8px)", left: "50%", translateX: "-50%", originY: 0 };
      case "left":
        return { right: "calc(100% + 8px)", top: "50%", translateY: "-50%", originX: 1 };
      case "right":
        return { left: "calc(100% + 8px)", top: "50%", translateY: "-50%", originX: 0 };
      case "top":
      default:
        return { bottom: "calc(100% + 8px)", left: "50%", translateX: "-50%", originY: 1 };
    }
  };

  const pos = popoverPositionStyle();

  return (
    <div className="relative inline-block" ref={containerRef}>
      {/* Circle Share Trigger */}
      <button
        onClick={handleShareClick}
        className={btnClasses}
        style={btnStyle}
        onMouseEnter={e => {
          if (size !== "sm") {
            e.currentTarget.style.borderColor = accentColor;
            e.currentTarget.style.color = accentColor;
            e.currentTarget.style.boxShadow = `0 4px 12px ${accentColor}15`;
          } else {
            e.currentTarget.style.borderColor = accentColor;
          }
        }}
        onMouseLeave={e => {
          if (size !== "sm") {
            e.currentTarget.style.borderColor = "rgba(12,15,13,0.08)";
            e.currentTarget.style.color = "rgba(12,15,13,0.6)";
            e.currentTarget.style.boxShadow = "none";
          } else {
            e.currentTarget.style.borderColor = "rgba(12,15,13,0.1)";
          }
        }}
        title="Share Product"
        aria-label="Share Product"
      >
        <Share2 size={size === "sm" ? 14 : 18} />
      </button>

      {/* Share Popover */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: pos.translateX || 0, y: pos.translateY || 0 }}
            animate={{ opacity: 1, scale: 1, x: pos.translateX || 0, y: pos.translateY || 0 }}
            exit={{ opacity: 0, scale: 0.9, x: pos.translateX || 0, y: pos.translateY || 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            style={{
              position: "absolute",
              zIndex: 150,
              width: "160px",
              background: "#ffffff",
              border: "1px solid rgba(12,15,13,0.08)",
              borderRadius: "12px",
              padding: "6px",
              boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.08), 0 8px 10px -6px rgba(0, 0, 0, 0.03)",
              bottom: pos.bottom,
              top: pos.top,
              left: pos.left,
              right: pos.right,
              transformOrigin: `${pos.originX !== undefined ? (pos.originX === 1 ? 'right' : 'left') : 'center'} ${pos.originY !== undefined ? (pos.originY === 1 ? 'bottom' : 'top') : 'center'}`
            }}
          >
            {/* Popover Arrow */}
            <div
              style={{
                position: "absolute",
                width: "8px",
                height: "8px",
                background: "#ffffff",
                borderLeft: "1px solid rgba(12,15,13,0.08)",
                borderTop: "1px solid rgba(12,15,13,0.08)",
                transform: align === "bottom" ? "rotate(45deg) translateY(-4px)" : "rotate(-135deg) translateY(-4px)",
                left: "calc(50% - 4px)",
                bottom: align === "top" ? "-4px" : "auto",
                top: align === "bottom" ? "-4px" : "auto",
                zIndex: -1
              }}
            />

            <div className="flex flex-col gap-0.5">
              {/* Copy Link */}
              <button
                onClick={handleCopyLink}
                className="flex items-center gap-2.5 w-full px-3 py-2 rounded-lg text-left text-[11px] font-medium transition-colors hover:bg-gray-50 active:bg-gray-100"
                style={{ color: copied ? accentColor : "rgba(12,15,13,0.7)" }}
              >
                {copied ? <Check size={14} strokeWidth={2.5} /> : <Link size={14} />}
                <span>{copied ? "Copied!" : "Copy Link"}</span>
              </button>

              {/* WhatsApp */}
              <button
                onClick={handleWhatsAppShare}
                className="flex items-center gap-2.5 w-full px-3 py-2 rounded-lg text-left text-[11px] font-medium transition-colors hover:bg-gray-50 active:bg-gray-100"
                style={{ color: "rgba(12,15,13,0.7)" }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-[#25D366]">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                </svg>
                <span>WhatsApp</span>
              </button>

              {/* Twitter/X */}
              <button
                onClick={handleTwitterShare}
                className="flex items-center gap-2.5 w-full px-3 py-2 rounded-lg text-left text-[11px] font-medium transition-colors hover:bg-gray-50 active:bg-gray-100"
                style={{ color: "rgba(12,15,13,0.7)" }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-black">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
                <span>Twitter / X</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
