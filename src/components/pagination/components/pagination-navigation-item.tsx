import cn from 'clsx';
import * as Toolbar from '@radix-ui/react-toolbar';
import { usePagination } from '../pagination-context';
import { SEPARATOR } from './pagination-navigation-helpers';
import type { PaginationNavigationItemType } from '../pagination.types';
import { ReactElement } from 'react';
import { Number } from '../../number';

export interface PaginationNavigationItemProps {
  value: PaginationNavigationItemType;
}

export function PaginationNavigationItem({ value }: PaginationNavigationItemProps): ReactElement {
  const paginationCtx = usePagination();

  if (!paginationCtx) {
    throw new Error('PaginationNavigationItem must be used within a Pagination.Provider');
  }

  const { page, onPageChange } = paginationCtx;
  const isPage = typeof value === 'number';
  const label = isPage ? <Number value={value + 1} /> : value;
  const disabled = value === SEPARATOR || page === value;
  const selected = page === value;

  const getAriaLabel = (): string | undefined => {
    if (!isPage) {
      return undefined;
    }

    if (selected) {
      return `Current page, page ${value + 1}`;
    }

    return `Go to page ${value + 1}`;
  };

  const handleOnClick = (): void => {
    if (typeof value === 'number') {
      onPageChange?.(value);
    }
  };

  return (
    <Toolbar.Button
      aria-current={selected ? true : undefined}
      aria-label={getAriaLabel()}
      className={cn(
        'lui-pagination__navigation__button',
        'lui-pagination__navigation__item',
        { 'lui-pagination__navigation__item--selected': selected },
      )}
      disabled={disabled}
      onClick={handleOnClick}
    >
      {label}
    </Toolbar.Button>
  );
}
