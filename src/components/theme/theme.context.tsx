import { createContext, PropsWithChildren, ReactElement, useContext } from 'react';
import { ThemeProps } from './theme.types';

const ThemeContext = createContext<ThemeProps>({});

export function useTheme(): ThemeProps {
  return useContext(ThemeContext);
};

export const ThemeProvider =  ({ children, value }: PropsWithChildren & { value: ThemeProps }): ReactElement => {
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};
