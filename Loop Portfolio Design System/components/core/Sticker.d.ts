import * as React from 'react';

/** Small rotated label that "sticks" onto a layout — the playful counterweight to the heavy type. */
export interface StickerProps {
  children?: React.ReactNode;
  /** Lucide icon name shown before the label. */
  icon?: string;
  /** @default "butter" */
  tone?: 'butter' | 'mint' | 'blush' | 'lilac' | 'paper';
  /** Degrees. @default -6 */
  rotate?: number;
  /** Gentle 6s bob. @default true */
  float?: boolean;
  style?: React.CSSProperties;
}
export declare function Sticker(props: StickerProps): JSX.Element;
