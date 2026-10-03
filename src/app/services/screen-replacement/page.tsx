"use client";

import { motion } from "framer-motion";
import { Monitor, ShieldCheck, Clock, Zap, AlertTriangle, MonitorPlay } from "lucide-react";
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

export default function ScreenReplacement() {
  return (
    <>
      <Head>
        <title>Laptop & MacBook Screen Replacement Brisbane | Fast Repairs</title>
        <meta name="description" content="Professional laptop screen replacement and MacBook Retina display repair in Brisbane. We fix cracked screens, dead pixels, and flickering displays with OEM-grade parts." />
        <meta name="keywords" content="laptop screen replacement brisbane, macbook screen replacement brisbane, cracked laptop screen repair cost, apple retina display replacement, hp laptop screen repair, dell screen replacement, lenovo screen fix brisbane" />
      </Head>
      <main className="flex-1 w-full px-8 pt-12 pb-32">
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="max-w-6xl mx-auto">
          
          {/* Header */}
          <motion.div variants={itemVariants} className="mb-12">
            <div className="glass-pill inline-flex items-center gap-2 px-3 py-1 mb-6 text-xs font-mono text-blue-400 border-blue-400/30">
              <Monitor className="w-3 h-3" /> OPERATION: DISPLAY_RESTORE
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-white mb-4">
              Laptop & MacBook Screen Replacement
            </h1>
            <p className="text-white/60 text-lg max-w-2xl">
              Don't let a cracked screen ruin your productivity. From ultra-thin MacBook Retina displays to high-refresh-rate gaming laptop panels, we offer precision, OEM-grade screen replacements in Brisbane.
            </p>
          </motion.div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            
            {/* Main Content */}
            <motion.div variants={itemVariants} className="md:col-span-8 glass-panel rounded-3xl p-8 lg:p-10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl -z-10" />
              <h2 className="text-2xl font-semibold text-white mb-6">Expert Display Diagnostics & Repair</h2>
              <div className="space-y-6">
                
                <div className="p-5 rounded-2xl bg-white/5 border border-white/5">
                  <h3 className="flex items-center gap-2 text-lg font-medium text-white mb-2">
                    <MonitorPlay className="w-5 h-5 text-blue-400" /> MacBook Retina & True Tone Repair
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed mb-4">
                    Replacing a MacBook screen is complex. Modern MacBooks have logic board-tied sensors. We use premium display assemblies and perform the calibration necessary to retain features like True Tone and auto-brightness whenever possible.
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    <span className="px-2 py-1 bg-black/40 rounded text-xs font-mono text-white/40">MacBook Pro M1/M2/M3</span>
                    <span className="px-2 py-1 bg-black/40 rounded text-xs font-mono text-white/40">MacBook Air</span>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-white/5 border border-white/5">
                  <h3 className="text-lg font-medium text-white mb-2">Windows & Gaming Laptops</h3>
                  <p className="text-white/60 text-sm leading-relaxed mb-4">
                    Whether it's a standard 1080p Dell Inspiron or a 240Hz OLED gaming panel on a Razer or Asus ROG, we source exact-match OEM-grade replacement panels. We guarantee no dead pixels and exact color-gamut matching.
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    <span className="px-2 py-1 bg-black/40 rounded text-xs font-mono text-white/40">Dell XPS</span>
                    <span className="px-2 py-1 bg-black/40 rounded text-xs font-mono text-white/40">HP Envy/Spectre</span>
                    <span className="px-2 py-1 bg-black/40 rounded text-xs font-mono text-white/40">Lenovo ThinkPad</span>
                    <span className="px-2 py-1 bg-black/40 rounded text-xs font-mono text-white/40">Asus ROG</span>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-red-900/10 border border-red-500/20">
                  <h3 className="flex items-center gap-2 text-lg font-medium text-red-400 mb-2">
                    <AlertTriangle className="w-5 h-5" /> The Dangers of DIY Screen Replacement
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    A simple YouTube tutorial often skips crucial steps, like discharging the logic board. Attempting to replace a screen without properly disconnecting the internal battery can instantly send a high-voltage surge through the EDP cable, frying the CPU or backlight circuitry on your motherboard. Let our insured professionals handle it safely.
                  </p>
                </div>

              </div>
            </motion.div>

            {/* Pricing & Guarantee */}
            <motion.div variants={itemVariants} className="md:col-span-4 flex flex-col gap-6">
              <div className="glass-panel rounded-3xl p-8 flex-1">
                <h3 className="text-white/80 font-medium mb-1">Standard Screen Replacement</h3>
                <p className="text-white/40 text-sm mb-6">Labor fee (Non-touch PC laptops)</p>
                
                <div className="font-mono text-4xl text-white mb-2">$150</div>
                <div className="text-[10px] font-mono text-white/30 mb-8">+ COST OF REPLACEMENT PANEL</div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-sm text-white/60">
                    <ShieldCheck className="w-4 h-4 text-green-400" /> Premium OEM-Grade Parts
                  </div>
                  <div className="flex items-center gap-3 text-sm text-white/60">
                    <Clock className="w-4 h-4 text-blue-400" /> Next-Day (if in stock)
                  </div>
                  <div className="flex items-center gap-3 text-sm text-white/60">
                    <Zap className="w-4 h-4 text-amber-400" /> Anti-Static Lab Environment
                  </div>
                </div>
              </div>

              <Link href="/contact" className="glass-panel rounded-3xl p-6 text-center hover:bg-blue-500/10 transition-colors border-blue-500/30 group cursor-pointer">
                <span className="text-blue-400 font-semibold group-hover:text-blue-300 transition-colors">Get A Screen Quote</span>
              </Link>
            </motion.div>

          </div>
        </motion.div>
      </main>
    </>
  );
}
