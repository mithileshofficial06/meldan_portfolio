"use client";

import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="py-12 border-t border-slate-900 bg-slate-950/80 backdrop-blur-sm relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 relative z-10">
        
        {/* Left column */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <p className="text-sm font-semibold text-white tracking-wider uppercase mb-1">
            Meldan Roy
          </p>
          <p className="text-xs text-slate-500">
            3rd Year BE CSE Student @ Loyola ICAM (LICET)
          </p>
        </div>

        {/* Center/Right column */}
        <div className="flex items-center gap-6 text-xs text-slate-500 text-center">
          <p>© {new Date().getFullYear()} Meldan Roy. All rights reserved.</p>
        </div>

        {/* Scroll To Top button */}
        <div>
          <button
            onClick={scrollToTop}
            className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-primary/40 transition-all duration-300 group cursor-pointer"
            aria-label="Scroll to top"
          >
            <ArrowUp size={16} className="group-hover:-translate-y-0.5 transition-transform duration-300" />
          </button>
        </div>

      </div>
    </footer>
  );
}
