"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code, Server, Wrench, Layers } from "lucide-react";

interface SkillItem {
  name: string;
  level: number; // percentage
  desc: string;
}

interface SkillCategory {
  id: string;
  title: string;
  icon: React.ReactNode;
  skills: SkillItem[];
}

export default function Skills() {
  const [activeTab, setActiveTab] = useState<string>("frontend");

  const skillCategories: SkillCategory[] = [
    {
      id: "frontend",
      title: "Frontend Development",
      icon: <Code size={18} />,
      skills: [
        { name: "HTML5 / CSS3", level: 90, desc: "Semantic structure, Flexbox, Grid, custom styling" },
        { name: "JavaScript (ES6+)", level: 85, desc: "DOM manipulation, async code, closures, array methods" },
        { name: "React.js", level: 80, desc: "Hooks, component lifecycle, state management" },
        { name: "Next.js", level: 75, desc: "App Router, SSR, SSG, Route Handlers" },
        { name: "Tailwind CSS", level: 85, desc: "Utility-first design, custom configurations, v4" },
      ],
    },
    {
      id: "backend",
      title: "Backend Development",
      icon: <Server size={18} />,
      skills: [
        { name: "Node.js", level: 70, desc: "Runtime environment, asynchronous server scripting" },
        { name: "Express.js", level: 75, desc: "RESTful API construction, routing, middleware integration" },
        { name: "MongoDB", level: 70, desc: "NoSQL document storage, schemas, queries" },
        { name: "SQL / MySQL", level: 65, desc: "Relational database models, tables, basic queries" },
      ],
    },
    {
      id: "tools",
      title: "Tools & Frameworks",
      icon: <Wrench size={18} />,
      skills: [
        { name: "Git & GitHub", level: 80, desc: "Version control, branching, staging, pull requests" },
        { name: "Framer Motion", level: 70, desc: "Web animations, layout transitions, keyframes" },
        { name: "VS Code", level: 90, desc: "Extension setup, local debugging, terminal utilities" },
      ],
    },
  ];

  const currentCategory = skillCategories.find((cat) => cat.id === activeTab) || skillCategories[0];

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-background">
      {/* Background glow decoration */}
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-accent/10 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Title */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs font-bold text-accent tracking-widest uppercase mb-3"
          >
            My Stack
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-extrabold text-white"
          >
            Skills & Core Competencies
          </motion.h3>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-red-800 to-red-600 mt-4 rounded-full"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* Tabs Selector (4 cols) */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <h4 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
              <Layers size={20} className="text-accent" />
              Categories
            </h4>
            <div className="flex flex-row lg:flex-col gap-3 flex-wrap">
              {skillCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveTab(category.id)}
                  className={`flex items-center gap-3 px-5 py-4 rounded-xl border text-sm font-semibold transition-all duration-300 w-full text-left cursor-pointer ${
                    activeTab === category.id
                      ? "bg-slate-900 text-white border-accent shadow-[0_4px_20px_-5px_rgba(245,158,11,0.25)]"
                      : "bg-background text-slate-400 border-slate-900 hover:border-slate-800 hover:text-slate-200"
                  }`}
                >
                  <span className={`${activeTab === category.id ? "text-accent" : "text-slate-500"}`}>
                    {category.icon}
                  </span>
                  <span>{category.title}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Skills Details Container (8 cols) */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="space-y-6"
              >
                <h4 className="text-lg font-bold text-white mb-6 border-b border-slate-900 pb-3 flex items-center justify-between">
                  <span>{currentCategory.title}</span>
                  <span className="text-xs font-normal text-slate-500">Progress Estimations</span>
                </h4>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {currentCategory.skills.map((skill, idx) => (
                    <motion.div
                      key={idx}
                      whileHover={{ y: -3 }}
                      className="glass-panel p-5 rounded-xl border border-slate-900 hover:border-slate-800 transition-all duration-300 relative overflow-hidden"
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-semibold text-white text-sm md:text-base">
                          {skill.name}
                        </span>
                        <span className="text-xs font-bold text-accent">
                          {skill.level}%
                        </span>
                      </div>

                      {/* Animated Progress bar container */}
                      <div className="w-full h-1.5 bg-background rounded-full overflow-hidden mb-3">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 0.8, delay: idx * 0.08, ease: "easeOut" }}
                          className="h-full bg-gradient-to-r from-red-800 to-red-600 rounded-full"
                        />
                      </div>

                      <p className="text-xs text-slate-400 leading-relaxed">
                        {skill.desc}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
