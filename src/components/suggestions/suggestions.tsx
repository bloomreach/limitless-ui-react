import { ReactElement, useContext } from 'react';

import type { SuggestionsProps } from './suggestions.types';

import { FloatingUIContext } from '../../contexts/floating-ui.context';
import { useSuggestions } from '../../hooks/suggestions.hook';
import './suggestions.scss';

/**
 * Renders suggestions returned from the Autosuggest API based on a query
 */
export const Suggestions = (props: SuggestionsProps): ReactElement => {
  const { configuration, suggestOptions, debounceDelay, inputValue, ...rest } = props;
  const { response, loading } = useSuggestions(props, inputValue);

  const floatingUIContext = useContext(FloatingUIContext);

  const queryItemProps = (index: number) => {
    if (!floatingUIContext) {
      return {};
    }

    const { getItemProps, listRef, handleQuerySelect } = floatingUIContext;

    return getItemProps({
      ref(node) {
        listRef.current[index] = node;
      },
      onClick() {
        handleQuerySelect();
      },
    });
  };

  const searchItemProps = (index: number, offset: number) => {
    if (!floatingUIContext) {
      return {};
    }

    const { getItemProps, listRef, handleProductSelect } = floatingUIContext;

    return getItemProps({
      ref(node) {
        listRef.current[index + offset] = node;
      },
      onClick() {
        handleProductSelect();
      },
    });
  };
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
                <li key={query.query} {...queryItemProps(index)}>
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
                  {...searchItemProps(index, group.querySuggestions?.length ?? 0)}
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
