import { Configuration, ProductSearchOptions } from '@bloomreach/discovery-web-sdk';
import { PropsWithChildren } from 'react';

export interface SearchBoxProps extends PropsWithChildren {
  /**
   * Custom class name for the container of the component.
   */
  className?: string;

  /**
   * The number of miliseconds the search trigger should be debounced
   */
  debounceDelay?: number;

  /**
   * The Configuration for creating a Bloomreach search integration
   */
  configuration: Configuration;

  /**
   * The options specific to a Bloormeach search e.g. `q` and `fl`
   */
  searchOptions: Omit<ProductSearchOptions, 'q'>;
}
