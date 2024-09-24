import cn from 'clsx';
import { ForwardedRef, forwardRef, ReactElement, PropsWithChildren } from 'react';
import { DirectionProvider } from '@radix-ui/react-direction';

import './theme.scss';

/**
 * Provides a default theme for the Limitless UI Components
 *
 * ### Usage
 *
 * ```tsx
 * import { Theme } from '@bloomreach/limitless-ui-react';
 *
 * <Theme dir={dir} data-theme={theme}>
 *   {children}
 * </Theme>
 * ```
 */
export const Theme = forwardRef((
    props: PropsWithChildren & { className?: string, dir?: 'ltr' | 'rtl' },
    forwardedRef: ForwardedRef<HTMLDivElement> | null,
): ReactElement => {
  const {
    className,
    children,
    dir='ltr',
    ...rest
  } = props;

  return (
    <div
      {...rest}
      className={cn('lcui-styled', className)} 
      ref={forwardedRef}
      dir={dir}
    >
      <DirectionProvider dir={dir}>
        {children}
      </DirectionProvider>
    </div>
  );
});


