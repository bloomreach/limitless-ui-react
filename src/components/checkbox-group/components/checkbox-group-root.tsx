import cn from 'clsx';
import { ForwardedRef, forwardRef, ReactElement, useMemo } from 'react';
import * as Accordion from "@radix-ui/react-accordion";

import type { CheckboxGroupRootProps } from '../checkbox-group.types';
import '../checkbox-group.scss';
import { CheckboxGroupProvider } from '../checkbox-group.context';

/**
 * Component to display multi select facets.
 * If you want to customize the markup, you can use the `useCheckboxGroup` hook and `CheckboxGroup.Provider` component
 * ### Usage
 *
 * ```tsx
 * import { CheckboxGroup } from '@bloomreach/limitless-ui-react';
 *
 * const [value, setValue] = useState([]);
 *
 * <CheckboxGroup.Root value={value} onChange={setValue}>
 *   <CheckboxGroup.Item value="red">Red</CheckboxGroup.Item>
 *   <CheckboxGroup.Item value="green">Green</CheckboxGroup.Item>
 *   <CheckboxGroup.Item value="blue">Blue</CheckboxGroup.Item>
 *   <CheckboxGroup.Overflow>
 *     <CheckboxGroup.OverflowContent>
 *       <CheckboxGroup.Item value="gold">Gold</CheckboxGroup.Item>
 *       <CheckboxGroup.Item value="purple">Purple</CheckboxGroup.Item>
 *     </CheckboxGroup.OverflowContent>
 *     <CheckboxGroup.OverflowTrigger />
 *   </CheckboxGroup.Overflow>
 * </CheckboxGroup.Root>
 * ```
 */
export const CheckboxGroupRoot = forwardRef((
  props: CheckboxGroupRootProps,
  forwardedRef: ForwardedRef<HTMLDivElement> | null,
): ReactElement => {
  const {
    className,
    children,
    value,
    onChange,
    ...rest
  } = props;

  const checkboxGroupProviderProps = useMemo(() => {
    return {
      value,
      onChange,
    };
  }, [value, onChange]);


  return (
    <div
      {...rest}
      className={cn('lui-cg', className)}
      ref={forwardedRef}
    >
      <CheckboxGroupProvider value={checkboxGroupProviderProps}>
        {children}
      </CheckboxGroupProvider>
    </div>
  );
});

CheckboxGroupRoot.displayName = "CheckboxGroup.Root";
