import cn from 'clsx';
import { ForwardedRef, forwardRef, ReactElement } from 'react';
import * as Accordion from "@radix-ui/react-accordion";

import type { CheckboxGroupOverflowProps } from '../checkbox-group.types';
import { useCheckboxGroup } from '../checkbox-group.context';

export const CheckboxGroupOverflow = forwardRef((
  props: CheckboxGroupOverflowProps,
  forwardedRef: ForwardedRef<HTMLDivElement> | null,
): ReactElement => {
  const {
    className,
    children,
    ...rest
  } = props;

  const checkboxGroupCtx = useCheckboxGroup();

  if (!checkboxGroupCtx) {
    throw new Error('CheckboxGroup.Overflow should be used within a CheckboxGroupProvider');
  }

  const { expanded, setExpanded } = checkboxGroupCtx;
  const value = expanded ? 'overflow' : '';

  return (
    <div
      {...rest}
      className={cn('lui-cg-overflow', className)}
      ref={forwardedRef}
    >
      <Accordion.Root
        className=""
        type="single"
        value={value}
        collapsible
        onValueChange={(val) => setExpanded(!!val)}
      >
        <Accordion.Item className="lui-cg-overflow-container" value="overflow">
          {children}
        </Accordion.Item>
      </Accordion.Root>
    </div>
  );
});

CheckboxGroupOverflow.displayName = "CheckboxGroup.Overflow";
