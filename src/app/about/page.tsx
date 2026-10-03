"use client";

import { motion } from "framer-motion";
import { Info, Award, UserCheck, ShieldAlert, Zap, Truck, DollarSign, Clock, ShieldCheck } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { type: "spring" as any, stiffness: 300, damping: 24 } },
};

export default function About() {
  return (
    <>
      <Head>
        <title>About Computer Repair 1 | Brisbane's Trusted Local Experts</title>
        <meta name="description" content="Brisbane's leading local IT experts. Transparent pricing, same-day repairs with no urgent fees, cyber security experts, and highly competitive rates." />
      </Head>
      <main className="flex-1 w-full px-8 pt-12 pb-32">
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="max-w-6xl mx-auto">
          
          {/* Header */}
          <motion.div 
            variants={itemVariants} 
            className="mb-12 text-center md:text-left glass-panel rounded-3xl p-10 relative overflow-hidden"
          >
            <Image src="/about_bg.jpg" alt="Computer Repair Workshop" fill className="object-cover z-0" priority />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30 z-0" />
            <div className="relative z-10">
              <div className="glass-pill inline-flex items-center gap-2 px-3 py-1 mb-6 text-xs font-mono text-blue-400 border-blue-400/30">
                <Info className="w-3 h-3" /> ABOUT US
              </div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-white mb-4">
                Brisbane's Trusted IT & Cyber Security Experts
              </h1>
              <p className="text-white/60 text-lg max-w-3xl leading-relaxed mx-auto md:mx-0">
                Established on the principles of ultimate transparency, lightning-fast turnaround, and genuine local support. We don't just fix computers; we secure your digital life and keep your business running without the exorbitant enterprise price tag.
              </p>
            </div>
          </motion.div>

          {/* Core Guarantees Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            
            <motion.div variants={itemVariants} className="p-6 glass-panel rounded-3xl border border-white/10 hover:border-blue-500/30 transition-colors">
              <DollarSign className="w-8 h-8 text-green-400 mb-4" />
              <h3 className="text-white font-semibold text-lg mb-2">Transparent, Competitive Pricing</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                No hidden hourly rates. We breakdown our pricing so you know exactly what you are paying for. Most repairs are resolved for a highly competitive <strong>$150 - $170</strong> flat fee (+ parts).
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="p-6 glass-panel rounded-3xl border border-white/10 hover:border-blue-500/30 transition-colors">
              <Zap className="w-8 h-8 text-amber-400 mb-4" />
              <h3 className="text-white font-semibold text-lg mb-2">Same Day & Urgent Repairs</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                Computer emergencies don't wait. That's why we offer <strong>same-day repairs at absolutely no extra cost</strong> for urgent jobs. Quick turnaround is our standard, not a premium add-on.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="p-6 glass-panel rounded-3xl border border-white/10 hover:border-blue-500/30 transition-colors">
              <ShieldAlert className="w-8 h-8 text-blue-400 mb-4" />
              <h3 className="text-white font-semibold text-lg mb-2">Cyber Security Experts</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                Beyond hardware, we are certified cyber security experts. We harden your local network, remove deep-root malware, and protect your micro-business from ransomware and data breaches.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="p-6 glass-panel rounded-3xl border border-white/10 hover:border-blue-500/30 transition-colors">
              <UserCheck className="w-8 h-8 text-cyan-400 mb-4" />
              <h3 className="text-white font-semibold text-lg mb-2">Local Expert Technicians</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                When you call us, you speak directly to the local Brisbane technician working on your machine. No outsourced call centers, no clueless salespeople. Just expert, direct support.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="p-6 glass-panel rounded-3xl border border-white/10 hover:border-blue-500/30 transition-colors">
              <Truck className="w-8 h-8 text-purple-400 mb-4" />
              <h3 className="text-white font-semibold text-lg mb-2">Rapid Part Supply</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                We maintain an extensive local inventory and partner with rapid-supply vendors to ensure that if a specific component is needed, your repair isn't stalled for weeks waiting on shipping.
              </p>
            </motion.div>
            
            {/* CTA Box in Grid */}
            <motion.div variants={itemVariants} className="p-6 glass-panel rounded-3xl bg-blue-500/10 border border-blue-500/30 flex flex-col justify-center items-center text-center">
              <ShieldCheck className="w-10 h-10 text-blue-400 mb-4" />
              <h3 className="text-white font-semibold text-lg mb-2">Ready to get started?</h3>
              <p className="text-blue-200/70 text-sm mb-6">Drop in for a free visual diagnostic.</p>
              <Link href="/contact" className="w-full py-3 bg-blue-600 hover:bg-blue-500 transition-colors text-white text-sm font-semibold rounded-xl">
                Contact Us Now
              </Link>
            </motion.div>

          </div>

          {/* Credentials / E-E-A-T */}
          <motion.div variants={itemVariants} className="glass-panel rounded-3xl p-8 lg:p-10 border-green-500/20 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Award className="w-8 h-8 text-green-400" />
                <h2 className="text-2xl font-bold text-white">Why Brisbane Trusts Us</h2>
              </div>
              <p className="text-white/60 max-w-2xl leading-relaxed text-sm md:text-base">
                With over a decade of micro-electronics repair and enterprise IT administration, we bring corporate-level expertise to local consumers and micro-businesses. 100% Australian owned and operated from Indooroopilly, we guarantee honest assessments and a strict "Conditional No Fix, No Fee" policy.
              </p>
            </div>
            
            <div className="flex flex-col gap-4 w-full md:w-auto shrink-0">
              <div className="flex items-center gap-4 bg-black/40 px-6 py-4 rounded-2xl border border-white/5">
                <Clock className="w-6 h-6 text-amber-400" />
                <div>
                  <div className="text-white font-semibold">Fastest Turnaround</div>
                  <div className="text-white/40 text-xs">Same day repairs standard</div>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-black/40 px-6 py-4 rounded-2xl border border-white/5">
                <Award className="w-6 h-6 text-blue-400" />
                <div>
                  <div className="text-white font-semibold">10+ Years Experience</div>
                  <div className="text-white/40 text-xs">A+ Certified Engineers</div>
                </div>
              </div>
            </div>
          </motion.div>

        </motion.div>
      </main>
    </>
  );
}
