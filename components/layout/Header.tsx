'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const navItems = [
  { name: 'Start', href: '#home' },
  { name: 'O mnie', href: '#about' },
  { name: 'Umiejętności', href: '#skills' },
  { name: 'Projekty', href: '#projects' },
  { name: 'Doświadczenie', href: '#experience' },
  { name: 'Kontakt', href: '#contact' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)

      const windowHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrolled = (window.scrollY / windowHeight) * 100
      setScrollProgress(scrolled)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <>
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 z-[100] bg-gradient-to-r from-accent-blue via-accent-purple to-accent-cyan">
        <div
          className="h-full bg-white/30 transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'glass-strong py-3' : 'bg-transparent py-6'
        }`}
      >
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.a
              href="#home"
              onClick={(e) => handleNavClick(e, '#home')}
              className="text-2xl font-display font-bold relative group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-gradient">Portfolio</span>
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-accent-blue to-accent-purple group-hover:w-full transition-all duration-300" />
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-white transition-colors relative group"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  {item.name}
                  <span className="absolute inset-0 rounded-lg bg-white/5 scale-0 group-hover:scale-100 transition-transform duration-300" />
                </motion.a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg glass"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <div className="glass-strong mt-4 mx-4 rounded-2xl p-4 space-y-2">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="block px-4 py-3 text-sm font-medium text-slate-300 hover:text-white transition-colors rounded-lg hover:bg-white/5"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    {item.name}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  )
}
