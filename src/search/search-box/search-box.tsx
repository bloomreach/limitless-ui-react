import { clsx } from 'clsx';
import type { ChangeEvent, KeyboardEventHandler, ReactElement } from 'react';
import { forwardRef, useContext, useRef } from 'react';

import './search-box.scss';

import * as Form from '@radix-ui/react-form';
import { useSearchBox } from './search-box.hook';
import type { SearchBoxProps } from './search-box.types';

import { FloatingUIContext } from '../context/floating-ui.context';
import { Suggestions } from '../suggestions/suggestions';
import { FloatingFocusManager, FloatingPortal } from '@floating-ui/react';

/**
 * A search box component to interface with the Bloomreach Discovery search
 * functionality
 */
export const SearchBox = forwardRef<HTMLFormElement, SearchBoxProps>(
  (props, forwardedRef): ReactElement => {
    const {
      configuration,
      searchOptions,
      suggestOptions,
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
      ...elementProps
    } = props;
    const { changeHandler, inputValue, submitHandler, resetHandler } = useSearchBox(props);
    const fieldName = elementProps.name || 'lcui-search-box-input';
    const submitRef = useRef<HTMLButtonElement>(null);

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

    return (
      <>
        <Form.Root
          role="search"
          onSubmit={submitHandler}
          onReset={resetHandler}
          ref={forwardedRef}
          className={clsx('lcui-search-box-form', classNames?.form)}
          {...elementProps}
        >
          <Form.Field name={fieldName}>
            {labels?.label && (
              <Form.Label className={clsx('lcui-search-box-label', classNames?.label)}>
                {labels.label}
              </Form.Label>
            )}

            <Form.Control asChild>
              <input
                autoComplete="off"
                aria-autocomplete="none"
                ref={refs.setReference}
                onChange={inputChange}
                onFocus={() => {
                  setOpen(!!inputValue);
                }}
                {...getReferenceProps()}
                value={inputValue}
                onKeyDown={handleKeyDown}
                className={clsx('lcui-search-box-input', classNames?.input)}
                placeholder={labels?.placeholder}
              />
            </Form.Control>
          </Form.Field>

          <Form.Submit asChild>
            <button
              type="submit"
              className={clsx('lcui-search-box-submit', classNames?.submit)}
              ref={submitRef}
            >
              {submitIcon && (
                <span className={clsx('lcui-search-box-submit-icon', classNames?.submitIcon)}>
                  {submitIcon()}
                </span>
              )}
              {labels?.submit}
            </button>
          </Form.Submit>

          <button type="reset" className={clsx('lcui-search-box-reset', classNames?.reset)}>
            {resetIcon && (
              <span className={clsx('lcui-search-box-reset-icon', classNames?.resetIcon)}>
                {resetIcon()}
              </span>
            )}
            {labels?.reset}
          </button>
        </Form.Root>

        {suggestOptions && (
          <FloatingPortal>
            {open && (
              <FloatingFocusManager context={context} initialFocus={-1} visuallyHiddenDismiss>
                <div ref={refs.setFloating} style={floatingStyles} {...getFloatingProps()}>
                  <Suggestions
                    configuration={configuration}
                    suggestOptions={suggestOptions}
                    inputValue={inputValue}
                  ></Suggestions>
                </div>
              </FloatingFocusManager>
            )}
          </FloatingPortal>
        )}
      </>
    );
  },
);
