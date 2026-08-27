import { Github, Linkedin, Mail } from 'lucide-react'

const links = [
  { label: 'Projekty', href: '#projects' },
  { label: 'O mnie', href: '#about' },
  { label: 'Umiejętności', href: '#skills' },
  { label: 'Kontakt', href: '#contact' },
]

const socials = [
  { icon: Github, href: 'https://github.com/Sqooby', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/michał-basznianin-9a704020a/', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:michal.basznianin3@gmail.com', label: 'Email' },
]

export default function Footer() {
  return (
    <footer className="border-t-2 border-ink-900">
      <div className="container-page flex flex-col gap-10 py-12">
        <div className="flex flex-wrap items-start justify-between gap-10">
          <div className="flex flex-col gap-2">
            <span
              className="font-display text-title-1 font-black"
              style={{ fontVariationSettings: '"wdth" 125', letterSpacing: '-0.04em' }}
            >
              MICHAŁ BASZNIANIN
            </span>
            <span className="max-w-[34ch] text-ink-600">
              Flutter developer. Aplikacje mobilne i strony, które działają.
            </span>
          </div>

          <nav className="flex flex-wrap gap-8">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-mono text-eyebrow uppercase text-ink-900 no-underline hover:text-lilac-500"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                target="_blank"
                rel="noopener noreferrer"
                className="grid h-10 w-10 place-items-center rounded-full border-2 border-ink-900 bg-paper-000 text-ink-900 shadow-sticker-sm transition-all duration-fast ease-spring hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-sticker"
              >
                <s.icon size={16} strokeWidth={2} />
              </a>
            ))}
          </div>
        </div>

        <span className="loop-eyebrow">
          © {new Date().getFullYear()} Michał Basznianin — zbudowane na zbyt dużej ilości kawy
        </span>
      </div>
    </footer>
  )
}
