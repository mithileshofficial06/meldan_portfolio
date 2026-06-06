"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Simple section tracking
      const scrollPosition = window.scrollY + 200;
      for (const item of navItems) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.id);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "py-4 bg-background/75 backdrop-blur-md border-b border-slate-900"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <button
          onClick={() => scrollTo("home")}
          className="group flex items-center gap-2 font-display text-xl font-bold tracking-wider cursor-pointer"
        >
          <span className="text-primary group-hover:text-accent transition-colors duration-300">
            &lt;
          </span>
          <span className="text-white">Meldan.R</span>
          <span className="text-primary group-hover:text-accent transition-colors duration-300">
            /&gt;
          </span>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 bg-slate-900/40 p-1.5 rounded-full border border-slate-800/60 backdrop-blur-sm">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`relative px-5 py-2 text-sm font-medium rounded-full cursor-pointer transition-colors duration-300 ${
                activeSection === item.id ? "text-white" : "text-slate-400 hover:text-slate-200"
              }`}
            >
              {activeSection === item.id && (
                <motion.span
                  layoutId="activeNav"
                  className="absolute inset-0 bg-primary/20 border border-primary/30 rounded-full"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              {item.label}
            </button>
          ))}
        </nav>

        {/* Action Button (Resume short link) */}
        <div className="hidden md:block">
          <button
            onClick={() => scrollTo("contact")}
            className="px-5 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-primary/40 rounded-full transition-all duration-300 glow-primary/10 cursor-pointer"
          >
            Hire Me
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-slate-400 hover:text-white transition-colors cursor-pointer"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden border-b border-slate-900 bg-background"
          >
            <div className="px-6 py-8 flex flex-col gap-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`py-3 text-left text-lg font-medium border-b border-slate-900/60 cursor-pointer transition-colors ${
                    activeSection === item.id ? "text-primary font-semibold" : "text-slate-400"
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => scrollTo("contact")}
                className="mt-4 w-full py-3 text-center text-sm font-semibold text-white bg-primary hover:bg-primary-dark rounded-xl transition-colors cursor-pointer"
              >
                Hire Me
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
