'use client'

import { useEffect, useRef } from 'react'
import { useInView, useMotionValue, animate } from 'framer-motion'
import clsx from 'clsx'

const tones: Record<string, string> = {
  paper: 'bg-paper-000 text-ink-900',
  mint: 'bg-mint-100 text-ink-900',
  blue: 'bg-blue-100 text-ink-900',
  butter: 'bg-butter-100 text-ink-900',
  ink: 'bg-ink-900 text-paper-000',
}

function parseValue(v: string): { num: number; suffix: string } {
  const match = v.match(/^(\d+)(.*)$/)
  return match ? { num: parseInt(match[1]), suffix: match[2] } : { num: 0, suffix: v }
}

function CountUp({ value }: { value: string }) {
  const { num, suffix } = parseValue(value)
  const ref = useRef<HTMLSpanElement>(null)
  const motionVal = useMotionValue(0)
  const inView = useInView(ref, { once: true, margin: '-50px' })

  useEffect(() => {
    if (!inView) return
    const controls = animate(motionVal, num, {
      duration: 1.4,
      ease: [0.16, 1, 0.3, 1],
      onUpdate(v) {
        if (ref.current) ref.current.textContent = Math.round(v) + suffix
      },
    })
    return controls.stop
  }, [inView, motionVal, num, suffix])

  return <span ref={ref}>0{suffix}</span>
}

export function StatBlock({
  value,
  label,
  tone = 'paper',
  className,
}: {
  value: string
  label: string
  tone?: 'paper' | 'mint' | 'blue' | 'butter' | 'ink'
  className?: string
}) {
  return (
    <div
      className={clsx(
        'flex flex-col gap-2 rounded-card border-2 border-ink-900 p-6 shadow-sticker',
        tones[tone],
        className,
      )}
    >
      <span className="font-display text-title-1 font-black">
        <CountUp value={value} />
      </span>
      <span className={clsx('loop-eyebrow', tone === 'ink' && '!text-paper-300')}>{label}</span>
    </div>
  )
}
