import clsx from 'clsx'
import type { CSSProperties, ReactNode } from 'react'

const tones: Record<string, string> = {
  butter: 'bg-butter-500',
  mint: 'bg-mint-300',
  blush: 'bg-blush-300',
  lilac: 'bg-lilac-300',
  paper: 'bg-paper-000',
}

/** Rotated, outlined sticker used to decorate heroes and cards. */
export function Sticker({
  children,
  icon,
  tone = 'butter',
  rotate = -6,
  className,
  style,
}: {
  children: ReactNode
  icon?: ReactNode
  tone?: 'butter' | 'mint' | 'blush' | 'lilac' | 'paper'
  rotate?: number
  className?: string
  style?: CSSProperties
}) {
  return (
    <div
      className={clsx(
        'inline-flex items-center gap-2 rounded-full border-2 border-ink-900 px-4 py-2',
        'font-display font-black text-caption uppercase tracking-[0.02em] text-ink-900',
        'shadow-sticker animate-float',
        tones[tone],
        className,
      )}
      style={{ rotate: `${rotate}deg`, ...style }}
    >
      {icon}
      {children}
    </div>
  )
}
