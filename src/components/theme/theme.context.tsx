import { createContext, PropsWithChildren, ReactElement, useContext } from 'react';
import { DirectionProvider } from '@radix-ui/react-direction';
import type { ThemeContextProps } from './theme.types';

const ThemeContext = createContext<ThemeContextProps>({});

export function useTheme(): ThemeContextProps {
  return useContext(ThemeContext);
};

export const ThemeProvider =  ({ children, value }: PropsWithChildren & { value: ThemeContextProps }): ReactElement => {
  const { dir='ltr' } = value;
  return (
    <ThemeContext.Provider value={value}>
      <DirectionProvider dir={dir}>
          {children}
      </DirectionProvider>
    </ThemeContext.Provider>
  );
};
