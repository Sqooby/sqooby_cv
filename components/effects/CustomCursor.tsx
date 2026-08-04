'use client'

import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export function CustomCursor() {
  const [visible, setVisible] = useState(false)
  const mouseX = useMotionValue(-100)
  const mouseY = useMotionValue(-100)

  const ringX = useSpring(mouseX, { stiffness: 180, damping: 18, mass: 0.08 })
  const ringY = useSpring(mouseY, { stiffness: 180, damping: 18, mass: 0.08 })

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
      if (!visible) setVisible(true)
    }
    const hide = () => setVisible(false)
    window.addEventListener('mousemove', move)
    window.addEventListener('mouseleave', hide)
    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mouseleave', hide)
    }
  }, [mouseX, mouseY, visible])

  if (!visible) return null

  return (
    <>
      {/* Dot — instant */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed z-[9999] h-2 w-2 rounded-full bg-ink-900"
        style={{ x: mouseX, y: mouseY, translateX: '-50%', translateY: '-50%' }}
      />
      {/* Ring — spring lag */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed z-[9999] h-9 w-9 rounded-full border-2 border-ink-900"
        style={{ x: ringX, y: ringY, translateX: '-50%', translateY: '-50%' }}
      />
    </>
  )
}
