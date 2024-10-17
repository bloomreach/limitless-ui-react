import { ButtonHTMLAttributes, HTMLProps, PropsWithChildren } from 'react';

export interface RangeBaseProps {
  /**
   * Minimum value
   */
  min: number;
  /**
   * Maximum value
   */
  max: number;
  /**
   * Step increments to change value
   */
  step?: number;
  /**
   * Selected range value
   */
  value: [number, number];
  /**
   * onChange event
   */
  onChange?: (value: [number, number]) => void;
  /**
   * If true, trigger update on every change. Else, trigger change manually using the update button/api
   */
  autoUpdate?: boolean;
}

export interface RangeContextProps extends RangeBaseProps {
  onInputChange: (index: number, value: string) => void;
  onSliderChange: (value: [number, number]) => void;
  onUpdate: () => void;
}

export interface RangeRootProps extends PropsWithChildren, RangeBaseProps, Omit<HTMLProps<HTMLDivElement>, 'min' | 'max' | 'value' | 'step' | 'onChange'> {
  className?: string,
}

export interface RangeProviderProps extends PropsWithChildren {
  value: RangeBaseProps,
}

export interface RangeInputsProps extends PropsWithChildren, HTMLProps<HTMLDivElement> {
  /**
   * Custom class name for the container of the component.
   */
  className?: string;
}

export interface RangeInputProps extends Omit<HTMLProps<HTMLInputElement>, 'type' | 'defaultValue' | 'min' | 'max' | 'step' | 'onChange'> {
  /**
   * Custom class name for the container of the component.
   */
  className?: string;
}

export interface RangeBaseInputProps extends RangeInputProps {
  index: number;
}

export interface RangeButtonProps extends PropsWithChildren, ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Custom class name for the container of the component.
   */
  className?: string;

  variant?: string
}
