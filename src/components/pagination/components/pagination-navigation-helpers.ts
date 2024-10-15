import { PAGINATION_PAGES_BUFFER, PAGINATION_PAGES_LIMIT } from '../pagination-config';
import type { PageNavigationItemsListType } from '../pagination.types';

export const SEPARATOR = '...';

export function range(from: number, count: number): Array<number> {
  return Array(count)
    .fill(0)
    .map((_, index) => index + from);
}

/**
 * This function generates the pagination navigation links and separators.
 * The output is an array of numbers and separators
 * Eg., [1, 2, 3, 4, 5, 6, 7, '...', 10]
 * @param currentPageIndex index of the current page
 * @param totalPages total number of pages
 */
export function getNavItems(currentPageIndex: number, totalPages: number): PageNavigationItemsListType {
  const navItems: PageNavigationItemsListType = [];
  const lastPageIndex = totalPages - 1;

  if (totalPages <= PAGINATION_PAGES_LIMIT) {
    // If it is under the pages limit, just show all the pages
    range(0, totalPages).map((p) => navItems.push(p));
  } else {
    // If not, start by adding the first page, since the first and last will always be shown
    navItems.push(0);

    // On the left, we want to show one extra page after the selected page
    // Check if the current page index is under that threshold
    // If the page limit is 9, the currentPageIndex should be below 5 (page no 6), so we have space
    // to show pages 7, '...', <last page>, totalling the number of shown items to 9
    if (currentPageIndex <= PAGINATION_PAGES_LIMIT - PAGINATION_PAGES_BUFFER * 2) {
      range(1, PAGINATION_PAGES_LIMIT - PAGINATION_PAGES_BUFFER - 1).map((p) => navItems.push(p));
    } else {
      navItems.push(SEPARATOR);
    }

    // If the current page is not close to the start or the end pages, then show the current page
    // and pages equal to the buffer on both sides
    if (
      currentPageIndex > PAGINATION_PAGES_LIMIT - PAGINATION_PAGES_BUFFER * 2 &&
      currentPageIndex < lastPageIndex - PAGINATION_PAGES_BUFFER - 1
    ) {
      range(currentPageIndex - PAGINATION_PAGES_BUFFER, PAGINATION_PAGES_LIMIT - PAGINATION_PAGES_BUFFER * 2).map((p) =>
        navItems.push(p),
      );
    }

    // On the right too, we want to show one extra page before the selected page
    if (currentPageIndex >= lastPageIndex - PAGINATION_PAGES_BUFFER - 1) {
      range(
        totalPages - (PAGINATION_PAGES_LIMIT - PAGINATION_PAGES_BUFFER),
        PAGINATION_PAGES_LIMIT - PAGINATION_PAGES_BUFFER - 1,
      ).map((p) => navItems.push(p));
    } else {
      navItems.push(SEPARATOR);
    }

    // End by adding the last page, since the first and last will always be shown
    navItems.push(lastPageIndex);
  }

  return navItems;
}
