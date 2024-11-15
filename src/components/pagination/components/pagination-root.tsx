import cn from 'clsx';
import { ForwardedRef, forwardRef, ReactElement, useMemo } from 'react';
import { PaginationRootProps } from '../pagination.types';
import { PaginationProvider } from '../pagination-context';

import '../pagination.scss';

/**
 * Pagination component to display pagination links and manage the number of items per page
 *
 * ### Usage
 * ```tsx
 * import { Pagination } from '@bloomreach/react-banana-ui'
 *
 * const [page, setPage] = useState(0)
 * const [perPage, setPerPage] = useState(25)
 *
 * <Pagination.Root
 *   count={100}
 *   itemsPerPage={perPage}
 *   page={page}
 *   onPageChange={setPage}
 *   itemsPerPageOptions={[10, 25, 50]}
 *   onItemsPerPageChange={setPerPage}
 * />
 *  <Pagination.Summary render={(start, end, total, page, totalPages) => (`${start}-${end}/${total} items`)} />
 *  <Pagination.Overview>
 *    <Pagination.ItemsPerPageSelector />
 *    <Pagination.Summary />
 *  </Pagination.Overview>
 *  <Pagination.Navigation>
 *    <Pagination.PreviousButton />
 *    <Pagination.Pages />
 *    <Pagination.NextButton />
 *  </Pagination.Navigation>
 * </Pagination.Root>
 * ```
 */
export const PaginationRoot = forwardRef((
  props: PaginationRootProps,
  forwardedRef: ForwardedRef<HTMLDivElement> | null,
): ReactElement | null => {
  const {
    count,
      children,
      className,
      page,
      itemsPerPage,
      itemsPerPageOptions,
      onPageChange,
      onItemsPerPageChange,
      pagesLimit,
      pagesBuffer,
      ...rest
    } = props;

    const value = useMemo(() => {
      return {
        count,
        page,
        itemsPerPage,
        itemsPerPageOptions,
        onPageChange,
        onItemsPerPageChange,
        pagesLimit,
        pagesBuffer
      }
    }, [count, page, itemsPerPage, itemsPerPageOptions, onPageChange, onItemsPerPageChange, pagesLimit, pagesBuffer])

    if (count < 1) {
      return null;
    }


    return (
      <div {...rest} className={cn('lui-pagination', className)} ref={forwardedRef}>
      <PaginationProvider value={value}>
          {children}
      </PaginationProvider>
      </div>
    );
  },
);

PaginationRoot.displayName = 'Pagination.Root';
