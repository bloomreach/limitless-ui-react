import cn from 'clsx';
import { ForwardedRef, forwardRef, ReactElement } from 'react';

import type { RangeInputProps } from '../range.types';
import { RangeBaseInput } from './range-base-input';

export const RangeMaxInput = forwardRef((
    props: RangeInputProps,
    forwardedRef: ForwardedRef<HTMLInputElement> | null,
  ): ReactElement => {
    const {
      className,
      ...rest
    } = props;

    return (
      <RangeBaseInput
        aria-label="Maximum value"
        {...rest}
        index={1}
        className={cn('lui-range-input--max', className)}
        ref={forwardedRef}
      />
    );
  });
  RangeMaxInput.displayName = "Range.MaxInput";
