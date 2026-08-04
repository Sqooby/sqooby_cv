import * as React from 'react';

/** Lucide (static CDN) icon. Loop has no bespoke icon set — Lucide at 2px stroke is the documented substitute. */
export interface IconProps {
  /** Lucide icon name in kebab-case, e.g. "arrow-up-right". */
  name: string;
  /** Pixel box. @default 20 */
  size?: number;
  /** @default "ink" */
  tone?: 'ink' | 'inverse' | 'muted';
  style?: React.CSSProperties;
}
export declare function Icon(props: IconProps): JSX.Element;
