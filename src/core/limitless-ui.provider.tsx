import { PropsWithChildren, ReactElement } from 'react';
import { SearchContextProvider } from '../search';
import { AutoSuggestContextProvider } from '../search/context/autosuggest.context';
import { FloatingUIContextProvider } from '../search/context/floating-ui.context';

export const LimitlessUIProvider = ({ children }: PropsWithChildren): ReactElement => {
  return (
    <SearchContextProvider>
      <AutoSuggestContextProvider>
        <FloatingUIContextProvider>{children}</FloatingUIContextProvider>
      </AutoSuggestContextProvider>
    </SearchContextProvider>
  );
};
