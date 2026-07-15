"use client"

import Link from "next/link"
import { Phone, MessageCircle, MapPin, Globe, Moon, Sun, Menu } from "lucide-react"
import { useTheme } from "next-themes"
import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

export default function Header() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <header className="sticky top-0 z-50 w-full bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 shadow-sm transition-colors duration-300">
      {/* Top Bar */}
      <div className="bg-gray-100 dark:bg-gray-950 py-2 text-sm text-gray-700 dark:text-gray-300">
        <div className="container mx-auto px-4 flex flex-wrap justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <span className="font-semibold text-gray-900 dark:text-white">Active Now</span>
            </div>
            <div className="hidden sm:flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <a href="tel:0468991300" className="hover:text-blue-600 dark:hover:text-blue-400 font-bold">0468 991 300</a>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <a href="#" className="hidden sm:flex items-center space-x-1 text-green-600 dark:text-green-400 hover:opacity-80">
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>
            <div className="flex items-center space-x-2">
              <Globe className="w-4 h-4" />
              <select className="bg-transparent border-none text-sm outline-none cursor-pointer">
                <option value="en">EN</option>
                <option value="zh">ZH</option>
                <option value="ko">KO</option>
                <option value="es">ES</option>
              </select>
            </div>
            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800"
                aria-label="Toggle Dark Mode"
              >
                {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <div className="text-2xl font-black tracking-tighter text-gray-900 dark:text-white">
              Brisbane<span className="text-blue-600 dark:text-blue-500">Computer</span>Fix
            </div>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-6 text-gray-700 dark:text-gray-300 font-medium">
            <Link href="/about" className="hover:text-blue-600 dark:hover:text-blue-400">About Us</Link>
            <Link href="/services" className="hover:text-blue-600 dark:hover:text-blue-400">Services</Link>
            <Link href="/repairs" className="hover:text-blue-600 dark:hover:text-blue-400">Repairs</Link>
            <Link href="/locations" className="hover:text-blue-600 dark:hover:text-blue-400">Locations</Link>
            <Link href="/pricing" className="hover:text-blue-600 dark:hover:text-blue-400">Pricing</Link>
            <Link href="/students" className="hover:text-blue-600 dark:hover:text-blue-400">Student Discounts</Link>
            <Link href="/faq" className="hover:text-blue-600 dark:hover:text-blue-400">FAQ</Link>
            <Link href="/blog" className="hover:text-blue-600 dark:hover:text-blue-400">Blog</Link>
          </nav>

          <div className="md:hidden">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="mt-4 flex flex-col space-y-3 md:hidden text-gray-700 dark:text-gray-300 font-medium pb-4">
            <Link href="/about" className="hover:text-blue-600 dark:hover:text-blue-400">About Us</Link>
            <Link href="/services" className="hover:text-blue-600 dark:hover:text-blue-400">Services</Link>
            <Link href="/repairs" className="hover:text-blue-600 dark:hover:text-blue-400">Repairs</Link>
            <Link href="/locations" className="hover:text-blue-600 dark:hover:text-blue-400">Locations</Link>
            <Link href="/pricing" className="hover:text-blue-600 dark:hover:text-blue-400">Pricing</Link>
            <Link href="/students" className="hover:text-blue-600 dark:hover:text-blue-400">Student Discounts</Link>
            <Link href="/faq" className="hover:text-blue-600 dark:hover:text-blue-400">FAQ</Link>
            <Link href="/blog" className="hover:text-blue-600 dark:hover:text-blue-400">Blog</Link>
          </nav>
        )}
      </div>
    </header>
  )
}
