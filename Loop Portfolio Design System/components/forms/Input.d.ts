import * as React from 'react';

/** Pill text field with mono caps label. */
export interface InputProps {
  label?: React.ReactNode;
  hint?: React.ReactNode;
  /** Replaces hint and turns the border critical. */
  error?: React.ReactNode;
  value?: string;
  defaultValue?: string;
  placeholder?: string;
  /** @default "text" */
  type?: 'text' | 'email' | 'url' | 'tel';
  disabled?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  style?: React.CSSProperties;
}
export declare function Input(props: InputProps): JSX.Element;
