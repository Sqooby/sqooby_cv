import React from 'react';

const CDN = 'https://unpkg.com/lucide-static@0.484.0/icons/';

/** Lucide icon rendered from the lucide-static CDN. tone="inverse" flips it to paper white. */
export function Icon({ name, size = 20, tone = 'ink', style, ...rest }) {
  return (
    <img src={CDN + name + '.svg'} alt="" aria-hidden="true" width={size} height={size}
      style={{ display: 'block', width: size, height: size, flex: '0 0 auto',
        filter: tone === 'inverse' ? 'invert(1)' : tone === 'muted' ? 'opacity(.55)' : 'none', ...style }} {...rest} />
  );
}
