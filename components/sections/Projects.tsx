'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github, Sparkles } from 'lucide-react'
import { projectsData } from '@/data/projects'

export default function Projects() {
  return (
    <section id="projects" className="relative py-32 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent-cyan/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-accent-purple/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Sparkles className="w-5 h-5 text-accent-cyan" />
            <span className="text-accent-cyan font-mono text-sm tracking-wider uppercase">
              Moje Prace
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold mb-4">
            Wybrane <span className="text-gradient">Projekty</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Wybór projektów pokazujących moje umiejętności i pasję do programowania
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projectsData.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group relative cursor-pointer"
              onClick={() => {
                if (project.liveUrl) {
                  window.open(project.liveUrl, '_blank', 'noopener,noreferrer')
                }
              }}
            >
              <div className="glass rounded-2xl overflow-hidden h-full flex flex-col">
                {/* Project Image */}
                <div className="relative h-64 bg-gradient-to-br from-bg-card to-bg-secondary overflow-hidden">
                  {/* Project Image */}
                  {project.image && (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  )}
                  {/* Fallback gradient if no image */}
                  {!project.image && (
                    <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/20 via-accent-purple/20 to-accent-cyan/20" />
                  )}

                  {/* Overlay on hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-accent-blue/90 to-accent-purple/90 flex items-center justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    {project.liveUrl && (
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-4 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ExternalLink className="w-6 h-6 text-white" />
                      </motion.a>
                    )}
                    {project.githubUrl && (
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-4 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Github className="w-6 h-6 text-white" />
                      </motion.a>
                    )}
                  </motion.div>

                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-4 right-4 px-3 py-1 glass rounded-full">
                      <span className="text-xs font-semibold text-accent-cyan flex items-center space-x-1">
                        <Sparkles className="w-3 h-3" />
                        <span>Wyróżnione</span>
                      </span>
                    </div>
                  )}

                  {/* Geometric decoration */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-10 left-10 w-20 h-20 border-2 border-white rotate-45" />
                    <div className="absolute bottom-10 right-10 w-16 h-16 border-2 border-white rounded-full" />
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-2xl font-display font-bold mb-3 group-hover:text-gradient transition-all">
                    {project.title}
                  </h3>

                  <p className="text-slate-400 mb-4 flex-1">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-mono bg-bg-primary/50 rounded-full text-slate-300 border border-white/5"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center space-x-4 pt-4 border-t border-white/5">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-sm text-accent-blue hover:text-accent-cyan transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>Demo na żywo</span>
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-sm text-slate-400 hover:text-white transition-colors"
                      >
                        <Github className="w-4 h-4" />
                        <span>Kod źródłowy</span>
                      </a>
                    )}
                  </div>
                </div>

                {/* Gradient Border Effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-accent-blue via-accent-purple to-accent-cyan rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity blur-xl -z-10" />
              </div>
            </motion.article>
          ))}
        </div>

        {/* View More */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://github.com/Sqooby"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-8 py-4 glass rounded-full font-semibold hover:glass-strong transition-all group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github className="w-5 h-5 text-accent-purple" />
            <span>Zobacz więcej na GitHub</span>
            <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
