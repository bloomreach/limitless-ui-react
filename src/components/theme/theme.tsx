import cn from 'clsx';
import { ForwardedRef, forwardRef, ReactElement, useMemo } from 'react';
import type { ThemeProps } from './theme.types';
import { ThemeProvider } from './theme.context';

import './theme.scss';

/**
 * Provides a default theme for the Limitless UI Components and provides
 * global configuration for text direction, locale, currency to other components
 * You can also hook into the global config from your own components using the `useTheme` hook
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
    disableStyles,
    ...rest
  } = props;

  const themeProps = useMemo(() => {
    return {
      dir,
      currency,
      locale,
      disableStyles,
    }
  }, [dir, currency, locale, disableStyles]);

  return (
    <div
      {...rest}
      className={cn({'lui-styled': !disableStyles}, className)}
      ref={forwardedRef}
      dir={dir}
    >
      <ThemeProvider value={themeProps}>
          {children}
      </ThemeProvider>
    </div>
  );
});
