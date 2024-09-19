import { AutosuggestOptions, Configuration } from '@bloomreach/discovery-web-sdk';

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
};
