import { SearchResponse } from '@bloomreach/discovery-web-sdk';
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

type UseSearchBox = {
  response: SearchResponse | null;
  loading: boolean;
  error: unknown;
  changeHandler: ChangeEventHandler<HTMLInputElement>;
  inputValue: string;
};

export function useSearchBox(props: SearchBoxProps): UseSearchBox {
  const { configuration, searchOptions, debounceDelay = 500, searchType, autoQuery } = props;

  const [inputValue, setInputValue] = useState<string>('');
  const [query, setQuery] = useState<string>('');

  const debouncedSetQuery = useMemo(
    () =>
      debounce((value: string) => {
        setQuery(value);
      }, debounceDelay),
    [debounceDelay],
  );

  const changeHandler = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const newValue = event.target.value;
      setInputValue(newValue);

      if (autoQuery) {
        debouncedSetQuery(newValue);
      }
    },
    [debouncedSetQuery, autoQuery],
  );

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
    inputValue,
  };
}
