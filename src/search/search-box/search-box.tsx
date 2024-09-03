import { clsx } from 'clsx';
import { forwardRef } from 'react';
import type { ForwardedRef, InputHTMLAttributes, ReactElement } from 'react';

import './search-box.scss';

import { useSearchBox } from './search-box.hook';
import type { SearchBoxProps } from './search-box.types';
import { Control, Field, Label, Root, Submit } from '@radix-ui/react-form';

/**
 * A search box component to interface with the Bloomreach Discovery search
 * functionality
 */
export const SearchBox = forwardRef(
  (
    props: SearchBoxProps & InputHTMLAttributes<HTMLInputElement>,
    forwardedRef: ForwardedRef<HTMLInputElement> | null,
  ): ReactElement => {
    const {
      children,
      configuration,
      searchOptions,
      debounceDelay,
      searchType,
      classNames,
      labels,
      autoQuery,
      ...inputProps
    } = props;
    const { changeHandler, inputValue, submitHandler } = useSearchBox(props);

    const inputID = inputProps.id || 'lcui-search-box-input';

    return (
      <>
        <Root onSubmit={submitHandler}>
          <Field name={inputProps.name || inputID}>
            {labels?.label && <Label>{labels.label}</Label>}
            <Control asChild>
              <input
                {...inputProps}
                id={inputID}
                value={inputValue}
                onChange={changeHandler}
                className={clsx('lcui-search-box', classNames?.input)}
                placeholder={labels?.placeholder}
                ref={forwardedRef}
              />
            </Control>
          </Field>
          <Submit asChild>
            <button type="submit">{labels?.submit}</button>
          </Submit>
        </Root>
      </>
    );
  },
);
