"use client"

import { useState } from "react"
import { Search, MapPin, CheckCircle2 } from "lucide-react"

export default function ConversionFlow() {
  const [postcode, setPostcode] = useState("")
  const [coverage, setCoverage] = useState<{status: string, message: string} | null>(null)

  const handleCheck = (e: React.FormEvent) => {
    e.preventDefault()
    if (postcode.startsWith("4")) {
      setCoverage({ status: "success", message: "Great news! We cover your area with No Call Out Fees." })
    } else {
      setCoverage({ status: "warning", message: "Please call us to confirm if we can service your exact location." })
    }
  }

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-950 border-y border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4">
        
        {/* Banner */}
        <div className="bg-orange-500 text-white rounded-xl p-4 md:p-6 mb-12 text-center shadow-lg">
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-wider">No Call Out Fees</h2>
          <p className="font-medium mt-1">We bring the repair shop to you, anywhere in Brisbane.</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          
          {/* 4 Steps */}
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">4 Steps to Get a Free Quote</h2>
            <div className="space-y-6">
              {[
                { step: "1", title: "Tell Us the Problem", desc: "Use our form, call, or WhatsApp us." },
                { step: "2", title: "Get a Fixed Price Quote", desc: "No hidden fees. You know the cost upfront." },
                { step: "3", title: "We Come to You", desc: "Or you can drop it off. Same-day available." },
                { step: "4", title: "Device Fixed & Data Safe", desc: "Pay only when the job is done right." },
              ].map((item, i) => (
                <div key={i} className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center text-blue-600 dark:text-blue-400 font-bold shrink-0">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">{item.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Postcode Checker */}
          <div className="lg:w-1/2 w-full">
            <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-800">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Check Service Area Coverage</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">Enter your postcode to see if we cover your area in Brisbane.</p>
              
              <form onSubmit={handleCheck} className="flex gap-2 mb-4">
                <div className="relative flex-grow">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input 
                    type="text" 
                    placeholder="e.g. 4000" 
                    value={postcode}
                    onChange={(e) => setPostcode(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
                    required
                  />
                </div>
                <button type="submit" className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-colors flex items-center">
                  <Search className="w-4 h-4 sm:mr-2" />
                  <span className="hidden sm:inline">Check</span>
                </button>
              </form>

              {coverage && (
                <div className={`p-4 rounded-lg flex items-start space-x-3 ${coverage.status === "success" ? "bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-300" : "bg-yellow-50 dark:bg-yellow-900/20 text-yellow-800 dark:text-yellow-300"}`}>
                  {coverage.status === "success" && <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />}
                  <p className="font-medium">{coverage.message}</p>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
