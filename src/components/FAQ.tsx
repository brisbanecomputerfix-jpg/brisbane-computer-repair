"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "Do you have a No Fix, No Fee policy?",
    a: "Yes, we offer a Conditional No Fix, No Fee policy. For standard issues, if we can't fix it, you don't pay. However, complex logic board repairs or severe liquid damage diagnostics may incur a small diagnostic fee to cover the intensive labor required. We are always 100% transparent about this upfront before proceeding."
  },
  {
    q: "How long does it take to order replacement parts?",
    a: "If we don't have the exact part in our Brisbane workshop, domestic parts arrive within 2-3 days. For highly specialized or older logic boards, international supply takes roughly 8-10 days. We'll always give you a precise ETA when quoting."
  },
  {
    q: "Are my files and data safe?",
    a: "Absolutely. We are strictly compliant with Australian data privacy standards. We never browse your personal files. For hard drive replacements, your old drive is either returned to you untouched or securely wiped using military-grade erasure protocols."
  },
  {
    q: "How do I find my computer's model number?",
    a: "For MacBooks, flip it over and look for small text at the top starting with 'A' (e.g., A2338). For Dell/HP/Lenovo laptops, look for a sticker on the bottom case, under the battery, or search for a 'Service Tag' or 'SN' number."
  },
  {
    q: "Can I just walk in for a repair?",
    a: "We operate Strictly By Appointment Only. Due to the high volume of complex repairs and secure data recoveries we handle, our lab is not configured for unannounced walk-ins. Please call us or request a free quote online to secure an exact drop-off time."
  },
  {
    q: "Do you repair phones, tablets, or Microsoft Surface devices?",
    a: "No, we strictly specialize in Mac and PC computer repairs. We do not offer repairs for mobile phones, iPads/tablets, or hardware part replacements for Microsoft Surface devices."
  },
  {
    q: "Do you use original replacement parts?",
    a: "Yes. We source and use original, genuine OEM replacement parts as much as possible and whenever accessible to ensure the highest quality and longevity of your repair."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="w-full max-w-3xl mx-auto space-y-4">
      {faqs.map((faq, index) => (
        <div 
          key={index}
          className="glass-panel rounded-2xl border border-white/10 overflow-hidden transition-all duration-300"
        >
          <button 
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
          >
            <span className="font-medium text-white/90 pr-4">{faq.q}</span>
            <ChevronDown className={`w-5 h-5 text-blue-400 transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""}`} />
          </button>
          <AnimatePresence>
            {openIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <div className="px-6 pb-5 text-white/60 leading-relaxed text-sm">
                  {faq.a}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
      <div className="pt-4 flex justify-center">
        <a href="/faq" className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-blue-600/20 border border-white/10 hover:border-blue-500/50 rounded-xl text-white/80 hover:text-white transition-all text-sm font-medium">
          View All FAQs <ChevronDown className="w-4 h-4 -rotate-90" />
        </a>
      </div>
    </div>
  );
}
