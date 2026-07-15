import { Shield, MonitorSmartphone, Laptop, HardDrive, Wrench, FileText, HeartPulse } from "lucide-react"

export default function ServiceGrid() {
  const services = [
    {
      title: "Digital Security Check",
      desc: "Comprehensive malware removal and security audit to keep your data safe.",
      icon: <Shield className="w-10 h-10 text-blue-500" />
    },
    {
      title: "BER Insurance Claim Reports",
      desc: "Beyond Economical Repair reports for insurance claims.",
      icon: <FileText className="w-10 h-10 text-orange-500" />
    },
    {
      title: "Custom Gaming PC Repairs",
      desc: "Diagnostics, part replacement, and upgrades for custom rigs.",
      icon: <MonitorSmartphone className="w-10 h-10 text-purple-500" />
    },
    {
      title: "Laptop Repairs",
      desc: "Screen replacement, keyboard fixing, and battery replacements.",
      icon: <Laptop className="w-10 h-10 text-gray-700 dark:text-gray-300" />
    },
    {
      title: "MacBook Repairs",
      desc: "Specialized Apple repairs, logic board issues, and liquid damage.",
      icon: <MonitorSmartphone className="w-10 h-10 text-gray-400" />
    },
    {
      title: "Data Recovery",
      desc: "Recover lost photos, documents, and files from failing drives.",
      icon: <HardDrive className="w-10 h-10 text-green-500" />
    },
    {
      title: "General Software & Hardware",
      desc: "Windows/macOS troubleshooting, SSD upgrades, and more.",
      icon: <Wrench className="w-10 h-10 text-yellow-600" />
    }
  ]

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-4">Our Core Services</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">Whatever your tech problem, we have a solution. Honest advice, zero jargon.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, i) => (
            <div key={i} className="group p-8 rounded-2xl bg-gray-50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800 border border-gray-100 dark:border-gray-800 hover:border-blue-200 dark:hover:border-blue-900 shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="mb-6 inline-block p-4 bg-white dark:bg-gray-900 rounded-xl shadow-sm group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>

        {/* Callouts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-red-50 dark:bg-red-900/10 border border-red-100 dark:border-red-900/30 p-6 md:p-8 rounded-2xl flex items-start space-x-4">
            <HeartPulse className="w-8 h-8 text-red-500 shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-bold text-red-700 dark:text-red-400 mb-2">Express Emergency Late Night Repairs</h3>
              <p className="text-red-600/80 dark:text-red-400/80">Business critical failure? We are available late night for emergency IT support.</p>
            </div>
          </div>
          
          <div className="bg-blue-50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-900/30 p-6 md:p-8 rounded-2xl flex items-start space-x-4">
            <Shield className="w-8 h-8 text-blue-500 shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-bold text-blue-700 dark:text-blue-400 mb-2">Express Frontline Support</h3>
              <p className="text-blue-600/80 dark:text-blue-400/80">Discounted priority services for Police, Nurses, and Paramedics. Thank you.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
