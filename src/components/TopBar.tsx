import Search from "./Search";
import { Phone, Mail, MapPin } from "lucide-react";
import Image from "next/image";
import AccessibilityMenu from "./AccessibilityMenu";
import MobileNav from "./MobileNav";

export default function TopBar() {
  return (
    <div className="sticky top-0 z-30 w-full h-14 bg-black/50 backdrop-blur-md border-b border-white/5 flex items-center justify-between px-6">
      <div className="flex items-center gap-6">
        <a href="tel:0468991300" className="flex items-center gap-2 text-xs font-mono text-white/60 hover:text-white transition-colors group">
          <Phone className="w-3.5 h-3.5 text-blue-400 group-hover:text-blue-300" />
          <span>0468 991 300</span>
        </a>
        <a href="mailto:fix@computerrepair1.com" className="flex items-center gap-2 text-xs font-mono text-white/60 hover:text-white transition-colors group hidden sm:flex">
          <Mail className="w-3.5 h-3.5 text-blue-400 group-hover:text-blue-300" />
          <span>fix@computerrepair1.com</span>
        </a>
      </div>
      
      <div className="flex items-center gap-4 sm:gap-6">
        <Search />
        
        <div className="flex items-center gap-2 text-xs font-mono text-white/60 hidden lg:flex">
          <MapPin className="w-3.5 h-3.5 text-blue-400" />
          <span>Brisbane, QLD</span>
        </div>
        
        {/* Separator */}
        <div className="w-px h-6 bg-white/10 hidden sm:block" />
        
        <AccessibilityMenu />
        
        <div className="hidden sm:flex items-center gap-2 ml-2">
           <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center shadow-[0_0_15px_rgba(59,130,246,0.3)]">
             <span className="font-black text-white text-sm">CR1</span>
           </div>
        </div>
        
        <MobileNav />
      </div>
    </div>
  );
}
