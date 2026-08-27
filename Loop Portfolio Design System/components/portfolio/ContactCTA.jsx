import React from 'react';
import { Button } from '../core/Button.jsx';
import { Icon } from '../core/Icon.jsx';
import { Blob } from '../core/Blob.jsx';

export function ContactCTA({ headline = "Let's make something", email = 'hello@studio.com', note, action = 'Start a project', onAction, palette = 'sunset', style, ...rest }) {
  return (
    <section style={{ position: 'relative', overflow: 'hidden', padding: 'var(--space-20) var(--space-8)',
      background: 'var(--ink-900)', color: 'var(--paper-000)', border: 'var(--outline-ink)',
      borderRadius: 'var(--radius-2xl)', textAlign: 'center', ...style }} {...rest}>
      <Blob palette={palette} size={620} opacity={.55} style={{ position: 'absolute', left: '50%', top: '-30%', translate: '-50% 0', zIndex: 0 }} />
      <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--space-6)' }}>
        <h2 style={{ fontSize: 'var(--text-display-1)', letterSpacing: 'var(--tracking-hero)', lineHeight: 'var(--leading-display)', maxWidth: '14ch' }}>{headline}</h2>
        {note && <p style={{ color: 'var(--paper-300)', maxWidth: '46ch' }}>{note}</p>}
        <div style={{ display: 'flex', gap: 'var(--space-3)', flexWrap: 'wrap', justifyContent: 'center' }}>
          <Button tone="paper" size="lg" onClick={onAction} icon={<Icon name="arrow-right" size={18} />}>{action}</Button>
          <Button tone="ink" variant="outline" size="lg" href={'mailto:' + email}
            style={{ color: 'var(--paper-000)', borderColor: 'var(--paper-000)', boxShadow: '4px 4px 0 var(--paper-000)' }}>{email}</Button>
        </div>
      </div>
    </section>
  );
}
