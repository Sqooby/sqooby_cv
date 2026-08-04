import React from 'react';
export function StatBlock({ value, label, tone = 'paper', style, ...rest }) {
  const bg = { paper: 'var(--paper-000)', mint: 'var(--mint-100)', blue: 'var(--blue-100)', butter: 'var(--butter-100)', ink: 'var(--ink-900)' }[tone] || 'var(--paper-000)';
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)', padding: 'var(--space-6)',
      background: bg, color: tone === 'ink' ? 'var(--paper-000)' : 'var(--text-primary)',
      border: 'var(--outline-ink)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-sticker)', ...style }} {...rest}>
      <span style={{ fontFamily: 'var(--font-display)', fontWeight: 'var(--weight-black)', fontSize: 'var(--text-title-1)',
        lineHeight: 'var(--leading-title)', letterSpacing: 'var(--tracking-display)' }}>{value}</span>
      <span className="loop-eyebrow" style={{ color: tone === 'ink' ? 'var(--paper-300)' : 'var(--text-muted)' }}>{label}</span>
    </div>
  );
}
