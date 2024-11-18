import * as Tabs from '@radix-ui/react-tabs';
import { clsx } from 'clsx';
import type { ReactElement } from 'react';
import { useContext } from 'react';

import type { SuggestionsProps } from '../search-box.types';

import { SearchContext } from '../../../contexts';
import { useSuggestions } from '../../../hooks/suggestions.hook';

import { FloatingFocusManager, FloatingPortal } from '@floating-ui/react';
import { FloatingUIContext } from '../../../contexts/floating-ui.context';
import { AttributeSuggestions } from './attribute-suggestions';
import { FirstQuery } from './first-query';
import { QuerySuggestions } from './query-suggestions';
import { SearchSuggestions } from './search-suggestions';

export const Suggestions = (props: SuggestionsProps): ReactElement => {
  const {
    configuration,
    suggestOptions,
    debounceDelay,
    labels,
    onQuerySelect,
    onAttributeSelect,
    onSearchSelect,
    classNames,
    ...rest
  } = props;
  const searchContext = useContext(SearchContext);

  if (!searchContext) {
    throw new Error('SearchContext not provided');
  }

  const floatingUIContext = useContext(FloatingUIContext);

  if (!floatingUIContext) {
    throw new Error('Floating UI Provider is not provided');
  }

  const { inputValue, setInputValue } = searchContext;

  const { response } = useSuggestions(props, inputValue);

  const { refs, open, floatingStyles, getFloatingProps, context } = floatingUIContext;

  return response ? (
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
            <Tabs.Root
              className={clsx('lui-suggestions', classNames?.root)}
              defaultValue={'0'}
              {...rest}
            >
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
                  <FirstQuery inputValue={inputValue} />

                  <div
                    className={clsx('lui-suggestions-categories', classNames?.suggestionCategories)}
                  >
                    {group.querySuggestions && group.querySuggestions.length > 0 && (
                      <QuerySuggestions
                        labels={labels}
                        classNames={classNames}
                        group={group.querySuggestions}
                        inputValue={inputValue}
                        setInputValue={setInputValue}
                        onQuerySelect={onQuerySelect}
                      />
                    )}
                    {group.attributeSuggestions && group.attributeSuggestions.length > 0 && (
                      <AttributeSuggestions
                        labels={labels}
                        classNames={classNames}
                        group={group.attributeSuggestions}
                        inputValue={inputValue}
                        offset={group.querySuggestions?.length ?? 0}
                        onAttributeSelect={onAttributeSelect}
                      />
                    )}
                    {group.searchSuggestions && group.searchSuggestions.length > 0 && (
                      <SearchSuggestions
                        labels={labels}
                        classNames={classNames}
                        group={group.searchSuggestions}
                        inputValue={inputValue}
                        offset={
                          (group.querySuggestions?.length ?? 0) +
                          (group.attributeSuggestions?.length ?? 0)
                        }
                        onSearchSelect={onSearchSelect}
                      />
                    )}
                  </div>
                </Tabs.Content>
              ))}
            </Tabs.Root>
          </div>
        </FloatingFocusManager>
      )}
    </FloatingPortal>
  ) : (
    <></>
  );
};

Suggestions.displayName = 'Suggestions';
