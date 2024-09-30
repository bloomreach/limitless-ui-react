import { useEffect, useState } from 'react';
import {
  BestsellerOptions,
  CategorySearchOptions,
  Configuration,
  ContentSearchOptions,
  ProductSearchOptions,
  SearchResponse,
  bestseller,
  categorySearch,
  contentSearch,
  productSearch,
} from '@bloomreach/discovery-web-sdk';
import { SearchType } from '../../components/search-box/search-box.types';
import type { UseSearchOptions, UseSearchResponse } from './use-search.types';

/**
 * Custom hook to perform a product search using Bloomreach Discovery Web SDK.
 *
 * @param searchType - The type of search to be executed.
 * @param configuration - The configuration object for the Bloomreach SDK.
 * @param searchOptions - Additional search options excluding the query.
 * @returns An object containing the search response, loading state, and any error encountered.
 */
export function useSearch(
  searchType: SearchType,
  configuration: Configuration,
  searchOptions: UseSearchOptions,
): UseSearchResponse {
  const [response, setResponse] = useState<SearchResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<unknown>(null);

  useEffect(() => {
    if (!searchOptions.q) {
      setLoading(false);
      setError(null);
      setResponse(null);
      return;
    }

    const fetchData = async () => {
      setLoading(true);

      if (searchType === 'product') {
        const apiResponse = await productSearch(configuration, searchOptions as ProductSearchOptions);
        setResponse(apiResponse);
      }

      if (searchType === 'category') {
        const apiResponse = await categorySearch(configuration, searchOptions as CategorySearchOptions);
        setResponse(apiResponse);
      }

      if (searchType === 'content') {
        const apiResponse = await contentSearch(configuration, searchOptions as ContentSearchOptions);
        setResponse(apiResponse);
      }

      if (searchType === 'bestseller') {
        const apiResponse = await bestseller(configuration, searchOptions as BestsellerOptions);
        setResponse(apiResponse);
      }
    };

    fetchData()
      .catch((e: unknown) => {
        setError(e);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [searchType, configuration, searchOptions]);

  return { response, loading, error };
}
