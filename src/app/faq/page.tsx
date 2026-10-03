"use client";

import { motion } from "framer-motion";
import { HelpCircle, Terminal, HardDrive, Laptop, Wrench, ShieldCheck, ChevronRight } from "lucide-react";
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

const faqCategories = [
  {
    title: "General & Pricing",
    icon: Terminal,
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    questions: [
      {
        q: "How much does a repair usually cost?",
        a: "We charge a flat fee of $150 - $170 for resolving most hardware and software issues, plus the cost of any parts if required. We do not charge ambiguous hourly rates, and we will always quote you transparently before commencing any paid work."
      },
      {
        q: "Do you have a No Fix, No Fee policy?",
        a: "Yes. For all standard diagnostics and repairs, if we cannot fix your device or retrieve your data, we will not charge you a cent. Complex board-level diagnostics may have an upfront bench fee, but we will explicitly advise you of this beforehand."
      },
      {
        q: "Do you charge extra for same-day or urgent repairs?",
        a: "No. We believe in getting you back online as fast as possible. If we have the parts in stock and the bandwidth to do it immediately, we will do it same-day at no extra cost."
      }
    ]
  },
  {
    title: "Repairs & Turnaround",
    icon: Wrench,
    color: "text-amber-400",
    bg: "bg-amber-500/10",
    questions: [
      {
        q: "How long does it take to order replacement parts?",
        a: "If we don't have the exact part in our Brisbane workshop, domestic parts (screens, batteries, fans) arrive within 2-3 days. For highly specialized or older logic boards, international supply takes roughly 8-10 days."
      },
      {
        q: "Do I need to book an appointment to drop off my device?",
        a: "Yes. Due to the high volume of repairs and our secure workspace environment, we operate strictly by appointment only. Please call us or request a free quote online to book your drop-off time."
      },
      {
        q: "Can you come to my home or office?",
        a: "Yes! We provide on-site mobile tech support across all Brisbane suburbs. We can often dispatch a technician on the exact same day you call."
      }
    ]
  },
  {
    title: "Data & Privacy",
    icon: ShieldCheck,
    color: "text-green-400",
    bg: "bg-green-500/10",
    questions: [
      {
        q: "Are my personal files and data safe?",
        a: "Absolutely. We are strictly compliant with Australian data privacy standards. We never browse your personal files. Your privacy is paramount, and we only access the root file system necessary to perform the repair."
      },
      {
        q: "What happens to my old hard drive?",
        a: "If we replace your storage drive, we will offer to securely wipe the old drive using military-grade erasure protocols before recycling it, or we will hand the physical drive back to you directly."
      },
      {
        q: "How much does data recovery cost?",
        a: "Standard logical data recovery (accidentally deleted files, formatting errors) ranges from $150 to $500 depending on the complexity and drive size. If the drive requires a clean-room physical repair, we will quote you accordingly."
      }
    ]
  },
  {
    title: "Mac & PC Specifics",
    icon: Laptop,
    color: "text-purple-400",
    bg: "bg-purple-500/10",
    questions: [
      {
        q: "Can you fix liquid damaged MacBooks?",
        a: "Yes. We perform advanced ultrasonic cleaning and logic board microsoldering to repair liquid damaged Macs. Turn off the device immediately, do not plug it into power, and bring it to us ASAP for the highest chance of survival."
      },
      {
        q: "How do I find my computer's model number?",
        a: "For MacBooks, flip it over and look for small text at the top starting with 'A' (e.g., A2338). For Dell/HP/Lenovo laptops, look for a sticker on the bottom case, under the battery, or search for a 'Service Tag' or 'SN' number."
      },
      {
        q: "Do you build custom PCs or upgrade gaming rigs?",
        a: "Yes. We can diagnose bottlenecking issues, upgrade GPUs, swap out failing motherboards, or clone your slow hard drive to a blazingly fast NVMe SSD without you losing your Windows license or files."
      }
    ]
  }
];

export default function FAQPage() {
  return (
    <>
      <Head>
        <title>Frequently Asked Questions | Computer Repair 1 Brisbane</title>
        <meta name="description" content="Find answers to all your computer repair questions. Learn about our pricing, turnaround times, data privacy policies, and on-site repair services in Brisbane." />
        <meta name="keywords" content="computer repair faq, laptop repair cost brisbane, macbook repair questions, data recovery cost brisbane, IT support faq" />
      </Head>
      <main className="flex-1 w-full px-8 pt-12 pb-32">
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="max-w-4xl mx-auto">
          
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <div className="glass-pill inline-flex items-center gap-2 px-3 py-1 mb-6 text-xs font-mono text-blue-400 border-blue-400/30">
              <HelpCircle className="w-3 h-3" /> KNOWLEDGE BASE
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-white mb-6">
              Frequently Asked Questions.
            </h1>
            <p className="text-white/60 text-lg max-w-2xl mx-auto leading-relaxed">
              Transparent answers regarding our repair processes, part sourcing, and pricing structure. No fluff, just the facts.
            </p>
          </motion.div>

          <div className="space-y-12">
            {faqCategories.map((category, catIdx) => (
              <motion.div key={catIdx} variants={itemVariants}>
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-10 h-10 rounded-xl ${category.bg} flex items-center justify-center shrink-0`}>
                    <category.icon className={`w-5 h-5 ${category.color}`} />
                  </div>
                  <h2 className="text-2xl font-semibold text-white">{category.title}</h2>
                </div>
                
                <div className="grid gap-4">
                  {category.questions.map((faq, qIdx) => (
                    <div key={qIdx} className="glass-panel rounded-2xl p-6 md:p-8 border-white/5">
                      <h3 className="text-lg font-medium text-white mb-3 flex items-start gap-3">
                        <span className="text-blue-400 font-mono mt-0.5">Q.</span> 
                        {faq.q}
                      </h3>
                      <p className="text-white/60 leading-relaxed text-sm md:text-base flex items-start gap-3">
                        <span className="text-white/20 font-mono mt-0.5">A.</span>
                        {faq.a}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div variants={itemVariants} className="mt-16 glass-panel rounded-3xl p-8 border-blue-500/20 text-center relative overflow-hidden">
             <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-32 bg-blue-500/10 blur-3xl -z-10" />
             <h3 className="text-2xl font-bold text-white mb-4">Still have questions?</h3>
             <p className="text-white/60 mb-8 max-w-md mx-auto">
               Can't find the answer you're looking for? Contact our Brisbane diagnostic center for a free assessment.
             </p>
             <Link href="/contact" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-xl font-medium transition-all hover:scale-105 active:scale-95">
                Contact Technical Support <ChevronRight className="w-4 h-4" />
             </Link>
          </motion.div>

        </motion.div>
      </main>
    </>
  );
}
