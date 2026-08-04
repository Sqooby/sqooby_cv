export function Marquee({
  items,
  separator = '✳',
}: {
  items: string[]
  separator?: string
}) {
  const run = [...items, ...items]
  return (
    <div className="overflow-hidden border-y-2 border-ink-900 bg-ink-900 py-4 text-paper-000">
      <div className="flex w-max animate-marquee gap-8">
        {run.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-8 whitespace-nowrap font-display text-title-3 font-black uppercase"
          >
            {item}
            <span aria-hidden="true">{separator}</span>
          </span>
        ))}
      </div>
    </div>
  )
}
