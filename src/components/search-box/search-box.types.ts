import {
  AutosuggestOptions,
  BestsellerOptions,
  CategorySearchOptions,
  Configuration,
  ContentSearchOptions,
  ProductSearchOptions,
  SuggestResponseAttributeSuggestions,
  SuggestResponseQuerySuggestions,
  SuggestResponseSearchSuggestions,
  SuggestResponseSuggestionGroups,
} from '@bloomreach/discovery-web-sdk';
import {
  ComponentPropsWithRef,
  Dispatch,
  MouseEvent,
  PropsWithChildren,
  ReactElement,
  SetStateAction,
} from 'react';

export type SearchBoxProps = PropsWithChildren &
  Pick<ComponentPropsWithRef<'form'>, 'onSubmit' | 'onReset'> &
  Pick<ComponentPropsWithRef<'input'>, 'onChange' | 'name'> & {
    /**
     * The Configuration for creating a Bloomreach search integration
     */
    configuration: Configuration;

    /**
     * The options specific to a Bloormeach search API e.g. `q` and `fl`
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
 * Labels that can be provided (for example with translations)
 */
export type SearchBoxLabelElement = 'placeholder' | 'label' | 'submit' | 'reset';

export type SearchBoxSubmitProps = PropsWithChildren & {
  /**
   * Classnames to be added to their respective elements, e.g. input or submit button
   */
  classNames?: Partial<Record<SearchBoxClassElement, string>>;

  /**
   * Text to be added to their respective elements, e.g. input label or submit button
   */
  labels?: Partial<Record<SearchBoxLabelElement, string>>;
};

export type SearchBoxResetProps = PropsWithChildren & {
  /**
   * Classnames to be added to their respective elements, e.g. input or reset button
   */
  classNames?: Partial<Record<SearchBoxClassElement, string>>;

  /**
   * Text to be added to their respective elements, e.g. input label or reset button
   */
  labels?: Partial<Record<SearchBoxLabelElement, string>>;
};

/**
 * Props for the suggestion component
 */
export type SuggestionsProps = {
  /**
   * The number of miliseconds the auto-search should be debounced
   */
  debounceDelay?: number;

  /**
   * The options specific to a Bloormeach suggestions request
   */
  suggestOptions: Omit<AutosuggestOptions, 'q'>;

  /**
   * The callback to execute when a query suggestion is clicked
   */
  onQuerySelect?: (query: SuggestResponseQuerySuggestions, event: MouseEvent<HTMLElement>) => void;

  /**
   * The callback to execute when a search suggestion is clicked
   */
  onSearchSelect?: (
    search: SuggestResponseSearchSuggestions,
    event: MouseEvent<HTMLElement>,
  ) => void;

  /**
   * The callback to execute when an attribute suggestion is clicked
   */
  onAttributeSelect?: (
    attribute: SuggestResponseAttributeSuggestions,
    event: MouseEvent<HTMLElement>,
  ) => void;
  /**
   * Classnames to be added to their respective elements, e.g. input or submit button
   */
  classNames?: Partial<Record<SuggestionsClassElement, string>>;

  /**
   * Text to be added to their respective elements, e.g. input label or submit button
   */
  labels?: Partial<Record<SuggestionsLabelElement, string>>;
};

/**
 * Elements that can recieve additional classNames
 */
export type SuggestionsClassElement =
  | 'root'
  | 'tabs'
  | 'tab'
  | 'content'
  | 'suggestionCategories'
  | 'querySuggestions'
  | 'querySuggestion'
  | 'searchSuggestions'
  | 'searchSuggestion'
  | 'attributeSuggestions'
  | 'attributeSuggestion';

/**
 * Labels that can be provided (for example with translations)
 */
export type SuggestionsLabelElement =
  | 'querySuggestions'
  | 'searchSuggestions'
  | 'attributeSuggestions';

export type QuerySuggestionsProps = {
  inputValue: string;
  setInputValue: Dispatch<SetStateAction<string>>;
  classNames?: Partial<Record<SuggestionsClassElement, string>>;
  labels?: Partial<Record<SuggestionsLabelElement, string>>;
  group: SuggestResponseQuerySuggestions[];
  onQuerySelect?: SuggestionsProps['onQuerySelect'];
};

export type AttributeSuggestionsProps = {
  inputValue: string;
  classNames?: Partial<Record<SuggestionsClassElement, string>>;
  labels?: Partial<Record<SuggestionsLabelElement, string>>;
  group: SuggestResponseAttributeSuggestions[];
  offset: number;
  onAttributeSelect?: SuggestionsProps['onAttributeSelect'];
};

export type SearchSuggestionsProps = {
  inputValue: string;
  classNames?: Partial<Record<SuggestionsClassElement, string>>;
  labels?: Partial<Record<SuggestionsLabelElement, string>>;
  group: SuggestResponseSearchSuggestions[];
  offset: number;
  onSearchSelect?: SuggestionsProps['onSearchSelect'];
};

export type FirstQueryProps = {
  inputValue: string;
  onQuerySelect?: SuggestionsProps['onQuerySelect'];
};
