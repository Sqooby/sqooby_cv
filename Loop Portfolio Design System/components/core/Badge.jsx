import React from 'react';

const dot = { available: 'var(--mint-500)', busy: 'var(--butter-500)', closed: 'var(--clay-500)' };

export function Badge({ children, status = 'available', style, ...rest }) {
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 'var(--space-2)', height: 32, padding: '0 var(--space-4)',
      borderRadius: 'var(--radius-pill)', border: 'var(--outline-ink)', background: 'var(--paper-000)',
      fontFamily: 'var(--font-mono)', fontSize: 'var(--text-eyebrow)', letterSpacing: 'var(--tracking-eyebrow)',
      textTransform: 'uppercase', ...style,
    }} {...rest}>
      <span style={{ width: 8, height: 8, borderRadius: 'var(--radius-pill)', background: dot[status], boxShadow: '0 0 0 3px color-mix(in oklab,' + dot[status] + ' 30%,transparent)' }} />
      {children}
    </span>
  );
}
