"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
  Variants,
} from "framer-motion";
import { FileDown, GraduationCap, Code, ArrowDown, Sparkles } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";

/* ═══════════════════════════════════════════════════════
   HERO SECTION — Cinematic Crimson Dynasty
   A dramatic, staggered-reveal hero with parallax,
   floating shapes, glowing orb, and typewriter tagline.
   ═══════════════════════════════════════════════════════ */

// ───────── Animation Variants ─────────

const navVariants: Variants = {
  hidden: { y: -30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const badgeVariants: Variants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { type: "spring", stiffness: 200, damping: 20, delay: 0.4 },
  },
};

const letterContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.05, delayChildren: 0.7 },
  },
};

const letterVariants: Variants = {
  hidden: { y: 80, opacity: 0, rotateX: -40 },
  visible: {
    y: 0,
    opacity: 1,
    rotateX: 0,
    transition: { type: "spring", stiffness: 120, damping: 12 },
  },
};

const taglineVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { delay: 1.6, duration: 0.01 }, // Starts typewriter
  },
};

const infoVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: { delay: 2.8 + i * 0.2, duration: 0.5, ease: "easeOut" },
  }),
};

const buttonContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { delay: 3.4, staggerChildren: 0.12 },
  },
};

const buttonVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100, damping: 15 },
  },
};

const orbVariants: Variants = {
  hidden: { scale: 0.5, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { type: "spring", stiffness: 60, damping: 18, delay: 0.8 },
  },
};

// ───────── Typewriter Hook ─────────

function useTypewriter(text: string, speed: number = 50, startDelay: number = 1700) {
  const [displayed, setDisplayed] = useState("");
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setStarted(true), startDelay);
    return () => clearTimeout(timeout);
  }, [startDelay]);

  useEffect(() => {
    if (!started) return;
    if (displayed.length >= text.length) return;
    const timer = setTimeout(() => {
      setDisplayed(text.slice(0, displayed.length + 1));
    }, speed);
    return () => clearTimeout(timer);
  }, [displayed, started, text, speed]);

  return { displayed, done: displayed.length >= text.length };
}

// ───────── Floating Shape Component ─────────

function FloatingShape({
  className,
  size,
  delay,
}: {
  className: string;
  size: number;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay, duration: 1 }}
      className={`absolute pointer-events-none ${className}`}
      style={{ width: size, height: size }}
    >
      <div
        className="w-full h-full border border-red-900/30 rotate-45"
        style={{ borderRadius: "4px" }}
      />
    </motion.div>
  );
}

// ═══════════════════════════════════════════════════════
//  MAIN COMPONENT
// ═══════════════════════════════════════════════════════

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const prefersReduced = useReducedMotion();

  // Parallax scroll transforms
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const nameY = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const orbY = useTransform(scrollYProgress, [0, 1], [0, -80]);

  // Typewriter for tagline
  const tagline = 'I am a Web Developer & CSE Student';
  const { displayed: typedText, done: typingDone } = useTypewriter(tagline, 45, 1700);

  // Navigation items
  const navItems = [
    { id: "home", label: "Home", active: true },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Conditional animation or instant
  const animate = prefersReduced ? "visible" : undefined;

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative min-h-screen flex flex-col overflow-hidden bg-hero-radial"
    >
      {/* ════════ BACKGROUND LAYERS ════════ */}

      {/* Dot grid pattern — parallax */}
      <motion.div
        style={{ y: prefersReduced ? 0 : bgY }}
        className="absolute inset-0 bg-dot-grid pointer-events-none"
      />

      {/* Radial glow: top-left warm splash */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-red-950/30 rounded-full blur-[120px] pointer-events-none -translate-x-1/3 -translate-y-1/4" />
      {/* Radial glow: bottom-right subtle */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-red-900/15 rounded-full blur-[100px] pointer-events-none translate-x-1/4 translate-y-1/4" />

      {/* Floating geometric shapes */}
      <FloatingShape className="top-[15%] left-[8%] animate-float-1" size={14} delay={1} />
      <FloatingShape className="top-[25%] right-[12%] animate-float-2" size={10} delay={1.5} />
      <FloatingShape className="bottom-[30%] left-[15%] animate-float-3" size={18} delay={2} />
      <FloatingShape className="top-[60%] right-[20%] animate-float-1" size={12} delay={2.5} />
      <FloatingShape className="top-[45%] left-[55%] animate-float-2" size={8} delay={1.2} />
      <FloatingShape className="bottom-[15%] right-[35%] animate-float-3" size={16} delay={3} />

      {/* ════════ NAVIGATION BAR ════════ */}
      <motion.header
        variants={navVariants}
        initial="hidden"
        animate="visible"
        className="relative z-30 w-full"
      >
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          {/* Logo */}
          <button
            onClick={() => scrollTo("home")}
            className="group flex items-center gap-1 font-sans text-lg font-bold tracking-wider cursor-pointer"
          >
            <span className="text-red-600 group-hover:text-accent transition-colors duration-300">
              &lt;
            </span>
            <span className="text-white">Meldan.R</span>
            <span className="text-red-600 group-hover:text-accent transition-colors duration-300">
              /&gt;
            </span>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`relative px-4 py-2 text-sm font-medium rounded-full cursor-pointer transition-all duration-300 ${item.active
                    ? "text-white bg-gradient-to-r from-red-900/60 to-red-800/40 border border-red-800/40"
                    : "text-neutral-400 hover:text-white nav-link-underline"
                  }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Hire Me CTA */}
          <div className="hidden md:block">
            <button
              onClick={() => scrollTo("contact")}
              className="gradient-border px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] text-white rounded-full cursor-pointer hover:shadow-[0_0_25px_rgba(192,57,43,0.4)] transition-shadow duration-300"
            >
              Hire Me
            </button>
          </div>
        </div>

        {/* Glowing horizontal line under nav */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-red-800/50 to-transparent" />
      </motion.header>

      {/* ════════ HERO CONTENT ════════ */}
      <div className="relative z-20 flex-1 flex items-center max-w-7xl mx-auto w-full px-6 py-12 lg:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center w-full">

          {/* ──── LEFT COLUMN: Text Content ──── */}
          <div className="lg:col-span-7 flex flex-col justify-center">

            {/* Status Badge */}
            <motion.div
              variants={badgeVariants}
              initial="hidden"
              animate="visible"
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-red-950/50 border border-red-900/30 w-fit mb-8"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <span className="text-xs font-bold text-emerald-400 tracking-[0.15em] uppercase">
                Open to Opportunities
              </span>
            </motion.div>

            {/* Giant Name — Letter-by-letter reveal */}
            <motion.div
              style={{ y: prefersReduced ? 0 : nameY }}
              className="mb-3"
            >
              <motion.h1
                variants={letterContainerVariants}
                initial="hidden"
                animate="visible"
                className="font-display text-[4rem] sm:text-[5.5rem] md:text-[7rem] lg:text-[8.5rem] xl:text-[10rem] leading-[0.85] tracking-wide"
              >
                {/* "Meldan" — crimson gradient */}
                <span className="block">
                  {"Meldan".split("").map((char, i) => (
                    <motion.span
                      key={`m-${i}`}
                      variants={letterVariants}
                      className="inline-block bg-gradient-to-r from-red-700 via-red-500 to-orange-500 bg-clip-text text-transparent"
                      style={{
                        WebkitTextStroke: "1px rgba(192, 57, 43, 0.15)",
                      }}
                    >
                      {char}
                    </motion.span>
                  ))}
                </span>
                {/* "Roy" — outlined / different gradient */}
                <span className="block -mt-2 sm:-mt-3 md:-mt-4 lg:-mt-5">
                  {"Roy".split("").map((char, i) => (
                    <motion.span
                      key={`r-${i}`}
                      variants={letterVariants}
                      className="inline-block"
                      style={{
                        WebkitTextStroke: "2px rgba(231, 76, 60, 0.7)",
                        color: "transparent",
                        filter: "drop-shadow(0 0 20px rgba(192, 57, 43, 0.3))",
                      }}
                    >
                      {char}
                    </motion.span>
                  ))}
                </span>
              </motion.h1>
            </motion.div>

            {/* Tagline — Typewriter effect */}
            <motion.div
              variants={taglineVariants}
              initial="hidden"
              animate="visible"
              className="mb-8"
            >
              <h2 className="text-xl sm:text-2xl md:text-3xl font-sans font-medium text-neutral-300">
                {typedText}
                {!typingDone && (
                  <span className="inline-block w-0.5 h-6 md:h-8 bg-red-500 ml-1 align-middle animate-blink" />
                )}
              </h2>
            </motion.div>

            {/* Sub-info lines */}
            <div className="space-y-3 mb-10 max-w-xl">
              <motion.div
                custom={0}
                variants={infoVariants}
                initial="hidden"
                animate="visible"
                className="flex items-start gap-3"
              >
                <GraduationCap className="text-red-500 w-5 h-5 mt-1 shrink-0" />
                <p className="text-sm md:text-base text-neutral-400 leading-relaxed">
                  3rd Year BE Computer Science & Engineering at{" "}
                  <span className="text-white font-medium">
                    Loyola ICAM College of Engineering and Technology (LICET)
                  </span>
                </p>
              </motion.div>

              <motion.div
                custom={1}
                variants={infoVariants}
                initial="hidden"
                animate="visible"
                className="flex items-start gap-3"
              >
                <Code className="text-orange-500 w-5 h-5 mt-1 shrink-0" />
                <p className="text-sm md:text-base text-neutral-400 leading-relaxed">
                  Building responsive web interfaces, full-stack applications, and interactive digital experiences.
                </p>
              </motion.div>
            </div>

            {/* CTA Buttons */}
            <motion.div
              variants={buttonContainerVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-wrap items-center gap-4"
            >
              <motion.a
                variants={buttonVariants}
                href="#contact"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-red-800 to-red-700 hover:from-red-700 hover:to-red-600 font-semibold text-white transition-all duration-300 glow-crimson glow-crimson-hover text-center flex items-center justify-center gap-2 cursor-pointer text-sm"
              >
                <Sparkles size={16} />
                Get In Touch
              </motion.a>

              <motion.a
                variants={buttonVariants}
                href="/Meldan_Roy_Resume.pdf"
                download="Meldan_Roy_Resume.pdf"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-4 rounded-xl bg-red-950/40 hover:bg-red-950/60 text-white font-semibold border border-red-900/40 hover:border-red-800/60 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer text-sm"
              >
                <FileDown size={16} className="text-neutral-400" />
                Download Resume
              </motion.a>

              <motion.div variants={buttonVariants} className="flex items-center gap-2.5 ml-1">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-red-950/30 border border-red-900/30 text-neutral-400 hover:text-white hover:border-red-700/50 hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon size={18} />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-red-950/30 border border-red-900/30 text-neutral-400 hover:text-white hover:border-red-700/50 hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon size={18} />
                </a>
              </motion.div>
            </motion.div>
          </div>

          {/* ──── RIGHT COLUMN: Glowing Profile Orb ──── */}
          <motion.div
            variants={orbVariants}
            initial="hidden"
            animate="visible"
            style={{ y: prefersReduced ? 0 : orbY }}
            className="lg:col-span-5 flex justify-center items-center"
          >
            <div className="relative w-[300px] h-[300px] md:w-[380px] md:h-[380px] lg:w-[420px] lg:h-[420px] flex items-center justify-center">

              {/* Outer ambient glow */}
              <div className="absolute w-[90%] h-[90%] bg-gradient-to-br from-red-900/25 to-red-800/10 rounded-full blur-3xl pointer-events-none" />

              {/* Pulsing ring 1 — slow */}
              <motion.div
                animate={{ scale: [1, 1.05, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute w-[85%] h-[85%] rounded-full border border-red-800/30"
              />

              {/* Pulsing ring 2 — offset timing */}
              <motion.div
                animate={{ scale: [1.03, 0.98, 1.03], opacity: [0.2, 0.4, 0.2] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                className="absolute w-[75%] h-[75%] rounded-full border border-red-700/20"
              />

              {/* Rotating dashed accent ring */}
              <div className="absolute w-[92%] h-[92%] rounded-full border border-dashed border-red-900/20 animate-[spin_50s_linear_infinite]" />

              {/* Core glow circle */}
              <motion.div
                animate={{ scale: [1, 1.04, 1] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                className="absolute w-[68%] h-[68%] rounded-full bg-gradient-to-br from-red-950/60 via-red-900/30 to-transparent border border-red-800/20 shadow-[inset_0_0_40px_rgba(139,0,0,0.3)]"
              />

              {/* Profile Image — floating */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                className="relative z-10 w-[80%] h-[80%] flex items-center justify-center"
                style={{ filter: "drop-shadow(0 20px 40px rgba(139, 0, 0, 0.4))" }}
              >
                <Image
                  src="/Profile-nobg.png"
                  alt="Meldan Roy"
                  width={380}
                  height={380}
                  priority
                  className="object-contain object-bottom"
                  style={{ width: "auto", height: "auto", maxHeight: "100%" }}
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ════════ SCROLL DOWN INDICATOR ════════ */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 4, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 cursor-pointer"
        onClick={() => {
          const el = document.getElementById("about");
          el?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-neutral-600">
          Scroll Down
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={16} className="text-red-700/60" />
        </motion.div>
      </motion.div>
    </section>
  );
}
