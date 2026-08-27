import clsx from 'clsx'
import type { ReactNode } from 'react'

type Tone = 'ink' | 'paper' | 'blue' | 'mint' | 'lilac' | 'butter'
type Size = 'sm' | 'md' | 'lg'

const tones: Record<Tone, string> = {
  ink: 'bg-ink-900 text-paper-000',
  paper: 'bg-paper-000 text-ink-900',
  blue: 'bg-blue-500 text-paper-000',
  mint: 'bg-mint-300 text-ink-900',
  lilac: 'bg-lilac-300 text-ink-900',
  butter: 'bg-butter-500 text-ink-900',
}

const sizes: Record<Size, string> = {
  sm: 'h-9 px-4 text-caption',
  md: 'h-12 px-6 text-body-sm',
  lg: 'h-[60px] px-8 text-body',
}

interface ButtonProps {
  children: ReactNode
  tone?: Tone
  size?: Size
  icon?: ReactNode
  iconPosition?: 'left' | 'right'
  href?: string
  target?: string
  rel?: string
  download?: boolean | string
  type?: 'button' | 'submit'
  disabled?: boolean
  onClick?: () => void
  className?: string
}

export function Button({
  children,
  tone = 'ink',
  size = 'md',
  icon,
  iconPosition = 'right',
  href,
  target,
  rel,
  download,
  type = 'button',
  disabled,
  onClick,
  className,
}: ButtonProps) {
  const classes = clsx(
    'inline-flex items-center justify-center gap-2 whitespace-nowrap font-bold uppercase tracking-[0.01em]',
    'rounded-full border-2 border-ink-900 no-underline cursor-pointer select-none',
    'shadow-sticker transition-all duration-fast ease-spring',
    'hover:-translate-x-0.5 hover:-translate-y-0.5',
    'active:translate-x-0.5 active:translate-y-0.5 active:shadow-sticker-press',
    disabled && 'opacity-40 pointer-events-none',
    tones[tone],
    sizes[size],
    className,
  )

  const content = (
    <>
      {icon && iconPosition === 'left' ? icon : null}
      <span>{children}</span>
      {icon && iconPosition === 'right' ? icon : null}
    </>
  )

  if (href && !disabled) {
    return (
      <a href={href} target={target} rel={rel} download={download} className={classes} onClick={onClick}>
        {content}
      </a>
    )
  }

  return (
    <button type={type} disabled={disabled} className={classes} onClick={onClick}>
      {content}
    </button>
  )
}
