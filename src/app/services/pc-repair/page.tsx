"use client";

import { motion } from "framer-motion";
import { Cpu, ShieldCheck, Wrench, Clock, Zap } from "lucide-react";
import Link from "next/link";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { type: "spring" as any, stiffness: 300, damping: 24 } },
};

export default function PCRepair() {
  return (
    <main className="flex-1 w-full px-8 pt-12 pb-32">
      <motion.div variants={containerVariants} initial="hidden" animate="visible" className="max-w-6xl mx-auto">
        
        {/* Header */}
        <motion.div variants={itemVariants} className="mb-12">
          <div className="glass-pill inline-flex items-center gap-2 px-3 py-1 mb-6 text-xs font-mono text-blue-400 border-blue-400/30">
            <Cpu className="w-3 h-3" /> OPERATION: PC_HARDWARE_SYNC
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-white mb-4">
            Windows & PC Repair
          </h1>
          <p className="text-white/60 text-lg max-w-2xl">
            Get your computer fixed at the best computer repair in Brisbane. Know the cost first before the fix. Get an upfront flat fee along with a speedy turn-around time.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Main Content */}
          <motion.div variants={itemVariants} className="md:col-span-8 glass-panel rounded-3xl p-8 lg:p-10">
            <h2 className="text-2xl font-semibold text-white mb-6">Common Faults Resolved</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Computer is slow or freezes",
                "Computer will not boot up",
                "Cannot access Internet or email",
                "Computer virus / spyware",
                "Laptop shuts down on its own",
                "Spilled Liquid on Laptop",
                "Broken laptop screen",
                "Blue screen / error message",
                "Hardware issues / software issues",
                "Windows updates issue"
              ].map((fault, idx) => (
                <div key={idx} className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                  <Wrench className="w-4 h-4 text-blue-400 mt-1 shrink-0" />
                  <span className="text-sm text-white/80">{fault}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Pricing & Guarantee */}
          <motion.div variants={itemVariants} className="md:col-span-4 flex flex-col gap-6">
            <div className="glass-panel rounded-3xl p-8 flex-1">
              <h3 className="text-white/80 font-medium mb-1">Standard Flat Fee</h3>
              <p className="text-white/40 text-sm mb-6">Free Diagnostics on the spot.</p>
              
              <div className="font-mono text-4xl text-white mb-2">$150</div>
              <div className="text-[10px] font-mono text-white/30 mb-8">+ PARTS (IF REQUIRED)</div>

              <div className="space-y-4">
                <div className="flex items-center gap-3 text-sm text-white/60">
                  <ShieldCheck className="w-4 h-4 text-green-400" /> Conditional No Fix, No Fee
                </div>
                <div className="flex items-center gap-3 text-sm text-white/60">
                  <Clock className="w-4 h-4 text-blue-400" /> Same Day / 24H Turnaround
                </div>
                <div className="flex items-center gap-3 text-sm text-white/60">
                  <Zap className="w-4 h-4 text-amber-400" /> Drop-off By Appointment Only
                </div>
              </div>
            </div>

            <Link href="/contact" className="glass-panel rounded-3xl p-6 text-center hover:bg-blue-500/10 transition-colors border-blue-500/30 group cursor-pointer">
              <span className="text-blue-400 font-semibold group-hover:text-blue-300 transition-colors">Schedule Drop-off / Call</span>
            </Link>
          </motion.div>

          {/* Why Choose Us */}
          <motion.div variants={itemVariants} className="md:col-span-12 glass-panel rounded-3xl p-8 lg:p-10 mt-6">
            <h2 className="text-2xl font-semibold text-white mb-6">Why choose us over manufacturer repairs?</h2>
            <p className="text-white/70 leading-relaxed max-w-4xl text-sm md:text-base">
              If you’re thinking of Dell, HP, Lenovo, Sony, Toshiba, Acer, Asus or another PC manufacturer, think again. In most cases, you’ll need to ship your computer into the repair depot. This is only a good service if you have 2-4 weeks to spare. On the other hand, if you want to fix your computer in the same day without any hassles, go to Computer Repair 1 for the best Microsoft repair service in Brisbane. Our PC technicians are certified to work on all the major manufacturer Windows laptops and desktops, and are able to begin fixing your computer as soon as you ask us to. No red tape, no overcharging, and no tech speak.
            </p>
          </motion.div>

        </div>
      </motion.div>
    </main>
  );
}
