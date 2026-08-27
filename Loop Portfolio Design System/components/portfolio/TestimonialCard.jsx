import React from 'react';
export function TestimonialCard({ quote, author, role, tone = 'blush', avatar, style, ...rest }) {
  const bg = { blush: 'var(--blush-100)', mint: 'var(--mint-100)', lilac: 'var(--lilac-100)', paper: 'var(--paper-000)' }[tone] || 'var(--blush-100)';
  return (
    <figure style={{ margin: 0, display: 'flex', flexDirection: 'column', gap: 'var(--space-6)', padding: 'var(--space-8)',
      background: bg, border: 'var(--outline-ink)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-sticker)', ...style }} {...rest}>
      <blockquote style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 'var(--weight-bold)',
        fontSize: 'var(--text-title-3)', lineHeight: 'var(--leading-tight)', letterSpacing: 'var(--tracking-title)' }}>
        “{quote}”
      </blockquote>
      <figcaption style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
        {avatar && <img src={avatar} alt="" style={{ width: 40, height: 40, borderRadius: 'var(--radius-pill)', border: 'var(--outline-ink)', objectFit: 'cover' }} />}
        <span style={{ display: 'flex', flexDirection: 'column' }}>
          <strong style={{ fontSize: 'var(--text-body-sm)' }}>{author}</strong>
          <span className="loop-eyebrow">{role}</span>
        </span>
      </figcaption>
    </figure>
  );
}
