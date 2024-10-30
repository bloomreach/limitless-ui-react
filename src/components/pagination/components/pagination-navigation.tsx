import * as Toolbar from '@radix-ui/react-toolbar';
import { ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons';
import { usePaginationContext } from '../pagination-context';
import { getNavItems } from './pagination-navigation-helpers';
import { PaginationNavigationItem } from './pagination-navigation-item';

export function PaginationNavigation(): JSX.Element | null {
  const paginationCtx = usePaginationContext();

  if (!paginationCtx) {
    throw new Error('PaginationNavigation must be used within a PaginationContext.Provider');
  }

  const { count, page, itemsPerPage, onPageChange } = paginationCtx;

  if (count <= itemsPerPage) {
    return null;
  }

  const onNext = (): void => {
    onPageChange?.(page + 1);
  };

  const onPrev = (): void => {
    onPageChange?.(page - 1);
  };

  const navItems = getNavItems(page, Math.ceil(count / itemsPerPage));
  return (
    <Toolbar.Root>
      <nav role="navigation" aria-label="Pagination Navigation"
           className="lui-pagination-navigation">
        <ul>
          <li>
            <Toolbar.Button
              className="lui-pagination-navigation-button"
              onClick={onPrev}
              aria-label="Go to previous page"
              disabled={page === 0}
            >
              <ChevronLeftIcon />
            </Toolbar.Button>
          </li>
          {navItems.map((item, index) => (
            <li key={`lui-pagination-${item}-${index}`}>
              <PaginationNavigationItem value={item} />
            </li>
          ))}
          <li>
            <Toolbar.Button
              className="lui-pagination-navigation-button"
              onClick={onNext}
              aria-label="Go to next page"
              disabled={page >= Math.ceil(count / itemsPerPage) - 1}
            >
              <ChevronRightIcon />
            </Toolbar.Button>
          </li>
        </ul>
      </nav>
    </Toolbar.Root>

  );
}
