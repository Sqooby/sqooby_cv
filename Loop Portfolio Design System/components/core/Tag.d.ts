import * as React from 'react';

/** Static metadata chip (discipline, year, stack) in mono caps. Not clickable — use Pill for that. */
export interface TagProps {
  children?: React.ReactNode;
  /** @default "neutral" */
  tone?: 'neutral' | 'blue' | 'mint' | 'lilac' | 'blush' | 'butter';
  /** Hairline ink border. @default true */
  outlined?: boolean;
  style?: React.CSSProperties;
}
export declare function Tag(props: TagProps): JSX.Element;
