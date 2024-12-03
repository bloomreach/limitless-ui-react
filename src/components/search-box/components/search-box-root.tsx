import type { ReactElement } from 'react';
import { forwardRef } from 'react';

import '../search-box.scss';

import type { SearchBoxProps } from '../search-box.types';

import { FloatingUIContextProvider } from '../../../contexts/floating-ui.context';
import { SearchBoxForm } from './search-box-form';
import { ConfigurationContextProvider } from '../../../contexts/configuration.context';

/**
 * A search box component to interface with the Bloomreach Discovery search
 * functionality
 *
 * ### Usage
 *
 * ```tsx
 * import { SearchBox } from '@bloomreach/limitless-ui-react';
 *
 * // Basic usage
 * <SearchBox.Root
 *   configuration={{
 *     account_id: 7634,
 *     auth_key: 'your-auth-key',
 *     domain_key: 'your-domain'
 *   }}
 *   searchOptions={{
 *     fl: 'pid,title,description',
 *     rows: 2,
 *     start: 0,
 *     url: 'https://example.com'
 *   }}
 *   searchType="product"
 *   labels={{
 *     placeholder: 'Enter search here',
 *     submit: 'Submit',
 *     reset: 'Reset'
 *   }}
 * />
 *
 * // With autosuggest
 * <SearchBox.Root
 *   configuration={configuration}
 *   searchOptions={searchOptions}
 *   searchType="product"
 * >
 *   <SearchBox.Suggestions
 *     configuration={configuration}
 *     suggestOptions={{
 *       catalog_views: 'your-catalog',
 *       url: 'https://example.com'
 *     }}
 *   />
 * </SearchBox.Root>
 * ```
 */
export const SearchBoxRoot = forwardRef<HTMLFormElement, SearchBoxProps>(
  (props, forwardedRef): ReactElement => {
    const { children } = props;

    return (
      <ConfigurationContextProvider configuration={props.configuration}>
        <FloatingUIContextProvider>
          <SearchBoxForm {...props} ref={forwardedRef}>
            {children}
          </SearchBoxForm>
        </FloatingUIContextProvider>
      </ConfigurationContextProvider>
    );
  },
);

SearchBoxRoot.displayName = 'SearchBox';
