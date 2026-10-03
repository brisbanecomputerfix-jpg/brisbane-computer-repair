import { Metadata } from "next";
import { notFound } from "next/navigation";
import { suburbLocations } from "../data";
import { motion } from "framer-motion";
import { MapPin, Navigation, Cpu, Clock, ShieldCheck, PenTool } from "lucide-react";
import Link from "next/link";
import HomeContactForm from "@/components/HomeContactForm";
import FAQ from "@/components/FAQ";
import TestimonialCarousel from "@/components/TestimonialCarousel";

export function generateStaticParams() {
  return suburbLocations.map((loc) => ({
    suburb: loc.slug,
  }));
}

export function generateMetadata({ params }: { params: { suburb: string } }): Metadata {
  const loc = suburbLocations.find((l) => l.slug === params.suburb);
  
  if (!loc) {
    return { title: "Location Not Found" };
  }

  // Comply with Google Doorway Policy: 
  // Since we have highly unique content per suburb, we set a self-referencing canonical URL.
  // If the content was duplicated, this would point to the main /locations page.
  return {
    title: loc.title,
    description: loc.description,
    keywords: loc.keywords,
    alternates: {
      canonical: `https://www.brisbanecomputerfix.com/locations/${loc.slug}`
    }
  };
}

export default function SuburbLocationPage({ params }: { params: { suburb: string } }) {
  const loc = suburbLocations.find((l) => l.slug === params.suburb);
  
  if (!loc) {
    notFound();
  }

  return (
    <main className="flex-1 w-full px-8 pt-12 pb-32">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="mb-12">
          <div className="glass-pill inline-flex items-center gap-2 px-3 py-1 mb-6 text-xs font-mono text-blue-400 border-blue-400/30">
            <MapPin className="w-3 h-3" /> {loc.name.toUpperCase()} REPAIRS
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-white mb-4">
            Computer Repairs in {loc.name}
          </h1>
          <p className="text-white/60 text-lg max-w-2xl">
            {loc.description}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Main Content Area */}
          <div className="lg:col-span-8 flex flex-col gap-8">
            <div className="glass-panel rounded-3xl p-8 md:p-10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -z-10" />
              <h2 className="text-2xl font-semibold text-white mb-6">Why {loc.name} Locals Choose Us</h2>
              
              <div className="prose prose-invert prose-blue max-w-none text-white/70 leading-relaxed mb-8">
                <p>{loc.content}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 pt-8 border-t border-white/10">
                <div className="flex gap-3">
                  <Cpu className="w-5 h-5 text-blue-400 shrink-0" />
                  <div>
                    <h4 className="text-white font-medium text-sm">Micro-Soldering</h4>
                    <p className="text-white/50 text-xs">Component-level logic board fixes.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Clock className="w-5 h-5 text-amber-400 shrink-0" />
                  <div>
                    <h4 className="text-white font-medium text-sm">Fast Turnaround</h4>
                    <p className="text-white/50 text-xs">Priority diagnostics available.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
                  <div>
                    <h4 className="text-white font-medium text-sm">No Fix, No Fee</h4>
                    <p className="text-white/50 text-xs">On standard hardware repairs.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <PenTool className="w-5 h-5 text-purple-400 shrink-0" />
                  <div>
                    <h4 className="text-white font-medium text-sm">Premium Parts</h4>
                    <p className="text-white/50 text-xs">OEM quality screens & batteries.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-panel rounded-3xl p-8 md:p-10">
               <h3 className="text-xl font-semibold text-white mb-6">How to get from {loc.name} to our lab</h3>
               <p className="text-white/60 text-sm mb-6">
                 We are centrally located and provide a highly specialized service that retail kiosks simply cannot match. If you are coming from {loc.name}, simply drop your device off at our main terminal. We have free on-site parking so you can carry in heavy desktops with zero hassle.
               </p>
               <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 text-white rounded-xl font-medium transition-colors border border-white/10">
                 <Navigation className="w-4 h-4" /> View Map & Directions
               </Link>
            </div>
          </div>

          {/* Sidebar / Contact Area */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <div className="glass-panel rounded-3xl p-6 md:p-8">
              <h3 className="text-lg font-semibold text-white mb-4">Request a Quote</h3>
              <p className="text-white/50 text-sm mb-6">
                Tell us what's wrong with your device, and our technicians will get back to you with a transparent repair estimate.
              </p>
              <HomeContactForm />
            </div>
            
            <div className="glass-panel rounded-3xl p-6 md:p-8 border-blue-500/20 bg-blue-900/10">
               <h3 className="text-white/80 font-medium mb-3">Service Guarantees</h3>
               <ul className="text-white/50 text-sm space-y-2">
                 <li>• 100% Data Privacy</li>
                 <li>• Upfront Pricing (No Hidden Fees)</li>
                 <li>• 90-Day Warranty on Parts</li>
               </ul>
            </div>
          </div>

        </div>
        
        {/* Additional Rich Content to satisfy Google Quality Guidelines */}
        <div className="mt-20">
           <div className="mb-12 text-center">
             <h2 className="text-3xl font-bold text-white mb-4">Trusted in {loc.name}</h2>
             <p className="text-white/60">See what our local clients have to say about our service.</p>
           </div>
           <TestimonialCarousel />
        </div>

        <div className="mt-20">
           <FAQ />
        </div>
      </div>
    </main>
  );
}
