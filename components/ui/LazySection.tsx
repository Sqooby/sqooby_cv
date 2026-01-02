'use client'

import { ReactNode, useEffect, useRef, useState } from 'react'

interface LazySectionProps {
  children: ReactNode
  threshold?: number
}

export default function LazySection({ children, threshold = 0.1 }: LazySectionProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          // Once visible, stop observing
          if (ref.current) {
            observer.unobserve(ref.current)
          }
        }
      },
      { threshold }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [threshold])

  return (
    <div ref={ref}>
      {isVisible ? children : <div style={{ minHeight: '200px' }} />}
    </div>
  )
}
