import { HTMLProps } from "react";
import { PropsWithChildren } from "react";
import {
  ToolbarProps,
} from '@radix-ui/react-toolbar';

export type PaginationItemsPerPageOptionsType = Array<number | { label: string; value: number }>;
export type PaginationNavigationItemType = number | '...';
export type PaginationNavigationItemsListType = Array<PaginationNavigationItemType>;
export interface PaginationProps {
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
  * Total number of pages to show in the navigation.
  */
 pagesLimit?: number;
 /**
  * Number of pages to show before and after the current page in the navigation.
  */
 pagesBuffer?: number;
 /**
  * Callback fired when the page is changed.
  */
 onPageChange?: (page: number) => void;
 /**
  * Customizes the options of the items per page select field.
  * If less than two options are available, no select field will be displayed
  */
 itemsPerPageOptions?: PaginationItemsPerPageOptionsType;
 /**
  * Callback fired when the number of items per page is changed
  */
 onItemsPerPageChange?: (itemsPerPage: number) => void;
}

export interface PaginationRootProps extends PropsWithChildren, PaginationProps, HTMLProps<HTMLDivElement> {
  /**
  * Custom class name for the container of this component
  */
 className?: string;
}

export interface PaginationCountProps  extends PropsWithChildren, HTMLProps<HTMLSpanElement> {
   /**
   * Custom class name for the container of the component.
   */
   className?: string;
}

export interface PaginationOverviewProps extends PropsWithChildren, HTMLProps<HTMLDivElement> {
  /**
   * Custom class name for the container of the component.
   */
  className?: string;
}

export interface PropsWithChildrenAndClassName extends PropsWithChildren, HTMLProps<HTMLDivElement> {
  /**
   * Custom class name for the container of the component.
   */
  className?: string;
}

export interface PaginationProviderProps extends PropsWithChildren {
  value: PaginationProps,
}


export interface PaginationSummaryProps extends PropsWithChildren, HTMLProps<HTMLDivElement> {
  /**
   * Custom class name for the container of the component.
   */
  className?: string;
  /**
   * Custom render function for the summary.
   * @param start - The start index of the current page.
   * @param end - The end index of the current page.
   * @param page - The current page number.
   * @param total - The total number of items.
   * @param totalPages - The total number of pages.
   * @returns The React node to render.
   */
  render?: (start: number, end: number, total: number, page: number, totalPages: number) => React.ReactNode;
}

export interface PaginationNavigationProps extends ToolbarProps, PropsWithChildren {
  /**
   * Custom class name for the container of the component.
   */
  className?: string;
}
