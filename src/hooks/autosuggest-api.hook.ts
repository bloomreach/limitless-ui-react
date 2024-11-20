import {
  autoSuggest,
  AutosuggestOptions,
  SuggestResponse,
  Configuration,
} from '@bloomreach/discovery-web-sdk';
import { useEffect, useState } from 'react';

type useAutoSuggest = {
  response: SuggestResponse | null;
  loading: boolean;
  error: unknown;
};

export function useAutoSuggest(
  query: string,
  configuration: Configuration,
  suggestOptions: AutosuggestOptions
): useAutoSuggest {
  const [response, setResponse] = useState<SuggestResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<unknown>(null);

  useEffect(() => {
    // If there is no query, clear data and error
    if (!query) {
      setLoading(false);
      setError(null);
      setResponse(null);
      return;
    }

    autoSuggest(query, configuration, suggestOptions)
      .then((res) => {
        setResponse(res);
        setError(null);
      })
      .catch((e: unknown) => {
        setError(e);
        setResponse(null);
      })
      .finally(() => {
        setLoading(false);
      })
  }, [query, configuration, suggestOptions, setResponse, setError, setLoading]);

  return {
    error,
    loading,
    response,
  }
}
