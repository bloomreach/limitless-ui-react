import cn from 'clsx';
import { ForwardedRef, forwardRef, ReactElement, useMemo } from 'react';
import { useTheme } from '../theme';

import type { NumberProps } from './number.types';

/**
 * Number component to format numbers correctly for all locales.
 * You can specify locale on the component or it can inherit it from the `<Theme>` component
 * ### Usage
 *
 * ```tsx
 * import { Number } from '@bloomreach/limitless-ui-react';
 *
 * <Theme>
 *   <Number value={1000} />
 * </Theme>
 *
 * <Number value={1000} locale="en-US" />
 * ```
 */
export const Number = forwardRef((
    props: NumberProps,
    forwardedRef: ForwardedRef<HTMLSpanElement> | null,
  ): ReactElement => {
    const {
      className,
      children,
      value,
      locale,
      ...rest
    } = props;

    const { locale: gLocale } = useTheme();
    const _locale = useMemo(() => locale || gLocale || undefined, [locale, gLocale]);
    const formattedValue = useMemo(() => {
      try {
        return new Intl.NumberFormat(_locale).format(value)
      } catch (e) {
        return value;
      }
    }, [value, _locale]);

    return (
      <span {...rest} className={cn('lui-number', className)} ref={forwardedRef}>
        {formattedValue}{children}
      </span>
    );
  });

  Number.displayName = "Number";
