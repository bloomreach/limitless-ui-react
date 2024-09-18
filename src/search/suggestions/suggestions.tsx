import { ReactElement, useContext } from 'react';

import type { SuggestionsProps } from './suggestions.types';

import { FloatingUIContext } from '../context/floating-ui.context';
import { SearchContext } from '../context/search.context';
import { useSuggestions } from './suggestions.hook';
import './suggestions.scss';

/**
 * The component description.
 */
export const Suggestions = (props: SuggestionsProps): ReactElement => {
  const { inputValue } = useContext(SearchContext);
  const { configuration, suggestOptions, debounceDelay, ...rest } = props;
  const { response, loading } = useSuggestions(props, inputValue);

  const { getItemProps, listRef, handleQuerySelect, handleProductSelect } =
    useContext(FloatingUIContext);

  return (
    <div {...rest}>
      {loading && <span>Loading results...</span>}
      {response?.suggestionGroups?.map((group) => (
        <div key={group.view}>
          <h1>{group.catalogName}</h1>
          <h2>{group.view}</h2>

          {group.querySuggestions && (
            <ul>
              {group.querySuggestions.map((query, index) => (
                <li
                  key={query.query}
                  {...getItemProps({
                    ref(node) {
                      listRef.current[index] = node;
                    },
                    onClick() {
                      handleQuerySelect();
                    },
                  })}
                >
                  {query.displayText} - {query.query}
                </li>
              ))}
            </ul>
          )}
          {group.searchSuggestions && (
            <ul>
              {group.searchSuggestions.map((search, index) => (
                <li
                  key={search.pid}
                  {...getItemProps({
                    ref(node) {
                      // set the correct index, accounting for the query suggestions
                      // that were already rendered, so when the user is using the
                      // keyboard to navigate, the correct item is highlighted
                      const offset = group.querySuggestions?.length ?? 0;
                      listRef.current[index + offset] = node;
                    },
                    onClick() {
                      handleProductSelect();
                    },
                  })}
                >
                  {search.title}
                </li>
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
};
