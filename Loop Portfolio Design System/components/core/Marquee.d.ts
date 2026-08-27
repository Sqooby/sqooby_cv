import * as React from 'react';

/** Infinite horizontal ticker band — services, clients, "available for work". */
export interface MarqueeProps {
  /** Strings repeated across the band. */
  items?: React.ReactNode[];
  /** @default "ink" */
  tone?: 'ink' | 'butter';
  /** CSS duration. @default "var(--marquee-speed)" */
  speed?: string;
  /** Glyph between items. @default "✳" */
  separator?: string;
  style?: React.CSSProperties;
}
export declare function Marquee(props: MarqueeProps): JSX.Element;
