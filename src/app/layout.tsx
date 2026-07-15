import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Brisbane Computer Fix | Honest, Quick Turnaround Repairs",
  description: "Brisbane Computer Fix offers same-day, expert computer, laptop, and MacBook repairs. No call out fees. Fixed fees. Transparent pricing.",
  alternates: {
    canonical: "https://brisbanecomputerfix.com.au",
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Brisbane Computer Fix",
              "image": "https://brisbanecomputerfix.com.au/logo.png",
              "url": "https://brisbanecomputerfix.com.au",
              "telephone": "0468991300",
              "email": "ike@brisbanecomputerfix.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Mobile Service",
                "addressLocality": "Brisbane",
                "addressRegion": "QLD",
                "postalCode": "4000",
                "addressCountry": "AU"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": -27.4705,
                "longitude": 153.0260
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday"
                ],
                "opens": "08:00",
                "closes": "21:00"
              },
              "priceRange": "$$"
            })
          }}
        />
      </head>
      <body className={`${inter.className} min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex flex-col`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
