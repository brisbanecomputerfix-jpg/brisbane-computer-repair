import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import Sidebar from "@/components/Sidebar";
import TopBar from "@/components/TopBar";
import StickyMobileBar from "@/components/StickyMobileBar";
import FloatingActions from "@/components/FloatingActions";
import Image from "next/image";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  metadataBase: new URL('https://www.brisbanecomputerfix.com'),
  title: "Brisbane Computer Fix - Tech Support & Repair",
  description: "Next-gen computer repair & data recovery in Brisbane. Mac, PC, Logic Board repairs.",
  keywords: [
    "Brisbane computer repair", "laptop repair Brisbane", "mac repair", "data recovery",
    "电脑维修", "数据恢复", "布里斯班电脑维修", // Mandarin for Baidu
    "컴퓨터 수리", "데이터 복구", // Korean
    "reparación de computadoras", "recuperación de datos" // Spanish
  ],
  alternates: {
    canonical: 'https://www.brisbanecomputerfix.com',
    languages: {
      'en-AU': 'https://www.brisbanecomputerfix.com',
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-AU" className="dark">
      <body className={`${inter.variable} ${jetbrains.variable} font-sans bg-black text-white antialiased min-h-screen relative flex`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ComputerStore",
              "name": "Computer Repair 1",
              "image": "https://www.computerrepair1.com/logo.jpg",
              "description": "Professional PC, Mac, Logic Board Repair and Data Recovery in Brisbane. Fast, same-day service with transparent pricing and conditional No Fix No Fee policies.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Computer Repair 1",
                "addressLocality": "Brisbane",
                "addressRegion": "QLD",
                "postalCode": "4000",
                "addressCountry": "AU"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "-27.4705",
                "longitude": "153.0260"
              },
              "areaServed": {
                "@type": "City",
                "name": "Brisbane"
              },
              "telephone": "0468991300",
              "priceRange": "$150-$250",
              "priceCurrency": "AUD",
              "openingHours": "Mo,Tu,We,Th,Fr 09:00-18:00",
              "url": "https://www.computerrepair1.com",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "128"
              }
            })
          }}
        />
        
        {/* Abstract X-Ray Background (Optimized for LCP) */}
        <div className="fixed inset-0 z-[-1] transition-all duration-500">
          <Image 
            src="/bg-xray.jpg" 
            alt="X-ray abstract background" 
            fill 
            priority
            quality={75}
            className="object-cover opacity-40 mix-blend-screen"
          />
        </div>
        {/* Vignette overlay */}
        <div className="fixed inset-0 z-[-1] bg-radial-vignette opacity-80 pointer-events-none transition-colors duration-500" />
        
        {/* SaaS Sidebar */}
        <Sidebar />

        {/* Main Application Area (offset by sidebar width) */}
        <div className="flex-1 md:ml-64 flex flex-col min-h-screen">
          <TopBar />
          {children}
        </div>
        
        {/* Floating Call-to-Actions (Desktop & Mobile) */}
        <FloatingActions />

        {/* Mobile Conversions (Bottom Bar) */}
        <StickyMobileBar />

      </body>
    </html>
  );
}
