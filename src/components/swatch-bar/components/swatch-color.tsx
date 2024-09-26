import cn from 'clsx';
import { CSSProperties, ForwardedRef, forwardRef, ReactElement } from 'react';
import * as Toolbar from '@radix-ui/react-toolbar';
import { SwatchColorProps } from '../swatch-bar.types';

export const SwatchColor = forwardRef((
    props: SwatchColorProps,
    forwardedRef: ForwardedRef<HTMLButtonElement> | null,
  ): ReactElement => {
    const {
      className,
      value,
      color,
      ...rest
    } = props;

    return (
      <Toolbar.ToggleItem
        aria-label={value}
        {...rest}
        value={value}
        className={cn('lcui-swatch-item lcui-swatch-item--color', className)}
        style={{'--lcui-swatch-btn-border-color--active': color} as CSSProperties}
        ref={forwardedRef}
      >
        <div className="lcui-swatch-color" style={{backgroundColor: color}}></div>
      </Toolbar.ToggleItem>
    );
  });

  SwatchColor.displayName = 'SwatchBar.SwatchColor';
