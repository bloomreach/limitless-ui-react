export { useSearch } from './hooks/search.hook';
export { useSearchBox } from './search-box/search-box.hook';
export type { SearchBoxProps } from './search-box/search-box.types';
export { SearchBox } from './search-box/search-box';
export {
  SearchContext,
  SearchContextProvider,
  type SearchContextType,
} from './context/search.context';

// Suggestions
export { useAutoSuggest } from './hooks/autosuggest.hook';
export { useSuggestions } from './suggestions/suggestions.hook';
export type { SuggestionsProps } from './suggestions/suggestions.types';
export { Suggestions } from './suggestions/suggestions';
export {
  AutoSuggestContext,
  AutoSuggestContextProvider,
  type AutoSuggestContextType
} from './context/autosuggest.context';
export {
  FloatingUIContext,
  FloatingUIContextProvider,
  type FloatingUIContextType
} from './context/floating-ui.context'
