import * as React from 'react';

/**
 * Full-width ink slab that closes the page: giant headline, blob glow, two buttons.
 * @startingPoint section="Portfolio" subtitle="Closing contact slab with blob glow" viewport="1280x520"
 */
export interface ContactCTAProps {
  headline?: string;
  email?: string;
  note?: string;
  /** Primary button label. @default "Start a project" */
  action?: string;
  onAction?: () => void;
  /** Blob colour behind the headline. @default "sunset" */
  palette?: 'blue' | 'mint' | 'lilac' | 'sunset';
  style?: React.CSSProperties;
}
export declare function ContactCTA(props: ContactCTAProps): JSX.Element;
