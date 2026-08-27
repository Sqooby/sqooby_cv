import type { ReactNode } from 'react'

const dot: Record<string, string> = {
  available: '#33D18A',
  busy: '#FFC53D',
  closed: '#FF5A2B',
}

export function Badge({
  children,
  status = 'available',
}: {
  children: ReactNode
  status?: 'available' | 'busy' | 'closed'
}) {
  return (
    <span className="inline-flex h-8 items-center gap-2 rounded-full border-2 border-ink-900 bg-paper-000 px-4 font-mono text-eyebrow uppercase">
      <span
        className="h-2 w-2 rounded-full"
        style={{ background: dot[status], boxShadow: `0 0 0 3px ${dot[status]}4D` }}
      />
      {children}
    </span>
  )
}
