"use client";

import { motion } from "framer-motion";
import { Cpu, ShieldCheck, Clock, Zap, Gamepad2, Briefcase, DraftingCompass, Cog, Monitor } from "lucide-react";
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

export default function CustomPCBuild() {
  return (
    <>
      <Head>
        <title>Custom PC Builds Brisbane | Gaming, Work & Engineering Setups</title>
        <meta name="description" content="Expert custom PC builds in Brisbane. Specializing in custom build gaming pc setups, work from home computer setups, and high-performance engineering & architecture computer builds." />
        <meta name="keywords" content="custom build gaming pc setup, work from home computer setup built, engineering computer built, architecture computer built, same day computer built, custom pc brisbane, custom computer assembly" />
      </Head>
      <main className="flex-1 w-full px-8 pt-12 pb-32">
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="max-w-6xl mx-auto">
          
          {/* Header */}
          <motion.div variants={itemVariants} className="mb-12">
            <div className="glass-pill inline-flex items-center gap-2 px-3 py-1 mb-6 text-xs font-mono text-blue-400 border-blue-400/30">
              <Cpu className="w-3 h-3" /> OPERATION: CUSTOM_PC_BUILD
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-white mb-4">
              Custom Computer Builds
            </h1>
            <p className="text-white/60 text-lg max-w-3xl leading-relaxed">
              We design and assemble purpose-built computers tailored precisely to your workflow. Whether you need a high-fps custom build gaming pc setup or an intensive engineering computer built for rendering, we provide expert assembly and extreme cable management.
            </p>
          </motion.div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            
            {/* Main Content */}
            <motion.div variants={itemVariants} className="md:col-span-8 glass-panel rounded-3xl p-8 lg:p-10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl -z-10" />
              <h2 className="text-2xl font-semibold text-white mb-8">Specialized Build Services</h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* 1. Gaming */}
                <div className="p-5 rounded-2xl bg-indigo-900/20 border border-indigo-500/30">
                  <h3 className="flex items-center gap-2 text-lg font-medium text-white mb-2">
                    <Gamepad2 className="w-5 h-5 text-indigo-400" /> Custom Build Gaming PC Setup
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    Maximized frame rates and optimal cooling. We select the perfect GPU, CPU, and RAM combinations to eliminate bottlenecks for top-tier 1440p and 4K gaming.
                  </p>
                </div>

                {/* 2. Work From Home */}
                <div className="p-5 rounded-2xl bg-white/5 border border-white/5">
                  <h3 className="flex items-center gap-2 text-lg font-medium text-white mb-2">
                    <Briefcase className="w-5 h-5 text-blue-400" /> Work From Home Computer Setup
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    Silent, reliable, and multi-monitor ready. A work from home computer setup built for extreme multitasking, Zoom calls, and spreadsheet processing without a hitch.
                  </p>
                </div>

                {/* 3. Engineering / CAD */}
                <div className="p-5 rounded-2xl bg-white/5 border border-white/5">
                  <h3 className="flex items-center gap-2 text-lg font-medium text-white mb-2">
                    <Cog className="w-5 h-5 text-blue-400" /> Engineering Computer Built
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    Designed for SolidWorks, AutoCAD, and heavy computational tasks. We prioritize high-frequency multi-core processors and ECC memory (if required) for stability.
                  </p>
                </div>

                {/* 4. Architecture / 3D */}
                <div className="p-5 rounded-2xl bg-white/5 border border-white/5">
                  <h3 className="flex items-center gap-2 text-lg font-medium text-white mb-2">
                    <DraftingCompass className="w-5 h-5 text-blue-400" /> Architecture Computer Built
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    Optimized for Revit, Maya, and Blender rendering. An architecture computer built with massive VRAM and fast NVMe storage to handle huge project files.
                  </p>
                </div>

                {/* 5. Same Day Builds */}
                <div className="p-5 rounded-2xl bg-white/5 border border-white/5">
                  <h3 className="flex items-center gap-2 text-lg font-medium text-white mb-2">
                    <Clock className="w-5 h-5 text-blue-400" /> Same Day Computer Built
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    Bring us your components in the morning, and get a same day computer built, cable-managed, Windows-installed, and stress-tested by the afternoon.
                  </p>
                </div>

                {/* 6. Testing & Burn-in */}
                <div className="p-5 rounded-2xl bg-white/5 border border-white/5">
                  <h3 className="flex items-center gap-2 text-lg font-medium text-white mb-2">
                    <Monitor className="w-5 h-5 text-blue-400" /> BIOS Update & Stress Test
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    We don't just screw parts together. We update the BIOS, enable XMP/EXPO profiles, install OS drivers, and run thermal stress tests to guarantee zero crashes out of the box.
                  </p>
                </div>

              </div>
            </motion.div>

            {/* Pricing & Guarantee */}
            <motion.div variants={itemVariants} className="md:col-span-4 flex flex-col gap-6">
              <div className="glass-panel rounded-3xl p-8 flex-1">
                <h3 className="text-white/80 font-medium mb-1">Build Assembly Fee</h3>
                <p className="text-white/40 text-sm mb-6">Expert assembly, cable routing, and OS install.</p>
                
                <div className="text-2xl md:text-3xl font-mono text-white tracking-tighter mb-2">Fixed at $150 - $170</div>
                <div className="text-[10px] font-mono text-white/30 mb-8">+ COST OF YOUR COMPONENTS</div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-sm text-white/60">
                    <ShieldCheck className="w-4 h-4 text-green-400" /> Perfect Cable Management
                  </div>
                  <div className="flex items-center gap-3 text-sm text-white/60">
                    <Zap className="w-4 h-4 text-blue-400" /> Windows & Driver Setup
                  </div>
                  <div className="flex items-center gap-3 text-sm text-white/60">
                    <Clock className="w-4 h-4 text-amber-400" /> Same Day Turnaround
                  </div>
                </div>
              </div>

              <Link href="/contact" className="glass-panel rounded-3xl p-6 text-center hover:bg-indigo-500/10 transition-colors border-indigo-500/30 group cursor-pointer">
                <span className="text-indigo-400 font-semibold group-hover:text-indigo-300 transition-colors">Request Build Quote</span>
              </Link>
            </motion.div>

          </div>
        </motion.div>
      </main>
    </>
  );
}
