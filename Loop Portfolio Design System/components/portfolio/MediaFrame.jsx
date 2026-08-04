import React from 'react';
const palettes = {
  blue: 'linear-gradient(135deg,#D7E3FF 0%,#9DB8FF 45%,#2B5CFF 100%)',
  mint: 'linear-gradient(135deg,#D9F9E8 0%,#8FEFC0 45%,#33D18A 100%)',
  lilac:'linear-gradient(135deg,#EDE5FF 0%,#C9B4FF 45%,#8B5CF6 100%)',
  sunset:'linear-gradient(135deg,#FFC53D 0%,#FF5C9A 55%,#FF5A2B 100%)',
  paper:'linear-gradient(135deg,#FFFDF9 0%,#F0E4D5 100%)',
};

/** Outlined media well. Shows `src` if given, otherwise a labelled gradient placeholder. */
export function MediaFrame({ src, alt = '', palette = 'blue', ratio = '4 / 3', label = 'Add image', radius = 'var(--radius-media)', style, children, ...rest }) {
  return (
    <div className="loop-grain" style={{
      aspectRatio: ratio, overflow: 'hidden', position: 'relative',
      border: 'var(--outline-ink)', borderRadius: radius, background: palettes[palette] || palettes.blue,
      display: 'grid', placeItems: 'center', ...style,
    }} {...rest}>
      {src
        ? <img src={src} alt={alt} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
        : <span className="loop-eyebrow" style={{ color: 'var(--ink-900)', opacity: .6 }}>{label}</span>}
      {children}
    </div>
  );
}
