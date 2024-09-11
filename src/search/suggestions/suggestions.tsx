import { ForwardedRef, forwardRef, ReactElement, useContext } from 'react';

import type { SuggestionsProps } from './suggestions.types';

import { useSuggestions } from './suggestions.hook';
import './suggestions.scss';
import { SearchContext } from '../context/search.context';

/**
 * The component description.
 */
export const Suggestions = forwardRef(
  (props: SuggestionsProps, forwardedRef: ForwardedRef<HTMLDivElement> | null): ReactElement => {
    const { inputValue } = useContext(SearchContext);
    const { configuration, suggestOptions, debounceDelay, ...rest } = props;
    const { response, loading, error } = useSuggestions(props, inputValue);

    return (
      <div ref={forwardedRef} {...rest}>
        {loading && <span>Loading results...</span>}
        {response?.suggestionGroups?.map((group) => (
          <div key={group.view}>
            <h1>{group.catalogName}</h1>
            <h2>{group.view}</h2>

            {group.querySuggestions && (
              <ul>
                {group.querySuggestions.map((query) => (
                  <li key={query.query}>
                    {query.displayText} - {query.query}
                  </li>
                ))}
              </ul>
            )}
            {group.searchSuggestions && (
              <ul>
                {group.searchSuggestions.map((search) => (
                  <li key={search.pid}>{search.title}</li>
                ))}
              </ul>
            )}
            {group.attributeSuggestions && (
              <ul>
                {group.attributeSuggestions.map((attribute) => (
                  <li key={attribute.name}>
                    {attribute.name}: {attribute.value}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    );
  },
);
