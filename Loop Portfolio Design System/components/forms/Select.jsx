import React from 'react';

export function Select({ label, options = [], value, defaultValue, onChange, disabled, style, ...rest }) {
  const [focus, setFocus] = React.useState(false);
  return (
    <label style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)', ...style }}>
      {label && <span className="loop-eyebrow" style={{ color: 'var(--text-primary)' }}>{label}</span>}
      <select value={value} defaultValue={defaultValue} onChange={onChange} disabled={disabled}
        onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
        style={{
          height: 'var(--control-h)', padding: '0 var(--space-5)', font: 'inherit', fontSize: 'var(--text-body-sm)',
          appearance: 'none', background: 'var(--paper-000)', color: 'var(--text-primary)',
          border: 'var(--outline-ink)', borderRadius: 'var(--radius-pill)', outline: 'none', cursor: 'pointer',
          boxShadow: focus ? 'var(--shadow-sticker)' : 'var(--shadow-sticker-sm)', transition: 'var(--transition-control)',
        }} {...rest}>
        {options.map((o) => {
          const opt = typeof o === 'string' ? { value: o, label: o } : o;
          return <option key={opt.value} value={opt.value}>{opt.label}</option>;
        })}
      </select>
    </label>
  );
}
