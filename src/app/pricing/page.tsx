"use client";

import { motion } from "framer-motion";
import { DollarSign, Search, Wrench, ShieldCheck, Clock } from "lucide-react";
import Link from "next/link";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { type: "spring" as any, stiffness: 300, damping: 24 } },
};

export default function Pricing() {
  return (
    <main className="flex-1 w-full px-8 pt-12 pb-32">
      <motion.div variants={containerVariants} initial="hidden" animate="visible" className="max-w-6xl mx-auto">
        
        {/* Header */}
        <motion.div variants={itemVariants} className="mb-12">
          <div className="glass-pill inline-flex items-center gap-2 px-3 py-1 mb-6 text-xs font-mono text-blue-400 border-blue-400/30">
            <DollarSign className="w-3 h-3" /> DIRECTORY: PRICING_LOGIC
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-white mb-4">
            Transparent Pricing
          </h1>
          <p className="text-white/60 text-lg max-w-2xl">
            No hidden hourly rates. No surprise bills. We believe in flat-fee structures and transparent upfront diagnostics so you always know exactly what you'll pay before we begin.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Main Pricing */}
          <motion.div variants={itemVariants} className="md:col-span-8 glass-panel rounded-3xl p-8 lg:p-10 flex flex-col justify-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -z-10" />
            
            <h2 className="text-3xl font-semibold text-white mb-2">Standard Repair Fee</h2>
            <p className="text-white/60 mb-8 max-w-lg">Most software and non-component level hardware issues fall under our standard flat rate.</p>
            
            <div className="mb-8 p-6 bg-blue-900/10 border border-blue-500/20 rounded-2xl">
              <div className="text-2xl md:text-3xl font-mono text-white tracking-tighter mb-2">Most repairs resolved for $150 - $170</div>
              <div className="text-sm font-mono text-blue-400">+ COST OF PARTS (IF REQUIRED)</div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 text-white/70">
                <ShieldCheck className="w-5 h-5 text-green-400" /> Conditional No Fix, No Fee
              </div>
              <div className="flex items-center gap-3 text-white/70">
                <Clock className="w-5 h-5 text-amber-400" /> Same Day / 24hr Turnaround
              </div>
            </div>
          </motion.div>

          {/* Ballpark Estimates */}
          <motion.div variants={itemVariants} className="md:col-span-4 glass-panel rounded-3xl p-8">
            <h3 className="text-lg font-semibold text-white mb-6">Specialty Estimates</h3>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between text-white text-sm mb-1">
                  <span>Data Recovery</span>
                  <span className="font-mono text-blue-400">$150 - $500</span>
                </div>
                <div className="text-xs text-white/40">Tiered based on drive damage severity.</div>
              </div>
              <div>
                <div className="flex justify-between text-white text-sm mb-1">
                  <span>Logic Board Repair</span>
                  <span className="font-mono text-blue-400">$150 +</span>
                </div>
                <div className="text-xs text-white/40">Component micro-soldering.</div>
              </div>
              <div>
                <div className="flex justify-between text-white text-sm mb-1">
                  <span>Business IT Support</span>
                  <span className="font-mono text-blue-400">Custom</span>
                </div>
                <div className="text-xs text-white/40">Tailored to organization size & needs.</div>
              </div>
            </div>
          </motion.div>

          {/* How It Works */}
          <motion.div variants={itemVariants} className="md:col-span-12 glass-panel rounded-3xl p-8 lg:p-10 mt-6">
            <h2 className="text-2xl font-semibold text-white mb-8">How It Works: Getting a Free Quote</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
              <div className="absolute top-1/2 left-10 right-10 h-px bg-white/10 hidden md:block" />
              
              <div className="relative z-10 bg-black/40 p-6 rounded-2xl border border-white/5 backdrop-blur-md">
                <div className="w-12 h-12 rounded-full bg-blue-500/20 border border-blue-500/50 flex items-center justify-center mb-4">
                  <Search className="w-5 h-5 text-blue-400" />
                </div>
                <h3 className="text-white font-medium mb-2">1. Upfront Diagnostic</h3>
                <p className="text-sm text-white/60">Bring your device in. We analyze the problem and determine the fault. Basic visual diagnostics are free; invasive teardowns (e.g. liquid damage) may carry a fee.</p>
              </div>

              <div className="relative z-10 bg-black/40 p-6 rounded-2xl border border-white/5 backdrop-blur-md">
                <div className="w-12 h-12 rounded-full bg-blue-500/20 border border-blue-500/50 flex items-center justify-center mb-4">
                  <DollarSign className="w-5 h-5 text-blue-400" />
                </div>
                <h3 className="text-white font-medium mb-2">2. Exact Price Quote</h3>
                <p className="text-sm text-white/60">We provide a flat-rate price (usually $150 - $170) and a timeframe. You decide if you want to proceed. No pressure.</p>
              </div>

              <div className="relative z-10 bg-black/40 p-6 rounded-2xl border border-white/5 backdrop-blur-md">
                <div className="w-12 h-12 rounded-full bg-blue-500/20 border border-blue-500/50 flex items-center justify-center mb-4">
                  <Wrench className="w-5 h-5 text-blue-400" />
                </div>
                <h3 className="text-white font-medium mb-2">3. Rapid Repair</h3>
                <p className="text-sm text-white/60">Most repairs are completed same-day. You only pay when the machine is fixed and you're satisfied.</p>
              </div>
            </div>
            
            <div className="mt-12 flex justify-center">
              <Link href="/contact" className="px-8 py-4 bg-white/5 hover:bg-blue-500/20 border border-white/10 hover:border-blue-500/50 transition-all rounded-full text-white font-medium group flex items-center gap-3">
                Request Your Free Quote
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
          </motion.div>

        </div>
      </motion.div>
    </main>
  );
}
