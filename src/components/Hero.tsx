"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { FileDown, ArrowDown, GraduationCap, Code } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";

export default function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden bg-grid-pattern"
    >
      {/* Background glowing decorations */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-primary/25 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[400px] h-[400px] bg-accent/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

        {/* Hero Details (8 cols on lg) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 flex flex-col justify-center text-left"
        >
          {/* Greeting Badge */}
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 border border-slate-800 w-fit mb-6 shadow-inner">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-xs font-semibold text-accent tracking-widest uppercase">
              Open to Opportunities
            </span>
          </motion.div>

          {/* Intro Text */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl font-medium text-slate-400 mb-2 font-display"
          >
            Hi there, my name is
          </motion.p>

          {/* Name Header */}
          <motion.h1
            variants={itemVariants}
            className="text-6xl md:text-8xl font-extrabold tracking-tight mb-4 leading-none"
          >
            <span className="text-accent">Meldan</span>{" "}
            <span className="bg-gradient-to-r from-red-600 via-rose-500 to-amber-500 bg-clip-text text-transparent">
              Roy
            </span>
          </motion.h1>

          {/* Title taglines */}
          <motion.h2
            variants={itemVariants}
            className="text-2xl md:text-3xl font-semibold mb-6 text-slate-300 font-display flex flex-wrap items-center gap-2"
          >
            I am a <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Web Developer</span> & CSE Student
          </motion.h2>

          {/* Context Details */}
          <motion.div variants={itemVariants} className="space-y-3.5 mb-10 text-slate-400 max-w-xl">
            <div className="flex items-start gap-3">
              <GraduationCap className="text-primary w-5 h-5 mt-1 shrink-0" />
              <p className="text-sm md:text-base leading-relaxed">
                3rd Year BE Computer Science & Engineering at{" "}
                <span className="text-white font-medium">
                  Loyola ICAM College of Engineering and Technology (LICET)
                </span>
              </p>
            </div>
            <div className="flex items-start gap-3">
              <Code className="text-accent w-5 h-5 mt-1 shrink-0" />
              <p className="text-sm md:text-base leading-relaxed">
                Building responsive web interfaces, full-stack applications, and interactive digital experiences.
              </p>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center gap-4"
          >
            <a
              href="#contact"
              className="px-8 py-4 rounded-xl bg-primary hover:bg-opacity-90 font-semibold text-white transition-all duration-300 glow-primary hover:-translate-y-0.5 text-center flex items-center justify-center gap-2 cursor-pointer"
            >
              Get In Touch
            </a>

            <a
              href="/Meldan_Roy_Resume.pdf"
              download="Meldan_Roy_Resume.pdf"
              className="px-6 py-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold border border-slate-800 hover:border-slate-700 transition-all duration-300 flex items-center justify-center gap-2 hover:-translate-y-0.5 shadow-md cursor-pointer"
            >
              <FileDown size={18} className="text-slate-400 group-hover:text-white" />
              Download Resume
            </a>

            <div className="flex items-center gap-2.5 ml-2">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-xl bg-slate-900 border border-slate-800/80 hover:border-primary/40 text-slate-400 hover:text-white hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
                aria-label="GitHub Profile"
              >
                <GithubIcon size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-xl bg-slate-900 border border-slate-800/80 hover:border-accent/40 text-slate-400 hover:text-white hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon size={20} />
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* Hero Photo (5 cols on lg) */}
        <motion.div
          initial={{ opacity: 0, x: 50, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.2, delay: 0.3 }}
          className="lg:col-span-5 flex justify-center items-center"
        >
          <div className="relative w-[320px] h-[320px] md:w-[420px] md:h-[420px] flex items-center justify-center">
            {/* Ambient background glow behind picture */}
            <div className="absolute w-[80%] h-[80%] bg-gradient-to-tr from-primary/20 to-accent/20 rounded-full blur-3xl pointer-events-none" />

            {/* Animated rotating accent border rings */}
            <div className="absolute w-[75%] h-[75%] rounded-full border border-dashed border-primary/30 animate-[spin_40s_linear_infinite]" />
            <div className="absolute w-[85%] h-[85%] rounded-full border border-dotted border-accent/20 animate-[spin_60s_linear_infinite_reverse]" />

            {/* Animated solid background circle */}
            <div className="absolute w-[70%] h-[70%] bg-background/80 border border-slate-900 rounded-full shadow-[0_0_30px_rgba(153,27,27,0.25)]" />

            {/* Profile Image with animated floating container (no overflow-hidden, no solid bg, no border) */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              className="relative z-10 drop-shadow-[0_20px_35px_rgba(139,92,246,0.35)] flex items-center justify-center w-full h-full"
            >
              <Image
                src="/Profile-nobg.png"
                alt="Meldan Roy"
                width={380}
                height={380}
                priority
                className="object-contain object-bottom scale-100 transition-transform duration-500 hover:scale-105"
                style={{ width: "auto", height: "auto" }}
              />
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Mouse Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5 cursor-pointer"
        onClick={() => {
          const el = document.getElementById("about");
          el?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        <span className="text-[10px] uppercase font-bold tracking-widest text-slate-500">
          Scroll Down
        </span>
        <div className="w-6 h-10 rounded-full border border-slate-700/60 p-1 flex justify-center">
          <motion.div
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-1.5 h-1.5 rounded-full bg-accent"
          />
        </div>
      </motion.div>
    </section>
  );
}
