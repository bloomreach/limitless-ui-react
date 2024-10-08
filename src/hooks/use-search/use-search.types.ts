import {
  BestsellerOptions,
  CategorySearchOptions,
  ContentSearchOptions,
  ProductSearchOptions,
  SearchResponse,
} from '@bloomreach/discovery-web-sdk';

export type UseSearchOptions =
| ProductSearchOptions
| CategorySearchOptions
| ContentSearchOptions
| BestsellerOptions;

export type UseSearchResponse = {
  response: SearchResponse | null;
  loading: boolean;
  error: unknown;
};
