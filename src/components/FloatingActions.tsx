"use client";

import { MessageCircle, Phone, ArrowUp } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function FloatingActions() {
  const pathname = usePathname();
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // The phone number for WhatsApp should include the country code without '+' or '0'.
  // Australia is +61, so 0468 991 300 becomes 61468991300
  const whatsappUrl = "https://wa.me/61468991300?text=Hi%2C%20I%20need%20help%20with%20my%20computer.";

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4 items-center">
      
      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110 active:scale-95 border border-white/10 mb-2"
          aria-label="Scroll to Top"
        >
          <ArrowUp className="w-5 h-5 text-white/80" />
        </button>
      )}

      {/* Desktop Only: Phone Button */}
      {/* Hidden on mobile because StickyMobileBar already has a Call Now button */}
      <a 
        href="tel:0468991300"
        className="hidden md:flex group relative w-14 h-14 bg-blue-600 hover:bg-blue-500 rounded-full shadow-lg items-center justify-center transition-transform hover:scale-110 active:scale-95 z-50"
        aria-label="Call Us"
      >
        <span className="absolute right-full mr-4 bg-black/80 backdrop-blur-md text-white text-xs font-semibold px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-white/10 pointer-events-none">
          Call: 0468 991 300
        </span>
        <Phone className="w-6 h-6 text-white" />
      </a>

      {/* WhatsApp Button (Visible everywhere) */}
      <a 
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative w-14 h-14 bg-[#25D366] hover:bg-[#20bd5a] rounded-full shadow-lg shadow-[#25D366]/20 flex items-center justify-center transition-transform hover:scale-110 active:scale-95 z-50 md:mb-0 mb-16"
        aria-label="WhatsApp Us"
      >
        {/* Tooltip */}
        <span className="absolute right-full mr-4 bg-black/80 backdrop-blur-md text-white text-xs font-semibold px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-white/10 pointer-events-none">
          Chat on WhatsApp
        </span>
        
        {/* Pulse effect */}
        <div className="absolute inset-0 rounded-full border-2 border-[#25D366] animate-ping opacity-20" />
        
        <MessageCircle className="w-7 h-7 text-white fill-white" />
      </a>

    </div>
  );
}
