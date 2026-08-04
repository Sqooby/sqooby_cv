import type { ReactNode } from 'react'

export function SectionHeading({
  eyebrow,
  title,
  description,
  action,
}: {
  eyebrow?: string
  title: ReactNode
  description?: ReactNode
  action?: ReactNode
}) {
  return (
    <div className="flex flex-wrap items-end justify-between gap-6">
      <div className="flex max-w-2xl flex-col gap-3">
        {eyebrow && <span className="loop-eyebrow">{eyebrow}</span>}
        <h2 className="text-display-2">{title}</h2>
        {description && <p className="max-w-[64ch] text-lead text-ink-600">{description}</p>}
      </div>
      {action}
    </div>
  )
}
