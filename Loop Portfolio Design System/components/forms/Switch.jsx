import React from 'react';

export function Switch({ label, checked, defaultChecked, onChange, disabled, style, ...rest }) {
  const [inner, setInner] = React.useState(!!defaultChecked);
  const on = checked !== undefined ? checked : inner;
  const toggle = () => { if (disabled) return; const next = !on; if (checked === undefined) setInner(next); onChange && onChange(next); };
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 'var(--space-3)', opacity: disabled ? .5 : 1, ...style }}>
      <button type="button" role="switch" aria-checked={on} aria-label={typeof label === 'string' ? label : 'toggle'} onClick={toggle}
        style={{ width: 56, height: 32, padding: 3, display: 'flex', alignItems: 'center', cursor: disabled ? 'not-allowed' : 'pointer',
          border: 'var(--outline-ink)', borderRadius: 'var(--radius-pill)', background: on ? 'var(--blue-500)' : 'var(--paper-200)',
          boxShadow: 'var(--shadow-sticker-sm)', transition: 'background-color var(--dur-base) var(--ease-out)' }} {...rest}>
        <span style={{ width: 22, height: 22, borderRadius: 'var(--radius-pill)', background: 'var(--paper-000)',
          border: 'var(--border-hairline) solid var(--border-ink)',
          transform: on ? 'translateX(24px)' : 'translateX(0)', transition: 'transform var(--dur-base) var(--ease-spring)' }} />
      </button>
      {label && <span style={{ fontSize: 'var(--text-body-sm)' }}>{label}</span>}
    </span>
  );
}
