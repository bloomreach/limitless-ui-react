import cn from 'clsx';
import { ForwardedRef, forwardRef, ReactElement } from 'react';

import type { RangeInputProps } from '../range.types';
import { RangeBaseInput } from './range-base-input';

export const RangeMinInput = forwardRef((
    props: RangeInputProps,
    forwardedRef: ForwardedRef<HTMLInputElement> | null,
  ): ReactElement => {
    const {
      className,
      ...rest
    } = props;

    return (
      <RangeBaseInput
        aria-label="Minimum value"
        {...rest}
        index={0}
        className={cn('lui-range-input--min', className)}
        ref={forwardedRef}
      />
    );
  });
  RangeMinInput.displayName = "Range.MinInput";
