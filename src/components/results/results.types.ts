import { SearchResponseDoc } from '@bloomreach/discovery-web-sdk';
import { PropsWithChildren, ReactNode } from 'react';

export interface ResultItemProps {
  /**
   * The search result document to render
   */
  result: SearchResponseDoc;
}

export interface ResultsProps extends PropsWithChildren {
  /**
   * Custom class name for the container of the component.
   */
  className?: string;

  /**
   * Render prop function to render each result item
   * @param props ResultItemProps containing the search result document
   * @returns ReactNode
   */
  resultComponent: (props: ResultItemProps) => ReactNode;
}
