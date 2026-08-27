import * as React from 'react';

/** Big number + mono caption. Use in rows of three or four. */
export interface StatBlockProps {
  value?: React.ReactNode;
  label?: React.ReactNode;
  /** @default "paper" */
  tone?: 'paper' | 'mint' | 'blue' | 'butter' | 'ink';
  style?: React.CSSProperties;
}
export declare function StatBlock(props: StatBlockProps): JSX.Element;
