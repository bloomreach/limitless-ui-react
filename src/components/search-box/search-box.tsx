import type {
  SuggestResponseAttributeSuggestions,
  SuggestResponseQuerySuggestions,
  SuggestResponseSearchSuggestions,
} from '@bloomreach/discovery-web-sdk';
import { FloatingFocusManager, FloatingPortal, useMergeRefs } from '@floating-ui/react';
import * as Form from '@radix-ui/react-form';
import * as Tabs from '@radix-ui/react-tabs';
import { clsx } from 'clsx';
import type { ChangeEvent, KeyboardEventHandler, ReactElement } from 'react';
import { forwardRef, useContext, useRef } from 'react';

import './search-box.scss';

import { useSearchBox } from '../../hooks/search-box.hook';
import type { SearchBoxProps, SuggestionsProps } from './search-box.types';

import { FloatingUIContext } from '../../contexts/floating-ui.context';
import { CloseIcon } from '../../icons/clear-icon';
import { SearchIcon } from '../../icons/search-icon';

import Highlighter from 'react-highlight-words';
import { SearchContext } from '../../contexts';
import { useSuggestions } from '../../hooks/suggestions.hook';
import { ArrowLeft } from '../../icons/arrow-left';
import { ArrowRight } from '../../icons/arrow-right';
import { ProductCard } from '../product-card';

/**
 * A search box component to interface with the Bloomreach Discovery search
 * functionality
 */
export const SearchBox = forwardRef<HTMLFormElement, SearchBoxProps>(
  (props, forwardedRef): ReactElement => {
    const {
      configuration,
      searchOptions,
      debounceDelay,
      searchType,
      classNames,
      labels,
      autoQuery,
      onSubmit,
      onChange,
      onReset,
      submitIcon,
      resetIcon,
      children,
      ...elementProps
    } = props;
    const { changeHandler, inputValue, submitHandler, resetHandler } = useSearchBox(props);
    const fieldName = elementProps.name || 'lui-search-box-input';
    const submitRef = useRef<HTMLButtonElement>(null);
    const searchIconRef = useRef<SVGSVGElement>(null);
    const closeIconRef = useRef<SVGSVGElement>(null);

    const floatingUIContext = useContext(FloatingUIContext);

    if (!floatingUIContext) {
      throw new Error('Floating UI Provider is not provided');
    }

    const {
      refs,
      getReferenceProps,
      setOpen,
      open,
      floatingStyles,
      getFloatingProps,
      handleInputChange,
      context,
    } = floatingUIContext;

    const handleKeyDown: KeyboardEventHandler<HTMLInputElement> = (event) => {
      if (event.key === 'Enter') {
        submitRef.current?.click();
      }
    };

    const inputChange = (event: ChangeEvent<HTMLInputElement>) => {
      handleInputChange(event);
      changeHandler(event);
    };

    const mergedRefs = useMergeRefs([forwardedRef, refs.setReference]);

    return (
      <>
        <Form.Root
          {...getReferenceProps()}
          role="search"
          onSubmit={submitHandler}
          onReset={resetHandler}
          ref={mergedRefs}
          className={clsx('lui-search-box', classNames?.form, open && 'lui-suggestions-open')}
          {...elementProps}
        >
          <Form.Submit asChild>
            <button
              type="submit"
              className={clsx('lui-search-box-submit lui-search-box-button', classNames?.submit)}
              ref={submitRef}
              aria-label={labels?.submit}
            >
              {submitIcon ? (
                <span className={clsx('lui-search-box-submit-icon', classNames?.submitIcon)}>
                  {submitIcon()}
                </span>
              ) : (
                <SearchIcon
                  className={clsx('lui-search-box-submit-icon', classNames?.submitIcon)}
                  ref={searchIconRef}
                />
              )}
            </button>
          </Form.Submit>

          <Form.Field name={fieldName} asChild>
            <>
              {labels?.label && (
                <Form.Label className={clsx('lui-search-box-label lui-sr-only', classNames?.label)}>
                  {labels.label}
                </Form.Label>
              )}

              <Form.Control asChild>
                <input
                  autoComplete="off"
                  aria-autocomplete="none"
                  onChange={inputChange}
                  onFocus={() => {
                    setOpen(!!inputValue);
                  }}
                  value={inputValue}
                  placeholder={labels?.placeholder}
                  onKeyDown={handleKeyDown}
                  className={clsx('lui-search-box-input', classNames?.input)}
                />
              </Form.Control>
            </>
          </Form.Field>

          <button
            type="reset"
            className={clsx('lui-search-box-reset lui-search-box-button', classNames?.reset)}
            aria-label={labels?.reset}
          >
            {resetIcon ? (
              <span className={clsx('lui-search-box-reset-icon', classNames?.resetIcon)}>
                {resetIcon()}
              </span>
            ) : (
              <CloseIcon
                className={clsx('lui-search-box-reset-icon', classNames?.resetIcon)}
                ref={closeIconRef}
              />
            )}
          </button>
        </Form.Root>

        {children && (
          <FloatingPortal>
            {open && (
              <FloatingFocusManager
                context={context}
                initialFocus={-1}
                order={['reference', 'content']}
                visuallyHiddenDismiss
              >
                <div
                  className="lui-styled"
                  ref={refs.setFloating}
                  style={floatingStyles}
                  {...getFloatingProps()}
                >
                  {children}
                </div>
              </FloatingFocusManager>
            )}
          </FloatingPortal>
        )}
      </>
    );
  },
);

SearchBox.displayName = 'SearchBox';

export const Suggestions = (props: SuggestionsProps): ReactElement => {
  const {
    configuration,
    suggestOptions,
    debounceDelay,
    labels,
    classNames,
    onQuerySelect,
    onSearchSelect,
    onAttributeSelect,
    ...rest
  } = props;
  const searchContext = useContext(SearchContext);

  if (!searchContext) {
    throw new Error('SearchContext not provided');
  }

  const { inputValue, setInputValue } = searchContext;

  const { response } = useSuggestions(props, inputValue);

  const floatingUIContext = useContext(FloatingUIContext);

  const queryItemProps = (index: number, query: SuggestResponseQuerySuggestions) => {
    if (!floatingUIContext) {
      return {};
    }

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

  const searchItemProps = (
    index: number,
    offset: number,
    query: SuggestResponseSearchSuggestions,
  ) => {
    if (!floatingUIContext) {
      return {};
    }

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

  const attributeItemProps = (
    index: number,
    offset: number,
    query: SuggestResponseAttributeSuggestions,
  ) => {
    if (!floatingUIContext) {
      return {};
    }

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
            key={index}
          >
            {group.catalogName} - {group.view}
          </Tabs.Trigger>
        ))}
      </Tabs.List>

      {response.suggestionGroups?.map((group, index) => (
        <Tabs.Content
          className={clsx('lui-suggestions-tab-content', classNames?.content)}
          value={`${index}`}
          key={index}
        >
          {inputValue && (
            <a
              className={clsx('lui-suggestions-item', 'lui-suggestions-first-query')}
              {...queryItemProps(0, { query: inputValue, displayText: inputValue })}
            >
              <span>
                Search for: <span className="lui-suggestions-first-query-value">{inputValue}</span>
              </span>

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
                      {...attributeItemProps(index, group.querySuggestions?.length ?? 0, attribute)}
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
                        product,
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
                          <ProductCard.Price price={Number(product.sale_price)} />
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
