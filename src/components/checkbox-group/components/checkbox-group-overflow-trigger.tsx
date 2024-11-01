import cn from 'clsx';
import { ForwardedRef, forwardRef, ReactElement } from 'react';
import * as Accordion from "@radix-ui/react-accordion";

import type { CheckboxGroupOverflowTriggerProps } from '../checkbox-group.types';
import { useCheckboxGroup } from '../checkbox-group.context';

export const CheckboxGroupOverflowTrigger = forwardRef((
  props: CheckboxGroupOverflowTriggerProps,
  forwardedRef: ForwardedRef<HTMLButtonElement> | null,
): ReactElement => {
  const {
    className,
    label = '+ More',
    expandedLabel = '- Less',
    ...rest
  } = props;

  const checkboxGroupCtx = useCheckboxGroup();

  if (!checkboxGroupCtx) {
    throw new Error('CheckboxGroup.OverflowTrigger should be used within a CheckboxGroupProvider');
  }

  const { expanded } = checkboxGroupCtx;
  const text = expanded ? expandedLabel : label;

  return (
    <Accordion.Trigger
      {...rest}
      className={cn('lui-cg-overflow-trigger', className)}
      ref={forwardedRef}
    >
      {text}
    </Accordion.Trigger>
  );
});

CheckboxGroupOverflowTrigger.displayName = "CheckboxGroup.OverflowTrigger";
