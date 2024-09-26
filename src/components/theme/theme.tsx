import cn from 'clsx';
import { ForwardedRef, forwardRef, ReactElement, useMemo } from 'react';
import { DirectionProvider } from '@radix-ui/react-direction';
import type { ThemeProps } from './theme.types';
import { ThemeProvider } from './theme.context';

import './theme.scss';

/**
 * Provides a default theme for the Limitless UI Components
 *
 * ### Usage
 *
 * ```tsx
 * import { Theme } from '@bloomreach/limitless-ui-react';
 *
 * <Theme dir={dir} locale={locale} currency={currency}>
 *   {children}
 * </Theme>
 * ```
 */
export const Theme = forwardRef((
    props: ThemeProps,
    forwardedRef: ForwardedRef<HTMLDivElement> | null,
): ReactElement => {
  const {
    className,
    children,
    dir='ltr',
    currency,
    locale,
    ...rest
  } = props;

  const themeProps = useMemo(() => {
    return {
      dir,
      currency,
      locale,
    }
  }, [dir, currency, locale]);

  return (
    <div
      {...rest}
      className={cn('lcui-styled', className)}
      ref={forwardedRef}
      dir={dir}
    >
      <ThemeProvider value={themeProps}>
          {children}
      </ThemeProvider>
    </div>
  );
});
