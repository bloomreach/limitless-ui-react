import clsx from 'clsx';
import Highlighter from 'react-highlight-words';
import { AttributeSuggestionsProps } from '../search-box.types';
import { SuggestResponseAttributeSuggestions } from '@bloomreach/discovery-web-sdk';
import { FloatingUIContext } from '../../../contexts';
import { useContext } from 'react';

export const AttributeSuggestions = (props: AttributeSuggestionsProps) => {
  const { inputValue, group, classNames, labels, onAttributeSelect, offset } = props;

  const floatingUIContext = useContext(FloatingUIContext);

  if (!floatingUIContext) {
    throw new Error('Floating UI Provider is not provided');
  }

  const attributeItemProps = (
    index: number,
    offset: number,
    query: SuggestResponseAttributeSuggestions,
  ) => {
    const { getItemProps, listRef, handleAttributeSelect } = floatingUIContext;

    return getItemProps({
      ref(node) {
        listRef.current[index + offset] = node;
      },
      onClick(event) {
        handleAttributeSelect();
        onAttributeSelect?.(query, event);
      },
    });
  };

  return (
    <div
      className={clsx(
        'lui-suggestions-category',
        'lui-suggestions-attribute-suggestions',
        classNames?.attributeSuggestions,
      )}
    >
      <h1>{labels?.attributeSuggestions ?? 'Attribute Suggestions'}</h1>
      <ul>
        {group.map((attribute, index) => (
          <li
            className={clsx(
              'lui-suggestions-item',
              'lui-suggestions-attribute-suggestion',
              classNames?.attributeSuggestion,
            )}
            key={attribute.name}
            {...attributeItemProps(index, offset, attribute)}
          >
            <Highlighter
              highlightClassName="lui-suggestions-highlight"
              searchWords={[inputValue]}
              textToHighlight={attribute.name}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
