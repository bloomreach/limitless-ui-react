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
 *
 * export default function MyCustomComponent() {
 *  return (
 *    <SearchContextProvider>
 *      <SearchBox
 *        configuration={configuration}
 *        searchOptions={options}
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
    const searchContext = useContext(SearchContext);
    const { children, className, configuration, searchOptions, debounceDelay, ...rest } = props;
    const [query, setQuery] = useState<string>('');

    const { loading, error, response } = useProductSearch(query, configuration, searchOptions);

    useEffect(() => {
      if (!error) {
        searchContext?.setSearchResponse(response);
      }
    }, [searchContext, response, error]);

    const debouncedSetQuery = debounce((event: ChangeEvent<HTMLInputElement>) => {
      setQuery(event.target.value);
    }, debounceDelay ?? 500);

    const onChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
      debouncedSetQuery(event);
    }, [debouncedSetQuery]);

    return (
      <>
        <input
          {...rest}
          onChange={onChange}
          className={cn('lcui-search-box', className)}
          ref={forwardedRef}
        />
        {loading && <div>Loading...</div>}
      </>
    );
  },
);
