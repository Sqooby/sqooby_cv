'use client'

import { motion } from 'framer-motion'
import { Briefcase, CheckCircle2 } from 'lucide-react'
import { experienceData } from '@/data/experience'

export default function Experience() {
  return (
    <section id="experience" className="relative py-32 overflow-hidden">
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
            Doświadczenie <span className="text-gradient">Zawodowe</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Moja droga zawodowa i kluczowe osiągnięcia
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent-blue via-accent-purple to-accent-cyan opacity-30" />

            {/* Timeline Items */}
            <div className="space-y-12">
              {experienceData.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="relative pl-24"
                >
                  {/* Timeline Node */}
                  <motion.div
                    className="absolute left-0 top-0 w-16 h-16 rounded-full glass flex items-center justify-center"
                    whileHover={{ scale: 1.1 }}
                  >
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent-blue to-accent-purple flex items-center justify-center">
                      <Briefcase className="w-6 h-6 text-white" />
                    </div>

                    {/* Pulsing ring */}
                    <motion.div
                      className="absolute inset-0 rounded-full border-2 border-accent-purple"
                      animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.5, 0, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                    />
                  </motion.div>

                  {/* Content Card */}
                  <div className="glass rounded-2xl p-6 hover:glass-strong transition-all group">
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-display font-bold text-white mb-1 group-hover:text-gradient transition-all">
                          {exp.title}
                        </h3>
                        <p className="text-accent-purple font-semibold">{exp.company}</p>
                      </div>
                      <div className="mt-2 sm:mt-0">
                        <span className="inline-block px-4 py-2 bg-gradient-to-r from-accent-blue/20 to-accent-purple/20 rounded-full text-sm font-mono text-accent-cyan border border-accent-cyan/30">
                          {exp.period}
                        </span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-slate-400 mb-4">
                      {exp.description}
                    </p>

                    {/* Achievements */}
                    <div className="space-y-2">
                      <p className="text-sm font-semibold text-slate-300 mb-2">Kluczowe osiągnięcia:</p>
                      {exp.achievements.map((achievement, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.2 + i * 0.1 }}
                          className="flex items-start space-x-2"
                        >
                          <CheckCircle2 className="w-5 h-5 text-accent-cyan mt-0.5 flex-shrink-0" />
                          <p className="text-slate-400 text-sm">{achievement}</p>
                        </motion.div>
                      ))}
                    </div>

                    {/* Hover Glow */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-accent-blue/20 via-accent-purple/20 to-accent-cyan/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity blur-xl -z-10" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* End of Timeline */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="relative pl-24 mt-12"
          >
            <div className="absolute left-5 top-0 w-6 h-6 rounded-full bg-gradient-to-br from-accent-cyan to-accent-blue" />
            <p className="text-slate-500 italic">Droga ciągle trwa...</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
