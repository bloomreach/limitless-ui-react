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
  configuration: Configuration,
  suggestOptions: AutosuggestOptions
): useAutoSuggest {
  const [response, setResponse] = useState<SuggestResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<unknown>(null);

  useEffect(() => {
    // If there is no query, clear data and error
    if (!suggestOptions.q) {
      setLoading(false);
      setError(null);
      setResponse(null);
      return;
    }

    autoSuggest(configuration, suggestOptions)
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
  }, [configuration, suggestOptions, setResponse, setError, setLoading]);

  return {
    error,
    loading,
    response,
  }
}
