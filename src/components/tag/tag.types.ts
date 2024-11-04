import { PropsWithChildren } from 'react';

export interface TagProps extends PropsWithChildren {
  /**
   * Custom class name for the container of the component.
   */
  className?: string;

  onDismiss?: () => void;
}
