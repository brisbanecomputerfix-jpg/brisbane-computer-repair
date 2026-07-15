import Link from "next/link"
import { Star, ShieldCheck, Zap } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white dark:bg-gray-900 pt-16 pb-24 lg:pt-24 lg:pb-32">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-y-0 right-0 w-1/2 bg-gray-50 dark:bg-gray-800/30 rounded-l-full opacity-50 blur-3xl transform translate-x-1/3"></div>
      </div>
      
      <div className="container relative z-10 mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Trust Badge */}
          <div className="inline-flex items-center space-x-2 bg-gray-100 dark:bg-gray-800 rounded-full px-4 py-2 mb-8 shadow-sm">
            <div className="flex space-x-1 text-yellow-500">
              <Star className="w-4 h-4 fill-current" />
              <Star className="w-4 h-4 fill-current" />
              <Star className="w-4 h-4 fill-current" />
              <Star className="w-4 h-4 fill-current" />
              <Star className="w-4 h-4 fill-current" />
            </div>
            <span className="text-sm font-bold text-gray-800 dark:text-gray-200">4.9 Google Rating</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-gray-900 dark:text-white mb-6 leading-tight">
            Honest, Quick Turnaround Repairs. <br className="hidden md:block"/>
            <span className="text-blue-600 dark:text-blue-500">No Bill Shock. Fixed Fees.</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto font-medium">
            Brisbane's trusted tech experts. We come to you, fix it fast, and keep your data safe.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
            <Link 
              href="#quote" 
              className="w-full sm:w-auto px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-lg shadow-lg shadow-orange-500/30 transition-all transform hover:scale-105 text-lg"
            >
              Get a Free Quote
            </Link>
            <Link 
              href="tel:0468991300" 
              className="w-full sm:w-auto px-8 py-4 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-900 dark:text-white font-bold rounded-lg shadow-md border border-gray-200 dark:border-gray-700 transition-all text-lg"
            >
              Call 0468 991 300
            </Link>
          </div>

          {/* Key Value Props */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto text-left">
            <div className="flex items-center space-x-3 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
              <Zap className="w-8 h-8 text-yellow-500 shrink-0" />
              <div>
                <h3 className="font-bold text-gray-900 dark:text-white">Same Day Service</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Fast, reliable repairs</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
              <ShieldCheck className="w-8 h-8 text-green-500 shrink-0" />
              <div>
                <h3 className="font-bold text-gray-900 dark:text-white">Transparent Pricing</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Fixed fees, no surprises</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 sm:col-span-2 md:col-span-1">
              <Star className="w-8 h-8 text-blue-500 shrink-0" />
              <div>
                <h3 className="font-bold text-gray-900 dark:text-white">Trusted by Locals</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Over 500+ 5-star reviews</p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  )
}
