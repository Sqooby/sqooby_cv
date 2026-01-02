"use client";

import { motion } from "framer-motion";
import { Code2, Rocket, Heart, Coffee } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Czysty Kod",
    description: "Tworzę skalowalne i łatwe w utrzymaniu rozwiązania",
  },
  {
    icon: Rocket,
    title: "Szybka Nauka",
    description: "Ciągle eksploruję nowe technologie",
  },
  {
    icon: Heart,
    title: "User-Focused",
    description: "Tworzę przyjemne doświadczenia użytkownika",
  },
  {
    icon: Coffee,
    title: "Praca Zespołowa",
    description: "Współpracuję dla lepszych rezultatów",
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-32 overflow-hidden">
      {/* Background Effect */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-accent-purple/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-blue/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent-blue via-accent-purple to-accent-cyan mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left - Profile Image with decorative elements */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative max-w-md mx-auto">
              {/* Decorative rings - Optimized */}
              <motion.div
                className="absolute inset-0 border-2 border-accent-purple/30 rounded-full will-change-transform"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute inset-8 border-2 border-accent-blue/30 rounded-full will-change-transform"
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              />

              {/* Profile photo with gradient border */}
              <div className="relative aspect-square rounded-full overflow-hidden gradient-border p-2">
                <div className="w-full h-full rounded-full overflow-hidden">
                  <img
                    src="/images/profile.jpg"
                    alt="Michał "
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Floating badges */}
              <motion.div
                className="absolute top-10 -right-4 glass px-4 py-2 rounded-full"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <span className="text-sm font-semibold text-accent-cyan">
                  2+ Lata
                </span>
              </motion.div>

              <motion.div
                className="absolute bottom-10 -left-4 glass px-4 py-2 rounded-full"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              >
                <span className="text-sm font-semibold text-accent-purple">
                  10+ Projektów
                </span>
              </motion.div>
            </div>
          </motion.div>

          {/* Right - About Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="glass p-8 rounded-2xl">
              <h3 className="text-2xl font-display font-bold mb-4 text-gradient">
                Miło Cię poznać!
              </h3>
              <div className="space-y-4 text-slate-300 leading-relaxed">
                <p>
                  Jestem studentem informatyki na Politechnice Rzeszowskiej,
                  obecnie realizującym studia magisterskie. Specjalizuję się w
                  tworzeniu aplikacji mobilnych w technologii Flutter (Dart).
                </p>
                <p>
                  Moja droga w IT rozpoczęła się od zainteresowania
                  programowaniem, które przerodziło się w pasję tworzenia
                  funkcjonalnych i intuicyjnych aplikacji. Aktywnie działam w
                  SKNI KOD, gdzie rozwijam swoje umiejętności i współpracuję z
                  innymi studentami nad ciekawymi projektami.
                </p>
                <p>
                  Charakteryzuje mnie szybkie uczenie się nowych technologii,
                  determinacja w doskonaleniu umiejętności oraz umiejętność
                  efektywnej pracy zespołowej. Dążę do ciągłego rozwoju
                  zawodowego i tworzenia innowacyjnych rozwiązań.
                </p>
              </div>

              <motion.a
                href="/cv/CV_Michal_Basznianin.pdf"
                download
                className="inline-block mt-6 px-6 py-3 bg-gradient-to-r from-accent-blue to-accent-purple rounded-full font-semibold text-white"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Pobierz CV
              </motion.a>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass p-4 rounded-xl hover:glass-strong transition-all group"
                  whileHover={{ y: -5 }}
                >
                  <item.icon className="w-8 h-8 text-accent-purple mb-2 group-hover:scale-110 transition-transform" />
                  <h4 className="font-semibold mb-1">{item.title}</h4>
                  <p className="text-sm text-slate-400">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
