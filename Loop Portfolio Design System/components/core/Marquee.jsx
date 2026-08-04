import React from 'react';

export function Marquee({ items = [], tone = 'ink', speed = 'var(--marquee-speed)', separator = '✳', style, ...rest }) {
  const run = [...items, ...items];
  const inverse = tone === 'ink';
  return (
    <div style={{ overflow: 'hidden', background: inverse ? 'var(--ink-900)' : 'var(--butter-500)',
      color: inverse ? 'var(--paper-000)' : 'var(--ink-900)', borderTop: 'var(--outline-ink)', borderBottom: 'var(--outline-ink)',
      padding: 'var(--space-4) 0', ...style }} {...rest}>
      <style>{'@keyframes loop-marquee{from{transform:translateX(0)}to{transform:translateX(-50%)}}'}</style>
      <div style={{ display: 'flex', gap: 'var(--space-8)', width: 'max-content',
        animation: 'loop-marquee ' + speed + ' linear infinite' }}>
        {run.map((it, i) => (
          <span key={i} style={{ display: 'inline-flex', gap: 'var(--space-8)', alignItems: 'center',
            fontFamily: 'var(--font-display)', fontWeight: 'var(--weight-black)', fontSize: 'var(--text-title-3)',
            letterSpacing: 'var(--tracking-title)', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>
            {it}<span style={{ opacity: .5 }}>{separator}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
