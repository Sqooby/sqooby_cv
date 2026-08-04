import React from 'react';

const map = { neutral: 'var(--paper-100)', blue: 'var(--blue-100)', mint: 'var(--mint-100)', lilac: 'var(--lilac-100)', blush: 'var(--blush-100)', butter: 'var(--butter-100)' };

export function Tag({ children, tone = 'neutral', outlined = true, style, ...rest }) {
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 'var(--space-1)', padding: '4px var(--space-3)',
      borderRadius: 'var(--radius-pill)', background: map[tone] || map.neutral,
      border: outlined ? 'var(--border-hairline) solid var(--border-ink)' : 'none',
      fontFamily: 'var(--font-mono)', fontSize: 'var(--text-eyebrow)', letterSpacing: 'var(--tracking-eyebrow)',
      textTransform: 'uppercase', color: 'var(--ink-900)', ...style,
    }} {...rest}>{children}</span>
  );
}
