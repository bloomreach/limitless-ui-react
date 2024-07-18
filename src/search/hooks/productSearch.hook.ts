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

/**
 * Custom hook to perform a product search using Bloomreach Discovery Web SDK.
 *
 * @param query - The search query string.
 * @param configuration - The configuration object for the Bloomreach SDK.
 * @param searchOptions - Additional search options excluding the query.
 * @returns An object containing the search response, loading state, and any error encountered.
 */
export function useProductSearch(
  query: string,
  configuration: Configuration,
  searchOptions: Omit<ProductSearchOptions, 'q'>,
): UseProductSearchResult {
  const [response, setResponse] = useState<SearchResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<unknown>(null);

  // Memoize the search options to avoid unnecessary re-renders
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
