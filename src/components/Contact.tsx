"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, MapPin, Send, CheckCircle, GraduationCap } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errors, setErrors] = useState({ name: "", email: "", message: "" });

  const validate = () => {
    let isValid = true;
    const tempErrors = { name: "", email: "", message: "" };

    if (!formData.name.trim()) {
      tempErrors.name = "Name is required";
      isValid = false;
    }
    if (!formData.email.trim()) {
      tempErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Email address is invalid";
      isValid = false;
    }
    if (!formData.message.trim()) {
      tempErrors.message = "Message is required";
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("submitting");

    // Mock API call to submit contact form
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });

      // Reset success status after a few seconds
      setTimeout(() => {
        setStatus("idle");
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-slate-950">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-primary/15 rounded-full blur-[100px] pointer-events-none" />

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
            Connect
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-extrabold text-white"
          >
            Send A Message
          </motion.h3>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-primary to-accent mt-4 rounded-full"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
          
          {/* Contact Details Panel (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            <div className="glass-panel p-8 rounded-2xl h-full flex flex-col justify-between relative overflow-hidden">
              <div>
                <h4 className="text-xl font-bold text-white mb-3">Let&apos;s Work Together</h4>
                <p className="text-slate-400 text-sm md:text-base leading-relaxed mb-8">
                  Have an exciting project idea, internship opportunity, or just want to chat about engineering and code? Drop me a message and I will reply as soon as possible.
                </p>

                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 text-primary">
                      <Mail size={18} />
                    </div>
                    <div>
                      <p className="text-[11px] font-bold text-slate-500 uppercase tracking-widest">
                        Email Me
                      </p>
                      <a
                        href="mailto:meldanroy@example.com"
                        className="text-white hover:text-primary transition-colors text-sm font-semibold"
                      >
                        meldanroy@example.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 text-accent">
                      <GraduationCap size={18} />
                    </div>
                    <div>
                      <p className="text-[11px] font-bold text-slate-500 uppercase tracking-widest">
                        My College
                      </p>
                      <p className="text-white text-sm font-semibold">
                        Loyola ICAM (LICET), Chennai
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 text-primary">
                      <MapPin size={18} />
                    </div>
                    <div>
                      <p className="text-[11px] font-bold text-slate-500 uppercase tracking-widest">
                        Location
                      </p>
                      <p className="text-white text-sm font-semibold">
                        Chennai, Tamil Nadu, India
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social list links at bottom */}
              <div className="flex items-center gap-3 mt-12 pt-6 border-t border-slate-900">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-slate-900 border border-slate-800/80 hover:border-primary/40 text-slate-400 hover:text-white transition-all duration-300 cursor-pointer"
                >
                  <GithubIcon size={18} />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-slate-900 border border-slate-800/80 hover:border-accent/40 text-slate-400 hover:text-white transition-all duration-300 cursor-pointer"
                >
                  <LinkedinIcon size={18} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form Panel (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="glass-panel p-8 md:p-10 rounded-2xl relative">
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Name Input */}
                <div className="relative flex flex-col gap-1.5">
                  <label htmlFor="name" className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className={`w-full bg-slate-950 border rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:ring-1 focus:ring-primary transition-all placeholder:text-slate-600 ${
                      errors.name ? "border-red-500/50" : "border-slate-800/80 focus:border-primary"
                    }`}
                  />
                  {errors.name && (
                    <span className="text-xs text-red-500 font-medium">{errors.name}</span>
                  )}
                </div>

                {/* Email Input */}
                <div className="relative flex flex-col gap-1.5">
                  <label htmlFor="email" className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className={`w-full bg-slate-950 border rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:ring-1 focus:ring-primary transition-all placeholder:text-slate-600 ${
                      errors.email ? "border-red-500/50" : "border-slate-800/80 focus:border-primary"
                    }`}
                  />
                  {errors.email && (
                    <span className="text-xs text-red-500 font-medium">{errors.email}</span>
                  )}
                </div>

                {/* Message Input */}
                <div className="relative flex flex-col gap-1.5">
                  <label htmlFor="message" className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe your idea or request..."
                    className={`w-full bg-slate-950 border rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:ring-1 focus:ring-primary transition-all resize-none placeholder:text-slate-600 ${
                      errors.message ? "border-red-500/50" : "border-slate-800/80 focus:border-primary"
                    }`}
                  />
                  {errors.message && (
                    <span className="text-xs text-red-500 font-medium">{errors.message}</span>
                  )}
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full py-4 rounded-xl bg-primary hover:bg-opacity-95 font-semibold text-white transition-all duration-300 glow-primary hover:-translate-y-0.5 disabled:opacity-50 disabled:hover:translate-y-0 flex items-center justify-center gap-2 cursor-pointer"
                >
                  {status === "submitting" ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      Send Message
                    </>
                  )}
                </button>

              </form>

              {/* Custom Success Modal inside Card */}
              <AnimatePresence>
                {status === "success" && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-slate-950/95 backdrop-blur-sm rounded-2xl flex flex-col items-center justify-center text-center p-6 z-20"
                  >
                    <motion.div
                      initial={{ scale: 0.7, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.7, opacity: 0 }}
                      transition={{ type: "spring", stiffness: 200, damping: 15 }}
                      className="flex flex-col items-center max-w-sm"
                    >
                      <CheckCircle size={60} className="text-accent mb-6 animate-bounce" />
                      <h4 className="text-2xl font-bold text-white mb-2">Message Sent!</h4>
                      <p className="text-slate-400 text-sm leading-relaxed mb-6">
                        Thank you for reaching out. Your message has been received successfully. I will get back to you shortly.
                      </p>
                      <button
                        onClick={() => setStatus("idle")}
                        className="px-6 py-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 font-medium text-white transition-colors cursor-pointer text-xs uppercase tracking-wider"
                      >
                        Dismiss
                      </button>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
