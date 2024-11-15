import { PaginationItemsPerPageSelector } from './components/pagination-items-per-page-selector';
import { PaginationSummary } from './components/pagination-summary';
import { PaginationNextButton } from './components/pagination-next-button';
import { PaginationPreviousButton } from './components/pagination-previous-button';
import { PaginationRoot } from './components/pagination-root';
import { PaginationNavigation } from './components/pagination-navigation';
import { PaginationPages } from './components/pagination-pages';
import { PaginationOverview } from './components/pagination-overview';
import { PaginationProvider } from './pagination-context';

export * from './pagination.types';

export const Pagination = {
  Root: PaginationRoot,
  Provider: PaginationProvider,
  Summary: PaginationSummary,
  ItemsPerPageSelector: PaginationItemsPerPageSelector,
  Navigation: PaginationNavigation,
  Pages: PaginationPages,
  NextButton: PaginationNextButton,
  PreviousButton: PaginationPreviousButton,
  Overview: PaginationOverview,
};

export type {
  PaginationProps,
  PaginationCountProps,
  PaginationOverviewProps,
  PaginationProviderProps,
  PaginationRootProps,
  PaginationSummaryProps,
  PaginationNavigationItemsListType,
  PaginationItemsPerPageOptionsType,
  PaginationNavigationItemType,
  PaginationNavigationProps,
} from './pagination.types';

export {
  ChevronLeftIcon,
  ChevronRightIcon,
} from '@radix-ui/react-icons';
