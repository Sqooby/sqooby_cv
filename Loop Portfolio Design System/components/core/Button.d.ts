import * as React from 'react';

/**
 * Primary outlined "sticker" button — ink border + hard offset shadow, lifts on hover, sinks on press.
 * @startingPoint section="Core" subtitle="Outlined sticker buttons in every tone and size" viewport="700x220"
 */
export interface ButtonProps {
  children?: React.ReactNode;
  /** Fill colour. @default "ink" */
  tone?: 'ink' | 'paper' | 'blue' | 'mint' | 'lilac' | 'butter';
  /** @default "md" */
  size?: 'sm' | 'md' | 'lg';
  /** solid = filled, outline = transparent fill with ink border. @default "solid" */
  variant?: 'solid' | 'outline';
  icon?: React.ReactNode;
  /** @default "right" */
  iconPosition?: 'left' | 'right';
  disabled?: boolean;
  /** Renders an <a> instead of a <button>. */
  href?: string;
  onClick?: (e: React.MouseEvent) => void;
  style?: React.CSSProperties;
}
export declare function Button(props: ButtonProps): JSX.Element;
