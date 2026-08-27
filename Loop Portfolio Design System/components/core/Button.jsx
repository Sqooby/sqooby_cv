import React from 'react';

const tones = {
  ink:    { background: 'var(--ink-900)',   color: 'var(--paper-000)' },
  paper:  { background: 'var(--paper-000)', color: 'var(--ink-900)' },
  blue:   { background: 'var(--blue-500)',  color: 'var(--paper-000)' },
  mint:   { background: 'var(--mint-300)',  color: 'var(--ink-900)' },
  lilac:  { background: 'var(--lilac-300)', color: 'var(--ink-900)' },
  butter: { background: 'var(--butter-500)',color: 'var(--ink-900)' },
};
const sizes = {
  sm: { height: 'var(--control-h-sm)', padding: '0 var(--space-4)', fontSize: 'var(--text-caption)' },
  md: { height: 'var(--control-h)',    padding: '0 var(--space-6)', fontSize: 'var(--text-body-sm)' },
  lg: { height: 'var(--control-h-lg)', padding: '0 var(--space-8)', fontSize: 'var(--text-body)' },
};

export function Button({ children, tone = 'ink', size = 'md', variant = 'solid', icon, iconPosition = 'right', disabled, href, onClick, style, ...rest }) {
  const [state, setState] = React.useState('idle');
  const base = tones[tone] || tones.ink;
  const solid = variant === 'solid';
  const s = {
    display: 'inline-flex', alignItems: 'center', gap: 'var(--space-2)', justifyContent: 'center',
    fontFamily: 'var(--font-body)', fontWeight: 'var(--weight-bold)', letterSpacing: '0.01em',
    textTransform: 'uppercase', textDecoration: 'none', cursor: disabled ? 'not-allowed' : 'pointer',
    borderRadius: 'var(--radius-control)', border: 'var(--outline-ink)',
    background: solid ? base.background : 'transparent',
    color: solid ? base.color : 'var(--ink-900)',
    boxShadow: state === 'active' ? 'var(--shadow-sticker-press)' : 'var(--shadow-sticker)',
    transform: state === 'active' ? 'var(--press-sink)' : state === 'hover' ? 'var(--hover-lift)' : 'none',
    transition: 'var(--transition-control)', opacity: disabled ? 0.4 : 1,
    ...sizes[size], ...style,
  };
  const handlers = disabled ? {} : {
    onMouseEnter: () => setState('hover'), onMouseLeave: () => setState('idle'),
    onMouseDown: () => setState('active'), onMouseUp: () => setState('hover'), onClick,
  };
  const content = <>{icon && iconPosition === 'left' ? icon : null}<span>{children}</span>{icon && iconPosition === 'right' ? icon : null}</>;
  if (href && !disabled) return <a href={href} style={s} {...handlers} {...rest}>{content}</a>;
  return <button type="button" style={s} disabled={disabled} {...handlers} {...rest}>{content}</button>;
}
