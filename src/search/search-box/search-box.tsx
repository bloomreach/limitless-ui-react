import cn from 'classnames';
import {
  ChangeEvent,
  ForwardedRef,
  forwardRef,
  ReactElement,
  useContext,
  useEffect,
  useState,
  useCallback,
} from 'react';

import { debounce } from '../../utils/debounce';
import { SearchContext } from '../context/search.context';
import { useProductSearch } from '../hooks/productSearch.hook';
import './search-box.scss';

import type { SearchBoxProps } from './search-box.types';

/**
 * The component description.
 *
 * ### Usage
 *
 * ```tsx
 * import { SearchBox } from '@bloomreach/limitless-ui-react';
 * import type { Configuration, ProductSearchOptions } from '@bloomreach/discovery-web-sdk';
 *
 * // Set the account and catalog configuration
 * const config: Configuration = {
 *   account_id: 1234,
 *   domain_key: 'example_com',
 * };
 *
 * // Set up the search parameters
 * const searchOptions: ProductSearchOptions = {
 *   q: 'Generic Metal Pants',
 *   fl: 'pid,title,description,brand,price,thumb_image',
 *   start: 0,
 *   rows: 10,
 *   url: 'http://example.com',
 *   _br_uid_2: 'someCookieId',
 * };
 *
 * export default function MyCustomComponent() {
 *  return (
 *    <SearchContextProvider>
 *      <SearchBox
 *        configuration={configuration}
 *        searchOptions={searchOptions}
 *        debounceDelay={300}
 *        className="test"/>
 *    </SearchContextProvider>
 *  )
 *   return <SearchBox />;
 * }
 * ```
 */
export const SearchBox = forwardRef(
  (props: SearchBoxProps, forwardedRef: ForwardedRef<HTMLInputElement> | null): ReactElement => {
    const { children, className, configuration, searchOptions, debounceDelay, ...rest } = props;
    const searchContext = useContext(SearchContext);
    const [query, setQuery] = useState<string>('');
    const { response } = useProductSearch(query, configuration, searchOptions);

    useEffect(() => {
      searchContext.setSearchResponse(response);
    }, [searchContext, response]);

    const debouncedSetQuery = debounce((event: ChangeEvent<HTMLInputElement>) => {
      setQuery(event.target.value);
    }, debounceDelay ?? 500);

    const onChange = useCallback(debouncedSetQuery, [debouncedSetQuery]);

    return (
      <input
        {...rest}
        onChange={onChange}
        className={cn('lcui-search-box', className)}
        ref={forwardedRef}
      />
    );
  },
);
