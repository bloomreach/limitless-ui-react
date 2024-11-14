import cn from 'clsx';
import { forwardRef, ButtonHTMLAttributes, ForwardedRef } from 'react';
import * as Toolbar from '@radix-ui/react-toolbar';
import { usePagination } from '../pagination-context';
import { ChevronRightIcon } from '@radix-ui/react-icons';
export const PaginationNextButton = forwardRef((
  props: ButtonHTMLAttributes<HTMLButtonElement>,
  forwardedRef: ForwardedRef<HTMLButtonElement> | null,
): JSX.Element | null => {
  const { className, children, ...rest } = props;
  const paginationCtx = usePagination();

  if (!paginationCtx) {
    throw new Error('Pagination.NextButton must be used within a Pagination.Provider');
  }

  const { count, page, itemsPerPage, onPageChange } = paginationCtx;

  if (count <= itemsPerPage) {
    return null;
  }

  const onNext = (): void => {
    onPageChange?.(page + 1);
  };

  return (
    <Toolbar.Button
      aria-label="Go to next page"
      {...rest}
      ref={forwardedRef}
      className={cn("lui-pagination__navigation__button", className)}
      onClick={onNext}
      disabled={page === Math.ceil(count / itemsPerPage) - 1}
    >
      {props.children || <ChevronRightIcon className="lui-pagination__navigation__button__icon--arrow" />}
    </Toolbar.Button>
  );
});

PaginationNextButton.displayName = 'Pagination.NextButton';
