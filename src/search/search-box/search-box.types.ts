import { Configuration, ProductSearchOptions } from '@bloomreach/discovery-web-sdk';
import { PropsWithChildren } from 'react';

export interface SearchBoxProps extends PropsWithChildren {
  /**
   * Custom class name for the container of the component.
   */
  className?: string;

  /**
   * The number of miliseconds the search trigger should be debounced
   * @default 500
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

  /**
   * The type of search.
   */
  searchType: SearchType;
}

/**
 * The type of search.
 */
export type SearchType = 'product' | 'category' | 'content' | 'bestseller';
