import type { ReactElement } from 'react';
import { forwardRef } from 'react';

import '../search-box.scss';

import type { SearchBoxProps } from '../search-box.types';

import { FloatingUIContextProvider } from '../../../contexts/floating-ui.context';
import { SearchBoxForm } from './search-box-form';

/**
 * A search box component to interface with the Bloomreach Discovery search
 * functionality
 */
export const SearchBoxRoot = forwardRef<HTMLFormElement, SearchBoxProps>(
  (props, forwardedRef): ReactElement => {
    const { children } = props;

    return (
      <FloatingUIContextProvider>
        <SearchBoxForm {...props} ref={forwardedRef}>
          {children}
        </SearchBoxForm>
      </FloatingUIContextProvider>
    );
  },
);

SearchBoxRoot.displayName = 'SearchBox';
