import {
  ChangeEvent,
  ChangeEventHandler,
  Dispatch,
  FormEvent,
  FormEventHandler,
  SetStateAction,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { debounce } from '../utils/debounce';
import { SearchContext } from '../contexts/search.context';
import { useSearch } from './use-search/use-search';
import { SearchBoxProps } from '../components/search-box/search-box.types';
import { SearchResponse } from '@bloomreach/discovery-web-sdk';

type UseSearchBox = {
  response: SearchResponse | null;
  loading: boolean;
  error: unknown;
  changeHandler: ChangeEventHandler<HTMLInputElement>;
  submitHandler: FormEventHandler<HTMLFormElement>;
  resetHandler: FormEventHandler<HTMLFormElement>;
  inputValue: string;
  setInputValue: Dispatch<SetStateAction<string>>;
};

export function useSearchBox(props: SearchBoxProps): UseSearchBox {
  const {
    configuration,
    searchOptions,
    debounceDelay = 500,
    searchType,
    autoQuery,
    onSubmit,
    onReset,
    onChange,
  } = props;

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
      onChange?.(event);
      setInputValue(newValue);

      if (autoQuery) {
        debouncedSetQuery(newValue);
      }
    },
    [debouncedSetQuery, autoQuery, onChange],
  );

  const submitHandler = useCallback(
    (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      onSubmit?.(event);
      setQuery(inputValue);
    },
    [inputValue, onSubmit],
  );

  const resetHandler = useCallback(
    (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      onReset?.(event);
      setInputValue('');
    },
    [onReset],
  );

  const { response, error, loading } = useSearch(searchType, query, configuration, searchOptions);

  const searchContext = useContext(SearchContext);

  useEffect(() => {
    if (searchContext) {
      searchContext.setSearchResponse(response);
      searchContext.setError(error);
      searchContext.setLoading(loading);
      searchContext.setInputValue(inputValue);
    }
  }, [searchContext, response, error, loading, inputValue]);

  return {
    response,
    error,
    loading,
    changeHandler,
    submitHandler,
    resetHandler,
    inputValue,
    setInputValue,
  };
}
