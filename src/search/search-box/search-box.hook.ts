import {
  ChangeEvent,
  ChangeEventHandler,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import { debounce } from '../../utils/debounce';
import { SearchContext } from '../context/search.context';
import { useProductSearch } from '../hooks/productSearch.hook';
import { SearchBoxProps } from './search-box.types';

type UseSearchBox = {
  changeHandler: ChangeEventHandler<HTMLInputElement>;
};

export function useSearchBox(props: SearchBoxProps): UseSearchBox {
  const { configuration, searchOptions, debounceDelay } = props;

  const [query, setQuery] = useState<string>('');
  const debouncedSetQuery = debounce((event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  }, debounceDelay ?? 500);
  const { response } = useProductSearch(query, configuration, searchOptions);

  const searchContext = useContext(SearchContext);
  useEffect(() => {
    if (response) {
      searchContext.setSearchResponse(response);
    }
  }, [searchContext, response]);

  const changeHandler = useCallback(debouncedSetQuery, [debouncedSetQuery]);

  return {
    changeHandler,
  };
}
