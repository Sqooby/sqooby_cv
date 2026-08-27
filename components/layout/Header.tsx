'use client'

import { useState } from 'react'
import { ArrowRight, Menu, X } from 'lucide-react'
import { Pill } from '@/components/ds/Pill'
import { Button } from '@/components/ds/Button'

const navItems = [
  { name: 'Projekty', href: '#projects' },
  { name: 'O mnie', href: '#about' },
  { name: 'Umiejętności', href: '#skills' },
  { name: 'Doświadczenie', href: '#experience' },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed left-0 right-0 top-4 z-40 mx-4">
      <div className="mx-auto flex max-w-page items-center justify-between gap-4 rounded-full border-2 border-ink-900 bg-paper-000/80 py-2 pl-6 pr-2 shadow-sticker backdrop-blur-[14px]">
        <a
          href="#top"
          className="whitespace-nowrap font-display text-xl font-black text-ink-900 no-underline md:text-title-3"
          style={{ fontVariationSettings: '"wdth" 125', letterSpacing: '-0.02em' }}
        >
          MICHAŁ B.
        </a>

        <nav className="hidden items-center gap-2 lg:flex">
          {navItems.map((item) => (
            <Pill key={item.href} href={item.href} onClick={() => setIsOpen(false)}>
              {item.name}
            </Pill>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            size="sm"
            href="#contact"
            icon={<ArrowRight size={14} strokeWidth={2} />}
            className="!shadow-sticker-sm active:!shadow-sticker-press"
          >
            Kontakt
          </Button>
          <button
            type="button"
            aria-label={isOpen ? 'Zamknij menu' : 'Otwórz menu'}
            onClick={() => setIsOpen(!isOpen)}
            className="grid h-10 w-10 place-items-center rounded-full border-2 border-ink-900 bg-paper-000 text-ink-900 shadow-sticker-sm transition-all duration-fast ease-spring hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5 active:shadow-sticker-press lg:hidden"
          >
            {isOpen ? <X size={18} strokeWidth={2} /> : <Menu size={18} strokeWidth={2} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="mx-auto mt-3 flex max-w-page flex-col gap-2 rounded-card border-2 border-ink-900 bg-paper-000 p-4 shadow-sticker lg:hidden">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="rounded-full px-4 py-3 font-bold text-caption uppercase tracking-[0.04em] text-ink-900 no-underline hover:bg-paper-100"
            >
              {item.name}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}
