import cn from 'clsx';
import { ForwardedRef, forwardRef, ReactElement } from 'react';
import { Number } from '../../number';

import type { RangeValueProps } from '../range.types';
import { useRange } from '../range.context';

export const RangeMaxValue = forwardRef((
  props: RangeValueProps,
  forwardedRef: ForwardedRef<HTMLSpanElement> | null,
): ReactElement => {
  const rangeCtx = useRange();

  if (!rangeCtx) {
    throw new Error('Range.MaxValue should be used within a RangeProvider');
  }

  const { value } = rangeCtx;

  const {
    className,
    ...rest
  } = props;

  return (
    <Number {...rest} value={value[1]} className={cn('lui-range-min-value', className)} ref={forwardedRef}  />
  );
});

RangeMaxValue.displayName = "Range.MaxValue";
