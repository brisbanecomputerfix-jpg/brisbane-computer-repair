"use client";

import { motion } from "framer-motion";
import { Apple, ShieldCheck, Clock, Zap, Droplets, Monitor, Battery, HardDrive, Settings, Shield, Laptop } from "lucide-react";
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

export default function MacRepair() {
  return (
    <>
      <Head>
        <title>MacBook & iMac Repair Brisbane | Screen, Battery & Liquid Damage</title>
        <meta name="description" content="Expert Apple Mac repair in Brisbane. We fix MacBook liquid spill damage, screen replacement, battery replacement, iMac repairs, and Mac data recovery." />
        <meta name="keywords" content="macbook liquid damage repair brisbane, macbook spill damage, macbook screen repair, macbook screen replacement, macbook battery replacement, imac repair brisbane, macbook data recovery, macbook setup and installation, macbook back up and restore, mac security support, apple mac repair brisbane, mac logic board repair" />
      </Head>
      <main className="flex-1 w-full px-8 pt-12 pb-32">
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="max-w-6xl mx-auto">
          
          {/* Header */}
          <motion.div variants={itemVariants} className="mb-12">
            <div className="glass-pill inline-flex items-center gap-2 px-3 py-1 mb-6 text-xs font-mono text-blue-400 border-blue-400/30">
              <Apple className="w-3 h-3" /> OPERATION: MAC_REPAIR_SERVICES
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-white mb-4">
              Apple Mac Repair Services
            </h1>
            <p className="text-white/60 text-lg max-w-3xl leading-relaxed">
              We love Apple products and pride ourselves on being experts at fixing all things Mac. From complex MacBook liquid spill damage and logic board micro-soldering, to routine MacBook battery replacements and iMac SSD upgrades.
            </p>
          </motion.div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            
            {/* Main Content */}
            <motion.div variants={itemVariants} className="md:col-span-8 glass-panel rounded-3xl p-8 lg:p-10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -z-10" />
              <h2 className="text-2xl font-semibold text-white mb-8">Comprehensive Mac Services</h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* 1. Liquid Damage */}
                <div className="p-5 rounded-2xl bg-blue-900/20 border border-blue-500/30">
                  <h3 className="flex items-center gap-2 text-lg font-medium text-white mb-2">
                    <Droplets className="w-5 h-5 text-blue-400" /> MacBook Liquid Spill Damage
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    We directly repair logic boards damaged by water, coffee, or wine using ultrasonic cleaning and micro-soldering, saving you from a costly full board replacement.
                  </p>
                </div>

                {/* 2. Screen Replacement */}
                <div className="p-5 rounded-2xl bg-white/5 border border-white/5">
                  <h3 className="flex items-center gap-2 text-lg font-medium text-white mb-2">
                    <Monitor className="w-5 h-5 text-blue-400" /> MacBook Screen Repair
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    OEM-grade MacBook screen replacements for MacBook Air and MacBook Pro Retina displays, ensuring perfect color accuracy and True Tone functionality.
                  </p>
                </div>

                {/* 3. Battery Replacement */}
                <div className="p-5 rounded-2xl bg-white/5 border border-white/5">
                  <h3 className="flex items-center gap-2 text-lg font-medium text-white mb-2">
                    <Battery className="w-5 h-5 text-blue-400" /> MacBook Battery Replacement
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    Safe removal of swollen glued-in batteries and installation of premium, cycle-tested lithium-ion replacements to restore all-day battery life.
                  </p>
                </div>

                {/* 4. iMac Repair */}
                <div className="p-5 rounded-2xl bg-white/5 border border-white/5">
                  <h3 className="flex items-center gap-2 text-lg font-medium text-white mb-2">
                    <Laptop className="w-5 h-5 text-blue-400" /> iMac Repair & Upgrades
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    Running slow? We carefully remove the glass display to upgrade slow spinning hard drives to blazing-fast SSDs, and fix failing iMac power supplies.
                  </p>
                </div>

                {/* 5. Data Recovery */}
                <div className="p-5 rounded-2xl bg-white/5 border border-white/5">
                  <h3 className="flex items-center gap-2 text-lg font-medium text-white mb-2">
                    <HardDrive className="w-5 h-5 text-blue-400" /> MacBook Data Recovery
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    Dead logic board? Flashing folder with a question mark? We bypass damaged boot sectors to recover your critical files, photos, and documents.
                  </p>
                </div>

                {/* 6. Setup & Security */}
                <div className="p-5 rounded-2xl bg-white/5 border border-white/5">
                  <h3 className="flex items-center gap-2 text-lg font-medium text-white mb-2">
                    <Settings className="w-5 h-5 text-blue-400" /> Setup & Backups
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    Complete MacBook setup and installation, Time Machine backup and restore configurations, and comprehensive Mac security & malware support.
                  </p>
                </div>

              </div>

              {/* Helpful Content Section for SEO */}
              <div className="mt-12 p-6 rounded-2xl bg-amber-500/10 border border-amber-500/20">
                <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-amber-400" /> Expert Advice: Just Spilled Liquid on your Mac?
                </h3>
                <div className="text-white/70 text-sm space-y-3 leading-relaxed">
                  <p><strong>1. Turn it off immediately.</strong> Do not try to turn it back on to "see if it works." Electricity running through liquid causes corrosion and shorts out the logic board.</p>
                  <p><strong>2. Unplug the charger and any accessories.</strong> If your MacBook has a removable battery (older models), take it out. Otherwise, hold the power button for 10 seconds to force a shutdown.</p>
                  <p><strong>3. Do NOT put it in rice.</strong> Rice does not absorb water from inside the chassis and can introduce dust and debris into the ports. Instead, lay it open like a tent on a towel to let gravity drain it, and bring it to a repair specialist for professional ultrasonic cleaning as soon as possible.</p>
                </div>
              </div>

            </motion.div>

            {/* Pricing & Guarantee */}
            <motion.div variants={itemVariants} className="md:col-span-4 flex flex-col gap-6">
              <div className="glass-panel rounded-3xl p-8 flex-1">
                <h3 className="text-white/80 font-medium mb-1">Mac Repair Estimate</h3>
                <p className="text-white/40 text-sm mb-6">Component level logic board repair.</p>
                
                <div className="text-2xl md:text-3xl font-mono text-white tracking-tighter mb-2">Most repairs resolved for $150 - $170</div>
                <div className="text-[10px] font-mono text-white/30 mb-8">+ PARTS (IF REQUIRED)</div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-sm text-white/60">
                    <ShieldCheck className="w-4 h-4 text-green-400" /> Only charged if fixed
                  </div>
                  <div className="flex items-center gap-3 text-sm text-white/60">
                    <Clock className="w-4 h-4 text-blue-400" /> Free Diagnostics
                  </div>
                  <div className="flex items-center gap-3 text-sm text-white/60">
                    <Zap className="w-4 h-4 text-amber-400" /> Direct Logic Board Fix
                  </div>
                </div>
              </div>

              <Link href="/contact" className="glass-panel rounded-3xl p-6 text-center hover:bg-blue-500/10 transition-colors border-blue-500/30 group cursor-pointer">
                <span className="text-blue-400 font-semibold group-hover:text-blue-300 transition-colors">Request Diagnostic</span>
              </Link>
            </motion.div>

          </div>
        </motion.div>
      </main>
    </>
  );
}
