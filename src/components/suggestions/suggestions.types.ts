import {
  AutosuggestOptions,
  Configuration,
  SuggestResponseAttributeSuggestions,
  SuggestResponseQuerySuggestions,
  SuggestResponseSearchSuggestions,
} from '@bloomreach/discovery-web-sdk';
import { Dispatch, MouseEvent, SetStateAction } from 'react';

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
