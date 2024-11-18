import { SearchBoxRoot } from './components/search-box-root';
import { Suggestions } from './components/suggestions';

export const SearchBox = {
  Root: SearchBoxRoot,
  Suggestions: Suggestions,
};

export type * from './search-box.types';

export { useSearchBox } from '../../hooks/search-box.hook';
