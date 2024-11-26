import { clsx } from 'clsx';
import { ForwardedRef, forwardRef, ReactElement, useContext } from 'react';

import type { ResultsProps } from './results.types';

import './results.scss';
import { SearchContext } from '../../contexts';

/**
 * Component to display search results from Bloomreach Discovery search
 *
 * ### Usage
 *
 * ```tsx
 * import { SearchBox, Results } from '@bloomreach/limitless-ui-react';
 * 
 * const Result = ({ result }) => {
 *   return (
 *     <div key={result.pid}>
 *       <h2>{result.title}</h2>
 *       <p>{result.description}</p>
 *     </div>
 *   );
 * };
 *
 * export default function SearchResults() {
 *   return (
 *     <LimitlessUIProvider>
 *       <SearchBox.Root 
 *         configuration={configuration}
 *         searchOptions={searchOptions}
 *         searchType="product"
 *       />
 *       <Results resultComponent={Result} />
 *     </LimitlessUIProvider>
 *   );
 * }
 * ```
 * 
 * Note: Results component requires a SearchContext provided by LimitlessUIProvider 
 * and is typically used in conjunction with SearchBox
 */
export const Results = forwardRef(
  (props: ResultsProps, forwardedRef: ForwardedRef<HTMLDivElement> | null): ReactElement => {
    const { className, children, resultComponent, ...rest } = props;

    const searchContext = useContext(SearchContext);

    if (!searchContext) {
      throw new Error('Search Context not provided, can not retrieve results');
    }

    const { searchResponse, loading, error } = searchContext;

    const results = searchResponse?.response?.docs?.map((result) => {
      return resultComponent({ result });
    });

    return (
      <div {...rest} className={clsx('lui-results', className)} ref={forwardedRef}>
        {results && results}
      </div>
    );
  },
);
