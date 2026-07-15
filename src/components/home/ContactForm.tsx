"use client"

import { useState } from "react"
import { Upload, Send } from "lucide-react"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    deviceType: "",
    modelNumber: "",
    issue: "",
    description: ""
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <section id="quote" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 max-w-4xl">
        
        <div className="text-center mb-12">
          <h2 className="text-3xl font-black text-gray-900 dark:text-white mb-4">Get a Free Technician Assessment</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Common repairs from fixed fee <strong className="text-gray-900 dark:text-white">$170 + parts</strong>. Transparent cost breakdown.
          </p>
        </div>

        <div className="bg-gray-50 dark:bg-gray-800/50 p-8 md:p-10 rounded-3xl border border-gray-200 dark:border-gray-800 shadow-sm">
          <form onSubmit={handleSubmit} className="space-y-6">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Full Name *</label>
                <input 
                  type="text" 
                  name="name" 
                  value={formData.name} 
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-white"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Mobile Number *</label>
                <input 
                  type="tel" 
                  name="mobile" 
                  value={formData.mobile} 
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-white"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Email Address</label>
              <input 
                type="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-white"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Device Type *</label>
                <select 
                  name="deviceType" 
                  value={formData.deviceType} 
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-white"
                  required
                >
                  <option value="">Select a device</option>
                  <option value="Windows Laptop">Windows Laptop</option>
                  <option value="MacBook">MacBook</option>
                  <option value="Custom PC / Desktop">Custom PC / Desktop</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Model Number (if known)</label>
                <input 
                  type="text" 
                  name="modelNumber" 
                  value={formData.modelNumber} 
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-white"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Primary Issue *</label>
              <select 
                name="issue" 
                value={formData.issue} 
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-white"
                required
              >
                <option value="">Select the main problem</option>
                <option value="Won't turn on">Won\'t turn on</option>
                <option value="Screen broken">Screen broken / display issue</option>
                <option value="Running slow / Freezing">Running slow / Freezing</option>
                <option value="Virus / Hacked">Virus / Malware / Hacked</option>
                <option value="Liquid damage">Liquid damage</option>
                <option value="Data recovery">Data recovery</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Problem Description *</label>
              <textarea 
                name="description" 
                value={formData.description} 
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-white"
                placeholder="Tell us what happened..."
                required
              ></textarea>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/10 p-4 rounded-lg border border-blue-100 dark:border-blue-800/30 flex items-start space-x-3">
              <Upload className="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
              <p className="text-sm text-blue-800 dark:text-blue-300">
                <strong>Have photos of the damage?</strong> You can attach photos via Email or WhatsApp Messenger after submitting this form.
              </p>
            </div>

            <button 
              type="submit" 
              className="w-full px-8 py-4 bg-gray-900 hover:bg-gray-800 dark:bg-white dark:hover:bg-gray-200 text-white dark:text-gray-900 font-bold rounded-lg transition-colors flex items-center justify-center text-lg"
            >
              <Send className="w-5 h-5 mr-2" />
              Request Assessment
            </button>
            <p className="text-center text-xs text-gray-500 dark:text-gray-400 mt-4">
              By submitting this form, you agree to our Privacy Policy. Your data is secure and will never be shared.
            </p>
          </form>
        </div>

      </div>
    </section>
  )
}
