import clsx from 'clsx'
import type { MouseEventHandler, ReactNode } from 'react'

export function Pill({
  children,
  active = false,
  href,
  onClick,
  className,
}: {
  children: ReactNode
  active?: boolean
  href?: string
  onClick?: MouseEventHandler
  className?: string
}) {
  const Comp = href ? 'a' : 'button'
  return (
    <Comp
      href={href}
      type={href ? undefined : 'button'}
      onClick={onClick}
      className={clsx(
        'inline-flex h-9 items-center gap-2 rounded-full border-2 border-ink-900 px-4',
        'font-bold text-caption uppercase tracking-[0.04em] whitespace-nowrap cursor-pointer no-underline',
        'transition-all duration-fast ease-spring',
        active
          ? 'bg-ink-900 text-paper-000'
          : 'bg-paper-000 text-ink-900 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-sticker-sm',
        className,
      )}
    >
      {children}
    </Comp>
  )
}
