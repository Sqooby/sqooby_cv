import * as React from 'react';

/**
 * Blurred, slowly morphing gradient orb — the system's "3D" atmosphere layer.
 * Absolutely position it behind content; never let it carry meaning.
 */
export interface BlobProps {
  /** @default "blue" */
  palette?: 'blue' | 'mint' | 'lilac' | 'sunset';
  /** Square edge in px. @default 480 */
  size?: number;
  /** CSS blur length. @default "var(--blob-blur)" */
  blur?: string;
  /** Slow 24s rotate + breathe. @default true */
  spin?: boolean;
  /** @default 1 */
  opacity?: number;
  style?: React.CSSProperties;
}
export declare function Blob(props: BlobProps): JSX.Element;
