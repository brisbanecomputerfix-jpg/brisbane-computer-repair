"use client";

import { motion } from "framer-motion";
import { ShieldAlert, ShieldCheck, Activity, Lock, ScanLine, FileText, Wifi, Zap } from "lucide-react";
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

export default function CyberSecurity() {
  return (
    <>
      <Head>
        <title>Cyber Security & Virus Removal Brisbane | Deep Cleaning</title>
        <meta name="description" content="Comprehensive digital security check, cyber security support, and complete remote access removal. We provide bank clearance reports and anti-virus installation." />
        <meta name="keywords" content="comprehensive digital security check, cyber security support, computer deep cleaning, virus removal, remote access removal, bank clearance report, anti virus, internet security install, home or business network check" />
      </Head>
      <main className="flex-1 w-full px-8 pt-12 pb-32">
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="max-w-6xl mx-auto">
          
          {/* Header */}
          <motion.div variants={itemVariants} className="mb-12">
            <div className="glass-pill inline-flex items-center gap-2 px-3 py-1 mb-6 text-xs font-mono text-red-400 border-red-400/30">
              <ShieldAlert className="w-3 h-3" /> OPERATION: THREAT_NEUTRALIZED
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-white mb-4">
              Cyber Security & Deep Cleaning
            </h1>
            <p className="text-white/60 text-lg max-w-3xl leading-relaxed">
              If your computer has been compromised by scammers, hackers, or malware, we provide a comprehensive digital security check and complete remote access removal. We lock down your system, remove all threats, and provide a bank clearance report.
            </p>
          </motion.div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            
            {/* Main Content */}
            <motion.div variants={itemVariants} className="md:col-span-8 glass-panel rounded-3xl p-8 lg:p-10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/10 rounded-full blur-3xl -z-10" />
              <h2 className="text-2xl font-semibold text-white mb-8">Cyber Security Services</h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* 1. Remote Access Removal */}
                <div className="p-5 rounded-2xl bg-red-900/20 border border-red-500/30">
                  <h3 className="flex items-center gap-2 text-lg font-medium text-white mb-2">
                    <Lock className="w-5 h-5 text-red-400" /> Remote Access Removal
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    Did you let a scammer remote into your PC? We find and permanently sever all hidden backdoors, AnyDesk, TeamViewer, or unauthorized remote access tools.
                  </p>
                </div>

                {/* 2. Deep Cleaning */}
                <div className="p-5 rounded-2xl bg-white/5 border border-white/5">
                  <h3 className="flex items-center gap-2 text-lg font-medium text-white mb-2">
                    <ScanLine className="w-5 h-5 text-blue-400" /> Computer Deep Cleaning
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    A thorough virus removal process that wipes out rootkits, spyware, trojans, and browser hijackers at the kernel level without destroying your personal files.
                  </p>
                </div>

                {/* 3. Bank Clearance */}
                <div className="p-5 rounded-2xl bg-white/5 border border-white/5">
                  <h3 className="flex items-center gap-2 text-lg font-medium text-white mb-2">
                    <FileText className="w-5 h-5 text-blue-400" /> Bank Clearance Report
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    If your bank has frozen your accounts due to a scam, we provide a formal IT Bank Clearance Report certifying that your machine is 100% clean and secure.
                  </p>
                </div>

                {/* 4. Network Security */}
                <div className="p-5 rounded-2xl bg-white/5 border border-white/5">
                  <h3 className="flex items-center gap-2 text-lg font-medium text-white mb-2">
                    <Wifi className="w-5 h-5 text-blue-400" /> Home or Business Network Check
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    We audit your router, firewall, and Wi-Fi networks to ensure hackers aren't intercepting your data or piggybacking off your connection.
                  </p>
                </div>

                {/* 5. Anti Virus Install */}
                <div className="p-5 rounded-2xl bg-white/5 border border-white/5">
                  <h3 className="flex items-center gap-2 text-lg font-medium text-white mb-2">
                    <ShieldCheck className="w-5 h-5 text-blue-400" /> Internet Security Install
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    We install, configure, and optimize premium anti-virus and endpoint protection to stop future attacks before they even reach your hard drive.
                  </p>
                </div>

                {/* 6. Comprehensive Check */}
                <div className="p-5 rounded-2xl bg-white/5 border border-white/5">
                  <h3 className="flex items-center gap-2 text-lg font-medium text-white mb-2">
                    <Activity className="w-5 h-5 text-blue-400" /> Cyber Security Support
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    Ongoing cyber security support and education to help you identify phishing emails, fraudulent websites, and modern social engineering tactics.
                  </p>
                </div>

              </div>

              {/* Helpful Content Section for SEO */}
              <div className="mt-12 p-6 rounded-2xl bg-amber-500/10 border border-amber-500/20">
                <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-amber-400" /> Expert Advice: Did you let a scammer onto your computer?
                </h3>
                <div className="text-white/70 text-sm space-y-3 leading-relaxed">
                  <p><strong>1. Disconnect from the internet.</strong> Immediately turn off your Wi-Fi or unplug the ethernet cable. This instantly severs the scammer's connection to your machine.</p>
                  <p><strong>2. Call your bank from a different device.</strong> Do not log into your online banking from the compromised computer. Call your bank immediately and freeze your accounts.</p>
                  <p><strong>3. Do not turn the computer back on.</strong> Bring it in for a comprehensive digital security check. We will perform a deep cleaning and provide the Bank Clearance Report your fraud department requires.</p>
                </div>
              </div>

              {/* Australian Scams & How to Avoid Them */}
              <div className="mt-12">
                <h2 className="text-2xl font-semibold text-white mb-2">Most Well-Known Scams in Australia</h2>
                <p className="text-white/50 text-sm mb-6">Stay vigilant and keep your information up to date. If you encounter any of these, hang up immediately and do not grant remote access.</p>
                
                <div className="space-y-4">
                  <div className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-red-500/30 transition-colors">
                    <h4 className="text-lg font-medium text-white mb-2 text-red-300">1. Microsoft / Windows Support Scam</h4>
                    <p className="text-white/60 text-sm leading-relaxed">
                      <strong>The Scam:</strong> You receive an unsolicited call from someone claiming to be from "Microsoft" or "Windows Technical Support" stating your PC is sending error messages or is infected with a virus.
                      <br /><span className="text-white/80 font-medium">How to Avoid:</span> Microsoft will <em>never</em> call you proactively about PC errors. Hang up immediately.
                    </p>
                  </div>
                  
                  <div className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-red-500/30 transition-colors">
                    <h4 className="text-lg font-medium text-white mb-2 text-red-300">2. The "Frozen Screen" / Fake Virus Pop-Up Scam</h4>
                    <p className="text-white/60 text-sm leading-relaxed">
                      <strong>The Scam:</strong> While browsing, your screen locks up with a terrifying red pop-up and a loud alarm. It claims your computer is locked and demands you call a 1800 number immediately.
                      <br /><span className="text-white/80 font-medium">How to Avoid:</span> This is just a malicious webpage, not an actual virus. Do not call the number. Press Ctrl+Alt+Delete to close your browser via Task Manager, or force restart your computer.
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-red-500/30 transition-colors">
                    <h4 className="text-lg font-medium text-white mb-2 text-red-300">3. Telstra & BigPond NBN Scams</h4>
                    <p className="text-white/60 text-sm leading-relaxed">
                      <strong>The Scam:</strong> Scammers posing as Telstra, BigPond, or NBN Co call to say your IP address is compromised, your internet will be disconnected, or you are owed a refund. They ask to remote into your PC to "fix" the issue.
                      <br /><span className="text-white/80 font-medium">How to Avoid:</span> Legitimate ISPs do not need remote access to your computer to fix network issues. Tell them you will call them back on their official public number, and hang up.
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-red-500/30 transition-colors">
                    <h4 className="text-lg font-medium text-white mb-2 text-red-300">4. Remote Access / "Refund" Scam</h4>
                    <p className="text-white/60 text-sm leading-relaxed">
                      <strong>The Scam:</strong> A scammer (often posing as Amazon, PayPal, or Norton) claims you were accidentally charged and offers a refund. They ask you to install AnyDesk or TeamViewer. Once in, they edit the HTML of your banking page to make it look like they transferred too much money, then demand you return the difference in gift cards.
                      <br /><span className="text-white/80 font-medium">How to Avoid:</span> Never install remote access software for a stranger. If you suspect fraud, check your bank directly on your phone app.
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-red-500/30 transition-colors">
                    <h4 className="text-lg font-medium text-white mb-2 text-red-300">5. High-Earning Crypto Investment Scam</h4>
                    <p className="text-white/60 text-sm leading-relaxed">
                      <strong>The Scam:</strong> Advertisements (often featuring fake celebrity endorsements) promise guaranteed massive returns on cryptocurrency. They get you to create an account, show you fake profits, and encourage you to invest more until you try to withdraw and your money vanishes.
                      <br /><span className="text-white/80 font-medium">How to Avoid:</span> If it sounds too good to be true, it is. Never invest money based on unsolicited advice, social media ads, or high-pressure sales tactics.
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-red-500/30 transition-colors">
                    <h4 className="text-lg font-medium text-white mb-2 text-red-300">6. Police or Charity Donation Scam</h4>
                    <p className="text-white/60 text-sm leading-relaxed">
                      <strong>The Scam:</strong> Callers claim to represent a local police charity or a community group, aggressively asking for donations over the phone.
                      <br /><span className="text-white/80 font-medium">How to Avoid:</span> True charities do not use aggressive phone tactics. Request information by mail, or donate directly through their official, verified website.
                    </p>
                  </div>
                </div>
              </div>

            </motion.div>

            {/* Pricing & Guarantee */}
            <motion.div variants={itemVariants} className="md:col-span-4 flex flex-col gap-6">
              <div className="glass-panel rounded-3xl p-8 flex-1">
                <h3 className="text-white/80 font-medium mb-1">Security Audit & Clean</h3>
                <p className="text-white/40 text-sm mb-6">Complete malware wipe and bank report.</p>
                
                <div className="text-2xl md:text-3xl font-mono text-white tracking-tighter mb-2">Fixed at $150 - $170</div>
                <div className="text-[10px] font-mono text-white/30 mb-8">NO HOURLY RATES</div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-sm text-white/60">
                    <ShieldCheck className="w-4 h-4 text-green-400" /> 100% Threat Removal
                  </div>
                  <div className="flex items-center gap-3 text-sm text-white/60">
                    <FileText className="w-4 h-4 text-blue-400" /> Bank Clearance Report
                  </div>
                  <div className="flex items-center gap-3 text-sm text-white/60">
                    <Zap className="w-4 h-4 text-amber-400" /> Same Day Turnaround
                  </div>
                </div>
              </div>

              <Link href="/contact" className="glass-panel rounded-3xl p-6 text-center hover:bg-red-500/10 transition-colors border-red-500/30 group cursor-pointer">
                <span className="text-red-400 font-semibold group-hover:text-red-300 transition-colors">Start Security Audit</span>
              </Link>
            </motion.div>

          </div>
        </motion.div>
      </main>
    </>
  );
}
