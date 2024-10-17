import cn from 'clsx';
import { ForwardedRef, forwardRef, ReactElement } from 'react';

import type { RangeButtonProps } from '../range.types';
import { useRange } from '../range.context';

export const RangeUpdateButton = forwardRef((
    props: RangeButtonProps,
    forwardedRef: ForwardedRef<HTMLButtonElement> | null,
  ): ReactElement => {
    const {
      className,
      children,
      variant,
      ...rest
    } = props;

    const rangeCtx = useRange();

    if (!rangeCtx) {
      throw new Error('RangeUpdateButton should be used within a RangeProvider');
    }

    const { onUpdate } = rangeCtx;

    return (
      <button
        {...rest}
        className={cn('lui-range-update-btn', `lui-range-update-btn--${variant}`, className)}
        ref={forwardedRef}
        onClick={onUpdate}
      >
        {children}
      </button>
    );
  });
  RangeUpdateButton.displayName = "Range.UpdateButton";
