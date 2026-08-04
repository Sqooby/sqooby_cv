import * as React from 'react';

/**
 * The system's signature 3D effect: perspective tilt + glare that follows the pointer.
 * @startingPoint section="Portfolio" subtitle="Pointer-tracked 3D tilt for project tiles" viewport="700x340"
 */
export interface TiltCardProps {
  children?: React.ReactNode;
  /** Max rotation in degrees. @default 10 */
  max?: number;
  /** Z translation on hover, px. @default 10 */
  lift?: number;
  /** Specular highlight. @default true */
  glare?: boolean;
  style?: React.CSSProperties;
}
export declare function TiltCard(props: TiltCardProps): JSX.Element;
