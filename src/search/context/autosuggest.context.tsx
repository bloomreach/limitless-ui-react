import { SuggestResponse } from '@bloomreach/discovery-web-sdk';
import {
  Dispatch,
  PropsWithChildren,
  ReactElement,
  SetStateAction,
  createContext,
  useState,
} from 'react';

export type AutoSuggestContextType = {
  error: unknown;
  setError: Dispatch<SetStateAction<unknown>>;
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
  suggestResponse: SuggestResponse | null;
  setSuggestResponse: Dispatch<SetStateAction<SuggestResponse | null>>;
};

export const AutoSuggestContext = createContext<AutoSuggestContextType>({
  error: null,
  loading: false,
  suggestResponse: null,
  setError: () => {},
  setLoading: () => {},
  setSuggestResponse: () => {},
});

export const AutoSuggestContextProvider = ({ children }: PropsWithChildren): ReactElement => {
  const [error, setError] = useState<unknown>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [suggestResponse, setSuggestResponse] = useState<SuggestResponse | null>(null);

  const contextValue = {
    suggestResponse,
    setSuggestResponse,
    error,
    setError,
    loading,
    setLoading,
  };

  return <AutoSuggestContext.Provider value={contextValue}>{children}</AutoSuggestContext.Provider>;
};
