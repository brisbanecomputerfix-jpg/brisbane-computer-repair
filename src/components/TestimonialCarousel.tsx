"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote, ArrowRight } from "lucide-react";
import Link from "next/link";

const testimonials = [
  {
    id: 1,
    name: "Lachlan O'Connor",
    role: "MacBook Pro Repair",
    content: "Absolutely saved my life. Apple told me it would cost $1,200 to replace the logic board after a coffee spill. These guys fixed the exact same board for a fraction of the price and had it back to me in 2 days. Honest and down to earth.",
    rating: 5,
  },
  {
    id: 2,
    name: "Chloe Williams",
    role: "Data Recovery",
    content: "My external hard drive stopped spinning with 4 years of university work on it. They recovered 100% of my files. Super professional, transparent pricing, and no hidden fees. Highly recommend to all students in Brisbane.",
    rating: 5,
  },
  {
    id: 3,
    name: "Hamish Taylor",
    role: "Custom PC Build",
    content: "Brought in my gaming rig because it was constantly overheating and crashing. They diagnosed a failing AIO pump, replaced it, and repasted my CPU. Runs 20 degrees cooler now. Really fast and affordable service.",
    rating: 5,
  }
];

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-scroll every 8 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <div className="relative w-full max-w-4xl mx-auto py-12 flex flex-col items-center">
      <div className="absolute top-0 left-12 text-blue-500/10 z-0">
        <Quote className="w-24 h-24" />
      </div>
      
      <div className="relative z-10 w-full glass-panel rounded-3xl p-8 md:p-12 border border-white/5 overflow-hidden mb-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col items-center text-center gap-6"
          >
            <div className="flex gap-1">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            
            <p className="text-xl md:text-2xl text-white/90 font-light leading-relaxed max-w-2xl">
              "{testimonials[currentIndex].content}"
            </p>
            
            <div>
              <div className="font-semibold text-white">{testimonials[currentIndex].name}</div>
              <div className="text-sm font-mono text-blue-400 mt-1">{testimonials[currentIndex].role}</div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Controls */}
        <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-4">
          <button onClick={prev} className="w-10 h-10 rounded-full flex items-center justify-center border border-white/10 hover:bg-white/5 text-white/50 transition-colors">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button onClick={next} className="w-10 h-10 rounded-full flex items-center justify-center border border-white/10 hover:bg-white/5 text-white/50 transition-colors">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      <Link href="/testimonials" className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-blue-600/20 border border-white/10 hover:border-blue-500/50 rounded-xl text-white/80 hover:text-white transition-all text-sm font-medium">
        Read 100+ More Reviews <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  );
}
