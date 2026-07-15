import { Star } from "lucide-react"

export default function SocialProof() {
  const recentRepairs = [
    { loc: "Indooroopilly", task: "MacBook Screen Replacement", model: "MacBook Pro M2" },
    { loc: "Hamilton", task: "Data Recovery", model: "External SSD" },
    { loc: "New Farm", task: "Custom PC Diagnostics", model: "Gaming Desktop" },
    { loc: "St Lucia", task: "Malware Removal", model: "Windows 11 Laptop" }
  ]

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4">
        
        {/* Google Reviews */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 mb-4">
            <img src="/google-logo.svg" alt="Google" className="h-8" />
            <div className="flex text-yellow-500">
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
            </div>
          </div>
          <h2 className="text-3xl font-black text-gray-900 dark:text-white">Trusted by Locals</h2>
          <a href="https://g.page/computer-geek" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 font-medium hover:underline mt-2 inline-block">
            Read our 5-star Google Reviews
          </a>
        </div>

        {/* Recent Repairs Feed */}
        <div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 text-center">Recent Repairs Near You</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {recentRepairs.map((repair, i) => (
              <div key={i} className="bg-white dark:bg-gray-900 p-5 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800">
                <div className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-2">{repair.loc}</div>
                <h4 className="font-bold text-gray-900 dark:text-white mb-1">{repair.task}</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">{repair.model}</p>
                <div className="mt-4 bg-gray-100 dark:bg-gray-800 h-32 rounded-lg flex items-center justify-center text-xs text-gray-400">
                  [Image Placeholder]
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
