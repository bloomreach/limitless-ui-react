import cn from 'clsx';
import { usePagination } from '../pagination-context';
import { ReactElement, forwardRef } from 'react';
import { PaginationSummaryProps } from '../pagination.types';
import { Number } from '../../number';

export const PaginationSummary = forwardRef<HTMLDivElement, PaginationSummaryProps>((props, ref): ReactElement => {
  const { className, render, ...rest } = props;
  const paginationCtx = usePagination();

  if (!paginationCtx) {
    throw new Error('Pagination.Summary must be used within PaginationProvider');
  }

  const { count, page, itemsPerPage } = paginationCtx;
  const start = page * itemsPerPage + 1;
  const end = Math.min((page + 1) * itemsPerPage, count);
  const totalPages = Math.ceil(count / itemsPerPage);
  const content = render ? render(start, end, count, page + 1, totalPages) : (
    <>
      Showing <Number value={start} /> {start !== end ? <> to <Number value={end} /> </> : null}
      of <Number value={count} />
    </>
  );

  return (
    <div ref={ref} className={cn("lui-pagination__summary", className)} {...rest}>
      {content}
    </div>
  );
});

PaginationSummary.displayName = 'Pagination.Summary';
