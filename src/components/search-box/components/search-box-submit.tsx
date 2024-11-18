import * as Form from '@radix-ui/react-form';
import { clsx } from 'clsx';
import { forwardRef, ReactElement } from 'react';
import { SearchIcon } from '../../../icons/search-icon';
import { SearchBoxSubmitProps } from '../search-box.types';

export const SearchBoxSubmit = forwardRef<HTMLButtonElement, SearchBoxSubmitProps>(
  (props, forwardedRef): ReactElement => {
    const { labels, classNames, children } = props;
    return (
      <Form.Submit asChild>
        <button
          type="submit"
          className={clsx('lui-search-box-submit lui-search-box-button', classNames?.submit)}
          ref={forwardedRef}
          aria-label={labels?.submit}
        >
          {children ? (
            <span className={clsx('lui-search-box-submit-icon', classNames?.submitIcon)}>
              {children}
            </span>
          ) : (
            <SearchIcon className={clsx('lui-search-box-submit-icon', classNames?.submitIcon)} />
          )}
        </button>
      </Form.Submit>
    );
  },
);
