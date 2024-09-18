import { SuggestResponse } from '@bloomreach/discovery-web-sdk';
import { useContext, useEffect, useMemo, useState } from 'react';
import { debounce } from '../../utils/debounce';
import { AutoSuggestContext } from '../context/autosuggest.context';
import { useAutoSuggest } from '../hooks/autosuggest.hook';
import { SuggestionsProps } from './suggestions.types';

type UseSuggestions = {
  response: SuggestResponse | null;
  loading: boolean;
  error: unknown;
};

export function useSuggestions(props: SuggestionsProps, inputValue: string): UseSuggestions {
  const { configuration, suggestOptions, debounceDelay = 500 } = props;
  const [query, setQuery] = useState<string>('');

  const debouncedSetQuery = useMemo(
    () =>
      debounce((value: string) => {
        setQuery(value);
      }, debounceDelay),
    [debounceDelay],
  );

  useEffect(() => {
    debouncedSetQuery(inputValue);
  }, [inputValue, debouncedSetQuery]);

  const memoizedSuggestOptions = useMemo(
    () => ({ ...suggestOptions, q: query }),
    [query, suggestOptions],
  );

  const { loading, error, response } = useAutoSuggest(configuration, memoizedSuggestOptions);

  const autoSuggestContext = useContext(AutoSuggestContext);

  useEffect(() => {
    autoSuggestContext.setError(error);
    autoSuggestContext.setLoading(loading);
    autoSuggestContext.setSuggestResponse(response);
  }, [autoSuggestContext, response, error, loading]);

  return {
    response,
    loading,
    error,
  };
}