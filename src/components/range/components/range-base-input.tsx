import cn from 'clsx';
import { ForwardedRef, forwardRef, ReactElement } from 'react';

import type { RangeBaseInputProps } from '../range.types';
import { useRange } from '../range.context';

export const RangeBaseInput = forwardRef((
  props: RangeBaseInputProps,
  forwardedRef: ForwardedRef<HTMLInputElement> | null,
): ReactElement => {
  const rangeCtx = useRange();

  if (!rangeCtx) {
    throw new Error('Range Input should be used within a RangeProvider');
  }

  const { min, max, step, value, onInputChange } = rangeCtx;

  const {
    className,
    index,
    ...rest
  } = props;

  return (
    <input
      aria-label="min"
      {...rest}
      type="number"
      value={value[index]}
      onChange={(e) => onInputChange(index, e.target.value)}
      className={cn('lui-range-input', className)}
      min={min}
      max={max}
      step={step}
      ref={forwardedRef}
    />
  );
});
