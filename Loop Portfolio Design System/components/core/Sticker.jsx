import React from 'react';
import { Icon } from './Icon.jsx';

const tones = { butter: 'var(--butter-500)', mint: 'var(--mint-300)', blush: 'var(--blush-300)', lilac: 'var(--lilac-300)', paper: 'var(--paper-000)' };

/** Rotated, outlined sticker used to decorate heroes and cards. */
export function Sticker({ children, icon, tone = 'butter', rotate = -6, float = true, style, ...rest }) {
  return (
    <div style={{
      display: 'inline-flex', alignItems: 'center', gap: 'var(--space-2)', padding: 'var(--space-2) var(--space-4)',
      background: tones[tone] || tones.butter, border: 'var(--outline-ink)', borderRadius: 'var(--radius-pill)',
      boxShadow: 'var(--shadow-sticker)', transform: 'rotate(' + rotate + 'deg)',
      fontFamily: 'var(--font-display)', fontWeight: 'var(--weight-black)', fontSize: 'var(--text-caption)',
      letterSpacing: '0.02em', textTransform: 'uppercase', color: 'var(--ink-900)',
      animation: float ? 'loop-float 6s var(--ease-in-out) infinite' : 'none', ...style,
    }} {...rest}>
      <style>{'@keyframes loop-float{0%,100%{translate:0 0}50%{translate:0 -8px}}'}</style>
      {icon && <Icon name={icon} size={16} />}{children}
    </div>
  );
}
