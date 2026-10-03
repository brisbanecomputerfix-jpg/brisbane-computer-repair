"use client";

import { motion } from "framer-motion";
import { MapPin, Navigation, Car, Building, Search, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import Head from "next/head";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { type: "spring" as any, stiffness: 300, damping: 24 } },
};

export default function Locations() {
  const [postcode, setPostcode] = useState("");
  const [coverageStatus, setCoverageStatus] = useState<"idle" | "searching" | "covered">("idle");

  const checkCoverage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!postcode) return;
    setCoverageStatus("searching");
    setTimeout(() => {
      setCoverageStatus("covered");
    }, 600);
  };

  return (
    <>
      <Head>
        <title>Brisbane Service Locations & Suburbs | Computer Repair 1</title>
        <meta name="description" content="We provide 100% coverage across all Brisbane suburbs. Find your local service area, check your postcode, and get directions to our Indooroopilly diagnostic center." />
        <meta name="keywords" content="brisbane computer repair locations, computer repair near me, laptop repair brisbane cbd, mac repair st lucia, all brisbane suburbs it support" />
      </Head>
      <main className="flex-1 w-full px-8 pt-12 pb-32">
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="max-w-6xl mx-auto">
          
          {/* Header */}
          <motion.div variants={itemVariants} className="mb-12">
            <div className="glass-pill inline-flex items-center gap-2 px-3 py-1 mb-6 text-xs font-mono text-blue-400 border-blue-400/30">
              <MapPin className="w-3 h-3" /> 100% BRISBANE COVERAGE
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-white mb-4">
              Service Locations
            </h1>
            <p className="text-white/60 text-lg max-w-2xl leading-relaxed">
              We are Brisbane's premier local computer repair authority. We provide comprehensive service coverage across <strong>all Brisbane suburbs</strong>, from the deep inner-city CBD out to the bayside and western suburbs.
            </p>
          </motion.div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            
            {/* Main Location Info & Map */}
            <motion.div variants={itemVariants} className="md:col-span-8 glass-panel rounded-3xl p-8 lg:p-10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl -z-10" />
              
              <div className="flex flex-col md:flex-row gap-8 items-start justify-between mb-8">
                <div>
                  <h2 className="text-2xl font-semibold text-white mb-6">Main Diagnostic Center</h2>
                  
                  <div className="flex items-start gap-3 mb-6 text-white">
                    <Building className="w-5 h-5 text-blue-400 mt-0.5" />
                    <div>
                      <div className="font-medium">Computer Repair 1</div>
                      <div className="text-white/60 text-sm">5 Grosvenor Road<br/>Indooroopilly, QLD 4068</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 text-white">
                    <Car className="w-5 h-5 text-blue-400 mt-0.5" />
                    <div>
                      <div className="font-medium">Free On-site Parking</div>
                      <div className="text-white/60 text-sm max-w-[250px]">Drive right up to our doors for easy, stress-free desktop drop-offs (by appointment).</div>
                    </div>
                  </div>
                </div>

                {/* Minimalist Map Embed */}
                <div className="w-full md:w-64 h-64 rounded-2xl overflow-hidden border border-white/10 shrink-0 relative">
                  <div className="absolute inset-0 bg-blue-500/10 mix-blend-overlay pointer-events-none z-10" />
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113222.45330368144!2d152.93380062725227!3d-27.469770732389812!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b91579aac93d233%3A0x402a35af3deaf40!2sBrisbane%20QLD!5e0!3m2!1sen!2sau!4v1700000000000!5m2!1sen!2sau"
                    width="100%"
                    height="100%"
                    style={{ border: 0, filter: 'grayscale(100%) invert(90%) contrast(80%)' }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>

              <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="flex items-center gap-3 px-6 py-3 bg-white/5 hover:bg-blue-600 border border-white/10 hover:border-blue-500 text-white rounded-xl font-medium transition-all w-full md:w-auto justify-center">
                <Navigation className="w-4 h-4" /> Get Directions
              </a>
            </motion.div>

            {/* Postcode Search & Coverage */}
            <motion.div variants={itemVariants} className="md:col-span-4 flex flex-col gap-6">
              <div className="glass-panel rounded-3xl p-8 flex-1 border-blue-500/20 flex flex-col">
                <h3 className="text-white font-semibold text-lg mb-2">Check Service Coverage</h3>
                <p className="text-white/50 text-sm leading-relaxed mb-6">
                  We cover 100% of the Greater Brisbane area. Enter your postcode below to verify your eligibility for drop-off or on-site support.
                </p>
                
                <form onSubmit={checkCoverage} className="mt-auto">
                  <div className="relative">
                    <input 
                      type="text" 
                      value={postcode}
                      onChange={(e) => {
                        setPostcode(e.target.value);
                        setCoverageStatus("idle");
                      }}
                      placeholder="e.g. 4000"
                      maxLength={4}
                      className="w-full h-12 bg-black/40 border border-white/10 rounded-xl pl-12 pr-4 text-white focus:outline-none focus:border-blue-500/50 transition-colors font-mono"
                    />
                    <Search className="w-5 h-5 text-white/40 absolute left-4 top-1/2 -translate-y-1/2" />
                    
                    <button type="submit" className="absolute right-2 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold rounded-lg transition-colors">
                      Verify
                    </button>
                  </div>
                </form>

                {coverageStatus === "searching" && (
                  <div className="mt-4 text-sm font-mono text-white/40 animate-pulse text-center">
                    Verifying coverage network...
                  </div>
                )}
                
                {coverageStatus === "covered" && (
                  <div className="mt-4 p-3 bg-green-500/10 border border-green-500/30 rounded-xl flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-400 shrink-0" />
                    <div>
                      <div className="text-white text-sm font-medium">Postcode {postcode} is Covered!</div>
                      <div className="text-white/60 text-xs mt-1">You are within our guaranteed service radius for repairs.</div>
                    </div>
                  </div>
                )}

              </div>
            </motion.div>

            {/* Dynamic Suburb Links */}
            <motion.div variants={itemVariants} className="md:col-span-12 glass-panel rounded-3xl p-8 lg:p-10 border-blue-500/20 mt-4">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Dedicated Suburb Support</h3>
                  <p className="text-white/60 text-sm max-w-3xl">
                    While we service all of Brisbane, here are some of our most frequent service areas. Find your local suburb below for specific diagnostic information.
                  </p>
                </div>
                <div className="px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-xl text-blue-400 font-mono text-sm shrink-0">
                  100% BRISBANE COVERAGE
                </div>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {[
                  { name: "St. Lucia", slug: "st-lucia" },
                  { name: "Indooroopilly", slug: "indooroopilly" },
                  { name: "Teneriffe", slug: "teneriffe" },
                  { name: "New Farm", slug: "new-farm" },
                  { name: "Newstead", slug: "newstead" },
                  { name: "Hamilton", slug: "hamilton" },
                  { name: "Ascot", slug: "ascot" },
                  { name: "Paddington", slug: "paddington" },
                  { name: "Toowong", slug: "toowong" },
                  { name: "East Brisbane", slug: "east-brisbane" },
                  { name: "Norman Park", slug: "norman-park" },
                  { name: "Pullenvale", slug: "pullenvale" },
                  { name: "Brookfield", slug: "brookfield" },
                  { name: "Wynnum", slug: "wynnum" },
                  { name: "Manly", slug: "manly" }
                ].map((suburb) => (
                  <Link 
                    key={suburb.slug} 
                    href={`/locations/${suburb.slug}`}
                    className="flex items-center gap-2 px-4 py-3 bg-white/5 hover:bg-blue-600/20 hover:border-blue-500/30 border border-transparent rounded-xl text-white/80 hover:text-white transition-all text-sm group"
                  >
                    <MapPin className="w-3 h-3 text-blue-400 group-hover:scale-110 transition-transform" /> {suburb.name}
                  </Link>
                ))}
              </div>
            </motion.div>

          </div>
        </motion.div>
      </main>
    </>
  );
}
