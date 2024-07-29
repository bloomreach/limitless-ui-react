import { SearchResponse } from '@bloomreach/discovery-web-sdk';
import {
  Dispatch,
  PropsWithChildren,
  ReactElement,
  SetStateAction,
  createContext,
  useState,
} from 'react';

export type SearchContextType = {
  error: unknown;
  loading: boolean;
  searchResponse: SearchResponse | null;
  setError: Dispatch<SetStateAction<unknown>>;
  setLoading: Dispatch<SetStateAction<boolean>>;
  setSearchResponse: Dispatch<SetStateAction<SearchResponse | null>>;
};

export const SearchContext = createContext<SearchContextType>({
  error: null,
  loading: false,
  searchResponse: null,
  setError: () => {},
  setLoading: () => {},
  setSearchResponse: () => {},
});

export const SearchContextProvider = ({ children }: PropsWithChildren): ReactElement => {
  const [searchResponse, setSearchResponse] = useState<SearchResponse | null>(null);
  const [error, setError] = useState<unknown>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const contextValue = { searchResponse, setSearchResponse, error, setError, loading, setLoading };

  return <SearchContext.Provider value={contextValue}>{children}</SearchContext.Provider>;
};
