import * as React from 'react';

export interface FooterLink { label: string; href?: string }
export interface FooterSocial { label: string; icon: string; href?: string }
/** Page footer: wordmark, tagline, mono link row, round social buttons, copyright. */
export interface FooterProps {
  brand?: string;
  tagline?: string;
  links?: FooterLink[];
  /** icon is a Lucide name. */
  socials?: FooterSocial[];
  year?: number | string;
  style?: React.CSSProperties;
}
export declare function Footer(props: FooterProps): JSX.Element;
