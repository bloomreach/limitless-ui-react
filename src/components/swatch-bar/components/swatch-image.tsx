import cn from 'clsx';
import { ForwardedRef, forwardRef, ReactElement } from 'react';
import * as Toolbar from '@radix-ui/react-toolbar';
import { SwatchItemProps } from '../swatch-bar.types';

export const SwatchImage = forwardRef((
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
        className={cn('lui-swatch-item lui-swatch-item--image', className)}
        ref={forwardedRef}
      >
        <div className="lui-swatch-image">{children}</div>
      </Toolbar.ToggleItem>
    );
  });

  SwatchImage.displayName = 'SwatchBar.SwatchImage';
