import Link from "next/link"
import { ShieldCheck, Mail, Phone, Clock, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-950 pt-16 pb-8 border-t border-gray-200 dark:border-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Column 1: About & Trust */}
          <div>
            <div className="text-2xl font-black tracking-tighter text-gray-900 dark:text-white mb-4">
              Brisbane<span className="text-blue-600 dark:text-blue-500">Computer</span>Fix
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Expert, honest, and fast computer repairs across Brisbane. We fix it right the first time with transparent fixed-fee pricing.
            </p>
            <div className="flex items-center space-x-2 text-green-600 dark:text-green-500 font-semibold bg-green-50 dark:bg-green-900/20 px-3 py-2 rounded-md inline-flex">
              <ShieldCheck className="w-5 h-5" />
              <span>Privacy Guaranteed</span>
            </div>
          </div>

          {/* Column 2: Contact Info */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Contact Us</h3>
            <ul className="space-y-3 text-gray-600 dark:text-gray-400">
              <li className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0" />
                <a href="tel:0468991300" className="hover:text-blue-600 dark:hover:text-blue-400">0468 991 300</a>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0" />
                <a href="mailto:ike@brisbanecomputerfix.com" className="hover:text-blue-600 dark:hover:text-blue-400">ike@brisbanecomputerfix.com</a>
              </li>
              <li className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0" />
                <span>Mon-Sun: 8 AM to 9 PM<br/><span className="text-sm text-gray-500">(Available for emergencies)</span></span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0" />
                <span>Mobile Service Area<br/>Brisbane Wide</span>
              </li>
            </ul>
          </div>

          {/* Column 3: Quick Links & FAQ Snapshot */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Helpful Links</h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
              <li><Link href="/faq" className="hover:text-blue-600 dark:hover:text-blue-400">Frequently Asked Questions</Link></li>
              <li><Link href="/blog" className="hover:text-blue-600 dark:hover:text-blue-400">Tech Tips Blog</Link></li>
              <li><Link href="/privacy" className="hover:text-blue-600 dark:hover:text-blue-400">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-blue-600 dark:hover:text-blue-400">Terms of Service</Link></li>
              <li><Link href="/warranty" className="hover:text-blue-600 dark:hover:text-blue-400">Warranty and Refund Policy</Link></li>
            </ul>
          </div>

          {/* Column 4: Map */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Service Area</h3>
            <div className="bg-gray-200 dark:bg-gray-800 rounded-lg h-40 flex items-center justify-center overflow-hidden">
              {/* Placeholder for Google Maps Embed */}
              <span className="text-sm text-gray-500 dark:text-gray-400">Modern Brisbane Map Embed</span>
            </div>
          </div>
        </div>

        {/* Our Local Network (SEO Strategy) */}
        <div className="border-t border-gray-200 dark:border-gray-800 pt-8 pb-4">
          <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">Our Local Network</h4>
          <div className="flex flex-wrap gap-2 text-xs text-gray-500 dark:text-gray-500">
            <a href="https://computerfixindooroopilly.com.au" className="hover:text-blue-600">computerfixindooroopilly.com.au</a> • 
            <a href="https://computerrepairindooroopilly.com.au" className="hover:text-blue-600">computerrepairindooroopilly.com.au</a> • 
            <a href="https://computerrepairstlucia.com.au" className="hover:text-blue-600">computerrepairstlucia.com.au</a> • 
            <a href="https://computerrepairtaringa.com.au" className="hover:text-blue-600">computerrepairtaringa.com.au</a> • 
            <a href="https://computerrepairhamilton.com.au" className="hover:text-blue-600">computerrepairhamilton.com.au</a> • 
            <a href="https://computerrepaireastbrisbane.com.au" className="hover:text-blue-600">computerrepaireastbrisbane.com.au</a> • 
            <a href="https://computerrepairnewfarm.com.au" className="hover:text-blue-600">computerrepairnewfarm.com.au</a> • 
            <a href="https://computerrepairnewstead.com.au" className="hover:text-blue-600">computerrepairnewstead.com.au</a> • 
            <a href="https://computerrepair1.com" className="hover:text-blue-600">computerrepair1.com</a> • 
            <a href="https://macbooking.com" className="hover:text-blue-600">macbooking.com</a> • 
            <a href="https://computerrepairtoowong.com.au" className="hover:text-blue-600">computerrepairtoowong.com.au</a> • 
            <a href="https://brisbanecomputerfix.com.au" className="hover:text-blue-600">brisbanecomputerfix.com.au</a> • 
            <a href="https://brisbanecomputerrepair.com" className="hover:text-blue-600">brisbanecomputerrepair.com</a> • 
            <a href="https://digitalsecuritycheck.com.au" className="hover:text-blue-600">digitalsecuritycheck.com.au</a> • 
            <a href="https://digitalsecurityreport.com.au" className="hover:text-blue-600">digitalsecurityreport.com.au</a>
          </div>
        </div>
        
        <div className="text-center text-sm text-gray-500 dark:text-gray-500 mt-4">
          &copy; {new Date().getFullYear()} Brisbane Computer Fix. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
