import React from 'react';

const tones = { paper: 'var(--paper-000)', sunken: 'var(--paper-100)', blue: 'var(--blue-100)', mint: 'var(--mint-100)', lilac: 'var(--lilac-100)', blush: 'var(--blush-100)', butter: 'var(--butter-100)', ink: 'var(--ink-900)' };

export function Card({ children, tone = 'paper', outlined = true, shadow = 'sticker', padding = 'var(--space-8)', style, ...rest }) {
  return (
    <div style={{
      background: tones[tone] || tones.paper, color: tone === 'ink' ? 'var(--paper-000)' : 'var(--text-primary)',
      border: outlined ? 'var(--outline-ink)' : 'none', borderRadius: 'var(--radius-card)', padding,
      boxShadow: shadow === 'none' ? 'none' : shadow === 'soft' ? 'var(--shadow-soft)' : 'var(--shadow-sticker)',
      ...style,
    }} {...rest}>{children}</div>
  );
}
