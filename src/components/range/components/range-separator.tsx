import cn from 'clsx';
import { ForwardedRef, forwardRef, ReactElement } from 'react';

import type { RangeInputsProps } from '../range.types';

export const RangeSeparator = forwardRef((
    props: RangeInputsProps,
    forwardedRef: ForwardedRef<HTMLDivElement> | null,
  ): ReactElement => {
    const {
      className,
      children,
      ...rest
    } = props;

    return (
      <div
        {...rest}
        className={cn('lui-range-input-number-separator', className)}
        ref={forwardedRef}
      >
        {children ? children : <>&ndash;</>}
      </div>
    );
  });
  RangeSeparator.displayName = "Range.Separator";
