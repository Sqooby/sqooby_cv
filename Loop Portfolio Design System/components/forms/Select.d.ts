import * as React from 'react';

export interface SelectOption { value: string; label: string }
/** Pill select. Native dropdown, brand chrome. */
export interface SelectProps {
  label?: React.ReactNode;
  /** Strings or {value,label} objects. */
  options?: Array<string | SelectOption>;
  value?: string;
  defaultValue?: string;
  disabled?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  style?: React.CSSProperties;
}
export declare function Select(props: SelectProps): JSX.Element;
