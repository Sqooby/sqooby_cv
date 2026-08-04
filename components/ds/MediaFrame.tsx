import clsx from 'clsx'
import type { CSSProperties } from 'react'

const palettes: Record<string, string> = {
  blue: 'linear-gradient(135deg,#D7E3FF 0%,#9DB8FF 45%,#2B5CFF 100%)',
  mint: 'linear-gradient(135deg,#D9F9E8 0%,#8FEFC0 45%,#33D18A 100%)',
  lilac: 'linear-gradient(135deg,#EDE5FF 0%,#C9B4FF 45%,#8B5CF6 100%)',
  sunset: 'linear-gradient(135deg,#FFC53D 0%,#FF5C9A 55%,#FF5A2B 100%)',
  paper: 'linear-gradient(135deg,#FFFDF9 0%,#F0E4D5 100%)',
}

/** Outlined media well. Shows `src` if given, otherwise a labelled gradient placeholder. */
export function MediaFrame({
  src,
  alt = '',
  palette = 'blue',
  ratio = '4 / 3',
  label = 'Add image',
  className,
  style,
}: {
  src?: string
  alt?: string
  palette?: 'blue' | 'mint' | 'lilac' | 'sunset' | 'paper'
  ratio?: string
  label?: string
  className?: string
  style?: CSSProperties
}) {
  return (
    <div
      className={clsx(
        'loop-grain relative grid place-items-center overflow-hidden rounded-media border-2 border-ink-900',
        className,
      )}
      style={{ aspectRatio: ratio, background: palettes[palette] || palettes.blue, ...style }}
    >
      {src ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={src} alt={alt} className="block h-full w-full object-cover" />
      ) : (
        <span className="loop-eyebrow !text-ink-900 opacity-60">{label}</span>
      )}
    </div>
  )
}
