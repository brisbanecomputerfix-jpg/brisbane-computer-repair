"use client";

import { motion } from "framer-motion";
import { Network, Server, Headset, Building, ShieldCheck, Clock, DollarSign } from "lucide-react";
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

export default function ITSupport() {
  return (
    <>
      <Head>
        <title>Urgent Business IT Support Brisbane | Local 24/7 Help</title>
        <meta name="description" content="Your micro business IT support team in Brisbane. No need to hire an IT guy! We provide 24/7 urgent support at a super low cost for local businesses." />
        <meta name="keywords" content="urgent business it support, micro business it support, local business it support, 24/7 urgent support, outsourced it brisbane, small business it services, emergency server repair, network down brisbane" />
      </Head>
      <main className="flex-1 w-full px-8 pt-12 pb-32">
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="max-w-6xl mx-auto">
          
          {/* Header */}
          <motion.div variants={itemVariants} className="mb-12">
            <div className="glass-pill inline-flex items-center gap-2 px-3 py-1 mb-6 text-xs font-mono text-blue-400 border-blue-400/30">
              <Network className="w-3 h-3" /> OPERATION: MANAGED_IT_OPS
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-white mb-4">
              Urgent Business IT Support
            </h1>
            <p className="text-white/60 text-lg max-w-2xl leading-relaxed">
              Consider us <strong>your dedicated micro business IT support team</strong>. 
              There is absolutely no need to hire or employ a full-time IT staff member. 
              We provide 24/7 urgent support at a super low cost, specifically tailored for local Brisbane businesses.
            </p>
          </motion.div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            
            {/* Main Content */}
            <motion.div variants={itemVariants} className="md:col-span-8 glass-panel rounded-3xl p-8 lg:p-10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -z-10" />
              <h2 className="text-2xl font-semibold text-white mb-6">Our Local Business IT Capabilities</h2>
              
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-blue-900/10 border border-blue-500/20 flex gap-4 items-start">
                  <Clock className="w-6 h-6 text-blue-400 shrink-0 mt-1" />
                  <div>
                    <h3 className="text-white font-medium mb-1">24/7 Urgent IT Support</h3>
                    <p className="text-white/60 text-sm">Server down? Point of Sale (POS) stopped working? Network crash? We understand that downtime costs you money. We offer rapid emergency response for urgent business IT support to get you back online instantly.</p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white/5 border border-white/5 flex gap-4 items-start">
                  <Building className="w-6 h-6 text-blue-400 shrink-0 mt-1" />
                  <div>
                    <h3 className="text-white font-medium mb-1">Micro Business Outsourced IT</h3>
                    <p className="text-white/60 text-sm">Perfect for cafes, retail shops, medical clinics, and small offices. Get enterprise-grade local business IT support without the enterprise price tag. We handle your networking, emails, and endpoints.</p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white/5 border border-white/5 flex gap-4 items-start">
                  <Headset className="w-6 h-6 text-blue-400 shrink-0 mt-1" />
                  <div>
                    <h3 className="text-white font-medium mb-1">Helpdesk & Remote Troubleshooting</h3>
                    <p className="text-white/60 text-sm">Receive phone support, remote access troubleshooting, or on-premises computer support to rapidly fix slow computers, viruses, or printer connection issues.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Pricing & Guarantee */}
            <motion.div variants={itemVariants} className="md:col-span-4 flex flex-col gap-6">
              <div className="glass-panel rounded-3xl p-8 flex-1">
                <h3 className="text-white/80 font-medium mb-1">Micro Business Tier</h3>
                <p className="text-white/40 text-sm mb-6">Why hire when you can outsource?</p>
                
                <div className="font-mono text-3xl text-white mb-2 text-green-400">SUPER LOW COST</div>
                <div className="text-[10px] font-mono text-white/30 mb-8">CONTACT FOR CUSTOM QUOTE</div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-sm text-white/60">
                    <ShieldCheck className="w-4 h-4 text-green-400" /> Dedicated IT Rep
                  </div>
                  <div className="flex items-center gap-3 text-sm text-white/60">
                    <Clock className="w-4 h-4 text-blue-400" /> 24/7 Urgent Response
                  </div>
                  <div className="flex items-center gap-3 text-sm text-white/60">
                    <DollarSign className="w-4 h-4 text-amber-400" /> Zero Employee Overhead
                  </div>
                </div>
              </div>

              <Link href="/contact" className="glass-panel rounded-3xl p-6 text-center hover:bg-blue-500/10 transition-colors border-blue-500/30 group cursor-pointer">
                <span className="text-blue-400 font-semibold group-hover:text-blue-300 transition-colors">Request IT Assessment</span>
              </Link>
            </motion.div>

          </div>
        </motion.div>
      </main>
    </>
  );
}
