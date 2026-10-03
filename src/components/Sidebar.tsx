"use client";

import Link from "next/link";
import Image from "next/image";
import { 
  Cpu, 
  LayoutDashboard, 
  MapPin, 
  Info, 
  Phone, 
  MessageSquare,
  Wrench,
  Apple,
  HardDrive,
  Network,
  ShieldCheck,
  ShieldAlert,
  FileText,
  DollarSign,
  Box,
  BookOpen,
  Globe
} from "lucide-react";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();

  const coreLinks = [
    { href: "/", label: "Home", icon: LayoutDashboard },
    { href: "/locations", label: "Locations", icon: MapPin },
    { href: "/troubleshoot", label: "DIY Repair", icon: Wrench },
    { href: "/blog", label: "Tech Blog", icon: BookOpen },
    { href: "/about", label: "About Us", icon: Info },
    { href: "/contact", label: "Contact Us", icon: MessageSquare },
  ];

  const serviceLinks = [
    { href: "/services", label: "All Services", icon: Box },
    { href: "/services/mac-repair", label: "Mac Repair", icon: Apple },
    { href: "/services/pc-repair", label: "PC & Windows Repair", icon: Cpu },
    { href: "/services/cyber-security", label: "Cyber Security & Scams", icon: ShieldAlert },
    { href: "/services/data-recovery", label: "Data Recovery", icon: HardDrive },
    { href: "/services/it-support", label: "Business IT Support", icon: Network },
    { href: "/services/small-business-web-design", label: "Web Design & SEO", icon: Globe },
    { href: "/pricing", label: "Pricing", icon: DollarSign },
  ];

  const policyLinks = [
    { href: "/terms", label: "Terms of Service", icon: FileText },
    { href: "/privacy", label: "Privacy Policy", icon: ShieldCheck },
  ];

  const renderLink = (link: any) => {
    const isActive = pathname === link.href;
    const Icon = link.icon;
    return (
      <Link
        key={link.href}
        href={link.href}
        className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-all text-sm ${
          isActive 
            ? "bg-blue-500/10 text-blue-400 border border-blue-500/20" 
            : "text-white/60 hover:text-white hover:bg-white/5 border border-transparent"
        }`}
      >
        <Icon className={`w-4 h-4 ${isActive ? "text-blue-400" : "text-white/40"}`} />
        <span className="font-medium">{link.label}</span>
      </Link>
    );
  };

  return (
    <aside className="hidden md:flex w-64 fixed inset-y-0 left-0 z-40 bg-black/40 backdrop-blur-xl border-r border-white/10 flex-col overflow-y-auto custom-scrollbar">
      {/* Logo Area */}
      <div className="h-20 flex-shrink-0 flex items-center px-6 border-b border-white/5 sticky top-0 bg-black/40 backdrop-blur-xl z-10">
        <Link href="/" className="flex items-center gap-3 group w-full">
          {/* Transparent SVG Icon Logo */}
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center flex-shrink-0 shadow-[0_0_20px_rgba(59,130,246,0.3)] group-hover:shadow-[0_0_25px_rgba(59,130,246,0.5)] transition-all">
            <Cpu className="w-6 h-6 text-white" />
          </div>
          {/* Horizontal Typography */}
          <div className="flex flex-col justify-center">
            <span className="font-black text-white/95 tracking-tight text-xl leading-none">
              CR<span className="text-blue-500">1</span>
            </span>
            <span className="text-[10px] font-mono text-white/50 tracking-[0.2em] mt-1 uppercase">
              Brisbane
            </span>
          </div>
        </Link>
      </div>

      <div className="flex-1 px-4 py-6 space-y-8">
        
        {/* Navigation Links */}
        <nav className="space-y-1">
          <div className="text-[10px] font-mono text-white/30 px-2 mb-3 tracking-wider">MAIN MENU</div>
          {coreLinks.map(renderLink)}
        </nav>

        {/* Services Navigation */}
        <nav className="space-y-1">
          <div className="text-[10px] font-mono text-white/30 px-2 mb-3 tracking-wider">SERVICES</div>
          {serviceLinks.map(renderLink)}
        </nav>
        
        {/* Compliance / E-E-A-T */}
        <nav className="space-y-1">
          <div className="text-[10px] font-mono text-white/30 px-2 mb-3 tracking-wider">COMPLIANCE</div>
          {policyLinks.map(renderLink)}
        </nav>

      </div>

      {/* Bottom Status Area */}
      <div className="p-4 border-t border-white/5 mt-auto">
        <div className="glass-panel p-4 rounded-xl">
           <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-[10px] font-mono text-white/50">WE ARE OPEN</span>
           </div>
           <Link href="tel:0468991300" className="flex items-center gap-2 text-sm text-white/80 hover:text-white transition-colors mb-4">
              <Phone className="w-3.5 h-3.5 text-blue-400" />
              <span className="font-mono">0468 991 300</span>
           </Link>
           
           {/* Social Links */}
           <div className="flex items-center gap-3 border-t border-white/10 pt-3">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="w-7 h-7 rounded-md bg-white/5 hover:bg-white/10 border border-white/5 flex items-center justify-center transition-colors">
                <svg className="w-3.5 h-3.5 text-white/70" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="w-7 h-7 rounded-md bg-white/5 hover:bg-white/10 border border-white/5 flex items-center justify-center transition-colors">
                <svg className="w-3.5 h-3.5 text-white/70" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="w-7 h-7 rounded-md bg-white/5 hover:bg-white/10 border border-white/5 flex items-center justify-center transition-colors">
                <svg className="w-3.5 h-3.5 text-white/70" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
           </div>
        </div>
      </div>
    </aside>
  );
}
