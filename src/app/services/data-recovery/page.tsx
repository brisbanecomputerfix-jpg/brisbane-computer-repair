"use client";

import { motion } from "framer-motion";
import { HardDrive, AlertTriangle, Search, Activity, ShieldCheck } from "lucide-react";
import Link from "next/link";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { type: "spring" as any, stiffness: 300, damping: 24 } },
};

export default function DataRecovery() {
  return (
    <main className="flex-1 w-full px-8 pt-12 pb-32">
      <motion.div variants={containerVariants} initial="hidden" animate="visible" className="max-w-6xl mx-auto">
        
        {/* Header */}
        <motion.div variants={itemVariants} className="mb-12">
          <div className="glass-pill inline-flex items-center gap-2 px-3 py-1 mb-6 text-xs font-mono text-blue-400 border-blue-400/30">
            <HardDrive className="w-3 h-3" /> OPERATION: DATA_EXTRACTION
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-white mb-4">
            Data Recovery
          </h1>
          <p className="text-white/60 text-lg max-w-2xl">
            No matter how old or new, we will recover your files. When disaster strikes, just drop in for a free data recovery diagnostic. No data, no charge.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Main Content */}
          <motion.div variants={itemVariants} className="md:col-span-8 glass-panel rounded-3xl p-8 lg:p-10">
            <h2 className="text-2xl font-semibold text-white mb-6">Supported Recovery Scenarios</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {[
                "Spinning wheel / Freezing",
                "Clicking hard drive (Mechanical)",
                "Flashing question mark folder",
                "Start-up error / Kernel panic",
                "Liquid spill damage",
                "Accidentally deleted files",
                "Physical drop or fall",
                "Dead Logic Board extraction"
              ].map((fault, idx) => (
                <div key={idx} className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                  <AlertTriangle className="w-4 h-4 text-amber-400 mt-1 shrink-0" />
                  <span className="text-sm text-white/80">{fault}</span>
                </div>
              ))}
            </div>

            <div className="p-6 rounded-2xl bg-blue-500/5 border border-blue-500/20">
              <h3 className="text-lg font-medium text-white mb-4 flex items-center gap-2">
                <Search className="w-5 h-5 text-blue-400" /> The Extraction Process
              </h3>
              <ol className="space-y-3 text-sm text-white/60">
                <li className="flex gap-3"><span className="text-blue-400 font-mono">01</span> Bring over your drive or computer.</li>
                <li className="flex gap-3"><span className="text-blue-400 font-mono">02</span> Get a free data recovery flat fee cost and time estimate.</li>
                <li className="flex gap-3"><span className="text-blue-400 font-mono">03</span> If you approve, we proceed. If not, there is no charge.</li>
                <li className="flex gap-3"><span className="text-blue-400 font-mono">04</span> Expect it to be ready in 1 to 5 days depending on drive severity.</li>
                <li className="flex gap-3"><span className="text-green-400 font-mono">05</span> If we cannot recover your files, there is NO CHARGE.</li>
              </ol>
            </div>

            {/* Helpful Content Section for SEO */}
            <div className="mt-8 p-6 rounded-2xl bg-amber-500/10 border border-amber-500/20">
              <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-amber-400" /> Expert Advice: Is your hard drive making a clicking noise?
              </h3>
              <div className="text-white/70 text-sm space-y-3 leading-relaxed">
                <p><strong>1. Turn off the computer immediately.</strong> A clicking sound usually indicates a physical mechanical failure where the read/write head is scratching the magnetic platters. Leaving it running will permanently destroy your data.</p>
                <p><strong>2. Do NOT run disk utility or recovery software.</strong> Standard recovery software stresses the drive intensely. If the drive is physically failing, running software will accelerate the damage.</p>
                <p><strong>3. Never open the drive yourself.</strong> Hard drives must be opened in a certified cleanroom. Even microscopic dust particles landing on the platters will render your data permanently unrecoverable.</p>
              </div>
            </div>
          </motion.div>

          {/* Pricing & Guarantee */}
          <motion.div variants={itemVariants} className="md:col-span-4 flex flex-col gap-6">
            <div className="glass-panel rounded-3xl p-8 flex-1">
              <h3 className="text-white/80 font-medium mb-1">Data Recovery Cost</h3>
              <p className="text-white/40 text-sm mb-6">Tiered based on drive damage.</p>
              
              <div className="font-mono text-4xl text-white mb-2">$150<span className="text-2xl text-white/40">-500</span></div>
              <div className="text-[10px] font-mono text-white/30 mb-8">FIXED FEE PRICING</div>

              <div className="space-y-4">
                <div className="flex items-center gap-3 text-sm text-white/60">
                  <ShieldCheck className="w-4 h-4 text-green-400" /> No Data, No Charge
                </div>
                <div className="flex items-center gap-3 text-sm text-white/60">
                  <Activity className="w-4 h-4 text-blue-400" /> Free Diagnostics
                </div>
              </div>
            </div>

            <Link href="/contact" className="glass-panel rounded-3xl p-6 text-center hover:bg-blue-500/10 transition-colors border-blue-500/30 group cursor-pointer">
              <span className="text-blue-400 font-semibold group-hover:text-blue-300 transition-colors">Start Recovery Protocol</span>
            </Link>
          </motion.div>

        </div>
      </motion.div>
    </main>
  );
}
