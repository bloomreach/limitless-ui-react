import { clsx } from 'clsx';
import type { KeyboardEventHandler, ReactElement } from 'react';
import { forwardRef, useRef } from 'react';

import './search-box.scss';

import { Control, Field, Label, Root, Submit } from '@radix-ui/react-form';
import { useSearchBox } from './search-box.hook';
import type { SearchBoxProps } from './search-box.types';

/**
 * A search box component to interface with the Bloomreach Discovery search
 * functionality
 */
export const SearchBox = forwardRef<HTMLFormElement, SearchBoxProps>(
  (props, forwardedRef): ReactElement => {
    const {
      children,
      configuration,
      searchOptions,
      debounceDelay,
      searchType,
      classNames,
      labels,
      autoQuery,
      onSubmit,
      onChange,
      ...elementProps
    } = props;
    const { changeHandler, inputValue, submitHandler } = useSearchBox(props);

    const fieldName = elementProps.name || 'lcui-search-box-input';
    const submitRef = useRef<HTMLButtonElement>(null);

    const handleKeyDown: KeyboardEventHandler<HTMLInputElement> = (event) => {
      if (event.key === 'Enter') {
        submitRef.current?.click();
      }
    };

    return (
      <Root
        role="search"
        onSubmit={submitHandler}
        ref={forwardedRef}
        className={clsx('lcui-search-box-form', classNames?.form)}
        {...elementProps}
      >
        <Field name={fieldName}>
          {labels?.label && (
            <Label className={clsx('lcui-search-box-label', classNames?.label)}>
              {labels.label}
            </Label>
          )}

          <Control asChild>
            <input
              value={inputValue}
              onChange={changeHandler}
              onKeyDown={handleKeyDown}
              className={clsx('lcui-search-box-input', classNames?.input)}
              placeholder={labels?.placeholder}
            />
          </Control>
        </Field>
        <Submit asChild>
          <button
            className={clsx('lcui-search-box-submit', classNames?.submit)}
            type="submit"
            ref={submitRef}
          >
            {labels?.submit}
          </button>
        </Submit>
      </Root>
    );
  },
);
