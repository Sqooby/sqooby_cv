'use client'

import { motion } from 'framer-motion'
import { skillsData } from '@/data/skills'

const categories = [
  { key: 'mobile', title: 'Mobile Development', color: 'from-accent-blue to-accent-cyan' },
  { key: 'web', title: 'Web Development', color: 'from-accent-cyan to-accent-purple' },
  { key: 'backend', title: 'Backend & Databases', color: 'from-accent-purple to-accent-blue' },
  { key: 'tools', title: 'Tools & Technologies', color: 'from-accent-blue to-accent-purple' },
]

export default function Skills() {
  return (
    <section id="skills" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-bg-secondary/50 to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold mb-4">
            Umiejętności & <span className="text-gradient">Technologie</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Narzędzia i technologie, których używam do tworzenia projektów
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto space-y-12">
          {categories.map((category, categoryIndex) => (
            <motion.div
              key={category.key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.2 }}
            >
              <div className="glass rounded-2xl p-8">
                <h3 className={`text-2xl font-display font-bold mb-6 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                  {category.title}
                </h3>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {skillsData[category.key as keyof typeof skillsData].map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ delay: skillIndex * 0.03, duration: 0.3 }}
                      className="relative group"
                    >
                      <div className="glass-strong rounded-xl p-4 h-full transition-all duration-300 hover:bg-bg-card/80">
                        {/* Skill Name */}
                        <div className="flex items-center justify-between mb-3">
                          <span className="font-semibold text-white">{skill.name}</span>
                          <span className="text-sm text-accent-purple font-mono">{skill.level}%</span>
                        </div>

                        {/* Progress Bar - Simplified */}
                        <div className="h-2 bg-bg-primary/50 rounded-full overflow-hidden">
                          <motion.div
                            className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: skillIndex * 0.03, ease: 'easeOut' }}
                          />
                        </div>
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
          className="mt-16 text-center"
        >
          <p className="text-slate-500 text-sm mb-8">I wiele innych technologii...</p>
          <div className="flex flex-wrap justify-center gap-4">
            {['React', 'Next.js', 'TypeScript', 'Tailwind', 'Node.js', 'Git'].map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.3 }}
                className="px-4 py-2 glass rounded-full text-sm font-mono text-slate-400 hover:bg-bg-card/50 transition-colors duration-200"
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
