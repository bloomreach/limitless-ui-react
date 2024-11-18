import { SearchBoxRoot } from './components/search-box-root';
import { Suggestions } from './components/search-box-suggestions';

export const SearchBox = {
  Root: SearchBoxRoot,
  Suggestions: Suggestions,
};

export type * from './search-box.types';

export { useSearchBox } from '../../hooks/search-box.hook';
