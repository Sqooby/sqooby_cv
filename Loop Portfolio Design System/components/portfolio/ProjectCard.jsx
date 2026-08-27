import React from 'react';
import { MediaFrame } from './MediaFrame.jsx';
import { Tag } from '../core/Tag.jsx';
import { Icon } from '../core/Icon.jsx';

export function ProjectCard({ title, summary, tags = [], year, image, palette = 'blue', href = '#', size = 'md', onClick, style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  return (
    <a href={href} onClick={onClick} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        display: 'flex', flexDirection: 'column', gap: 'var(--space-5)', textDecoration: 'none', color: 'var(--text-primary)',
        background: 'var(--paper-000)', border: 'var(--outline-ink)', borderRadius: 'var(--radius-lg)',
        padding: 'var(--space-4)', boxShadow: hover ? 'var(--shadow-sticker-lg)' : 'var(--shadow-sticker)',
        transform: hover ? 'var(--hover-lift)' : 'none', transition: 'var(--transition-control)', ...style,
      }} {...rest}>
      <MediaFrame src={image} alt={title} palette={palette} ratio={size === 'lg' ? '16 / 10' : '4 / 3'} radius="var(--radius-md)" label={title} />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', padding: '0 var(--space-2) var(--space-3)' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 'var(--space-4)' }}>
          <h3 style={{ fontSize: size === 'lg' ? 'var(--text-title-1)' : 'var(--text-title-3)', letterSpacing: 'var(--tracking-title)' }}>{title}</h3>
          {year && <span className="loop-eyebrow">{year}</span>}
        </div>
        {summary && <p style={{ fontSize: 'var(--text-body-sm)', color: 'var(--text-secondary)' }}>{summary}</p>}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-2)', alignItems: 'center', marginTop: 'var(--space-1)' }}>
          {tags.map((t) => <Tag key={t}>{t}</Tag>)}
          <span style={{ marginLeft: 'auto', display: 'inline-flex', alignItems: 'center', gap: 6,
            fontFamily: 'var(--font-mono)', fontSize: 'var(--text-eyebrow)', textTransform: 'uppercase',
            letterSpacing: 'var(--tracking-eyebrow)', transform: hover ? 'translateX(3px)' : 'none',
            transition: 'transform var(--dur-base) var(--ease-out)' }}>
            View<Icon name="arrow-up-right" size={14} />
          </span>
        </div>
      </div>
    </a>
  );
}
