import cn from 'clsx';
import { ForwardedRef, forwardRef, ReactElement } from 'react';
import { PaginationOverviewProps } from '../pagination.types';

export const PaginationOverview = forwardRef((
  props: PaginationOverviewProps,
  forwardedRef: ForwardedRef<HTMLDivElement> | null,
): ReactElement => {
  const {className, children, ...rest} = props;

  return (
    <div {...rest} className={cn('lui-pagination__overview', className)} ref={forwardedRef} >
      {children}
    </div>
  );
});

PaginationOverview.displayName = 'Pagination.Overview';
