import {
  ChangeEvent,
  ChangeEventHandler,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { debounce } from '../../utils/debounce';
import { SearchContext } from '../context/search.context';
import { useSearch } from '../hooks/search.hook';
import { SearchBoxProps } from './search-box.types';
import { SearchResponse } from '@bloomreach/discovery-web-sdk';

type UseSearchBox = {
  response: SearchResponse | null;
  loading: boolean;
  error: unknown;
  changeHandler: ChangeEventHandler<HTMLInputElement>;
};

export function useSearchBox(props: SearchBoxProps): UseSearchBox {
  const { configuration, searchOptions, debounceDelay, searchType } = props;

  const [query, setQuery] = useState<string>('');
  const debouncedSetQuery = debounce((event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  }, debounceDelay ?? 500);

  const memoizedSearchOptions = useMemo(
    () => ({
      ...searchOptions,
      q: query,
    }),
    [query, searchOptions],
  );

  const { response, error, loading } = useSearch(searchType, configuration, memoizedSearchOptions);

  const searchContext = useContext(SearchContext);

  useEffect(() => {
    if (response) {
      searchContext.setSearchResponse(response);
    }
  }, [searchContext, response]);

  const changeHandler = useCallback(debouncedSetQuery, [debouncedSetQuery]);

  return {
    response,
    error,
    loading,
    changeHandler,
  };
}
