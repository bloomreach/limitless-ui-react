import { PropsWithChildren, ReactElement } from 'react';
import { SearchContextProvider } from './search.context';
import { AutoSuggestContextProvider } from './autosuggest.context';
import { FloatingUIContextProvider } from './floating-ui.context';

export const LimitlessUIProvider = ({ children }: PropsWithChildren): ReactElement => {
  return (
    <SearchContextProvider>
      <AutoSuggestContextProvider>
        <FloatingUIContextProvider>{children}</FloatingUIContextProvider>
      </AutoSuggestContextProvider>
    </SearchContextProvider>
  );
};
