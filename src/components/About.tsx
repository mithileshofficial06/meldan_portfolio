"use client";

import { motion, Variants } from "framer-motion";
import { GraduationCap, Award, MapPin, Calendar, BookOpen } from "lucide-react";

export default function About() {
  const stats = [
    { label: "Current Education", value: "3rd Year UG BE" },
    { label: "Major", value: "Computer Science" },
    { label: "Institution", value: "LICET, Chennai" },
    { label: "GPA", value: "8.2 / 10.0" },
  ];

  const timeline = [
    {
      year: "2023 - Present",
      title: "Bachelor of Engineering in CSE",
      institution: "Loyola ICAM College of Engineering and Technology (LICET)",
      description:
        "Currently in my 3rd year. Actively studying Core Computer Science subjects including Database Systems, Data Structures, Web Technology, Software Engineering, and Operating Systems. Participating in college tech events and building project work.",
    },
    {
      year: "2021 - 2023",
      title: "Higher Secondary Education (HSC)",
      institution: "St. Patrick's Matriculation Hr. Sec. School",
      description:
        "Completed higher secondary education majoring in Physics, Chemistry, Mathematics, and Computer Science with academic excellence.",
    },
  ];

  const cardVariants: Variants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, type: "spring", stiffness: 80 },
    },
  };

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-slate-950/20">
      {/* Background radial accent glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[300px] h-[300px] bg-primary/10 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Title */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-xs font-bold text-primary tracking-widest uppercase mb-3"
          >
            About Me
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-extrabold text-white"
          >
            My Academic & Dev Journey
          </motion.h3>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-primary to-accent mt-4 rounded-full"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Bio and Stats column (5 cols) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={cardVariants}
            className="lg:col-span-5 flex flex-col gap-8"
          >
            <div className="glass-panel p-8 rounded-2xl relative overflow-hidden">
              {/* Background gradient flare */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/20 rounded-full blur-2xl pointer-events-none" />
              
              <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <BookOpen size={20} className="text-accent" />
                Who I Am
              </h4>
              <p className="text-slate-300 leading-relaxed text-sm md:text-base mb-4">
                I am a dedicated Computer Science & Engineering student at <span className="text-white font-medium">LICET</span> with a keen interest in full-stack web development. I love building responsive, user-centric, and well-designed web applications.
              </p>
              <p className="text-slate-400 leading-relaxed text-sm md:text-base">
                My goal is to blend robust backend systems with fluid, visually satisfying frontend experiences. As a 3rd-year student, I am actively sharpening my data structures knowledge while keeping up-to-date with modern frontend frameworks.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="glass-panel glass-panel-hover p-5 rounded-xl flex flex-col justify-between"
                >
                  <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">
                    {stat.label}
                  </span>
                  <span className="text-base font-bold text-white leading-tight">
                    {stat.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Quick Details List */}
            <div className="glass-panel p-6 rounded-xl flex flex-col gap-3 text-slate-300 text-sm">
              <div className="flex items-center gap-3">
                <MapPin size={16} className="text-primary shrink-0" />
                <span>Chennai, Tamil Nadu, India</span>
              </div>
              <div className="flex items-center gap-3">
                <Calendar size={16} className="text-accent shrink-0" />
                <span>UG Graduation Expected: 2027</span>
              </div>
              <div className="flex items-center gap-3">
                <GraduationCap size={16} className="text-primary shrink-0" />
                <span>BE CSE, Loyola ICAM (LICET)</span>
              </div>
            </div>
          </motion.div>

          {/* Academic Timeline column (7 cols) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={cardVariants}
            className="lg:col-span-7 flex flex-col"
          >
            <h4 className="text-xl font-bold text-white mb-8 flex items-center gap-2">
              <Award size={20} className="text-primary" />
              Education Timeline
            </h4>

            <div className="relative border-l border-slate-800 ml-4 pl-8 space-y-10">
              {timeline.map((item, idx) => (
                <div key={idx} className="relative group">
                  {/* Timeline point indicator */}
                  <div className="absolute -left-[41px] top-1.5 w-6 h-6 rounded-full bg-slate-950 border-2 border-primary group-hover:border-accent transition-colors duration-300 flex items-center justify-center">
                    <div className="w-2.5 h-2.5 rounded-full bg-primary group-hover:bg-accent transition-colors duration-300" />
                  </div>

                  {/* Timeline Card */}
                  <motion.div
                    whileHover={{ x: 6 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="glass-panel p-6 rounded-xl group-hover:border-primary/30 transition-all duration-300 relative overflow-hidden"
                  >
                    {/* Background glow in timeline card */}
                    <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-primary to-accent" />

                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3.5 pl-2">
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20">
                        {item.year}
                      </span>
                      <span className="text-xs text-slate-500 font-medium flex items-center gap-1">
                        <MapPin size={12} /> Chennai
                      </span>
                    </div>

                    <h5 className="text-lg font-bold text-white mb-1 pl-2">
                      {item.title}
                    </h5>
                    <h6 className="text-sm font-semibold text-accent mb-4 pl-2">
                      {item.institution}
                    </h6>
                    <p className="text-slate-400 text-sm leading-relaxed pl-2">
                      {item.description}
                    </p>
                  </motion.div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
