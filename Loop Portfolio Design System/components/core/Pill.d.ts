import * as React from 'react';

/** Interactive pill used for nav items and filter chips. Selected state inverts to ink. */
export interface PillProps {
  children?: React.ReactNode;
  /** @default "paper" */
  tone?: 'paper' | 'tint';
  /** Selected / current. @default false */
  active?: boolean;
  href?: string;
  onClick?: (e: React.MouseEvent) => void;
  style?: React.CSSProperties;
}
export declare function Pill(props: PillProps): JSX.Element;
