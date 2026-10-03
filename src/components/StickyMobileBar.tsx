"use client";

import { Phone, MessageSquare } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function StickyMobileBar() {
  const pathname = usePathname();

  // Don't show the bar if we are already on the contact page
  if (pathname === "/contact") return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
      {/* Gradient fade to prevent hard cut-off over text */}
      <div className="h-12 bg-gradient-to-t from-black/90 to-transparent pointer-events-none" />
      
      <div className="bg-black/80 backdrop-blur-xl border-t border-white/10 p-4 pb-safe flex gap-3">
        <a 
          href="tel:0468991300" 
          className="flex-1 h-12 rounded-xl border border-blue-500/30 bg-blue-500/10 flex items-center justify-center gap-2 text-blue-400 font-medium active:bg-blue-500/20 transition-colors"
        >
          <Phone className="w-4 h-4" />
          Call Now
        </a>
        
        <Link 
          href="/contact" 
          className="flex-1 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center gap-2 font-medium active:bg-blue-500 transition-colors"
        >
          <MessageSquare className="w-4 h-4" />
          Get Quote
        </Link>
      </div>
    </div>
  );
}
