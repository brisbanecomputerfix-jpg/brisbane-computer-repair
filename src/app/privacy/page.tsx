"use client";

import { motion } from "framer-motion";

export default function PrivacyPolicy() {
  return (
    <main className="flex-1 w-full px-8 pt-12 pb-32 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-panel rounded-3xl p-10 relative overflow-hidden"
      >
        <div className="glass-pill inline-flex px-3 py-1 mb-6 text-xs font-mono text-blue-400 border-blue-400/30">
          DOC: PRIVACY_POLICY
        </div>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-white mb-8">
          Privacy Policy
        </h1>

        <div className="space-y-8 text-white/70 leading-relaxed text-sm md:text-base">
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">1. Data Confidentiality</h2>
            <p>
              At Computer Repair 1, we prioritize your security and data confidentiality. Our threat neutralization services and hardware repairs are performed under strict privacy protocols. We do not browse, copy, or retain any personal data stored on your drives unless explicitly required for a requested data recovery or cloning operation.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">2. Information Collection</h2>
            <p>
              We collect only the essential information necessary to perform our services: your name, contact phone number, email address, and physical address (if an on-site visit is requested). This information is exclusively used for communicating repair updates (e.g., photo messages of hardware faults) and invoicing.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">3. Data Security & Secure Erasure</h2>
            <p>
              If a client requests a complete system wipe or hardware disposal, we utilize certified secure erase protocols (Rootkit Purge / DoD standards) to ensure data is permanently destroyed and unrecoverable before the hardware leaves our premises.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">4. Third-Party Sharing</h2>
            <p>
              We do not sell, trade, or otherwise transfer your personally identifiable information or hardware data to outside parties. 
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">5. Contacting Us</h2>
            <p>
              If there are any questions regarding this privacy policy or how your device's data will be handled during repair, you may contact us using the information in our Comms panel. 
            </p>
            <ul className="mt-4 space-y-1 font-mono text-xs">
              <li>Phone: 0468 991 300</li>
              <li>Email: fix@computerrepair1.com</li>
              <li>Location: Brisbane, QLD</li>
            </ul>
          </section>
        </div>
      </motion.div>
    </main>
  );
}
