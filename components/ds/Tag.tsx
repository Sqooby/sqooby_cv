import clsx from 'clsx'
import type { ReactNode } from 'react'

type Tone = 'neutral' | 'paper' | 'blue' | 'mint' | 'lilac' | 'blush' | 'butter'

const tones: Record<Tone, string> = {
  neutral: 'bg-paper-100',
  paper: 'bg-paper-000',
  blue: 'bg-blue-100',
  mint: 'bg-mint-100',
  lilac: 'bg-lilac-100',
  blush: 'bg-blush-100',
  butter: 'bg-butter-100',
}

export function Tag({
  children,
  tone = 'neutral',
  className,
}: {
  children: ReactNode
  tone?: Tone
  className?: string
}) {
  return (
    <span
      className={clsx(
        'inline-flex items-center gap-1 rounded-full border border-ink-900 px-3 py-1',
        'font-mono text-eyebrow uppercase text-ink-900 whitespace-nowrap',
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  )
}
