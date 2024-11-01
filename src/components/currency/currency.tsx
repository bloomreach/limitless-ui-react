import cn from 'clsx';
import { ForwardedRef, forwardRef, ReactElement, useMemo } from 'react';
import { useTheme } from '../theme';

import type { CurrencyProps } from './currency.types';
import { getCurrencySymbol } from '../../utils/get-currency-symbol';

/**
 * Currency component to show the currency symbol for all currencies and locales.
 * You can specify currency and locale on the component or it can inherit it from the `<Theme>` component
 * ### Usage
 *
 * ```tsx
 * import { Currency } from '@bloomreach/limitless-ui-react';
 *
 * <Theme>
 *   <Currency />
 * </Theme>
 *
 * <Currency currency="USD" locale="en-US" />
 * ```
 */

export const Currency = forwardRef((
    props: CurrencyProps,
    forwardedRef: ForwardedRef<HTMLSpanElement> | null,
  ): ReactElement => {
    const {
      className,
      children,
      currency,
      locale,
      ...rest
    } = props;

    const { currency: gCurrency, locale: gLocale } = useTheme();
    const _currency = useMemo(() => currency || gCurrency || undefined, [currency, gCurrency]);
    const _locale = useMemo(() => locale || gLocale || undefined, [locale, gLocale]);

    return (
      <span {...rest} className={cn('lui-price', className)} ref={forwardedRef}>
        {getCurrencySymbol(_currency, _locale)}
      </span>
    );
  });

  Currency.displayName = "Currency";
