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
      submitIcon,
      ...elementProps
    } = props;
    const { changeHandler, inputValue, submitHandler, resetHandler } = useSearchBox(props);

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
        onReset={resetHandler}
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
        </Submit>

        <button type="reset" className={clsx('lcui-search-box-reset', classNames?.reset)}>
          {labels?.reset}
        </button>
      </Root>
    );
  },
);
