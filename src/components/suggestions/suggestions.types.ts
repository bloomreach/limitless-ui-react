import { AutosuggestOptions, Configuration } from '@bloomreach/discovery-web-sdk';
import { MouseEventHandler } from 'react';

export type SuggestionsProps = {
  /**
   * The number of miliseconds the auto-search should be debounced
   */
  debounceDelay?: number;

  /**
   * The Configuration for creating a Bloomreach integration
   */
  configuration: Configuration;

  /**
   * The options specific to a Bloormeach suggestions request
   */
  suggestOptions: Omit<AutosuggestOptions, 'q'>;

  /**
   * The query to provide suggestions for
   */
  inputValue: string;

  /**
   * The callback to execute when a query suggestion is clicked
   */
  onQuerySelect?: (event: MouseEventHandler<HTMLElement>) => void;

  /**
   * The callback to execute when a search suggestion is clicked
   */
  onSearchSelect?: (event: MouseEventHandler<HTMLElement>) => void;

  /**
   * Classnames to be added to their respective elements, e.g. input or submit button
   */
  classNames?: Partial<Record<SuggestionsClassElement, string>>;

  /**
   * Text to be added to their respective elements, e.g. input label or submit button
   */
  labels?: Partial<Record<SuggestionsLabelElement, string>>;

  /**
   * The currency the prices on the product suggestions should be displayed in
   */
  currency?: string;
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
