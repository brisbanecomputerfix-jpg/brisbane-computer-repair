"use client";

import { motion } from "framer-motion";
import { Battery, ShieldCheck, Clock, AlertTriangle, Zap, BatteryCharging } from "lucide-react";
import Link from "next/link";
import Head from "next/head";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { type: "spring" as any, stiffness: 300, damping: 24 } },
};

export default function BatteryReplacement() {
  return (
    <>
      <Head>
        <title>Laptop & MacBook Battery Replacement Brisbane | Fast Repairs</title>
        <meta name="description" content="Professional laptop battery replacement for all brands in Brisbane. We fix swollen batteries, MacBooks that won't hold a charge, and power issues." />
        <meta name="keywords" content="laptop battery replacement brisbane, macbook battery replacement cost, hp laptop battery repair, dell battery replacement, lenovo battery fix brisbane, swollen laptop battery repair, battery not charging laptop" />
      </Head>
      <main className="flex-1 w-full px-8 pt-12 pb-32">
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="max-w-6xl mx-auto">
          
          {/* Header */}
          <motion.div variants={itemVariants} className="mb-12">
            <div className="glass-pill inline-flex items-center gap-2 px-3 py-1 mb-6 text-xs font-mono text-emerald-400 border-emerald-400/30">
              <Battery className="w-3 h-3" /> OPERATION: POWER_CELL
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-white mb-4">
              Laptop & MacBook Battery Replacement
            </h1>
            <p className="text-white/60 text-lg max-w-2xl">
              Don't stay tethered to a wall outlet. Whether your laptop shuts down randomly at 30% or you have a dangerously swollen battery, we provide premium OEM-grade battery replacements for all major brands.
            </p>
          </motion.div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            
            {/* Main Content */}
            <motion.div variants={itemVariants} className="md:col-span-8 glass-panel rounded-3xl p-8 lg:p-10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl -z-10" />
              <h2 className="text-2xl font-semibold text-white mb-6">Expert Battery Diagnostics & Repair</h2>
              <div className="space-y-6">
                
                <div className="p-5 rounded-2xl bg-white/5 border border-white/5">
                  <h3 className="flex items-center gap-2 text-lg font-medium text-white mb-2">
                    <BatteryCharging className="w-5 h-5 text-emerald-400" /> All Major Brands Supported
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed mb-4">
                    We source the highest quality lithium-ion polymer cells. Unlike cheap online knockoffs that degrade within months, our batteries are rated for standard OEM cycle counts. We service all makes and models, recalibrating the system’s Power Management IC so it recognizes the new cell correctly.
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    <span className="px-2 py-1 bg-black/40 rounded text-xs font-mono text-white/40">Apple MacBook</span>
                    <span className="px-2 py-1 bg-black/40 rounded text-xs font-mono text-white/40">Dell XPS / Latitude</span>
                    <span className="px-2 py-1 bg-black/40 rounded text-xs font-mono text-white/40">HP Spectre / Envy</span>
                    <span className="px-2 py-1 bg-black/40 rounded text-xs font-mono text-white/40">Lenovo ThinkPad</span>
                    <span className="px-2 py-1 bg-black/40 rounded text-xs font-mono text-white/40">Asus & Acer</span>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-red-900/10 border border-red-500/20">
                  <h3 className="flex items-center gap-2 text-lg font-medium text-red-400 mb-2">
                    <AlertTriangle className="w-5 h-5" /> The Danger of Swollen Batteries
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    If your laptop's trackpad is hard to click, or the chassis is bulging, your battery is swelling. This is a severe fire hazard caused by the buildup of toxic outgassing inside the lithium cells. <strong>Do not puncture it.</strong> Bring it to our lab immediately for safe, environmentally conscious disposal and replacement.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white/5 border border-white/5">
                  <h3 className="text-lg font-medium text-white mb-2">Glued-in MacBook Batteries</h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    Modern MacBook Pros and Airs use heavy industrial adhesive to glue the batteries directly to the aluminum top case. Removing these without the proper solvent and tools can bend the chassis or puncture the cells. Our technicians safely dissolve the adhesive and mount the new battery exactly to factory specifications.
                  </p>
                </div>

              </div>
            </motion.div>

            {/* Pricing & Guarantee */}
            <motion.div variants={itemVariants} className="md:col-span-4 flex flex-col gap-6">
              <div className="glass-panel rounded-3xl p-8 flex-1">
                <h3 className="text-white/80 font-medium mb-1">Standard Battery Service</h3>
                <p className="text-white/40 text-sm mb-6">Labor fee (Non-glued PC laptops)</p>
                
                <div className="font-mono text-4xl text-white mb-2">$85</div>
                <div className="text-[10px] font-mono text-white/30 mb-8">+ COST OF REPLACEMENT BATTERY</div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-sm text-white/60">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" /> Premium OEM-Grade Cells
                  </div>
                  <div className="flex items-center gap-3 text-sm text-white/60">
                    <Clock className="w-4 h-4 text-blue-400" /> Fast Turnaround
                  </div>
                  <div className="flex items-center gap-3 text-sm text-white/60">
                    <Zap className="w-4 h-4 text-amber-400" /> Safe Hardware Disposal
                  </div>
                </div>
              </div>

              <Link href="/contact" className="glass-panel rounded-3xl p-6 text-center hover:bg-emerald-500/10 transition-colors border-emerald-500/30 group cursor-pointer">
                <span className="text-emerald-400 font-semibold group-hover:text-emerald-300 transition-colors">Get A Battery Quote</span>
              </Link>
            </motion.div>

          </div>
        </motion.div>
      </main>
    </>
  );
}
