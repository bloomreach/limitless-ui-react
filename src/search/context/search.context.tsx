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
  inputValue: string;
  setInputValue: Dispatch<SetStateAction<string>>;
  setError: Dispatch<SetStateAction<unknown>>;
  setLoading: Dispatch<SetStateAction<boolean>>;
  setSearchResponse: Dispatch<SetStateAction<SearchResponse | null>>;
};

export const SearchContext = createContext<SearchContextType>({
  error: null,
  loading: false,
  searchResponse: null,
  inputValue: '',
  setInputValue: () => {},
  setError: () => {},
  setLoading: () => {},
  setSearchResponse: () => {},
});

export const SearchContextProvider = ({ children }: PropsWithChildren): ReactElement => {
  const [searchResponse, setSearchResponse] = useState<SearchResponse | null>(null);
  const [error, setError] = useState<unknown>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>('');
  const contextValue = {
    searchResponse,
    setSearchResponse,
    error,
    setError,
    loading,
    setLoading,
    inputValue,
    setInputValue,
  };

  return <SearchContext.Provider value={contextValue}>{children}</SearchContext.Provider>;
};
