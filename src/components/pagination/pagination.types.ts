export type ItemsPerPageOptionsType = Array<number | { label: string; value: number }>;
export type PageNavigationItemType = number | '...';
export type PageNavigationItemsListType = Array<PageNavigationItemType>;
export interface PaginationProps {
   /**
   * Custom class name for the container of this component
   */
  className?: string;
  /**
   * Total number of items
   */
  count: number;
  /**
   * Zero-based index of the current page
   */
  page: number;
  /**
   * Number of items per page.
   */
  itemsPerPage: number;
  /**
   * Callback fired when the page is changed.
   */
  onPageChange?: (page: number) => void;
  /**
   * Customizes the options of the items per page select field.
   * If less than two options are available, no select field will be displayed
   */
  itemsPerPageOptions?: ItemsPerPageOptionsType;
  /**
   * Callback fired when the number of items per page is changed
   */
  onItemsPerPageChange?: (itemsPerPage: number) => void;
}
