import { PropsWithChildren, ReactElement } from 'react';
import { SearchContextProvider } from './search.context';
import { AutoSuggestContextProvider } from './autosuggest.context';

export const LimitlessUIProvider = ({ children }: PropsWithChildren): ReactElement => {
  return (
    <SearchContextProvider>
      <AutoSuggestContextProvider>{children}</AutoSuggestContextProvider>
    </SearchContextProvider>
  );
};
