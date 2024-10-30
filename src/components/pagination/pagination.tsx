import cn from 'clsx';
import { ForwardedRef, forwardRef, ReactElement } from 'react';
import { PaginationProps } from './pagination.types';
import PaginationContext from './pagination-context';
import {
  PaginationItemsPerPageSelector
} from './components/pagination-items-per-page-selector';
import { PaginationSummary } from './components/pagination-summary';
import { PaginationNavigation } from './components/pagination-navigation';

import './pagination.scss';

/**
 * Pagination component to display pagination links and manage the number of items per page
 *
 * ### Usage
 * ```tsx
 * import { Pagination } from '@bloomreach/react-banana-ui'
 *
 * <Pagination
 *   count={100}
 *   itemsPerPage={10}
 *   page={0}
 *   onPageChange={(page) => console.log(page)}
 *   itemsPerPageOptions={[10, 25, 50]}
 *   onItemsPerPageChange={(num) => console.log(num)}
 * />
 * ```
 */
export const Pagination = forwardRef(
  (props: PaginationProps, forwardedRef: ForwardedRef<HTMLDivElement>): ReactElement | null => {
    const { count, className, page, itemsPerPage, itemsPerPageOptions, onPageChange, onItemsPerPageChange, ...rest } =
      props;

    if (count < 1) {
      return null;
    }

    return (
      <PaginationContext.Provider value={props}>
        <div {...rest} className={cn('lui-pagination', className)} ref={forwardedRef}>
          <div className="lui-pagination-left">
            <PaginationItemsPerPageSelector />
            <PaginationSummary />
          </div>
          <PaginationNavigation />
        </div>
      </PaginationContext.Provider>
    );
  },
);

Pagination.displayName = 'Pagination';

export default Pagination;
