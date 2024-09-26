import cn from 'clsx';
import { ForwardedRef, forwardRef, ReactElement } from 'react';
import * as Toolbar from '@radix-ui/react-toolbar';
import { SwatchBarButtonProps } from '../swatch-bar.types';

export const SwatchBarButton = forwardRef((
    props: SwatchBarButtonProps,
    forwardedRef: ForwardedRef<HTMLButtonElement> | null,
  ): ReactElement => {
    const {
      className,
      children,
      ...rest
    } = props;

    return (
      <Toolbar.Button
        {...rest}
        className={cn('lui-sbar-l', className)}
        ref={forwardedRef}
      >
        {children}
      </Toolbar.Button>
    );
  });

  SwatchBarButton.displayName = 'SwatchBar.Button';
