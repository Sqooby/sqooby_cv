import React from 'react';
import { Icon } from './Icon.jsx';

const sizes = { sm: 36, md: 48, lg: 60 };

export function IconButton({ name, label, tone = 'paper', size = 'md', onClick, style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  const px = sizes[size] || sizes.md;
  const inverse = tone === 'ink' || tone === 'blue';
  return (
    <button type="button" aria-label={label} onClick={onClick}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        width: px, height: px, display: 'inline-grid', placeItems: 'center', cursor: 'pointer',
        borderRadius: 'var(--radius-pill)', border: 'var(--outline-ink)',
        background: tone === 'ink' ? 'var(--ink-900)' : tone === 'blue' ? 'var(--blue-500)' : 'var(--paper-000)',
        boxShadow: hover ? 'var(--shadow-sticker)' : 'var(--shadow-sticker-sm)',
        transform: hover ? 'var(--hover-lift)' : 'none', transition: 'var(--transition-control)', ...style,
      }} {...rest}>
      <Icon name={name} size={px * 0.42} tone={inverse ? 'inverse' : 'ink'} />
    </button>
  );
}
