import cn from 'clsx';
import { ForwardedRef, forwardRef, ReactElement, useMemo } from 'react';
import { useTheme } from '../theme';
import { formatPrice } from '../../utils/format-price';

import type { PriceProps } from './price.types';

/**
 * Price component to format price correctly for all currencies and locales.
 * You can specify currency and locale on the component or it can inherit it from the `<Theme>` component
 * ### Usage
 *
 * ```tsx
 * import { Price } from '@bloomreach/limitless-ui-react';
 *
 * <Theme>
 *   <Price value={1000} />
 * </Theme>
 *
 * <Price value={1000} currency="USD" locale="en-US" />
 * ```
 */
export const Price = forwardRef((
    props: PriceProps,
    forwardedRef: ForwardedRef<HTMLSpanElement> | null,
  ): ReactElement => {
    const {
      className,
      children,
      value,
      currency,
      locale,
      ...rest
    } = props;

    const { currency: gCurrency, locale: gLocale } = useTheme();
    const _currency = useMemo(() => currency || gCurrency || undefined, [currency, gCurrency]);
    const _locale = useMemo(() => locale || gLocale || undefined, [locale, gLocale]);

    return (
      <span {...rest} className={cn('lui-price', className)} ref={forwardedRef}>
        {formatPrice(value, _currency, _locale)}
      </span>
    );
  });

  Price.displayName = "Price";
