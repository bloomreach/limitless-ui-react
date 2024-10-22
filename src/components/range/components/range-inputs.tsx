import cn from 'clsx';
import { ForwardedRef, forwardRef, ReactElement } from 'react';

import type { RangeInputsProps } from '../range.types';

export const RangeInputs = forwardRef((
    props: RangeInputsProps,
    forwardedRef: ForwardedRef<HTMLDivElement> | null,
  ): ReactElement => {
    const {
      className,
      children,
      ...rest
    } = props;

    return (
      <section
        {...rest}
        className={cn('lui-range-inputs', className)}
        ref={forwardedRef}
      >
        {children}
      </section>
    );
  });
  RangeInputs.displayName = "Range.Inputs";
