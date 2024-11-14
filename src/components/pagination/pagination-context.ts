import { createContext, useContext } from 'react';

import type { PaginationProps } from './pagination.types';

const PaginationContext = createContext<PaginationProps | null>(null);

export function usePagination(): PaginationProps | null {
  return useContext(PaginationContext);
}

export const PaginationProvider = PaginationContext.Provider;

export default PaginationContext;
