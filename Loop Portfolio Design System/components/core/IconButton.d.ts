import * as React from 'react';

/** Circular outlined icon-only control (nav toggles, social links, card actions). */
export interface IconButtonProps {
  /** Lucide icon name, kebab-case. */
  name: string;
  /** Accessible label — required, the button has no text. */
  label: string;
  /** @default "paper" */
  tone?: 'paper' | 'ink' | 'blue';
  /** @default "md" */
  size?: 'sm' | 'md' | 'lg';
  onClick?: (e: React.MouseEvent) => void;
  style?: React.CSSProperties;
}
export declare function IconButton(props: IconButtonProps): JSX.Element;
