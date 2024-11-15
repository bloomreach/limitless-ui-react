import cn from 'clsx';
import { ForwardedRef, forwardRef, ReactElement } from 'react';
import * as Checkbox from '@radix-ui/react-checkbox';
import { CheckIcon } from '@radix-ui/react-icons';

import type { CheckboxGroupItemProps } from '../checkbox-group.types';
import { useCheckboxGroup } from '../checkbox-group.context';

export const CheckboxGroupItem = forwardRef((
  props: CheckboxGroupItemProps,
  forwardedRef: ForwardedRef<HTMLLabelElement> | null,
): ReactElement => {
  const {
    className,
    children,
    value: val,
    ...rest
  } = props;

  const checkboxGroupCtx = useCheckboxGroup();

  if (!checkboxGroupCtx) {
    throw new Error('CheckboxGroup.Item should be used within a CheckboxGroupProvider');
  }

  const { value, onCheckboxChange } = checkboxGroupCtx;

  return (
    <label
      {...rest}
      className={cn('lui-cg-item', { 'lui-cg-item--selected': value.includes(val) }, className)}
      ref={forwardedRef}
    >
      <Checkbox.Root className="lui-cg-item-checkbox" checked={value.includes(val)} onCheckedChange={(checked) => onCheckboxChange(!!checked, val)}>
				<Checkbox.Indicator className="lui-cg-item-checkbox-indicator" asChild>
					<CheckIcon />
				</Checkbox.Indicator>
			</Checkbox.Root>
      {children}
    </label>
  );
});

CheckboxGroupItem.displayName = "CheckboxGroup.Item";
