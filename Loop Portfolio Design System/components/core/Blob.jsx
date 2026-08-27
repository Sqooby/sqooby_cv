import React from 'react';

const palettes = {
  blue:  ['#2B5CFF', '#9DB8FF', '#D7E3FF'],
  mint:  ['#33D18A', '#8FEFC0', '#D9F9E8'],
  lilac: ['#8B5CF6', '#C9B4FF', '#EDE5FF'],
  sunset:['#FF5A2B', '#FF5C9A', '#FFC53D'],
};

/** Soft 3D-looking gradient blob used behind heroes and cards. Pure CSS — no image assets. */
export function Blob({ palette = 'blue', size = 480, blur = 'var(--blob-blur)', spin = true, opacity = 1, style, ...rest }) {
  const [a, b, c] = palettes[palette] || palettes.blue;
  return (
    <div aria-hidden="true" style={{ width: size, height: size, opacity, pointerEvents: 'none', ...style }} {...rest}>
      <style>{'@keyframes loop-blob{0%{transform:rotate(0deg) scale(1)}50%{transform:rotate(180deg) scale(1.08)}100%{transform:rotate(360deg) scale(1)}}'}</style>
      <div style={{
        width: '100%', height: '100%',
        borderRadius: '58% 42% 47% 53% / 46% 55% 45% 54%',
        background: 'radial-gradient(circle at 30% 28%, ' + c + ' 0%, ' + b + ' 38%, ' + a + ' 78%)',
        filter: 'blur(' + blur + ')',
        animation: spin ? 'loop-blob 24s var(--ease-in-out) infinite' : 'none',
      }} />
    </div>
  );
}
