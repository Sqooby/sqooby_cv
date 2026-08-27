import * as React from 'react';

/** Pull-quote card in a tinted surface. */
export interface TestimonialCardProps {
  quote?: string;
  author?: string;
  role?: string;
  /** Avatar image URL. */
  avatar?: string;
  /** @default "blush" */
  tone?: 'blush' | 'mint' | 'lilac' | 'paper';
  style?: React.CSSProperties;
}
export declare function TestimonialCard(props: TestimonialCardProps): JSX.Element;
