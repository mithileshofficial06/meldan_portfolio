"use client";

import { motion, Variants } from "framer-motion";
import { ExternalLink, Code2 } from "lucide-react";
import { GithubIcon } from "@/components/Icons";

interface Project {
  title: string;
  description: string;
  tags: string[];
  github: string;
  demo: string;
  featured: boolean;
}

export default function Projects() {
  const projects: Project[] = [
    {
      title: "CampusConnect",
      description:
        "A portal engineered specifically for students at Loyola ICAM College of Engineering and Technology (LICET) to share course notes, upload study resources, and advertise campus workshops.",
      tags: ["React.js", "Tailwind CSS", "Node.js", "Express", "MongoDB"],
      github: "https://github.com",
      demo: "https://example.com",
      featured: true,
    },
    {
      title: "Interactive Dev Portfolio",
      description:
        "A premium personal portfolio website showcasing 3D-like hover effects, framer-motion page entry transitions, custom responsive navigation, and parallax design layouts.",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      github: "https://github.com",
      demo: "https://example.com",
      featured: true,
    },
    {
      title: "TaskPulse - Kanban Dashboard",
      description:
        "A MERN-stack collaborative work dashboard featuring visual pipelines, JWT authorization, task categorization, and drag-and-drop lists to coordinate project phases.",
      tags: ["MongoDB", "Express", "React", "Node.js", "CSS Grid"],
      github: "https://github.com",
      demo: "https://example.com",
      featured: false,
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const cardVariants: Variants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 85, damping: 15 },
    },
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-background/20">
      {/* Background radial accent glow */}
      <div className="absolute top-1/4 left-1/3 w-[300px] h-[300px] bg-primary/10 rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Title */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs font-bold text-primary tracking-widest uppercase mb-3"
          >
            My Creations
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-extrabold text-white"
          >
            Featured Web Projects
          </motion.h3>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-red-800 to-red-600 mt-4 rounded-full"
          />
        </div>

        {/* Project Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className="glass-panel group rounded-2xl flex flex-col justify-between overflow-hidden border border-slate-900/60 hover:border-primary/30 transition-all duration-300 relative"
            >
              {/* Top accent line */}
              <div className="h-1 bg-gradient-to-r from-primary/80 to-accent/80 w-full" />

              <div className="p-8">
                {/* Project Badge */}
                <div className="flex justify-between items-center mb-5">
                  <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-primary group-hover:text-accent transition-colors duration-300">
                    <Code2 size={20} />
                  </div>
                  {project.featured && (
                    <span className="text-[10px] font-bold tracking-widest text-accent uppercase bg-accent/10 px-2.5 py-1 rounded-full border border-accent/20">
                      Featured
                    </span>
                  )}
                </div>

                <h4 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h4>

                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>

              {/* Bottom tag block and links */}
              <div className="px-8 pb-8 pt-2">
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="text-[11px] font-semibold text-slate-400 bg-slate-900 border border-slate-900 px-2.5 py-1 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 border-t border-slate-900/50 pt-5">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs font-semibold text-slate-400 hover:text-white transition-colors cursor-pointer"
                  >
                    <GithubIcon size={14} />
                    Repository
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs font-semibold text-accent hover:text-white transition-colors cursor-pointer ml-auto"
                  >
                    Launch App
                    <ExternalLink size={12} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
