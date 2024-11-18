import clsx from 'clsx';
import Highlighter from 'react-highlight-words';
import { ArrowLeft } from '../../../icons/arrow-left';
import { QuerySuggestionsProps } from '../search-box.types';
import { useContext } from 'react';
import { FloatingUIContext } from '../../../contexts';
import { SuggestResponseQuerySuggestions } from '@bloomreach/discovery-web-sdk';

export const QuerySuggestions = (props: QuerySuggestionsProps) => {
  const { inputValue, setInputValue, group, classNames, labels, onQuerySelect } = props;

  const floatingUIContext = useContext(FloatingUIContext);

  if (!floatingUIContext) {
    throw new Error('Floating UI Provider is not provided');
  }

  const queryItemProps = (index: number, query: SuggestResponseQuerySuggestions) => {
    const { getItemProps, listRef, handleQuerySelect } = floatingUIContext;

    return getItemProps({
      ref(node) {
        listRef.current[index] = node;
      },
      onClick(event) {
        handleQuerySelect();
        onQuerySelect?.(query, event);
      },
    });
  };

  return (
    <div
      className={clsx(
        'lui-suggestions-category',
        'lui-suggestions-query-suggestions',
        classNames?.querySuggestions,
      )}
    >
      <h1>{labels?.querySuggestions ?? 'Keyword Suggestions'}</h1>
      <ul>
        {group.map((query, index) => (
          <li
            className={clsx(
              'lui-suggestions-item',
              'lui-suggestions-query-suggestion',
              classNames?.querySuggestion,
            )}
            key={query.query}
            {...queryItemProps(index, query)}
          >
            <span>
              <Highlighter
                highlightClassName="lui-suggestions-highlight"
                searchWords={[inputValue]}
                textToHighlight={query.displayText}
              />
            </span>
            <ArrowLeft onClick={() => setInputValue(query.displayText)} />
          </li>
        ))}
      </ul>
    </div>
  );
};
