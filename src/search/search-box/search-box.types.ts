import {
  BestsellerOptions,
  CategorySearchOptions,
  Configuration,
  ContentSearchOptions,
  ProductSearchOptions,
} from '@bloomreach/discovery-web-sdk';
import { ComponentPropsWithRef, PropsWithChildren, ReactElement } from 'react';

export type SearchBoxProps = PropsWithChildren &
  Pick<ComponentPropsWithRef<'form'>, 'onSubmit' | 'onReset'> &
  Pick<ComponentPropsWithRef<'input'>, 'onChange' | 'name'> & {
    /**
     * The Configuration for creating a Bloomreach search integration
     */
    configuration: Configuration;

    /**
     * The options specific to a Bloormeach search e.g. `q` and `fl`
     */
    searchOptions:
      | Omit<ProductSearchOptions, 'q'>
      | Omit<ContentSearchOptions, 'q'>
      | Omit<BestsellerOptions, 'q'>
      | Omit<CategorySearchOptions, 'q'>;

    /**
     * The type of search.
     */
    searchType: SearchType;

    /**
     * Enable autoQuery
     */
    autoQuery?: boolean;

    /**
     * The number of miliseconds the auto-search should be debounced
     */
    debounceDelay?: number;

    /**
     * Classnames to be added to their respective elements, e.g. input or submit button
     */
    classNames?: Partial<Record<SearchBoxClassElement, string>>;

    /**
     * Text to be added to their respective elements, e.g. input label or submit button
     */
    labels?: Partial<Record<SearchBoxLabelElement, string>>;

    /**
     * Icon to be added to the Submit button
     */
    submitIcon?: () => ReactElement;

    /**
     * Icon to be added to the Reset button
     */
    resetIcon?: () => ReactElement;
  };

/**
 * The type of search.
 */
export type SearchType = 'product' | 'category' | 'content' | 'bestseller';

/**
 * Elements that can recieve additional classNames
 */
export type SearchBoxClassElement =
  | 'form'
  | 'input'
  | 'label'
  | 'submit'
  | 'submitIcon'
  | 'reset'
  | 'resetIcon';

/**
 * Elements that can recieve additional classNames
 */
export type SearchBoxLabelElement = 'placeholder' | 'label' | 'submit' | 'reset';
