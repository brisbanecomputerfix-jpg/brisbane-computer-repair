"use client";
import { useState } from "react";
import { Info, CheckCircle2, AlertCircle } from "lucide-react";

export default function HomeContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      phone: formData.get("phone"),
      email: formData.get("email"),
      model: formData.get("model"),
      issue: formData.get("issue"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <div className="glass-panel rounded-3xl p-8 lg:p-10 w-full relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -z-10" />
      
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-2">Get an Instant Quote</h2>
        <p className="text-white/50 mb-8">Fill out the details below. If you provide an accurate model number, we can often give you an exact price via email within hours.</p>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          {status === "success" && (
            <div className="bg-green-500/10 border border-green-500/30 text-green-400 p-4 rounded-xl flex items-center gap-3 text-sm">
              <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
              Your quote request has been received. Our technicians will contact you shortly!
            </div>
          )}
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-xs font-semibold text-white/70 uppercase tracking-wide">Your Name</label>
              <input required name="name" type="text" disabled={status === "loading" || status === "success"} className="w-full h-12 bg-black/40 border border-white/10 rounded-xl px-4 text-white focus:outline-none focus:border-blue-500/50 transition-colors" placeholder="e.g. Arthur Morgan" />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-semibold text-white/70 uppercase tracking-wide">Phone Number</label>
              <input required name="phone" type="tel" disabled={status === "loading" || status === "success"} className="w-full h-12 bg-black/40 border border-white/10 rounded-xl px-4 text-white focus:outline-none focus:border-blue-500/50 transition-colors" placeholder="0400 000 000" />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-xs font-semibold text-white/70 uppercase tracking-wide">Email Address</label>
              <input required name="email" type="email" disabled={status === "loading" || status === "success"} className="w-full h-12 bg-black/40 border border-white/10 rounded-xl px-4 text-white focus:outline-none focus:border-blue-500/50 transition-colors" placeholder="arthur@example.com" />
            </div>
            <div className="space-y-2 relative group">
              <label className="text-xs font-semibold text-white/70 uppercase tracking-wide flex items-center gap-2">
                Model / Serial Number 
                <Info className="w-4 h-4 text-blue-400 cursor-help" />
              </label>
              <input type="text" name="model" disabled={status === "loading" || status === "success"} className="w-full h-12 bg-black/40 border border-white/10 rounded-xl px-4 text-white focus:outline-none focus:border-blue-500/50 transition-colors" placeholder="e.g. A2338 or HP 15-dw0000" />
              
              {/* Tooltip */}
              <div className="absolute bottom-full left-0 mb-2 w-64 bg-black border border-white/20 p-3 rounded-xl text-xs text-white/80 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10 shadow-2xl">
                <strong className="text-white block mb-1">How to find this:</strong>
                MacBooks: Flip over, look for "A1234" printed on bottom case.<br/>
                Windows: Check sticker underneath laptop or under battery.
              </div>
            </div>
          </div>
          
          <div className="space-y-2">
            <label className="text-xs font-semibold text-white/70 uppercase tracking-wide">Describe the Issue</label>
            <textarea required name="issue" disabled={status === "loading" || status === "success"} className="w-full h-32 bg-black/40 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-blue-500/50 resize-none transition-colors" placeholder="My laptop won't turn on after I spilled tea on it..."></textarea>
          </div>
          
          <button type="submit" disabled={status === "loading" || status === "success"} className="w-full h-14 bg-blue-600 hover:bg-blue-500 disabled:bg-blue-600/50 disabled:cursor-not-allowed text-white rounded-xl font-bold tracking-wide transition-colors flex items-center justify-center gap-2 text-lg">
            {status === "loading" ? "Sending Request..." : status === "success" ? "Sent Successfully" : "Send Quote Request"}
          </button>
        </form>
      </div>
    </div>
  );
}
