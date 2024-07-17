import {
  Configuration,
  ProductSearchOptions,
  SearchResponse,
  productSearch,
} from '@bloomreach/discovery-web-sdk';
import { useEffect, useMemo, useState } from 'react';

type UseProductSearchResult = {
  response: SearchResponse | null;
  loading: boolean;
  error: unknown;
};

export function useProductSearch(
  query: string,
  configuration: Configuration,
  searchOptions: Omit<ProductSearchOptions, 'q'>,
): UseProductSearchResult {
  const [response, setResponse] = useState<SearchResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<unknown>(null);

  const memoizedSearchOptions = useMemo(
    () => ({ ...searchOptions, q: query }),
    [query, searchOptions],
  );

  useEffect(() => {
    setLoading(true);

    productSearch(configuration, memoizedSearchOptions)
      .then((response: SearchResponse) => {
        setResponse(response);
      })
      .catch((e: unknown) => {
        setError(e);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [configuration, memoizedSearchOptions]);

  return { response, loading, error };
}
