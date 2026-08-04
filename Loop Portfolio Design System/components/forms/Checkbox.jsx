import React from 'react';

import { Icon } from '../core/Icon.jsx';

export function Checkbox({ label, checked, defaultChecked, onChange, disabled, style, ...rest }) {
  const [inner, setInner] = React.useState(!!defaultChecked);
  const on = checked !== undefined ? checked : inner;
  return (
    <label style={{ display: 'inline-flex', alignItems: 'center', gap: 'var(--space-3)', cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? .5 : 1, ...style }}>
      <input type="checkbox" checked={on} disabled={disabled}
        onChange={(e) => { if (checked === undefined) setInner(e.target.checked); onChange && onChange(e); }}
        style={{ position: 'absolute', opacity: 0, width: 0, height: 0 }} {...rest} />
      <span style={{ width: 26, height: 26, display: 'grid', placeItems: 'center', flex: '0 0 auto',
        border: 'var(--outline-ink)', borderRadius: 'var(--radius-xs)', background: on ? 'var(--mint-500)' : 'var(--paper-000)',
        boxShadow: 'var(--shadow-sticker-sm)', transition: 'var(--transition-control)' }}>
        {on && <Icon name="check" size={16} />}
      </span>
      <span style={{ fontSize: 'var(--text-body-sm)' }}>{label}</span>
    </label>
  );
}
