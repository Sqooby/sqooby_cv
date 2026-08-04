import * as React from 'react';

/** Availability badge with a status dot — sits in the hero and the footer. */
export interface BadgeProps {
  children?: React.ReactNode;
  /** @default "available" */
  status?: 'available' | 'busy' | 'closed';
  style?: React.CSSProperties;
}
export declare function Badge(props: BadgeProps): JSX.Element;
