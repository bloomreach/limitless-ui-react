import { clsx } from 'clsx';
import { ForwardedRef, forwardRef, ReactElement, useMemo } from 'react';

import type { RangeRootProps } from '../range.types';
import { RangeProvider } from '../range.context';

import '../range.scss';

/**
 * Input for a numeric ranges. It can be used for facet filters like price ranges.
 * Supports a manual option to trigger onChange events via a button that the user can click after they have chosen a range
 *
 * ### Usage
 *
 * ```tsx
 * import { Range } from '@bloomreach/limitless-ui-react';
 *
 * const [value, setValue] = useState([25, 75]);
 * <Range.Root min={0} max={100} step={1} value={value} onChange={(newValue) => {setValue(newValue)}}>
 *   <Range.Slider />
 *   <Range.Inputs>
 *     <Range.MinInput />
 *     <Range.Separator />
 *     <Range.MaxInput />
 *   </Range.Inputs>
 *   <Range.UpdateButton>Update</Range.UpdateButton>
 * </Range.Root>
 * ```
 */
export const RangeRoot = forwardRef((
  props: RangeRootProps,
  forwardedRef: ForwardedRef<HTMLDivElement> | null,
): ReactElement => {
  const {
    className,
    children,
    min,
    max,
    step = 1,
    value,
    onChange,
    autoUpdate = true,
    ...rest
  } = props;

  const rangeProviderProps = useMemo(() => {
    return {
      min,
      max,
      step,
      value,
      onChange,
      autoUpdate,
    };
  }, [min, max, step, value, onChange, autoUpdate]);

  return (
    <div
      {...rest}
      className={clsx('lui-range', className)}
      ref={forwardedRef}
    >
      <RangeProvider value={rangeProviderProps}>
        {children}
      </RangeProvider>
    </div>
  );
});

RangeRoot.displayName = "Range.Root";
