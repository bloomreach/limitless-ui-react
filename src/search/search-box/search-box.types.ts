import { Configuration, ProductSearchOptions } from '@bloomreach/discovery-web-sdk';
import { PropsWithChildren } from 'react';

export interface SearchBoxProps extends PropsWithChildren {
  /**
   * Custom class name for the container of the component.
   */
  className?: string;

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

  /**
   * The number of miliseconds the auto-search should be debounced
   */
  debounceDelay?: number;
}

/**
 * The type of search.
 */
export type SearchType = 'product' | 'category' | 'content' | 'bestseller';
