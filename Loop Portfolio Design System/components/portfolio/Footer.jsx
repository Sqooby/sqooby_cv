import React from 'react';
import { Icon } from '../core/Icon.jsx';

export function Footer({ brand = 'Studio', tagline, links = [], socials = [], year = new Date().getFullYear(), style, ...rest }) {
  return (
    <footer style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-10)', padding: 'var(--space-12) var(--space-8)',
      borderTop: 'var(--outline-ink)', ...style }} {...rest}>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-10)', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
          <span style={{ fontFamily: 'var(--font-display)', fontWeight: 'var(--weight-black)', fontSize: 'var(--text-title-1)',
            letterSpacing: 'var(--tracking-display)', fontVariationSettings: '"wdth" 112' }}>{brand}</span>
          {tagline && <span style={{ color: 'var(--text-secondary)', maxWidth: '34ch' }}>{tagline}</span>}
        </div>
        <nav style={{ display: 'flex', gap: 'var(--space-8)', flexWrap: 'wrap' }}>
          {links.map((l) => <a key={l.label} href={l.href || '#'} style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-eyebrow)',
            letterSpacing: 'var(--tracking-eyebrow)', textTransform: 'uppercase', color: 'var(--text-primary)', textDecoration: 'none' }}>{l.label}</a>)}
        </nav>
        <div style={{ display: 'flex', gap: 'var(--space-3)' }}>
          {socials.map((s) => (
            <a key={s.label} href={s.href || '#'} aria-label={s.label}
              style={{ width: 40, height: 40, display: 'grid', placeItems: 'center', border: 'var(--outline-ink)',
                borderRadius: 'var(--radius-pill)', background: 'var(--paper-000)', boxShadow: 'var(--shadow-sticker-sm)' }}>
              <Icon name={s.icon} size={16} />
            </a>
          ))}
        </div>
      </div>
      <span className="loop-eyebrow">© {year} {brand} — built with too much coffee</span>
    </footer>
  );
}
