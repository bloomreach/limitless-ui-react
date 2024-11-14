import { ForwardedRef, forwardRef } from 'react';
import { usePagination as usePagination } from '../pagination-context';
import { getNavItems } from './pagination-navigation-helpers';
import { PaginationNavigationItem } from './pagination-navigation-item';

export const PaginationPages = forwardRef((
  props,
  forwardedRef: ForwardedRef<HTMLDivElement> | null,
): JSX.Element | null => {
  const paginationCtx = usePagination();

    if (!paginationCtx) {
      throw new Error('Pagination.Pages must be used within a Pagination.Provider');
    }

    const { count, page, itemsPerPage, onPageChange, pagesLimit, pagesBuffer } = paginationCtx;

    if (count <= itemsPerPage) {
      return null;
    }

    const navItems = getNavItems(page, Math.ceil(count / itemsPerPage), pagesLimit, pagesBuffer);
    return (
      <>
        {navItems.map((item, index) => (
          <PaginationNavigationItem key={index} value={item} />
        ))}
      </>
    );
  }
);

PaginationPages.displayName = 'Pagination.Pages';
