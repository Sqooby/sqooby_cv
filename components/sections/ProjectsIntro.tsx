'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'

/**
 * Full-bleed butter screen that the zoom seal lands on.
 * "Wybrane projekty" fades in via opacity as you scroll onto it.
 */
export default function ProjectsIntro() {
  const ref = useRef<HTMLElement>(null)
  const reduceMotion = useReducedMotion()

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center center'],
  })

  const opacity = useTransform(scrollYProgress, [0.2, 0.9], [0, 1])

  return (
    <section
      ref={ref}
      aria-label="Wybrane projekty"
      className="relative flex h-screen items-center justify-center overflow-hidden bg-clay-500"
    >
      <motion.h2
        className="px-6 text-center font-display text-display-1 font-black text-ink-900"
        style={{
          fontVariationSettings: '"wdth" 118',
          opacity: reduceMotion ? 1 : opacity,
        }}
      >
        Wybrane projekty
      </motion.h2>
    </section>
  )
}
