import { createContext, ReactElement, useContext, useEffect, useState, useMemo, useCallback } from 'react';
import type { CheckboxGroupContextProps, CheckboxGroupProviderProps } from './checkbox-group.types';

const CheckboxGroupContext = createContext<CheckboxGroupContextProps | null>(null);

export function useCheckboxGroup(): CheckboxGroupContextProps | null {
  return useContext(CheckboxGroupContext);
};

export const CheckboxGroupProvider =  ({ children, value }: CheckboxGroupProviderProps): ReactElement => {
  const {
    value: val,
    onChange,
  } = value;

  const [expanded, setExpanded] = useState<boolean>(false);

  const onCheckboxChange = useCallback((checked: boolean, id: string) => {
    let newValue = [] as string[];

    if (checked) {
      if (val.filter((v: string) => v === id).length === 0) {
        newValue = [...[], ...val, ...[id]];
      }
    } else {
      newValue = val.filter((v: string) => v !== id)
    }

    onChange(newValue);
  }, [onChange, val]);

  const providerValue = useMemo(() => {
    return {
      value: val,
      expanded,
      setExpanded,
      onCheckboxChange,
      onChange,
    }
  }, [val, expanded, setExpanded, onCheckboxChange, onChange])

  return (
    <CheckboxGroupContext.Provider value={providerValue}>
      {children}
    </CheckboxGroupContext.Provider>
  );
};
