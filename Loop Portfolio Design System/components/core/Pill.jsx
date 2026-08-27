import React from 'react';

export function Pill({ children, tone = 'paper', active = false, href, onClick, style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  const bg = active ? 'var(--ink-900)' : tone === 'tint' ? 'var(--blue-100)' : 'var(--paper-000)';
  const Tag = href ? 'a' : 'button';
  return (
    <Tag href={href} type={href ? undefined : 'button'} onClick={onClick}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        display: 'inline-flex', alignItems: 'center', gap: 'var(--space-2)', height: 'var(--control-h-sm)',
        padding: '0 var(--space-4)', borderRadius: 'var(--radius-pill)', border: 'var(--outline-ink)',
        background: bg, color: active ? 'var(--paper-000)' : 'var(--ink-900)', textDecoration: 'none',
        fontFamily: 'var(--font-body)', fontWeight: 'var(--weight-bold)', fontSize: 'var(--text-caption)',
        letterSpacing: '0.04em', textTransform: 'uppercase', cursor: 'pointer', whiteSpace: 'nowrap',
        boxShadow: hover && !active ? 'var(--shadow-sticker-sm)' : 'none',
        transform: hover ? 'var(--hover-lift)' : 'none', transition: 'var(--transition-control)', ...style,
      }} {...rest}>{children}</Tag>
  );
}
