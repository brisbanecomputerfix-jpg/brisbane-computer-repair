"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Wrench, Zap, Activity, Wifi, Battery, HardDrive, 
  ArrowLeft, ArrowRight, ShieldCheck, AlertTriangle, MonitorX, Phone
} from "lucide-react";
import Link from "next/link";
import Head from "next/head";

type Option = {
  id: string;
  label: string;
  icon?: React.ElementType;
  description?: string;
};

type DiagnosticStep = {
  id: string;
  title: string;
  subtitle?: string;
  options: Option[];
};

type Resolution = {
  title: string;
  diySteps: string[];
  warning?: string;
  professionalRecommendation: string;
};

const MAIN_CATEGORIES: DiagnosticStep = {
  id: "main",
  title: "What seems to be the main issue?",
  subtitle: "Select the category that best describes your computer's problem.",
  options: [
    { id: "power", label: "Won't Turn On / Power Issues", icon: Zap, description: "Dead, no lights, or turns on then immediately off." },
    { id: "performance", label: "Running Very Slow", icon: Activity, description: "Taking forever to boot, freezing, or lagging." },
    { id: "crashing", label: "Blue Screen / Crashing", icon: MonitorX, description: "Random restarts, frozen screen, or blue screen of death." },
    { id: "network", label: "Internet / Wi-Fi Issues", icon: Wifi, description: "Can't connect to Wi-Fi, dropping out, or very slow." },
    { id: "battery", label: "Battery Draining Fast", icon: Battery, description: "Laptop dies quickly when unplugged." },
    { id: "noise", label: "Making Strange Noises", icon: HardDrive, description: "Grinding, clicking, or loud fan noises." },
  ]
};

const SUB_QUESTIONS: Record<string, DiagnosticStep> = {
  power: {
    id: "power_sub",
    title: "Tell us a bit more about the power issue:",
    options: [
      { id: "power_dead", label: "Completely dead, absolutely no lights or sounds." },
      { id: "power_lights", label: "Lights turn on, fans spin, but the screen is black." },
      { id: "power_loop", label: "Turns on for a second, then shuts off immediately (looping)." }
    ]
  },
  performance: {
    id: "perf_sub",
    title: "When is it running slow?",
    options: [
      { id: "perf_boot", label: "It takes 5+ minutes just to start up." },
      { id: "perf_apps", label: "Opening basic apps (like Chrome or Word) is painfully slow." },
      { id: "perf_games", label: "Only slow when playing games or editing video." }
    ]
  },
  crashing: {
    id: "crash_sub",
    title: "When does the crashing occur?",
    options: [
      { id: "crash_random", label: "Completely randomly while doing normal things." },
      { id: "crash_boot", label: "It crashes before Windows even loads." },
      { id: "crash_heavy", label: "Only when doing intensive tasks (gaming, 3D rendering)." }
    ]
  },
  network: {
    id: "net_sub",
    title: "Describe the internet issue:",
    options: [
      { id: "net_none", label: "I can't see any Wi-Fi networks at all." },
      { id: "net_drop", label: "It connects, but randomly disconnects frequently." },
      { id: "net_slow", label: "Connected, but the speed is incredibly slow." }
    ]
  },
  battery: {
    id: "batt_sub",
    title: "How fast is it draining?",
    options: [
      { id: "batt_instant", label: "Dies the second I unplug the charger." },
      { id: "batt_fast", label: "Lasts less than an hour on a full charge." },
      { id: "batt_swollen", label: "The trackpad is popping out or the laptop chassis looks swollen." }
    ]
  },
  noise: {
    id: "noise_sub",
    title: "What kind of noise is it?",
    options: [
      { id: "noise_click", label: "A repetitive clicking or grinding noise." },
      { id: "noise_fan", label: "The fan sounds like a jet engine all the time." },
      { id: "noise_beep", label: "Loud beeping sounds when I try to turn it on." }
    ]
  }
};

const RESOLUTIONS: Record<string, Resolution> = {
  power_dead: {
    title: "Complete Power Failure",
    diySteps: [
      "1. Check the obvious: Ensure the power outlet works (plug a lamp in to test it).",
      "2. Desktop: Check the physical switch on the back of the Power Supply (PSU). Ensure it's flipped to 'I' (On).",
      "3. Laptop: Perform a 'Power Drain' or 'Hard Reset'. Unplug the charger, remove the battery (if possible), and hold the power button down for 60 seconds. Plug it back in and try again."
    ],
    professionalRecommendation: "If the power drain doesn't work, you likely have a dead motherboard or power supply. We can diagnose exactly which component failed and replace it."
  },
  power_lights: {
    title: "Power But No Display",
    diySteps: [
      "1. Desktop: Ensure your monitor is plugged into the Graphics Card (GPU), not the motherboard.",
      "2. Laptop: Shine a flashlight at the screen. If you can faintly see your desktop, the screen backlight has failed.",
      "3. Reseat your RAM: Unplug the PC, open it up, remove the RAM sticks, and click them firmly back into place."
    ],
    professionalRecommendation: "RAM issues or dead GPUs are common causes here. If reseating the RAM doesn't work, bring it in for a component-level diagnostic."
  },
  power_loop: {
    title: "Boot Looping (Turning On & Off)",
    diySteps: [
      "1. Unplug all USB devices (printers, webcams, external drives) and try turning it on.",
      "2. If it's a desktop, reseat the RAM (take it out and put it back in).",
      "3. Clear the CMOS: Unplug the PC, remove the coin-sized battery on the motherboard for 5 minutes, put it back, and boot."
    ],
    professionalRecommendation: "Boot loops often indicate a short circuit, failing power supply, or corrupted BIOS. We have diagnostic tools to isolate the exact short."
  },
  perf_boot: {
    title: "Extremely Slow Startup",
    diySteps: [
      "1. Open Task Manager (Ctrl+Shift+Esc), go to the 'Startup' tab, and disable everything you don't need.",
      "2. Check your drive: If your computer still has an old mechanical Hard Drive (HDD), this is the main bottleneck.",
      "3. Run a malware scan using Windows Defender or Malwarebytes."
    ],
    professionalRecommendation: "The #1 fix for this is upgrading to a Solid State Drive (SSD). We can clone your existing system to an SSD so you don't lose anything, speeding up your PC by 10x."
  },
  perf_apps: {
    title: "Apps Slow & Freezing",
    diySteps: [
      "1. Check RAM usage: Open Task Manager. If your Memory is consistently at 90%+, you need more RAM.",
      "2. Clear browser cache and disable heavy browser extensions.",
      "3. Ensure Windows is fully updated and restart your PC."
    ],
    warning: "Be careful downloading 'PC Speed Up' software online—most of them are disguised malware.",
    professionalRecommendation: "We can perform a digital deep clean, remove bloatware, and upgrade your RAM to handle modern applications smoothly."
  },
  perf_games: {
    title: "Slow Performance Under Heavy Load",
    diySteps: [
      "1. Update your Graphics Card (GPU) drivers via NVIDIA GeForce Experience or AMD Adrenalin.",
      "2. Check temperatures: Download a tool like HWMonitor. If your CPU or GPU is hitting 90°C+, it is 'thermal throttling' (slowing down to prevent melting).",
      "3. Blow out dust from your fans using compressed air."
    ],
    professionalRecommendation: "If compressed air doesn't fix the temperatures, the thermal paste has likely dried out. We can professionally disassemble it, repaste the CPU/GPU, and restore peak performance."
  },
  crash_random: {
    title: "Random Crashing / Blue Screens",
    diySteps: [
      "1. Run Windows Memory Diagnostic to check for failing RAM.",
      "2. Open Command Prompt as Administrator and type 'sfc /scannow' to repair corrupted Windows files.",
      "3. Ensure all your drivers are up to date via your manufacturer's website."
    ],
    professionalRecommendation: "Random BSODs are notoriously difficult to track down. They require reading memory dump files. We can analyze these logs and isolate the faulty hardware or driver."
  },
  crash_boot: {
    title: "Crashing Before Windows Loads",
    diySteps: [
      "1. Boot into Safe Mode: Interrupt the boot process 3 times to trigger Automatic Repair, then select Safe Mode.",
      "2. If Safe Mode works, uninstall the last program or driver you installed.",
      "3. Use System Restore to roll back your PC to a previous date when it was working."
    ],
    professionalRecommendation: "If Windows is entirely corrupted and won't repair itself, we can extract your data safely and perform a clean installation of the operating system."
  },
  crash_heavy: {
    title: "Crashing During Games / Rendering",
    diySteps: [
      "1. This is almost always related to Power or Heat.",
      "2. Clean your computer out thoroughly with compressed air.",
      "3. If you built the PC yourself, ensure your Power Supply unit (PSU) has enough wattage to support your graphics card under load."
    ],
    professionalRecommendation: "We can stress-test individual components to find out if your GPU is dying, your PSU is failing, or if it just needs a professional thermal repaste."
  },
  net_none: {
    title: "No Wi-Fi Networks Visible",
    diySteps: [
      "1. Laptop users: Look for a physical Wi-Fi switch on the side of your laptop or an 'F' key (like F2 or F12) with a plane/antenna icon and press it.",
      "2. Go to Device Manager, find Network Adapters, right-click your Wi-Fi card, and hit 'Enable' or 'Update Driver'.",
      "3. Perform a 'Network Reset' in Windows Settings."
    ],
    professionalRecommendation: "Wi-Fi cards are physical chips that can die. If software fixes fail, we can replace the internal Wi-Fi card or provide a high-speed USB alternative."
  },
  net_drop: {
    title: "Wi-Fi Keeps Disconnecting",
    diySteps: [
      "1. Restart your home router (unplug it for 30 seconds, plug it back in).",
      "2. Update your router's firmware.",
      "3. Forget the network on your PC and reconnect to it."
    ],
    professionalRecommendation: "If other devices in your house work fine and only this PC drops out, the internal antenna cables might be damaged or the card is failing. We can repair this."
  },
  net_slow: {
    title: "Connected but Extremely Slow",
    diySteps: [
      "1. Move closer to your router. A 5GHz connection is fast but has very short range.",
      "2. Check if a background program (like Steam or Windows Update) is downloading large files.",
      "3. Change your DNS server to 8.8.8.8 (Google) or 1.1.1.1 (Cloudflare)."
    ],
    professionalRecommendation: "If your hardware is outdated, it might not support modern fast Wi-Fi standards (Wi-Fi 6). We can upgrade your network adapter to match your router's capabilities."
  },
  batt_instant: {
    title: "Dies Immediately When Unplugged",
    diySteps: [
      "1. Your battery has reached the end of its chemical lifespan and holds 0% charge.",
      "2. You can generate a battery report in Windows: Open Command Prompt and type 'powercfg /batteryreport' to confirm its dead.",
      "3. Keep it plugged in to use it as a desktop replacement."
    ],
    professionalRecommendation: "The battery must be physically replaced. We stock and install high-quality replacement batteries for MacBooks and all major laptop brands."
  },
  batt_fast: {
    title: "Battery Draining Very Fast",
    diySteps: [
      "1. Turn down screen brightness and turn on 'Battery Saver' mode.",
      "2. Check Task Manager to see if a heavy application is running in the background.",
      "3. Disable startup apps you don't need."
    ],
    professionalRecommendation: "Batteries naturally degrade over 2-4 years. We can test your battery health and replace it if it has degraded past the point of usefulness."
  },
  batt_swollen: {
    title: "Swollen Chassis / Trackpad Popping Out",
    warning: "FIRE HAZARD: Do not puncture, bend, or put pressure on the laptop. Unplug it from the wall immediately.",
    diySteps: [
      "1. Turn the laptop off completely.",
      "2. Do not attempt to charge it anymore.",
      "3. Do not attempt to poke or flatten the swelling."
    ],
    professionalRecommendation: "This is a swollen lithium-ion battery and it is highly dangerous. Bring it to us immediately. We know how to safely extract and dispose of swollen batteries before they combust, and we will install a safe replacement."
  },
  noise_click: {
    title: "Clicking or Grinding Noise",
    warning: "CRITICAL: If you hear a rhythmic clicking or grinding, turn off the computer IMMEDIATELY.",
    diySteps: [
      "1. This is the 'Click of Death'—the mechanical read/write head of your hard drive is crashing into the data platters.",
      "2. Do NOT run data recovery software. Do NOT try to reboot repeatedly.",
      "3. The more it runs, the more it physically destroys your data."
    ],
    professionalRecommendation: "We offer professional Data Recovery services. Bring it in immediately and we will attempt to clone the drive in a safe environment before total failure occurs."
  },
  noise_fan: {
    title: "Extremely Loud Fans",
    diySteps: [
      "1. Ensure the laptop is on a hard, flat surface (not a bed or blanket) so vents aren't blocked.",
      "2. Use compressed air to blow out the exhaust vents.",
      "3. Check Task Manager to see if an app is maxing out your CPU at 100%."
    ],
    professionalRecommendation: "If cleaning the vents doesn't help, the thermal paste has dried out or the fan bearings are failing. We can disassemble the unit, replace the fans, and apply fresh thermal paste."
  },
  noise_beep: {
    title: "Beeping Sounds on Startup",
    diySteps: [
      "1. This is a 'Beep Code' from your motherboard indicating a hardware failure.",
      "2. Count the pattern (e.g., 1 long beep, 2 short beeps).",
      "3. Look up your motherboard brand and the beep code on your phone to identify the exact failing part."
    ],
    professionalRecommendation: "Usually, beep codes point to RAM or Graphics Card seating issues. If reseating doesn't fix it, we can decode the error and replace the faulty component."
  }
};

export default function TroubleshootPage() {
  const [history, setHistory] = useState<string[]>([]);
  const [currentStep, setCurrentStep] = useState<DiagnosticStep>(MAIN_CATEGORIES);
  const [resolution, setResolution] = useState<Resolution | null>(null);

  const handleSelect = (optionId: string) => {
    if (currentStep.id === "main") {
      setHistory(["main"]);
      setCurrentStep(SUB_QUESTIONS[optionId]);
    } else {
      // Sub question selected, show resolution
      setHistory([...history, currentStep.id]);
      setResolution(RESOLUTIONS[optionId]);
    }
  };

  const handleBack = () => {
    if (resolution) {
      setResolution(null);
      const lastStepId = history[history.length - 1];
      if (lastStepId === "main") {
        setCurrentStep(MAIN_CATEGORIES);
      } else {
        const found = Object.values(SUB_QUESTIONS).find(sq => sq.id === lastStepId);
        if (found) setCurrentStep(found);
        else setCurrentStep(MAIN_CATEGORIES);
      }
      setHistory(history.slice(0, -1));
      return;
    }

    if (history.length > 0) {
      const lastStepId = history[history.length - 1];
      if (lastStepId === "main") {
        setCurrentStep(MAIN_CATEGORIES);
      } else {
        const found = Object.values(SUB_QUESTIONS).find(sq => sq.id === lastStepId);
        if (found) setCurrentStep(found);
      }
      setHistory(history.slice(0, -1));
    }
  };

  const handleReset = () => {
    setHistory([]);
    setCurrentStep(MAIN_CATEGORIES);
    setResolution(null);
  };

  return (
    <>
      <Head>
        <title>Interactive PC Troubleshooter | Fix It Yourself | Brisbane</title>
        <meta name="description" content="Use our interactive PC and laptop troubleshooting guide. Diagnose your computer problem and find easy DIY fixes, or book our fixed-fee repair service." />
      </Head>
      <main className="flex-1 w-full px-4 sm:px-8 pt-12 pb-32">
        <div className="max-w-4xl mx-auto">
          
          <div className="text-center mb-12">
            <div className="glass-pill inline-flex items-center gap-2 px-3 py-1 mb-6 text-xs font-mono text-blue-400 border-blue-400/30">
              <Wrench className="w-3 h-3" /> INTERACTIVE DIAGNOSTIC
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-white mb-4">
              How to Fix Your Own PC
            </h1>
            <p className="text-white/60 text-lg max-w-2xl mx-auto leading-relaxed">
              Before you book an appointment, try our interactive troubleshooting guide. You might be able to fix the problem yourself in 5 minutes.
            </p>
          </div>

          <div className="glass-panel rounded-3xl p-6 md:p-10 relative overflow-hidden min-h-[500px] flex flex-col">
            <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -z-10" />

            {/* Navigation Bar */}
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/10">
              {(history.length > 0 || resolution) ? (
                <button 
                  onClick={handleBack}
                  className="flex items-center gap-2 text-white/60 hover:text-white transition-colors text-sm"
                >
                  <ArrowLeft className="w-4 h-4" /> Back
                </button>
              ) : (
                <div className="text-white/40 text-sm font-mono">Step 1 of 3</div>
              )}
              
              {(history.length > 0 || resolution) && (
                <button 
                  onClick={handleReset}
                  className="text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium"
                >
                  Start Over
                </button>
              )}
            </div>

            <AnimatePresence mode="wait">
              {!resolution ? (
                <motion.div
                  key={currentStep.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="flex-1"
                >
                  <h2 className="text-2xl md:text-3xl font-semibold text-white mb-2">{currentStep.title}</h2>
                  {currentStep.subtitle && <p className="text-white/60 mb-8">{currentStep.subtitle}</p>}
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                    {currentStep.options.map((option) => (
                      <button
                        key={option.id}
                        onClick={() => handleSelect(option.id)}
                        className="group flex items-start gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-blue-500/50 transition-all text-left"
                      >
                        {option.icon && (
                          <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center flex-shrink-0 text-blue-400 group-hover:scale-110 transition-transform">
                            <option.icon className="w-5 h-5" />
                          </div>
                        )}
                        <div className="flex-1">
                          <h3 className="text-white font-medium group-hover:text-blue-300 transition-colors">{option.label}</h3>
                          {option.description && <p className="text-white/50 text-sm mt-1">{option.description}</p>}
                        </div>
                        <ArrowRight className="w-5 h-5 text-white/20 group-hover:text-blue-400 group-hover:translate-x-1 transition-all flex-shrink-0 mt-1" />
                      </button>
                    ))}
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="resolution"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex-1"
                >
                  <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 text-xs font-mono text-green-400 bg-green-400/10 rounded-full border border-green-400/30">
                    <ShieldCheck className="w-4 h-4" /> DIAGNOSIS COMPLETE
                  </div>
                  
                  <h2 className="text-3xl font-bold text-white mb-6">{resolution.title}</h2>

                  {resolution.warning && (
                    <div className="mb-8 p-4 rounded-xl bg-red-500/10 border border-red-500/30 flex items-start gap-3">
                      <AlertTriangle className="w-6 h-6 text-red-400 flex-shrink-0" />
                      <p className="text-red-200 font-medium">{resolution.warning}</p>
                    </div>
                  )}

                  <div className="mb-10">
                    <h3 className="text-xl font-semibold text-white mb-4 border-b border-white/10 pb-2">Things You Can Try (DIY)</h3>
                    <ul className="space-y-4">
                      {resolution.diySteps.map((step, i) => (
                        <li key={i} className="text-white/70 flex items-start gap-3">
                          <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-xs text-white/50 flex-shrink-0 mt-0.5">
                            {i + 1}
                          </div>
                          <span className="leading-relaxed">{step.replace(/^\d+\.\s/, "")}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-900/40 to-blue-900/10 border border-blue-500/30 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 blur-3xl rounded-full" />
                    <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                      <Wrench className="w-5 h-5 text-blue-400" /> Need Professional Help?
                    </h3>
                    <p className="text-white/70 text-sm leading-relaxed mb-6">
                      {resolution.professionalRecommendation}
                    </p>
                    
                    <p className="text-white/50 text-sm mb-6">
                      If DIY sounds like too much hassle, or you don't feel comfortable risking it, we are happy to assist for the best result. Fixed fee of $150-$170.
                    </p>

                    <div className="flex flex-wrap gap-4">
                      <Link href="/contact" className="px-6 py-3 rounded-xl bg-blue-500 text-white font-medium hover:bg-blue-600 transition-colors">
                        Book an Appointment
                      </Link>
                      <a href="tel:0468991300" className="px-6 py-3 rounded-xl bg-white/5 text-white font-medium hover:bg-white/10 transition-colors border border-white/10 flex items-center gap-2">
                        <Phone className="w-4 h-4" /> 0468 991 300
                      </a>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </main>
    </>
  );
}
