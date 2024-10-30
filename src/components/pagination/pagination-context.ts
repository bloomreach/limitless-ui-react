import { createContext, useContext } from 'react';

import type { PaginationProps } from './pagination.types';

const PaginationContext = createContext<PaginationProps | null>(null);

export function usePaginationContext(): PaginationProps | null {
  return useContext(PaginationContext);
}

export default PaginationContext;
