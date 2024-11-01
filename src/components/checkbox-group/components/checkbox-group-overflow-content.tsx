import cn from 'clsx';
import { ForwardedRef, forwardRef, ReactElement } from 'react';
import * as Accordion from "@radix-ui/react-accordion";

import type { CheckboxGroupOverflowContentProps } from '../checkbox-group.types';

export const CheckboxGroupOverflowContent = forwardRef((
  props: CheckboxGroupOverflowContentProps,
  forwardedRef: ForwardedRef<HTMLDivElement> | null,
): ReactElement => {
  const {
    className,
    children,
    ...rest
  } = props;

  return (
    <Accordion.Content
      {...rest}
      className={cn('lui-cg-overflow-content', className)}
      ref={forwardedRef}
    >
      {children}
    </Accordion.Content>
  );
});

CheckboxGroupOverflowContent.displayName = "CheckboxGroup.OverflowContent";
