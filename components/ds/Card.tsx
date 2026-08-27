import clsx from 'clsx'
import type { ReactNode } from 'react'

type Tone = 'paper' | 'sunken' | 'blue' | 'mint' | 'lilac' | 'blush' | 'butter' | 'ink'

const tones: Record<Tone, string> = {
  paper: 'bg-paper-000 text-ink-900',
  sunken: 'bg-paper-100 text-ink-900',
  blue: 'bg-blue-100 text-ink-900',
  mint: 'bg-mint-100 text-ink-900',
  lilac: 'bg-lilac-100 text-ink-900',
  blush: 'bg-blush-100 text-ink-900',
  butter: 'bg-butter-100 text-ink-900',
  ink: 'bg-ink-900 text-paper-000',
}

export function Card({
  children,
  tone = 'paper',
  shadow = 'sticker',
  className,
}: {
  children: ReactNode
  tone?: Tone
  shadow?: 'sticker' | 'soft' | 'none'
  className?: string
}) {
  return (
    <div
      className={clsx(
        'rounded-card border-2 border-ink-900 p-8',
        tones[tone],
        shadow === 'sticker' && 'shadow-sticker',
        shadow === 'soft' && 'shadow-soft',
        className,
      )}
    >
      {children}
    </div>
  )
}
