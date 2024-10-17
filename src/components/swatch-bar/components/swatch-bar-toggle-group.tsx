import cn from 'clsx';
import { ForwardedRef, forwardRef, ReactElement, RefAttributes } from 'react';
import * as Toolbar from '@radix-ui/react-toolbar';
import { SwatchBarSwatchGroupProps } from '../swatch-bar.types';

export const SwatchBarToggleGroup = forwardRef((
    props: SwatchBarSwatchGroupProps & RefAttributes<HTMLDivElement>,
    forwardedRef: ForwardedRef<HTMLDivElement> | null,
): ReactElement => {
    const {
      className,
      children,
      ...rest
    } = props;

    return (
      <Toolbar.ToggleGroup
        {...rest}
        className={cn('lui-sbar-sg', className)}
        ref={forwardedRef}
        type="single"
      >
        {children}
      </Toolbar.ToggleGroup>
    );
});

SwatchBarToggleGroup.displayName = 'SwatchBar.SwatchGroup';
