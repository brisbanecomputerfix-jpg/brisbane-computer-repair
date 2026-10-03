"use client";

import { motion } from "framer-motion";
import { Fan, ShieldCheck, Clock, Zap, AlertTriangle, Thermometer } from "lucide-react";
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

export default function FanReplacement() {
  return (
    <>
      <Head>
        <title>Laptop Cooling Fan Replacement & Repair Brisbane | Fix Overheating</title>
        <meta name="description" content="Expert laptop fan replacement in Brisbane. We fix rattling laptop cooling fans, HP 90B errors, MacBook overheating, and apply premium thermal paste." />
        <meta name="keywords" content="laptop cooling fan replacement brisbane, rattling laptop fan repair, hp fan error 90b fix, macbook fan making loud noise, laptop overheating repair, laptop thermal paste replacement, gaming laptop fan repair" />
      </Head>
      <main className="flex-1 w-full px-8 pt-12 pb-32">
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="max-w-6xl mx-auto">
          
          {/* Header */}
          <motion.div variants={itemVariants} className="mb-12">
            <div className="glass-pill inline-flex items-center gap-2 px-3 py-1 mb-6 text-xs font-mono text-cyan-400 border-cyan-400/30">
              <Fan className="w-3 h-3" /> OPERATION: THERMAL_CONTROL
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-white mb-4">
              Laptop Cooling Fan Replacement
            </h1>
            <p className="text-white/60 text-lg max-w-2xl">
              Is your laptop sounding like a jet engine or shutting down randomly? We fix rattling fans, resolve BIOS fan errors, and cure thermal throttling for all laptop and MacBook brands.
            </p>
          </motion.div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            
            {/* Main Content */}
            <motion.div variants={itemVariants} className="md:col-span-8 glass-panel rounded-3xl p-8 lg:p-10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl -z-10" />
              <h2 className="text-2xl font-semibold text-white mb-6">Thermal Diagnostics & Fan Repairs</h2>
              <div className="space-y-6">
                
                <div className="p-5 rounded-2xl bg-white/5 border border-white/5">
                  <h3 className="flex items-center gap-2 text-lg font-medium text-white mb-2">
                    <AlertTriangle className="w-5 h-5 text-amber-400" /> Rattling, Grinding & BIOS Fan Errors
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed mb-4">
                    A laptop fan making a loud grinding or rattling noise usually indicates a failed hydrodynamic bearing. Ignoring this will lead to catastrophic overheating. We also resolve specific BIOS-level hardware alerts, including:
                  </p>
                  <ul className="text-white/60 text-sm space-y-2 mb-4 list-disc pl-4">
                    <li><strong>HP System Fan (90B) Error:</strong> Halts the boot sequence due to a blocked or dead fan.</li>
                    <li><strong>Dell SupportAssist Error 2000-0511:</strong> Indicates the fan is failing to reach target RPMs.</li>
                    <li><strong>MacBook Kernel Task Spikes:</strong> High CPU usage caused by the Mac artificially slowing itself down due to fan failure.</li>
                  </ul>
                  <div className="flex gap-2 flex-wrap mt-4">
                    <span className="px-2 py-1 bg-black/40 rounded text-xs font-mono text-white/40">Apple</span>
                    <span className="px-2 py-1 bg-black/40 rounded text-xs font-mono text-white/40">HP</span>
                    <span className="px-2 py-1 bg-black/40 rounded text-xs font-mono text-white/40">Dell</span>
                    <span className="px-2 py-1 bg-black/40 rounded text-xs font-mono text-white/40">Lenovo</span>
                    <span className="px-2 py-1 bg-black/40 rounded text-xs font-mono text-white/40">Asus / MSI</span>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-white/5 border border-white/5">
                  <h3 className="flex items-center gap-2 text-lg font-medium text-white mb-2">
                    <Thermometer className="w-5 h-5 text-cyan-400" /> Complete Thermal System Overhaul
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    Simply blowing compressed air into the vent often packs dust deeper into the heatsink fins, blocking airflow entirely. We fully disassemble the thermal module, ultrasonically clean the copper heatsinks, and replace the dead fans with OEM-grade RPM-matched units.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-cyan-900/10 border border-cyan-500/20">
                  <h3 className="text-lg font-medium text-cyan-400 mb-2">
                    Premium Thermal Paste Application Included
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    Whenever we replace a cooling fan, the old, chalky thermal paste must be removed. We meticulously clean the CPU and GPU dies and apply premium, high-conductivity thermal compound (like Arctic MX-6 or Thermal Grizzly). This dramatically lowers temperatures, stops thermal throttling, and restores your laptop's original speed.
                  </p>
                </div>

              </div>
            </motion.div>

            {/* Pricing & Guarantee */}
            <motion.div variants={itemVariants} className="md:col-span-4 flex flex-col gap-6">
              <div className="glass-panel rounded-3xl p-8 flex-1">
                <h3 className="text-white/80 font-medium mb-1">Cooling Fan Service</h3>
                <p className="text-white/40 text-sm mb-6">Labor fee (Includes internal cleaning)</p>
                
                <div className="font-mono text-4xl text-white mb-2">$85</div>
                <div className="text-[10px] font-mono text-white/30 mb-8">+ COST OF REPLACEMENT FAN</div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-sm text-white/60">
                    <ShieldCheck className="w-4 h-4 text-cyan-400" /> Exact RPM-Matched OEM Fans
                  </div>
                  <div className="flex items-center gap-3 text-sm text-white/60">
                    <Zap className="w-4 h-4 text-amber-400" /> Premium Thermal Paste Included
                  </div>
                  <div className="flex items-center gap-3 text-sm text-white/60">
                    <Clock className="w-4 h-4 text-blue-400" /> Stops Thermal Throttling
                  </div>
                </div>
              </div>

              <Link href="/contact" className="glass-panel rounded-3xl p-6 text-center hover:bg-cyan-500/10 transition-colors border-cyan-500/30 group cursor-pointer">
                <span className="text-cyan-400 font-semibold group-hover:text-cyan-300 transition-colors">Get A Repair Quote</span>
              </Link>
            </motion.div>

          </div>
        </motion.div>
      </main>
    </>
  );
}
