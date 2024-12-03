import { Configuration } from '@bloomreach/discovery-web-sdk';
import { createContext, PropsWithChildren, ReactElement } from 'react';

export type ConfigurationContextType = {
  configuration: Configuration;
};

export const ConfigurationContext = createContext<ConfigurationContextType | null>(null);

export const ConfigurationContextProvider = (
  props: PropsWithChildren & ConfigurationContextType,
): ReactElement => {
  const { children, configuration } = props;
  const contextValue = {
    configuration: configuration,
  };

  return (
    <ConfigurationContext.Provider value={contextValue}>{children}</ConfigurationContext.Provider>
  );
};
