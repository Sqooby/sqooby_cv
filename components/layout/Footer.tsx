'use client'

import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react'
import { motion } from 'framer-motion'

const socialLinks = [
  { icon: Github, href: 'https://github.com/Sqooby', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/michał-basznianin-9a704020a/', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:michal.basznianin3@gmail.com', label: 'Email' },
]

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative mt-32 border-t border-white/10">
      {/* Aurora effect */}
      <div className="aurora">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent-blue/20 rounded-full blur-3xl" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-accent-purple/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 relative">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Left - Brand */}
          <div>
            <h3 className="text-2xl font-display font-bold text-gradient mb-2">
              Portfolio
            </h3>
            <p className="text-slate-400 text-sm">
              Tworzę nowoczesne aplikacje
            </p>
          </div>

          {/* Center - Social Links */}
          <div className="flex justify-center space-x-6">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full glass hover:glass-strong transition-all group"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <social.icon className="w-5 h-5 text-slate-300 group-hover:text-accent-purple transition-colors" />
              </motion.a>
            ))}
          </div>

          {/* Right - Back to Top */}
          <div className="flex justify-end">
            <motion.button
              onClick={scrollToTop}
              className="flex items-center space-x-2 px-4 py-2 rounded-full glass hover:glass-strong transition-all group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-sm font-medium text-slate-300 group-hover:text-white">
                Wróć na górę
              </span>
              <ArrowUp className="w-4 h-4 text-accent-purple group-hover:animate-bounce" />
            </motion.button>
          </div>
        </div>

        {/* Bottom - Copyright */}
        <div className="mt-8 pt-8 border-t border-white/5 text-center">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Portfolio. Stworzone z{' '}
            <span className="text-accent-purple">Next.js</span> i{' '}
            <span className="text-accent-blue">Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
