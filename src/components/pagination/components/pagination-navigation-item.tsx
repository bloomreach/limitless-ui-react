import cn from 'clsx';
import * as Toolbar from '@radix-ui/react-toolbar';
import { usePaginationContext } from '../pagination-context';
import { SEPARATOR } from './pagination-navigation-helpers';
import type { PageNavigationItemType } from '../pagination.types';
import { ReactElement } from 'react';

import "../pagination.scss";

export interface PaginationNavigationItemProps {
  value: PageNavigationItemType;
}

export function PaginationNavigationItem({ value }: PaginationNavigationItemProps): ReactElement {
  const paginationCtx = usePaginationContext();

  if (!paginationCtx) {
    throw new Error('PaginationNavigationItem must be used within a PaginationContext.Provider');
  }

  const { page, onPageChange } = paginationCtx;
  const isPage = typeof value === 'number';
  const label = isPage ? (value + 1).toLocaleString() : value;
  const disabled = value === SEPARATOR || page === value;
  const selected = page === value;

  const getAriaLabel = (): string | undefined => {
    if (!isPage) {
      return undefined;
    }

    if (selected) {
      return `Current page, page ${label}`;
    }

    return `Go to page ${label}`;
  };

  const handleOnClick = (): void => {
    if (typeof value === 'number') {
      onPageChange?.(value);
    }
  };

  return (
    <Toolbar.Root>
      <Toolbar.Button
        aria-current={selected ? true : undefined}
        aria-label={getAriaLabel()}
        className={cn(
          'lui-pagination-navigation-button',
          'lui-pagination-navigation-item',
          { 'lui-pagination-navigation-item-selected': selected },
          { 'lui-pagination-navigation-item-disabled': disabled }
        )}
        disabled={disabled}
        onClick={handleOnClick}
      >
        {label}
      </Toolbar.Button>
    </Toolbar.Root>

  );
}
