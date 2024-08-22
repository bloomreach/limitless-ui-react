import {
  ChangeEvent,
  ChangeEventHandler,
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
  const { configuration, searchOptions, debounceDelay = 500, searchType } = props;

  const [query, setQuery] = useState<string>('');

  const changeHandler = useMemo(() => debounce((event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  }, debounceDelay), [debounceDelay]);

  const memoizedSearchOptions = useMemo(
    () => ({ ...searchOptions, q: query }),
    [query, searchOptions],
  );

  const { response, error, loading } = useSearch(searchType, configuration, memoizedSearchOptions);

  const searchContext = useContext(SearchContext);

  useEffect(() => {
    searchContext.setSearchResponse(response);
    searchContext.setError(error);
    searchContext.setLoading(loading);
  }, [searchContext, response, error, loading]);

  return {
    response,
    error,
    loading,
    changeHandler,
  };
}
