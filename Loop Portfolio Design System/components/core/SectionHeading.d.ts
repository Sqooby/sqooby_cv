import * as React from 'react';

/** Section header: mono eyebrow, heavy display title, optional lead paragraph and trailing action. */
export interface SectionHeadingProps {
  eyebrow?: React.ReactNode;
  title?: React.ReactNode;
  description?: React.ReactNode;
  /** @default "left" */
  align?: 'left' | 'center';
  /** Right-aligned slot, usually a Button or Pill row. */
  action?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function SectionHeading(props: SectionHeadingProps): JSX.Element;
