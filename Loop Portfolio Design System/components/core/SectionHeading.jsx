import React from 'react';

export function SectionHeading({ eyebrow, title, description, align = 'left', action, style, ...rest }) {
  return (
    <div style={{ display: 'flex', gap: 'var(--space-6)', alignItems: 'flex-end',
      justifyContent: 'space-between', flexWrap: 'wrap',
      textAlign: align, ...style }} {...rest}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', maxWidth: '32ch' }}>
        {eyebrow && <span className="loop-eyebrow">{eyebrow}</span>}
        <h2 style={{ fontSize: 'var(--text-display-2)', letterSpacing: 'var(--tracking-display)', lineHeight: 'var(--leading-display)' }}>{title}</h2>
        {description && <p style={{ fontSize: 'var(--text-lead)', color: 'var(--text-secondary)', maxWidth: 'var(--measure)' }}>{description}</p>}
      </div>
      {action}
    </div>
  );
}
