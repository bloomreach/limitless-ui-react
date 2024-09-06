import { clsx } from 'clsx';
import type { ForwardedRef, ReactElement } from 'react';
import { forwardRef } from 'react';

import './search-box.scss';

import { Control, Field, Label, Root, Submit } from '@radix-ui/react-form';
import { useSearchBox } from './search-box.hook';
import type { SearchBoxProps } from './search-box.types';

/**
 * A search box component to interface with the Bloomreach Discovery search
 * functionality
 */
export const SearchBox = forwardRef(
  (props: SearchBoxProps, forwardedRef: ForwardedRef<HTMLFormElement> | null): ReactElement => {
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

    const inputID = elementProps.name || 'lcui-search-box-input';

    return (
      <Root
        onSubmit={submitHandler}
        ref={forwardedRef}
        className={clsx('lcui-search-box-form', classNames?.form)}
        {...elementProps}
      >
        <Field name={inputID}>
          {labels?.label && <Label>{labels.label}</Label>}

          <Control asChild>
            <input
              id={inputID}
              value={inputValue}
              onChange={changeHandler}
              className={clsx('lcui-search-box-input', classNames?.input)}
              placeholder={labels?.placeholder}
            />
          </Control>
        </Field>
        <Submit asChild>
          <button className={clsx('lcui-search-box-submit', classNames?.submit)} type="submit">
            {labels?.submit}
          </button>
        </Submit>
      </Root>
    );
  },
);
