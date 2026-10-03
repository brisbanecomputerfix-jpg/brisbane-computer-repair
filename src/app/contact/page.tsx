"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MessageSquare, Phone, Mail, Globe, CheckCircle2, AlertCircle } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { type: "spring" as any, stiffness: 300, damping: 24 } },
};

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", phone: "", email: "", issue: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus("success");
        setFormData({ name: "", phone: "", email: "", issue: "" });
      } else {
        setStatus("error");
        setErrorMessage(data.message || "Failed to transmit request.");
      }
    } catch (error) {
      setStatus("error");
      setErrorMessage("Network error. Please try calling us instead.");
    }
  };

  return (
    <main className="flex-1 w-full px-8 pt-12 pb-32">
      <motion.div variants={containerVariants} initial="hidden" animate="visible" className="max-w-6xl mx-auto">
        
        {/* Header */}
        <motion.div variants={itemVariants} className="mb-12">
          <div className="glass-pill inline-flex items-center gap-2 px-3 py-1 mb-6 text-xs font-mono text-blue-400 border-blue-400/30">
            <MessageSquare className="w-3 h-3" /> CONTACT US
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-white mb-4">
            Get a Free Quote
          </h1>
          <p className="text-white/60 text-lg max-w-2xl">
            Need a rapid diagnostic? Reach out. We provide immediate responses and exact quotes over the phone or email. No corporate hold times, just direct technical support.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Main Contact Form */}
          <motion.div variants={itemVariants} className="md:col-span-8 glass-panel rounded-3xl p-8 lg:p-10">
            <h2 className="text-2xl font-semibold text-white mb-6">Request Diagnostic Callback</h2>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              {status === "success" && (
                <div className="bg-green-500/10 border border-green-500/30 text-green-400 p-4 rounded-xl flex items-center gap-3 text-sm">
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                  Your request has been successfully transmitted. We will contact you shortly!
                </div>
              )}
              {status === "error" && (
                <div className="bg-red-500/10 border border-red-500/30 text-red-400 p-4 rounded-xl flex items-center gap-3 text-sm">
                  <AlertCircle className="w-5 h-5 flex-shrink-0" />
                  {errorMessage}
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs font-mono text-white/50 uppercase">Name / 姓名</label>
                  <input required type="text" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} disabled={status === "loading"} className="w-full h-12 bg-black/40 border border-white/10 rounded-xl px-4 text-white focus:outline-none focus:border-blue-500/50 disabled:opacity-50" placeholder="Arthur Morgan" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-mono text-white/50 uppercase">Phone / 电话</label>
                  <input required type="tel" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} disabled={status === "loading"} className="w-full h-12 bg-black/40 border border-white/10 rounded-xl px-4 text-white focus:outline-none focus:border-blue-500/50 disabled:opacity-50" placeholder="0400 000 000" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-mono text-white/50 uppercase">Email / 电子邮件</label>
                <input type="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} disabled={status === "loading"} className="w-full h-12 bg-black/40 border border-white/10 rounded-xl px-4 text-white focus:outline-none focus:border-blue-500/50 disabled:opacity-50" placeholder="john@example.com (Optional)" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-mono text-white/50 uppercase">Device & Issue / 设备及问题</label>
                <textarea required value={formData.issue} onChange={(e) => setFormData({...formData, issue: e.target.value})} disabled={status === "loading"} className="w-full h-32 bg-black/40 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-blue-500/50 resize-none disabled:opacity-50" placeholder="MacBook Pro liquid damage... 电脑进水..."></textarea>
              </div>
              <button type="submit" disabled={status === "loading"} className="w-full h-12 bg-blue-600 hover:bg-blue-500 disabled:bg-blue-600/50 disabled:cursor-not-allowed text-white rounded-xl font-medium transition-colors flex items-center justify-center gap-2">
                {status === "loading" ? "Sending..." : "Submit Request"}
              </button>
            </form>
          </motion.div>

          {/* Quick Contact & International */}
          <motion.div variants={itemVariants} className="md:col-span-4 flex flex-col gap-6">
            <div className="glass-panel rounded-3xl p-8 flex-1">
              <h3 className="text-white/80 font-medium mb-6">Direct Channels</h3>
              
              <div className="space-y-6">
                <a href="tel:0468991300" className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-full bg-blue-500/10 border border-blue-500/30 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                    <Phone className="w-4 h-4 text-blue-400" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-white/40 mb-1">CALL US</div>
                    <div className="text-white font-mono group-hover:text-blue-400 transition-colors">0468 991 300</div>
                  </div>
                </a>

                <a href="mailto:fix@computerrepair1.com" className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-full bg-blue-500/10 border border-blue-500/30 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                    <Mail className="w-4 h-4 text-blue-400" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-white/40 mb-1">EMAIL US</div>
                    <div className="text-white font-mono text-sm group-hover:text-blue-400 transition-colors">fix@computerrepair1.com</div>
                  </div>
                </a>
              </div>
            </div>

            <div className="glass-panel rounded-3xl p-6 border-amber-500/20">
              <div className="flex items-center gap-2 mb-3">
                <Globe className="w-4 h-4 text-amber-400" />
                <h3 className="text-white/80 font-medium text-sm">International Student Support</h3>
              </div>
              <p className="text-white/50 text-xs leading-relaxed">
                Welcome to Brisbane! We specialize in fast repairs for students. 
                <br/><br/>
                <strong className="text-white/80">电脑维修, 数据恢复 (Mandarin)</strong><br/>
                <strong className="text-white/80">컴퓨터 수리, 데이터 복구 (Korean)</strong><br/>
                <strong className="text-white/80">Reparación de Computadoras (Spanish)</strong>
              </p>
            </div>
          </motion.div>

        </div>
      </motion.div>
    </main>
  );
}
