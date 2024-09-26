import cn from 'clsx';
import { ForwardedRef, forwardRef, ReactElement } from 'react';
import * as Toolbar from '@radix-ui/react-toolbar';

import '../swatch-bar.scss';
import { SwatchBarProps } from '../swatch-bar.types';

/**
 * Component to display swatches of a product
 *
 * ### Usage
 *
 * ```tsx
 * import { SwatchBar } from '@bloomreach/limitless-ui-react';
 *
 * <SwatchBar.Root>
 *   <SwatchBar.SwatchGroup value={value} onValueChange={(newValue) => setSelected(newValue)}>
 *     <SwatchBar.SwatchColor value="1" color="crimson" />
 *     <SwatchBar.SwatchColor value="2" color="rebeccapurple" />
 *     <SwatchBar.SwatchColor value="3" color="gold" />
 *   </SwatchBar.SwatchGroup>
 *   <SwatchBar.Link href="/products/123">+3</SwatchBar.Link>
 * </SwatchBar.Root>
 * ```
 */
export const SwatchBarRoot = forwardRef((
  props: SwatchBarProps,
  forwardedRef: ForwardedRef<HTMLDivElement> | null,
): ReactElement => {
  const {
    className,
    children,
    ...rest
  } = props;

  return (
    <Toolbar.Root
      {...rest}
      className={cn('lui-sbar', className)}
      ref={forwardedRef}
    >
      {children}
    </Toolbar.Root>
  );
});

SwatchBarRoot.displayName = 'SwatchBar.Root';
