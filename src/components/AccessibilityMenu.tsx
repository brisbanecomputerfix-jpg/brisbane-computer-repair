"use client";

import { Accessibility, ZoomIn, ZoomOut, Contrast, Sun, Moon, Link as LinkIcon, Type } from "lucide-react";
import { useState, useEffect } from "react";

export default function AccessibilityMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [textSize, setTextSize] = useState(100);
  const [contrast, setContrast] = useState(1);
  const [isDayMode, setIsDayMode] = useState(false);
  const [highlightLinks, setHighlightLinks] = useState(false);
  const [readableFont, setReadableFont] = useState(false);

  // Apply Text Size
  useEffect(() => {
    document.documentElement.style.fontSize = `${textSize}%`;
  }, [textSize]);

  // Apply Contrast
  useEffect(() => {
    if (contrast > 1) {
      document.documentElement.style.filter = `contrast(${contrast}) saturate(1.2)`;
    } else {
      document.documentElement.style.filter = "none";
    }
  }, [contrast]);

  // Apply Day/Night Mode (Tailwind dark class toggle)
  useEffect(() => {
    if (isDayMode) {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  }, [isDayMode]);

  // Apply Link Highlight
  useEffect(() => {
    if (highlightLinks) {
      document.documentElement.classList.add("a11y-highlight-links");
    } else {
      document.documentElement.classList.remove("a11y-highlight-links");
    }
  }, [highlightLinks]);

  // Apply Readable Font
  useEffect(() => {
    if (readableFont) {
      document.documentElement.classList.add("a11y-readable-font");
    } else {
      document.documentElement.classList.remove("a11y-readable-font");
    }
  }, [readableFont]);

  return (
    <div className="relative">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-500/10 border border-blue-500/30 hover:bg-blue-500/20 transition-colors group"
        aria-label="Accessibility Options"
      >
        <Accessibility className="w-4 h-4 text-blue-400 group-hover:text-blue-300" />
      </button>

      {isOpen && (
        <div className="absolute top-12 right-0 w-72 bg-black/95 border border-white/20 rounded-2xl shadow-2xl p-4 flex flex-col gap-4 z-50">
          <div className="flex items-center justify-between border-b border-white/10 pb-2">
            <span className="text-xs font-mono text-white/50 uppercase tracking-wider">Accessibility Controls</span>
            <button onClick={() => setIsOpen(false)} className="text-white/40 hover:text-white text-xs">Close</button>
          </div>

          {/* Theme Toggle */}
          <div className="space-y-2">
            <span className="text-[10px] text-white/40 font-mono uppercase">Display Mode</span>
            <div className="grid grid-cols-2 gap-2">
              <button 
                onClick={() => setIsDayMode(false)}
                className={`flex items-center justify-center gap-2 py-2 rounded-lg text-xs transition-colors ${!isDayMode ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30' : 'bg-white/5 text-white/60 hover:bg-white/10'}`}
              >
                <Moon className="w-3.5 h-3.5" /> Night
              </button>
              <button 
                onClick={() => setIsDayMode(true)}
                className={`flex items-center justify-center gap-2 py-2 rounded-lg text-xs transition-colors ${isDayMode ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30' : 'bg-white/5 text-white/60 hover:bg-white/10'}`}
              >
                <Sun className="w-3.5 h-3.5" /> Day
              </button>
            </div>
          </div>

          {/* Text Size */}
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-[10px] text-white/40 font-mono uppercase">Text Size</span>
              <span className="text-[10px] text-blue-400 font-mono">{textSize}%</span>
            </div>
            <div className="flex gap-2">
              <button 
                onClick={() => setTextSize(Math.max(100, textSize - 10))}
                className="flex-1 flex items-center justify-center py-2 bg-white/5 hover:bg-white/10 rounded-lg text-white/70 transition-colors"
                disabled={textSize <= 100}
              >
                <ZoomOut className="w-4 h-4" />
              </button>
              <button 
                onClick={() => setTextSize(Math.min(150, textSize + 10))}
                className="flex-1 flex items-center justify-center py-2 bg-white/5 hover:bg-white/10 rounded-lg text-white/70 transition-colors"
                disabled={textSize >= 150}
              >
                <ZoomIn className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Contrast */}
          <div className="space-y-2">
            <span className="text-[10px] text-white/40 font-mono uppercase">Contrast Level</span>
            <div className="grid grid-cols-3 gap-2">
              {[1, 1.25, 1.5].map((level, idx) => (
                <button 
                  key={level}
                  onClick={() => setContrast(level)}
                  className={`py-1.5 rounded-lg text-xs font-mono transition-colors ${contrast === level ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30' : 'bg-white/5 text-white/60 hover:bg-white/10'}`}
                >
                  {idx === 0 ? 'Normal' : idx === 1 ? 'High' : 'Max'}
                </button>
              ))}
            </div>
          </div>

          {/* Additional Features */}
          <div className="space-y-2 pt-2 border-t border-white/10">
            <button 
              onClick={() => setHighlightLinks(!highlightLinks)}
              className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm transition-colors ${highlightLinks ? 'bg-blue-500/20 text-blue-300' : 'bg-transparent text-white/70 hover:bg-white/5'}`}
            >
              <div className="flex items-center gap-3">
                <LinkIcon className="w-4 h-4" />
                <span>Highlight Links</span>
              </div>
              <div className={`w-8 h-4 rounded-full transition-colors relative ${highlightLinks ? 'bg-blue-500' : 'bg-white/20'}`}>
                <div className={`absolute top-0.5 w-3 h-3 rounded-full bg-white transition-all ${highlightLinks ? 'left-4.5' : 'left-0.5'}`} />
              </div>
            </button>
            
            <button 
              onClick={() => setReadableFont(!readableFont)}
              className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm transition-colors ${readableFont ? 'bg-blue-500/20 text-blue-300' : 'bg-transparent text-white/70 hover:bg-white/5'}`}
            >
              <div className="flex items-center gap-3">
                <Type className="w-4 h-4" />
                <span>Readable Font</span>
              </div>
              <div className={`w-8 h-4 rounded-full transition-colors relative ${readableFont ? 'bg-blue-500' : 'bg-white/20'}`}>
                <div className={`absolute top-0.5 w-3 h-3 rounded-full bg-white transition-all ${readableFont ? 'left-4.5' : 'left-0.5'}`} />
              </div>
            </button>
          </div>

        </div>
      )}
    </div>
  );
}
