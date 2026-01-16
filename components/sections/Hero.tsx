"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Github, Linkedin, Mail, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";

const roles = [
  "Flutter Developer",
  "Web Developer",
  "Mobile Developer",
  "Frontend Developer",
];

export default function Hero() {
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden grain pt-20 sm:pt-0"
    >
      {/* Animated Background Gradients - Optimized with will-change */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 -left-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-accent-blue/30 rounded-full blur-3xl will-change-transform"
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute top-1/3 right-0 w-80 h-80 sm:w-[500px] sm:h-[500px] bg-accent-purple/30 rounded-full blur-3xl will-change-transform"
          animate={{
            x: [0, -50, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/2 w-64 h-64 sm:w-96 sm:h-96 bg-accent-cyan/20 rounded-full blur-3xl will-change-transform"
          animate={{
            x: [0, -40, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear",
          }}
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Greeting */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center space-x-2 mb-4 sm:mb-6"
          >
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-accent-cyan" />
            <span className="text-accent-cyan font-mono text-xs sm:text-sm tracking-wider uppercase">
              Witaj w moim portfolio
            </span>
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-accent-cyan" />
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-bold mb-4 sm:mb-6 px-2"
          >
            <span className="block text-white mb-2">
              Cześć, jestem{" "}
              <span className="text-gradient inline-block relative">
                Michał
                <motion.div
                  className="absolute -inset-1 sm:-inset-2 bg-gradient-to-r from-accent-blue/20 via-accent-purple/20 to-accent-cyan/20 rounded-xl sm:rounded-2xl blur-lg sm:blur-xl -z-10"
                  animate={{
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                />
              </span>
            </span>
          </motion.h1>

          {/* Rotating Role */}
          <div className="h-12 sm:h-16 md:h-20 mb-6 sm:mb-8 flex items-center justify-center px-2">
            <AnimatePresence mode="wait">
              <motion.h2
                key={currentRole}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-slate-300"
              >
                {roles[currentRole]}
              </motion.h2>
            </AnimatePresence>
          </div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-base sm:text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-8 sm:mb-12 px-4"
          >
            Tworzę aplikacje mobilne w Flutter oraz nowoczesne strony
            internetowe. Pasjonuję się programowaniem i ciągle rozwijam swoje
            umiejętności.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-12 sm:mb-16 px-4"
          >
            <motion.a
              href="#projects"
              className="group relative w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-accent-blue to-accent-purple rounded-full font-semibold text-sm sm:text-base text-white overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Zobacz Projekty</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-accent-purple to-accent-cyan"
                initial={{ x: "100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>

            <motion.a
              href="#contact"
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 glass rounded-full font-semibold text-sm sm:text-base text-white hover:glass-strong transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Skontaktuj się
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="flex items-center justify-center space-x-4 sm:space-x-6"
          >
            {[
              {
                icon: Github,
                href: "https://github.com/Sqooby",
                label: "GitHub",
              },
              {
                icon: Linkedin,
                href: "https://www.linkedin.com/in/michał-basznianin-9a704020a/",
                label: "LinkedIn",
              },
              {
                icon: Mail,
                href: "mailto:michal.basznianin3@gmail.com",
                label: "Email",
              },
            ].map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 sm:p-4 rounded-full glass hover:glass-strong transition-all group relative"
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + index * 0.1 }}
              >
                <social.icon className="w-5 h-5 sm:w-6 sm:h-6 text-slate-300 group-hover:text-accent-purple transition-colors" />
                <motion.div
                  className="absolute inset-0 rounded-full bg-accent-purple/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity"
                  layoutId={`social-glow-${index}`}
                />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
