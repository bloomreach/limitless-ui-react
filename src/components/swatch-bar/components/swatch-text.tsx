import cn from 'clsx';
import { ForwardedRef, forwardRef, ReactElement } from 'react';
import * as Toolbar from '@radix-ui/react-toolbar';
import { SwatchItemProps } from '../swatch-bar.types';

export const SwatchText = forwardRef((
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
        aria-label={value}
        {...rest}
        value={value}
        className={cn('lcui-swatch-item lcui-swatch-item--text', className)}
        ref={forwardedRef}
      >
        {children}
      </Toolbar.ToggleItem>
    );
  });

  SwatchText.displayName = 'SwatchBar.SwatchText';
