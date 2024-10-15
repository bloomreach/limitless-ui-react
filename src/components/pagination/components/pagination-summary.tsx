import { usePaginationContext } from '../pagination-context';
import React, { ReactElement } from 'react';

import '../pagination.scss';

export function PaginationSummary(): ReactElement {
  const paginationCtx = usePaginationContext();

  if (!paginationCtx) {
    throw new Error('PaginationSummary must be used within a PaginationContext.Provider');
  }

  const { count, page, itemsPerPage } = paginationCtx;
  const start = page * itemsPerPage + 1;
  const end = Math.min((page + 1) * itemsPerPage, count);
  return (
    <div className="lui-pagination-summary">
      Showing {start.toLocaleString()} {start !== end ? <>to {end.toLocaleString()} </> : null}
      of {count.toLocaleString()}
    </div>
  );
}
