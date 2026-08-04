import * as React from 'react';

export interface NavItem { id: string; label: string; href?: string }
/**
 * Floating blurred pill nav — wordmark left, pill links centre, CTA right.
 * @startingPoint section="Portfolio" subtitle="Floating glass pill navigation bar" viewport="1280x120"
 */
export interface NavBarProps {
  /** Wordmark text — Loop has no logo mark, the name is set in display type. */
  brand?: string;
  items?: Array<string | NavItem>;
  /** id of the current item. */
  activeItem?: string;
  onNavigate?: (id: string) => void;
  /** @default "Get in touch" */
  cta?: string;
  onCta?: () => void;
  /** @default true */
  sticky?: boolean;
  style?: React.CSSProperties;
}
export declare function NavBar(props: NavBarProps): JSX.Element;
