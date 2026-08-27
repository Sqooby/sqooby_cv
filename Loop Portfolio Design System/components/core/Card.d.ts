import * as React from 'react';

/** Generic surface: 24px radius, 2px ink border, hard offset shadow. */
export interface CardProps {
  children?: React.ReactNode;
  /** @default "paper" */
  tone?: 'paper' | 'sunken' | 'blue' | 'mint' | 'lilac' | 'blush' | 'butter' | 'ink';
  /** @default true */
  outlined?: boolean;
  /** @default "sticker" */
  shadow?: 'sticker' | 'soft' | 'none';
  /** CSS padding value. @default "var(--space-8)" */
  padding?: string;
  style?: React.CSSProperties;
}
export declare function Card(props: CardProps): JSX.Element;
