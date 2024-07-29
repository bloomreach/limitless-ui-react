import cn from 'classnames';
import { forwardRef } from 'react';
import type { ForwardedRef, InputHTMLAttributes, ReactElement } from 'react';

import './search-box.scss';

import { useSearchBox } from './search-box.hook';
import type { SearchBoxProps } from './search-box.types';

/**
 * A search box component to interface with the Bloomreach Discovery search
 * functionality
 *
 * ### Usage
 *
 * ```tsx
 * import { SearchBox } from '@bloomreach/limitless-ui-react';
 * import type { Configuration, ProductSearchOptions } from '@bloomreach/discovery-web-sdk';
 *
 * // Set the account and catalog configuration
 * const config: Configuration = {
 *    ...
 * };
 *
 * // Set up the search parameters
 * const searchOptions: ProductSearchOptions = {
 *   ...
 * };
 *
 * export default function MyCustomComponent() {
 *  return (
 *    <SearchContextProvider>
 *      <SearchBox
 *        configuration={configuration}
 *        searchOptions={searchOptions}
 *        searchType={'product'}
 *        debounceDelay={300}
 *        className="test"/>
 *
 *      <SearchContext.Consumer>
 *        {({ searchResponse }) =>
 *          searchResponse?.response?.docs?.map((result) => {
 *            return (
 *              <div>
 *                <h2>{result.title}</h2>
 *                <p>{result.description}</p>
 *              </div>
 *            );
 *          })
 *        }
 *      </SearchContext.Consumer>
 *    </SearchContextProvider>
 *  )
 * }
 *
 *
 * ```
 */
export const SearchBox = forwardRef(
  (
    props: SearchBoxProps & InputHTMLAttributes<HTMLInputElement>,
    forwardedRef: ForwardedRef<HTMLInputElement> | null,
  ): ReactElement => {
    const {
      children,
      className,
      configuration,
      searchOptions,
      debounceDelay,
      searchType,
      ...rest
    } = props;
    const { changeHandler } = useSearchBox(props);

    return (
      <input
        {...rest}
        onChange={changeHandler}
        className={cn('lcui-search-box', className)}
        ref={forwardedRef}
      />
    );
  },
);
