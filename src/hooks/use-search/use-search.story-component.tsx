/**
 * This component is used only in the Storybook, since Storybook stories work with a React component
 * to render the arguments and for all it's types to work
 */
import {
  Configuration,
} from '@bloomreach/discovery-web-sdk';
import type { UseSearchOptions } from './use-search.types';
import type { SearchType } from '../../components/search-box/search-box.types';

import { ForwardedRef, forwardRef, ReactElement } from 'react';


/**
 * Hook for the product and category search APIs
 *
 * ### Usage
 *
 * ```tsx
 * import { useState } from 'react';
 * import { useSearch } from '@bloomreach/limitless-ui-react';
 * const searchType = 'product';
 * const configuration = {
 *   account_id: 1234,
 *   domain_key: 'abc',
 *   auth_key: '',
 * }
 *
 * function MyComponent() {
 *   const [searchOptions, setSearchOptions] = useState({
 *     _br_uid_2: 'insert from cookie',
 *     fl: 'pid,title,thumb_image,brand,price,sale_price',
 *     rows: 3,
 *     start: 0,
 *     sort: '',
 *     url: 'https://example.com',
 *     'facet.version': '3.0',
 *     q: 'chair',
 *   });
 *   const { response, error, loading } = useSearch(searchType, configuration, searchOptions);
 *
 *   function onChange(newSearchOptions) {
 *     setSearchOptions(newSearchOptions);
 *   }
 *
 *   return (
 *      // Render loading state, facets, results
 *   )
 * }
 *
 *
 * ```
 */
export const UseSearchStoryComponent = forwardRef((
    _props: {
      searchType: SearchType,
      configuration: Configuration,
      searchOptions: UseSearchOptions,
    },
    _forwardedRef: ForwardedRef<HTMLDivElement> | null,
  ): ReactElement => {
    return (
      <div />
    );
  });
