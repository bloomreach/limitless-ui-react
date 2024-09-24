import cn from 'clsx';
import { ForwardedRef, forwardRef, ReactElement } from 'react';
import * as Toolbar from '@radix-ui/react-toolbar';
import { SwatchItemProps } from '../swatch-bar.types';

export const SwatchBarToggleItem = forwardRef((
    props: SwatchItemProps,
    forwardedRef: ForwardedRef<HTMLButtonElement> | null,
  ): ReactElement => {
    const {
      className,
      children,
      value,
      ...rest
    } = props;

    return (
      <Toolbar.ToggleItem
        {...rest}
        value={value}
        className={cn('lcui-swatch-item', className)}
        ref={forwardedRef}
      >
        {children}
      </Toolbar.ToggleItem>
    );
  });

  SwatchBarToggleItem.displayName = 'SwatchBar.SwatchItem';
