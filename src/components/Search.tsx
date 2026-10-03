"use client";

import { useState, useRef, useEffect } from "react";
import { Search as SearchIcon, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { blogPosts } from "@/app/blog/data";

// Comprehensive index mapping keywords to pages
const STATIC_INDEX = [
  { id: 1, title: "Liquid Damaged Laptop Repair", url: "/services/mac-repair", keywords: ["spill", "water", "liquid", "tea", "coffee", "macbook", "mac", "apple"] },
  { id: 2, title: "PC & Windows Repair", url: "/services/pc-repair", keywords: ["power", "boot", "start", "dead", "black screen", "pc", "windows", "slow", "freezing", "lag", "upgrade", "ram", "ssd"] },
  { id: 3, title: "Laptop Screen & Battery Replacement", url: "/services/pc-repair", keywords: ["screen", "battery", "replacement", "lenovo", "dell", "hp", "asus", "acer", "broken", "cracked", "display"] },
  { id: 4, title: "MacBook Screen & Battery Repair", url: "/services/mac-repair", keywords: ["macbook", "screen", "battery", "replacement", "apple", "retina", "pro", "air", "logic board", "motherboard", "soldering"] },
  { id: 5, title: "Hard Drive Data Recovery", url: "/services/data-recovery", keywords: ["data", "recover", "files", "lost", "deleted", "drive", "hdd", "ssd", "clicking", "usb", "external"] },
  { id: 6, title: "Cyber Security & Deep Cleaning", url: "/services/cyber-security", keywords: ["virus", "scam", "remote access", "hacker", "bank clearance", "security", "malware", "clean", "antivirus", "deep cleaning"] },
  { id: 7, title: "Custom PC Builds", url: "/services/custom-pc-build", keywords: ["custom", "build", "gaming", "pc", "work from home", "engineering", "architecture", "setup"] },
  { id: 8, title: "Small Business Web Design", url: "/services/small-business-web-design", keywords: ["web", "design", "seo", "google business", "email", "domain", "fast", "website"] },
  { id: 9, title: "Business IT Support", url: "/services/it-support", keywords: ["business", "network", "server", "helpdesk", "onsite", "office"] },
  { id: 10, title: "Pricing & Quotes", url: "/pricing", keywords: ["price", "cost", "quote", "fee", "how much"] }
];

// Dynamically generate search index from blog posts
const BLOG_INDEX = blogPosts.map((post, i) => ({
  id: 100 + i,
  title: post.title,
  url: `/blog/${post.slug}`,
  keywords: post.keywords
}));

const SEARCH_INDEX = [...STATIC_INDEX, ...BLOG_INDEX];

export default function Search() {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const wrapperRef = useRef<HTMLDivElement>(null);

  const results = SEARCH_INDEX.filter(item => 
    item.title.toLowerCase().includes(query.toLowerCase()) || 
    item.keywords.some(k => k.includes(query.toLowerCase()))
  );

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={wrapperRef} className="relative z-50">
      <div className="relative">
        <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
        <input 
          type="text"
          placeholder="Search repairs (e.g. liquid damage)..."
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setIsOpen(true);
          }}
          onFocus={() => setIsOpen(true)}
          className="w-48 sm:w-64 h-8 pl-9 pr-4 bg-white/5 border border-white/10 rounded-full text-xs text-white placeholder-white/30 focus:outline-none focus:border-blue-500/50 transition-all"
        />
      </div>

      {isOpen && query.length > 1 && (
        <div className="absolute top-10 right-0 w-80 bg-black/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col">
          <div className="px-3 py-2 text-[10px] font-mono text-white/30 uppercase tracking-wider bg-white/5 border-b border-white/10">
            Search Results
          </div>
          <div className="max-h-64 overflow-y-auto">
            {results.length > 0 ? (
              results.map(res => (
                <button
                  key={res.id}
                  onClick={() => {
                    router.push(res.url);
                    setIsOpen(false);
                    setQuery("");
                  }}
                  className="w-full text-left px-4 py-3 flex items-center justify-between hover:bg-white/10 transition-colors border-b border-white/5 last:border-0 group"
                >
                  <span className="text-sm text-white/90">{res.title}</span>
                  <ArrowRight className="w-3 h-3 text-blue-400 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </button>
              ))
            ) : (
              <div className="px-4 py-6 text-center text-sm text-white/50">
                No matching services found.
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
