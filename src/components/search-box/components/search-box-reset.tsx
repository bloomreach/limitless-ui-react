import clsx from 'clsx';
import { SearchBoxResetProps } from '../search-box.types';
import { forwardRef } from 'react';
import { CloseIcon } from '../../../icons/clear-icon';

export const SearchBoxReset = forwardRef<HTMLButtonElement, SearchBoxResetProps>(
  (props, forwardedRef) => {
    const { children, classNames, labels } = props;
    return (
      <button
        type="reset"
        className={clsx('lui-search-box-reset lui-search-box-button', classNames?.reset)}
        ref={forwardedRef}
        aria-label={labels?.reset}
      >
        {children ? (
          <span className={clsx('lui-search-box-reset-icon', classNames?.resetIcon)}>
            {children}
          </span>
        ) : (
          <CloseIcon className={clsx('lui-search-box-reset-icon', classNames?.resetIcon)} />
        )}
      </button>
    );
  },
);
