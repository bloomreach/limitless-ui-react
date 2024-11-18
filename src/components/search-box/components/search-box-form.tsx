import { useMergeRefs } from '@floating-ui/react';
import * as Form from '@radix-ui/react-form';
import { clsx } from 'clsx';
import type { ChangeEvent, KeyboardEventHandler, ReactElement } from 'react';
import { forwardRef, useContext, useRef } from 'react';

import { useSearchBox } from '../../../hooks/search-box.hook';
import type { SearchBoxProps } from '../search-box.types';

import { FloatingUIContext } from '../../../contexts/floating-ui.context';
import { SearchBoxReset } from './search-box-reset';
import { SearchBoxSubmit } from './search-box-submit';

/**
 * A search box component to interface with the Bloomreach Discovery search
 * functionality
 */
export const SearchBoxForm = forwardRef<HTMLFormElement, SearchBoxProps>(
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

    const floatingUIContext = useContext(FloatingUIContext);

    if (!floatingUIContext) {
      throw new Error('Floating UI Provider is not provided');
    }

    const { refs, getReferenceProps, setOpen, open, handleInputChange } = floatingUIContext;

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
          <SearchBoxSubmit
            ref={submitRef}
            classNames={classNames}
            labels={labels}
          ></SearchBoxSubmit>

          <Form.Field name={fieldName} asChild>
            <Form.Control asChild>
              <input
                autoComplete="off"
                aria-autocomplete="none"
                aria-label={labels?.label}
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
          </Form.Field>

          <SearchBoxReset labels={labels} classNames={classNames}></SearchBoxReset>
        </Form.Root>

        {children}
      </>
    );
  },
);
