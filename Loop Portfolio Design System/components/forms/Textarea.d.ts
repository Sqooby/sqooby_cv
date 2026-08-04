import * as React from 'react';

/** Multi-line field. Rounded-rect (24px) rather than pill. */
export interface TextareaProps {
  label?: React.ReactNode;
  hint?: React.ReactNode;
  /** @default 5 */
  rows?: number;
  placeholder?: string;
  value?: string;
  defaultValue?: string;
  disabled?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  style?: React.CSSProperties;
}
export declare function Textarea(props: TextareaProps): JSX.Element;
