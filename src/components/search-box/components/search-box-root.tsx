import { FloatingFocusManager, FloatingPortal, useMergeRefs } from '@floating-ui/react';
import * as Form from '@radix-ui/react-form';
import { clsx } from 'clsx';
import type { ChangeEvent, KeyboardEventHandler, ReactElement } from 'react';
import { forwardRef, useContext, useRef } from 'react';

import '../search-box.scss';

import { useSearchBox } from '../../../hooks/search-box.hook';
import type { SearchBoxProps } from '../search-box.types';

import { FloatingUIContext } from '../../../contexts/floating-ui.context';
import { CloseIcon } from '../../../icons/clear-icon';
import { SearchIcon } from '../../../icons/search-icon';

/**
 * A search box component to interface with the Bloomreach Discovery search
 * functionality
 */
export const SearchBoxRoot = forwardRef<HTMLFormElement, SearchBoxProps>(
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

SearchBoxRoot.displayName = 'SearchBox';
