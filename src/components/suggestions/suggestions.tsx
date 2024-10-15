import { ReactElement, useContext } from 'react';

import type { SuggestionsProps } from './suggestions.types';

import * as Tabs from '@radix-ui/react-tabs';

import clsx from 'clsx';
import { FloatingUIContext } from '../../contexts/floating-ui.context';
import { useSuggestions } from '../../hooks/suggestions.hook';
import { ArrowRight } from '../../icons/arrow-right';
import './suggestions.scss';
import { ArrowLeft } from '../../icons/arrow-left';
import { ProductCard } from '../product-card';
import Highlighter from 'react-highlight-words';

/**
 * Renders suggestions returned from the Autosuggest API based on a query
 */
export const Suggestions = (props: SuggestionsProps): ReactElement => {
  const {
    configuration,
    suggestOptions,
    debounceDelay,
    inputValue,
    labels,
    classNames,
    onQuerySelect,
    onSearchSelect,
    currency,
    ...rest
  } = props;
  const { response } = useSuggestions(props, inputValue);

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

  return response ? (
    <Tabs.Root className={clsx('lui-suggestions', classNames?.root)} defaultValue={'0'} {...rest}>
      <Tabs.List className={clsx('lui-suggestions-tabs', classNames?.tabs)}>
        {response.suggestionGroups?.map((group, index, groups) => (
          <Tabs.Trigger
            className={clsx(
              'lui-suggestions-tab',
              classNames?.tab,
              groups.length === 1 && 'lui-sr-only',
            )}
            value={`${index}`}
          >
            {group.catalogName} - {group.view}
          </Tabs.Trigger>
        ))}
      </Tabs.List>

      {response.suggestionGroups?.map((group, index) => (
        <Tabs.Content
          className={clsx('lui-suggestions-tab-content', classNames?.content)}
          value={`${index}`}
        >
          {inputValue && (
            <a
              className={clsx('lui-suggestions-item', 'lui-suggestions-first-query')}
              {...queryItemProps(0)}
            >
              <span>
                Search for: <span className="lui-suggestions-first-query-value">{inputValue}</span>
              </span>{' '}
              <ArrowRight />
            </a>
          )}
          <div className={clsx('lui-suggestions-categories', classNames?.suggestionCategories)}>
            {group.querySuggestions && group.querySuggestions.length > 0 && (
              <div
                className={clsx(
                  'lui-suggestions-category',
                  'lui-suggestions-query-suggestions',
                  classNames?.querySuggestions,
                )}
              >
                <h1>{labels?.querySuggestions ?? 'Keyword Suggestions'}</h1>
                <ul>
                  {group.querySuggestions.map((query, index) => (
                    <li
                      className={clsx(
                        'lui-suggestions-item',
                        'lui-suggestions-query-suggestion',
                        classNames?.querySuggestion,
                      )}
                      key={query.query}
                      {...queryItemProps(index)}
                    >
                      <span>
                        <Highlighter
                          highlightClassName="lui-suggestions-highlight"
                          searchWords={[inputValue]}
                          textToHighlight={query.displayText}
                        />
                      </span>
                      <ArrowLeft />
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {group.attributeSuggestions && group.attributeSuggestions.length > 0 && (
              <div
                className={clsx(
                  'lui-suggestions-category',
                  'lui-suggestions-attribute-suggestions',
                  classNames?.attributeSuggestions,
                )}
              >
                <h1>{labels?.attributeSuggestions ?? 'Brand Suggestions'}</h1>
                <ul>
                  {group.attributeSuggestions.map((attribute) => (
                    <li
                      className={clsx(
                        'lui-suggestions-item',
                        'lui-suggestions-attribute-suggestion',
                        classNames?.attributeSuggestion,
                      )}
                      key={attribute.name}
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
            )}
            {group.searchSuggestions && group.searchSuggestions.length > 0 && (
              <div
                className={clsx(
                  'lui-suggestions-category',
                  'lui-suggestions-search-suggestions',
                  classNames?.searchSuggestions,
                )}
              >
                <h1>{labels?.searchSuggestions ?? 'Product Suggestions'}</h1>
                <ul>
                  {group.searchSuggestions.map((product, index) => (
                    <li
                      className={clsx(
                        'lui-suggestions-item',
                        'lui-suggestions-search-suggestion',
                        classNames?.searchSuggestion,
                      )}
                      key={product.pid}
                      {...searchItemProps(
                        index,
                        (group.querySuggestions?.length ?? 0) +
                          (group.attributeSuggestions?.length ?? 0),
                      )}
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
                          <ProductCard.Price
                            currency={currency}
                            price={Number(product.sale_price)}
                          />
                        </ProductCard.Footer>
                      </ProductCard.Root>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </Tabs.Content>
      ))}
    </Tabs.Root>
  ) : (
    <></>
  );
};

Suggestions.displayName = 'Suggestions';
