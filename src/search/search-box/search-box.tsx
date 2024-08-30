import { clsx } from 'clsx';
import { forwardRef } from 'react';
import type { ForwardedRef, InputHTMLAttributes, ReactElement } from 'react';

import './search-box.scss';

import { useSearchBox } from './search-box.hook';
import type { SearchBoxProps } from './search-box.types';

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
      ...inputProps
    } = props;
    const { changeHandler } = useSearchBox(props);

    return (
      <input
        {...inputProps}
        onChange={changeHandler}
        className={clsx('lcui-search-box', classNames?.input)}
        ref={forwardedRef}
      />
    );
  },
);
