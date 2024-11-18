import clsx from 'clsx';
import Highlighter from 'react-highlight-words';
import { SearchSuggestionsProps } from '../search-box.types';
import { ProductCard } from '../../product-card';
import { useContext } from 'react';
import { FloatingUIContext } from '../../../contexts';
import { SuggestResponseSearchSuggestions } from '@bloomreach/discovery-web-sdk';

export const SearchSuggestions = (props: SearchSuggestionsProps) => {
  const { inputValue, group, classNames, labels, onSearchSelect, offset } = props;

  const floatingUIContext = useContext(FloatingUIContext);

  if (!floatingUIContext) {
    throw new Error('Floating UI Provider is not provided');
  }

  const searchItemProps = (
    index: number,
    offset: number,
    query: SuggestResponseSearchSuggestions,
  ) => {
    const { getItemProps, listRef, handleProductSelect } = floatingUIContext;

    return getItemProps({
      ref(node) {
        listRef.current[index + offset] = node;
      },
      onClick(event) {
        handleProductSelect();
        onSearchSelect?.(query, event);
      },
    });
  };
  return (
    <div
      className={clsx(
        'lui-suggestions-category',
        'lui-suggestions-search-suggestions',
        classNames?.searchSuggestions,
      )}
    >
      <h1>{labels?.searchSuggestions ?? 'Product Suggestions'}</h1>
      <ul>
        {group.map((product, index) => (
          <li
            className={clsx(
              'lui-suggestions-item',
              'lui-suggestions-search-suggestion',
              classNames?.searchSuggestion,
            )}
            key={product.pid}
            {...searchItemProps(index, offset, product)}
          >
            <ProductCard.Root>
              <ProductCard.Body>
                <ProductCard.Title>
                  <Highlighter
                    highlightClassName="lui-suggestions-highlight"
                    searchWords={[inputValue]}
                    textToHighlight={product.title}
                  />
                </ProductCard.Title>
                <ProductCard.Image
                  src={product.thumb_image}
                  alt={product.title}
                ></ProductCard.Image>
              </ProductCard.Body>
              <ProductCard.Footer>
                <ProductCard.Price price={Number(product.sale_price)} />
              </ProductCard.Footer>
            </ProductCard.Root>
          </li>
        ))}
      </ul>
    </div>
  );
};
