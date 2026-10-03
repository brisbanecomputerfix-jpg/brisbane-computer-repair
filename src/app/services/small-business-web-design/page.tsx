"use client";

import { motion } from "framer-motion";
import { Globe, ShieldCheck, Zap, Mail, Layout, CreditCard, Search, Cog } from "lucide-react";
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

export default function WebDesign() {
  return (
    <>
      <Head>
        <title>Small Business Web Design Brisbane | SEO & Business Emails</title>
        <meta name="description" content="Expert website development for small businesses in Brisbane. Fast websites, Google Business Profile support, online payment systems, SEO, and business email setup." />
        <meta name="keywords" content="website development for small business, seo, fast website, google business profile support, online payment system ready, business website services, business emails, complete digital setup, small local businesses support" />
      </Head>
      <main className="flex-1 w-full px-8 pt-12 pb-32">
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="max-w-6xl mx-auto">
          
          {/* Header */}
          <motion.div variants={itemVariants} className="mb-12">
            <div className="glass-pill inline-flex items-center gap-2 px-3 py-1 mb-6 text-xs font-mono text-emerald-400 border-emerald-400/30">
              <Globe className="w-3 h-3" /> OPERATION: DIGITAL_PRESENCE
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-white mb-4">
              Website Development & Digital Setup
            </h1>
            <p className="text-white/60 text-lg max-w-3xl leading-relaxed">
              We don't just fix hardware; we build high-performance digital engines for local businesses. From lightning-fast website development for small business to full Google Business Profile support and business email configuration. Complete setup for all your digital needs.
            </p>
          </motion.div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            
            {/* Main Content */}
            <motion.div variants={itemVariants} className="md:col-span-8 glass-panel rounded-3xl p-8 lg:p-10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl -z-10" />
              <h2 className="text-2xl font-semibold text-white mb-8">Business Website Services</h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* 1. Fast Websites */}
                <div className="p-5 rounded-2xl bg-emerald-900/20 border border-emerald-500/30">
                  <h3 className="flex items-center gap-2 text-lg font-medium text-white mb-2">
                    <Zap className="w-5 h-5 text-emerald-400" /> Fast Website Development
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    We build modern, mobile-responsive, and blazing-fast websites. A slow site kills conversions; our architecture guarantees top-tier performance to keep your customers engaged.
                  </p>
                </div>

                {/* 2. SEO & Google Profile */}
                <div className="p-5 rounded-2xl bg-white/5 border border-white/5">
                  <h3 className="flex items-center gap-2 text-lg font-medium text-white mb-2">
                    <Search className="w-5 h-5 text-blue-400" /> SEO & Google Business
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    Expert Google Business Profile support and on-page SEO. We ensure your business ranks highly in local Brisbane search results so customers can actually find you.
                  </p>
                </div>

                {/* 3. Online Payments */}
                <div className="p-5 rounded-2xl bg-white/5 border border-white/5">
                  <h3 className="flex items-center gap-2 text-lg font-medium text-white mb-2">
                    <CreditCard className="w-5 h-5 text-blue-400" /> Online Payment Ready
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    Need to sell products or take bookings? We build secure, online payment system ready architectures (Stripe, PayPal, Square) seamlessly integrated into your site.
                  </p>
                </div>

                {/* 4. Business Emails */}
                <div className="p-5 rounded-2xl bg-white/5 border border-white/5">
                  <h3 className="flex items-center gap-2 text-lg font-medium text-white mb-2">
                    <Mail className="w-5 h-5 text-blue-400" /> Business Emails Setup
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    Stop using @gmail.com for your business. We provide complete setup for professional business emails (e.g., hello@yourbusiness.com.au) via Google Workspace or Microsoft 365.
                  </p>
                </div>

                {/* 5. Complete Setup */}
                <div className="p-5 rounded-2xl bg-white/5 border border-white/5">
                  <h3 className="flex items-center gap-2 text-lg font-medium text-white mb-2">
                    <Cog className="w-5 h-5 text-blue-400" /> Turnkey IT Solutions
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    We are dedicated to supporting small local businesses digitally as well. From domain registration and DNS management to hosting deployment—we handle everything.
                  </p>
                </div>

                {/* 6. UI/UX Design */}
                <div className="p-5 rounded-2xl bg-white/5 border border-white/5">
                  <h3 className="flex items-center gap-2 text-lg font-medium text-white mb-2">
                    <Layout className="w-5 h-5 text-blue-400" /> Premium Aesthetics
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    Your website is your digital storefront. We design dark-mode compatible, minimalist, and highly conversion-optimized interfaces that build immediate trust.
                  </p>
                </div>

              </div>

              {/* Helpful Content Section for SEO */}
              <div className="mt-12 p-6 rounded-2xl bg-amber-500/10 border border-amber-500/20">
                <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-amber-400" /> Expert Advice: Why isn't my small business ranking?
                </h3>
                <div className="text-white/70 text-sm space-y-3 leading-relaxed">
                  <p><strong>1. Your Google Business Profile is incomplete.</strong> The easiest way to rank locally is to fully optimize your Google Maps listing. Make sure your operating hours are accurate and you reply to all reviews.</p>
                  <p><strong>2. Your website loads too slowly.</strong> Google actively penalizes slow sites. If your site takes longer than 3 seconds to load on mobile, users will bounce, and your rankings will tank.</p>
                  <p><strong>3. You lack professional trust signals.</strong> If you don't have a custom domain (business emails) or an online payment system ready, customers are less likely to convert. Upgrading your digital presence instantly boosts credibility.</p>
                </div>
              </div>

            </motion.div>

            {/* Pricing & Guarantee */}
            <motion.div variants={itemVariants} className="md:col-span-4 flex flex-col gap-6">
              <div className="glass-panel rounded-3xl p-8 flex-1">
                <h3 className="text-white/80 font-medium mb-1">Digital Setup</h3>
                <p className="text-white/40 text-sm mb-6">Complete website and business email configuration.</p>
                
                <div className="text-2xl md:text-3xl font-mono text-white tracking-tighter mb-2">Custom Quote</div>
                <div className="text-[10px] font-mono text-white/30 mb-8">TAILORED TO YOUR BUSINESS</div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-sm text-white/60">
                    <Zap className="w-4 h-4 text-emerald-400" /> Ultra-Fast Loading
                  </div>
                  <div className="flex items-center gap-3 text-sm text-white/60">
                    <Search className="w-4 h-4 text-blue-400" /> Local SEO Included
                  </div>
                  <div className="flex items-center gap-3 text-sm text-white/60">
                    <ShieldCheck className="w-4 h-4 text-amber-400" /> Secure Payment Ready
                  </div>
                </div>
              </div>

              <Link href="/contact" className="glass-panel rounded-3xl p-6 text-center hover:bg-emerald-500/10 transition-colors border-emerald-500/30 group cursor-pointer">
                <span className="text-emerald-400 font-semibold group-hover:text-emerald-300 transition-colors">Start Your Project</span>
              </Link>
            </motion.div>

          </div>
        </motion.div>
      </main>
    </>
  );
}
