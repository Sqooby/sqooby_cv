import React from 'react';

export function Textarea({ label, hint, rows = 5, placeholder, value, defaultValue, onChange, disabled, style, ...rest }) {
  const [focus, setFocus] = React.useState(false);
  return (
    <label style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)', ...style }}>
      {label && <span className="loop-eyebrow" style={{ color: 'var(--text-primary)' }}>{label}</span>}
      <textarea rows={rows} placeholder={placeholder} value={value} defaultValue={defaultValue} disabled={disabled}
        onChange={onChange} onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
        style={{
          padding: 'var(--space-4) var(--space-5)', font: 'inherit', fontSize: 'var(--text-body-sm)',
          resize: 'vertical', background: 'var(--paper-000)', color: 'var(--text-primary)',
          border: 'var(--outline-ink)', borderRadius: 'var(--radius-lg)', outline: 'none',
          boxShadow: focus ? 'var(--shadow-sticker)' : 'var(--shadow-sticker-sm)',
          transform: focus ? 'var(--hover-lift)' : 'none', transition: 'var(--transition-control)',
        }} {...rest} />
      {hint && <span style={{ fontSize: 'var(--text-caption)', color: 'var(--text-muted)' }}>{hint}</span>}
    </label>
  );
}
