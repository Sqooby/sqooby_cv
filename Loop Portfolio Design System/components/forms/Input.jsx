import React from 'react';

export function Input({ label, hint, error, value, defaultValue, placeholder, type = 'text', disabled, onChange, style, ...rest }) {
  const [focus, setFocus] = React.useState(false);
  return (
    <label style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)', ...style }}>
      {label && <span className="loop-eyebrow" style={{ color: 'var(--text-primary)' }}>{label}</span>}
      <input type={type} value={value} defaultValue={defaultValue} placeholder={placeholder} disabled={disabled}
        onChange={onChange} onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
        style={{
          height: 'var(--control-h)', padding: '0 var(--space-5)', font: 'inherit', fontSize: 'var(--text-body-sm)',
          color: 'var(--text-primary)', background: disabled ? 'var(--paper-200)' : 'var(--paper-000)',
          border: 'var(--outline-ink)', borderColor: error ? 'var(--status-critical)' : 'var(--border-ink)',
          borderRadius: 'var(--radius-pill)', outline: 'none',
          boxShadow: focus ? 'var(--shadow-sticker)' : 'var(--shadow-sticker-sm)',
          transform: focus ? 'var(--hover-lift)' : 'none', transition: 'var(--transition-control)',
        }} {...rest} />
      {(hint || error) && <span style={{ fontSize: 'var(--text-caption)', color: error ? 'var(--status-critical)' : 'var(--text-muted)' }}>{error || hint}</span>}
    </label>
  );
}
