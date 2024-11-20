import { PropsWithChildren, HTMLAttributes } from 'react';

export interface TagProps extends PropsWithChildren, HTMLAttributes<HTMLDivElement> {
  /**
   * Custom class name for the container of the component.
   */
  className?: string;

  onDismiss?: () => void;
}
