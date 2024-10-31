import { AccordionTriggerProps } from '@radix-ui/react-accordion';
import { ReactNode } from 'react';
import { HTMLProps, ButtonHTMLAttributes, PropsWithChildren } from 'react';

export interface CheckboxGroupProps {
  /**
   * Selected values
   */
  value: string[];
  /**
   * onChange event
   */
  onChange: (value: string[]) => void;
}


export interface CheckboxGroupRootProps extends CheckboxGroupProps, PropsWithChildren, Omit<HTMLProps<HTMLDivElement>, 'defaultValue' |'value' | 'onChange'> {
  /**
   * Custom class name for the container of the component.
   */
  className?: string,
}

export interface CheckboxGroupItemProps extends PropsWithChildren, HTMLProps<HTMLLabelElement> {
  /**
   * Custom class name for the container of the component.
   */
  className?: string;

  value: string;
}

export interface CheckboxGroupOverflowProps extends PropsWithChildren, HTMLProps<HTMLDivElement> {
  /**
   * Custom class name for the container of the component.
   */
  className?: string;
}

export interface CheckboxGroupOverflowContentProps extends PropsWithChildren, HTMLProps<HTMLDivElement> {
  /**
   * Custom class name for the container of the component.
   */
  className?: string;
}

export interface CheckboxGroupOverflowTriggerProps extends AccordionTriggerProps {
  expandedLabel?: ReactNode,
  label?: ReactNode
}

export interface CheckboxGroupContextProps extends CheckboxGroupProps {
  onCheckboxChange: (checked: boolean, id: string) => void;
  expanded: boolean;
  setExpanded: (status: boolean) => void;
}

export interface CheckboxGroupProviderProps extends PropsWithChildren {
  value: CheckboxGroupProps,
};
