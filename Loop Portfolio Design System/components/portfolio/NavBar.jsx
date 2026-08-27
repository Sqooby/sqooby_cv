import React from 'react';
import { Pill } from '../core/Pill.jsx';
import { Button } from '../core/Button.jsx';
import { IconButton } from '../core/IconButton.jsx';
import { Icon } from '../core/Icon.jsx';

export function NavBar({ brand = 'Studio', items = [], activeItem, onNavigate, cta = 'Get in touch', onCta, sticky = true, style, ...rest }) {
  return (
    <header style={{ position: sticky ? 'sticky' : 'static', top: 0, zIndex: 40,
      display: 'flex', alignItems: 'center', gap: 'var(--space-4)', justifyContent: 'space-between',
      padding: 'var(--space-3) var(--space-4) var(--space-3) var(--space-6)', margin: 'var(--space-4)',
      background: 'color-mix(in oklab,var(--paper-000) 82%,transparent)', backdropFilter: 'blur(14px)',
      border: 'var(--outline-ink)', borderRadius: 'var(--radius-pill)', boxShadow: 'var(--shadow-sticker)', ...style }} {...rest}>
      <a href="#top" style={{ fontFamily: 'var(--font-display)', fontWeight: 'var(--weight-black)', fontSize: 'var(--text-title-3)',
        letterSpacing: 'var(--tracking-title)', textDecoration: 'none', color: 'var(--ink-900)', fontVariationSettings: '"wdth" 112' }}>{brand}</a>
      <nav style={{ display: 'flex', gap: 'var(--space-2)', alignItems: 'center' }}>
        {items.map((it) => {
          const item = typeof it === 'string' ? { label: it, id: it } : it;
          return <Pill key={item.id} active={activeItem === item.id} href={item.href}
            onClick={onNavigate ? (e) => { e.preventDefault(); onNavigate(item.id); } : undefined}>{item.label}</Pill>;
        })}
      </nav>
      <div style={{ display: 'flex', gap: 'var(--space-2)', alignItems: 'center' }}>
        <IconButton name="plus" label="More" size="sm" />
        <Button size="sm" tone="ink" onClick={onCta} icon={<Icon name="arrow-right" size={14} tone="inverse" />}>{cta}</Button>
      </div>
    </header>
  );
}
