import * as React from 'react';

/** Outlined, grained media well with a gradient fallback — every image in Loop sits in one. */
export interface MediaFrameProps {
  src?: string;
  alt?: string;
  /** Fallback gradient when there is no src. @default "blue" */
  palette?: 'blue' | 'mint' | 'lilac' | 'sunset' | 'paper';
  /** CSS aspect-ratio. @default "4 / 3" */
  ratio?: string;
  /** Placeholder caption. @default "Add image" */
  label?: string;
  /** @default "var(--radius-media)" */
  radius?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function MediaFrame(props: MediaFrameProps): JSX.Element;
