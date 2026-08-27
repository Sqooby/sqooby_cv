import { ArrowUpRight } from 'lucide-react'
import { MediaFrame } from './MediaFrame'
import { Tag } from './Tag'

export function ProjectCard({
  title,
  summary,
  tags = [],
  image,
  palette = 'blue',
  href = '#',
}: {
  title: string
  summary?: string
  tags?: string[]
  image?: string
  palette?: 'blue' | 'mint' | 'lilac' | 'sunset' | 'paper'
  href?: string
}) {
  const external = href.startsWith('http')
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className="group flex flex-col gap-5 rounded-card border-2 border-ink-900 bg-paper-000 p-4 text-ink-900 no-underline shadow-sticker transition-all duration-fast ease-spring hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-sticker-lg"
    >
      <MediaFrame src={image} alt={title} palette={palette} ratio="4 / 3" label={title} className="!rounded-2xl" />
      <div className="flex flex-col gap-3 px-2 pb-3">
        <h3 className="text-title-3">{title}</h3>
        {summary && <p className="text-body-sm text-ink-600">{summary}</p>}
        <div className="mt-1 flex flex-wrap items-center gap-2">
          {tags.map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
          <span className="ml-auto inline-flex items-center gap-1.5 font-mono text-eyebrow uppercase transition-transform duration-base group-hover:translate-x-[3px]">
            Zobacz
            <ArrowUpRight size={14} strokeWidth={2} />
          </span>
        </div>
      </div>
    </a>
  )
}
