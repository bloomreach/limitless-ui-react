import cn from 'clsx';
import { ForwardedRef, forwardRef, ReactElement } from 'react';
import * as Toolbar from '@radix-ui/react-toolbar';
import { SwatchBarLinkProps } from '../swatch-bar.types';

export const SwatchBarLink = forwardRef((
    props: SwatchBarLinkProps,
    forwardedRef: ForwardedRef<HTMLAnchorElement> | null,
  ): ReactElement => {
    const {
      className,
      children,
      ...rest
    } = props;

    return (
      <Toolbar.Link
        {...rest}
        className={cn('lcui-sbar-link', className)}
        ref={forwardedRef}
      >
        {children}
      </Toolbar.Link>
    );
  });

  SwatchBarLink.displayName = 'SwatchBar.Link';
