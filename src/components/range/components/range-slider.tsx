import cn from 'clsx';
import { ForwardedRef, forwardRef, ReactElement } from 'react';
import * as SliderPrimitive from "@radix-ui/react-slider"
import { useRange } from '../range.context';

export const RangeSlider = forwardRef<HTMLSpanElement, SliderPrimitive.SliderProps>((
    props,
    forwardedRef,
  ): ReactElement => {
  const rangeCtx = useRange();

  if (!rangeCtx) {
    throw new Error('RangeSlider should be used within a RangeProvider');
  }

  const { min, max, step, value, onSliderChange } = rangeCtx;

  const {
    className,
    ...rest
  } = props;

  return (
    <SliderPrimitive.Root
      {...rest}
      min={min}
      max={max}
      step={step}
      value={value}
      onValueChange={onSliderChange}
      className={cn('lui-range-slider-root', className)}
      ref={forwardedRef}
    >
      <SliderPrimitive.Track className="lui-range-slider-track">
        <SliderPrimitive.Range className="lui-range-slider-range" />
      </SliderPrimitive.Track>
      <SliderPrimitive.Thumb className="lui-range-slider-control lui-range-slider-control--min" />
      <SliderPrimitive.Thumb className="lui-range-slider-control lui-range-slider-control--max" />
    </SliderPrimitive.Root>
  );
});

RangeSlider.displayName = "Range.Slider";
