import { createContext, ReactElement, useContext, useEffect, useState, useMemo, useCallback } from 'react';
import type { RangeContextProps, RangeProviderProps } from './range.types';

const RangeContext = createContext<RangeContextProps | null>(null);

export function useRange(): RangeContextProps | null {
  return useContext(RangeContext);
};

export const RangeProvider =  ({ children, value }: RangeProviderProps): ReactElement => {
  const {
    min,
    max,
    step,
    value: val,
    onChange,
    autoUpdate,
  } = value;

  const [internalValue, setInternalValue] = useState(val)

  useEffect(() => {
    setInternalValue(val)
  }, [val])

  const onSliderChange = useCallback((newValues: number[]) => {
    const updatedValues = newValues as [number, number];
    setInternalValue(updatedValues);
    if (autoUpdate) {
      onChange?.(updatedValues);
    }
  }, [autoUpdate, onChange, setInternalValue]);

  const onInputChange = useCallback((index: number, inputValue: string) => {
    const newValue = parseFloat(inputValue)
    if (isNaN(newValue)) return;

    let newValues = [...internalValue];
    newValues[index] = Math.min(Math.max(newValue, min), max);

    // Swap values if min > max
    if (index === 0 && newValues[0] > newValues[1]) {
      newValues = [newValues[1], newValues[0]];
    } else if (index === 1 && newValues[1] < newValues[0]) {
      newValues = [newValues[1], newValues[0]];
    }

    setInternalValue(newValues as [number, number]);
    if (autoUpdate) {
      onChange?.(newValues as [number, number]);
    }
  }, [min, max, autoUpdate, internalValue, onChange, setInternalValue])

  const onUpdate = useCallback(() => {
    onChange?.(internalValue)
  }, [internalValue, onChange])

  const providerValue = useMemo(() => {
    return {
      min,
      max,
      step,
      value: internalValue,
      onChange,
      onInputChange,
      onSliderChange,
      onUpdate,
      autoUpdate,
    }
  }, [min, max, step, internalValue, onChange, onInputChange, onSliderChange, onUpdate, autoUpdate])

  return (
    <RangeContext.Provider value={providerValue}>
      {children}
    </RangeContext.Provider>
  );
};
