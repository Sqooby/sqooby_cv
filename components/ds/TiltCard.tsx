'use client'

import { useRef, useState, type ReactNode } from 'react'

/** Pointer-reactive 3D tilt wrapper. Wrap any card/media to give it depth. */
export function TiltCard({
  children,
  max = 10,
  lift = 10,
  glare = true,
  className,
}: {
  children: ReactNode
  max?: number
  lift?: number
  glare?: boolean
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [t, setT] = useState({ rx: 0, ry: 0, mx: 50, my: 50, on: false })

  const move = (e: React.MouseEvent) => {
    if (!ref.current) return
    const r = ref.current.getBoundingClientRect()
    const px = (e.clientX - r.left) / r.width
    const py = (e.clientY - r.top) / r.height
    setT({ rx: (0.5 - py) * max * 2, ry: (px - 0.5) * max * 2, mx: px * 100, my: py * 100, on: true })
  }

  return (
    <div
      ref={ref}
      onMouseMove={move}
      onMouseLeave={() => setT({ rx: 0, ry: 0, mx: 50, my: 50, on: false })}
      className={className}
      style={{ perspective: 'var(--perspective)' }}
    >
      <div
        style={{
          position: 'relative',
          transformStyle: 'preserve-3d',
          transform: `rotateX(${t.rx}deg) rotateY(${t.ry}deg) translateZ(${t.on ? lift : 0}px)`,
          transition: `transform ${t.on ? 'var(--dur-fast)' : 'var(--dur-slow)'} var(--ease-out)`,
          filter: t.on ? 'drop-shadow(0 40px 80px rgba(13,12,11,.34))' : 'none',
        }}
      >
        {children}
        {glare && (
          <span
            aria-hidden="true"
            style={{
              position: 'absolute',
              inset: 0,
              borderRadius: 'inherit',
              pointerEvents: 'none',
              opacity: t.on ? 0.35 : 0,
              transition: 'opacity var(--dur-base) var(--ease-out)',
              background: `radial-gradient(280px circle at ${t.mx}% ${t.my}%, rgba(255,255,255,.9), transparent 60%)`,
            }}
          />
        )}
      </div>
    </div>
  )
}
