'use client'

import { motion } from 'framer-motion'
import { skillsData } from '@/data/skills'

const categories = [
  { key: 'mobile', title: 'Programowanie Mobilne', color: 'from-accent-blue to-accent-cyan' },
  { key: 'web', title: 'Programowanie Web', color: 'from-accent-cyan to-accent-purple' },
  { key: 'backend', title: 'Backend i Bazy Danych', color: 'from-accent-purple to-accent-blue' },
  { key: 'tools', title: 'Narzędzia i Technologie', color: 'from-accent-blue to-accent-purple' },
]

export default function Skills() {
  return (
    <section id="skills" className="relative py-16 sm:py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-bg-secondary/50 to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4">
            Umiejętności & <span className="text-gradient">Technologie</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto px-4">
            Narzędzia i technologie, których używam do tworzenia projektów
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto space-y-8 sm:space-y-12">
          {categories.map((category, categoryIndex) => (
            <motion.div
              key={category.key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.2 }}
            >
              <div className="glass rounded-2xl p-4 sm:p-6 lg:p-8">
                <h3 className={`text-lg sm:text-xl lg:text-2xl font-display font-bold mb-4 sm:mb-6 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                  {category.title}
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                  {skillsData[category.key as keyof typeof skillsData].map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ delay: skillIndex * 0.03, duration: 0.3 }}
                      className="relative group"
                    >
                      <div className="glass-strong rounded-xl p-3 sm:p-4 h-full transition-all duration-300 hover:bg-bg-card/80 flex items-center justify-center">
                        {/* Skill Name */}
                        <span className="font-semibold text-sm sm:text-base text-white text-center">{skill.name}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech Stack Icons - Simplified */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mt-12 sm:mt-16 text-center"
        >
          <p className="text-slate-500 text-xs sm:text-sm mb-6 sm:mb-8">I wiele innych technologii...</p>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 lg:gap-4 px-4">
            {['React', 'Next.js', 'TypeScript', 'Tailwind', 'Node.js', 'Git'].map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.3 }}
                className="px-3 sm:px-4 py-1.5 sm:py-2 glass rounded-full text-xs sm:text-sm font-mono text-slate-400 hover:bg-bg-card/50 transition-colors duration-200"
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
