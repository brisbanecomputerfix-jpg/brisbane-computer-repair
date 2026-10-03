import { Box, Wrench, HardDrive, Server, Shield, Laptop, Globe, Cpu, Briefcase, Apple, Activity, Monitor, Battery, Fan } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Comprehensive Computer Repair Services in Brisbane",
  description: "Explore our full range of professional IT services including PC Repair, Apple Mac Logic Board Repair, Data Recovery, and Business IT Support.",
  alternates: {
    canonical: "https://computerrepair1.com/services"
  }
};

export default function ServicesHub() {
  return (
    <main className="flex-1 w-full px-8 pt-12 pb-32">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <div className="glass-pill inline-flex items-center gap-2 px-3 py-1 mb-6 text-xs font-mono text-blue-400 border-blue-400/30">
            <Box className="w-3 h-3" /> ALL SERVICES
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-white mb-4">
            Our Services
          </h1>
          <p className="text-white/60 text-lg max-w-2xl">
            We operate at the intersection of precision engineering and speed. Browse our comprehensive list of logic board, software, and hardware repair solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          <Link href="/services/pc-repair" className="glass-panel p-8 rounded-3xl hover:bg-white/5 transition-colors group cursor-pointer block border border-white/10 hover:border-blue-500/50">
            <Wrench className="w-8 h-8 text-blue-400 mb-6 group-hover:scale-110 transition-transform" />
            <h2 className="text-2xl font-semibold text-white mb-3">PC & Windows Repair</h2>
            <p className="text-white/60 text-sm leading-relaxed mb-4">From blue screens and boot loops to custom PC builds and hardware diagnostics. Most repairs resolved for $150 - $170 + parts.</p>
            <span className="text-xs font-mono text-blue-400">View Service →</span>
          </Link>

          <Link href="/services/mac-repair" className="glass-panel p-8 rounded-3xl hover:bg-white/5 transition-colors group cursor-pointer block border border-white/10 hover:border-blue-500/50">
            <Laptop className="w-8 h-8 text-blue-400 mb-6 group-hover:scale-110 transition-transform" />
            <h2 className="text-2xl font-semibold text-white mb-3">Mac & Logic Board</h2>
            <p className="text-white/60 text-sm leading-relaxed mb-4">Specializing in liquid spill damage and micro-soldering logic board repairs without needing full replacement.</p>
            <span className="text-xs font-mono text-blue-400">View Service →</span>
          </Link>

          <Link href="/services/data-recovery" className="glass-panel p-8 rounded-3xl hover:bg-white/5 transition-colors group cursor-pointer block border border-white/10 hover:border-blue-500/50">
            <HardDrive className="w-8 h-8 text-blue-400 mb-6 group-hover:scale-110 transition-transform" />
            <h2 className="text-2xl font-semibold text-white mb-3">Data Recovery</h2>
            <p className="text-white/60 text-sm leading-relaxed mb-4">No Data, No Charge. Advanced recovery from dead drives, formatted disks, and mechanically failing hardware.</p>
            <span className="text-xs font-mono text-blue-400">View Service →</span>
          </Link>

          <Link href="/services/it-support" className="glass-panel p-8 rounded-3xl hover:bg-white/5 transition-colors group cursor-pointer block border border-white/10 hover:border-blue-500/50">
            <Server className="w-8 h-8 text-blue-400 mb-6 group-hover:scale-110 transition-transform" />
            <h2 className="text-2xl font-semibold text-white mb-3">Managed IT Support</h2>
            <p className="text-white/60 text-sm leading-relaxed mb-4">On-site networking, server deployment, helpdesk support, and ongoing maintenance for small to medium businesses.</p>
            <span className="text-xs font-mono text-blue-400">View Service →</span>
          </Link>

          <Link href="/services/screen-replacement" className="glass-panel p-8 rounded-3xl hover:bg-white/5 transition-colors group cursor-pointer block border border-white/10 hover:border-blue-500/50">
            <Monitor className="w-8 h-8 text-blue-400 mb-6 group-hover:scale-110 transition-transform" />
            <h2 className="text-2xl font-semibold text-white mb-3">Screen Replacement</h2>
            <p className="text-white/60 text-sm leading-relaxed mb-4">Precision OEM-grade display repairs for MacBook Retina, OLED gaming laptops, and standard PC displays. True Tone calibration and exact color matching guaranteed.</p>
            <span className="text-xs font-mono text-blue-400">View Service →</span>
          </Link>

          <Link href="/services/laptop-battery-replacement" className="glass-panel p-8 rounded-3xl hover:bg-white/5 transition-colors group cursor-pointer block border border-white/10 hover:border-blue-500/50">
            <Battery className="w-8 h-8 text-emerald-400 mb-6 group-hover:scale-110 transition-transform" />
            <h2 className="text-2xl font-semibold text-white mb-3">Battery Replacement</h2>
            <p className="text-white/60 text-sm leading-relaxed mb-4">Premium OEM-grade lithium-ion cell replacements for all laptop brands. We safely repair swollen batteries, calibrate power management ICs, and safely dissolve MacBook adhesives.</p>
            <span className="text-xs font-mono text-blue-400">View Service →</span>
          </Link>

          <Link href="/services/laptop-fan-replacement" className="glass-panel p-8 rounded-3xl hover:bg-white/5 transition-colors group cursor-pointer block border border-white/10 hover:border-blue-500/50">
            <Fan className="w-8 h-8 text-cyan-400 mb-6 group-hover:scale-110 transition-transform" />
            <h2 className="text-2xl font-semibold text-white mb-3">Cooling Fan & Overheating Fix</h2>
            <p className="text-white/60 text-sm leading-relaxed mb-4">Resolving rattling fans, HP 90B errors, and thermal throttling. We fully disassemble the thermal module, install OEM-matched fans, and apply premium thermal paste to restore performance.</p>
            <span className="text-xs font-mono text-cyan-400">View Service →</span>
          </Link>
        </div>

        {/* Detailed Service Coverage Directory */}
        <div className="border-t border-white/10 pt-16">
          <h2 className="text-3xl font-bold tracking-tighter text-white mb-8">
            Detailed Service Coverage
          </h2>
          <p className="text-white/60 mb-12 max-w-3xl">
            We are highly experienced across hundreds of distinct technical problems. Below is a detailed directory of the most common jobs we service in our Brisbane workshop and on-site.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            
            {/* Hardware */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Wrench className="w-5 h-5 text-blue-400" />
                <h3 className="text-xl font-semibold text-white">Hardware Repairs</h3>
              </div>
              <ul className="space-y-3 text-sm text-white/60">
                <li className="flex items-start gap-2"><span className="text-blue-400 mt-0.5">▹</span> Liquid damage laptop repairs</li>
                <li className="flex items-start gap-2"><span className="text-blue-400 mt-0.5">▹</span> Laptop screen replacement (Touch, Non-touch, OLED)</li>
                <li className="flex items-start gap-2"><span className="text-blue-400 mt-0.5">▹</span> Laptop battery replacement</li>
                <li className="flex items-start gap-2"><span className="text-blue-400 mt-0.5">▹</span> Laptop hinge repair & top casing replacement</li>
                <li className="flex items-start gap-2"><span className="text-blue-400 mt-0.5">▹</span> Keyboard & palm rest replacement</li>
                <li className="flex items-start gap-2"><span className="text-blue-400 mt-0.5">▹</span> Trackpad / touch pad repair and replacement</li>
                <li className="flex items-start gap-2"><span className="text-blue-400 mt-0.5">▹</span> Laptop fan replacement and repair</li>
                <li className="flex items-start gap-2"><span className="text-blue-400 mt-0.5">▹</span> Wi-Fi card replacement and repair</li>
                <li className="flex items-start gap-2"><span className="text-blue-400 mt-0.5">▹</span> Sound speaker replacement</li>
              </ul>
            </div>

            {/* Data Recovery */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <HardDrive className="w-5 h-5 text-blue-400" />
                <h3 className="text-xl font-semibold text-white">Data Recovery & Migration</h3>
              </div>
              <ul className="space-y-3 text-sm text-white/60">
                <li className="flex items-start gap-2"><span className="text-blue-400 mt-0.5">▹</span> Dead or old laptop data recovery</li>
                <li className="flex items-start gap-2"><span className="text-blue-400 mt-0.5">▹</span> External hard drive data recovery</li>
                <li className="flex items-start gap-2"><span className="text-blue-400 mt-0.5">▹</span> Broken laptop data recovery</li>
                <li className="flex items-start gap-2"><span className="text-blue-400 mt-0.5">▹</span> Deleted data recovery</li>
                <li className="flex items-start gap-2"><span className="text-blue-400 mt-0.5">▹</span> Outlook data or old email recovery</li>
                <li className="flex items-start gap-2"><span className="text-blue-400 mt-0.5">▹</span> Old laptop data cloning to new one (Migration)</li>
              </ul>
            </div>

            {/* Upgrades & Builds */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Cpu className="w-5 h-5 text-blue-400" />
                <h3 className="text-xl font-semibold text-white">Upgrades & Custom Builds</h3>
              </div>
              <ul className="space-y-3 text-sm text-white/60">
                <li className="flex items-start gap-2"><span className="text-blue-400 mt-0.5">▹</span> New custom PC build (Bring your own parts or we supply)</li>
                <li className="flex items-start gap-2"><span className="text-blue-400 mt-0.5">▹</span> Gaming PC performance upgrade</li>
                <li className="flex items-start gap-2"><span className="text-blue-400 mt-0.5">▹</span> Engineering computer setup and build</li>
                <li className="flex items-start gap-2"><span className="text-blue-400 mt-0.5">▹</span> Slow computer repair and performance upgrade</li>
                <li className="flex items-start gap-2"><span className="text-blue-400 mt-0.5">▹</span> Hot laptop upgrades (Cleaning, thermal paste, cooling fan replacement)</li>
                <li className="flex items-start gap-2"><span className="text-blue-400 mt-0.5">▹</span> Deep computer cleaning (Dust & thermals)</li>
              </ul>
            </div>

            {/* Cyber Security */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-5 h-5 text-blue-400" />
                <h3 className="text-xl font-semibold text-white">Cyber Security</h3>
              </div>
              <ul className="space-y-3 text-sm text-white/60">
                <li className="flex items-start gap-2"><span className="text-blue-400 mt-0.5">▹</span> Virus and Trojan removal & deep cleaning</li>
                <li className="flex items-start gap-2"><span className="text-blue-400 mt-0.5">▹</span> Digital security check services & consultation</li>
                <li className="flex items-start gap-2"><span className="text-blue-400 mt-0.5">▹</span> Cyber security support & safe online banking setup</li>
                <li className="flex items-start gap-2"><span className="text-blue-400 mt-0.5">▹</span> Antivirus or internet security installation and setup</li>
                <li className="flex items-start gap-2"><span className="text-blue-400 mt-0.5">▹</span> Computer insurance claim letter & report preparation</li>
              </ul>
            </div>

            {/* Web & Cloud */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Globe className="w-5 h-5 text-blue-400" />
                <h3 className="text-xl font-semibold text-white">Web & Cloud Services</h3>
              </div>
              <ul className="space-y-3 text-sm text-white/60">
                <li className="flex items-start gap-2"><span className="text-blue-400 mt-0.5">▹</span> Small business website build setup & full SEO automation</li>
                <li className="flex items-start gap-2"><span className="text-blue-400 mt-0.5">▹</span> Custom website build with payment systems</li>
                <li className="flex items-start gap-2"><span className="text-blue-400 mt-0.5">▹</span> High-speed website optimization</li>
                <li className="flex items-start gap-2"><span className="text-blue-400 mt-0.5">▹</span> Custom email address or VPS server installation</li>
                <li className="flex items-start gap-2"><span className="text-blue-400 mt-0.5">▹</span> Setting up your AI agent server</li>
              </ul>
            </div>
            {/* Small Business IT & Infrastructure */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Briefcase className="w-5 h-5 text-blue-400" />
                <h3 className="text-xl font-semibold text-white">Small Business IT (B2B)</h3>
              </div>
              <ul className="space-y-3 text-sm text-white/60">
                <li className="flex items-start gap-2"><span className="text-blue-400 mt-0.5">▹</span> NAS (Network Attached Storage) setup & config</li>
                <li className="flex items-start gap-2"><span className="text-blue-400 mt-0.5">▹</span> Office 365 / Google Workspace email migration</li>
                <li className="flex items-start gap-2"><span className="text-blue-400 mt-0.5">▹</span> Point of Sale (POS) system hardware setup</li>
                <li className="flex items-start gap-2"><span className="text-blue-400 mt-0.5">▹</span> Business server maintenance & deployment</li>
              </ul>
            </div>

            {/* Home IT Support */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Server className="w-5 h-5 text-blue-400" />
                <h3 className="text-xl font-semibold text-white">Home IT & Tutorials</h3>
              </div>
              <ul className="space-y-3 text-sm text-white/60">
                <li className="flex items-start gap-2"><span className="text-blue-400 mt-0.5">▹</span> Home network & Wi-Fi setup</li>
                <li className="flex items-start gap-2"><span className="text-blue-400 mt-0.5">▹</span> Printer installation</li>
                <li className="flex items-start gap-2"><span className="text-blue-400 mt-0.5">▹</span> Smart home support</li>
                <li className="flex items-start gap-2"><span className="text-blue-400 mt-0.5">▹</span> Email setup support</li>
                <li className="flex items-start gap-2"><span className="text-blue-400 mt-0.5">▹</span> Computer one-to-one tutorials</li>
              </ul>
            </div>

            {/* Apple / Mac Specific */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Apple className="w-5 h-5 text-blue-400" />
                <h3 className="text-xl font-semibold text-white">Apple Mac Repair</h3>
              </div>
              <ul className="space-y-3 text-sm text-white/60">
                <li className="flex items-start gap-2"><span className="text-blue-400 mt-0.5">▹</span> MacBook Pro screen repair</li>
                <li className="flex items-start gap-2"><span className="text-blue-400 mt-0.5">▹</span> iMac hard drive to SSD upgrade</li>
                <li className="flex items-start gap-2"><span className="text-blue-400 mt-0.5">▹</span> MacBook Air battery replacement</li>
                <li className="flex items-start gap-2"><span className="text-blue-400 mt-0.5">▹</span> Apple logic board liquid spill repair</li>
                <li className="flex items-start gap-2"><span className="text-blue-400 mt-0.5">▹</span> macOS reinstallation & recovery</li>
              </ul>
            </div>

            {/* Software & OS Emergencies */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Activity className="w-5 h-5 text-blue-400" />
                <h3 className="text-xl font-semibold text-white">Software & OS Emergencies</h3>
              </div>
              <ul className="space-y-3 text-sm text-white/60">
                <li className="flex items-start gap-2"><span className="text-blue-400 mt-0.5">▹</span> Blue Screen of Death (BSOD) repair</li>
                <li className="flex items-start gap-2"><span className="text-blue-400 mt-0.5">▹</span> Boot loop & startup failure fixing</li>
                <li className="flex items-start gap-2"><span className="text-blue-400 mt-0.5">▹</span> Windows 11 upgrade & installation</li>
                <li className="flex items-start gap-2"><span className="text-blue-400 mt-0.5">▹</span> Forgotten Windows/Mac password reset</li>
                <li className="flex items-start gap-2"><span className="text-blue-400 mt-0.5">▹</span> Operating system corruption repair</li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </main>
  );
}
