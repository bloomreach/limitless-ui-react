import cn from 'clsx';
import * as Toolbar from '@radix-ui/react-toolbar';
import { usePagination } from '../pagination-context';
import { ForwardedRef, forwardRef } from 'react';
import { PaginationNavigationProps } from '../pagination.types';

export const PaginationNavigation = forwardRef((
  props: PaginationNavigationProps,
  forwardedRef: ForwardedRef<HTMLDivElement> | null,
): JSX.Element | null => {
  const { className, children, ...rest } = props;
  const paginationCtx = usePagination();

  if (!paginationCtx) {
    throw new Error('Pagination.Navigation must be used within a Pagination.Provider');
  }

  const { count, itemsPerPage } = paginationCtx;

  if (count <= itemsPerPage) {
    return null;
  }

  return (
    <Toolbar.Root {...rest} className={cn('lui-pagination__navigation', className)} ref={forwardedRef} >
      {children}
    </Toolbar.Root>
  );
});

PaginationNavigation.displayName = 'Pagination.Navigation';
