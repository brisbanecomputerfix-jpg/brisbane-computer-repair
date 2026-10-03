"use client";

import { motion } from "framer-motion";
import { HardDrive, ShieldAlert, Wrench, Cpu, Star, ShieldCheck, Award, Globe } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import BentoCard from "@/components/BentoCard";
import FAQ from "@/components/FAQ";
import HomeContactForm from "@/components/HomeContactForm";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { type: "spring" as any, stiffness: 300, damping: 24 }
  },
};

export default function Home() {
  return (
    <main className="flex-1 w-full px-8 pt-12 pb-32">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-12 gap-6 max-w-6xl mx-auto"
      >
        {/* Hero Bento Large */}
        <motion.div 
          variants={itemVariants} 
          className="md:col-span-8 glass-panel rounded-3xl p-10 flex flex-col justify-end relative overflow-hidden group min-h-[400px]"
        >
          <Image src="/hero_bg.jpg" alt="Computer Repair Workshop" fill className="object-cover z-0" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20 z-0" />
          <div className="relative z-10">
            <div className="glass-pill inline-flex px-3 py-1 mb-6 text-xs font-mono text-blue-400 border-blue-400/30 uppercase">
              Brisbane Computer Repairs
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-4 leading-[1.1]">
              Fast & Reliable <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-200">
                Repairs.
              </span>
            </h1>
            <p className="text-white/60 text-lg max-w-md mb-8">
              Expert hardware repairs and diagnostics. We find the fault and fix it with absolute transparency.
            </p>
            <div className="flex gap-4">
              <Link href="/contact" className="bg-white text-black px-6 py-3 rounded-xl font-semibold text-sm hover:bg-blue-50 transition-colors">
                Get a Free Quote
              </Link>
              <div className="glass-panel px-6 py-3 rounded-xl flex items-center gap-3">
                 <span className="text-white/40 text-xs uppercase">Diagnostic Fee:</span>
                 <span className="font-mono text-blue-400">$0.00</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Trust Badges Banner */}
        <motion.div variants={itemVariants} className="md:col-span-12 flex flex-col md:flex-row gap-4 mb-4">
          <div className="flex-1 glass-panel rounded-2xl p-4 flex items-center justify-center gap-3 border-amber-500/20">
            <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
            <span className="text-white font-medium text-sm">4.9/5 Google Rated</span>
          </div>
          <div className="flex-1 glass-panel rounded-2xl p-4 flex items-center justify-center gap-3 border-blue-500/20">
            <Award className="w-5 h-5 text-blue-400" />
            <span className="text-white font-medium text-sm">Certified Technicians</span>
          </div>
          <div className="flex-1 glass-panel rounded-2xl p-4 flex items-center justify-center gap-3 border-green-500/20">
            <ShieldCheck className="w-5 h-5 text-green-400" />
            <span className="text-white font-medium text-sm">Data Privacy Compliant</span>
          </div>
        </motion.div>

        {/* Pricing/Stats Bento Small */}
        <motion.div variants={itemVariants} className="md:col-span-4 glass-panel rounded-3xl p-8 flex flex-col justify-between">
          <div>
            <h3 className="text-white/80 font-medium mb-1">Standard Repairs</h3>
            <p className="text-white/40 text-sm">Most hardware faults resolved within estimate.</p>
          </div>
          <div className="my-8">
             <div className="font-mono text-4xl text-white mb-2">$150 - $170</div>
             <div className="w-full bg-white/5 h-1 rounded-full overflow-hidden">
                <div className="bg-blue-500 w-[75%] h-full" />
             </div>
             <div className="flex justify-between mt-2 text-[10px] font-mono text-white/30">
               <span>+ COST OF PARTS</span>
               <span>MAX ESTIMATE</span>
             </div>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between items-center text-sm border-b border-white/5 pb-2">
              <span className="text-white/50">Domestic Parts</span>
              <span className="font-mono text-white/90">2-3 Days</span>
            </div>
            <div className="flex justify-between items-center text-sm border-b border-white/5 pb-2">
              <span className="text-white/50">International Parts</span>
              <span className="font-mono text-white/90">8-10 Days</span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span className="text-white/50">Success Rate</span>
              <span className="font-mono text-green-400">98%</span>
            </div>
          </div>
        </motion.div>

        {/* Service: Data Recovery */}
        <div className="md:col-span-12 lg:col-span-4 h-full">
          <BentoCard 
            title="Data Recovery"
            description="Professional recovery from failing hard drives, USBs, and liquid-damaged MacBooks."
            icon={HardDrive}
            tags={["DRIVE RECOVERY", "DATA CLONING"]}
            href="/services/data-recovery"
            variants={itemVariants}
            className="h-full"
          />
        </div>

        {/* Service: Hardware Repair */}
        <div className="md:col-span-12 lg:col-span-4 h-full">
          <BentoCard 
            title="Mac & PC Repair"
            description="Logic board microsoldering, battery replacement, and broken screen repairs."
            icon={Wrench}
            tags={["MACBOOK PRO", "LIQUID DAMAGE"]}
            href="/services/mac-repair"
            variants={itemVariants}
            className="h-full"
          />
        </div>

        {/* Service: Custom PC Builds */}
        <div className="md:col-span-12 lg:col-span-4 h-full">
          <BentoCard 
            title="Custom PC Builds"
            description="Gaming rigs, engineering workstations, and WFH computers assembled."
            icon={Cpu}
            tags={["GAMING SETUP", "WORK FROM HOME"]}
            href="/services/custom-pc-build"
            variants={itemVariants}
            className="h-full border-indigo-500/20 hover:border-indigo-400/50"
          />
        </div>

        {/* Service: Cyber Security */}
        <div className="md:col-span-12 lg:col-span-6 h-full">
          <BentoCard 
            title="Cyber Security & Deep Cleaning"
            description="Complete remote access removal, virus wipes, and Bank Clearance Reports."
            icon={ShieldAlert}
            tags={["BANK REPORT", "SCAMMER REMOVAL"]}
            href="/services/cyber-security"
            variants={itemVariants}
            className="h-full border-red-500/20 hover:border-red-400/50"
          />
        </div>

        {/* Service: Web Design */}
        <div className="md:col-span-12 lg:col-span-6 h-full">
          <BentoCard 
            title="Small Business Web Design"
            description="Fast websites, SEO, Google Business Profiles, and custom email setups."
            icon={Globe}
            tags={["SEO SETUP", "BUSINESS EMAILS"]}
            href="/services/small-business-web-design"
            variants={itemVariants}
            className="h-full border-emerald-500/20 hover:border-emerald-400/50"
          />
        </div>

        {/* Two Ways to Get Fixed */}
        <motion.div variants={itemVariants} className="md:col-span-12 grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          
          <div className="glass-panel rounded-3xl p-8 relative overflow-hidden group border border-blue-500/20 hover:border-blue-400/50 transition-colors">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl -z-10 group-hover:bg-blue-500/20 transition-colors" />
            <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">Drop-Off By Appointment</h3>
            <p className="text-white/60 mb-6 text-sm leading-relaxed">
              Prefer to bring it in? Due to high demand and the nature of our repairs, drop-offs are by appointment only. Call us or get a free quote to secure your spot.
            </p>
            <div className="bg-black/40 border border-white/5 p-4 rounded-xl">
              <div className="text-xs font-mono text-blue-400 mb-1">LOCATION</div>
              <div className="text-white font-medium">5 Grosvenor Road</div>
              <div className="text-white/60 text-sm">Indooroopilly, QLD 4068</div>
            </div>
          </div>

          <div className="glass-panel rounded-3xl p-8 relative overflow-hidden group border border-amber-500/20 hover:border-amber-400/50 transition-colors">
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl -z-10 group-hover:bg-amber-500/20 transition-colors" />
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">We Come To You</h3>
            <p className="text-white/60 mb-6 text-sm leading-relaxed">
              Too busy to leave the home or office? We provide on-site repair services and mobile tech support across all Brisbane suburbs.
            </p>
            <div className="bg-black/40 border border-white/5 p-4 rounded-xl flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center shrink-0">
                <svg className="w-5 h-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <div className="text-white font-medium text-sm">Rapid Dispatch</div>
                <div className="text-white/60 text-xs">Same-day visits or anytime sooner.</div>
              </div>
            </div>
          </div>
          
        </motion.div>

        {/* Brands We Service Strip (Nominative Fair Use for SEO) */}
        <motion.div variants={itemVariants} className="md:col-span-12 py-8 mt-4 border-y border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 px-4 md:px-8">
          <div className="text-white/40 text-sm font-medium uppercase tracking-wider shrink-0 text-center md:text-left">
            Independent Repair Specialists For
          </div>
          <div className="flex flex-wrap justify-center md:justify-end gap-x-8 gap-y-4 text-white/60 font-bold tracking-widest uppercase">
            <span className="hover:text-white transition-colors cursor-default">Apple</span>
            <span className="hover:text-white transition-colors cursor-default">Dell</span>
            <span className="hover:text-white transition-colors cursor-default">Lenovo</span>
            <span className="hover:text-white transition-colors cursor-default">HP</span>
            <span className="hover:text-white transition-colors cursor-default">Asus</span>
            <span className="hover:text-white transition-colors cursor-default">Acer</span>
            <span className="hover:text-white transition-colors cursor-default">MSI</span>
          </div>
        </motion.div>

        {/* Social Proof Section */}
        <motion.div variants={itemVariants} className="md:col-span-12 mt-12 mb-6">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">Trusted by Brisbane Locals</h2>
            <p className="text-white/50">Genuine feedback from students and professionals.</p>
          </div>
          <TestimonialCarousel />
        </motion.div>

        {/* FAQ Section */}
        <motion.div variants={itemVariants} className="md:col-span-12 mt-8 mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-white/50">Everything you need to know about our repair process.</p>
          </div>
          <FAQ />
        </motion.div>

        {/* Inline Contact Form */}
        <motion.div variants={itemVariants} className="md:col-span-12 mb-12">
          <HomeContactForm />
        </motion.div>

        {/* International SEO / Target Demographic Block */}
        <motion.div variants={itemVariants} className="md:col-span-12 glass-panel rounded-3xl p-8 border-amber-500/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-white font-medium mb-2">Brisbane Local & International Student Support</h3>
            <p className="text-white/50 text-sm max-w-2xl">
              We provide priority computer repair services for local businesses and university students in Brisbane.
              We are experienced in supporting multi-lingual operating systems and providing precise quotes in multiple languages.
            </p>
          </div>
          <div className="flex flex-col gap-2 shrink-0 text-right">
            <span className="text-sm font-mono text-blue-400">电脑维修, 数据恢复</span>
            <span className="text-sm font-mono text-white/60">컴퓨터 수리, 데이터 복구</span>
            <span className="text-sm font-mono text-white/60">Reparación de Computadoras</span>
          </div>
        </motion.div>

      </motion.div>
    </main>
  );
}
