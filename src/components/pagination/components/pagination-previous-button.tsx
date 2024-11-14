import cn from 'clsx';
import { forwardRef, ButtonHTMLAttributes, ForwardedRef } from 'react';
import * as Toolbar from '@radix-ui/react-toolbar';
import { usePagination } from '../pagination-context';
import { ChevronLeftIcon } from '@radix-ui/react-icons';

export const PaginationPreviousButton = forwardRef((
  props: ButtonHTMLAttributes<HTMLButtonElement>,
  forwardedRef: ForwardedRef<HTMLButtonElement> | null,
): JSX.Element | null => {
  const { className, children, ...rest } = props;
  const paginationCtx = usePagination();

  if (!paginationCtx) {
    throw new Error('Pagination.PreviousButton must be used within a Pagination.Provider');
  }

  const { count, page, itemsPerPage, onPageChange } = paginationCtx;

  if (count <= itemsPerPage) {
    return null;
  }

  const onPrev = (): void => {
    onPageChange?.(page - 1);
  };

  return (
    <Toolbar.Button
      aria-label="Go to previous page"
      {...rest}
      ref={forwardedRef}
      className={cn("lui-pagination__navigation__button", className)}
      onClick={onPrev}
      disabled={page === 0}
    >
      {props.children || <ChevronLeftIcon className="lui-pagination__navigation__button__icon--arrow" />}
    </Toolbar.Button>
  );
});

PaginationPreviousButton.displayName = 'Pagination.PreviousButton';
