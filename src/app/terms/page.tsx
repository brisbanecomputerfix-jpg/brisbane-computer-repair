"use client";

import { motion } from "framer-motion";

export default function TermsOfService() {
  return (
    <main className="flex-1 w-full px-8 pt-12 pb-32 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-panel rounded-3xl p-10 relative overflow-hidden"
      >
        <div className="glass-pill inline-flex px-3 py-1 mb-6 text-xs font-mono text-blue-400 border-blue-400/30">
          DOC: TERMS_OF_SERVICE
        </div>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-white mb-8">
          Terms and Conditions
        </h1>

        <div className="space-y-8 text-white/70 leading-relaxed text-sm md:text-base">
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">1. Transparency & Conditional No Fix, No Fee Policy</h2>
            <p>
              We are transparent with our service fees and keep you informed at each step. You will know exactly how much you are going to spend before the actual repair happens. 
              We offer a "No Fix, No Fee" policy on standard repairs—if we can't fix your standard software or basic hardware issue, you don't pay. However, complex repairs (e.g., severe liquid damage, advanced logic board microsoldering, or invasive data recovery) may require an upfront, non-refundable diagnostic fee due to the intensive labor required just to identify the fault. All successful repairs come with a 30-day guarantee. 
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">2. Fixed Pricing & Diagnostics</h2>
            <p>
              We provide upfront costs for approval prior to initiating physical repairs. Most standard repairs have a fixed labour fee of $150-$170. We do not engage in pushing unnecessary sales.
              Basic diagnostics are free of charge. However, advanced teardowns (such as assessing liquid spill damage or dead motherboards) may incur a diagnostic fee, which will be communicated clearly beforehand. 
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">3. Parts Procurement</h2>
            <p>
              Any replacement part required can be purchased by the client from the cheapest retail shop (such as UMART) and brought to our technicians. Alternatively, we can source the parts at transparent market rates.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">4. Data Recovery & Liability</h2>
            <p>
              While we include basic data recovery attempts with all repairs and have a high success rate recovering files from corrupted sectors, failing drives, and liquid-damaged modules (Data Recovery specific costs range from $150-$250), we do not accept liability for pre-existing catastrophic data loss. Clients are encouraged to back up their data prior to submission when possible. If we cannot recover your files on a dedicated data recovery job, there is no charge.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">5. Warranties & Returns</h2>
            <p>
              All repairs come with a standard 30-day guarantee. If you experience a recurring problem related to the initial repair within this period, simply return the device and we will repair it free of charge. This warranty applies only to the specific components serviced or replaced.
            </p>
          </section>
        </div>
      </motion.div>
    </main>
  );
}
