import { SearchResponse } from '@bloomreach/discovery-web-sdk';
import { Dispatch, PropsWithChildren, ReactElement, SetStateAction, createContext, useState } from 'react';

export type SearchContextType = {
  searchResponse: SearchResponse | null;
  setSearchResponse: Dispatch<SetStateAction<SearchResponse | null>>;
};

export const SearchContext = createContext<SearchContextType>({
  searchResponse: null,
  setSearchResponse: () => {},
});

export const SearchContextProvider = ({ children }: PropsWithChildren): ReactElement => {
  const [searchResponse, setSearchResponse] = useState<SearchResponse | null>(null);
  const contextValue = { searchResponse, setSearchResponse };

  return <SearchContext.Provider value={contextValue}>{children}</SearchContext.Provider>;
};
