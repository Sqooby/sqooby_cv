import type { CSSProperties } from 'react'

const palettes: Record<string, [string, string, string]> = {
  blue: ['#2B5CFF', '#9DB8FF', '#D7E3FF'],
  mint: ['#33D18A', '#8FEFC0', '#D9F9E8'],
  lilac: ['#8B5CF6', '#C9B4FF', '#EDE5FF'],
  sunset: ['#FF5A2B', '#FF5C9A', '#FFC53D'],
}

/** Soft 3D-looking gradient blob used behind heroes and cards. Pure CSS. */
export function Blob({
  palette = 'blue',
  size = 480,
  opacity = 1,
  className,
  style,
}: {
  palette?: 'blue' | 'mint' | 'lilac' | 'sunset'
  size?: number
  opacity?: number
  className?: string
  style?: CSSProperties
}) {
  const [a, b, c] = palettes[palette] || palettes.blue
  return (
    <div
      aria-hidden="true"
      className={className}
      style={{ width: size, height: size, opacity, pointerEvents: 'none', ...style }}
    >
      <div
        className="h-full w-full animate-blob"
        style={{
          borderRadius: '58% 42% 47% 53% / 46% 55% 45% 54%',
          background: `radial-gradient(circle at 30% 28%, ${c} 0%, ${b} 38%, ${a} 78%)`,
          filter: 'blur(var(--blob-blur))',
        }}
      />
    </div>
  )
}
