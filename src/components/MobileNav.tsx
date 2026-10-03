"use client";

import { useState } from "react";
import { Menu, X, LayoutDashboard, MapPin, BookOpen, Info, MessageSquare, Box, Apple, Cpu, ShieldAlert, HardDrive, Network, Globe, DollarSign, Wrench } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home", icon: LayoutDashboard },
    { href: "/services", label: "All Services", icon: Box },
    { href: "/services/mac-repair", label: "Mac Repair", icon: Apple },
    { href: "/services/pc-repair", label: "PC Repair", icon: Cpu },
    { href: "/services/cyber-security", label: "Cyber Security", icon: ShieldAlert },
    { href: "/services/data-recovery", label: "Data Recovery", icon: HardDrive },
    { href: "/services/small-business-web-design", label: "Web Design", icon: Globe },
    { href: "/pricing", label: "Pricing", icon: DollarSign },
    { href: "/troubleshoot", label: "DIY Repair", icon: Wrench },
    { href: "/locations", label: "Locations", icon: MapPin },
    { href: "/contact", label: "Contact Us", icon: MessageSquare },
  ];

  const handleToggle = () => setIsOpen(!isOpen);
  const handleClose = () => setIsOpen(false);

  return (
    <div className="md:hidden flex items-center">
      <button 
        onClick={handleToggle}
        className="p-2 text-white/80 hover:text-white transition-colors"
        aria-label="Toggle Menu"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Fullscreen Overlay */}
      {isOpen && (
        <div className="fixed inset-0 top-14 z-50 bg-black/95 backdrop-blur-xl border-t border-white/10 overflow-y-auto pb-24">
          <nav className="flex flex-col p-4 space-y-2">
            {links.map((link) => {
              const isActive = pathname === link.href;
              const Icon = link.icon;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={handleClose}
                  className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-all ${
                    isActive 
                      ? "bg-blue-500/10 text-blue-400 border border-blue-500/20" 
                      : "text-white/80 hover:text-white hover:bg-white/5 border border-transparent"
                  }`}
                >
                  <Icon className={`w-5 h-5 ${isActive ? "text-blue-400" : "text-white/40"}`} />
                  <span className="font-medium text-lg">{link.label}</span>
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </div>
  );
}
